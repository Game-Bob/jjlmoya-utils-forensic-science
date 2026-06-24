import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'determination-sexe-biologique-anthropologie-medicolegale-bayesien';
const title = 'Determinateur de sexe en anthropologie medicolegale';
const description = 'Estimez le sexe biologique à partir de la morphologie crânienne et pelvienne à l\'aide d\'un modèle de probabilité bayésien.';

const howTo = [
  {
    name: 'Sélectionner la région anatomique à analyser',
    text: 'Décidez si vous souhaitez analyser le bassin, le crâne ou les deux. L\'évaluation des deux zones augmente la précision et la confiance de la classification finale du sexe biologique.',
  },
  {
    name: 'Évaluer chaque trait morphologique',
    text: 'Examinez les spécimens osseux et notez les indicateurs clés sur une échelle de 1 (hyperféminin) à 5 (hypermasculin) en vous basant sur les repères visuels.',
  },
  {
    name: 'Saisir les scores dans le moteur bayésien',
    text: 'Utilisez les sélecteurs déroulants pour saisir le score de chaque trait. Le classificateur met automatiquement à jour la probabilité a posteriori pour les catégories masculine et féminine.',
  },
  {
    name: 'Interpréter les résultats de probabilité',
    text: 'Examinez l\'indicateur de confiance final, la classification de sexe prédominante et lisez les notes de diagnostic médico-légal pour comprendre les variations biologiques.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Qu\'est-ce que la méthode de Phenice pour la détermination du sexe pelvien ?',
    answer: 'La méthode de Phenice, publiée par T. W. Phenice en 1969, se concentre sur trois caractéristiques pelviennes spécifiques: l\'arc ventral, la concavité sous-pubienne et le côté médial de la branche ischio-pubienne. Elle reste l\'une des méthodes morphologiques les plus fiables en anthropologie medicolegale, avec des taux de précision dépassant 95 % lorsqu\'elle est appliquée à des restes squelettiques bien conservés.',
  },
  {
    key: 'faq-2',
    question: 'Pourquoi le bassin est-il préféré au crâne pour l\'estimation du sexe ?',
    answer: 'Le bassin est la partie la plus sexuellement dimorphique du squelette humain car il reflète l\'adaptation fonctionnelle à l\'accouchement chez les femmes. La pression évolutive a façonné le bassin féminin pour qu\'il soit plus large, plus profond et présente des angles plus larges que le bassin masculin, tandis que le dimorphisme crânien est principalement lié à la taille globale du corps et au développement musculaire, rendant le crâne moins fiable.',
  },
  {
    key: 'faq-3',
    question: 'Comment le classificateur bayésien estime-t-il la probabilité de sexe ?',
    answer: 'Notre classificateur utilise un modèle de mise à jour bayésien. Il suppose une probabilité a priori de 50 % pour les deux sexes. Pour chaque marqueur anatomique noté, le modèle multiplie l\'a priori par la vraisemblance d\'obtenir ce score spécifique dans les populations masculines par rapport aux populations féminines. Les scores résultants sont normalisés pour générer une distribution de probabilité a posteriori.',
  },
  {
    key: 'faq-4',
    question: 'Que représente un score de 3 dans l\'analyse morphologique ?',
    answer: 'Un score de 3 représente une morphologie indéterminée ou neutre. Cela indique que le trait présente des caractéristiques qui se situent au milieu du spectre du dimorphisme sexuel humain, ne montrant ni de traits typiquement féminins (1-2) ni de traits typiquement masculins (4-5).',
  },
  {
    key: 'faq-5',
    question: 'Ce modèle peut-il déterminer le sexe des restes squelettiques de subadultes ou d\'enfants ?',
    answer: 'Non. La détermination morphologique du sexe est très peu fiable pour les restes de subadultes car les caractéristiques morphologiques qui différencient les squelettes masculins et féminins ne se développent pleinement qu\'à la puberté. Les anthropologues médico-légaux s\'appuient généralement sur des tests génétiques ou des indicateurs dentaires pour les subadultes, plutôt que sur des repères ostéologiques.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Morphologie Pelvienne',
    craniumRegion: 'Morphologie Crânienne',
    subpubicAngle: 'Angle Sous-Pubien',
    subpubicAngleDesc: 'L\'angle formé sous la symphyse pubienne.',
    subpubicAngleFem: 'Angle large en U (>90°)',
    subpubicAngleMasc: 'Angle étroit en V (<70°)',
    sciaticNotch: 'Grande Échancrure Sciatique',
    sciaticNotchDesc: 'La grande échancrure sciatique dans l\'ilium postérieur.',
    sciaticNotchFem: 'Échancrure large et peu profonde',
    sciaticNotchMasc: 'Échancrure étroite et profonde',
    ventralArc: 'Arc Ventral',
    ventralArcDesc: 'Crête osseuse traversant le pubis antérieur.',
    ventralArcFem: 'Crête élevée proéminente',
    ventralArcMasc: 'Ligne absente ou très ténue',
    preauricularSulcus: 'Sillon Pré-Auriculaire',
    preauricularSulcusDesc: 'Sillon adjacent à l\'articulation sacro-iliaque.',
    preauricularSulcusFem: 'Sillon profond et piqué',
    preauricularSulcusMasc: 'Absent ou lisse',
    mastoidProcess: 'Apophyse Mastoïde',
    mastoidProcessDesc: 'Projection osseuse derrière le canal auditif.',
    mastoidProcessFem: 'Petite et courte projection',
    mastoidProcessMasc: 'Grande et longue projection',
    supraorbitalRidge: 'Arcade Sourcilière',
    supraorbitalRidgeDesc: 'Protubérance de l\'arcade sourcilière (glabelle).',
    supraorbitalRidgeFem: 'Front lisse et plat',
    supraorbitalRidgeMasc: 'Arcade proéminente et saillante',
    mentalEminence: 'Éminence Mentonnière (Menton)',
    mentalEminenceDesc: 'La forme et la saillie du menton.',
    mentalEminenceFem: 'Menton arrondi et pointu',
    mentalEminenceMasc: 'Menton large et carré',
    nuchalCrest: 'Crête Nucale',
    nuchalCrestDesc: 'Crêtes osseuses à l\'arrière du crâne.',
    nuchalCrestFem: 'Plan occipital lisse',
    nuchalCrestMasc: 'Projection rugueuse et crochue',
    selectOption: 'Choisir un score...',
    score1: '1 - Hyperféminin',
    score2: '2 - Féminin',
    score3: '3 - Indéterminé',
    score4: '4 - Masculin',
    score5: '5 - Hypermasculin',
    notEvaluated: 'Non évalué',
    resultsTitle: 'Résultats de la détermination du sexe',
    femaleProbLabel: 'Probabilité Féminine',
    maleProbLabel: 'Probabilité Masculine',
    predominantLabel: 'Classification Prédominante',
    confidenceLabel: 'Confiance de l\'estimation',
    weakConf: 'Faible (Peu d\'indicateurs évalués)',
    moderateConf: 'Modérée',
    strongConf: 'Forte',
    femaleClass: 'Féminin',
    maleClass: 'Masculin',
    indeterminateClass: 'Indéterminé',
    noteNoData: 'Veuillez évaluer au moins un marqueur anatomique pour commencer les calculs.',
    noteTriageOnly: 'Il s\'agit d\'une aide au dépistage éducatif. L\'évaluation médico-légale formelle nécessite une analyse métrique et un examen par plusieurs experts.',
    noteBayesianEst: 'Les probabilités sont calculées de manière dynamique à l\'aide d\'une matrice de vraisemblance bayésienne non paramétrique.',
    pelvicTitle: 'Guide de référence du bassin',
    cranialTitle: 'Guide de référence du crâne',
    pelvisDesc: 'Le bassin féminin est adapté à l\'accouchement, ce qui se traduit par des structures plus larges et des angles plus ouverts. Le bassin masculin est plus robuste, étroit et orienté verticalement.',
    cranialDesc: 'Le crâne masculin est généralement plus grand et plus robuste, avec des apophyses mastoïdes plus grandes, des arcades sourcilières proéminentes et des attaches musculaires ruguesuses. Le crâne féminin est plus gracile, avec des crêtes plus lisses et un menton arrondi.',
  },
  seo: [
    {
      type: 'title',
      text: 'Introduction à la détermination ostéologique du sexe en anthropologie médico-légale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'estimation du sexe biologique est l\'une des étapes fondamentales de l\'établissement d\'un profil biologique pour les restes squelettiques inconnus en anthropologie médico-légale, en toxicologie et en archéologie. Avec la stature, l\'âge au moment du décès et l\'affinité ancestrale, l\'estimation du sexe permet de restreindre le groupe de personnes disparues potentielles. Les squelettes humains présentent un dimorphisme sexuel, c\'est-à-dire des différences physiques entre les mâles et les femelles d\'une même espèce. Ce dimorphisme se traduit à la fois par la taille (robustesse par rapport à la gracilité) et par la forme (spécifiquement les adaptations pelviennes liées à l\'accouchement).',
    },
    {
      type: 'paragraph',
      html: 'Cet outil interactif permet aux étudiants en médecine légale, aux médecins légistes et aux stagiaires d\'évaluer les repères morphologiques du bassin et du crâne. En saisissant des scores basés sur des guides visuels, les utilisateurs peuvent observer comment les marqueurs osseux individuels contribuent à un modèle statistique cumulatif.',
    },
    {
      type: 'title',
      text: 'Dimorphisme pelvien et méthode de Phenice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le bassin est universellement reconnu comme la région du squelette la plus précise pour la détermination du sexe biologique. Les bassins féminins sont plus larges, possèdent un canal de naissance plus grand, une grande échancrure sciatique plus large et un angle sous-pubien dépassant quatre-vingt-dix degrés. À l\'inverse, les bassins masculins se caractérisent par des angles sous-pubiens étroits en forme de V et une échancrure sciatique étroite. La méthode de Phenice se concentre sur trois caractéristiques spécifiques de l\'os pubien: l\'arc ventral, la concavité sous-pubienne et le côté médial de la branche ischio-pubienne. La présence d\'un arc ventral bien défini est un indicateur exceptionnellement fort du sexe féminin, tandis que son absence est typique chez les hommes.',
    },
    {
      type: 'title',
      text: 'Dimorphisme crânien et marqueurs de robustesse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lorsque les os du bassin sont manquants ou mal conservés, le crâne sert d\'alternative principale pour l\'estimation du sexe. L\'évaluation crânienne est basée sur la robustesse, car les crânes masculins présentent généralement des sites d\'attache musculaire plus prononcés et des processus osseux plus grands en raison de différences de développement liées aux hormones. L\'apophyse mastoïde, située derrière l\'oreille, est plus grande et plus large chez les hommes. L\'arcade sourcilière ou glabelle est proéminente et saillante chez les hommes, alors qu\'elle reste lisse et verticale chez les femmes. Le menton (éminence mentonnière) a tendance à être carré et large chez les hommes, tandis que les femmes présentent une structure de menton plus arrondie et pointue.',
    },
    {
      type: 'table',
      headers: ['Repère anatomique', 'Caractéristiques féminines (Scores 1-2)', 'Caractéristiques masculines (Scores 4-5)', 'Valeur médico-légale'],
      rows: [
        ['Angle sous-pubien', 'Angle large, obtus (dépassant souvent 90 degrés).', 'Angle étroit, aigu (généralement moins de 70 degrés).', 'Plus grande valeur diagnostique individuelle pour la détermination du sexe pelvien.'],
        ['Échancrure sciatique', 'Échancrure large et peu profonde ressemblant à un U.', 'Échancrure étroite et profonde ressemblant à un pouce.', 'Marqueur extrêmement durable, souvent préservé dans les restes fragmentés.'],
        ['Apophyse mastoïde', 'Petite, courte et projetant minimalement sous le méat auditif.', 'Grande, longue et projetant significativement vers le bas.', 'Marqueur crânien fiable, résistant aux intempéries.'],
        ['Arcade sourcilière', 'Glabelle lisse et plate avec un profil de front vertical.', 'Arcade proéminente et saillante avec un front incliné.', 'Différencie les crânes masculins robustes des crânes féminins graciles.'],
      ],
    },
    {
      type: 'title',
      text: 'Modélisation mathématique bayésienne dans les classifications morphologiques',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les évaluations médico-légales traditionnelles reposaient sur une classification subjective, ce qui pouvait entraîner un biais de l\'observateur. L\'anthropologie médico-légale moderne intègre des modèles de probabilité statistique pour quantifier l\'incertitude. Les statistiques bayésiennes sont idéales à cette fin, commençant par une probabilité a priori égale (cinquante pour cent d\'hommes, cinquante pour cent de femmes) et la mettant à jour au fur et à mesure que de nouvelles preuves sont introduites. Lorsque les traits pelviens montrent une morphologie hautement féminine (angle sous-pubien large, score 1), la probabilité d\'une classification féminine augmente, l\'emportant sur les marqueurs intermédiaires ou conflictuels présents sur le crâne.',
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur numérique implémente un moteur bayésien non paramétrique. Les calculs fournissent un pourcentage de probabilité plutôt qu\'un résultat binaire, ce qui s\'aligne sur les directives médico-légales modernes qui mettent l\'accent sur la communication des intervalles de confiance et des taux d\'erreur dans les témoignages judiciaires. La confiance de la classification dépend du nombre de repères évalués, les scores des régions pelvienne et crânienne fournissant les résultats les plus robustes.',
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
