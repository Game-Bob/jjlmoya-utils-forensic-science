import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-origine-traces-sang';
const title = 'Simulateur tridimensionnel de l origine des traces de sang';
const description = 'Modélisez des traces de sang elliptiques sur un plan vertical, estimez les angles d impact et visualisez les trajectoires projetées dans une scène 3D interactive.';

const howTo = [
  { name: 'Saisir ou ajuster les traces', text: 'Utilisez le tableau ou la surface 2D pour définir la position, la largeur, la longueur et l orientation de l axe principal de chaque trace.' },
  { name: 'Vérifier les angles d impact', text: 'Le calculateur estime l angle d impact à partir du rapport largeur/longueur en utilisant la fonction arc sinus.' },
  { name: 'Inspecter la convergence 3D', text: 'Faites pivoter la vue pour comparer les trajectoires projetées et la sphère d origine estimée.' },
  { name: 'Vérifier l incertitude', text: 'Utilisez la valeur de dispersion comme indicateur d alerte pratique: un écart important entre les lignes signifie que l origine tracée est moins stable.' },
];

const faq = [
  { question: 'Un outil web peut-il déterminer la source réelle d une effusion de sang?', answer: 'Non. Il permet d enseigner et d évaluer des relations géométriques, mais les conclusions sur un cas réel nécessitent des méthodes validées, une documentation de la scène, un étalonnage de l échelle et une analyse qualifiée des traces de sang.' },
  { question: 'Pourquoi l angle d impact est-il calculé à partir de la largeur et de la longueur?', answer: 'Pour une trace elliptique idéale, le sinus de l angle d impact est approximé en divisant la largeur par la longueur. Les traces réelles peuvent être déformées par la texture du support, le flux, le transfert ou des erreurs de mesure.' },
  { question: 'Que représente la sphère d origine en 3D?', answer: 'Il s agit de l estimation de la convergence par la méthode des moindres carrés entre les lignes de trajectoire projetées, et non d une source ponctuelle garantie.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Métrique',
    imperial: 'Impérial',
    unitsLabel: 'Unités',
    addStain: 'Ajouter une trace',
    reset: 'Réinitialiser',
    surface: 'Surface d impact',
    viewport3dLabel: 'Zone de visualisation 3D',
    stainLabel: 'Trace',
    table: 'Mesures',
    origin: 'Origine estimée',
    spread: 'Dispersion des lignes',
    confidence: 'Confiance',
    impact: 'Angle d impact',
    high: 'Élevée',
    medium: 'Moyenne',
    low: 'Faible',
    x: 'X',
    y: 'Y',
    width: 'Largeur',
    length: 'Longueur',
    rotation: 'Rotation',
    remove: 'Supprimer',
    cm: 'cm',
    inch: 'in',
    degree: 'degrés',
    rotateHint: 'Faites glisser la vue 3D pour faire pivoter la reconstruction.',
    disclaimer: 'Reconstruction pédagogique uniquement. Interprétez avec des mesures de scène validées et une incertitude documentée.',
  },
  seo: [
    { type: 'title', text: 'Comment fonctionne un analyseur 3D de l origine des traces de sang', level: 2 },
    { type: 'paragraph', html: 'Un analyseur de l origine des traces de sang aide les utilisateurs à explorer l une des questions géométriques fondamentales de l analyse des traces de sang: <strong>où se situait la source de sang dans l espace lorsque les gouttelettes ont percuté une surface?</strong> Cet outil modélise les traces sous forme d ellipses sur un plan vertical, calcule l angle d impact à partir du rapport largeur/longueur de chaque trace, projette les trajectoires vers l arrière dans une scène 3D et estime une zone de convergence pratique.' },
    { type: 'diagnostic', variant: 'warning', title: 'Mise en garde médico légale', html: 'Le résultat obtenu est une aide à la reconstruction, pas une conclusion définitive. Les traces réelles peuvent être altérées par la texture du support, les projections secondaires, la coagulation, l écoulement, l essuyage, le transfert, les erreurs de perspective et une documentation incomplète de l échelle.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(W/L)', label: 'Formule de l angle d impact' },
      { value: '3+', label: 'Traces indépendantes recommandées' },
      { value: '3D', label: 'Espace de convergence des trajectoires' },
    ] },
    { type: 'title', text: 'Formule de l angle d impact', level: 3 },
    { type: 'paragraph', html: 'Pour une trace elliptique simple, l angle d impact est couramment approximé par la formule <strong>arcsin(largeur / longueur)</strong>. Une trace mesurant 1 cm de largeur et 2 cm de longueur produit ainsi un angle d impact de 30 degrés. Cette relation est utile car elle convertit une marque plane en une élévation de trajectoire, mais elle suppose que la trace mesurée soit représentative et non déformée.' },
    { type: 'code', ariaLabel: 'Calcul de l angle d impact', code: 'angle d impact = arcsin(largeur de la trace / longueur de la trace)\nexemple: arcsin(1 cm / 2 cm) = 30 degrés' },
    { type: 'paragraph', html: 'C est une intention de recherche courante derrière des requêtes telles que <em>calculateur d angle d impact de trace de sang</em>, <em>formule de l angle d impact des projections de sang</em> et <em>comment calculer la trajectoire des traces de sang</em>. Le point important est que cette formule ne répond qu à une partie de la reconstruction. Elle estime l inclinaison du trajet par rapport à la surface d impact; elle ne permet pas d identifier par elle-même la source, le mécanisme, l arme ou la séquence des événements.' },
    { type: 'title', text: 'Comment mesurer les traces avant de saisir les données', level: 3 },
    { type: 'paragraph', html: 'Les données d entrée les plus exploitables proviennent de photographies perpendiculaires étalonnées ou de mesures directes sur la scène. Mesurez le corps elliptique principal de la trace, en excluant les projections secondaires, les queues, les marques d écoulement ou les traces secondaires. La largeur doit être mesurée sur le petit axe et la longueur sur le grand axe. L orientation doit suivre la direction du grand axe sur le plan de impact. De petites erreurs de longueur, de largeur ou d orientation peuvent dévier considérablement la trajectoire projetée une fois celle-ci étendue dans l espace 3D.' },
    { type: 'table', headers: ['Qualité des mesures', 'Effet probable', 'Mesure pratique'], rows: [
      ['Le grand axe est net', 'L orientation est plus fiable', 'Utilisez le grand axe visible et documentez la méthode d orientation.'],
      ['La largeur ou la longueur est déformée', 'L angle d impact peut être biaisé', 'Signalez l incertitude et comparez avec les traces voisines.'],
      ['Peu de traces convergent', 'L estimation de l origine devient instable', 'Ajoutez des traces indépendantes avant d interpréter l origine 3D.'],
      ['L échelle est manquante', 'Toutes les distances deviennent purement illustratives', 'Ne rapportez pas de coordonnées d origine réelles sans étalonnage.'],
    ] },
    { type: 'title', text: 'Interprétation de la convergence 3D', level: 3 },
    { type: 'paragraph', html: 'La sphère d origine dans cet outil est calculée comme le point le plus proche de toutes les lignes de trajectoire projetées. Lorsque les lignes passent près les unes des autres, la valeur de dispersion est faible et la confiance s améliore. Lorsque les lignes divergent, la sphère apparaît toujours, mais elle doit être interprétée comme un compromis approximatif des moindres carrés plutôt que comme une source précise.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Zone de convergence', description: 'Une estimation bidimensionnelle sur le plan de impact, souvent utilisée pour visualiser l intersection des directions des grands axes vus de face.', points: ['Utile pour une première évaluation', 'Ne représente pas la hauteur verticale par elle même'] },
      { title: 'Zone ou volume d origine', description: 'Une estimation tridimensionnelle qui combine l orientation sur le plan avec l angle d impact pour projeter les trajectoires dans l espace.', highlight: true, points: ['Explique la hauteur possible de la source', 'Sensible à l incertitude des mesures et des angles'] },
    ] },
    { type: 'paragraph', html: 'Les utilisateurs recherchent souvent un <em>calculateur de point d origine des projections de sang</em> en s attendant à obtenir des coordonnées exactes. En pratique, une bonne interprétation impose la prudence. L origine est mieux comprise comme une région étayée par plusieurs trajectoires. Si les lignes tracées forment un faisceau étroit, le modèle est plus cohérent. Si elles traversent un volume large, la reconstruction indique que les mesures, la sélection des traces ou les hypothèses doivent être revues.' },
    { type: 'title', text: 'Causes courantes de non convergence des trajectoires', level: 3 },
    { type: 'proscons', title: 'Données d entrée fiables vs données d entrée incertaines', items: [
      { pro: 'Plusieurs traces elliptiques bien formées avec des grands axes nets', con: 'Seulement une ou deux traces, ou des traces sélectionnées pour correspondre à une théorie préétablie' },
      { pro: 'Mesures étalonnées prises perpendiculairement à la surface d impact', con: 'Photos obliques, échelle inconnue ou captures d écran recopiées' },
      { pro: 'Traces indépendantes issues du même événement', con: 'Mélange de gouttes passives, traces de transfert, projections par rétroprojection, écoulement ou impacts secondaires' },
    ] },
    { type: 'paragraph', html: 'Une mauvaise convergence ne signifie pas nécessairement que l outil est en défaut. Cela peut signifier que les traces n appartiennent pas au même motif, que la photographie présente des distorsions de perspective, que le grand axe a été mal interprété, que la trace n est pas une ellipse propre ou que l événement physique est plus complexe qu un simple modèle de source ponctuelle. Cette information est précieuse. Un outil de reconstruction doit révéler les divergences plutôt que de les masquer derrière un chiffre à l apparence trompeusement précise.' },
    { type: 'title', text: 'Ce que cet outil permet de faire', level: 3 },
    { type: 'list', items: [
      '<strong>Utilisez plusieurs traces:</strong> trois traces indépendantes ou plus fournissent une estimation de convergence plus significative.',
      '<strong>Surveillez la dispersion:</strong> une dispersion élevée avertit que les trajectoires ne s accordent pas de près en 3D.',
      '<strong>Préservez l échelle:</strong> les valeurs en centimètres ou en pouces doivent provenir de photographies étalonnées ou de mesures directes sur la scène.',
      '<strong>Séparez l enseignement du rapport formel:</strong> cette visualisation est idéale pour la formation, la planification et les explications préalables à un examen officiel.',
    ] },
    { type: 'card', title: 'Flux de travail recommandé', html: 'Commencez par tracer un petit ensemble de traces de haute qualité. Vérifiez si les orientations des grands axes en 2D ont un sens visuel. Inspectez ensuite les trajectoires 3D, notez la dispersion et modifiez une mesure à la fois pour voir comment chaque trace influence la reconstruction. Cette analyse de sensibilité est souvent plus utile que la simple coordonnée d origine brute.' },
    { type: 'title', text: 'Quand ne pas se fier à une estimation de l origine des traces de sang', level: 3 },
    { type: 'paragraph', html: 'Ne vous fiez pas à une estimation simple de l origine lorsque les traces sont fortement déformées, que la surface d impact est courbe ou irrégulière, que le motif comprend des traces de transfert ou du sang expiré projeté, que la surface a été déplacée ou que la scène manque d une échelle fiable. La même prudence s applique lorsque les traces proviennent de mécanismes différents ou de moments distincts de l événement. Une visualisation 3D en apparence propre peut être trompeuse si le motif d entrée ne se prête pas à une reconstruction géométrique.' },
    { type: 'glossary', items: [
      { term: 'Angle d impact', definition: 'L angle estimé entre la trajectoire de la gouttelette et la surface d impact, couramment calculé à partir du rapport largeur/longueur d une trace elliptique.' },
      { term: 'Ligne de trajectoire', definition: 'Une ligne projetée montrant un trajet inverse possible depuis une trace vers l espace tridimensionnel.' },
      { term: 'Zone de convergence', definition: 'La région approximative où s intersectent les directions des traces lorsqu elles sont projetées sur le plan d impact.' },
      { term: 'Zone d origine', definition: 'La région tridimensionnelle approximative d où provient le sang, établie à partir de plusieurs trajectoires projetées.' },
    ] },
    { type: 'summary', title: 'Utilisation optimale', items: [
      'Utilisez l analyseur pour comprendre la géométrie des trajectoires et tester la sensibilité des mesures.',
      'Comparez la sphère d origine avec la valeur de dispersion avant de vous fier à une reconstruction.',
      'N utilisez pas cette visualisation comme une expertise médico légale autonome.',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
