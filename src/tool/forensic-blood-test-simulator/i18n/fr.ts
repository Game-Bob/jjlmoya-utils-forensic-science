import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-test-presomptif-sang-medecine-legale';
const title = 'Simulateur de Test Presomptif de Sang Forensique';
const description = 'Simulez des tests presomptifs de sang en utilisant les reactifs de Kastle-Meyer et de Luminol. Distinguez le vrai sang des faux positifs.';

const howTo = [
  {
    "name": "Selectionner un echantillon",
    "text": "Choisissez un echantillon dans le portoir representant soit du sang, soit un materiau faux positif."
  },
  {
    "name": "Choisir la methode de test",
    "text": "Decidez si vous effectuez le test de couleur de Kastle-Meyer ou le test de luminescence au Luminol."
  },
  {
    "name": "Appliquer les reactifs",
    "text": "Ajoutez des gouttes de reactif Kastle-Meyer suivies de peroxyde d'hydrogene, ou appliquez le Luminol directement."
  },
  {
    "name": "Interpreter le resultat",
    "text": "Observez les changements de couleur ou la lueur bleue dans l'obscurite pour classer la reaction."
  }
];

const faq = [
  {
    "key": "faq-1",
    "question": "Pourquoi parle-t-on de test presomptif?",
    "answer": "Les tests presomptifs sont des analyses preliminaires basees sur l'activite catalytique. Tres sensibles mais peu specifiques, ils peuvent generer des faux positifs et exigent une confirmation."
  },
  {
    "key": "faq-2",
    "question": "Qu'est-ce qui cause un faux positif avec Kastle-Meyer?",
    "answer": "Le test repose sur l'activite pseudo-peroxydasique de l'heme. Toute substance contenant des oxydants, des ions metalliques comme la rouille, ou des peroxydases vegetales peut catalyser la reaction."
  },
  {
    "key": "faq-3",
    "question": "Comment se produit la reaction du Luminol?",
    "answer": "Le luminol reagit avec le peroxyde d'hydrogene en presence d'un catalyseur comme le fer de l'hemoglobine. Cela excite le luminol, qui emet une lumiere bleue en revenant a son etat fondamental."
  },
  {
    "key": "faq-4",
    "question": "L'eau de Javel peut-elle donner un faux positif?",
    "answer": "Oui, l'hypochlorite de sodium est un oxydant puissant. Il oxyde directement la phenolphtaline ou le luminol sans catalyseur, avec une lueur qui s'estompe tres rapidement."
  },
  {
    "key": "faq-5",
    "question": "Quelle est la difference entre test presomptif et confirmatif?",
    "answer": "Les tests presomptifs sont rapides et sensibles pour localiser les taches. Les tests confirmatifs prouvent la presence de sang humain avec certitude."
  }
];

