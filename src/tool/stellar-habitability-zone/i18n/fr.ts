import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'zone-habitable-stellaire';
const description = 'Calculez et visualisez les zones habitables (zone Boucles d\'or) autour de différents types d\'étoiles en utilisant des configurations stellaires et planétaires.';
const title = 'Simulateur de Zone Habitable Stellaire: Trouver les Zones Boucles d\'Or';

const howTo = [
  {
    name: 'Sélectionner un préréglage stellaire',
    text: 'Choisissez un type d\'étoile, des géantes bleues aux naines rouges, pour charger les propriétés physiques standard telles que la masse, la luminosité et la température.',
  },
  {
    name: 'Ajuster les paramètres planétaires',
    text: 'Modifiez la distance orbitale de la planète (demi-grand axe), l\'albédo et l\'effet de serre de l\'atmosphère à l\'aide des curseurs interactifs.',
  },
  {
    name: 'Analyser l\'orbite et l\'habitabilité',
    text: 'Observez la planète en orbite autour de l\'étoile en temps réel. Vérifiez si les températures d\'équilibre et de surface permettent l\'existence d\'eau liquide.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce que la zone habitable circumstellaire ?',
    answer: 'La zone habitable circumstellaire (souvent appelée zone Boucles d\'or) est la région autour d\'une étoile où les températures à la surface d\'une planète sont suffisantes pour maintenir de l\'eau liquide sous une pression atmosphérique donnée. Elle est définie par des limites conservatrices et optimistes basées sur la luminosité et la température effective de l\'étoile.',
  },
  {
    question: 'Comment la luminosité stellaire affecte-t-elle la zone habitable ?',
    answer: 'La luminosité stellaire détermine la quantité totale d\'énergie émise par l\'étoile. Les étoiles les plus chaudes et les plus massives (comme les étoiles de type O, B ou A) sont extrêmement brillantes, ce qui place leur zone habitable beaucoup plus loin. Les étoiles plus froides et moins massives (comme les naines rouges de type K ou M) ont de faibles luminosités, déplaçant leur zone habitable très près de l\'étoile.',
  },
  {
    question: 'Quelle est la différence entre la température d\'équilibre et la température de surface ?',
    answer: 'La température d\'équilibre est la température théorique qu\'aurait une planète en supposant qu\'elle se comporte comme un corps noir absorbant le rayonnement stellaire et le réémettant vers l\'espace. La température de surface inclut l\'effet de serre de l\'atmosphère de la planète, qui piège la chaleur et réchauffe davantage la planète.',
  },
  {
    question: 'Pourquoi l\'albédo est-il important pour l\'habitabilité d\'une planète ?',
    answer: 'L\'albédo est la mesure de la réflexivité de la surface de la planète. Un albédo plus élevé (proche de 1.0) signifie que la planète réfléchit davantage la lumière stellaire incidente, ce qui la refroidit. Un albédo plus faible signifie que plus de rayonnement est absorbé, ce qui augmente sa température globale.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Simulateur de Zone Habitable Stellaire',
    starPresetsLabel: 'Préréglages Spectraux',
    customStarHeader: 'Paramètres Stellaires',
    starTemperature: 'Température Effective (K)',
    starLuminosity: 'Luminosité (L/L⊙)',
    starMass: 'Masse (M/M⊙)',
    starRadius: 'Rayon (R/R⊙)',
    planetHeader: 'Paramètres Planétaires',
    planetDistance: 'Distance Orbitale (UA)',
    planetAlbedo: 'Albédo de Bond',
    greenhouseDelta: 'Réchauffement de Serre (K)',
    resultsHeader: 'Résultats de la Simulation',
    stellarFluxResult: 'Flux Stellaire Reçu',
    eqTempResult: 'Température d\'Équilibre',
    surfTempResult: 'Température de Surface Estimée',
    orbitPeriodResult: 'Période Orbitale',
    orbitVelocityResult: 'Vitesse Orbitale',
    hzLimitsHeader: 'Limites de la Zone Habitable',
    innerLimit: 'Limite Interne Conservatrice',
    outerLimit: 'Limite Externe Conservatrice',
    optInnerLimit: 'Limite Interne Optimiste',
    optOuterLimit: 'Limite Externe Optimiste',
    orbitCanvasTitle: 'Visualisateur d\'Orbite Interactif',
    statusLabel: 'Statut d\'Habitabilité',
    statusTooHot: 'TROP CHAUD (L\'eau s\'évapore)',
    statusHabitable: 'HABITABLE (Eau liquide possible)',
    statusTooCold: 'TROP FROID (L\'eau gèle)',
    statusExplanation: 'Selon les limites conservatrices, cette planète se trouve dans l\'état de zone habitable spécifié.',
    unitsLabel: 'Système d\'Unités',
    unitsScientific: 'Scientifique',
    unitsImperial: 'Impérial',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBIOLOGIE: Physique des Zones Habitables Stellaires',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La recherche de la vie au-delà de la Terre commence par la compréhension des conditions physiques requises pour l\'eau liquide. Les astrobiologistes utilisent des modèles mathématiques pour cartographier les limites des zones habitables autour de différents types d\'étoiles. Ce simulateur utilise les modèles de Kopparapu et al. (2013) pour estimer le flux d\'énergie reçu par les planètes et déterminer si elles se situent dans la zone Boucles d\'or. La zone habitable est définie comme la région où une planète de masse terrestre dotée d\'une atmosphère de CO2-H2O-N2 peut maintenir de l\'eau liquide à sa surface.',
    },
    {
      type: 'title',
      text: 'Formules Mathématiques et Physique Atmosphérique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les limites de la zone habitable sont déterminées en calculant le flux stellaire effectif (Seff) requis pour déclencher un effet de serre emballé ou maximal. L\'équation pour Seff dépend de la température effective de l\'étoile (Teff) :<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>où T* = Teff - 5780 K, et les coefficients (a, b, c, d) sont empiriquement dérivés de modèles climatiques radiatifs-convectifs unidimensionnels. Une fois Seff calculé, la distance orbitale d en unités astronomiques (UA) est donnée par :<br><br>d = sqrt(L / Seff)<br><br>où L est la luminosité de l\'étoile par rapport au Soleil. La température d\'équilibre (Teq) de la planète est calculée en supposant un corps noir sphérique en équilibre thermique :<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>où R* est le rayon stellaire, A est l\'albédo de Bond planétaire, et S est le flux stellaire reçu en unités de la constante solaire de la Terre.',
    },
    {
      type: 'title',
      text: 'Classification Spectrale et Limites Habitables',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les caractéristiques stellaires varient considérablement d\'un type spectral à l\'autre. Voici un résumé des propriétés typiques et des limites de la ZH :',
    },
    {
      type: 'table',
      headers: [
        'Classe Spectrale',
        'Température (K)',
        'Luminosité (L/L⊙)',
        'Limite Interne ZH (UA)',
        'Limite Externe ZH (UA)',
      ],
      rows: [
        ['Type O (Géante)', '40 000', '100 000', '300.0', '530.0'],
        ['Type B (Géante)', '20 000', '1 000', '30.1', '53.2'],
        ['Type A (Sirius)', '8 500', '20.0', '4.2', '7.4'],
        ['Type F (Procyon)', '6 500', '2.5', '1.5', '2.6'],
        ['Type G (Soleil)', '5 778', '1.0', '0.95', '1.67'],
        ['Type K (Naine)', '4 500', '0.15', '0.37', '0.65'],
        ['Type M (Naine)', '3 200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Impact de la Classe Spectrale sur l\'Habitabilité',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chaque classe spectrale crée un environnement gravitationnel et radiatif unique pour ses planètes :<br><br><strong>Étoiles de type O et B :</strong> Ces étoiles bleues massives émettent un rayonnement ultraviolet (UV) intense et ont des durées de vie extrêmement courtes (dizaines de millions d\'années). L\'eau liquide pourrait exister sur leurs mondes extérieurs, mais la vie n\'aurait pas le temps d\'évoluer avant que l\'étoile n\'explose en supernova.<br><br><strong>Étoiles de type A et F :</strong> Ces étoiles sont plus brillantes et plus chaudes que le Soleil. Leurs zones habitables sont larges et éloignées, ce qui minimise les effets de rotation synchrone. Cependant, des niveaux élevés de rayonnement proche-UV peuvent endommager gravement les molécules organiques sans couche d\'ozone protectrice.<br><br><strong>Étoiles de type G (semblables au Soleil) :</strong> Fournissant un flux lumineux stable pendant des milliards d\'années, ces étoiles représentent les cibles prioritaires de la recherche de vie. Leur rayonnement correspond aux exigences de la biochimie standard.<br><br><strong>Étoiles de type K (naines oranges) :</strong> Considérées par de nombreux astrobiologistes comme des hôtes "superhabitables", les naines oranges vivent des dizaines de milliards d\'années, émettent moins d\'UV nocifs que les étoiles de type G et ne sont pas aussi sujettes aux éruptions violentes associées aux jeunes naines M.<br><br><strong>Étoiles de type M (naines rouges) :</strong> Les étoiles les plus courantes de la galaxie. Parce que leur zone habitable se situe extrêmement près (généralement < 0,2 UA), les planètes sont sujettes à la rotation synchrone (une face fait face en permanence à l\'étoile). De plus, les naines M actives produisent des vents stellaires et des éruptions de haute énergie qui peuvent dépouiller les atmosphères planétaires.',
    },
    {
      type: 'title',
      text: 'Facteurs Critiques dans les Milieux Habitables Planétaires',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'environnement physique d\'une planète est façonné par de multiples variables au-delà de sa seule distance par rapport à son étoile hôte :',
    },
    {
      type: 'list',
      items: [
        '<strong>Effet de Serre Atmosphérique :</strong> Les gaz à effet de serre naturels augmentent la température de surface au-dessus de la valeur d\'équilibre du corps noir. Les planètes telluriques ont besoin de cycles carbone-silicate pour stabiliser le CO2 atmosphérique et réguler les températures sur des échelles de temps géologiques.',
        '<strong>Albédo de Bond Planétaire :</strong> Une réflectivité élevée (due aux nuages, aux calottes glaciaires ou aux aérosols de sulfate) refroidit la planète, tandis qu\'un albédo faible (sols sombres, plans d\'eau) emprisonne davantage d\'énergie stellaire.',
        '<strong>Champs Magnétiques :</strong> Une magnétosphère planétaire puissante protège l\'atmosphère des vents stellaires, empêchant l\'échappement atmosphérique non thermique et la perte d\'eau.',
        '<strong>Dynamique de Piégeage de l\'Eau :</strong> L\'effet de piège froid dans la haute atmosphère empêche la vapeur d\'eau d\'atteindre des altitudes élevées où le rayonnement UV stellaire la dissocierait en hydrogène et en oxygène.',
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
