import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-albedo-global-terre-boule-neige';
const title = 'Simulateur Global d\u2019Albedo et de Terre Boule de Neige';
const description = 'Explorez le bilan radiatif terrestre, les variations de la constante solaire, la concentration en gaz \u00e0 effet de serre et la r\u00e9troaction glace-alb\u00e9do pour voir si les calottes glaciaires reculent, se stabilisent ou d\u00e9clenchent un climat boule de neige.';

const howTo = [
  {
    name: 'R\u00e9gler l\u2019ensoleillement',
    text: 'D\u00e9placez le curseur de la constante solaire pour tester des sc\u00e9narios de Soleil jeune plus faible, d\u2019ensoleillement terrestre actuel ou de for\u00e7age futur plus intense.',
  },
  {
    name: 'Ajuster la concentration de gaz \u00e0 effet de serre',
    text: 'Modifiez la concentration de gaz \u00e0 effet de serre pour observer comment le for\u00e7age radiatif entre en comp\u00e9tition avec un alb\u00e9do plan\u00e9taire plus \u00e9lev\u00e9.',
  },
  {
    name: 'Initialiser la couverture de glace',
    text: 'Commencez avec une petite calotte polaire ou un monde largement englac\u00e9. Le mod\u00e8le it\u00e8re la boucle de r\u00e9troaction et indique si la glace avance ou recule.',
  },
  {
    name: 'Interpr\u00e9ter l\u2019\u00e9tat climatique',
    text: 'Utilisez la temp\u00e9rature, le rayonnement absorb\u00e9, la couverture de glace finale et la courbe d\u2019\u00e9volution pour comparer les r\u00e9gimes temp\u00e9r\u00e9, boule de neige et serre chaude.',
  },
];