const bibliography = [
  {
    "name": "Kastle-Meyer test - Wikipedia",
    "url": "https://en.wikipedia.org/wiki/Kastle%E2%80%93Meyer_test"
  },
  {
    "name": "Grodsky, M., Wright, K. & Kirk, P. L. (1951). Simplified preliminary blood testing. An improved technique and comparative study of methods. Journal of Criminal Law and Criminology.",
    "url": "https://scholarlycommons.law.northwestern.edu/jclc/vol42/iss1/10/"
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "title": "Simulateur de Test de Sang",
  "desc": "Realisez des experiences virtuelles avec le Luminol et Kastle-Meyer pour detecter le sang et analyser les faux positifs.",
  "configTitle": "Controles du Laboratoire",
  "sampleLabel": "Selectionner l'Echantillon",
  "reagentLabel": "Selectionner le Reactif",
  "lightsLabel": "Eclairage",
  "btnLightsOff": "Eteindre les Lumieres",
  "btnLightsOn": "Allumer les Lumieres",
  "btnReset": "Reinitialiser",
  "resultsTitle": "Resultats du Test",
  "sampleBlood": "Echantillon de Sang (Controle)",
  "sampleRust": "Rouille (Oxyde de Fer)",
  "sampleBleach": "Eau de Javel (Hypochlorite)",
  "samplePotato": "Pomme de Terre (Peroxydase)",
  "sampleSaliva": "Echantillon de Salive",
  "reagentKM": "Reactif Kastle-Meyer",
  "reagentH2O2": "Peroxyde d'Hydrogene (H2O2)",
  "reagentLuminol": "Solution de Luminol",
  "resultTruePositive": "Vrai Positif (Sang Detecte)",
  "resultFalsePositive": "Faux Positif (Catalyseur Non-Sanguin)",
  "resultNegative": "Reaction Negative",
  "statusLabel": "Statut de la Reaction",
  "reactionLabel": "Explication de la Reaction",
  "dropReagentBtn": "Appliquer la Gotte",
  "activeCompounds": "Composes Actifs",
  "reactionSpeed": "Vitesse de Reaction",
  "reactionDuration": "Duree de la Reaction",
  "specimenBase": "Base de l'Echantillon",
  "kmPending": "Reactif Kastle-Meyer applique. Ajoutez du peroxyde d'hydrogene (H2O2) pour catalyser le changement de couleur.",
  "h2o2Only": "Peroxyde d'hydrogene applique. Aucune reaction visible sans indicateur Kastle-Meyer.",
  "noReaction": "Aucune reaction observee. L'echantillon reste limpide.",
  "luminolBlood": "Lueur bleue intense observee immediatement dans l'obscurite. L'heme a oxyde le luminol de facon catalytique. Vrai Positif.",
  "luminolBleach": "Lueur bleue tres intense observee immediatement, s'estompant en moins de 2 secondes. L'hypochlorite oxyde le luminol directement. Faux Positif.",
  "luminolRust": "Lueur bleue faible observee. Les ions metalliques de la rouille catalysent faiblement l'oxydation. S'estompe progressivement. Faux Positif.",
  "luminolPotato": "Aucune luminescence visible. Les peroxidasas vegetales ne catalysent pas l'oxydation du luminol dans ces conditions. Negatif.",
  "luminolNegative": "Aucune luminescence observee dans l'obscurite. Le compose n'est pas catalytique pour l'oxydation du luminol. Negatif.",
  "kmBlood": "Coloration rose vif immediate lors de l'ajout de peroxyde d'hydrogene. L'heme a catalyse l'oxydation de la phenolphtaline en phenolphtaleine. Vrai Positif.",
  "kmBleach": "Changement de couleur rose vif immediat. L'hypochlorite de sodium oxyde directement la phenolphtaline sans catalyseur. Faux Positif.",
  "kmRust": "Coloration brownish-rose lente et faible apparaissant apres plusieurs secondes. La rouille catalyse la reaction lentement. Faux Positif.",
  "kmPotato": "Coloration rose pale tardive apres un delai. Les peroxydases vegetales catalysent faiblement la reaction. Faux Positif.",
  "kmNegative": "Aucun changement de couleur. La solution reste incolore. Negatif."
},
  seo: [
  {
    "type": "title",
    "text": "Guide Complet sur les Tests Presomptifs de Sang",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Les tests presomptifs de sang sont des analyses preliminaires tres sensibles utilisees sur les scenes de crime pour detecter la presence de sang. Avant d'effectuer des analyses complexes de sequençage d'ADN, les enqueteurs se fient a ces tests rapides sur les vetements, les armes ou d'autres surfaces suspectes. Comme ces analyses ciblent l'activite de type peroxydase de l'heme, qui est le groupe contenant le fer de l'hemoglobine, elles sont qualifiees de presomptives. Un resultat positif suggere la presence de sang mais doit imperativement etre valide par un test de confirmation secondaire pour exclure toute autre reaction biochimique similaire."
  },
  {
    "type": "title",
    "text": "Principe et Fonctionnement du Test de Kastle-Meyer",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Le test de Kastle-Meyer (KM) est une reaction colorimetrique catalytique qui utilise la forme reduite et incolore de la phenolphtaleine, appelee la phenolphtaline. Le protocole experimental suit une sequence precise: on depose d'abord l'indicateur chimique sur le prelevement. En presence de sang, le groupe heme agit comme un catalyseur organique. Lors de l'ajout de peroxyde d'hydrogene, l'heme accelere la reduction du peroxyde d'hydrogene, ce qui oxyde immediatement la phenolphtaline en phenolphtaleine, provoquant un virage colore rose vif instantane. Un changement de couleur tardif ou lent apres une quinzaine de secondes est considere comme negatif."
  },
  {
    "type": "title",
    "text": "Luminol et la Chimiluminescence Forensique",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Le luminol est un compose chimique qui emet une lueur bleue dans l'obscurite lorsqu'il est oxyde en presence d'un catalyseur metallique comme le fer de l'hemoglobine. Les techniciens de la police scientifique vaporisent une solution diluee de luminol sur de grandes zones suspectes. Lorsque le produit entre en contact avec des traces de sang, le fer contenu dans l'hemoglobine catalyse la reaction d'oxydation avec l'agent comburant. Cette reaction genere un ion aminophthalate excite qui libere de l'energie lumineuse en revenant a son etat fondamental. Pour photographier cette emission lumineuse de faible intensite, l'obscurite totale est requise."
  },
  {
    "type": "table",
    "headers": [
      "Substance",
      "Profil Kastle-Meyer",
      "Profil Luminol",
      "Classification"
    ],
    "rows": [
      [
        "Sang humain",
        "Coloration rose vif immediate apres ajout de H2O2.",
        "Lueur bleue intense et stable.",
        "Vrai Positif."
      ],
      [
        "Eau de Javel",
        "Rose immediat avant meme l'ajout de H2O2.",
        "Lueur intense et tres courte.",
        "Faux Positif."
      ],
      [
        "Rouille",
        "Coloration brune lente et legere.",
        "Lueur bleue faible.",
        "Faux Positif."
      ],
      [
        "Pomme de terre",
        "Rose pale tardif apres delai.",
        "Aucune lueur dans le noir.",
        "Faux Positif (KM) / Negatif (LUM)."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Distinguer le Sang des Faux Positifs Courants",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La differenciation des faux positifs constitue une partie cruciale du travail d'analyse criminelle. Les agents nettoyants contenant de l'hypochlorite de sodium (eau de Javel) imitent la reaction du sang en oxydant directement les indicateurs. Cependant, les experts scientifiques analysent la dynamique temporelle: l'eau de Javel reagit sans peroxyde d'hydrogene dans le test de Kastle-Meyer et son emission lumineuse avec le luminol s'estompe presque instantanement. De plus, les peroxydases vegetales sont degradees par la chaleur, contrairement a l'hemoglobine qui demeure stable."
  }
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
