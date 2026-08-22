import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "analyseur-spectrogramme-voix-en-ligne";
const title = "Analyseur de Spectrogramme de Voix en Ligne";
const description = "Visualisez la fréquence, le temps, l intensité et les formants de deux échantillons audio localement dans votre navigateur.";

const howTo = [
  {
    "name": "Saisir deux échantillons",
    "text": "Sélectionnez des fichiers audio locaux ou utilisez les études synthétiques."
  },
  {
    "name": "Régler le plafond de fréquence",
    "text": "Choisissez 4, 6 ou 8 kHz selon le type de voix."
  },
  {
    "name": "Consulter le spectrogramme",
    "text": "Examinez le temps, la fréquence, l intensité et les formants."
  },
  {
    "name": "Écouter et comparer",
    "text": "Comparez les moyennes F1, F2 et F3 de manière pédagogique."
  }
];

const faq = [
  {
    "question": "Que montre un spectrogramme vocal ?",
    "answer": "Un spectrogramme affiche le temps horizontalement, la fréquence verticalement et la puissance du signal par la brillance."
  },
  {
    "question": "Mes enregistrements sont-ils envoyés sur un serveur ?",
    "answer": "Non. Tout le traitement est effectué localement."
  },
  {
    "question": "Que signifient F1, F2 et F3 ?",
    "answer": "Ce sont des estimations pédagogiques des résonances du conduit vocal."
  },
  {
    "question": "Cet outil peut-il identifier un locuteur ?",
    "answer": "Non. La ressemblance spectrale ne constitue pas une preuve biométrique."
  },
  {
    "question": "Pourquoi les formants changent-ils avec le plafond de fréquence ?",
    "answer": "Modifier l échelle fréquentielle ajuste la séparation des pics spectraux."
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "Local uniquement",
    "privacyNote": "Vos enregistrements restent sur votre appareil. L analyse s exécute dans le navigateur.",
    "loadHeading": "Charger deux sons à analyser",
    "sampleALabel": "Échantillon A",
    "sampleBLabel": "Échantillon B",
    "chooseFileLabel": "Choisir un audio",
    "replaceFileLabel": "Remplacer l audio",
    "dropHint": "Glissez un fichier audio ici (max 25 Mo). Les 20 premières secondes sont analysées.",
    "presetHint": "Essayez directement les deux études de voyelles synthétiques.",
    "presetWarmLabel": "Étude voyelle chaude",
    "presetBrightLabel": "Étude voyelle brillante",
    "emptySampleLabel": "En attente d audio",
    "readySampleLabel": "Plaque spectrale générée",
    "decodingSampleLabel": "Calcul de la plaque spectrale",
    "errorSampleLabel": "Échantillon non analysable",
    "durationLabel": "Durée",
    "ceilingHeading": "Plafond de fréquence",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "Scène de spectrogramme miroir",
    "mirrorViewLabel": "Plaques miroir",
    "splitViewLabel": "Plaques parallèles",
    "playALabel": "Jouer échantillon A",
    "playBLabel": "Jouer échantillon B",
    "stopLabel": "Arrêter",
    "timeAxisLabel": "Temps",
    "frequencyAxisLabel": "Fréquence",
    "intensityLegendLabel": "Une encre plus brillante indique une énergie plus forte",
    "formantLegendLabel": "Lignes de formants estimés",
    "sampleAEmptyCanvasLabel": "Chargez l échantillon A pour afficher son spectre",
    "sampleBEmptyCanvasLabel": "Chargez l échantillon B pour afficher son spectre",
    "comparisonHeading": "Analyse des empreintes de résonance",
    "comparisonNote": "Moyenne des pics spectraux. Les écarts sont des mesures physiques, pas un pourcentage d identité.",
    "formantOneLabel": "Première région de résonance (F1)",
    "formantTwoLabel": "Deuxième région de résonance (F2)",
    "formantThreeLabel": "Troisième région de résonance (F3)",
    "averageLabel": "Moyenne",
    "differenceLabel": "Écart",
    "unavailableLabel": "Non disponible",
    "statusEmptyLabel": "Chargez un échantillon pour commencer",
    "statusSingleLabel": "Une plaque est prête",
    "statusReadyLabel": "Les deux plaques sont prêtes",
    "limitError": "Le fichier dépasse la limite locale de 25 Mo.",
    "decodeError": "Format audio non pris en charge par ce navigateur.",
    "browserError": "Web Audio n est pas disponible dans ce navigateur.",
    "educationalNote": "Outil de visualisation pédagogique. Les lignes de formants ne doivent pas être utilisées pour l identification de locuteur."
},
  seo: [
    { type: 'title', text: "Comment un spectrogramme transforme le son en image", level: 2 },
    { type: 'paragraph', html: "Un <strong>spectrogramme vocal</strong> transforme un enregistrement en une carte avec le temps sur l axe horizontal et la fréquence sur l axe vertical. Une énergie plus forte apparaît sous forme de couleur plus brillante. Cela rend les voyelles tenues, les harmoniques, le silence et les résonances plus faciles à observer que sur une forme d onde classique. Cette représentation visuelle facilite l analyse du signal." },
    { type: 'paragraph', html: "L analyseur divise le signal en courts segments chevauchants, applique une fenêtre de Hamming et calcule la répartition de l énergie par fréquence via la FFT. Un segment court permet de situer précisément un événement, tandis que la résolution en fréquence montre où l énergie se concentre. En raison du principe d incertitude, il existe toujours un compromis entre résolution temporelle et fréquentielle. Ces paramètres définissent la précision du spectrogramme." },
    { type: 'diagnostic', variant: 'info', title: "Traitement privé dans le navigateur", html: "Visualisez la fréquence, le temps, l intensité et les formants de deux échantillons audio localement dans votre navigateur." },
    { type: 'stats', columns: 3, items: [
      { value: "Temps", label: "Lecture de gauche à droite" },
      { value: "Hz", label: "Position en fréquence" },
      { value: "Énergie", label: "Représentée par la luminosité" }
    ] },
    { type: 'title', text: "Lire les formants sans surinterprétation", level: 3 },
    { type: 'paragraph', html: "Les formants sont des zones de résonance façonnées par le conduit vocal. F1 et F2 sont utilisés en phonétique pour décrire la hauteur et le lieu d articulation des voyelles. Cet analyseur suit des pics lissés dans trois régions de fréquence afin que les utilisateurs puissent relier les bandes visibles au comportement de F1, F2 et F3." },
    { type: 'paragraph', html: "La mesure professionnelle des formants utilise généralement un codage prédictif linéaire (LPC) ajusté au locuteur. Les harmoniques du fondamental, le bruit de fond, la réverbération et la compression audio peuvent décaler les estimations simples. Utilisez ces guides comme repères pédagogiques et contrôlez toujours le spectre visuel sous-jacent." },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 à 1000 Hz","Première région de résonance, associée à l ouverture de la voyelle"],["F2","900 à 3000 Hz","Deuxième région de résonance, associée à la position de la langue"],["F3","2000 à 4500 Hz","Région de résonance supérieure, influencée par le conduit vocal"]] },
    { type: 'title', text: "L impact des réglages de fréquence", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "Plafond bas (4 kHz)", description: "Meilleure vue des basses fréquences", points: ["Utile pour les voyelles", "Peut exclure la haute énergie", "Ne garantit pas une meilleure précision"] },
      { title: "Plafond haut (6/8 kHz)", description: "Plus de détails supérieurs", highlight: true, points: ["Pour voix brillantes", "Affiche les fricatives", "Comprime les bandes inférieures"] }
    ] },
    { type: 'title', text: "Une comparaison d échantillons responsable", level: 3 },
    { type: 'paragraph', html: "La comparaison entre deux plaques est particulièrement utile lorsque les enregistrements contiennent la même voyelle ou frase dans des conditions acoustiques similaires. Les écarts affichés sont des différences physiques absolues. Ils ne constituent pas un pourcentage de similitude ni une preuve biométrique d identité." },
    { type: 'list', items: ["<strong>Comparer le mesmo contenu parlé:</strong> des voyelles ou mots identiques facilitent le contraste.","<strong>Harmoniser les conditions d enregistrement:</strong> le micro et l acoustique influencent fortement le spectre.","<strong>Écouter avec le curseur:</strong> reliez les événements visuels au son exact.","<strong>Éviter les affirmations d identité:</strong> un spectrogramme similaire ne prouve pas l identité du locuteur."] },
    { type: 'summary', title: "Synthèse de l analyseur", items: ["Générer un spectrogramme audio localement à partir de fichiers compatibles.","Explorer deux échantillons en plaques miroir ou parallèles.","Apprendre comment l énergie spectrale et les formants varient.","Garder une approche descriptive et pédagogique."] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