const faq = [
  {
    question: 'Qu\u2019est-ce que la r\u00e9troaction glace-alb\u00e9do ?',
    answer: 'La glace et la neige r\u00e9fl\u00e9chissent davantage le rayonnement solaire que l\u2019oc\u00e9an ou la terre ferme. Lorsque la glace s\u2019\u00e9tend, l\u2019alb\u00e9do plan\u00e9taire augmente, l\u2019\u00e9nergie solaire absorb\u00e9e diminue et le refroidissement peut permettre \u00e0 encore plus de glace de se former. Lorsque la glace recule, la surface plus sombre absorbe plus d\u2019\u00e9nergie et le r\u00e9chauffement s\u2019acc\u00e9l\u00e8re.',
  },
  {
    question: 'Que signifie Terre Boule de Neige ?',
    answer: 'La Terre Boule de Neige est un \u00e9tat climatique hypoth\u00e9tique dans lequel la glace atteint de basses latitudes ou une couverture quasi globale. Des indices g\u00e9ologiques sugg\u00e8rent que la Terre aurait pu approcher de tels \u00e9tats durant l\u2019\u00e8re n\u00e9oprot\u00e9rozo\u00efque.',
  },
  {
    question: 'S\u2019agit-il d\u2019un mod\u00e8le climatique complet ?',
    answer: 'Non. Il s\u2019agit d\u2019un mod\u00e8le compact de bilan \u00e9nerg\u00e9tique con\u00e7u pour l\u2019apprentissage. Il ignore la circulation atmosph\u00e9rique, les nuages, le transport de chaleur oc\u00e9anique, les saisons, la g\u00e9ographie et les r\u00e9troactions du cycle du carbone, mais il capte la logique radiative fondamentale de la r\u00e9troaction de l\u2019alb\u00e9do.',
  },
  {
    question: 'Pourquoi les gaz \u00e0 effet de serre peuvent-ils briser un \u00e9tat boule de neige ?',
    answer: 'Les gaz \u00e0 effet de serre r\u00e9duisent le refroidissement par rayonnement infrarouge sortant en ajoutant un for\u00e7age radiatif. Dans les sc\u00e9narios de Terre Boule de Neige, le dioxyde de carbone volcanique peut s\u2019accumuler lorsque l\u2019alt\u00e9ration des silicates ralentit, r\u00e9chauffant finalement la plan\u00e8te assez pour faire fondre la glace aux basses latitudes.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Contr\u00f4les climatiques',
    solarConstant: 'Constante solaire',
    greenhouse: 'Gaz \u00e0 effet de serre',
    initialIce: 'Couverture de glace initiale',
    temperature: 'Temp\u00e9rature d\u2019\u00e9quilibre',
    absorbed: 'Rayonnement solaire absorb\u00e9',
    finalIce: 'Couverture de glace finale',
    albedo: 'Alb\u00e9do plan\u00e9taire',
    forcing: 'For\u00e7age radiatif',
    state: '\u00c9tat climatique',
    timeline: '\u00c9volution de la glace',
    years: 'ann\u00e9es du mod\u00e8le',
    snowball: 'Verrouillage boule de neige',
    temperate: '\u00c9quilibre temp\u00e9r\u00e9',
    hothouse: 'Retrait serre chaude',
    retreating: 'Glace en retrait',
    advancing: 'Glace en avanc\u00e9e',
    stable: 'Proche de l\u2019\u00e9quilibre',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Diagnostic radiatif',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur global d\u2019alb\u00e9do pour la r\u00e9troaction glace-alb\u00e9do et la Terre Boule de Neige',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur explore l\u2019une des boucles de r\u00e9troaction les plus importantes du climat plan\u00e9taire: le lien entre la couverture de glace, la r\u00e9flectivit\u00e9 et le rayonnement solaire absorb\u00e9. Une plan\u00e8te avec une glace brillante r\u00e9fl\u00e9chit davantage de rayonnement solaire entrant vers l\u2019espace. Ce refroidissement peut pr\u00e9server ou \u00e9tendre la glace, augmentant encore l\u2019alb\u00e9do et poussant le syst\u00e8me vers un \u00e9tat de Terre Boule de Neige. Une plan\u00e8te avec moins de glace absorbe plus de rayonnement solaire, ce qui peut acc\u00e9l\u00e9rer la d\u00e9glaciation.',
    },
    {
      type: 'paragraph',
      html: 'Utilisez les curseurs pour modifier la constante solaire, la concentration en gaz \u00e0 effet de serre et la couverture de glace initiale. Le mod\u00e8le it\u00e8re ensuite un bilan \u00e9nerg\u00e9tique global simple et indique si le climat \u00e9volue vers une glaciation \u00e9tendue, un \u00e9quilibre temp\u00e9r\u00e9 ou un \u00e9tat chaud \u00e0 faible couverture de glace. Il est con\u00e7u pour une intuition rapide: chaque param\u00e8tre correspond directement \u00e0 un terme physique du bilan radiatif.',
    },
    {
      type: 'title',
      text: 'Comment le bilan \u00e9nerg\u00e9tique est estim\u00e9',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le rayonnement solaire absorb\u00e9 est estim\u00e9 par S(1 \u2013 a) / 4, o\u00f9 S est la constante solaire et a l\u2019alb\u00e9do plan\u00e9taire. La division par quatre convertit le rayonnement solaire intercept\u00e9 par le disque terrestre en une moyenne sur l\u2019ensemble de la surface sph\u00e9rique. Un alb\u00e9do plus \u00e9lev\u00e9 r\u00e9duit l\u2019\u00e9nergie absorb\u00e9e ; une concentration plus \u00e9lev\u00e9e de gaz \u00e0 effet de serre ajoute un for\u00e7age radiatif positif qui augmente l\u2019estimation de la temp\u00e9rature de surface.',
    },
    {
      type: 'table',
      headers: ['Param\u00e8tre', 'Signification physique', 'Effet climatique'],
      rows: [
        ['Constante solaire', '\u00c9nergie stellaire incidente \u00e0 l\u2019orbite terrestre', 'Des valeurs \u00e9lev\u00e9es r\u00e9chauffent la plan\u00e8te et r\u00e9duisent la glace.'],
        ['Gaz \u00e0 effet de serre', 'For\u00e7age radiatif infrarouge par rapport \u00e0 une atmosph\u00e8re de r\u00e9f\u00e9rence', 'Des valeurs \u00e9lev\u00e9es rendent le verrouillage boule de neige plus difficile.'],
        ['Couverture de glace initiale', 'R\u00e9flectivit\u00e9 de d\u00e9part de la plan\u00e8te', 'Des valeurs \u00e9lev\u00e9es peuvent d\u00e9clencher un refroidissement incontr\u00f4l\u00e9 par r\u00e9troaction de l\u2019alb\u00e9do.'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi la r\u00e9troaction de l\u2019alb\u00e9do peut devenir non lin\u00e9aire',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La boucle glace-alb\u00e9do n\u2019est pas un simple ajustement unidirectionnel. Une fois que la glace couvre une fraction suffisante de la plan\u00e8te, la surface plus brillante peut soustraire tant de rayonnement solaire absorb\u00e9 que la fonte estivale devient trop faible. Dans la direction oppos\u00e9e, le recul de la glace expose un oc\u00e9an et des terres plus sombres, augmentant l\u2019absorption et \u00e9loignant la plan\u00e8te de la glaciation. C\u2019est pourquoi des for\u00e7ages similaires peuvent produire des r\u00e9sultats diff\u00e9rents selon la couverture de glace initiale.',
    },
    {
      type: 'paragraph',
      html: 'La Terre r\u00e9elle ajoute de nombreuses complications: nuages, poussi\u00e8re sur la glace, transport de chaleur oc\u00e9anique, positions continentales, ensoleillement saisonnier, dynamique de la glace de mer et cycle du carbone. Un mod\u00e8le simple conserve n\u00e9anmoins sa valeur car il isole le bilan radiatif de premier ordre. Il permet de comprendre pourquoi les hypoth\u00e8ses de Terre Boule de Neige d\u00e9pendent \u00e0 la fois d\u2019un ensoleillement faible ou d\u2019un alb\u00e9do \u00e9lev\u00e9 comme d\u00e9clencheur, puis d\u2019une accumulation de gaz \u00e0 effet de serre pour en sortir.',
    },
    {
      type: 'title',
      text: 'Interpr\u00e9ter le simulateur',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Verrouillage boule de neige :</strong> la couverture de glace finale est tr\u00e8s \u00e9lev\u00e9e et la temp\u00e9rature d\u2019\u00e9quilibre reste bien en dessous du point de cong\u00e9lation.',
        '<strong>\u00c9quilibre temp\u00e9r\u00e9 :</strong> le mod\u00e8le se stabilise avec une couverture de glace partielle et un rayonnement absorb\u00e9 mod\u00e9r\u00e9.',
        '<strong>Retrait serre chaude :</strong> la glace s\u2019effondre \u00e0 une fraction tr\u00e8s faible tandis que le for\u00e7age radiatif et le rayonnement solaire absorb\u00e9 restent \u00e9lev\u00e9s.',
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
