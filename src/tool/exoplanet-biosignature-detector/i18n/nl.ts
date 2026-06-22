import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'exoplaneet-biosignatuur-detector';
const title = 'Exoplaneet Biosignatuur Detector';
const description = 'Combineer zuurstof-, methaan- en ozonabsorptielijnen in een gesimuleerd exoplaneettransmissiespectrum. Beoordeel biologische bewoonbaarheid, technosignatuurindicatoren en het risico op fout-positieven op basis van spectraal bewijs.';

const howTo = [
  {
    name: 'Kies de gastster',
    text: 'Selecteer een K-dwerg, een zonachtige ster of een M-dwerg. Het stertype beïnvloedt het risico op fout-positieven aanzienlijk, omdat UV-flux, stellaire activiteit en fotochemie de interpretatie van zuurstof en ozon bepalen.',
  },
  {
    name: 'Lijn de spectraallijnen uit',
    text: 'Pas de zuurstof-, methaan- en ozonregelaars aan totdat de geobserveerde absorptiemerkers overeenkomen met de referentiebanden in het gesimuleerde spectrum.',
  },
  {
    name: 'Stel ruis en atmosferische context in',
    text: 'Verhoog de instrumentruis om het effect op de betrouwbaarheid van de data te observeren. Varieer de waterdamp- en CO2-niveaus om verschillende atmosferische condities te simuleren, van vochtig tot droog of fotochemisch complex.',
  },
  {
    name: 'Beoordeel de bewoonbaarheidsindices',
    text: 'Vergelijk de biologische en technologische indices met het fout-positiefrisico. Een robuust resultaat vereist de aanwezigheid van meerdere gassen in chemisch onevenwicht, in plaats van één geïsoleerde detectie.',
  },
];

