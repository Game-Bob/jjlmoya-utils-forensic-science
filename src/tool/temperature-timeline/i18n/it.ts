import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cronologia-temperatura-pianeta';
const title = 'Cronologia della Temperatura Media del Pianeta';
const description = 'Esplora la storia della temperatura media della Terra attraverso le ere geologiche.';

const howTo = [
  {
    name: 'Seleziona un\'era',
    text: 'Fai clic su una tacca sul righello della scala temporale.',
  },
  {
    name: 'Controlla la temperatura',
    text: 'Leggi la temperatura media globale per il periodo selezionato.',
  },
  {
    name: 'Osserva il pianeta',
    text: 'Guarda la tela reagire allo stato termico della Terra.',
  },
];

const faq = [
  {
    question: 'La Terra è stata più calda in passato rispetto ad oggi?',
    answer: 'Sì, la Terra ha vissuto climi notevolmente più caldi di quello attuale. Durante il Mesozoico (l\'era dei dinosauri) e il primo Eocene, il pianeta si trovava in uno stato di "serra" senza calotte polari, e le temperature medie globali superavano i 22 °C (circa 7-8 gradi in più rispetto alla media odierna). Tuttavia, le transizioni verso questi periodi sono avvenute su scale temporali di milioni di anni, consentendo l\'adattamento evolutivo.',
  },
  {
    question: 'Cosa ha causato il fenomeno della "Terra a Palla di Neve"?',
    answer: 'La Terra a Palla di Neve (glaciazione globale) si è verificata principalmente durante il Neoproterozoico (circa 700 milioni di anni fa). È stata innescata da un\'estrema riduzione dei gas serra dovuta all\'accelerazione dell\'alterazione chimica delle rocce silicatiche in seguito alla frammentazione del supercontinente Rodinia. Il ghiaccio si estese dai poli all\'equatore, aumentando l\'albedo terrestre e intrappolando il pianeta in un ciclo di gelo globale.',
  },
  {
    question: 'In che modo la Terra regola la sua temperatura a lungo termine?',
    answer: 'La Terra possiede un termostato naturale controllato dal ciclo geologico del carbonio, regolato dalla tettonica delle placche e dall\'alterazione dei silicati. Quando il pianeta si riscalda, la pioggia reagisce più rapidamente con le rocce silicatiche, sottraendo CO2 dall\'atmosfera per depositarla sul fondo oceanico sotto forma di carbonati, riducendo l\'effetto serra.',
  },
  {
    question: 'In che modo il cambiamento climatico dell\'Antropocene differisce dal passato geologico?',
    answer: 'La differenza fondamentale risiede nella velocità del cambiamento. Mentre le transizioni climatiche naturali del passato geologico si verificavano nel corso di decine di migliaia o milioni di anni, il riscaldamento dell\'Antropocene sta avvenendo nel giro di pochi decenni. Questo tasso di variazione termica supera la capacità di adattamento della biosfera attuale.',
  },
  {
    question: 'Che cos\'era il Massimo Termico del Paleocene-Eocene (PETM)?',
    answer: 'Il PETM è stato un evento di riscaldamento globale estremo verificatosi circa 56 milioni di anni fa, causato da un\'immissione massiccia di carbonio nell\'atmosfera. Ha innalzato le temperature globali di 5-8 gradi in poche migliaia di anni ed è considerato il miglior analogo geologico del moderno cambiamento climatico.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cronologia della Temperatura Terrestre',
    sub: 'Esplora le ere climatiche geologiche della Terra',
    ageLabel: 'Età:',
    tempLabel: 'Temperatura Media:',
    selectPrompt: 'Seleziona un periodo geologico.',
    epoch_archean_name: 'Eone Archeano',
    epoch_archean_age: '4,0 - 2,5 miliardi di anni fa',
    epoch_archean_desc: 'Terra primordiale calda con atmosfera ricca di metano.',
    epoch_proterozoic_name: 'Eone Proterozoico',
    epoch_proterozoic_age: '2,5 miliardi - 541 milioni di anni fa',
    epoch_proterozoic_desc: 'L\'aumento dell\'ossigeno causa la glaciazione uroniana.',
    epoch_paleozoic_name: 'Era Paleozoica',
    epoch_paleozoic_age: '541 - 252 milioni di anni fa',
    epoch_paleozoic_desc: 'Esplosione della vita marina e colonizzazione delle terre emerse.',
    epoch_mesozoic_name: 'Era Mesozoica',
    epoch_mesozoic_age: '252 - 66 milioni di anni fa',
    epoch_mesozoic_desc: 'L\'era dei dinosauri con clima a serra.',
    epoch_cenozoic_name: 'Era Cenozoica',
    epoch_cenozoic_age: '66 milioni di anni fa - oggi',
    epoch_cenozoic_desc: 'Raffreddamento graduale e cicli glaciali.',
    epoch_anthropocene_name: 'Antropocene',
    epoch_anthropocene_age: 'Presente e futuro',
    epoch_anthropocene_desc: 'Riscaldamento rapido dovuto alle emissioni antropiche.',
  },
  seo: [
    { type: 'title', text: 'CLIMATOLOGIA STORICA: L\'evoluzione termica della Terra', level: 2 },
    { type: 'paragraph', html: 'Il clima della Terra non è mai stato statico. Nel corso di 4,5 miliardi di anni, il pianeta ha oscillato tra stati di serra (greenhouse) e di glaciazione (icehouse). Comprendere queste fluttuazioni è indispensabile per contestualizzare la velocità del riscaldamento globale antropico.' },
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