import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-probleme-trois-corps';
const title = 'Simulateur du Problème à Trois Corps';
const description = 'Simulez trois corps gravitationnels dans un plan bidimensionnel avec masses modifiables, vecteurs de vitesse, traînées et préréglages stables ou chaotiques.';

const howTo = [
  {
    name: 'Choisissez un préréglage orbital',
    text: 'Commencez avec l\'orbite en huit pour une référence stable, le triangle de Lagrange pour un équilibre rotatif, ou le préréglage de fronde pour une rencontre visiblement chaotique.',
  },
  {
    name: 'Ajustez les masses et les vecteurs de vitesse',
    text: 'Utilisez les curseurs de chaque corps pour modifier la masse et les composantes initiales de la vitesse. De petits changements peuvent préserver un motif, le déformer ou le détruire complètement.',
  },
  {
    name: 'Consultez les diagnostics',
    text: 'Surveillez l\'énergie totale, la séparation la plus proche et la plus lointaine, et le centre de masse pour comprendre si l\'orbite numérique reste bornée ou si elle se désagrège.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce que le problème à trois corps ?',
    answer: 'Le problème à trois corps cherche comment trois masses se déplacent lorsque chaque corps attire gravitationnellement les deux autres. Contrairement au problème à deux corps, il n\'existe pas d\'équation générale fermée qui résolve toutes les configurations possibles, c\'est pourquoi la plupart des cas pratiques sont explorés par intégration numérique.',
  },
  {
    question: 'Pourquoi les orbites à trois corps sont-elles instables ?',
    answer: 'De nombreux systèmes à trois corps sont sensibles aux conditions initiales. Un infime changement de vitesse, de position ou de masse modifie le moment des rencontres rapprochées, et ces rencontres peuvent échanger de l\'énergie de manière dramatique. Il en résulte un système qui peut rester borné un certain temps puis éjecter soudainement un corps.',
  },
  {
    question: 'Que montre le préréglage en huit ?',
    answer: 'Le préréglage en huit est une célèbre solution périodique pour trois masses égales. Chaque corps suit la même trajectoire avec un décalage de phase, démontrant que le problème à trois corps peut contenir des îlots stables élégants au sein d\'un paysage chaotique beaucoup plus vaste.',
  },
  {
    question: 'Ce simulateur est-il physiquement exact du point de vue astronomique ?',
    answer: 'Cet outil utilise un modèle newtonien adouci et un pas de type Verlet de vitesse symplectique pour que le mouvement soit fidèle et stable pour l\'apprentissage. Il est conçu pour l\'exploration interactive plutôt que pour la prédiction d\'éphémérides de haute précision.',
  },
  {
    question: 'Comment interpréter l\'énergie totale ?',
    answer: 'Une énergie totale négative indique généralement un système lié, tandis qu\'une énergie proche de zéro peut faciliter l\'échappement. Dans une simulation numérique, une dérive énergétique importante avertit également que le pas de temps ou la géométrie de la rencontre sollicite trop l\'intégrateur.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Laboratoire de chaos gravitationnel',
    canvasLabel: 'Canevas interactif bidimensionnel d\'orbite à trois corps',
    presetsLabel: 'Préréglages orbitaux',
    figureEightPreset: 'Huit',
    lagrangePreset: 'Triangle de Lagrange',
    slingshotPreset: 'Fronde',
    pauseButton: 'Pause',
    playButton: 'Lecture',
    resetButton: 'Réinitialiser',
    speedLabel: 'Vitesse de simulation',
    trailLabel: 'Longueur de traînée',
    massLabel: 'Masse',
    velocityXLabel: 'Vitesse X',
    velocityYLabel: 'Vitesse Y',
    energyLabel: 'Énergie totale',
    separationLabel: 'Intervalle de séparation',
    centerMassLabel: 'Centre de masse',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur interactif du problème à trois corps pour le chaos orbital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le problème à trois corps est l\'une des démonstrations les plus claires que des lois simples peuvent produire un mouvement compliqué. La gravité newtonienne donne une règle de force compacte, mais dès qu\'un troisième corps massif rejoint le système, chaque orbite remodèle continuellement les deux autres. Ce simulateur vous permet d\'expérimenter directement cette instabilité: choisissez une configuration connue, ajustez les masses et les vecteurs de vitesse, et observez si les corps forment une orbite répétitive, un triangle rotatif ou un événement de dispersion chaotique.',
    },
    {
      type: 'title',
      text: 'Ce que démontrent les préréglages',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Préréglage', 'Idée physique', 'Quoi observer'],
      rows: [
        ['<strong>Huit</strong>', 'Une solution périodique à masses égales où les trois corps partagent la même boucle.', 'L\'orbite reste organisée seulement lorsque la symétrie et l\'équilibre des vitesses sont soigneusement préservés.'],
        ['<strong>Triangle de Lagrange</strong>', 'Trois corps occupent un triangle équilatéral qui tourne autour du centre de masse.', 'L\'équilibre des masses et la vitesse tangentielle empêchent le triangle de s\'effondrer vers l\'intérieur.'],
        ['<strong>Fronde</strong>', 'Une rencontre rapprochée transfère de l\'énergie entre les corps.', 'Un corps peut gagner en vitesse tandis qu\'un autre devient plus lié, révélant pourquoi les éjections chaotiques se produisent.'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi les petits changements comptent',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dans une orbite à deux corps, le centre de masse et l\'ellipse orbitale offrent une image géométrique stable. Dans un système à trois corps, les passages rapprochés agissent comme des négociations gravitationnelles: un corps peut emprunter de l\'énergie orbitale, changer brusquement de direction, ou convertir une boucle ordonnée en un événement de dispersion. Cette sensibilité explique pourquoi les systèmes astrophysiques réels tels que les étoiles triples, les rencontres planète-lune et les planétésimaux du système solaire primitif nécessitent souvent une intégration numérique plutôt qu\'une formule unique et simple.',
    },
    {
      type: 'title',
      text: 'Comment utiliser les diagnostics',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Énergie totale</strong> vous aide à juger si le système est lié et si l\'intégration numérique reste stable.',
        '<strong>Intervalle de séparation</strong> montre les distances de paire les plus proches et les plus lointaines, rendant les quasi-collisions et les éjections faciles à repérer.',
        '<strong>Centre de masse</strong> devrait rester relativement stable lorsque l\'impulsion initiale est équilibrée ; une dérive suggère une configuration intentionnellement asymétrique ou un vecteur de vitesse modifié.',
        '<strong>Longueur de traînée</strong> révèle la structure à long terme: les traînées courtes mettent l\'accent sur l\'interaction en cours, tandis que les longues exposent les boucles répétitives et la précession orbitale lente.',
      ],
    },
    {
      type: 'title',
      text: 'Modèle numérique utilisé dans l\'outil',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le simulateur utilise l\'attraction newtonienne en carré inverse avec un petit terme d\'adoucissement qui évite les explosions visuelles lors de passages extrêmement rapprochés. Le mouvement est avancé avec un pas de type Verlet de vitesse, un choix courant pour les démonstrations orbitales car il gère le comportement énergétique mieux qu\'une simple mise à jour d\'Euler. Le résultat est un modèle éducatif réactif qui rend visible le comportement qualitatif du problème à trois corps sans prétendre remplacer les logiciels professionnels de mécanique céleste.',
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
