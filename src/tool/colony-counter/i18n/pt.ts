const howTo = [
    {
      name: 'Prepare a imagem da placa',
      text: 'Coloque a sua placa de Petri contra um fundo escuro ou utilize um transiluminador para que as colónias contrastem claramente.',
    },
    {
      name: 'Identifique os tipos de colónias',
      text: 'Utilize diferentes cores de marcador para agrupar as colónias por morfologia, cor ou tamanho.',
    },
    {
      name: 'Marque cada colónia',
      text: 'Clique em cada colónia visível. A ferramenta numera automaticamente cada clique para evitar repetições ou colónias esquecidas.',
    },
    {
      name: 'Calcule a concentração final',
      text: 'Insira o volume inoculado e o fator de diluição para obter o resultado final em UFC/ml ou UFC/g.',
    },
  ];
const faq = [
    {
      question: 'O que é a contagem de UFC?',
      answer: 'As Unidades Formadoras de Colónias (UFC) são uma medida que estima o número de bactérias ou células fúngicas viáveis numa amostra. Assume-se que cada colónia visível teve origem numa única célula ou grupo de células.',
    },
    {
      question: 'Por que é que um contador digital é melhor do que a contagem manual?',
      answer: 'A contagem digital evita o erro humano de "perder a conta" enquanto se marcam visualmente as colónias. A nossa ferramenta permite adicionalmente a diferenciação de tipos de colónias por cores, facilitando a análise de placas mistas.',
    },
    {
      question: 'Como se calculam as UFC por mililitro?',
      answer: 'O número de colónias contadas é multiplicado pelo inverso do fator de diluição. Por exemplo, se contar 30 colónias numa diluição 1:100, a amostra original contém 3000 UFC/ml.',
    },
    {
      question: 'Quando é que uma placa é considerada "incontável"?',
      answer: 'Na microbiologia padrão, se houver mais de 250-300 colónias, a placa é considerada demasiado cheia (Too Numerous To Count, TNTC) e os dados não são fiáveis devido à competição entre as colónias.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'contador-de-colonias';
const title = 'Contador de Colónias: Ferramenta Digital de Contagem de UFC para Placas de Petri';
const description = 'Ferramenta digital para contagem de colónias bacterianas em placas de Petri. Diferencie tipos, evite erros e calcule as UFC com precisão.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Clique para carregar a sua placa de Petri',
    uploadSubtitle: 'Carregue uma foto da sua placa e comece a contar as colónias',
    currentModeLabel: 'Modo Atual',
    typeA: 'Tipo A',
    typeB: 'Tipo B',
    colonyType: 'Tipo de Colónia',
    counting: 'Contagem',
    totalCFU: 'Total UFC',
    undo: 'Desfazer Último',
    clearAll: 'Limpar Tudo',
    infoClick: 'Clique na placa para marcar as colónias',
    infoChange: 'Altere o tipo antes de marcar',
    confirmClear: 'Tem a certeza de que deseja limpar todas as colónias marcadas?',
  },
  seo: [
    {
      type: 'title',
      text: 'Microbiologia Digital: Contagem Precisa de Colónias',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A contagem de colónias bacterianas em placas de Petri é uma técnica fundamental em microbiologia. Tradicionalmente realizada com um contador manual e um marcador, é fácil perder a conta ou marcar a mesma colónia duas vezes. Esta ferramenta digital elimina esses erros e permite a diferenciação visual entre tipos de colónias.',
    },
    {
      type: 'title',
      text: 'Por Que a Contagem de Colónias é Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O número de colónias numa placa é diretamente proporcional à concentração de microrganismos viáveis na amostra original. Estes dados são críticos em:',
    },
    {
      type: 'list',
      items: [
        '<strong>Controlo de Qualidade Alimentar:</strong> Deteção de contaminação bacteriana.',
        '<strong>Investigação Farmacêutica:</strong> Avaliação da eficácia de antibióticos.',
        '<strong>Diagnóstico Clínico:</strong> Quantificação de infeções em amostras de doentes.',
        '<strong>Biotecnologia:</strong> Otimização de culturas de produção para proteínas recombinantes.',
      ],
    },
    {
      type: 'title',
      text: 'Unidades Formadoras de Colónias (UFC)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Assume-se que cada colónia visível numa placa se origina de uma única célula viável. É por isso que são chamadas <strong>UFC</strong> (Unidades Formadoras de Colónias).',
    },
    {
      type: 'paragraph',
      html: '<strong>Fórmula da Concentração:</strong><br><code>UFC/mL = (Colónias Contadas × Fator de Diluição) / Volume Inoculado</code>',
    },
    {
      type: 'title',
      text: 'Boas Práticas para a Contagem',
      level: 3,
    },
    {
      type: 'title',
      text: 'Intervalo Contável',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'O intervalo ideal para a contagem manual é de <strong>30 a 300 colónias</strong> por placa. Abaixo de 30, o erro estatístico é demasiado elevado. Acima de 300, as colónias começam a fundir-se e a distinção individual torna-se impossível.',
    },
    {
      type: 'title',
      text: 'Tipos de Colónias',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Em meios seletivos ou diferenciais, é comum observar múltiplas morfologias de colónias:',
    },
    {
      type: 'list',
      items: [
        '<strong>Tipo A (Verde-azulado/Verde):</strong> Colónias grandes, mucoides, típicas de bactérias Gram-negativas fermentadoras de lactose.',
        '<strong>Tipo B (Rosa/Roxo):</strong> Colónias pequenas, translúcidas, não-fermentadoras.',
      ],
    },
    {
      type: 'paragraph',
      html: 'A nossa ferramenta permite a diferenciação de até dois tipos de colónias com cores distintas, facilitando a contagem diferencial sem a necessidade de marcadores físicos.',
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

