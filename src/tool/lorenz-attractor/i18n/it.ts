const slug = 'attrattore-di-lorenz';
const title = "Simulatore di Caos dell'Attrattore di Lorenz: L'Effetto Farfalla in 3D";
const description = 'Esplora la teoria del caos con questa simulazione interattiva 3D dell attrattore di Lorenz. Visualizza l effetto farfalla.';

const howTo = [
  {
    "name": "Ruota la tela",
    "text": "Clicca e trascina sulla finestra 3D per ruotare l attrattore."
  },
  {
    "name": "Regola i cursori",
    "text": "Modifica i parametri Sigma, Rho e Beta per osservare il comportamento caotico."
  },
  {
    "name": "Osserva la divergenza",
    "text": "Osserva come la distanza tra le due traiettorie cresce in modo esponenziale."
  },
  {
    "name": "Pausa e ripristino",
    "text": "Usa i controlli per mettere in pausa la simulazione o ripristinare i valori predefiniti."
  }
];

const faq = [
  {
    "question": "Cos'è l'attrattore di Lorenz?",
    "answer": "L'attrattore di Lorenz è un insieme di soluzioni caotiche del sistema di Lorenz."
  },
  {
    "question": "Cos e l effetto farfalla?",
    "answer": "La dipendenza sensibile dalle condizioni iniziali in un sistema deterministico non lineare."
  },
  {
    "question": "Cosa rappresentano i parametri?",
    "answer": "Sigma e il numero di Prandtl, Rho il numero di Rayleigh e Beta un parametro geometrico."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "copied": "Copiato",
    "noHistory": "Nessuna cronologia",
    "load": "Carica",
    "delete": "Elimina",
    "title": "Attrattore di Lorenz",
    "subTitle": "Caos Deterministico",
    "parameterControls": "Parametri del Sistema",
    "simulationSpeed": "Velocità (dt)",
    "initialPerturbation": "Perturbazione Iniziale (dx)",
    "trajectories": "Traiettorie",
    "distance": "Distanza di Divergenza",
    "exponentialGrowth": "Divergenza Esponenziale",
    "resetDefault": "Reset",
    "clearPath": "Clear",
    "play": "Resume",
    "pause": "Pause",
    "coords": "Coordinate",
    "divergenceExplanation": "Il grafico di divergenza mostra la distanza euclidea tra le due traiettorie nel tempo."
  },
  seo: [
    { type: 'title', text: "Caos Deterministico: Comprendere le Equazioni di Lorenz", level: 2 },
    { type: 'paragraph', html: "Il sistema di Lorenz e una formulazione storica nella dinamica non lineare e nella teoria del caos. Originariamente derivato nel 1963 dal meteorologo e matematico <strong>Edward Lorenz</strong>, il modello nacque da una rappresentazione semplificata della convezione atmosferica. Lorenz semplificò le complesse equazioni della dinamica dei fluidi in tre equazioni differenziali ordinarie accoppiate. La sua scoperta che queste equazioni semplici e deterministiche potevano produrre un comportamento complesso, non periodico e caotico cambiò la nostra comprensione dei sistemi fisici." },
    { type: 'paragraph', html: "Il sistema è definito da tre equazioni differenziali accoppiate che tracciano una coordinata nello spazio delle fasi tridimensionale nel tempo:" },
    {
      type: 'list',
      items: [
        "<strong>dx/dt = &sigma; * (y - x):</strong> Descrive il tasso di moto convettivo. Il parametro &sigma; (numero di Prandtl) rappresenta il rapporto tra viscosità del fluido e conduttività termica.",
        "<strong>dy/dt = x * (&rho; - z) - y:</strong> Rappresenta la differenza di temperatura tra le correnti convettive ascendenti e discendenti. &rho; (numero di Rayleigh) rappresenta l'intensita del riscaldamento convettivo.",
        "<strong>dz/dt = x * y - &beta; * z:</strong> Traccia la distorsione del profilo di temperatura verticale. &beta; e il rapporto d'aspetto geometrico della cella convettiva.",
      ],
    },
    { type: 'title', text: "L'Effetto Farfalla: Dipendenza Sensibile dalle Condizioni Iniziali", level: 3 },
    { type: 'paragraph', html: "La caratteristica distintiva dei sistemi caotici e la loro <strong>dipendenza sensibile dalle condizioni iniziali</strong>, nota come <strong>Effetto Farfalla</strong>. In questo simulatore, due traiettorie (T1 in ciano e T2 in rosa) partono con una separazione minuscola. Inizialmente sembrano identiche, formando una linea viola. Dopo breve tempo, i termini non lineari amplificano la differenza e i percorsi divergono completamente." },
    { type: 'paragraph', html: "In un sistema caotico, la distanza tra due traiettorie che iniziano arbitrariamente vicine cresce esponenzialmente nel tempo, rendendo qualsiasi previsione a lungo termine praticamente impossibile senza una precisione infinita delle condizioni iniziali." },
    {
      type: 'table',
      headers: ["Parametro", "Valore Standard", "Significato Fisico", "Comportamento al Variare"],
      rows: [
        ["&sigma; (Sigma)", "10.0", "Numero di Prandtl", "Determina l'attrito interno del fluido. Valori più alti accelerano la risposta delle variazioni di velocita ai gradienti di temperatura."],
        ["&rho; (Rho)", "28.0", "Numero di Rayleigh", "Principale motore del caos. Sotto &rho; = 1, l'origine e l'unico punto stabile. A &rho; = 28, il sistema e completamente caotico."],
        ["&beta; (Beta)", "8/3 (2.667)", "Rapporto d'Aspetto Geometrico", "Controlla il rapporto larghezza-altezza delle celle di convezione. Modifica la scala e la velocita di rotazione delle orbite."],
      ],
    },
    { type: 'title', text: "Spazio delle Fasi, Attrattori Strani e Frattali", level: 3 },
    { type: 'paragraph', html: "In fisica classica, le traiettorie si stabilizzano in punti fissi o si ripetono come cicli limite. Il sistema di Lorenz non fa né l'uno né l'altro: il percorso si avvolge infinitamente in tre dimensioni senza mai incrociarsi, formando un <strong>attrattore strano</strong> con una geometria frattale (dimensione di Hausdorff circa 2,06)." },
    { type: 'title', text: "Applicazioni della Teoria del Caos nella Scienza", level: 3 },
    { type: 'paragraph', html: "Le lezioni dell'attrattore di Lorenz si estendono ben oltre la meteorologia e hanno influenzato molti campi moderni:" },
    {
      type: 'list',
      items: [
        "<strong>Meteorologia:</strong> Ha stabilito i limiti fondamentali della prevedibilità meteorologica, portando ai metodi di previsione d'insieme.",
        "<strong>Crittografia:</strong> La natura deterministica ma imprevedibile delle orbite caotiche viene usata per generare chiavi pseudo-casuali sicure.",
        "<strong>Cardiologia:</strong> Usata per modellare i ritmi cardiaci, dove i cuori sani mostrano caratteristiche caotiche.",
        "<strong>Ingegneria:</strong> Aiuta a progettare strutture stabili analizzando ed evitando la risonanza caotica.",
      ],
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description: description,
      applicationCategory: 'ScientificApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
