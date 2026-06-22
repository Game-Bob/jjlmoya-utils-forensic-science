import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'chronologie-temperature-planete';
const title = 'Chronologie de la Température Moyenne de la Planète';
const description = 'Explorez l\'histoire de la température moyenne de la Terre à travers les ères géologiques.';

const howTo = [
  {
    name: 'Sélectionner une ère',
    text: 'Cliquez sur une encoche de la règle chronologique.',
  },
  {
    name: 'Vérifier la température',
    text: 'Lisez la température moyenne globale pour la période sélectionnée.',
  },
  {
    name: 'Observer la planète',
    text: 'Regardez le canevas réagir à l\'état thermique de la Terre.',
  },
];

const faq = [
  {
    question: 'La Terre a-t-elle été plus chaude dans le passé qu\'aujourd\'hui ?',
    answer: 'Oui, la Terre a connu des climats beaucoup plus chauds qu\'aujourd\'hui. Pendant le Mésozoïque (l\'ère des dinosaures) et le début de l\'Éocène, la planète était dans un état de " serre " sans calottes polaires, et les températures moyennes mondiales dépassaient 22 °C (environ 7 à 8 degrés de plus que la moyenne actuelle). Cependant, ces transitions se sont produites sur des échelles de temps de millions d\'années, permettant une adaptation évolutive.',
  },
  {
    question: 'Qu\'est-ce qui a causé le phénomène de la "Terre Boule de Neige" ?',
    answer: 'La Terre Boule de Neige (glaciation globale) s\'est produite principalement au cours du Néoprotérozoïque (il y a environ 700 millions d\'années). Elle a été déclenchée par une réduction extrême des gaz à effet de serre due à l\'altération chimique accélérée des roches silicatées suite à la dislocation du supercontinent Rodinia. La glace s\'est étendue des pôles à l\'équateur, augmentant l\'albédo terrestre et enfermant la planète dans une boucle de gel global.',
  },
  {
    question: 'Comment la Terre régule-t-elle sa température à long terme ?',
    answer: 'La Terre possède un thermostat naturel contrôlé par le cycle géologique du carbone, régulé par la tectonique des plaques et l\'altération des silicates. Lorsque la planète se réchauffe, la pluie réagit plus rapidement avec les roches silicatées, extrayant le CO2 de l\'atmosphère pour le déposer au fond des océans, ce qui réduit l\'effet de serre.',
  },
  {
    question: 'En quoi le changement climatique de l\'Anthropocène diffère-t-il du passé ?',
    answer: 'La différence fondamentale réside dans la vitesse. Alors que les transitions climatiques naturelles du passé géologique se produisaient sur des dizaines de milliers ou des millions d\'années, le réchauffement de l\'Anthropocène se produit en quelques décennies. Ce taux de variation thermique dépasse la capacité d\'adaptation de la biosphère actuelle.',
  },
  {
    question: 'Qu\'était le Maximum Thermique du Paléocène-Éocène (PETM) ?',
    answer: 'Le PETM est un événement de réchauffement climatique extrême survenu il y a environ 56 millions d\'années. Il a été causé par une injection rapide de carbone dans l\'atmosphère, augmentant les températures mondiales de 5 à 8 degrés en quelques milliers d\'années. Il est considéré comme le meilleur analogue géologique du changement climatique moderne.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Chronologie de la Température de la Terre',
    sub: 'Explorez les ères climatiques géologiques de la Terre',
    ageLabel: 'Âge :',
    tempLabel: 'Température Moyenne :',
    selectPrompt: 'Sélectionnez une période géologique.',
    epoch_archean_name: 'Éon Archéen',
    epoch_archean_age: '4,0 à 2,5 milliards d\'années',
    epoch_archean_desc: 'Terre extrêmement chaude avec une atmosphère riche en méthane.',
    epoch_proterozoic_name: 'Éon Protérozoïque',
    epoch_proterozoic_age: '2,5 milliards à 541 millions d\'années',
    epoch_proterozoic_desc: 'La hausse de l\'oxygène provoque la glaciation huronienne.',
    epoch_paleozoic_name: 'Ère Paléozoïque',
    epoch_paleozoic_age: '541 à 252 millions d\'années',
    epoch_paleozoic_desc: 'Explosion de la vie marine et migration terrestre.',
    epoch_mesozoic_name: 'Ère Mésozoïque',
    epoch_mesozoic_age: '252 à 66 millions d\'années',
    epoch_mesozoic_desc: 'L\'âge des dinosaures sous des conditions de serre.',
    epoch_cenozoic_name: 'Ère Cénozoïque',
    epoch_cenozoic_age: '66 millions d\'années à aujourd\'hui',
    epoch_cenozoic_desc: 'Refroidissement progressif menant aux cycles glaciaires.',
    epoch_anthropocene_name: 'Époque de l\'Anthropocène',
    epoch_anthropocene_age: 'Présent et futur',
    epoch_anthropocene_desc: 'Réchauffement rapide dû aux émissions anthropiques.',
  },
  seo: [
    {
      type: 'title',
      text: 'CLIMATOLOGIE HISTORIQUE: L\'évolution thermique de la Terre à travers les ères',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le climat de la Terre n\'a jamais été statique. Au cours de ses 4,5 milliards d\'années, notre planète a oscillé entre deux états fondamentaux: l\'état de serre (greenhouse) et l\'état de glaciation (icehouse). Comprendre ces fluctuations est indispensable pour contextualiser la vitesse du réchauffement climatique anthropique actuel.',
    },
    {
      type: 'title',
      text: 'Enregistrement de la température par ère géologique',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Époque Géologique', 'Âge Approx.', 'Temp. Moyenne', 'Caractéristiques Climatologiques'],
      rows: [
        ['<strong>Éon Archéen</strong>', '4,0 - 2,5 Ga', '30 °C', 'Terre primitive chaude avec fort effet de serre.'],
        ['<strong>Éon Protérozoïque</strong>', '2,5 Ga - 541 Ma', '12 °C', 'Glaciations globales ("Terre Boule de Neige").'],
        ['<strong>Ère Paléozoïque</strong>', '541 - 252 Ma', '20 °C', 'Essor de la vie marine et terrestre.'],
        ['<strong>Ère Mésozoïque</strong>', '252 - 66 Ma', '22 °C', 'Période de serre intense sans glace polaire.'],
        ['<strong>Ère Cénozoïque</strong>', '66 Ma - présent', '14 °C', 'Refroidissement progressif et cycles glaciaires.'],
        ['<strong>Anthropocène</strong>', 'Présent', '15,2 °C', 'Réchauffement rapide d\'origine humaine.'],
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
      description,
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
        text: step.text,
      })),
    },
  ],
};