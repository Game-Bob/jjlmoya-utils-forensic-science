export function getReactionColor(colorHex: string, intensity: number): string {
  if (colorHex === 'clear' || !colorHex) return 'rgba(255, 255, 255, 0.15)';
  if (colorHex.startsWith('#')) {
    const r = parseInt(colorHex.slice(1, 3), 16);
    const g = parseInt(colorHex.slice(3, 5), 16);
    const b = parseInt(colorHex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${intensity.toFixed(2)})`;
  }
  return colorHex;
}

export function getGlowOpacity(elapsedMs: number, durationMs: number): number {
  if (durationMs <= 0) return 0;
  const ratio = Math.max(0, Math.min(1, elapsedMs / durationMs));
  return 1 - ratio;
}
