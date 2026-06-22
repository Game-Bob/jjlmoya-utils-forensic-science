import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperature-timeline';
const description = 'Explore the average temperature history of Earth across geologic eras from the early Archean to the modern Anthropocene.';
const title = 'Planet Average Temperature Timeline: Geologic Climate History';

const howTo = [
  {
    name: 'Select a geologic epoch',
    text: 'Click a notch on the vertical scale ruler or drag the planetary canvas to travel through geologic time.',
  },
  {
    name: 'Check global average temperature',
    text: 'Observe the monumental temperature readout and its deviation from today\'s baseline.',
  },
  {
    name: 'Watch the planetary canvas',
    text: 'Observe how the abstract earth expands, contracts, and changes colors to represent extreme heat or glacial ice.',
  },
];

const faq = [
  {
    "question": "Has Earth been warmer in the past than it is today?",
    "answer": "Yes, Earth has experienced climates considerably warmer than today. During the Mesozoic (the era of the dinosaurs) and the early Eocene, the planet was in a greenhouse state with no polar ice caps, and global average temperatures exceeded 22 degrees, about 7 to 8 degrees warmer than today's average. However, transitions to those periods occurred over timescales of millions of years, allowing for evolutionary adaptation."
  },
  {
    "question": "What caused the Snowball Earth phenomenon?",
    "answer": "Snowball Earth (global glaciation) occurred primarily during the Neoproterozoic (about 700 million years ago). It was triggered by an extreme reduction in greenhouse gases due to accelerated chemical weathering of silicate rocks following the breakup of the supercontinent Rodinia. Ice extended from the poles to the equator, reflecting solar radiation (albedo effect) and trapping the planet in a global freeze loop that was only broken after millions of years of volcanic CO2 accumulation."
  },
  {
    "question": "How does Earth regulate its temperature over the long term?",
    "answer": "Earth possesses a natural thermostat controlled by the geological carbon cycle, regulated mainly by plate tectonics and silicate weathering. When the planet warms, acid rain reacts more quickly with silicate rocks, drawing CO2 out of the atmosphere and depositing it on the ocean floor as carbonates, reducing the greenhouse effect. If the planet cools, weathering decreases but volcanic activity continues to release CO2, gradually warming the planet again."
  },
  {
    "question": "How does Anthropocene climate change differ from the geological past?",
    "answer": "The fundamental difference lies in the speed of change. While natural climate transitions in the geological past typically occurred over tens of thousands or millions of years (allowing margin for biological migration and evolution), Anthropocene warming is happening in a matter of decades. This rate of thermal variation is exponentially faster than almost any documented prior event, outpacing the adaptive capacity of the current biosphere and causing accelerated mass extinction."
  },
  {
    "question": "What was the Paleocene-Eocene Thermal Maximum (PETM)?",
    "answer": "The PETM was an extreme global warming event that occurred approximately 56 million years ago. It was caused by a rapid and massive injection of carbon into the atmosphere (possibly from the release of oceanic methane hydrates or North Atlantic volcanism), raising global temperatures by 5 to 8 degrees in a few thousand years. It is considered the best geological analogue for modern climate change, resulting in severe ocean acidification and mass extinctions of benthic organisms."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Earth Temperature Timeline',
    sub: 'Explore Earth\'s geologic climate epochs',
    ageLabel: 'Age:',
    tempLabel: 'Average Temperature:',
    selectPrompt: 'Select a geologic period on the interactive chart below to view climatic details.',
    epoch_archean_name: 'Archean Eon',
    epoch_archean_age: '4.0 to 2.5 billion years ago',
    epoch_archean_desc: 'Extremely hot earth with a methane and carbon dioxide rich atmosphere. Liquid oceans existed despite a faint young sun due to greenhouse effect.',
    epoch_proterozoic_name: 'Proterozoic Eon',
    epoch_proterozoic_age: '2.5 billion to 541 million years ago',
    epoch_proterozoic_desc: 'Rise of oxygen causes the Huronian glaciation, leading to one of the first Snowball Earth periods, followed by stabilization.',
    epoch_paleozoic_name: 'Paleozoic Era',
    epoch_paleozoic_age: '541 to 252 million years ago',
    epoch_paleozoic_desc: 'Explosion of life in oceans and migration to land. Ended with the Permian-Triassic extinction, the warmest phase of this era.',
    epoch_mesozoic_name: 'Mesozoic Era',
    epoch_mesozoic_age: '252 to 66 million years ago',
    epoch_mesozoic_desc: 'The age of dinosaurs. Greenhouse conditions prevailed worldwide with no polar ice caps, resulting in high ocean levels and warm climates.',
    epoch_cenozoic_name: 'Cenozoic Era',
    epoch_cenozoic_age: '66 million years ago to Present',
    epoch_cenozoic_desc: 'Gradual cooling trend culminating in the Quaternary glaciations (Ice Ages) and the modern Holocene epoch.',
    epoch_anthropocene_name: 'Anthropocene Epoch',
    epoch_anthropocene_age: 'Present Day and Future',
    epoch_anthropocene_desc: 'Rapid warming driven by greenhouse gas emissions, deviating from the long term natural cooling trend of the late Cenozoic.',
  },
  seo: [
  {
    "type": "title",
    "text": "HISTORICAL CLIMATOLOGY: The Thermal Evolution of Earth Through Geological Eras",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Earth's climate has never been static. Over its 4.5 billion years of existence, our planet has oscillated between two fundamental states: the greenhouse state and the icehouse state. Understanding these large-scale fluctuations is not just a geological curiosity, but an indispensable tool for contextualizing the speed and severity of anthropogenic global warming. By studying oxygen isotopes in marine fossils and air bubbles trapped in ice cores, paleoclimatologists have reconstructed a precise record of past Earth temperatures."
  },
  {
    "type": "title",
    "text": "Temperature Record by Geological Eon and Era",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Earth's history is divided into major time intervals defined by biological and geological changes. Below is the list of estimated average temperatures for each epoch available in this timeline:"
  },
  {
    "type": "table",
    "headers": [
      "Geological Epoch",
      "Approx. Age",
      "Average Temp.",
      "Climatological Hestones and Features"
    ],
    "rows": [
      [
        "<strong>Archean Eon</strong>",
        "4.0 to 2.5 Ga",
        "30 °C",
        "Early hot Earth. A faint young Sun was compensated by an extreme greenhouse effect rich in methane."
      ],
      [
        "<strong>Proterozoic Eon</strong>",
        "2.5 Ga to 541 Ma",
        "12 °C",
        "Rise of free oxygen; caused methane collapse and triggered global glaciations (\"Snowball Earth\")."
      ],
      [
        "<strong>Paleozoic Era</strong>",
        "541 to 252 Ma",
        "20 °C",
        "Great marine biodiversity and land colonization. Ended with volcanic eruptions and extreme warming."
      ],
      [
        "<strong>Mesozoic Era</strong>",
        "252 to 66 Ma",
        "22 °C",
        "The warm period par excellence (super-greenhouse with no polar ice). Dinosaur heyday."
      ],
      [
        "<strong>Cenozoic Era</strong>",
        "66 Ma to today",
        "14 °C",
        "Progressive cooling driven by continental ocean currents leading to Quaternary ice age cycles."
      ],
      [
        "<strong>Anthropocene</strong>",
        "Present & future",
        "15.2 °C",
        "Drastic and anomalous warming induced by anthropogenic emissions of greenhouse gases."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Past Thermal Extremes: From Global Glaciation to Mesozoic Heat",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Planetary history includes extreme climatic events. In the Proterozoic Eon, primitive photosynthesis released oxygen on a massive scale, oxidizing atmospheric methane and plunging the planet into the Huronian glaciation, one of the \"Snowball Earth\" periods where glaciers reached equatorial latitudes. At the opposite extreme, during the Mesozoic Era and the Paleocene, intense tectonic volcanic activity saturated the atmosphere with CO2, raising the average global temperature up to 10 degrees above current levels. These periods completely lacked polar ice, hosting temperate forests in Arctic latitudes and allowing the dominance of cold-blooded reptiles like dinosaurs."
  },
  {
    "type": "title",
    "text": "Factors Driving Planetary Climate on a Geological Scale",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Earth's long-term climate is the result of a delicate thermodynamic balance governed by several interconnected natural mechanisms:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Milankovitch Cycles:</strong> Small periodic variations in the planet's orbital eccentricity, tilt, and precession change the solar radiation received.",
      "<strong>Silicate-Carbonate Carbon Cycle:</strong> The long-term geochemical thermostat. Rain removes CO2, converting it into silicates deposited in the oceans.",
      "<strong>Plate Tectonics:</strong> Continental drift alters global marine currents and creates mountain ranges that accelerate chemical weathering of CO2.",
      "<strong>Albedo Feedback Effect:</strong> The presence of snow and ice reflects sunlight, cooling the planet further in feedback loops."
    ]
  },
  {
    "type": "title",
    "text": "The Anthropocene: An Unprecedented Thermal Acceleration in the Biosphere",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "The transition from the stable Holocene period to the Anthropocene marks the era of humanity's direct impact on planetary systems. Unlike past thermal events, whose orbital or volcanic causes operated over timescales of tens of thousands of years, current warming is driven by the massive burning of fossil carbon reserves accumulated over millions of years. The current rate of greenhouse gas accumulation and global average temperature increase is occurring significantly faster than during the Permian-Triassic extinction or the PETM, posing an unprecedented adaptive challenge for planetary biodiversity."
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
