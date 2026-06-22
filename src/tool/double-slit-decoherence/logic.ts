export interface DoubleSlitConfig {
  detectorStrength: number;
  slitSeparation: number;
  slitWidth: number;
  wavelength: number;
  screenDistance: number;
}

export interface ScreenSample {
  y: number;
  waveIntensity: number;
  particleIntensity: number;
  observedIntensity: number;
}

export interface PatternMetrics {
  fringeVisibility: number;
  centralPeak: number;
  whichPath: number;
  coherence: number;
}

function clamp(value: number, min = 0, max = 1): number {
  return Math.min(max, Math.max(min, value));
}

function sinc(value: number): number {
  if (Math.abs(value) < 1e-6) return 1;
  return Math.sin(value) / value;
}

export function calculateDoubleSlitPattern(config: DoubleSlitConfig, sampleCount = 181): ScreenSample[] {
  const detector = clamp(config.detectorStrength);
  const coherence = 1 - detector;
  const separation = Math.max(0.2, config.slitSeparation);
  const slitWidth = Math.max(0.05, config.slitWidth);
  const wavelength = Math.max(0.05, config.wavelength);
  const distance = Math.max(0.5, config.screenDistance);
  const range = 3.2;

  return Array.from({ length: sampleCount }, (_, index) => {
    const normalized = index / Math.max(1, sampleCount - 1);
    const y = -range + normalized * range * 2;
    const angle = Math.atan(y / distance);
    const beta = Math.PI * slitWidth * Math.sin(angle) / wavelength;
    const phase = Math.PI * separation * Math.sin(angle) / wavelength;
    const envelope = sinc(beta) ** 2;
    const interference = 0.5 + 0.5 * Math.cos(2 * phase);
    const waveIntensity = envelope * interference;
    const particleLeft = Math.exp(-((y - separation * 0.42) ** 2) / (0.72 + slitWidth * 0.3));
    const particleRight = Math.exp(-((y + separation * 0.42) ** 2) / (0.72 + slitWidth * 0.3));
    const particleIntensity = envelope * 0.34 + (particleLeft + particleRight) * 0.36;
    const observedIntensity = waveIntensity * coherence + particleIntensity * detector;

    return {
      y,
      waveIntensity,
      particleIntensity,
      observedIntensity,
    };
  });
}

export function measurePattern(samples: ScreenSample[], detectorStrength: number): PatternMetrics {
  const values = samples.map((sample) => sample.observedIntensity);
  const max = Math.max(...values, 0);
  const min = Math.min(...values, 0);
  const central = samples[Math.floor(samples.length / 2)]?.observedIntensity ?? 0;
  const fringeVisibility = max + min === 0 ? 0 : clamp((max - min) / (max + min));

  return {
    fringeVisibility,
    centralPeak: max === 0 ? 0 : clamp(central / max),
    whichPath: clamp(detectorStrength),
    coherence: clamp(1 - detectorStrength),
  };
}
