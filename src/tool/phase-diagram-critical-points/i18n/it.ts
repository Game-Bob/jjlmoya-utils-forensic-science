import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'diagramma-di-fase-punto-critico-visualizzatore';
const title = 'Diagramma di Fase e Visualizzatore del Punto Critico';
const description = 'Esplora le regioni solida, liquida, gassosa e supercritica su un diagramma di fase pressione-temperatura interattivo con marcatori di punto triplo e punto critico.';

const howTo = [
  {
    name: 'Scegli una sostanza',
    text: 'Passa da acqua a anidride carbonica e azoto per vedere come punti tripli e critici reali rimodellano la mappa delle fasi.',
  },
  {
    name: 'Muovi temperatura e pressione',
    text: 'Usa i cursori per posizionare il campione sul piano pressione-temperatura. Il diagramma aggiorna la regione di fase attiva e il marcatore del campione in tempo reale.',
  },
  {
    name: 'Osserva l\'alone critico',
    text: 'Spostati verso la fine del confine vapore-liquido per vedere il calore latente svanire e la distinzione liquido-gas collassare in un fluido supercritico.',
  },
  {
    name: 'Leggi il pannello didattico',
    text: 'Usa l\'etichetta di fase, il misuratore di calore latente e le letture dei punti per collegare il diagramma visivo al vocabolario termodinamico.',
  },
];

