export interface StatureInput {
  bone: 'femur' | 'tibia' | 'humerus' | 'fibula' | 'radius' | 'ulna';
  length: number;
  sex: 'male' | 'female';
  ancestry: 'white' | 'black' | 'asian';
  age: number;
}

export interface StatureResult {
  stature: number;
  see: number;
  minStature: number;
  maxStature: number;
  formulaText: string;
  coef: {
    multiplier: number;
    constant: number;
    ageLoss: number;
    see: number;
  };
  fallbackWarning: boolean;
}

interface RegressionCoef {
  multiplier: number;
  constant: number;
  see: number;
}

const equations: Record<string, Record<string, RegressionCoef>> = {
  male: {
    white_femur: { multiplier: 2.32, constant: 65.53, see: 3.94 },
    white_tibia: { multiplier: 2.42, constant: 81.93, see: 4.00 },
    white_humerus: { multiplier: 2.89, constant: 78.10, see: 4.57 },
    white_fibula: { multiplier: 2.60, constant: 75.50, see: 3.86 },
    white_radius: { multiplier: 3.79, constant: 79.42, see: 4.66 },
    white_ulna: { multiplier: 3.76, constant: 75.55, see: 4.72 },
    black_femur: { multiplier: 2.10, constant: 72.22, see: 3.91 },
    black_tibia: { multiplier: 2.19, constant: 85.36, see: 3.96 },
    black_humerus: { multiplier: 2.88, constant: 75.48, see: 4.23 },
    black_fibula: { multiplier: 2.34, constant: 80.07, see: 4.02 },
    black_radius: { multiplier: 3.32, constant: 85.43, see: 4.57 },
    black_ulna: { multiplier: 3.20, constant: 82.77, see: 4.74 },
    asian_femur: { multiplier: 2.15, constant: 72.57, see: 3.80 },
    asian_tibia: { multiplier: 2.39, constant: 81.45, see: 3.27 },
    asian_humerus: { multiplier: 2.68, constant: 83.19, see: 4.25 },
    asian_fibula: { multiplier: 2.40, constant: 80.56, see: 3.24 },
    asian_radius: { multiplier: 3.54, constant: 82.00, see: 4.60 },
    asian_ulna: { multiplier: 3.48, constant: 77.45, see: 4.66 }
  },
  female: {
    white_femur: { multiplier: 2.47, constant: 54.10, see: 3.72 },
    white_tibia: { multiplier: 2.90, constant: 61.53, see: 3.66 },
    white_humerus: { multiplier: 3.36, constant: 57.97, see: 4.45 },
    white_fibula: { multiplier: 2.93, constant: 59.61, see: 3.57 },
    white_radius: { multiplier: 4.74, constant: 54.93, see: 4.45 },
    white_ulna: { multiplier: 4.27, constant: 57.76, see: 4.30 },
    black_femur: { multiplier: 2.28, constant: 59.76, see: 3.41 },
    black_tibia: { multiplier: 2.45, constant: 72.65, see: 3.70 },
    black_humerus: { multiplier: 3.08, constant: 64.67, see: 4.25 },
    black_fibula: { multiplier: 2.49, constant: 70.90, see: 3.80 },
    black_radius: { multiplier: 3.67, constant: 71.79, see: 4.59 },
    black_ulna: { multiplier: 3.31, constant: 75.38, see: 4.83 }
  }
};

function getCoef(sex: string, ancestry: string, bone: string) {
  const key = `${ancestry}_${bone}`;
  const coefMap = equations[sex];
  return coefMap ? coefMap[key] : null;
}

function computeStature(multiplier: number, constant: number, length: number, age: number) {
  const raw = multiplier * length + constant;
  const ageLoss = age > 30 ? 0.06 * (age - 30) : 0;
  return {
    val: raw - ageLoss,
    ageLoss
  };
}

function defaultResult(): StatureResult {
  return {
    stature: 0,
    see: 0,
    minStature: 0,
    maxStature: 0,
    formulaText: '',
    coef: { multiplier: 0, constant: 0, ageLoss: 0, see: 0 },
    fallbackWarning: false
  };
}

export function estimateStature(input: StatureInput): StatureResult {
  const isFallback = input.sex === 'female' && input.ancestry === 'asian';
  const ancestry = isFallback ? 'white' : input.ancestry;
  const coef = getCoef(input.sex, ancestry, input.bone);

  if (!coef) return defaultResult();

  const { val, ageLoss } = computeStature(coef.multiplier, coef.constant, input.length, input.age);
  const ageText = input.age > 30 ? ` - 0.06 * (${input.age} - 30)` : '';
  const formulaText = `Stature = ${coef.multiplier} * ${input.length} + ${coef.constant}${ageText} ± ${coef.see}`;

  return {
    stature: Math.round(val * 100) / 100,
    see: Math.round(coef.see * 100) / 100,
    minStature: Math.round((val - coef.see) * 100) / 100,
    maxStature: Math.round((val + coef.see) * 100) / 100,
    formulaText,
    coef: {
      multiplier: coef.multiplier,
      constant: coef.constant,
      ageLoss: Math.round(ageLoss * 100) / 100,
      see: coef.see
    },
    fallbackWarning: isFallback
  };
}