const faq = [
  {
    question: 'Wat is een biosignatuur in exoplaneetspectroscopie?',
    answer: 'Een biosignatuur is een van een afstand detecteerbaar kenmerk dat door biologische processen kan zijn veroorzaakt. Veelvoorkomende kandidaten zijn zuurstof, ozon, methaan en waterdamp; met name combinaties van gassen die chemisch zouden reageren en verdwijnen tenzij ze continu door een bron (zoals leven) worden aangevuld.',
  },
  {
    question: 'Waarom is de combinatie van zuurstof en methaan cruciaal?',
    answer: 'Zuurstof en methaan zijn chemisch reactief. Als beide in significante hoeveelheden naast elkaar bestaan, verkeert de atmosfeer in chemisch onevenwicht. Dit is een veel sterker signaal voor mogelijke biologische activiteit dan elk gas afzonderlijk, waardoor de simulator dit paar zwaarder meeweegt.',
  },
  {
    question: 'Kan zuurstof een fout-positief signaal geven?',
    answer: 'Ja. Zuurstof kan zich abiotisch ophopen door processen zoals fotolyse van waterdamp, vulkanische activiteit of specifieke UV-omgevingen rond de ster. Daarom rapporteert deze tool expliciet het risico op fout-positieven in plaats van zuurstof als definitief bewijs te zien.',
  },
  {
    question: 'Waarom wordt ozon apart van zuurstof geanalyseerd?',
    answer: 'Ozon ontstaat door fotochemische reacties met zuurstof en heeft zeer sterke spectrale kenmerken. Het fungeert vaak als een indirecte indicator voor zuurstof, vooral wanneer directe zuurstofbanden in het spectrum lastig te isoleren zijn.',
  },
  {
    question: 'Wat houdt de technologische index in?',
    answer: 'De technologische index is een speculatieve score die aangeeft of een atmosfeer energetisch of chemisch zo ongebruikelijk is, dat kunstmatige bronnen (technosignaturen) niet kunnen worden uitgesloten. Dit is geen bewering van detectie, maar een oproep tot nader onderzoek.',
  },
  {
    question: 'Is dit een wetenschappelijk retrieval-model?',
    answer: 'Nee. Dit is een educatieve simulator die de kernconcepten uit de spectroscopie vertaalt naar een interactief model. Echte wetenschappelijke analyses maken gebruik van complexe stralingsoverdrachtmodellen, Bayesiaanse inferentie en gedetailleerde correcties voor stellaire contaminatie en instrumentele ruis.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualisatie exoplaneettransmissiespectrum',
    starClass: 'Gastster',
    starK: 'Rustige K-dwerg',
    starSun: 'Zonachtige G-ster',
    starM: 'Actieve M-dwerg',
    noise: 'Instrumentruis',
    oxygenLine: 'Zuurstofmarker',
    methaneLine: 'Methaanmarker',
    ozoneLine: 'Ozonmarker',
    waterVapor: 'Waterdampcontext',
    carbonDioxide: 'CO2-context',
    habitabilityIndex: 'Bewoonbaarheidsindex',
    biologicalIndex: 'Biologisch',
    technologicalIndex: 'Technologisch',
    falsePositiveRisk: 'Fout-positief risico',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Conclusie',
    dataLive: 'Datasynthese actief',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Lijn de spectrale markers uit om het atmosferische bewijs te evalueren.',
    verdictWeak: 'Het spectrum is zwak: er is onvoldoende bewijs voor een levensvriendelijke interpretatie.',
    verdictPromising: 'Het spectrum is veelbelovend: meerdere biosignatuurmarkers vertonen gedeeltelijke overeenkomsten.',
    verdictStrong: 'Het spectrum is sterk: zuurstof, methaan en ozon vormen samen een coherent onevenwichtssignaal.',
    verdictAmbiguous: 'Het signaal is interessant maar dubbelzinnig: de kans op stellaire of atmosferische fout-positieven is groot.',
  },
  seo: [
    {
      type: 'title',
      text: 'Exoplaneet Biosignatuur Detector',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De Exoplaneet Biosignatuur Detector is een interactieve spectroscopiesimulator waarmee je verkent hoe levensgerelateerde gassen zichtbaar worden in het licht dat door de atmosfeer van een verre planeet filtert. In plaats van een simpele ja/nee-analyse, vraagt de tool je om absorptiekenmerken van zuurstof, methaan en ozon uit te lijnen en deze resultaten kritisch te toetsen aan ruis, waterdamp, CO2-niveaus en het type gastster.',
    },
    {
      type: 'paragraph',
      html: 'Dit is de kernuitdaging van biosignatuurwetenschap: een individueel gas zoals zuurstof of methaan is op zichzelf onvoldoende bewijs voor leven. De meest overtuigende data combineren meerdere gassen, fysieke context en een strikte uitsluiting van niet-biologische processen. Deze simulator visualiseert deze wetenschappelijke afwegingen in een overzichtelijke laboratoriuminterface.',
    },
    {
      type: 'title',
      text: 'Hoe Transmissiespectroscopie werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanneer een planeet voor zijn ster langs trekt, filtert de atmosfeer een deel van het sterlicht. Moleculen absorberen specifieke golflengten, wat resulteert in absorptielijnen in het gemeten spectrum. Door deze lijnen te vergelijken met laboratoriumdata kunnen astronomen de samenstelling van de atmosfeer afleiden, al maken factoren zoals wolken, temperatuur en steractiviteit dit complex.',
    },
    {
      type: 'title',
      text: 'De waarde van gecombineerde signalen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zuurstof (O2):</strong> Op aarde wordt dit door fotosynthese in stand gehouden, maar abiotische accumulatie is mogelijk onder specifieke omstandigheden.',
        '<strong>Methaan (CH4):</strong> Kan wijzen op biologie, geologie of inslagen. De detectie in combinatie met oxiderende gassen is zeer suggestief.',
        '<strong>Ozon (O3):</strong> Een fotochemisch bijproduct van zuurstof dat vaak makkelijker te detecteren is als indirecte aanwijzing.',
        '<strong>Context van Water en CO2:</strong> Water is een voorwaarde voor bewoonbaarheid; CO2 helpt bij het inschatten van broeikaseffecten en het identificeren van fout-positief scenario\'s.',
      ],
    },
    {
      type: 'title',
      text: 'Het belang van Fout-positieven',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een hoge zuurstofconcentratie betekent niet automatisch dat er leven is. Processen zoals fotolyse van water door UV-straling kunnen zuurstof ophopen zonder biologische input. Vooral bij actieve M-dwergen kunnen stellaire fakkels de atmosfeer drastisch veranderen. De fout-positiefindicator stijgt naarmate de interpretatie van biologische oorsprong minder robuust wordt door ruis of atmosferische omstandigheden.',
    },
    {
      type: 'table',
      headers: ['Signaalpatroon', 'Interpretatie', 'Let op'],
      rows: [
        ['Alleen O2', 'Mogelijk zuurstofrijk', 'Kan abiotisch zijn door waterverlies of fotochemie'],
        ['Alleen CH4', 'Actieve geologie of reducerende atmosfeer', 'Op zichzelf geen sterk bewijs voor leven'],
        ['O2 + CH4', 'Chemisch onevenwicht', 'Vereist robuuste validatie en uitsluiting van contaminatie'],
        ['O2 + O3 + H2O', 'Aardachtige context', 'Wolken en steractiviteit blijven kritische variabelen'],
      ],
    },
    {
      type: 'title',
      text: 'Biologische en Technologische indices',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De biologische index focust op chemisch onevenwicht, met name de combinatie van zuurstof en methaan, ondersteund door ozon en water. De technologische index is speculatief en signaleert wanneer atmosferen energetisch of chemisch zodanig afwijken dat kunstmatige vervuiling of atmosferische modificatie moet worden overwogen.',
    },
    {
      type: 'paragraph',
      html: 'Gebruik deze simulator als hulpmiddel voor logisch redeneren. Wetenschappelijke biosignatuur-beoordeling vereist complexe modellen, correcties voor telescoopsystematiek en uitgebreide foutenanalyse. Deze tool dwingt de gebruiker om bewijs kritisch uit te lijnen, context mee te wegen en waakzaam te blijven voor fout-positieve resultaten.',
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
