const slug = 'calcolatore-rinnovamento-cellulare';
const description = 'Calcola la percentuale del tuo corpo che si è rinnovata dalla nascita. Stime basate sul tasso di divisione cellulare di organi, ossa e tessuti. Il Paradosso di Teseo reso tangibile.';
const title = 'Calcolatore di Rinnovamento Cellulare: Quanto Resta del "Te" Originale?';
const howTo = [
    {
      name: 'Regola la tua età',
      text: 'Sposta il selettore da 1 a 105 anni. È la variabile più importante per i calcoli del rinnovamento.',
    },
    {
      name: 'Osserva la percentuale principale',
      text: 'Il numero grande al centro mostra quale percentuale della tua materia attuale è "nuova" (rinnovata dalla nascita).',
    },
    {
      name: 'Analizza le barre di avanzamento',
      text: 'Ogni barra rappresenta un tessuto diverso: pelle/sangue, ossa, organi e cervello. Nota come il cervello cambi a malapena mentre la pelle si rinnova costantemente.',
    },
    {
      name: 'Rifletti sulla tua identità',
      text: 'Se il 99% di te è nuova materia, chi sei veramente? Usa questo strumento come punto di partenza per riflessioni sulla continuità personale e il Paradosso di Teseo.',
    },
  ];
