export interface ExifMetadata {
  make?: string;
  model?: string;
  software?: string;
  dateTime?: string;
  latitude?: number;
  longitude?: number;
}

export interface IntegrityFinding {
  severity: 'info' | 'warning' | 'alert';
  title: string;
  detail: string;
}

export interface IntegrityResult {
  score: number;
  classification: 'no-obvious-indicators' | 'review-recommended' | 'editing-signatures-detected';
  format: string;
  findings: IntegrityFinding[];
  signatures: string[];
}

export interface HexSegment {
  offset: number;
  bytes: number[];
  kind: 'header' | 'metadata' | 'image';
}

interface TiffContext {
  buffer: ArrayBuffer;
  view: DataView;
  tiffStart: number;
  littleEndian: boolean;
}

const decoder = new TextDecoder('latin1');
const EDITOR_SIGNATURES = ['Adobe Photoshop', 'Adobe Lightroom', 'GIMP', 'Snapseed', 'Pixelmator', 'Canva', 'ImageMagick'];

function readAscii(bytes: Uint8Array, start: number, length: number): string {
  return decoder.decode(bytes.slice(start, start + length)).replace(/\0+$/, '').trim();
}

function rational(view: DataView, offset: number, littleEndian: boolean): number {
  const numerator = view.getUint32(offset, littleEndian);
  const denominator = view.getUint32(offset + 4, littleEndian);
  return denominator === 0 ? 0 : numerator / denominator;
}

function getUnitSize(type: number): number {
  switch (type) {
    case 3:
      return 2;
    case 4:
      return 4;
    case 5:
      return 8;
    default:
      return 1;
  }
}

function getValueAddress(context: TiffContext, type: number, count: number, valueOffset: number): number {
  return count * getUnitSize(type) <= 4 ? valueOffset : context.tiffStart + context.view.getUint32(valueOffset, context.littleEndian);
}

function readTiffValue(context: TiffContext, type: number, count: number, valueOffset: number): string | number {
  const { buffer, view, littleEndian } = context;
  const address = getValueAddress(context, type, count, valueOffset);
  switch (type) {
    case 2:
      return readAscii(new Uint8Array(buffer), address, count);
    case 3:
      return view.getUint16(address, littleEndian);
    case 4:
      return view.getUint32(address, littleEndian);
    case 5:
      return rational(view, address, littleEndian);
    default:
      return '';
  }
}

function readEntries(context: TiffContext, offset: number, callback: (tag: number, type: number, count: number, valueOffset: number) => void): void {
  const { buffer, view, tiffStart, littleEndian } = context;
  if (offset < tiffStart || offset + 2 >= buffer.byteLength) return;
  const entryCount = view.getUint16(offset, littleEndian);
  for (let index = 0; index < entryCount; index++) {
    const entry = offset + 2 + index * 12;
    if (entry + 12 > buffer.byteLength) break;
    callback(
      view.getUint16(entry, littleEndian),
      view.getUint16(entry + 2, littleEndian),
      view.getUint32(entry + 4, littleEndian),
      entry + 8,
    );
  }
}

function applyIfdMetadata(metadata: ExifMetadata, tag: number, value: string | number): void {
  switch (tag) {
    case 0x010f:
      metadata.make = String(value);
      break;
    case 0x0110:
      metadata.model = String(value);
      break;
    case 0x0131:
      metadata.software = String(value);
      break;
    case 0x0132:
      metadata.dateTime = String(value);
      break;
  }
}

function toDecimalDegrees(values: number[]): number {
  return (values[0] ?? 0) + (values[1] ?? 0) / 60 + (values[2] ?? 0) / 3600;
}

function detectFormat(bytes: Uint8Array, text: string): string {
  if (bytes[0] === 0xff && bytes[1] === 0xd8) return 'JPEG';
  if (text.startsWith('\u0089PNG')) return 'PNG';
  return 'Unknown';
}

function collectSignatures(text: string, metadata: ExifMetadata): string[] {
  const signatures = EDITOR_SIGNATURES.filter((name) => text.toLowerCase().includes(name.toLowerCase()));
  if (metadata.software && !signatures.includes(metadata.software)) signatures.push(metadata.software);
  return signatures;
}

function createSignatureFinding(signatures: string[]): IntegrityFinding {
  if (signatures.length) {
    return { severity: 'alert', title: 'Image-processing software signature found', detail: signatures.join(', ') };
  }
  return { severity: 'info', title: 'No known editor name found', detail: 'Absence of a text signature does not prove that the image is original.' };
}

function createHeaderFinding(format: string): IntegrityFinding {
  if (format === 'Unknown') {
    return {
      severity: 'warning',
      title: 'Unrecognized file signature',
      detail: 'The header does not match the JPEG or PNG signatures supported by this educational analyzer.',
    };
  }
  return {
    severity: 'info',
    title: `${format} signature is structurally recognizable`,
    detail: 'The leading bytes are consistent with the detected image container.',
  };
}

function getFindingPenalty(finding: IntegrityFinding): number {
  switch (finding.severity) {
    case 'alert':
      return 35;
    case 'warning':
      return 12;
    default:
      return 0;
  }
}

