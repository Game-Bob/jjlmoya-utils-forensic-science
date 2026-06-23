import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'estimateur-age-dentaire-squelettique-troisieme-molaire';
const title = 'Estimateur d\'âge dentaire, squelettique et troisième molaire';
const description = 'Estimez un intervalle d\'âge médico-légal basé sur le développement dentaire, la maturité squelettique et les indicateurs des troisièmes molaires pour le criblage et le triage des cas.';

const howTo = [
  {
    name: 'Sélectionnez la pondération des preuves',
    text: 'Choisissez "Preuves mixtes" pour un triage équilibré, "Priorité dentaire" si les résultats dentaires sont plus robustes, ou "Priorité squelettique" lorsque les indicateurs radiographiques osseux constituent la source principale.',
  },
  {
    name: 'Évaluez chaque indicateur de maturité',
    text: 'Attribuez un stade de 0 à 8 à chaque indicateur. Les stades inférieurs reflètent un développement précoce, les stades intermédiaires une maturation adolescente, et les stades supérieurs des résultats matures ou quasi matures.',
  },
  {
    name: 'Interprétez l\'intervalle, pas seulement l\'âge central',
    text: 'Considérez simultanément les âges minimum, probable et maximum. L\'évaluation médico-légale de l\'âge doit toujours être exprimée sous forme d\'intervalle, compte tenu de la variabilité biologique interindividuelle.',
  },
  {
    name: 'Identifiez les discordances entre indicateurs',
    text: 'Si les stades dentaires, squelettiques et des troisièmes molaires pointent vers des tranches d\'âge divergentes, considérez le résultat comme exploratoire et collectez des preuves complémentaires avant de conclure.',
  },
];

