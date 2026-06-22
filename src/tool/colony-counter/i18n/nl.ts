const howTo = [
    {
      name: 'Bereid de afbeelding van de plaat voor',
      text: 'Plaats je petrischaal tegen een donkere achtergrond of gebruik een transilluminator zodat kolonies duidelijk contrasteren.',
    },
    {
      name: 'Identificeer kolonietypes',
      text: 'Gebruik verschillende markeerkleuren om kolonies te groeperen op basis van morfologie, kleur of grootte.',
    },
    {
      name: 'Markeer elke kolonie',
      text: 'Klik op elke zichtbare kolonie. Het hulpmiddel nummert elke klik automatisch om herhaling of gemiste kolonies te voorkomen.',
    },
    {
      name: 'Bereken de eindconcentratie',
      text: 'Voer het geënte volume en de verdunningsfactor in om het eindresultaat in CFU/ml of CFU/g te krijgen.',
    },
  ];
const faq = [
    {
      question: 'Wat is CFU tellen?',
      answer: 'Kolonievormende eenheden (CFU) is een maatstaf die het aantal levensvatbare bacteriën of schimmelcellen in een monster schat. Men gaat ervan uit dat elke zichtbare kolonie afkomstig is van een enkele cel of groep cellen.',
    },
    {
      question: 'Waarom is een digitale teller beter dan handmatig tellen?',
      answer: 'Digitaal tellen vermijdt menselijke fouten door "de draad kwijt te raken" terwijl je kolonies visueel markeert. Ons hulpmiddel maakt bovendien onderscheid tussen kolonietypes op basis van kleur mogelijk, wat de analyse van gemengde platen vergemakkelijkt.',
    },
    {
      question: 'Hoe worden CFU per milliliter berekend?',
      answer: 'Het aantal getelde kolonies wordt vermenigvuldigd met de omgekeerde verdunningsfactor. Als je bijvoorbeeld 30 kolonies telt in een verdunning van 1:100, bevat het oorspronkelijke monster 3000 CFU/ml.',
    },
    {
      question: 'Wanneer wordt een plaat als "ontelbaar" beschouwd?',
      answer: 'In de standaard microbiologie wordt een plaat als te vol beschouwd (Too Numerous To Count, TNTC) als er meer dan 250-300 kolonies zijn, en zijn de gegevens onbetrouwbaar vanwege concurrentie tussen de kolonies.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kolonieteller';
const title = 'Kolonieteller: Digitale CFU teltol voor Petrischalen';
const description = 'Digitaal hulpmiddel voor het tellen van bacteriekolonies op petrischalen. Onderscheid types, vermijd fouten en bereken CFU met precisie.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Klik om je petrischaal te uploaden',
    uploadSubtitle: 'Upload een foto van je plaat en begin met het tellen van kolonies',
    currentModeLabel: 'Huidige Modus',
    typeA: 'Type A',
    typeB: 'Type B',
    colonyType: 'Kolonietype',
    counting: 'Tellen',
    totalCFU: 'Totaal CFU',
    undo: 'Laatste ongedaan maken',
    clearAll: 'Alles wissen',
    infoClick: 'Klik op de plaat om kolonies te markeren',
    infoChange: 'Wijzig type voor het markeren',
    confirmClear: 'Weet je zeker dat je alle gemarkeerde kolonies wilt wissen?',
  },
  seo: [
    {
      type: 'title',
      text: 'Digitale Microbiologie: Nauwkeurig Kolonies Tellen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het tellen van bacteriekolonies op petrischalen is een fundamentele techniek in de microbiologie. Traditioneel uitgevoerd met een handteller en marker, is het gemakkelijk om de tel kwijt te raken of dezelfde kolonie twee keer te markeren. Dit digitale hulpmiddel elimineert die fouten en maakt visueel onderscheid tussen kolonietypes mogelijk.',
    },
    {
      type: 'title',
      text: 'Waarom Kolonies Tellen Belangrijk Is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het aantal kolonies op een plaat is direct proportioneel aan de concentratie van levensvatbare micro-organismen in het oorspronkelijke monster. Deze gegevens zijn van cruciaal belang bij:',
    },
    {
      type: 'list',
      items: [
        '<strong>Voedselkwaliteitscontrole:</strong> Detecteren van bacteriële besmetting.',
        '<strong>Farmaceutisch Onderzoek:</strong> Evalueren van de effectiviteit van antibiotica.',
        '<strong>Klinische Diagnose:</strong> Kwantificeren van infecties in patiëntenmonsters.',
        '<strong>Biotechnologie:</strong> Optimaliseren van productiekulturen voor recombinante eiwitten.',
      ],
    },
    {
      type: 'title',
      text: 'Kolonievormende Eenheden (CFU)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Elke zichtbare kolonie op een plaat wordt verondersteld afkomstig te zijn van een enkele levensvatbare cel. Daarom worden ze <strong>CFU</strong> (Colony Forming Units) genoemd.',
    },
    {
      type: 'paragraph',
      html: '<strong>Concentratieformule:</strong><br><code>CFU/mL = (Getelde Kolonies × Verdunningsfactor) / Geënt Volume</code>',
    },
    {
      type: 'title',
      text: 'Best Practices voor het Tellen',
      level: 3,
    },
    {
      type: 'title',
      text: 'Telbaar Bereik',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Het ideale bereik voor handmatig tellen is <strong>30 tot 300 kolonies</strong> per plaat. Onder de 30 is de statistische fout te hoog. Boven de 300 beginnen kolonies in elkaar over te gaan en wordt individueel onderscheid onmogelijk.',
    },
    {
      type: 'title',
      text: 'Kolonietypes',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Op selectieve of differentiële media is het gebruikelijk om meerdere koloniemorfologieën te zien:',
    },
    {
      type: 'list',
      items: [
        '<strong>Type A (Blauwgroen/Groen):</strong> Grote, mucoïde kolonies, typisch voor Gram-negatieve lactose-fermenterende bacteriën.',
        '<strong>Type B (Roze/Paars):</strong> Kleine, doorschijnende kolonies, niet-fermenteerders.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Ons hulpmiddel maakt differentiatie van maximaal twee kolonietypes met verschillende kleuren mogelijk, wat differentieel tellen vergemakkelijkt zonder fysieke markers.',
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

