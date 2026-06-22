import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-sir-epidemie';
const title = 'Simulateur SIR d\'épidémie';
const description = 'Explorez la propagation d\'un pathogène avec un modèle SIR interactif qui ajuste R0, la létalité, la vaccination, la période d\'infectiosité, le pic de charge et les courbes de transmission en temps reel.';

const howTo = [
  {
    name: 'Regler le nombre de reproduction',
    text: 'Deplacez le curseur R0 pour représenter le nombre d\'infections secondaires qu\'une personne infectieuse causerait dans une population entierement susceptible.',
  },
  {
    name: 'Ajouter la vaccination et l\'efficacité vaccinale',
    text: 'Augmentez la couverture vaccinale ou l\'efficacité pour retirer les personnes protégées du groupe susceptible et reduire le nombre de reproduction effectif.',
  },
  {
    name: 'Ajuster la létalité et la durée d\'infectiosité',
    text: 'Modifiez le pourcentage de létalité et le nombre de jours d\'infectiosité pour observer comment les conséquences graves et le calendrier des courbes reagissent.',
  },
  {
    name: 'Lire les courbes SIR',
    text: 'Utilisez le graphique et l\'inspecteur de jour pour comparer les courbes de susceptibles, d\'infectes, de rétablis et de décès estimes tout au long de l\'épidémie simulee.',
  },
];

