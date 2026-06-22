import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperatuur-tijdlijn';
const description = 'Ontdek de geschiedenis van de gemiddelde temperatuur op aarde door de geologische tijdperken heen.';
const title = 'Gemiddelde Temperatuur Tijdlijn van de Planeet';

const howTo = [
  {
    name: 'Selecteer een tijdperk',
    text: 'Klik op een inkeping op de schaalverdeling.',
  },
  {
    name: 'Controleer temperatuur',
    text: 'Lees de wereldwijde gemiddelde temperatuur.',
  },
  {
    name: 'Observeer de planeet',
    text: 'Kijk hoe het canvas reageert op de thermische toestand.',
  },
];

const faq = [
  {
    "question": "Was de aarde in het verleden warmer dan nu?",
    "answer": "Ja, de aarde heeft periodes gekend die aanzienlijk warmer waren dan nu. Tijdens het Mesozoicum (het tijdperk van de dinosauriers) en het vroege Eoceen bevond de planeet zich in een broeikastoestand zonder poolkappen, en de wereldwijde gemiddelde temperatuur overschreed de 22 graden, zon 7 tot 8 graden warmer dan het huidige gemiddelde. De overgangen naar die periodes vonden echter plaats over een tijdsbestek van miljoenen jaren, wat evolutionaire aanpassing mogelijk maakte."
  },
  {
    "question": "Wat veroorzaakte het Sneeuwbal Aarde-fenomeen?",
    "answer": "Sneeuwbal Aarde (globale ijstijd) vond voornamelijk plaats tijdens het Neoproterozoicum (ongeveer 700 miljoen jaar geleden). Het werd in gang gezet door een extreme vermindering van broeikasgassen als gevolg van versnelde chemische verwering van silicaatgesteenten na het uiteenvallen van het supercontinent Rodinia. IJs strekte zich uit van de polen tot de evenaar, reflecteerde zonnestraling (albedo-effect) en hield de planeet gevangen in een wereldwijde bevriezingslus die pas na miljoenen jaren van vulkanische CO2-accumulatie werd doorbroken."
  },
  {
    "question": "Hoe reguleert de aarde haar temperatuur op de lange termijn?",
    "answer": "De aarde bezit een natuurlijke thermostaat die wordt gestuurd door de geologische koolstofcyclus, voornamelijk gereguleerd door platentektoniek en silicaatverwering. Wanneer de planeet opwarmt, reageert zure regen sneller met silicaatgesteenten, waardoor CO2 uit de atmosfeer wordt gehaald en als carbonaat op de oceaanbodem wordt afgezet, wat het broeikaseffect vermindert. Als de planeet afkoelt, neemt de verwering af maar blijft vulkanische activiteit CO2 uitstoten, waardoor de planeet geleidelijk weer opwarmt."
  },
  {
    "question": "Hoe verschilt de klimaatverandering in het Antropoceen van het geologische verleden?",
    "answer": "Het fundamentele verschil ligt in de snelheid van de verandering. Terwijl natuurlijke klimaatverschuivingen in het geologische verleden doorgaans plaatsvonden over tienduizenden of miljoenen jaren (wat biologische migratie en evolutie toeliet), voltrekt de opwarming in het Antropoceen zich in een kwestie van decennia. Dit tempo van thermische variatie is exponentieel sneller dan bijna elke gedocumenteerde eerdere gebeurtenis, overtreft het aanpassingsvermogen van de huidige biosfeer en veroorzaakt een versnelde massale uitsterving."
  },
  {
    "question": "Wat was het Paleoceen-Eoceen Thermisch Maximum (PETM)?",
    "answer": "Het PETM was een extreme wereldwijde opwarmingsgebeurtenis die ongeveer 56 miljoen jaar geleden plaatsvond. Het werd veroorzaakt door een snelle en massale uitstoot van koolstof in de atmosfeer (mogelijk door het vrijkomen van oceanische methaanhydraten of vulkanisme in de Noord-Atlantische Oceaan), waardoor de wereldwijde temperatuur in een paar duizend jaar met 5 tot 8 graden steeg. Het wordt beschouwd als het beste geologische analoog voor de moderne klimaatverandering, resulterend in ernstige oceaanverzuring en massaal uitsterven van benthische organismen."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Temperatuur Tijdlijn van de Aarde',
    sub: 'Ontdek de geologische klimaattijdperken van de Aarde',
    ageLabel: 'Leeftijd:',
    tempLabel: 'Gemiddelde Temperatuur:',
    selectPrompt: 'Selecteer een geologische periode.',
    epoch_archean_name: 'Archeicum',
    epoch_archean_age: '4,0 tot 2,5 miljard jaar geleden',
    epoch_archean_desc: 'Extreem hete aarde met methaanrijke atmosfeer.',
    epoch_proterozoic_name: 'Proterozoicum',
    epoch_proterozoic_age: '2,5 miljard tot 541 miljoen jaar geleden',
    epoch_proterozoic_desc: 'Zuurstofstijging veroorzaakt Huronian-ijstijd.',
    epoch_paleozoic_name: 'Paleozoicum',
    epoch_paleozoic_age: '541 tot 252 miljoen jaar geleden',
    epoch_paleozoic_desc: 'Levensexplosie in oceanen en kolonisatie van land.',
    epoch_mesozoic_name: 'Mesozoicum',
    epoch_mesozoic_age: '252 tot 66 miljoen jaar geleden',
    epoch_mesozoic_desc: 'Tijdperk van de dinosauriërs onder broeikascondities.',
    epoch_cenozoic_name: 'Cenozoicum',
    epoch_cenozoic_age: '66 miljoen jaar geleden tot heden',
    epoch_cenozoic_desc: 'Geleidelijke afkoeling leidend tot Kwartaire ijstijden.',
    epoch_anthropocene_name: 'Antropoceen',
    epoch_anthropocene_age: 'Heden en toekomst',
    epoch_anthropocene_desc: 'Snelle opwarming door uitstoot van broeikasgassen.',
  },
  seo: [
  {
    "type": "title",
    "text": "HISTORISCHE KLIMATOLOGIE: De thermische evolutie van de aarde door geologische tijdperken",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Het klimaat op aarde is nooit statisch geweest. In de loop van haar 4,5 miljard jaar durende geschiedenis heeft onze planeet geschommeld tussen twee fundamentele toestanden: de broeikastoestand (greenhouse) en de ijstoestand (icehouse). Het begrijpen van deze grootschalige schommelingen is niet alleen een geologische nieuwsgierigheid, maar een onmisbaar instrument om de snelheid en ernst van de antropogene opwarming van de aarde te contextualiseren. Door zuurstofisotopen in mariene fossielen en luchtbellen in ijskernen te bestuderen, hebben paleoklimatologen de temperaturen uit het verleden van de aarde nauwkeurig gereconstrueerd."
  },
  {
    "type": "title",
    "text": "Temperatuurrecord per geologisch eon en tijdperk",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "De geschiedenis van de aarde is verdeeld in grote tijdsintervallen die worden gedefinieerd door biologische en geologische veranderingen. Hieronder is de lijst met geschatte gemiddelde temperaturen voor elk tijdperk dat beschikbaar is in deze tijdlijn:"
  },
  {
    "type": "table",
    "headers": [
      "Geologisch Tijdperk",
      "Leeftijd Aprox.",
      "Gemiddelde Temp.",
      "Klimatologische Mijlpalen en Kenmerken"
    ],
    "rows": [
      [
        "<strong>Archeicum</strong>",
        "4,0 tot 2,5 Ga",
        "30 °C",
        "Vroege hete aarde. Een zwakke jonge zon werd gecompenseerd door een extreem methaanrijk broeikaseffect."
      ],
      [
        "<strong>Proterozoicum</strong>",
        "2,5 Ga tot 541 Ma",
        "12 °C",
        "Stijging van vrije zuurstof; veroorzaakte de ineenstorting van methaan en ontketende globale ijstijden (\"Sneeuwbal Aarde\")."
      ],
      [
        "<strong>Paleozoicum</strong>",
        "541 tot 252 Ma",
        "20 °C",
        "Grote mariene biodiversiteit en landkolonisatie. Eindigde met vulkaanuitbarstingen en extreme opwarming."
      ],
      [
        "<strong>Mesozoicum</strong>",
        "252 tot 66 Ma",
        "22 °C",
        "De warme periode bij uitstek (superbroeikas zonder poolijs). Bloeitijd van de dinosauriers."
      ],
      [
        "<strong>Cenozoicum</strong>",
        "66 Ma tot vandaag",
        "14 °C",
        "Geleidelijke afkoeling aangedreven door continentale oceaanstromingen die leidden tot de ijstijdcycli van het Kwartair."
      ],
      [
        "<strong>Antropoceen</strong>",
        "Heden & toekomst",
        "15.2 °C",
        "Drastische en abnormale opwarming veroorzaakt door antropogene emissies van broeikasgassen."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Thermische extremen uit het verleden: van globale ijstijd tot mesozoische hitte",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "De geschiedenis van de planeet omvat extreme klimatologische gebeurtenissen. In het Proterozoicum liet primitieve fotosynthese op grote schaal zuurstof vrij, waardoor methaan in de atmosfeer werd geoxideerd en de planeet in de Huronian-ijstijd stortte - een van de periodes van \"Sneeuwbal Aarde\" waarin gletsjers de evenaar bereikten. In het tegenovergestelde uiterste, tijdens het Mesozoicum en het Paleoceen, verzadigde intense tectonische vulkanische activiteit de atmosfeer met CO2, waardoor de gemiddelde wereldwijde temperatuur tot 10 graden boven het huidige niveau steeg. In deze periodes ontbrak poolijs volledig, groeiden er gematigde bossen in arctische gebieden en domineerden koudbloedige reptielen zoals dinosauriers."
  },
  {
    "type": "title",
    "text": "Factoren die het klimaat op geologische schaal sturen",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Het klimaat op de lange termijn is het resultaat van een delicaat thermodynamisch evenwicht dat wordt gestuurd door verschillende onderling verbonden natuurlijke mechanismen:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Milankovitch-cycli:</strong> Kleine periodieke variaties in de excentriciteit, helling en precessie van de aarde veranderen de ontvangen zonnestraling.",
      "<strong>Silicaat-carbonaat-koolstofcyclus:</strong> De geochemische thermostaat op lange termijn. Regen verwijdert CO2 en zet het om in silicaten die in de oceanen worden afgezet.",
      "<strong>Platentektonik:</strong> Continentale drift verandert de oceaanstromingen en creert bergen die de chemische verwering van CO2 versnellen.",
      "<strong>Albedo-feedback:</strong> De aanwezigheid van sneeuw en ijs reflecteert zonlicht, waardoor de aarde in feedbackcycli nog verder afkoelt."
    ]
  },
  {
    "type": "title",
    "text": "Het Antropoceen: een ongekende thermische versnelling in de biosfeer",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "De overgang van het stabiele Holoceen naar het Antropoceen markeert het tijdperk van de directe impact van de mens op de systemen van de aarde. In tegenstelling tot eerdere thermische gebeurtenissen, waarvan de oorzaken zich over tienduizenden jaren uitstrekten, wordt de huidige opwarming aangedreven door de massale verbranding van fossiele koolstofreserves die zich over miljoenen jaren hebben opgehoopt. Het huidige tempo van de ophoping van broeikasgassen en de stijging van de gemiddelde wereldwijde temperatuur verloopt aanzienlijk sneller dan tijdens de Perm-Trias-massa-extinctie of het PETM, wat een ongekende uitdaging vormt voor het biologische aanpassingsvermogen."
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
