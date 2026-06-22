const description = 'Calculez le pourcentage de votre corps qui s\'est renouvelé depuis votre naissance. Estimation basée sur le taux de division cellulaire des organes, des os et des tissus. Le Paradoxe de Thésée rendu tangible.';
const slug = 'calculateur-renouvellement-cellulaire';
const title = 'Calculateur de Renouvellement Cellulaire: Que reste t il du "vous" original ?';
const howTo = [
    {
      name: 'Réglez votre âge',
      text: 'Faites glisser le curseur de 1 à 105 ans. C\'est la variable la plus importante pour les calculs de renouvellement.',
    },
    {
      name: 'Observez le pourcentage principal',
      text: 'Le grand chiffre au centre indique quel pourcentage de votre matière actuelle est "neuve" (renouvelée depuis votre naissance).',
    },
    {
      name: 'Analysez les barres de progression',
      text: 'Chaque barre représente un tissu différent: peau/sang, os, organes et cerveau. Notez que le cerveau change à peine tandis que la peau se renouvelle constamment.',
    },
    {
      name: 'Réfléchissez sur votre identité',
      text: 'Si 99 % de vous est de la matière neuve, qui êtes-vous réellement ? Utilisez cet outil comme point de départ pour des réflexions sur la continuité personnelle et le Paradoxe de Thésée.',
    },
  ];