function getClassification(score: number, signatures: string[]): IntegrityResult['classification'] {
  if (signatures.length) return 'editing-signatures-detected';
  if (score < 75) return 'review-recommended';
  return 'no-obvious-indicators';
}

function readPrimaryIfd(context: TiffContext, metadata: ExifMetadata): { exifIfd: number; gpsIfd: number } {
  const firstIfd = context.tiffStart + context.view.getUint32(context.tiffStart + 4, context.littleEndian);
  let exifIfd = 0;
  let gpsIfd = 0;

  readEntries(context, firstIfd, (tag, type, count, valueOffset) => {
    const value = readTiffValue(context, type, count, valueOffset);
    applyIfdMetadata(metadata, tag, value);
    if (tag === 0x8769) exifIfd = context.tiffStart + Number(value);
    if (tag === 0x8825) gpsIfd = context.tiffStart + Number(value);
  });

  return { exifIfd, gpsIfd };
}

function readExifDate(context: TiffContext, metadata: ExifMetadata, exifIfd: number): void {
  if (!exifIfd) return;
  readEntries(context, exifIfd, (tag, type, count, valueOffset) => {
    if (tag === 0x9003 || tag === 0x9004) {
      metadata.dateTime = String(readTiffValue(context, type, count, valueOffset));
    }
  });
}

function readGps(context: TiffContext, metadata: ExifMetadata, gpsIfd: number): void {
  if (!gpsIfd) return;

  let latitudeRef = 'N';
  let longitudeRef = 'E';
  let latitude: number[] = [];
  let longitude: number[] = [];

  readEntries(context, gpsIfd, (tag, type, count, valueOffset) => {
    const pointer = getValueAddress(context, type, count, valueOffset);
    if (tag === 1) latitudeRef = readAscii(new Uint8Array(context.buffer), pointer, count);
    if (tag === 3) longitudeRef = readAscii(new Uint8Array(context.buffer), pointer, count);
    if (tag === 2) latitude = [0, 1, 2].map((index) => rational(context.view, pointer + index * 8, context.littleEndian));
    if (tag === 4) longitude = [0, 1, 2].map((index) => rational(context.view, pointer + index * 8, context.littleEndian));
  });

  if (latitude.length === 3) metadata.latitude = toDecimalDegrees(latitude);
  if (longitude.length === 3) metadata.longitude = toDecimalDegrees(longitude);
  if (metadata.latitude !== undefined && latitudeRef === 'S') metadata.latitude *= -1;
  if (metadata.longitude !== undefined && longitudeRef === 'W') metadata.longitude *= -1;
}

export class ExifExtractor {
  extract(buffer: ArrayBuffer): ExifMetadata {
    const bytes = new Uint8Array(buffer);
    for (let index = 2; index < bytes.length - 10; index++) {
      if (bytes[index] === 0xff && bytes[index + 1] === 0xe1 && readAscii(bytes, index + 4, 4) === 'Exif') {
        return this.parseTiff(buffer, index + 10);
      }
    }
    return {};
  }

  private parseTiff(buffer: ArrayBuffer, tiffStart: number): ExifMetadata {
    const view = new DataView(buffer);
    const byteOrder = view.getUint16(tiffStart, false);
    const littleEndian = byteOrder === 0x4949;
    if (!littleEndian && byteOrder !== 0x4d4d) return {};

    const context: TiffContext = { buffer, view, tiffStart, littleEndian };
    const metadata: ExifMetadata = {};
    const { exifIfd, gpsIfd } = readPrimaryIfd(context, metadata);
    readExifDate(context, metadata, exifIfd);
    readGps(context, metadata, gpsIfd);
    return metadata;
  }
}

export class IntegrityChecker {
  inspect(buffer: ArrayBuffer, metadata: ExifMetadata): IntegrityResult {
    const bytes = new Uint8Array(buffer);
    const text = decoder.decode(bytes);
    const format = detectFormat(bytes, text);
    const signatures = collectSignatures(text, metadata);
    const findings: IntegrityFinding[] = [];

    findings.push(createHeaderFinding(format));
    findings.push(createSignatureFinding(signatures));
    if (!metadata.dateTime) findings.push({ severity: 'warning', title: 'Capture timestamp unavailable', detail: 'The EXIF capture date is missing or could not be decoded.' });
    if (!metadata.make && !metadata.model) findings.push({ severity: 'warning', title: 'Camera identity unavailable', detail: 'No readable camera make or model was found in EXIF.' });

    const penalty = findings.reduce((total, finding) => total + getFindingPenalty(finding), 0);
    const score = Math.max(0, 100 - penalty);
    return {
      score,
      classification: getClassification(score, signatures),
      format,
      findings,
      signatures,
    };
  }
}

export function createHexSegments(buffer: ArrayBuffer, limit = 512): HexSegment[] {
  const bytes = Array.from(new Uint8Array(buffer).slice(0, limit));
  const segments: HexSegment[] = [];
  for (let offset = 0; offset < bytes.length; offset += 16) {
    let kind: HexSegment['kind'] = 'image';
    if (offset < 16) kind = 'header';
    else if (offset < 256) kind = 'metadata';
    segments.push({
      offset,
      bytes: bytes.slice(offset, offset + 16),
      kind,
    });
  }
  return segments;
}
