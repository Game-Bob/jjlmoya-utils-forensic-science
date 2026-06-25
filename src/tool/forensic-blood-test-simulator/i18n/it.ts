import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-test-presuntivo-sangue-forense';
const title = 'Simulatore di Test Presuntivo del Sangue Forense';
const description = 'Simula i test presuntivi del sangue usando i reagenti Kastle-Meyer e Luminol. Distingui il sangue reale dai falsi positivi.';

const howTo = [
  {
    "name": "Seleziona un campione",
    "text": "Scegli un campione dal portaprovette per il test, che può essere sangue o un falso positivo."
  },
  {
    "name": "Scegli il metodo",
    "text": "Decidi se eseguire il test colorimetrico di Kastle-Meyer o il test di luminescenza al Luminol."
  },
  {
    "name": "Applica i reagenti",
    "text": "Aggiungi gocce di reagente Kastle-Meyer seguite da perossido di idrogeno, o applica direttamente il Luminol."
  },
  {
    "name": "Interpreta la reazione",
    "text": "Osserva le variazioni di colore o il bagliore blu al buio per classificare la reazione."
  }
];

const faq = [
  {
    "key": "faq-1",
    "question": "Perché si chiama test presuntivo?",
    "answer": "I test presuntivi sono analisi preliminari basate sull'attività catalitica. Altamente sensibili ma non specifici, richiedono successive conferme di laboratorio."
  },
  {
    "key": "faq-2",
    "question": "Cosa causa un falso positivo con Kastle-Meyer?",
    "answer": "Il test si basa sull'attività simil-perossidasica dell'eme. Ossidanti chimici, ioni metallici o perossidasi vegetali possono catalizzare la reazione."
  },
  {
    "key": "faq-3",
    "question": "Come avviene la reazione del Luminol?",
    "answer": "Il luminol reagisce con il perossido di idrogeno in presenza del ferro dell'emoglobina. Questo eccita il luminol, che emette luce blu tornando allo stato fondamentale."
  },
  {
    "key": "faq-4",
    "question": "La candeggina può causare un falso positivo?",
    "answer": "Sì, l'ipoclorito di sodio è un forte ossidante. Ossida direttamente la fenolftalina o il luminol senza catalizzatore, svanendo rapidamente."
  },
  {
    "key": "faq-5",
    "question": "Qual è la differenza tra test presuntivo e di conferma?",
    "answer": "I test presuntivi sono rapidi ed economici per localizzare le macchie. I test di conferma provano con certezza la presenza di sangue umano."
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
  "title": "Simulatore di Test del Sangue",
  "desc": "Esegui esperimenti virtuali con Luminol e Kastle-Meyer per rilevare il sangue e analizzare i falsi positivi.",
  "configTitle": "Controlli del Laboratorio",
  "sampleLabel": "Seleziona Campione",
  "reagentLabel": "Seleziona Reagente",
  "lightsLabel": "Illuminazione",
  "btnLightsOff": "Spegni Luci",
  "btnLightsOn": "Accendi Luci",
  "btnReset": "Reimposta Piastra",
  "resultsTitle": "Risultati del Test",
  "sampleBlood": "Campione di Sangue (Controllo)",
  "sampleRust": "Ruggine (Ossido di Ferro)",
  "sampleBleach": "Candeggina (Ipoclorito di Sodio)",
  "samplePotato": "Patata (Perossidasi Vegetale)",
  "sampleSaliva": "Campione di Saliva",
  "reagentKM": "Reagente Kastle-Meyer",
  "reagentH2O2": "Perossido di Idrogeno (H2O2)",
  "reagentLuminol": "Soluzione di Luminol",
  "resultTruePositive": "Vero Positivo (Sangue Rilevato)",
  "resultFalsePositive": "Falso Positivo (Catalizzatore Non Sanguigno)",
  "resultNegative": "Reazione Negativa",
  "statusLabel": "Stato della Reazione",
  "reactionLabel": "Descrizione della Reazione",
  "dropReagentBtn": "Applica Goccia",
  "activeCompounds": "Composti Attivi",
  "reactionSpeed": "Velocità di Reazione",
  "reactionDuration": "Durata della Reazione",
  "specimenBase": "Base del Campione",
  "kmPending": "Reagente Kastle-Meyer applicato. Aggiungi Perossido di Idrogeno (H2O2) per catalizzare il cambio di colore.",
  "h2o2Only": "Perossido di idrogeno applicato. Nessuna reazione visibile senza l'indicatore Kastle-Meyer.",
  "noReaction": "Nessuna reazione osservata. Il campione rimane limpido.",
  "luminolBlood": "Bagliore blu intenso osservato immediatamente al buio. Il gruppo eme dell'emoglobina ha ossidato cataliticamente il luminol. Vero Positivo.",
  "luminolBleach": "Bagliore blu molto intenso osservato immediatamente, svanito in meno di 2 secondi. L'ipoclorito ossida direttamente il luminol. Falso Positivo.",
  "luminolRust": "Bagliore blu debole osservato. Gli ioni metallici della ruggine catalizzano debolmente l'ossidazione. Falso Positivo.",
  "luminolPotato": "Nessuna luminescenza. Le perossidasi della patata non catalizzano l'ossidazione del luminol in queste condizioni. Negativo.",
  "luminolNegative": "Nessuna luminescenza al buio. Il composto non è catalitico per l'ossidazione del luminol. Negativo.",
  "kmBlood": "Colorazione rosa intenso immediata con l'aggiunta di perossido di idrogeno. L'eme ha ossidato la fenolftalina in fenolftaleina. Vero Positivo.",
  "kmBleach": "Cambio di colore rosa immediato. L'ipoclorito di sodio ossida direttamente la fenolftalina senza perossido. Falso Positivo.",
  "kmRust": "Colorazione rosa-marrone lenta e debole dopo diversi secondi. La ruggine catalizza la reazione molto lentamente. Falso Positivo.",
  "kmPotato": "Colorazione rosa tenue dopo un ritardo. Le perossidasi vegetali catalizzano debolmente la reazione. Falso Positivo.",
  "kmNegative": "Nessun cambio di colore. La soluzione rimane incolore. Negativo."
},
  seo: [
  {
    "type": "title",
    "text": "Guia Completa ai Test Presuntivi del Sangue",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "I test presuntivi del sangue sono indagini preliminari ad alta sensibilità impiegate sulle scene del crimine e nei laboratori forensi per rilevare tracce biologiche latenti. Prima di destinare risorse economiche e temporali al sequenziamento del DNA o a test di conferma più specifici, gli investigatori utilizzano questi screening rapidi per analizzare indumenti, armi o superfici sospette. Poiché queste analisi sfruttano l'attività simil-perossidasica dell'eme, il gruppo contenente ferro presente nell'emoglobina, esse sono considerate presuntive. Un esito positivo suggerisce fortemente la presenza di sangue, ma deve essere convalidato da test secondari di conferma per escludere la presenza di analoghi catalizzatori chimici."
  },
  {
    "type": "title",
    "text": "Funzionamento della Reazione di Kastle-Meyer",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Il test colorimetrico di Kastle-Meyer si basa sull'ossidazione catalitica della fenolftalina, la forma ridotta e incolore della fenolftaleina. La sequenza della reazione chimica deve essere eseguita in modo rigoroso: dapprima si applica il reagente fenolftalina sulla traccia da analizzare. In presenza di sangue, il gruppo eme funge da catalizzatore biologico. Successivamente, quando viene introdotto il perossido di idrogeno, l'eme catalizza la riduzione del perossido, ossidando istantaneamente la fenolftalina in fenolftaleina e producendo un colore rosa acceso molto intenso. Un cambio di colore tardivo che appare dopo diversi secondi viene considerato negativo."
  },
  {
    "type": "title",
    "text": "Luminol e la Chemiluminescenza Forense",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Il luminol è un composto chimico che mostra una caratteristica luce blu-azzurra nel buio quando viene ossidato da un agente comburente in presenza di un catalizzatore metallico. I tecnici della polizia scientifica spruzzano una soluzione diluita di luminol su ampie superfici. Quando la soluzione entra in contatto con tracce di sangue, il ferro dell'emoglobina catalizza la reazione di ossidazione. La reazione chimica risultante genera un ion amminoftalato in uno stato energetico eccitato, che emette fotoni tornando allo stato fondamentale. Data la debole emissione di luce, è necessario lavorare in condizioni di buio completo per fotografare il bagliore."
  },
  {
    "type": "table",
    "headers": [
      "Sostanza Analizzata",
      "Profilo Kastle-Meyer",
      "Profilo Luminol",
      "Classificazione Diagnostica"
    ],
    "rows": [
      [
        "Sangue Umano Controllo",
        "Colorazione rosa brillante immediata dopo H2O2.",
        "Bagliore blu intenso e duraturo fino a 8s.",
        "Vero Positivo. L'eme fornisce la necessaria attività catalitica."
      ],
      [
        "Candeggina Domestica",
        "Colorazione rosa prima dell'aggiunta di H2O2.",
        "Bagliore forte ma che svanisce in 2s.",
        "Falso Positivo. L'ossidante forte reagisce senza catalizzatore."
      ],
      [
        "Ossido di Ferro (Ruggine)",
        "Rosa-marrone lento e di bassa intensità.",
        "Bagliore bluastro molto debole.",
        "Falso Positivo. Gli ioni ferro catalizzano a bassa efficienza."
      ],
      [
        "Patata (Perossidasi)",
        "Rosa tenue e tardivo dopo ritardo.",
        "Nessuna luminescenza rilevabile.",
        "Falso Positivo (KM) / Negativo (LUM)."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Distinguere il Sangue dai Falsi Positivi",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La distinzione tra tracce ematiche e falsi positivi è un elemento essenziale per la validità delle prove scientifiche in tribunale. I detergenti contenenti ipoclorito di sodio (candeggina) sono forti ossidanti che reagiscono direttamente con i reagenti. Gli esperti forensi li identificano studiando la velocità di reazione: la candeggina produce il colore rosa senza bisogno di perossido nel test KM, e la sua luminescenza decade all'istante. Inoltre, le perossidasi vegetali vengono disattivate dal calore, a differenza dell'emoglobina che rimane stabile alle alte temperature."
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
