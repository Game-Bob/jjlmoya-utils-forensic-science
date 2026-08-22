export function createHammingWindow(size: number): Float32Array {
  const window = new Float32Array(size);
  const denominator = Math.max(1, size - 1);
  for (let index = 0; index < size; index += 1) {
    window[index] = 0.54 - (0.46 * Math.cos((2 * Math.PI * index) / denominator));
  }
  return window;
}

function reverseBits(value: number, bits: number): number {
  let reversed = 0;
  let current = value;
  for (let index = 0; index < bits; index += 1) {
    reversed = (reversed << 1) | (current & 1);
    current >>= 1;
  }
  return reversed;
}

function reorder(real: Float64Array, imaginary: Float64Array): void {
  const bits = Math.log2(real.length);
  for (let index = 0; index < real.length; index += 1) {
    const target = reverseBits(index, bits);
    if (target <= index) continue;
    [real[index], real[target]] = [real[target]!, real[index]!];
    [imaginary[index], imaginary[target]] = [imaginary[target]!, imaginary[index]!];
  }
}

function transformStage(real: Float64Array, imaginary: Float64Array, size: number): void {
  const half = size / 2;
  const angleStep = (-2 * Math.PI) / size;
  for (let start = 0; start < real.length; start += size) {
    for (let offset = 0; offset < half; offset += 1) {
      const angle = angleStep * offset;
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);
      const upper = start + offset;
      const lower = upper + half;
      const upperReal = real[upper]!;
      const upperImaginary = imaginary[upper]!;
      const lowerReal = real[lower]!;
      const lowerImaginary = imaginary[lower]!;
      const realPart = (lowerReal * cosine) - (lowerImaginary * sine);
      const imaginaryPart = (lowerReal * sine) + (lowerImaginary * cosine);
      real[lower] = upperReal - realPart;
      imaginary[lower] = upperImaginary - imaginaryPart;
      real[upper] = upperReal + realPart;
      imaginary[upper] = upperImaginary + imaginaryPart;
    }
  }
}

export function fftMagnitudes(input: Float32Array): Float64Array {
  const real = Float64Array.from(input);
  const imaginary = new Float64Array(input.length);
  reorder(real, imaginary);
  for (let size = 2; size <= input.length; size *= 2) transformStage(real, imaginary, size);
  const magnitudes = new Float64Array(input.length / 2);
  for (let index = 0; index < magnitudes.length; index += 1) {
    magnitudes[index] = Math.hypot(real[index]!, imaginary[index]!) / input.length;
  }
  return magnitudes;
}