const faq = [
    {
      question: 'Cosa si intende esattamente per "rinnovamento cellulare"?',
      answer: 'È il processo naturale mediante il quale le cellule invecchiate o danneggiate muoiono (apoptosi) e vengono sostituite da nuove cellule generate tramite divisione mitotica. Questo ciclo è essenziale per mantenere i tessuti funzionali e riparare i danni.',
    },
    {
      question: 'Perché il cervello si rinnova così lentamente?',
      answer: 'I neuroni della corteccia cerebrale vengono generati prima della nascita e generalmente non si dividono ulteriormente. Ciò garantisce stabilità neurologica: il tuo "cablaggio" fondamentale rimane costante. Tuttavia, le cellule gliali (di supporto) si rinnovano. La memoria è archiviata nelle connessioni, non negli atomi.',
    },
    {
      question: 'È vero che ogni 7 anni siamo "persone nuove"?',
      answer: 'È una semplificazione imprecisa. Il sangue si rinnova in 4 mesi, la pelle in un mese, lo scheletro in 10 anni. Il cervello rimane in gran parte invariato. Il numero di 7 anni è storico (citato già da Aristotele) ma biologicamente è una media imprecisa.',
    },
    {
      question: 'Se il mio corpo è nuovo al 99%, sono ancora la stessa persona?',
      answer: 'Sì. L\'identità è una continuità di informazioni, coscienza e memoria, non di atomi. Sei come un fiume: l\'acqua cambia costantemente, ma il fiume persiste. Il Paradosso di Teseo suggerisce che l\'identità risieda nello schema, non nella materia.',
    },
    {
      question: 'Quali tessuti si rinnovano più velocemente?',
      answer: 'Sangue e pelle sono i primi della lista. Il midollo osseo produce 200 miliardi di cellule del sangue al giorno. Perdi circa 30.000 cellule cutanee al minuto. Per questo guariscono così bene e invecchiano così visibilmente: sono giovani in termini di età cellulare.',
    },
    {
      question: 'È vero che il cristallino dell\'occhio non si rinnova?',
      answer: 'Corretto. Le cellule del cristallino vengono depositate durante lo sviluppo embrionale e conservate per tutta la vita. A 100 anni, le cellule centrali del tuo cristallino potrebbero essere le stesse di quando eri nel grembo materno. È una capsula del tempo biologica.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copiato',
    noHistory: 'Nessuna cronologia',
    load: 'Carica',
    delete: 'Elimina',
    biologicalTimeline: 'Cronologia Biologica',
    ageUnit: 'anni di evoluzione',
    matterNewPercent: 'La tua materia è nuova al',
    atomicRenewal: 'Rinnovamento Atomico',
    skinAndBlood: 'Pelle e Sangue',
    boneRemodeling: 'Rimodellamento Osseo',
    organicMatrix: 'Matrice Organica',
    perennialCells: 'Cellule Perenni',
    disclaimerText: 'I calcoli si basano sulla vita media cellulare secondo studi isotopici. Mentre sangue e pelle si rinnovano in settimane, le proteine del cristallino e gran parte della corteccia cerebrale rimangono quelle dello sviluppo embrionale. Fisicamente, sei una struttura dinamica in costante mutamento.',
  },
  seo: [
    {
      type: 'title',
      text: 'Quanto di te è davvero "tuo"? La scienza del rinnovamento cellulare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il tuo corpo è un fiume in costante movimento. Ogni secondo, milioni di cellule muoiono e vengono sostituite da nuove. In sette anni, praticamente ogni atomo del tuo corpo sarà stato sostituito. Tuttavia, questa statistica è profondamente fuorviante, poiché diverse parti del tuo organismo si rinnovano a ritmi radicalmente diversi.',
    },
    {
      type: 'paragraph',
      html: 'Questo paradosso, noto come <strong>Paradosso della Nave di Teseo</strong>, pone una domanda antica: se si sostituiscono tutte le parti di qualcosa, è ancora la stessa cosa? Nel tuo caso, è una domanda letterale. Gli atomi che compongono il tuo corpo oggi non sono gli stessi di 10 anni fa, ma <em>tu</em> sei ancora tu.',
    },
    {
      type: 'title',
      text: 'Ricambio Cellulare: Una Mappa del Tuo Corpo Dinamico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La velocità di rinnovamento varia drasticamente in base al tessuto:',
    },
    {
      type: 'table',
      headers: ['Tessuto', 'Vita Media Cellulare', 'Rinnovamento Completo', 'Descrizione'],
      rows: [
        ['<strong>Sangue</strong>', '120 giorni', '4 mesi', 'I globuli rossi sono i più veloci. Il midollo osseo ne produce 200 miliardi al giorno.'],
        ['<strong>Pelle</strong>', '2-4 settimane', '1 mese', 'Rinnovamento estremamente rapido. Perdi circa 30.000 cellule cutanee al minuto.'],
        ['<strong>Ossa</strong>', '10 anni', 'Un decennio', 'Lo scheletro è più conservativo. Tuttavia, dopo 10 anni, avrai sostituito praticamente l\'intero scheletro.'],
        ['<strong>Organi</strong>', '15 anni', '1,5 decenni', 'Il fegato si rinnova in mesi. Il cuore in anni. Un mosaico di ritmi.'],
        ['<strong>Cervello</strong>', '80+ anni (neuroni)', 'Quasi mai', 'I tuoi neuroni corticali risalgono alla nascita. Ma la glia (cellule di supporto) si rinnova.'],
      ],
    },
    {
      type: 'title',
      text: 'Il Cristallino: La Parte Più Vecchia di Te',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esiste una struttura nel tuo corpo che è speciale: il <strong>cristallino</strong> dell\'occhio. Le cellule che compongono il cristallino si depositano durante lo sviluppo fetale e non vengono mai sostituite. Se vivessi fino a 100 anni, le cellule centrali del tuo cristallino sarebbero ancora le stesse che avevi nel grembo materno. Sono, letteralmente, la parte più vecchia di te.',
    },
    {
      type: 'title',
      text: 'Calcolo del Rinnovamento Totale: Il Paradosso dei Pesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questo calcolatore utilizza una media ponderata di diversi tessuti:',
    },
    {
      type: 'list',
      items: [
        '<strong>30% pelle e sangue:</strong> Rinnovamento quasi completo nei primi anni.',
        '<strong>35% scheletro:</strong> Rinnovamento progressivo, che raggiunge il 100% a 10 anni.',
        '<strong>25% organi:</strong> Rinnovamento più lento, variabile in base all\'organo.',
        '<strong>10% cervello:</strong> Cambiamento minimo nei neuroni, massimo nelle strutture di supporto.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Il risultato è che a 25 anni, circa il <strong>93% della tua materia attuale è nuova</strong>. A 80 anni, potresti essere composto per oltre il 99% da atomi diversi da quelli che avevi alla nascita.',
    },
    {
      type: 'title',
      text: 'Implicazioni Filosofiche: L\'Identità è Informazione, non Materia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se il tuo corpo è completamente nuovo ogni decennio, perché sei "tu"? La risposta è che l\'identità risiede non negli atomi specifici, ma nello <strong>schema di informazioni</strong> che quegli atomi mantengono. Sei come una canzone: non è la stessa aria che vibra, ma il motivo persiste.',
    },
    {
      type: 'paragraph',
      html: 'Questo ha implicazioni profonde: il tuo corpo è un processo, non una cosa. Sei uno schema auto-organizzato che persiste attraverso il cambiamento. Non possiedi atomi; sei una struttura che li incanala temporaneamente.',
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