const faq = [
  {
    question: 'Cet estimateur d\'âge médico-légal peut-il déterminer la majorité légale ?',
    answer: 'Non. Cet outil est un calculateur de criblage destiné à des fins éducatives et de triage. La détermination légale de l\'âge exige des protocoles locaux validés, l\'expertise de professionnels qualifiés, une documentation d\'identité rigoureuse et le respect des normes juridictionnelles.',
  },
  {
    question: 'Pourquoi le résultat présente-t-il un intervalle d\'âge ?',
    answer: 'L\'éruption dentaire, la fusion squelettique et le développement des troisièmes molaires varient selon l\'ascendance, la nutrition, l\'état de santé, le sexe, la population de référence et la méthode d\'imagerie. Un intervalle est une mesure plus honnête et précise qu\'un âge exact unique.',
  },
  {
    question: 'Que signifie "Preuves mixtes" ?',
    answer: 'Le mode "Preuves mixtes" pondère équitablement le développement dentaire, la maturité squelettique et le stade des troisièmes molaires. Utilisez-le lorsqu\'aucun indicateur n\'est manifestement plus fiable que les autres pour le dossier concerné.',
  },
  {
    question: 'Les troisièmes molaires sont-elles fiables dans tous les cas ?',
    answer: 'Bien qu\'utiles à la fin de l\'adolescence et au début de l\'âge adulte, les troisièmes molaires présentent une forte variabilité. L\'agénésie, les pathologies, les différences populationnelles et la qualité radiographique peuvent limiter leur valeur diagnostique.',
  },
  {
    question: 'Cet outil est-il adapté aux cas réels ?',
    answer: 'Il ne doit servir que d\'aide préliminaire. Tout cas réel nécessite l\'usage de méthodes validées, de données de référence calibrées, d\'une relecture indépendante et d\'un rapport transparent soulignant les incertitudes et limites.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: 'Tableau de cas médico-légal',
    controls: 'Contrôles de l\'âge médico-légal',
    results: 'Résultats d\'âge médico-légal',
    maturityProfile: 'Profil dynamique de maturité',
    screeningOnly: 'Estimation de criblage',
    evidenceType: 'Pondération des preuves',
    mixedEvidence: 'Preuves mixtes',
    dentalPriority: 'Priorité dentaire',
    skeletalPriority: 'Priorité squelettique',
    dentalStage: 'Stade de développement dentaire',
    epiphysealStage: 'Stade de fusion épiphysaire',
    thirdMolarStage: 'Stade de la troisième molaire',
    minimumAge: 'Minimum',
    likelyAge: 'Probable',
    maximumAge: 'Maximum',
    maturityScore: 'Score de maturité',
    stageLabel: 'Stade',
    ageUnit: 'ans',
    dentalShort: 'Dentaire',
    boneShort: 'Os',
    molarShort: 'Molaire',
    dentalStageHelp: 'Formation de la couronne, de la racine et de l\'apex.',
    epiphysealStageHelp: 'Fermeture du cartilage de croissance et fusion squelettique.',
    molarStageHelp: 'Minéralisation de la troisième molaire et fermeture de l\'apex.',
    dentalStage0: 'Absent',
    dentalStage1: 'Cuspide',
    dentalStage2: 'Couronne',
    dentalStage3: 'Début racine',
    dentalStage4: 'Racine moitié',
    dentalStage5: 'Racine longue',
    dentalStage6: 'Apex étroit',
    dentalStage7: 'Apex fermant',
    dentalStage8: 'Complète',
    epiphysealStage0: 'Ouverte',
    epiphysealStage1: 'Bord',
    epiphysealStage2: 'Rétrécissement',
    epiphysealStage3: 'Pont',
    epiphysealStage4: 'Moitié fusionnée',
    epiphysealStage5: 'Presque fusionnée',
    epiphysealStage6: 'Ligne seulement',
    epiphysealStage7: 'Presque fermée',
    epiphysealStage8: 'Fermée',
    molarStage0: 'Absente',
    molarStage1: 'Cuspide',
    molarStage2: 'Début couronne',
    molarStage3: 'Couronne complète',
    molarStage4: 'Début racine',
    molarStage5: 'Racine moitié',
    molarStage6: 'Racine longue',
    molarStage7: 'Apex fermant',
    molarStage8: 'Complète',
    confidenceexploratory: 'Exploratoire',
    confidencemoderate: 'Modéré',
    confidencestrong: 'Fort',
    noteTriage: 'Utilisez cette estimation pour le triage, non pour une détermination légale.',
    noteFinalAssessment: 'L\'évaluation finale doit intégrer radiologie, examen clinique, antécédents documentés et standards juridictionnels.',
    noteWideInterval: 'Les indicateurs divergent de plus de quatre ans ; l\'intervalle a été élargi en conséquence.',
  },
  seo: [
    {
      type: 'title',
      text: 'Estimateur d\'âge médico-légal: Calculateur de criblage dentaire et squelettique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utilisez cet estimateur d\'âge médico-légal pour organiser de manière transparente les indices de maturité biologique avant toute évaluation formelle. L\'outil combine le développement dentaire, la fusion épiphysaire et le stade des troisièmes molaires pour générer un intervalle d\'âge estimé. Il répond aux besoins des professionnels recherchant un <strong>calculateur d\'estimation d\'âge médico-légal</strong>, une <strong>évaluation de l\'âge dentaire</strong> ou une <strong>estimation de la maturité squelettique</strong>, tout en clarifiant l\'incertitude inhérente aux résultats.',
    },
    {
      type: 'paragraph',
      html: 'Les résultats sont présentés sous forme d\'<strong>âge minimum, probable et maximum</strong>. Une estimation ponctuelle unique serait trompeuse, la variabilité biologique étant significative. Ce calculateur est une aide structurée au triage, et ne saurait en aucun cas remplacer une conclusion légale.',
    },
    {
      type: 'title',
      text: 'Signification des indicateurs de maturité',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les stades (0 à 8) offrent une abstraction pratique permettant de comparer différents systèmes biologiques. Le stade 0 indique une maturité absente ou très précoce ; le stade 8 une maturité complète. Ces stades facilitent la comparaison croisée sans se limiter à une unique méthode clinique.',
    },
    {
      type: 'table',
      headers: ['Indicateur', 'Description', 'Utilité', 'Précautions'],
      rows: [
        ['Développement dentaire', 'Formation et éruption (hors troisièmes molaires).', 'Indicateur clé chez l\'enfant et l\'adolescent.', 'Biais possibles via pathologies dentaires ou différences populationnelles.'],
        ['Fusion épiphysaire', 'Fermeture progressive des cartilages de croissance.', 'Indicateur majeur chez l\'adolescent et le jeune adulte.', 'Dépend étroitement de l\'os étudié, du sexe et de la santé endocrine.'],
        ['Stade 3ème molaire', 'Formation des dents de sagesse.', 'Évaluation essentielle en fin d\'adolescence.', 'Très variable ; nécessité de vérifier agénésies et inclusions.'],
      ],
    },
    {
      type: 'title',
      text: 'Interprétation de l\'intervalle d\'âge',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>âge probable</strong> représente l\'estimation centrale pondérée. Les valeurs <strong>minimum</strong> et <strong>maximum</strong> définissent la marge d\'incertitude pratique. Une convergence des indicateurs affine cette marge, tandis que des signaux contradictoires l\'élargissent, diminuant ainsi le niveau de confiance.',
    },
    {
      type: 'table',
      headers: ['Modèle de résultat', 'Interprétation', 'Action recommandée'],
      rows: [
        ['Intervalle étroit / Forte confiance', 'Les indicateurs concordent.', 'Documentez les sources et validez la nécessité d\'une méthode formelle.'],
        ['Intervalle modéré', 'Discordances ou pondération impactant l\'estimation.', 'Vérifiez la qualité des images et les stades attribués.'],
        ['Intervalle exploratoire large', 'Les indicateurs sont en conflit.', 'Ne pas conclure seul ; sollicitez des dossiers complémentaires ou l\'avis d\'un spécialiste.'],
      ],
    },
    {
      type: 'title',
      text: 'Choisir le mode d\'évidence',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le mode <strong>Preuves mixtes</strong> est le standard pour le triage général. Utilisez la <strong>Priorité dentaire</strong> lorsque les données dentaires sont complètes et fiables. Utilisez la <strong>Priorité squelettique</strong> si l\'imagerie osseuse constitue la donnée la plus robuste. Ces modes ne renforcent pas la qualité des preuves, ils ajustent uniquement leur pondération mathématique.',
    },
    {
      type: 'list',
      items: [
        '<strong>Priorité dentaire :</strong> si le développement est bien documenté et les troisièmes molaires visibles.',
        '<strong>Priorité squelettique :</strong> si la fusion épiphysaire est le signal le mieux documenté.',
        '<strong>Preuves mixtes :</strong> idéal pour un examen préliminaire équilibré.',
        '<strong>Indice de confiance :</strong> surveillez-le pour détecter les désaccords avant toute surinterprétation.',
      ],
    },
    {
      type: 'title',
      text: 'Limites médico-légales',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'estimation de l\'âge est un support, non une preuve d\'identité. Dans les contextes de protection de l\'enfance, de droit pénal ou d\'identification de victimes, l\'approche doit être multidisciplinaire. Tout rapport doit préciser la méthodologie, la population de référence, les qualifications de l\'observateur et les limites identifiées.',
    },
    {
      type: 'paragraph',
      html: 'Cet outil est un instrument d\'<strong>éducation, de triage et de communication</strong>. Il illustre pourquoi les conclusions sur l\'âge imposent une extrême prudence et pourquoi les seuils légaux (comme la majorité à 18 ans) ne doivent jamais reposer sur un simple calcul automatisé.',
    },
    {
      type: 'title',
      text: 'Check-list pour le rapport médico-légal',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sources des preuves :</strong> Documentez si les stades proviennent d\'examens dentaires, panoramiques ou imagerie squelettique (main-poignet, clavicule, etc.).',
        '<strong>Données lacunaires :</strong> Mentionnez clairement les absences, la mauvaise qualité d\'image ou les anomalies.',
        '<strong>Validation méthodologique :</strong> Assurez-vous que les méthodes choisies sont reconnues dans votre juridiction.',
        '<strong>Communication de l\'incertitude :</strong> Exprimez toujours une fourchette, évitez les termes impliquant un âge chronologique exact.',
        '<strong>Avis spécialisé :</strong> Les cas à enjeux élevés doivent impérativement être relus par des odontologistes légistes, radiologues ou anthropologues.',
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