const faq = [
  {
    question: 'Que montre un modèle SIR ?',
    answer: 'Un modèle SIR divise une population en groupes susceptibles, infectes et rétablis. Il estime comment les personnes se deplacent entre ces groupes au fil du temps a mesure que la transmission et le rétablissement se produisent.',
  },
  {
    question: 'Comment la vaccination modifie-t-elle la courbe ?',
    answer: 'La vaccination reduit la population susceptible lorsqu\'elle empeche l\'infection. Dans ce simulateur, une vaccination efficace abaisse le nombre de reproduction effectif et peut reduire ou retarder le pic d\'infection.',
  },
  {
    question: 'Est-ce que R0 est identique a Re ?',
    answer: 'Non. R0 décrit la propagation dans une population entierement susceptible. Re est le nombre de reproduction effectif après que l\'immunité, la vaccination ou les changements de comportement reduisent le nombre de personnes pouvant être infectees.',
  },
  {
    question: 'Pourquoi la courbe des infectes atteint-elle un pic puis descend-elle ?',
    answer: 'La courbe des infectes descend lorsque chaque personne infectieuse génère moins de nouvelles infections que le nombre de personnes quittant le groupe des infectes par rétablissement ou décès. L\'epuisement des susceptibles est le principal moteur dans un modèle SIR de base.',
  },
  {
    question: 'Ce simulateur peut-il predire une épidémie reelle ?',
    answer: 'C\'est un outil pedagogique et de scénario, pas une prévision. Les épidémies reelles necessitent la structure d\'age, les réseaux de contact, la geographie, les retards de signalement, les changements de comportement, les variants, l\'immunité decrete et des donnees calibrees.',
  },
  {
    question: 'Quelle est la difference entre le taux d\'attaque et le pic d\'infectes ?',
    answer: 'Le taux d\'attaque mesure la proportion totale de la population infectee a la fin de l\'épidémie. Le pic d\'infectes mesure le nombre maximum de personnes simultanement infectieuses a un moment donne. Un pic bas ne garantit pas un taux d\'attaque bas, et inversement.',
  },
  {
    question: 'Que signifie visuellement un Re inférieur a 1 ?',
    answer: 'Quand Re passe sous 1, chaque personne infectieuse génère en moyenne moins d\'une nouvelle infection. Sur le graphique, la courbe des infectes ne monte jamais fortement et peut décline immédiatement a partir du premier cas, ce qui signifie que l\'épidémie ne peut pas se maintenir.',
  },
  {
    question: 'Comment la période d\'infectiosité affecte-t-elle l\'épidémie ?',
    answer: 'Une période d\'infectiosité plus longue prolonge le temps pendant lequel chaque personne infectee peut transmettre le pathogène. Cela etire le calendrier de l\'épidémie, retarde le pic et, pour un meme R0, peut produire une courbe plus large avec un pic moins eleve.',
  },
  {
    question: 'Pourquoi la létalité ne modifie-t-elle pas la courbe des infectes ?',
    answer: 'Dans ce modèle SIR, la létalité n\'affecte que le nombre de décès qui se detache du groupe des rétablis. Elle n\'influence pas la transmission car les décès et les retablissements retirent tous deux les personnes du groupe infectieux au meme rythme.',
  },
  {
    question: 'Qu\'est-ce que le seuil d\'immunité collective ?',
    answer: 'Le seuil d\'immunité collective est la fraction de la population qui doit être immunisee pour que Re tombe sous 1. Il est approxime par 1 - 1/R0. Pour la rougeole avec un R0 d\'environ 12, le seuil dépasse 91 %. Pour la grippe saisonnière avec un R0 d\'environ 1,3, le seuil est proche de 23 %.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Scenario épidémique en direct',
    curveChart: 'Courbes de transmission SIR',
    inspectDay: 'Inspecter le jour de simulation',
    legend: 'Legende des courbes',
    susceptible: 'Susceptibles',
    infected: 'Infectes',
    recovered: 'Retablis ou immunises',
    deaths: 'Deces',
    controls: 'Controles de l\'épidémie',
    modelName: 'Modele a compartiments',
    peakInfected: 'Pic d\'infectes',
    peakDay: 'Jour du pic',
    attackRate: 'Taux d\'attaque',
    estimatedDeaths: 'Deces estimes',
    r0: 'Nombre de reproduction de base R0',
    lethality: 'Letalite',
    vaccination: 'Couverture vaccinale',
    vaccineEffectiveness: 'Efficacite vaccinale',
    infectiousDays: 'Periode d\'infectiosité',
    initialInfected: 'Infectes initiaux',
    dayLabel: 'Jour',
    daysUnit: 'jours',
    infectiousLabel: 'infectieux',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur SIR d\'épidémie pour R0, vaccination, létalité et courbes de transmission',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur SIR d\'épidémie vous permet d\'explorer comment un pathogène se propage dans une population lorsque des personnes susceptibles deviennent infectees puis quittent le groupe infectieux par rétablissement ou décès. Il est conçu pour les etudiants, les communicateurs scientifiques, les apprenants en santé publique et toute personne souhaitant une explication visuelle rapide de la raison pour laquelle de petits changements dans la transmission ou l\'immunité peuvent remodeler une épidémie.',
    },
    {
      type: 'paragraph',
      html: 'Les contrôles interactifs se concentrent sur les variables que les gens souhaitent le plus souvent tester: <strong>R0</strong>, la létalité, la couverture vaccinale, l\'efficacité vaccinale, la durée d\'infectiosité et la proportion initiale d\'infectes. Le graphique se met a jour immédiatement afin que les courbes des susceptibles, des infectes, des rétablis, des immunises et des décès puissent être comparees comme un système épidémique connecte.',
    },
    {
      type: 'title',
      text: 'Comment fonctionne le modèle SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un modèle SIR de base divise la population en trois compartiments principaux. <strong>S</strong> représente les personnes susceptibles pouvant encore être infectees. <strong>I</strong> sont les personnes actuellement infectieuses qui peuvent transmettre le pathogène. <strong>R</strong> sont les personnes qui ne sont plus infectieuses car elles se sont rétablies, ont acquis une immunité ou ont quitte la chaine de transmission. Ce simulateur suit egalement les décès estimes comme une branche de conséquences graves issue du groupe quittant l\'infection.',
    },
    {
      type: 'paragraph',
      html: 'Le taux de transmission est lie a R0 et a la période d\'infectiosité. Si R0 est eleve ou si les personnes restent infectieuses plus longtemps, davantage de nouvelles infections sont generees avant que le groupe infectieux ne diminue. Si la vaccination retire suffisamment de personnes du groupe susceptible, le nombre de reproduction effectif chute et le pic de l\'épidémie peut devenir beaucoup plus faible.',
    },
    {
      type: 'table',
      headers: ['Controle', 'Ce qu\'il modifie', 'Effet typique sur la courbe'],
      rows: [
        ['R0', 'Potentiel de transmission avant prise en compte de l\'immunité', 'Un R0 plus eleve fait monter la courbe des infectes plus rapidement et atteindre un pic plus haut.'],
        ['Couverture vaccinale', 'Part des personnes retirees du groupe susceptible lorsqu\'elles sont protégées', 'Une couverture plus elevee abaisse Re et peut aplatir l\'épidémie.'],
        ['Efficacite vaccinale', 'Dans quelle mesure la vaccination empeche l\'infection dans ce modèle simplifie', 'Une efficacité plus elevee rend la meme couverture plus protectrice.'],
        ['Periode d\'infectiosité', 'Temps moyen pendant lequel les personnes restent infectieuses', 'Une infection plus longue modifie le calendrier et peut prolonger l\'épidémie.'],
        ['Letalite', 'Part des personnes quittant l\'infection qui sont comptees comme décès', 'Une létalité plus eleve eleve la courbe des décès sans augmenter directement la transmission.'],
      ],
    },
    {
      type: 'title',
      text: 'Intuition sur R0, Re et l\'immunité collective',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0 est le nombre moyen de cas secondaires causes par une personne infectieuse dans une population entierement susceptible. Re, le nombre de reproduction effectif, est plus faible lorsque certaines personnes sont deja immunisees, vaccinees, isolees ou autrement indisponibles pour l\'infection. Dans ce simulateur, la vaccination efficace reduit directement la susceptibilite, donc le Re affiche diminue a mesure que la couverture protégée augmente.',
    },
    {
      type: 'paragraph',
      html: 'Une approximation courante de l\'immunité collective est <strong>1 - 1 / R0</strong>. Pour un R0 de 3, le seuil est d\'environ 66,7 % d\'immunité efficace. Le simulateur rend ce seuil tangible: lorsque la vaccination efficace est en dessous du seuil, les épidémies peuvent encore croitre ; lorsqu\'elle est au-dessus, la transmission a du mal a se maintenir.',
    },
    {
      type: 'title',
      text: 'Ce que signifie le pic d\'infectes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le pic d\'infectes est le nombre maximum de personnes simultanement infectieuses dans la population simulee. Il est souvent plus important operationnellement que le total des infections car les hôpitaux, les laboratoires, les programmes d\'isolement et les equipes de tracage des contacts subissent la pression des cas actifs simultanes. Reduire le pic peut avoir de l\'importance meme lorsque le taux d\'attaque final n\'est pas reduit a zéro.',
    },
    {
      type: 'paragraph',
      html: 'Le taux d\'attaque estime la part de la population totale infectee a la fin de la simulation. Un taux d\'attaque eleve signifie que le pathogène a atteint de nombreuses personnes avant que la susceptibilite ne soit epuisee ou controlee. Un taux d\'attaque faible signifie que l\'immunité, la vaccination ou une transmission faible ont empeche une propagation large.',
    },
    {
      type: 'title',
      text: 'Valeurs reelles de R0 et ce qu\'elles impliquent pour l\'immunité collective',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le nombre de reproduction de base R0 n\'est pas une constante biologique fixe pour un pathogène. Il depend des modes de contact, de la densité de population, des habitudes culturelles et des facteurs environnementaux. Le meme virus peut avoir des valeurs de R0 différentes dans une ville dense par rapport a une zone rurale, ou lors d\'une saison avec plus de promiscuite interieure. Les valeurs ci-dessous sont des fourchettes de référence illustratives issues d\'etudes publiees.',
    },
    {
      type: 'table',
      headers: ['Pathogene', 'Plage R0 typique', 'Seuil d\'immunité collective (1 - 1/R0)', 'Caracteristique cle de transmission'],
      rows: [
        ['Grippe saisonnière', '1,2 - 1,4', '17 % - 29 %', 'Periode d\'infectiosité courte, variation saisonnière'],
        ['SARS-CoV-2 (souche originale)', '2,0 - 3,0', '50 % - 67 %', 'Transmission presymptomatique, voie aerosol'],
        ['SARS-CoV-2 (Delta)', '5,0 - 8,0', '80 % - 87 %', 'Charge virale accrue, propagation plus rapide'],
        ['SARS-CoV-2 (Omicron)', '8,0 - 12,0', '87 % - 92 %', 'Echappement immunitaire, tropisme respiratoire supérieur'],
        ['Poliomyelite', '5,0 - 7,0', '80 % - 86 %', 'Voie feco-orale, excretion asymptomatique longue'],
        ['Variole', '5,0 - 7,0', '80 % - 86 %', 'Eradiquee par une campagne mondiale de vaccination'],
        ['Rougeole', '12,0 - 18,0', '92 % - 94 %', 'Extremement contagieuse, aerienne, longue période d\'infectiosité'],
        ['Coqueluche', '12,0 - 17,0', '92 % - 94 %', 'L\'immunité decrete permet des reinfections'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Un seuil d\'immunité collective eleve ne signifie pas automatiquement que la vaccination est inutile lorsque la couverture est en dessous du seuil. Meme une immunité partielle ralentit la transmission, abaisse le pic, reduit les conséquences graves et fait gagner du temps aux systèmes de santé. Le simulateur montre cet effet lorsque vous deplacez le curseur de vaccination a travers des valeurs intermediaires.',
    },
    {
      type: 'title',
      text: 'Comment le nombre de reproduction effectif Re change pendant une épidémie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re est le nombre de reproduction effectif a un moment donne de l\'épidémie. Contrairement a R0, qui suppose une population entierement susceptible, Re tient compte de l\'immunité, de la vaccination et de tout autre facteur reduisant la susceptibilite. Dans ce simulateur, Re est calcule comme <strong>R0 x (1 - fraction protégée)</strong>, ou la fraction protégée est la part de la population effectivement immunisee par la vaccination.',
    },
    {
      type: 'paragraph',
      html: 'La valeur de Re affichee dans l\'en-tete du simulateur se met a jour lorsque vous deplacez les contrôles. Lorsque Re reste supérieur a 1, l\'épidémie croit. Lorsqu\'il passe sous 1, chaque personne infectee génère en moyenne moins d\'une nouvelle infection et l\'épidémie ne peut pas se maintenir. C\'est l\'idee centrale du contrôle epidemiologique: amener et maintenir Re sous 1 grace a l\'immunité, au comportement ou aux interventions.',
    },
    {
      type: 'title',
      text: 'Taux d\'attaque, charge au pic et ce qu\'ils revelent de la gravité de l\'épidémie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le taux d\'attaque est la fraction de la population totale infectee pendant toute l\'épidémie simulee. C\'est le resume statistique le plus couramment cite après une vague épidémique. Un taux d\'attaque eleve signifie que le pathogène a infecte la plupart des personnes susceptibles avant que l\'epuisement ou le contrôle n\'arretent la transmission. Un taux d\'attaque faible signifie que l\'immunité, la vaccination ou une transmission intrinsequement faible ont empeche une infection generalisee.',
    },
    {
      type: 'paragraph',
      html: 'Le pic d\'infectes - le nombre maximum de personnes simultanement infectieuses - importe davantage pour la pression a court terme sur les soins de santé. Une vague avec un taux d\'attaque modéré mais un pic très haut et aigu peut submerger les hôpitaux meme si le total des cas n\'est pas extrême. Inversement, une courbe lente et aplatie peut avoir un taux d\'attaque similaire etale sur plusieurs semaines, donnant au système de santé le temps de gerer les cas. C\'est pourquoi les responsables de la santé publique insistent sur <strong>l\'aplatissement de la courbe</strong> comme objectif operationnel distinct de la prévention de toutes les infections.',
    },
    {
      type: 'title',
      text: 'Aplatir la courbe et la capacité des soins de santé dans le modèle SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La courbe des infectes dans un modèle SIR peut être interpretee comme le nombre de personnes necessitant des soins simultanement. Dans une épidémie reelle, chaque personne qui a besoin d\'un lit d\'hôpital, d\'un support oxygenotherapique ou de soins intensifs puise dans un pool limite de ressources. Lorsque la courbe des infectes dépasse la capacité disponible, la mortalité toutes causes confondues augmente car le système ne peut pas fournir des soins adequats.',
    },
    {
      type: 'paragraph',
      html: 'La vaccination, dans ce modèle, aplatit la courbe en retirant les personnes du groupe susceptible avant qu\'elles ne puissent être infectees. La réduction de R0 par d\'autres mesures - masques, ventilation, distanciation, depistage, isolement - abaisserait egalement le pic dans un modèle plus complet. La simulation rend le mécanisme visible: a mesure que la couverture vaccinale efficace augmente, le pic se retrecit, se decale plus tard ou disparait completement.',
    },
    {
      type: 'title',
      text: 'Les mathématiques du modèle SIR visualisees',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dans le modèle SIR, le taux de nouvelles infections par pas de temps depend de trois quantites: le taux de transmission <strong>beta</strong>, le nombre actuel de personnes infectieuses <strong>I</strong> et la fraction de la population effective encore susceptible <strong>S / N</strong>. Le produit <strong>beta x I x S / N</strong> est appele la force d\'infection. Chaque jour, cette force détermine combien de personnes susceptibles entrent dans le compartiment des infectes.',
    },
    {
      type: 'paragraph',
      html: 'Les personnes quittent le compartiment des infectes au taux de rétablissement <strong>gamma = 1 / période d\'infectiosité</strong>. L\'equilibre entre la force d\'infection et le taux de rétablissement détermine si l\'épidémie croit ou decroit. Lorsque beta x S / N dépasse gamma, les nouvelles infections dépassent les retablissements et l\'épidémie s\'etend. Lorsque la fraction susceptible S / N a suffisamment diminue, gamma domine et l\'épidémie se contracte.',
    },
    {
      type: 'paragraph',
      html: 'Le parametre <strong>beta</strong> n\'est pas directement visible dans l\'interface. Il est derive de R0 et de la période d\'infectiosité par la relation <strong>beta = R0 x gamma</strong>. C\'est pourquoi la modification de R0 ou de la période d\'infectiosité produit des formes de courbes similaires mais non identiques. Les deux parametres influencent la force d\'infection, mais la période d\'infectiosité etire egalement l\'axe temporel de l\'épidémie.',
    },
    {
      type: 'title',
      text: 'Comment utiliser ce simulateur pour apprendre et enseigner',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Comparez des scénarios a R0 eleve et faible :</strong> reglez R0 a 1,5 (zone de la grippe saisonnière) puis a 6,0 (zone de la poliomyelite prevaccinale). Observez comment la hauteur du pic, le moment du pic et le taux d\'attaque changent meme lorsque tous les autres contrôles sont identiques.',
        '<strong>Explorez le seuil d\'immunité collective :</strong> commencez avec R0 a 3,0 et sans vaccination. Notez le taux d\'attaque. Ajoutez ensuite une couverture vaccinale jusqu\'a ce que Re passe sous 1. Comparez le pic et le taux d\'attaque a une couverture juste en dessous et juste au-dessus du seuil.',
        '<strong>Testez l\'effet d\'une réponse lente vs rapide :</strong> fixez la couverture vaccinale a différents niveaux et observez quand le pic se produit. Une couverture plus elevee non seulement reduit la hauteur du pic mais le retarde generalement, faisant gagner du temps pour la préparation des soins de santé.',
        '<strong>Separez la létalité de la transmission :</strong> reglez la létalité a 0 % et observez la courbe des infectes. Reglez ensuite la létalité a 10 % sans modifier les autres parametres. La courbe des infectes ne change pas, mais le nombre de décès augmente. Cela demontre pourquoi le taux de létalité et la vitesse de transmission sont des dimensions epidemiologiques distinctes.',
        '<strong>Examinez l\'effet de la période d\'infectiosité :</strong> comparez une période d\'infectiosité de 4 jours a une période de 18 jours avec le meme R0. La période plus longue etire la courbe, retarde le pic et produit une vague plus longue mais plus basse.',
        '<strong>Exercice en classe - trouvez le seuil :</strong> demandez aux etudiants de trouver la couverture vaccinale minimale qui fait passer Re sous 1 pour un R0 donne, puis comparez le résultat a la formule 1 - 1/R0.',
      ],
    },
    {
      type: 'title',
      text: 'Quand et pourquoi utiliser ce simulateur',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Etudiants en epidemiologie :</strong> reliez le cadre mathématique SIR aux formes de courbes interactives avant de travailler avec des equations differentielles ou de programmer vos propres modèles.',
        '<strong>Communicateurs scientifiques et journalistes :</strong> generez des graphiques, des captures d\'ecran ou des explications en direct montrant pourquoi R0, la vaccination et la période d\'infectiosité comptent pour les trajectoires épidémiques.',
        '<strong>Apprenants en santé publique :</strong> testez comment différentes combinaisons d\'interventions deplacent le pic épidémique et le taux d\'attaque pour développer une intuition sur les compromis dans la réponse aux épidémies.',
        '<strong>Tous les curieux de la mathématique épidémique :</strong> explorez le modèle SIR sans avoir besoin d\'ecrire du code ou d\'installer un logiciel. Chaque contrôle met a jour le graphique en temps reel.',
      ],
    },
    {
      type: 'title',
      text: 'Extensions du modèle: SEIR, SIRS et au-dela',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur utilise une structure SIR de base. Plusieurs extensions courantes ajoutent du realisme. Un <strong>modèle SEIR</strong> ajoute un compartiment expose (E) pour les personnes infectees mais pas encore infectieuses, representant la période d\'incubation. Le groupe expose retarde le pic épidémique vers l\'extérieur par rapport au modèle SIR car les infections passent du temps en phase latente avant de contribuer a la transmission.',
    },
    {
      type: 'paragraph',
      html: 'Un <strong>modèle SIRS</strong> permet aux personnes rétablies de perdre leur immunité avec le temps et de reentrer dans le compartiment susceptible. Cela modelise les pathogènes comme la coqueluche ou le SARS-CoV-2 avec une immunité decrete et produit des vagues épidémiques soutenues ou recurrentes. Un <strong>modèle structure par age</strong> partitionne la population en groupes d\'age avec différentes matrices de contact et profils de gravité, ce qui est essentiel pour les maladies ou les enfants et les personnes agees ont des résultats très différents.',
    },
    {
      type: 'paragraph',
      html: 'D\'autres extensions ajoutent la propagation geographique (modèles metapopulationnels), les changements de comportement (taux de contact adaptatifs), le bruit stochastique (pour les petites populations ou l\'extinction aleatoire compte) et le calendrier des interventions (fermetures d\'ecoles, confinements, restrictions de voyage qui s\'activent et se desactivent). Chaque extension ajoute une complexite essentielle pour la prévision mais peut obscurcir la dynamique de transmission centrale que le modèle SIR de base illustre clairement.',
    },
    {
      type: 'title',
      text: 'Limites de ce simulateur d\'épidémie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ceci est un modèle SIR déterministe compact. Il n\'inclut pas les groupes d\'age, la structure des menages, les ecoles, les voyages, la superpropagation, les périodes d\'incubation, la transmission asymptomatique, la saisonnalite, les variants, l\'immunité decrete, les changements de comportement, les retards de depistage ou les interventions de santé publique qui s\'activent et se desactivent au fil du temps. Ces details sont essentiels pour une prévision reelle.',
    },
    {
      type: 'paragraph',
      html: 'Le modèle suppose une population bien melangee ou chaque personne susceptible a une probabilité de contact egale avec chaque personne infectieuse. Les populations reelles ont des réseaux de contact avec un fort clustering, une assortativite d\'age, une structure geographique et une variation individuelles de l\'infectiosité. Ces caracteristiques peuvent creer une croissance initiale plus lente, des événements de superpropagation et des schemas épidémiques heterogenes qu\'un modèle homogène ne capture pas.',
    },
    {
      type: 'paragraph',
      html: 'Utilisez le simulateur pour comprendre les mécanismes et comparer des scénarios, pas pour prendre des decisions medicales, politiques ou d\'urgence. L\'évaluation epidemiologique reelle nécessité des donnees de surveillance, un contexte local, une analyse d\'incertitude et une modélisation epidemiologique specialisee.',
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
