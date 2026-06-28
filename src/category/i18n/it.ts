import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "scienze-forensi",
  title: "Strumenti di scienze forensi",
  description: "Utilità forensi per il triage strutturato dei casi, calcoli trasparenti e rapporti attenti alle prove.",
  seo: [
    {
      type: 'title',
      text: "Strumenti di scienze forensi per l analisi delle prove e il triage dei casi",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Questa biblioteca fornisce strumenti e calcoli specializzati per analisti forensi, professionisti legali, ricercatori e investigatori. Le utilità di scienze forensi aiutano a valutare le prove fisiche raccolte sulla scena del crimine. Utilizzando modelli strutturati per la traiettoria delle macchie di sangue, la stima dell'età, l'indice di rifrazione del vetro e l'analisi delle droghe, i team possono eseguire un triage iniziale dei casi. Ogni utilità si concentra sulla trasparenza, mostrando le ipotesi e aiutando gli utenti a comprendere chiaramente i limiti di ciascuna formula forense.",
    },
    {
      type: 'paragraph',
      html: "L'esame iniziale di un caso richiede di valutare quali prove sono disponibili, cosa presuppongono le formule scientifiche e dove rimane l'incertezza. Questi calcolatori sono progettati per supportare la formazione e la valutazione preliminare. Aiutano a determinare quali passaggi analitici sono necessari prima di impegnarsi in test di laboratorio formali. L'uso di questi strumenti aiuta a identificare le lacune nei fascicoli delle prove all'inizio del processo investigativo.",
    },
    {
      type: 'title',
      text: "Aree chiave dei calcoli forensi",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Stima dell\'eta:</strong> calcoli scheletrici, dentali e di maturità con metriche di incertezza esplicite.',
        '<strong>Interpretazione delle prove:</strong> stimatori strutturati che mostrano formule, intervalli di confidenza e limiti.',
        '<strong>Triage dei casi:</strong> strumenti rapidi che evidenziano le prove mancanti e identificano i parametri necessari per l\'esame formale.',
        '<strong>Supporto alla redazione di rapporti:</strong> utilità che incoraggiano rapporti chiari utilizzando intervalli di valori anziché una falsa precisione.',
      ],
    },
    {
      type: 'title',
      text: "Linee guida per l uso responsabile del software forense",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Ogni calcolo forense comporta tassi di errore e limiti di confidenza. Un calcolatore non deve mai sostituire un testimone esperto qualificato o un protocollo di laboratorio convalidato. Invece, queste utilità web sono utilizzate al meglio per esplorare scenari, spiegare concetti a non specialisti e verificare la sensibilità delle misurazioni prima di redigere i rapporti finali. Ciò aiuta a prevenire malintesi in tribunale riguardo alla precisione scientifica.",
    },
    {
      type: 'table',
      headers: ['Uso appropriato', 'Uso inappropriato', 'Importanza'],
      rows: [
        ["Esaminare i fascicoli del caso prima di un esame formale da parte di uno specialista.", "Utilizzare il risultato di un calcolatore come parere peritale finale.", "Le prove forensi devono soddisfare standard rigorosi di validazione scientifica."],
        ["Spiegare l'incertezza di misura e gli intervalli di valori agli investigatori.", "Riportare un singolo numero esatto senza spiegare le limitazioni.", "La falsa precisione può portare a decisioni errate nei sistemi giudiziari."],
        ["Verificare come le ipotesi di input influenzano il risultato stimato.", "Nascondere i parametri iniziali o i calcoli dal fascicolo del caso.", "La trasparenza consente di verificare e riprodurre i risultati da parte di altri."],
        ["Determinare se la qualità dei dati è sufficiente per il calcolo.", "Eseguire formule con misurazioni di scala scadenti o incomplete.", "Parametri di input deboli rendono inaffidabile qualsiasi ricostruzione matematica."],
      ],
    },
  ],
};
