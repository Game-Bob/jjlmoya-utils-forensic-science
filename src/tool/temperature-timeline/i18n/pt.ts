import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cronologia-temperatura-media-planeta';
const title = 'Cronologia da Temperatura Média do Planeta';
const description = 'Explore a história da temperatura média da Terra ao longo das eras geológicas.';

const howTo = [
  { name: 'Selecionar uma era', text: 'Clique em uma marca na escala temporal.' },
  { name: 'Verificar a temperatura', text: 'Leia a temperatura média global para o período selecionado.' },
  { name: 'Observar o planeta', text: 'Veja como a tela reage ao estado térmico da Terra.' },
];

const faq = [
  {
    question: 'A Terra já esteve mais quente no passado do que está hoje?',
    answer: 'Sim, a Terra já experimentou climas consideravelmente mais quentes. Durante o Mesozoico (era dos dinossauros) e o início do Eoceno, o planeta encontrava-se num estado de "estufa" (greenhouse) sem calotas polares, com temperaturas médias globais superiores a 22°C (7 a 8°C acima da média atual). Contudo, estas transições ocorreram em escalas de milhões de anos, permitindo a adaptação evolutiva.'
  },
  {
    question: 'O que causou o fenômeno da "Terra Bola de Neve"?',
    answer: 'Ocorreu principalmente durante o Neoproterozoico (há 700 milhões de anos). Foi desencadeado pela redução extrema de gases de efeito estufa, resultante do intemperismo químico acelerado das rochas de silicato após a fragmentação do supercontinente Rodinia. O gelo estendeu-se dos polos ao equador, aumentando o efeito albedo e prendendo o planeta num ciclo de congelamento global.'
  },
  {
    question: 'Como a Terra regula a sua temperatura a longo prazo?',
    answer: 'A Terra possui um termostato natural controlado pelo ciclo geoquímico do carbono, regulado pela tectónica de placas e pelo intemperismo dos silicatos. Quando o planeta aquece, a chuva reage mais rapidamente com rochas silicatadas, removendo CO2 da atmosfera e depositando-o no fundo oceânico como carbonatos, o que reduz o efeito estufa.'
  },
  {
    question: 'Em que difere a mudança climática do Antropoceno do passado geológico?',
    answer: 'A diferença fundamental reside na velocidade. Enquanto transições passadas levavam dezenas de milhares a milhões de anos, o aquecimento do Antropoceno ocorre em poucas décadas. Esta taxa de variação térmica supera a capacidade de adaptação da biosfera atual.'
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cronologia da Temperatura Terrestre',
    sub: 'Explore as eras climáticas geológicas da Terra',
    ageLabel: 'Idade:',
    tempLabel: 'Temperatura Média:',
    selectPrompt: 'Selecione um período geológico.',
    epoch_archean_name: 'Eon Arqueano',
    epoch_archean_age: '4,0 a 2,5 bilhões de anos atrás',
    epoch_archean_desc: 'Terra extremamente quente com atmosfera rica em metano.',
    epoch_proterozoic_name: 'Eon Proterozoico',
    epoch_proterozoic_age: '2,5 bilhões a 541 milhões de anos atrás',
    epoch_proterozoic_desc: 'Aumento do oxigênio causa a glaciação Huroniana.',
    epoch_paleozoic_name: 'Era Paleozoica',
    epoch_paleozoic_age: '541 a 252 milhões de anos atrás',
    epoch_paleozoic_desc: 'Explosão de vida marinha e colonização terrestre.',
    epoch_mesozoic_name: 'Era Mesozoica',
    epoch_mesozoic_age: '252 a 66 milhões de anos atrás',
    epoch_mesozoic_desc: 'A era dos dinossauros sob severo efeito estufa.',
    epoch_cenozoic_name: 'Era Cenozoica',
    epoch_cenozoic_age: '66 milhões de anos atrás ao presente',
    epoch_cenozoic_desc: 'Resfriamento gradual rumo às glaciações.',
    epoch_anthropocene_name: 'Época do Antropoceno',
    epoch_anthropocene_age: 'Presente e futuro',
    epoch_anthropocene_desc: 'Aquecimento acelerado por emissões antropogênicas.',
  },
  seo: [
    { type: 'title', text: 'CLIMATOLOGIA HISTÓRICA: A evolução térmica da Terra através das eras geológicas', level: 2 },
    { type: 'paragraph', html: 'O clima da Terra nunca foi estático. Ao longo de 4,5 bilhões de anos, o planeta oscilou entre estados de estufa (greenhouse) e glaciação (icehouse). Compreender estas flutuações é indispensável para contextualizar a gravidade do aquecimento global atual.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};