const faq = [
  {
    question: 'Cos\'è un diagramma di fase?',
    answer: 'Un diagramma di fase mappa quale stato della materia è stabile a diverse combinazioni di temperatura e pressione. Le linee di confine segnano le condizioni in cui due fasi possono coesistere in equilibrio.',
  },
  {
    question: 'Cosa succede al punto critico?',
    answer: 'Al punto critico, il confine vapore-liquido termina. Al di sopra della temperatura e pressione critiche, il materiale diventa un fluido supercritico e non c\'è una netta distinzione tra liquido e gas.',
  },
  {
    question: 'Perché l\'acqua ha una linea di fusione diversa?',
    answer: 'L\'acqua è insolita perché il ghiaccio è meno denso dell\'acqua liquida vicino al punto di fusione. L\'aumento della pressione può favorire la fase liquida più densa, quindi il confine solido-liquido ha una pendenza diversa rispetto a molte sostanze.',
  },
  {
    question: 'Le curve tracciate sono accurate in laboratorio?',
    answer: 'No. Lo strumento utilizza curve semplificate ancorate a valori pubblicati di punto triplo e punto critico. E progettato per l\'apprendimento concettuale, non per l\'ingegneria di processo o i calcoli di sicurezza.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Controlli del diagramma di fase',
    substance: 'Sostanza',
    units: 'Unita',
    scientificUnits: 'Scientifiche (K, MPa)',
    metricUnits: 'Metriche (Celsius, kPa)',
    imperialUnits: 'Imperial (Fahrenheit, psi)',
    temperature: 'Temperatura',
    pressure: 'Pressione',
    diagram: 'Diagramma di fase pressione-temperatura',
    sample: 'Stato del campione',
    phase: 'Fase stabile',
    triplePoint: 'Punto triplo',
    criticalPoint: 'Punto critico',
    vaporCurve: 'Confine vapore-liquido',
    meltingLine: 'Confine solido-liquido',
    latentHeat: 'Contrasto di calore latente',
    criticalProximity: 'Prossimita critica',
    coordinates: 'Coordinate',
    solid: 'Solido',
    liquid: 'Liquido',
    gas: 'Gas',
    supercritical: 'Supercritico',
    low: 'basso',
    high: 'alto',
    reset: 'Reimposta',
    interpretation: 'Interpretazione',
    note: 'Le linee di confine segnano la coesistenza; le regioni segnano la fase piu stabile per le condizioni selezionate.',
  },
  seo: [
    {
      type: 'title',
      text: 'Visualizzatore interattivo di diagrammi di fase per punti tripli, curve di ebollizione e punti critici',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo visualizzatore di diagrammi di fase trasforma un grafico astratto pressione-temperatura in una mappa interattiva. Scegli una sostanza, muovi la temperatura e la pressione, e osserva se il campione è previsto comportarsi come solido, liquido, gas o fluido supercritico. L\'obiettivo è rendere spaziali i confini di fase: attraversare una linea cambia lo stato stabile, mentre avvicinarsi al punto critico cambia il significato stesso di un confine di fase.',
    },
    {
      type: 'paragraph',
      html: 'Lo strumento e creato per studenti, insegnanti, divulgatori scientifici e chiunque cerchi una spiegazione chiara dei diagrammi di fase. Enfatizza le caratteristiche piu importanti nella termodinamica introduttiva: il punto triplo dove tre fasi coesistono, la curva vapore-liquido, il confine solido-liquido e il punto finale critico dove la distinzione liquido-gas scompare.',
    },
    {
      type: 'title',
      text: 'Come leggere il diagramma pressione-temperatura',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un diagramma di fase colloca la temperatura su un asse e la pressione sull\'altro. Ogni regione mostra la fase stabile in quelle condizioni. Le linee tra le regioni sono curve di coesistenza: lungo quelle linee, due fasi possono rimanere in equilibrio invece che una fase sostituisca completamente l\'altra.',
    },
    {
      type: 'table',
      headers: ['Caratteristica del diagramma', 'Significato', 'Cosa osservare nello strumento'],
      rows: [
        ['Punto triplo', 'Solido, liquido e gas coesistono', 'Il punto di giunzione a bassa temperatura dove i confini si incontrano.'],
        ['Curva vapore-liquido', 'Equilibrio di ebollizione o condensazione', 'La linea curva dal punto triplo al punto critico.'],
        ['Confine solido-liquido', 'Equilibrio di fusione o congelamento', 'La linea ripida che separa le regioni solida e liquida.'],
        ['Punto critico', 'Fine del confine vapore-liquido', 'Il punto finale evidenziato dove il calore latente svanisce.'],
        ['Regione supercritica', 'Nessuna netta distinzione liquido-gas', 'L\'area ad alta temperatura e alta pressione oltre il punto critico.'],
      ],
    },
    {
      type: 'title',
      text: 'Perche il punto critico e importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Al di sotto del punto critico, l\'ebollizione è una transizione di fase: liquido e vapore possono coesistere e l\'energia può essere assorbita come calore latente mentre la temperatura rimane legata alla condizione al contorno. Al punto critico, quel confine termina. Al di sopra, la densità cambia continuamente e la sostanza viene descritta come un fluido supercritico piuttosto che un liquido o gas normale.',
    },
    {
      type: 'paragraph',
      html: 'Questo è importante in chimica, scienze planetarie, estrazione industriale, refrigerazione e fisica delle alte pressioni. L\'anidride carbonica, ad esempio, diventa supercritica in condizioni relativamente accessibili rispetto all\'acqua, motivo per cui la CO2 supercritica viene utilizzata nell\'estrazione e nella lavorazione dei materiali. L\'acqua richiede temperature e pressioni molto più elevate, rendendo il suo punto critico importante per i sistemi energetici e la geofisica.',
    },
    {
      type: 'title',
      text: 'Cosa semplifica questo visualizzatore',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I diagrammi di fase reali possono includere polimorfi, stati metastabili, miscele non ideali, fasi solide multiple ed equazioni di stato adattate sperimentalmente. Questo strumento didattico mantiene il modello intenzionalmente compatto. Ancor ogni sostanza a valori di riferimento riconoscibili e traccia curve didattiche morbide in modo che le idee principali siano facili da ispezionare senza bisogno di una tabella termodinamica.',
    },
    {
      type: 'list',
      items: [
        '<strong>Usalo per l\'intuizione:</strong> aiuta a spiegare perche pentole a pressione, ghiaccio secco, ebollizione e fluidi supercritici si comportano diversamente.',
        '<strong>Non usarlo per limiti ingegneristici:</strong> le curve semplificate non sostituiscono i dati certificati sulle proprieta.',
        '<strong>Concentrati sulla topologia:</strong> il risultato di apprendimento piu importante e come le regioni di fase si collegano e dove i confini terminano.',
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
