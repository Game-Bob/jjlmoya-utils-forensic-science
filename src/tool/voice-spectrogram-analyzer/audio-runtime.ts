const MAX_FILE_BYTES = 25 * 1024 * 1024;
const MAX_SECONDS = 20;

export interface DecodedAudio {
  samples: Float32Array;
  sampleRate: number;
}

export interface PlaybackCallbacks {
  progress: (ratio: number) => void;
  ended: () => void;
}

function getAudioContext(): AudioContext {
  const Constructor = window.AudioContext;
  if (!Constructor) throw new Error('browser');
  return new Constructor();
}

function downmix(buffer: AudioBuffer): Float32Array {
  const length = Math.min(buffer.length, Math.floor(buffer.sampleRate * MAX_SECONDS));
  const output = new Float32Array(length);
  for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
    const source = buffer.getChannelData(channel);
    for (let index = 0; index < length; index += 1) output[index] = output[index]! + (source[index]! / buffer.numberOfChannels);
  }
  return output;
}

export async function decodeAudioFile(file: File): Promise<DecodedAudio> {
  if (file.size > MAX_FILE_BYTES) throw new Error('limit');
  const context = getAudioContext();
  try {
    const buffer = await context.decodeAudioData(await file.arrayBuffer());
    return { samples: downmix(buffer), sampleRate: buffer.sampleRate };
  } finally {
    await context.close();
  }
}

export class AudioPlayer {
  private context: AudioContext | null = null;
  private source: AudioBufferSourceNode | null = null;
  private frame = 0;

  stop(): void {
    cancelAnimationFrame(this.frame);
    try {
      if (this.source) this.source.onended = null;
      this.source?.stop();
    } catch {}
    this.source = null;
  }

  async play(audio: DecodedAudio, callbacks: PlaybackCallbacks): Promise<void> {
    this.stop();
    this.context ??= getAudioContext();
    await this.context.resume();
    const buffer = this.context.createBuffer(1, audio.samples.length, audio.sampleRate);
    buffer.copyToChannel(new Float32Array(audio.samples), 0);
    const source = this.context.createBufferSource();
    source.buffer = buffer;
    source.connect(this.context.destination);
    const started = this.context.currentTime;
    source.onended = callbacks.ended;
    this.source = source;
    source.start();
    const tick = (): void => {
      if (this.source !== source || !this.context) return;
      callbacks.progress(Math.min(1, (this.context.currentTime - started) / buffer.duration));
      this.frame = requestAnimationFrame(tick);
    };
    tick();
  }
}
