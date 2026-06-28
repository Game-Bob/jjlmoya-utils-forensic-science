import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "science-forensique",
  title: "Outils de science forensique",
  description: "Utilitaires forensiques pour le triage structure des dossiers, les calculs transparents et les rapports attentifs aux preuves.",
  seo: [
    {
      type: 'title',
      text: "Outils de science forensique pour analyse des preuves et triage des dossiers",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Cette bibliothèque fournit des outils et des calculs spécialisés pour les analystes forensiques, les professionnels du droit, les chercheurs et les enquêteurs. Les utilitaires de science forensique aident à évaluer les preuves physiques collectées sur les scènes de crime. En utilisant des modèles structurés pour la trajectoire des taches de sang, l'estimation de l'âge, l'indice de réfraction du verre et l'analyse des drogues, les équipes peuvent effectuer un triage initial des dossiers. Chaque utilitaire se concentre sur la transparence, montrant les hypothèses et aidant les utilisateurs à comprendre clairement les limites de chaque formule forensique.",
    },
    {
      type: 'paragraph',
      html: "L'examen initial d'un dossier nécessite d'évaluer quelles preuves sont disponibles, ce que supposent les formules scientifiques et où subsiste l'incertitude. Ces calculateurs sont conçus pour soutenir la formation et l'évaluation préliminaire. Ils aident à déterminer quelles étapes analytiques sont nécessaires avant de s'engager dans des analyses de laboratoire formelles. L'utilisation de ces outils permet d'identifier les lacunes dans les dossiers de preuves dès le début du processus d'enquête.",
    },
    {
      type: 'title',
      text: "Domaines cles des calculs forensiques",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Evaluation de l\'age:</strong> calculs squelettiques, dentaires et de maturité avec des mesures d\'incertitude explicites.',
        '<strong>Interpretation des preuves:</strong> estimateurs structurés affichant des formules, des intervalles de confiance et des limites.',
        '<strong>Triage des dossiers:</strong> outils rapides qui mettent en évidence les preuves manquantes et identifient les paramètres requis pour un examen formel.',
        '<strong>Aide a la redaction de rapports:</strong> utilitaires qui encouragent des rapports clairs utilisant des plages de valeurs plutôt qu\'une fausse précision.',
      ],
    },
    {
      type: 'title',
      text: "Directives pour une utilisation responsable des logiciels forensiques",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Chaque calcul forensique implique des taux d'erreur et des limites de confiance. Un calculateur ne doit jamais remplacer un témoin expert qualifié ou un protocole de laboratoire validé. Au lieu de cela, ces utilitaires web sont mieux utilisés pour explorer des scénarios, expliquer des concepts à des non-spécialistes et vérifier la sensibilité des mesures avant de rédiger les rapports finaux. Cela permet d'éviter les malentendus dans la salle d'audience concernant la précision scientifique.",
    },
    {
      type: 'table',
      headers: ['Usage approprie', 'Usage inapproprie', 'Importance'],
      rows: [
        ["Examiner les dossiers de cas avant un examen formel par un spécialiste.", "Utiliser le résultat d'un calculateur comme opinion d'expert finale.", "Les preuves forensiques doivent répondre à des normes strictes de validation scientifique."],
        ["Expliquer l'incertitude de mesure et les plages de valeurs aux enquêteurs.", "Rapporter un seul chiffre exact sans expliquer les limites.", "La fausse précision peut conduire à des décisions incorrectes dans les systèmes judiciaires."],
        ["Vérifier comment les hypothèses d'entrée affectent le résultat estimé.", "Masquer les paramètres initiaux ou les calculs du dossier de cas.", "La transparence permet d'auditer et de reproduire les résultats par d'autres."],
        ["Déterminer si la qualité des données est suffisante pour le calcul.", "Exécuter des formules avec des mesures d'échelle médiocres ou incomplètes.", "Des paramètres d'entrée faibles rendent toute reconstruction mathématique peu fiable."],
      ],
    },
  ],
};
