import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'comparateur-ries-marques-outils-forensique';
const title = 'Comparateur de stries et marques d\'outils forensique';
const description = 'Téléchargez des images de marques d\'outils connues et contestées, alignez-les dans un microscope de comparaison à écran partagé et examinez la continuité des stries avec des commandes visuelles.';

const howTo = [
  {
    name: 'Charger les images de comparaison',
    text: 'Téléchargez une image de marque de test connue et une image de marque contestée à partir de vos propres pièces, notes ou ensemble d\'entraînement.',
  },
  {
    name: 'Déplacer la séparation de comparaison',
    text: 'Faites glisser le curseur sur le viseur optique pour exposer davantage de la marque connue ou contestée tout en maintenant les deux échantillons dans le même champ.',
  },
  {
    name: 'Ajuster le décalage, la rotation, le zoom et le contraste',
    text: 'Utilisez les commandes micrométriques pour déplacer et faire pivoter l\'image contestée, puis ajustez le zoom, le contraste et la luminosité pour que les stries les plus fines restent visibles.',
  },
  {
    name: 'Exporter la vue de comparaison',
    text: 'Lorsque l\'alignement visuel est prêt, exportez une vue PNG pour discussion, révision en classe ou illustration de notes de dossier.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce qu\'une comparaison forensique de marques d\'outils ?',
    answer: 'La comparaison forensique de marques d\'outils examine les traces produites lorsqu\'un outil entre en contact, coupe, gratte, fait levier ou comprime une autre surface. Les examinateurs comparent les caractéristiques de classe, la qualité de la marque et les détails microscopiques des stries entre les marques contestées et les marques de test connues.',
  },
  {
    question: 'Cet outil en ligne peut-il identifier l\'outil exact qui a fait une marque ?',
    answer: 'Non. Cet espace de travail est destiné à l\'alignement visuel et à l\'éducation. Il ne calcule pas l\'attribution de la source, la probabilité, le taux d\'erreur ou une conclusion forensique automatisée.',
  },
  {
    question: 'Pourquoi le décalage, la rotation et le zoom sont-ils importants dans la comparaison ?',
    answer: 'De petites différences dans l\'angle de l\'outil, la pression, l\'échelle, la position de la caméra et le placement latéral peuvent désaligner des stries similaires. Les commandes de décalage, de rotation et de zoom aident à placer deux images dans une position de visualisation comparable.',
  },
  {
    question: 'Quelles images fonctionnent le mieux pour l\'alignement visuel des marques d\'outils ?',
    answer: 'Utilisez des images nettes, bien éclairées et prises de face autant que possible, avec un chevauchement suffisant dans la région de la marque. Évitez les flous importants, les reflets extrêmes, les distorsions de perspective et les images où la zone de stries est trop courte ou endommagée.',
  },
  {
    question: 'Que doit documenter un utilisateur après avoir aligné deux images de marques d\'outils ?',
    answer: 'Documentez la source de chaque image, qu\'elle soit contestée ou connue, les paramètres d\'alignement utilisés, les ajustements d\'image appliqués, les zones visibles d\'accord ou de désaccord et les limites de la qualité d\'image.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Vue de microscope de comparaison partagée des stries de marques d\'outils connues et contestées',
    splitLabel: 'Déplacer la séparation de comparaison',
    units: 'Système d\'unités de décalage',
    metric: 'Métrique',
    imperial: 'Impérial',
    toolProfile: 'Profil de l\'outil',
    loadImages: '1. Charger',
    alignImage: '2. Aligner l\'image contestée',
    adjustImage: '3. Ajuster la visibilité',
    outputControls: 'Commandes de sortie',
    demoOptions: 'Options de démonstration',
    uploadKnown: 'Image connue/test',
    uploadQuestioned: 'Image contestée',
    noFile: 'Aucune image chargée',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Pointe de tournevis',
    prybar: 'Bord de levier',
    boltCutter: 'Mâchoire de coupe-boulon',
    offset: 'Décalage horizontal',
    rotation: 'Rotation angulaire',
    zoom: 'Zoom de l\'image',
    contrast: 'Contraste',
    brightness: 'Luminosité',
    microns: 'microns',
    thousandths: 'millièmes',
    degrees: 'degrés',
    correlation: 'Mode / score',
    verdictStrong: 'alignement fort',
    verdictPartial: 'alignement partiel',
    verdictWeak: 'alignement faible',
    center: 'Centrer',
    fineTip: 'lignes de traînée fines',
    wideEdge: 'compression large',
    crushJaw: 'crêtes d\'écrasement appariées',
    grid: 'Grille',
    exportImage: 'Exporter la vue',
    exportFilename: 'vue-comparaison-marques-outils.png',
    phaseFit: 'Ajustement de phase',
    rotationFit: 'Ajustement de rotation',
    knownMark: 'Marque connue',
    questionedMark: 'Marque contestée',
    reliefGraph: 'Relief de micro-surface numérisé',
    visualMode: 'Visuel',
    visualVerdict: 'comparaison manuelle',
    visualInterpretation: 'Alignement visuel uniquement. Aucune conclusion forensique automatisée n\'est calculée.',
    interpMatch: 'Aperçu de démonstration. Téléchargez des images pour comparer des marques réelles.',
    interpPossible: 'Aperçu de démonstration. Ajustez l\'alignement ou téléchargez des images.',
    interpMismatch: 'Aperçu de démonstration. Recentrez ou téléchargez des images.',
    disclaimer: 'Espace de travail visuel uniquement.',
  },
  seo: [
    {
      type: 'title',
      text: 'Microscope de comparaison de marques d\'outils forensique en ligne',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Espace visuel',
      title: 'Comparez des images de marques d\'outils contestées et connues dans votre navigateur',
      html: 'Cet espace de travail de comparaison de marques d\'outils vous permet de télécharger deux images, de les placer dans un microscope de comparaison à écran partagé et d\'ajuster la marque contestée jusqu\'à ce que les stries, les marques de pression ou les éraflures puissent être examinées côte à côte. Il est conçu pour les étudiants en sciences forensiques, les instructeurs, les enquêteurs et les équipes juridiques qui ont besoin d\'expliquer la <strong>comparaison de marques d\'outils connues et contestées</strong> sans installer de logiciel de microscopie spécialisé.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 téléchargements', label: 'images connues et contestées', icon: 'mdi:image-plus' },
        { value: 'séparation', label: 'microscope de comparaison', icon: 'mdi:compare-horizontal' },
        { value: 'alignement', label: 'commandes de décalage, rotation et zoom', icon: 'mdi:axis-arrow' },
        { value: 'export PNG', label: 'sauvegarde de la vue comparée', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'Quand cet espace de travail de comparaison de marques d\'outils est utile',
      items: [
        'Enseigner comment les microscopes de comparaison placent une marque de test connue à côté d\'une marque contestée.',
        'Préparer des démonstrations en classe avec des images de marques réelles ou d\'entraînement.',
        'Expliquer comment l\'alignement, l\'échelle, la rotation, l\'éclairage et le contraste affectent l\'interprétation des stries.',
        'Créer une illustration visuelle propre pour des notes de dossier ou des rapports sans prétendre à une identification automatisée.',
        'Évaluer la qualité de l\'image avant de décider si une marque est adaptée à une comparaison formelle en laboratoire.',
      ],
    },
    {
      type: 'title',
      text: 'Comment comparer des images de marques d\'outils en ligne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Commencez par charger une image de <strong>marque connue</strong> et une image de <strong>marque contestée</strong>. Une marque connue est généralement produite dans des conditions contrôlées avec un outil spécifique. Une marque contestée est la marque récupérée sur une scène, un objet, un cadre de porte, une serrure ou tout autre élément dont la source est inconnue. Le but de l\'espace de travail n\'est pas de décider automatiquement de l\'identité ; le but est de placer les deux images dans une relation visuelle utile afin que l\'utilisateur puisse inspecter la continuité et les divergences.',
    },
    {
      type: 'paragraph',
      html: 'Une fois les deux images chargées, utilisez le curseur de séparation pour afficher plus ou moins de chaque côté. Ajustez le décalage horizontal pour mettre les stries en phase, puis faites pivoter l\'image contestée pour compenser l\'angle de la caméra ou de l\'outil. Le zoom est utile lorsque les deux images ont été capturées à des grossissements différents. Le contraste et la luminosité aident à révéler les rayures fines ou peu profondes, mais ces ajustements doivent être documentés car ils modifient l\'apparence d\'origine de l\'image.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ce que l\'espace de travail peut vous aider à voir',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Une bonne configuration à écran partagé permet d\'inspecter plus facilement si deux marques partagent une structure visuelle comparable après un alignement minutieux.',
          points: ['Direction similaire des stries ou des crêtes', 'Continuité sur plusieurs détails voisins', 'Différences d\'échelle et de rotation nécessitant une correction', 'Zones où la qualité de la marque est suffisante pour être inspectée', 'Incohérences évidentes des caractéristiques de classe pouvant mettre fin à la comparaison prématurément'],
        },
        {
          title: 'Ce qu\'il ne peut pas prouver',
          icon: 'mdi:alert-circle-outline',
          description: 'Cet outil de navigateur n\'est pas un système d\'identification forensique validé et ne doit pas être utilisé comme tel.',
          points: ['Aucune conclusion automatisée de source commune', 'Aucune probabilité de correspondance aléatoire', 'Aucune estimation de la fréquence de population', 'Aucun substitut à l\'examen des preuves originales', 'Aucun remplacement pour l\'assurance qualité en laboratoire ou l\'examen par les pairs'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Commande', 'Ce qu\'elle modifie', 'Pourquoi c\'est important'],
      rows: [
        ['Import d\'image connue/test', 'Charge la marque de contrôle ou de référence.', 'Le côté connu doit provenir d\'une marque de test documentée ou d\'un exemple d\'entraînement.'],
        ['Import d\'image contestée', 'Charge la marque dont la source est inconnue.', 'Ce côté est déplacé et ajusté pour rechercher une orientation comparable.'],
        ['Poignée de séparation', 'Modifie la quantité visible de chaque image.', 'Une séparation mobile aide à inspecter si les lignes continuent visuellement à travers la frontière.'],
        ['Décalage horizontal', 'Déplace l\'image contestée vers la gauche ou la droite.', 'De petits déplacements latéraux peuvent mettre les crêtes correspondantes en phase ou hors phase.'],
        ['Rotation', 'Fait pivoter l\'image contestée.', 'L\'angle de l\'outil, l\'angle de la caméra et le montage peuvent créer une dérive angulaire entre les images.'],
        ['Zoom', 'Modifie le grossissement affiché.', 'Les différentes échelles d\'image doivent être rendues comparables avant de juger des détails.'],
        ['Contraste et luminosité', 'Ajustent la visibilité affichée.', 'Les stries à faible contraste peuvent devenir plus faciles à voir, mais les ajustements doivent être notés.'],
        ['Exporter la vue', 'Enregistre un PNG de l\'alignement actuel.', 'Utile pour les révisions de cours, les notes, les discussions ou les rapports qui indiquent clairement les limites.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Qualité d\'image',
      title: 'Une mauvaise image peut rendre une bonne comparaison impossible',
      html: 'La comparaison des marques d\'outils dépend fortement de la qualité de l\'image. Le flou, les reflets, les artefacts de compression, les ombres prononcées, la distorsion de perspective et les stries très courtes peuvent créer des impressions visuelles trompeuses. Si une marque ne peut pas être orientée, mise à l\'échelle et éclairée clairement, la conclusion appropriée peut être que l\'image ne convient pas à une comparaison significative.',
    },
    {
      type: 'summary',
      title: 'Liste de contrôle pratique avant de comparer deux marques',
      items: [
        'Confirmez quelle image est la marque contestée et quelle image est la marque connue ou de test.',
        'Vérifiez que les deux images montrent le même type général de marque, la même zone de contact de l\'outil et la même orientation de la surface.',
        'Évitez de comparer des lignes individuelles isolées ; recherchez des séries de détails voisins qui persistent sur une longueur utile.',
        'Utilisez le contraste et la luminosité avec modération et notez quand l\'amélioration de l\'image a été appliquée.',
        'Exportez la vue alignée uniquement comme illustration de ce qui a été affiché, et non comme preuve d\'identité.',
      ],
    },
    {
      type: 'title',
      text: 'Preuves de marques d\'outils connues et contestées',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une marque d\'outil contestée est généralement récupérée sur un élément impliqué dans un incident, comme une marque de levier sur une porte, une coupure sur un fil, une éraflure sur du métal ou une marque de compression sur une surface plus douce. Une marque connue est produite à partir d\'un outil suspecté dans des conditions contrôlées ou documentées. Dans le travail forensique formel, les examinateurs vérifient si les caractéristiques de classe sont cohérentes avant de passer du temps sur les détails des stries fines. Si les caractéristiques de classe ne correspondent pas, la similitude microscopique dans une petite région ne suffit pas à soutenir une association.',
    },
    {
      type: 'paragraph',
      html: 'L\'espace de travail du navigateur est intentionnellement conservateur. Il vous aide à aligner des images et à discuter de caractéristiques visuelles, mais ne modélise pas l\'usure des outils, les caractéristiques de sous-classe, la déformation du substrat, les marques de fabrication, les seuils de décision des examinateurs, l\'incertitude de mesure ou les taux d\'erreur. Un flux de travail responsable traite la vue exportée comme une aide à la communication, et non comme un résultat d\'identification.',
    },
    {
      type: 'proscons',
      title: 'Forces et limites de la comparaison en ligne d\'images de marques d\'outils',
      items: [
        { pro: 'Moyen rapide de charger deux images et d\'inspecter l\'alignement sans installer de logiciel de bureau.', con: 'La vue du navigateur n\'est pas un microscope de comparaison forensique calibré.' },
        { pro: 'Utile pour enseigner comment la comparaison à écran partagé et l\'orientation affectent ce que l\'utilisateur voit.', con: 'L\'amélioration de l\'image peut améliorer la visibilité mais peut également modifier l\'apparence des caractéristiques.' },
        { pro: 'Les vues PNG exportées sont utiles pour les notes, les discussions et les explications visuelles.', con: 'Une vue exportée ne préserve pas le contexte probant complet, les métadonnées ou la chaîne de possession.' },
        { pro: 'Fonctionne avec de vraies images téléchargées par l\'utilisateur au lieu de marques uniquement synthétiques.', con: 'L\'outil ne peut pas déterminer si deux marques proviennent du même outil.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Marque contestée', definition: 'Une marque récupérée sur un élément ou une scène dont la source est inconnue.' },
        { term: 'Marque de test connue', definition: 'Une marque contrôlée faite avec un outil spécifique pour comparaison avec la marque contestée.' },
        { term: 'Strie', definition: 'Une ligne ou crête microscopique créée lorsque la surface d\'un outil glisse sur un autre matériau.' },
        { term: 'Caractéristiques de classe', definition: 'Caractéristiques partagées par un groupe d\'outils, comme la largeur de la lame, la forme générale ou le type d\'outil.' },
        { term: 'Caractéristiques individuelles', definition: 'Caractéristiques de surface fines qui peuvent résulter de la fabrication, de l\'utilisation, de dommages ou de l\'usure.' },
        { term: 'Caractéristiques de sous-classe', definition: 'Caractéristiques partagées par un sous-ensemble d\'outils en raison des processus de fabrication ; elles peuvent compliquer l\'interprétation de la source.' },
        { term: 'Adéquation', definition: 'Un jugement sur le fait qu\'une marque contient une qualité et une quantité suffisantes de détails pour soutenir une comparaison.' },
      ],
    },
    {
      type: 'tip',
      title: 'Bons termes de recherche auxquels cette page est conçue pour répondre',
      html: 'Les utilisateurs à la recherche de ce type d\'espace de travail recherchent souvent des expressions telles que <strong>microscope de comparaison de marques d\'outils en ligne</strong>, <strong>comparaison de stries forensique</strong>, <strong>marque connue et contestée</strong>, <strong>comparer les marques d\'outils à partir d\'images</strong> et <strong>simulateur de microscope de comparaison forensique</strong>. La page est construite autour de ces tâches réelles: télécharger, aligner, inspecter, documenter et comprendre les limites.',
    },
    {
      type: 'table',
      headers: ['Question d\'utilisateur courante', 'Réponse courte'],
      rows: [
        ['Puis-je télécharger mes propres images de marques d\'outils ?', 'Oui. L\'outil est conçu pour les images connues et contestées téléchargées par l\'utilisateur.'],
        ['L\'application décide-t-elle si les deux marques correspondent ?', 'Non. Elle prend en charge uniquement l\'alignement visuel et ne formule pas de conclusion forensique sur la source.'],
        ['Pourquoi l\'image contestée se déplace-t-elle au lieu des deux ?', 'Garder le côté connu stable facilite la documentation de la façon dont l\'image contestée a été ajustée.'],
        ['Puis-je l\'utiliser pour des marques d\'armes à feu ou de douilles ?', 'Cela peut aider à démontrer des concepts d\'alignement d\'images, mais la comparaison des armes à feu et des cartouches nécessite des procédures spécifiques à la discipline et un examen validé.'],
        ['Puis-je inclure le PNG exporté dans mes notes ?', 'Oui, s\'il est clairement décrit comme une vue illustrative produite à l\'aide des commandes d\'ajustement visuel.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Prudence forensique',
      title: 'Utilisez un langage prudent lors de la description des comparaisons de marques d\'outils',
      html: 'Évitez de transformer un alignement visuel en une conclusion plus forte que ce que les preuves permettent. Le langage approprié dépend de la juridiction, de la politique du laboratoire, de la validation, de la qualité de l\'image, de l\'examen par l\'examinateur et du contexte du dossier. Cet outil en ligne doit être décrit comme une aide à la comparaison visuelle, et non comme une méthode validée pour individualiser un outil.',
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
      applicationCategory: 'ForensicApplication',
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
