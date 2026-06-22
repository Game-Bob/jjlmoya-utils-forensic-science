export interface VerdictLevel {
  percentage: number;
  verdict: string;
  detail: string;
}

export const VERDICTS_ES: VerdictLevel[] = [
  {
    percentage: Infinity,
    verdict: "Casi Ciertamente Simulado",
    detail: "Estás casi ciertamente en una simulación. Los errores en el sistema son solo cuestión de tiempo.",
  },
  {
    percentage: 50,
    verdict: "Probablemente Simulado",
    detail: "Es más probable que seas un código que un ser biológico original.",
  },
  {
    percentage: 10,
    verdict: "Incierto",
    detail: "La realidad física parece resistir, pero la duda sistemática es razonable.",
  },
  {
    percentage: 0,
    verdict: "Probablemente Original",
    detail: "Probablemente seas un original biológico. Disfruta de la realidad 'real' mientras dure.",
  },
];

export const VERDICTS_EN: VerdictLevel[] = [
  {
    percentage: Infinity,
    verdict: "Almost Certainly Simulated",
    detail: "You are almost certainly in a simulation. System errors are just a matter of time.",
  },
  {
    percentage: 50,
    verdict: "Probably Simulated",
    detail: "It's more likely you're code than an original biological being.",
  },
  {
    percentage: 10,
    verdict: "Uncertain",
    detail: "Physical reality seems to resist, but systematic doubt is reasonable.",
  },
  {
    percentage: 0,
    verdict: "Probably Original",
    detail: "You're probably an original biological being. Enjoy the 'real' reality while it lasts.",
  },
];

export const VERDICTS_FR: VerdictLevel[] = [
  {
    percentage: Infinity,
    verdict: "Presque Certainement Simulé",
    detail: "Vous êtes presque certainement dans une simulation. Les erreurs du système ne sont qu'une question de temps.",
  },
  {
    percentage: 50,
    verdict: "Probablement Simulé",
    detail: "Il est plus probable que vous soyez du code qu'un être biologique original.",
  },
  {
    percentage: 10,
    verdict: "Incertain",
    detail: "La réalité physique semble résister, mais le doute systématique est raisonnable.",
  },
  {
    percentage: 0,
    verdict: "Probablement Original",
    detail: "Vous êtes probablement un être biologique original. Profitez de la réalité 'réelle' tant qu'elle dure.",
  },
];

export const DEFAULT_VERDICT_ES = {
  verdict: "Probabilidad de Simulación",
  detail: "Analiza los parámetros para ver si vives en una simulación.",
};

export const DEFAULT_VERDICT_EN = {
  verdict: "Simulation Probability",
  detail: "Analyze the parameters to see if you live in a simulation.",
};

export const DEFAULT_VERDICT_FR = {
  verdict: "Probabilité de Simulation",
  detail: "Analysez les paramètres pour voir si vous vivez dans une simulation.",
};
