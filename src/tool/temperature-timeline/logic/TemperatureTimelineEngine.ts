export interface GeologicEpoch {
  id: string;
  name: string;
  ageRange: string;
  avgTemp: number;
  description: string;
}

export class TemperatureTimelineEngine {
  private epochs: GeologicEpoch[] = [
    {
      id: 'archean',
      name: 'Archean Eon',
      ageRange: '4.0 to 2.5 billion years ago',
      avgTemp: 30,
      description: 'Extremely hot earth with a methane and carbon dioxide rich atmosphere. Liquid oceans existed despite a faint young sun due to greenhouse effect.',
    },
    {
      id: 'proterozoic',
      name: 'Proterozoic Eon',
      ageRange: '2.5 billion to 541 million years ago',
      avgTemp: 12,
      description: 'Rise of oxygen causes the Huronian glaciation, leading to one of the first Snowball Earth periods, followed by stabilization.',
    },
    {
      id: 'paleozoic',
      name: 'Paleozoic Era',
      ageRange: '541 to 252 million years ago',
      avgTemp: 20,
      description: 'Explosion of life in oceans and migration to land. Ended with the Permian-Triassic extinction, the warmest phase of this era.',
    },
    {
      id: 'mesozoic',
      name: 'Mesozoic Era',
      ageRange: '252 to 66 million years ago',
      avgTemp: 22,
      description: 'The age of dinosaurs. Greenhouse conditions prevailed worldwide with no polar ice caps, resulting in high ocean levels and warm climates.',
    },
    {
      id: 'cenozoic',
      name: 'Cenozoic Era',
      ageRange: '66 million years ago to Present',
      avgTemp: 14,
      description: 'Gradual cooling trend culminating in the Quaternary glaciations (Ice Ages) and the modern Holocene epoch.',
    },
    {
      id: 'anthropocene',
      name: 'Anthropocene Epoch',
      ageRange: 'Present Day and Future',
      avgTemp: 15.2,
      description: 'Rapid warming driven by greenhouse gas emissions, deviating from the long term natural cooling trend of the late Cenozoic.',
    },
  ];

  public getEpochs(): GeologicEpoch[] {
    return this.epochs;
  }
}
