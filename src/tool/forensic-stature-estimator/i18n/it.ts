import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'estimatore-statura-forense-ossa-lunghe-trotter-gleser';
const title = 'Estimatore della Statura Forense';
const description = 'Stima la statura in vita da ossa lunghe umane utilizzando le equazioni di regressione di Trotter e Gleser, integrando sesso biologico, origine ancestrale e correzione per l\'età.';

const howTo = [
  {
    name: 'Selezionare l\'osso e le variabili',
    text: 'Scegli l\'osso lungo specifico da misurare (Femore, Tibia, Omero, Perone, Radio o Ulna) insieme al sesso biologico, al gruppo ancestrale e all\'età del soggetto.'
  },
  {
    name: 'Determinare la lunghezza dell\'osso',
    text: 'Regola il calibro scorrevole sulla tavola osteometrica virtuale per impostare la lunghezza massima dell\'osso in centimetri.'
  },
  {
    name: 'Calcolare la statura stimata',
    text: 'Il calcolatore applica le formule di regressione di Trotter-Gleser, sottraendo 0.06 cm all\'anno per individui sopra i 30 anni.'
  },
  {
    name: 'Interpretare intervalli ed errori',
    text: 'Esamina la statura stimata, l\'Errore Standard della Stima (SEE) e l\'intervallo di previsione al 95%.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Come funzionano le equazioni di regressione di Trotter e Gleser?',
    answer: 'Le equazioni utilizzano la regressione lineare per modellare la correlazione tra la statura in vita e la lunghezza massima delle ossa lunghe. Il calcolatore applica pendenze e intercette specifiche in base a sesso ed origine.'
  },
  {
    key: 'faq-2',
    question: 'Perché lo strumento richiede sesso biologico e origine?',
    answer: 'Le proporzioni del corpo umano variano a seconda del sesso e della popolazione geografica. I maschi mostrano rapporti arti-statura differenti dalle femmine.'
  },
  {
    key: 'faq-3',
    question: 'Perché è prevista una correzione per l\'età?',
    answer: 'La statura in vita diminuisce gradualmente dopo la giovinezza a causa della compressione dei dischi intervertebrali. Trotter e Gleser raccomandano di sottrarre 0.06 cm per ogni anno dopo i 30 anni.'
  },
  {
    key: 'faq-4',
    question: 'Che cos\'è l\'Errore Standard della Stima (SEE)?',
    answer: 'Il SEE rappresenta la deviazione standard dei residui nel modello di regressione. Misura l\'accuratezza predittiva per quell\'osso specifico.'
  },
  {
    key: 'faq-5',
    question: 'Quali ossa lunghe forniscono le stime più accurate?',
    answer: 'Le ossa degli arti inferiori (femore e tibia) offrono le stime più precise perché contribuiscono direttamente all\'altezza. Gli arti superiori hanno errori standard superiori.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Estimatore della Statura Forense',
    desc: 'Simula misurazioni su tavole osteometriche e calcola la statura in vita tramite regressione lineare.',
    configTitle: 'Configurazione Osteometrica',
    boneLabel: 'Specimen Osseo',
    lengthLabel: 'Lunghezza dell\'Osso',
    unitLabel: 'Unità di Misura',
    metricOption: 'Metrico (cm)',
    imperialOption: 'Imperiale (pollici)',
    sexLabel: 'Sesso Biologico',
    ancestryLabel: 'Origine Ancestrale',
    ageLabel: 'Età al Decesso (anni)',
    maleOption: 'Maschile',
    femaleOption: 'Femminile',
    whiteOption: 'Bianco / Caucasico',
    blackOption: 'Nero / Afroamericano',
    asianOption: 'Asiatico / Mongoloide',
    femurName: 'Femore (Osso della coscia)',
    tibiaName: 'Tibia (Osso dello stinco)',
    humerusName: 'Omero (Osso del braccio)',
    fibulaName: 'Perone (Fibula)',
    radiusName: 'Radio (Osso dell\'avambraccio)',
    ulnaName: 'Ulna (Cubito)',
    resultsTitle: 'Risultati della Stima',
    estimateLabel: 'Statura Stimata',
    errorLabel: 'Errore Standard (SEE)',
    rangeLabel: 'Intervallo di Previsione del 95%',
    formulaLabel: 'Equazione di Regressione',
    formulaBoneFactor: 'Fattore Osseo',
    formulaConstant: 'Costante',
    formulaAgeCorrection: 'Correzione Età',
    formulaStdError: 'Errore Standard (SEE)',
    fallbackAlert: 'Non esiste un\'equazione di Trotter-Gleser diretta per femmine asiatiche; vengono utilizzate le equazioni delle femmine bianche come fallback.',
    boardInstructions: 'Trascina il calibro o usa i campi numerici per misurare l\'osso.',
    rulerLabelMetric: 'Scala Metrica (mm)',
    rulerLabelImperial: 'Scala Imperiale (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Guida Completa alla Stima della Statura in Antropologia Forense',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La stima della statura rappresenta un pilastro del profilo biologico in antropologia fisica, bioarcheologia e medicina legale. Quando si rinvengono resti scheletrici, ricostruire l\'altezza in vita dell\'individuo aiuta gli investigatori a confrontare i database delle persone scomparse. La statura si stima misurando la lunghezza massima delle ossa lunghe, altamente correlate con l\'altezza complessiva.'
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore digitale di tavola osteometrica consente a studenti e professionisti di esplorare i modelli di regressione lineare sviluppati da Mildred Trotter e Goldine C. Gleser. Configurando parametri quali tipo di osso, sesso biologico, origine e età, gli utenti possono analizzare l\'influenza delle proporzioni corporee sulle stime.'
    },
    {
      type: 'title',
      text: 'Capire le Formule di Regressione di Trotter-Gleser',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter e Goldine C. Gleser pubblicarono le loro formule storiche nel 1952 e nel 1958. Le equazioni prendono la forma lineare: Statura = (Pendenza × Lunghezza Osso) + Costante ± Errore Standard. Poiché le proporzioni variano per sesso e origine, si applicano formule separate.'
    },
    {
      type: 'table',
      headers: ['Specimen Osseo', 'Modello Maschile Bianco', 'Modello Femminile Bianco', 'Utilità e Affidabilità Forense'],
      rows: [
        ['Femore (Coscia)', 'Statura = 2.32 × Femore + 65.53 ± 3.94 cm', 'Statura = 2.47 × Femore + 54.10 ± 3.72 cm', 'Massima affidabilità. Il femore è il principale osso portante dell\'arto inferiore, direttamente legato all\'altezza.'],
        ['Tibia (Stinco)', 'Statura = 2.42 × Tibia + 81.93 ± 4.00 cm', 'Statura = 2.90 × Tibia + 61.53 ± 3.66 cm', 'Alta affidabilità. Prestare attenzione a escludere il malleolo mediale conformemente al protocollo originale di Trotter.'],
        ['Perone (Fibula)', 'Statura = 2.60 × Perone + 75.50 ± 3.86 cm', 'Statura = 2.93 × Perone + 59.61 ± 3.57 cm', 'Molto affidabile, ma il perone è sottile e spesso frammentato nei resti storici.'],
        ['Omero (Braccio)', 'Statura = 2.89 × Omero + 78.10 ± 4.57 cm', 'Statura = 3.36 × Omero + 57.97 ± 4.45 cm', 'Affidabilità moderata. Gli arti superiori non sono portanti e mostrano errori standard maggiori.'],
        ['Radio (Avambraccio)', 'Statura = 3.79 × Radio + 79.42 ± 4.66 cm', 'Statura = 4.74 × Radio + 54.93 ± 4.45 cm', 'Minore affidabilità a causa di un\'elevata variabilità dello sviluppo dell\'avambraccio.']
      ]
    },
    {
      type: 'title',
      text: 'Perdita di Altezza con l\'Età e Correzione Post-Mortem',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La statura adulta non è statica. A partire dai 30 anni, si verifica una progressiva perdita di altezza a causa della compressione dei dischi intervertebrali e di variazioni posturali. Trotter e Gleser raccomandano di sottrarre 0.06 cm per ogni anno oltre i 30: Perdita = 0.06 × (Età - 30).'
    },
    {
      type: 'title',
      text: 'Discrepanze Metodologiche e Protocollo della Tibia',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Un noto problema metodologico riguarda la misurazione della tibia. Nel 1952 Trotter misurò la tibia escludendo il malleolo mediale, ma cambiò il protocollo nel 1958. Applicare la formula del 1952 ad una tibia misurata comprensiva di malleolo porta ad una sovrastima sistematica.'
    },
    {
      type: 'title',
      text: 'Tendenze Secolari e Dati di Riferimento Storici',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'I campioni di Trotter-Gleser riflettono individui nati alla fine del XIX e all\'inizio del XX secolo. A causa dei miglioramenti nutrizionali, le popolazioni moderne presentano una tendenza secolare positiva per l\'altezza. I professionisti moderni integrano l\'uso di queste formule con database moderni come il FORDISC.'
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
