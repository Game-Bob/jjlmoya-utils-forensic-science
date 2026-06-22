export interface InterferenceLevel {
  threshold: number;
  label: string;
  color: string;
  description: string;
}

export const INTERFERENCE_LEVELS_ES: InterferenceLevel[] = [
  {
    threshold: 2,
    label: "Señal Limpia",
    color: "emerald",
    description: "Tu conexión es estable. No hay interferencias electromagnéticas significativas detectadas.",
  },
  {
    threshold: 10,
    label: "Interferencia Leve",
    color: "yellow",
    description: "Se detecta algo de ruido en la señal. Podría ser actividad normal o dispositivos Bluetooth cercanos.",
  },
  {
    threshold: 30,
    label: "Interferencia Alta",
    color: "orange",
    description: "Ruido electromagnético considerable detectado. Si el microondas está encendido, es posible que tenga fugas leves.",
  },
];

export const INTERFERENCE_LEVELS_EN: InterferenceLevel[] = [
  {
    threshold: 2,
    label: "Clean Signal",
    color: "emerald",
    description: "Your connection is stable. No significant electromagnetic interference detected.",
  },
  {
    threshold: 10,
    label: "Light Interference",
    color: "yellow",
    description: "Some noise detected in the signal. Could be normal activity or nearby Bluetooth devices.",
  },
  {
    threshold: 30,
    label: "High Interference",
    color: "orange",
    description: "Considerable electromagnetic noise detected. If your microwave is on, it may have minor leaks.",
  },
];

export const INTERFERENCE_LEVELS_FR: InterferenceLevel[] = [
  {
    threshold: 2,
    label: "Signal Propre",
    color: "emerald",
    description: "Votre connexion est stable. Aucune interférence électromagnétique significative détectée.",
  },
  {
    threshold: 10,
    label: "Interférence Légère",
    color: "yellow",
    description: "Du bruit détecté dans le signal. Pourrait être une activité normale ou des appareils Bluetooth à proximité.",
  },
  {
    threshold: 30,
    label: "Interférence Élevée",
    color: "orange",
    description: "Bruit électromagnétique considérable détecté. Si votre micro-ondes est allumé, il peut y avoir des fuites mineures.",
  },
];

export const CRITICAL_INTERFERENCE_ES = {
  label: "FUGA CRÍTICA / RUIDO EXTREMO",
  color: "red",
  description: "Inestabilidad masiva en la señal. Si estás junto al microondas, apágalo: la protección RF podría estar degradada.",
};

export const CRITICAL_INTERFERENCE_EN = {
  label: "CRITICAL LEAK / EXTREME NOISE",
  color: "red",
  description: "Massive signal instability. If you're near the microwave, turn it off: RF protection may be degraded.",
};

export const CRITICAL_INTERFERENCE_FR = {
  label: "FUITE CRITIQUE / BRUIT EXTRÊME",
  color: "red",
  description: "Instabilité massive du signal. Si vous êtes près du micro-ondes, éteignez-le : la protection RF pourrait être dégradée.",
};
