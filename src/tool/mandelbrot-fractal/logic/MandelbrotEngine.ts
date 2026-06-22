export interface MandelbrotViewport {
  centerX: number;
  centerY: number;
  scale: number;
  width: number;
  height: number;
}

export interface MandelbrotSample {
  escaped: boolean;
  iterations: number;
  smooth: number;
}

export interface MandelbrotStats {
  magnification: number;
  visibleWidth: number;
  visibleHeight: number;
  centerLabel: string;
}

export class MandelbrotEngine {
  public sample(real: number, imaginary: number, maxIterations: number): MandelbrotSample {
    let zr = 0;
    let zi = 0;
    let iterations = 0;

    while (zr * zr + zi * zi <= 4 && iterations < maxIterations) {
      const nextR = zr * zr - zi * zi + real;
      zi = 2 * zr * zi + imaginary;
      zr = nextR;
      iterations += 1;
    }

    if (iterations === maxIterations) {
      return { escaped: false, iterations, smooth: iterations };
    }

    const magnitude = Math.sqrt(zr * zr + zi * zi);
    const smooth = iterations + 1 - Math.log(Math.log(Math.max(magnitude, 2))) / Math.log(2);
    return { escaped: true, iterations, smooth };
  }

  public pixelToComplex(x: number, y: number, viewport: MandelbrotViewport): { real: number; imaginary: number } {
    const aspect = viewport.height / viewport.width;
    const visibleWidth = 3.5 / viewport.scale;
    const visibleHeight = visibleWidth * aspect;

    return {
      real: viewport.centerX + (x / viewport.width - 0.5) * visibleWidth,
      imaginary: viewport.centerY + (y / viewport.height - 0.5) * visibleHeight,
    };
  }

  public getStats(viewport: MandelbrotViewport): MandelbrotStats {
    const aspect = viewport.height / viewport.width;
    const visibleWidth = 3.5 / viewport.scale;
    const visibleHeight = visibleWidth * aspect;

    return {
      magnification: viewport.scale,
      visibleWidth,
      visibleHeight,
      centerLabel: `${viewport.centerX.toFixed(6)} ${viewport.centerY >= 0 ? '+' : '-'} ${Math.abs(viewport.centerY).toFixed(6)}i`,
    };
  }
}
