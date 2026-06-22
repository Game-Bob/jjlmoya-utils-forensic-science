const description = 'Simulez l\'impact d\'astéroïdes avec la physique réelle. Calculez l\'énergie, le cratère, les radiations thermiques et l\'onde de choc. Survivriez-vous à Chicxulub ?';
const title = 'Simulateur d\'Impact d\'Astéroïde: Calculateur d\'Apocalypse';
const slug = 'simulateur-impact-asteroide';
const howTo = [
    {
      name: 'Choisir la taille du projectile',
      text: 'Entrez le diamètre de l\'astéroïde. D\'un petit météore de 10 mètres à un destructeur de planète de 10 kilomètres.',
    },
    {
      name: 'Régler la vitesse et l\'angle',
      text: 'Ajustez la vitesse d\'approche et l\'angle d\'entrée (45° est la valeur statistique la plus probable).',
    },
    {
      name: 'Définir la nature de l\'astéroïde',
      text: 'Sélectionnez si l\'astéroïde est en roche, en fer ou en glace pour calculer correctement la profondeur du cratère.',
    },
    {
      name: 'Analyser le verdict de survie',
      text: 'Faites glisser l\'astéroïde sur la carte et indiquez à quelle distance vous vous trouvez pour voir les effets des radiations, du séisme et de l\'onde de choc.',
    },
  ];
const faq = [
    {
      question: 'Comment l\'énergie d\'un impact est-elle calculée ?',
      answer: 'L\'énergie principale est cinétique: (1/2) * masse * vitesse². Nous utilisons des densités réalistes (ex. 3000 kg/m³ pour les astéroïdes rocheux) et des vitesses d\'entrée atmosphérique typiques (11 à 72 km/s). L\'énergie résultante est mesurée en mégatonnes de TNT.',
    },
    {
      question: 'Qu\'est-ce que l\'onde de choc thermique ?',
      answer: 'En entrant dans l\'atmosphère, l\'astéroïde comprime l\'air si violemment qu\'il crée une boule de feu mille fois plus brillante que le Soleil. Le rayonnement thermique qui en résulte peut causer des brûlures au troisième degré et enflammer des forêts à des kilomètres de l\'impact.',
    },
    {
      question: 'Pourquoi certains astéroïdes ne créent-ils pas de cratère ?',
      answer: 'Les roches plus petites (<50m) se fragmentent et explosent généralement dans l\'atmosphère à cause de la pression de l\'air (Explosion aérienne), comme à Chelyabinsk. L\'énergie est libérée sous forme d\'une puissante onde de choc, mais elle ne touche pas le sol en un seul corps solide.',
    },
    {
      question: 'Quelle est la probabilité réelle d\'un impact ?',
      answer: 'Les petits impacts (comme en Russie en 2013) se produisent chaque décennie. Les impacts catastrophiques (type Tunguska) tous les quelques siècles. Un événement d\'extinction mondiale comme Chicxulub se produit environ tous les 100 millions d\'années.',
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
    activateGPS: 'Activer GPS',
    analysisLabel: 'Analyse',
    dragToMap: 'FAITES GLISSER SUR LA CARTE',
    diameterLabel: 'Diamètre',
    velocityLabel: 'Vitesse',
    typeLabel: 'Type',
    historicalData: 'Données Historiques',
    composition: 'Composition',
    rock: 'Roche',
    iron: 'Fer',
    ice: 'Glace',
    clearAll: 'Tout effacer',
    searching: 'Recherche...',
    gpsActive: 'GPS Actif',
    gpsError: 'Erreur GPS',
    verdictSafe: 'ZONE SÛRE',
    verdictSafeSub: 'Aucune menace',
    verdictShock: 'ONDE DE CHOC',
    verdictShockSub: 'Dommages structurels',
    verdictBurned: 'RADIATIONS THERMIQUES',
    verdictBurnedSub: 'Danger extrême',
    verdictVaporized: 'ZONE ZÉRO',
    verdictVaporizedSub: 'Impact direct',
    presetAerial: 'Aérien',
    presetForest: 'Forêt',
    presetComet: 'Comète',
    presetELE: 'E.L.E.',
  },
  seo: [
    {
      type: 'title',
      text: 'Quand le Ciel Tombe: La Physique de l\'Apocalypse Cosmique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les astéroïdes ne sont pas de simples rochers de l\'espace. Ce sont des balles cosmiques voyageant à 20 km/s, capables de libérer plus d\'énergie que toutes les armes nucléaires de la planète réunies. Ce simulateur traduit la physique abstraite en conséquences humaines tangibles.',
    },
    {
      type: 'title',
      text: 'L\'Équation du Jugement Dernier',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tout commence par l\'énergie cinétique: <strong>E = ½mv²</strong>. Un astéroïde de 100 mètres voyageant à 20 km/s libère environ 0,5 mégatonne de TNT. Pour comparaison, la bombe d\'Hiroshima était de 0,015 mégatonne.',
    },
    {
      type: 'paragraph',
      html: 'Mais la taille augmente de façon exponentielle. Un objet 10 fois plus grand a 1 000 fois plus de volume (et de masse), libérant une énergie équivalente à <strong>500 mégatonnes</strong>. Chicxulub, le tueur de dinosaures, a libéré l\'équivalent de <strong>100 millions de mégatonnes</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Un astéroïde d\'un kilomètre frappant la Terre libérerait plus d\'énergie que toutes les armes nucléaires du monde détonées simultanément.',
    },
    {
      type: 'title',
      text: 'Anatomie de la Destruction: Les Couches Concentriques de l\'Apocalypse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Le Cratère (Zone Zéro) :</strong> Le diamètre du cratère augmente selon E^0,3. Un impact d\'une mégatonne crée un cratère de ~1 km. Tout à l\'intérieur est instantanément vaporisé.',
        '<strong>Radiations Thermiques (Le Flash) :</strong> La boule de feu émet un rayonnement infrarouge intense. À une distance de E^0,41 km, les vêtements s\'enflamment et la peau subit des brûlures au troisième degré.',
        '<strong>Onde de Choc (Le Marteau) :</strong> L\'onde de surpression voyage à une vitesse supersonique. À 1 psi, les fenêtres explosent. À 5 psi, les bâtiments s\'effondrent.',
        '<strong>Tremblement de Terre (L\'Écho Sismique) :</strong> L\'impact génère des ondes sismiques mondiales. Chicxulub a provoqué un séisme de magnitude 11, brisant l\'échelle de Richter.',
      ],
    },
    {
      type: 'title',
      text: 'Impacts Historiques: Les Leçons du Passé',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Lieu & Année', 'Taille', 'Énergie', 'Effets'],
      rows: [
        ['Chelyabinsk, Russie (2013)', '20 mètres', '500 kilotonnes', 'Onde de choc à 100 km, 1 500 blessés, vitres brisées'],
        ['Tunguska, Sibérie (1908)', '50-60 mètres', '10-15 mégatonnes', '2 000 km² de forêt rasés, 80 millions d\'arbres abattus'],
        ['Chicxulub, Golfe du Mexique (66 M années)', '10 km', '100 millions de mégatonnes', 'Extinction de 75 % de la vie sur Terre'],
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
        text: step.text,
      })),
    },
  ],
};