const faq = [
    {
      question: 'Qu\'est-ce que le "renouvellement cellulaire" exactement ?',
      answer: 'C\'est le processus naturel par lequel les cellules âgées ou endommagées meurent (apoptose) et sont remplacées par de nouvelles cellules générées par division mitotique. Ce cycle est essentiel pour maintenir les tissus fonctionnels et réparer les dommages.',
    },
    {
      question: 'Pourquoi le cerveau se renouvelle-t-il si lentement ?',
      answer: 'Les neurones du cortex cérébral se génèrent avant la naissance et généralement ne se divisent plus. Cela assure une stabilité neurologique: vos "câbles" fondamentaux restent constants. Cependant, les cellules gliales (de soutien) se renouvellent. La mémoire est stockée dans les connexions, pas dans les atomes.',
    },
    {
      question: 'Est-il vrai que nous sommes de "nouvelles personnes" tous les 7 ans ?',
      answer: 'C\'est une simplification. Ce n\'est pas exact. Votre sang se renouvelle en 4 mois, votre peau en un mois, votre squelette en 10 ans. Votre cerveau reste en grande partie inchangé. Le chiffre de 7 ans est historique (Aristote l\'a mentionné) mais biologiquement c\'est une moyenne imprécise.',
    },
    {
      question: 'Si mon corps est neuf à 99%, suis-je toujours la même personne ?',
      answer: 'Oui. L\'identité est une continuité d\'information, de conscience et de mémoire, pas d\'atomes. Vous êtes comme un fleuve: l\'eau change constamment, mais le fleuve persiste. Le Paradoxe de Thésée suggère que l\'identité réside dans le motif, pas dans la matière.',
    },
    {
      question: 'Quels sont les tissus qui se renouvellent le plus rapidement ?',
      answer: 'Le sang et la peau sont en tête. Votre moelle osseuse produit 200 milliards de cellules sanguines par jour. Vous perdez ~30 000 cellules de peau par minute. C\'est pourquoi ils cicatrisent si bien et vieillissent si visiblement: ils sont jeunes en termes d\'âge cellulaire.',
    },
    {
      question: 'Le cristallin de l\'œil ne se renouvelle vraiment pas ?',
      answer: 'C\'est exact. Les cellules du cristallin se déposent pendant le développement embryonnaire et sont conservées à vie. À 100 ans, les cellules centrales de votre cristallin pourraient être les mêmes que lorsque vous étiez dans l\'utérus. C\'est une capsule témoin biologique.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copié',
    noHistory: 'Pas d\'historique',
    load: 'Charger',
    delete: 'Supprimer',
    biologicalTimeline: 'Chronologie Biologique',
    ageUnit: 'années d\'évolution',
    matterNewPercent: 'Votre matière est neuve à',
    atomicRenewal: 'Renouvellement Atomique',
    skinAndBlood: 'Épiderme et Sang',
    boneRemodeling: 'Remodelage Osseux',
    organicMatrix: 'Matrice Organique',
    perennialCells: 'Cellules Pérennes',
    disclaimerText: 'Les calculs sont basés sur la durée de vie cellulaire moyenne selon des études isotopiques. Alors que le sang et la peau se renouvellent en quelques semaines, les protéines du cristallin et une grande partie de votre cortex cérébral subsistent depuis le développement embryonnaire. Physiquement, vous êtes une structure dynamique en flux constant.',
  },
  seo: [
    {
      type: 'title',
      text: 'Quelle part de vous est vraiment "la vôtre" ? La science du renouvellement cellulaire',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Votre corps est un fleuve en mouvement constant. Chaque seconde, des millions de cellules meurent et sont remplacées par de nouvelles. En sept ans, pratiquement chaque atome de votre corps aura été substitué. Cependant, cette statistique est profondément trompeuse, car les différentes parties de votre organisme se renouvellent à des vitesses radicalement différentes.',
    },
    {
      type: 'paragraph',
      html: 'Ce paradoxe, connu sous le nom de <strong>Paradoxe du Navire de Thésée</strong>, pose une question ancienne: si vous remplacez toutes les parties de quelque chose, est-ce toujours la même chose ? Dans votre cas, c\'est une question littérale. Les atomes qui constituent votre corps aujourd\'hui ne sont pas les mêmes que ceux d\'il y a 10 ans, mais <em>vous</em> restez vous.',
    },
    {
      type: 'title',
      text: 'Le renouvellement cellulaire: un mapa de votre corps dynamique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La vitesse de renouvellement varie de façon spectaculaire selon le tissu :',
    },
    {
      type: 'table',
      headers: ['Tissu', 'Vie Moyenne Cellulaire', 'Renouvellement Complet', 'Description'],
      rows: [
        ['<strong>Sang</strong>', '120 jours', '4 mois', 'Les globules rouges sont les plus rapides. Votre moelle osseuse en produit 200 milliards par jour.'],
        ['<strong>Peau</strong>', '2-4 semaines', '1 mois', 'Renouvellement extrêmement rapide. Vous perdez ~30 000 cellules de peau par minute.'],
        ['<strong>Os</strong>', '10 ans', 'Une décennie', 'Le squelette est plus conservateur. Pourtant, après 10 ans, vous aurez pratiquement remplacé tout votre squelette.'],
        ['<strong>Organes</strong>', '15 ans', '1,5 décennies', 'Le foie se renouvelle en quelques mois. Le cœur, en plusieurs années. Une mosaïque de rythmes.'],
        ['<strong>Cerveau</strong>', '80+ ans (neurones)', 'Presque jamais', 'Vos neurones corticaux depuis la naissance. Mais les glies (cellules de soutien) se renouvellent.'],
      ],
    },
    {
      type: 'title',
      text: 'Le cristallin de l\'œil: la partie la plus ancienne de vous',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il existe une structure dans votre corps qui est spéciale: le <strong>cristallin de l\'œil</strong>. Les cellules qui composent le cristallin se déposent pendant le développement fœtal et ne sont jamais remplacées. Si vous parvenez à vivre jusqu\'à 100 ans, les cellules centrales de votre cristallin seront toujours les mêmes que celles que vous aviez dans l\'utérus de votre mère. Elles sont, littéralement, la partie la plus ancienne de vous.',
    },
    {
      type: 'title',
      text: 'Calcul du renouvellement total: le paradoxe des poids',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ce calculateur utilise une moyenne pondérée des différents tissus :',
    },
    {
      type: 'list',
      items: [
        '<strong>30% peau et sang :</strong> Renouvellement quasi complet au cours des jeunes années.',
        '<strong>35% squelette :</strong> Renouvellement progressif, atteignant 100% au bout de 10 ans.',
        '<strong>25% organes :</strong> Renouvellement plus lent, variable selon l\'organe.',
        '<strong>10% cerveau :</strong> Changement minimal dans les neurones, maximal dans les structures de soutien.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Le résultat est qu\'à l\'âge de 25 ans, environ <strong>93% de votre matière actuelle est nouvelle</strong>. À 80 ans, vous pourriez être composé de plus de 99% d\'atomes différents de ceux que vous aviez à la naissance.',
    },
    {
      type: 'title',
      text: 'Implications philosophiques: l\'identité est information, pas matière',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si votre corps est complètement nouveau chaque décennie, pourquoi êtes-vous "vous" ? La réponse réside dans le fait que l\'identité ne réside pas dans les atomes spécifiques, mais dans le <strong>modèle d\'information</strong> que ces atomes soutiennent. Vous êtes comme une chanson: ce n\'est pas le même air qui vibre, mais le modèle persiste.',
    },
    {
      type: 'paragraph',
      html: 'Ceci a des implications profondes: votre corps est un processus, pas une chose. Vous êtes un modèle auto-organisé qui persiste à travers le changement. Vous ne possédez pas d\'atomes ; vous êtes une structure qui les canalise temporairement.',
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
        text: step.text,
      })),
    },
  ],
};

