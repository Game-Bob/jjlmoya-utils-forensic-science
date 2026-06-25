import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-teste-presuntivo-sangue-forense';
const title = 'Simulador de Teste Presuntivo de Sangue Forense';
const description = 'Simule testes presuntivos de sangue usando os reagentes Kastle-Meyer e Luminol. Distinga sangue real de falsos positivos comuns.';

const howTo = [
  {
    "name": "Selecionar amostra",
    "text": "Escolha uma amostra do suporte para testar, podendo ser sangue ou um material de falso positivo."
  },
  {
    "name": "Escolher método de teste",
    "text": "Decida se deseja realizar o teste de mudança de cor Kastle-Meyer ou o teste de luminescência de Luminol."
  },
  {
    "name": "Aplicar reagentes",
    "text": "Adicione gotas do reagente Kastle-Meyer seguido de Peróxido de Hidrogénio, ou aplique o Luminol diretamente."
  },
  {
    "name": "Interpretar a reação",
    "text": "Observe as mudanças de cor ou o brilho azul no escuro para classificar a reação."
  }
];

const faq = [
  {
    "key": "faq-1",
    "question": "Porque é chamado de teste presuntivo?",
    "answer": "Os testes presuntivos são análises preliminares de triagem baseadas na atividade catalítica. São muito sensíveis, mas não totalmente específicos."
  },
  {
    "key": "faq-2",
    "question": "O que causa um falso positivo no teste Kastle-Meyer?",
    "answer": "O teste depende da atividade do heme. Oxidantes químicos, iões metálicos ou peroxidases vegetais também podem catalisar a reação."
  },
  {
    "key": "faq-3",
    "question": "Como ocorre a reação do Luminol?",
    "answer": "O luminol reage com peróxido de hidrogénio na presença do ferro da hemoglobina. O luminol excitado emmiti luz azul ao retornar ao estado fundamental."
  },
  {
    "key": "faq-4",
    "question": "A lixívia pode causar um falso positivo?",
    "answer": "Sim, o hipoclorito de sódio é um forte oxidante. Oxida diretamente a fenolftalina ou o luminol sem catalisador, com brilho muito curto."
  },
  {
    "key": "faq-5",
    "question": "Qual é la diferença entre teste presuntivo e de confirmação?",
    "answer": "Os testes presuntivos são rápidos e sensíveis para localizar manchas. Os testes confirmativos provam com total certeza a presença de sangue humano."
  }
];

const bibliography = [
  {
    "name": "Kastle-Meyer test - Wikipedia",
    "url": "https://en.wikipedia.org/wiki/Kastle%E2%80%93Meyer_test"
  },
  {
    "name": "Grodsky, M., Wright, K. & Kirk, P. L. (1951). Simplified preliminary blood testing. An improved technique and comparative study of methods. Journal of Criminal Law and Criminology.",
    "url": "https://scholarlycommons.law.northwestern.edu/jclc/vol42/iss1/10/"
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "title": "Simulador de Teste de Sangue",
  "desc": "Realize experiências virtuais de laboratório com reagentes de Luminol e Kastle-Meyer para detetar sangue.",
  "configTitle": "Controlos de Laboratório",
  "sampleLabel": "Selecionar Amostra",
  "reagentLabel": "Selecionar Reagente",
  "lightsLabel": "Iluminação",
  "btnLightsOff": "Desligar Luzes",
  "btnLightsOn": "Ligar Luzes",
  "btnReset": "Limpar Placa",
  "resultsTitle": "Resultados do Teste",
  "sampleBlood": "Amostra de Sangue (Controlo)",
  "sampleRust": "Ferrugem (Óxido de Ferro)",
  "sampleBleach": "Lixívia (Hipoclorito de Sódio)",
  "samplePotato": "Batata (Peroxidase Vegetal)",
  "sampleSaliva": "Amostra de Saliva",
  "reagentKM": "Reagente Kastle-Meyer",
  "reagentH2O2": "Peróxido de Hidrogénio (H2O2)",
  "reagentLuminol": "Solução de Luminol",
  "resultTruePositive": "Verdadeiro Positivo (Sangue Detetado)",
  "resultFalsePositive": "Falso Positivo (Catalisador Não-Sanguíneo)",
  "resultNegative": "Reação Negativa",
  "statusLabel": "Estado da Reação",
  "reactionLabel": "Explicação da Reação",
  "dropReagentBtn": "Aplicar Gota",
  "activeCompounds": "Compostos Ativos",
  "reactionSpeed": "Velocidade de Reação",
  "reactionDuration": "Duração da Reação",
  "specimenBase": "Base do Espécime",
  "kmPending": "Reagente Kastle-Meyer aplicado. Adicione Peróxido de Hidrogénio (H2O2) para catalisar a mudança de cor.",
  "h2o2Only": "Peróxido de hidrogénio aplicado. Sem reação visível sem indicador Kastle-Meyer.",
  "noReaction": "Nenhuma reação observada. A amostra permanece incolor.",
  "luminolBlood": "Brilho azul intenso observado imediatamente no escuro. O heme na hemoglobina oxidou cataliticamente o luminol. Verdadeiro Positivo.",
  "luminolBleach": "Brilho azul muito intenso observado imediatamente, que desapareceu em menos de 2 segundos. A lixívia oxida o luminol diretamente. Falso Positivo.",
  "luminolRust": "Brilho azul fraco observado. Os iões metálicos na ferrugem catalisam fracamente a oxidação. Falso Positivo.",
  "luminolPotato": "Nenhuma luminescência. As peroxidases da batata não catalisam a oxidação do luminol nestas condições. Negativo.",
  "luminolNegative": "Sem luminescência observada no escuro. O composto não é catalítico para a oxidação do luminol. Negativo.",
  "kmBlood": "Coloração rosa brilhante imediata ao adicionar Peróxido de Hidrogénio. O heme no sangue catalisou a oxidação da fenolftalina para fenolftaleína. Verdadeiro Positivo.",
  "kmBleach": "Mudança de cor rosa imediata. O hipoclorito de sódio oxida diretamente a fenolftalina sem necessidade de peróxido. Falso Positivo.",
  "kmRust": "Coloração rosa-acastanhada lenta e fraca após vários segundos. A ferrugem catalisa a reação muito mais lentamente. Falso Positivo.",
  "kmPotato": "Coloração rosa pálida tardia após um atraso. As peroxidases vegetais catalisam fracamente a reação. Falso Positivo.",
  "kmNegative": "Nenhuma mudança de cor observada. A solução permanece incolor. Negativo."
},
  seo: [
  {
    "type": "title",
    "text": "Guia Completo de Testes Presuntivos de Sangue na Forense",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Os testes presuntivos de sangue são métodos preliminares de triagem de elevada sensibilidade utilizados em cenários de crime para detetar vestígios de sangue oculto. Antes de realizar análises dispendiosas e demoradas de sequenciação de ADN, os peritos forenses confiam nestes testes rápidos para localizar fluidos biológicos em peças de vestuário, armas de crime e outras superfícies. Visto que estas análises detetam a atividade catalítica semelhante à peroxidase do grupo heme da hemoglobina, são de natureza presuntiva. Um resultado positivo sugere a presença de sangue, mas requer obrigatoriamente um test confirmatório secundário em laboratório para afastar a possibilidade de falsos positivos."
  },
  {
    "type": "title",
    "text": "Princípio de Funcionamento da Reação de Kastle-Meyer",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "O teste colorimétrico de Kastle-Meyer (KM) baseia-se na oxidação catalítica da fenolftalina, a forma reduzida e incolor da fenolftaleína. A ordem de aplicação dos reagentes é rigorosa: primeiro, aplica-se o indicador químico fenolftalina na amostra a testar. Caso exista sangue, o grupo heme da hemoglobina atua como um catalisador orgânico. Quando se adiciona o peróxido de hidrogénio, o heme acelera a quebra do peróxido, oxidando imediatamente a fenolftalina para fenolftaleína, o que produz uma coloração rosa brilhante. Uma mudança de cor tardia após quinze segundos é interpretada como reação negativa."
  },
  {
    "type": "title",
    "text": "Luminol e a Reação de Quimioluminescência Forense",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "O luminol é um composto químico que emite um brilho azul no escuro quando é oxidado na presença de um catalisador metálico. Os técnicos forenses pulverizam uma solução diluída de luminol sobre áreas amplas do local do crime. Ao entrar em contacto com vestígios de sangue, o ferro presente no heme da hemoglobina catalisa a reação química. Esta reação gera um ião aminoftalato excitado que liberta energia sob a forma de luz ao regressar ao estado fundamental. Devido à baixa intensidade da emissão luminosa, é necessário trabalhar em escuridão total para registar fotograficamente o brilho."
  },
  {
    "type": "table",
    "headers": [
      "Substância Testada",
      "Reação Kastle-Meyer",
      "Reação Luminol",
      "Classificação Diagnóstica"
    ],
    "rows": [
      [
        "Sangue Humano Controlo",
        "Coloração rosa brilhante imediata após H2O2.",
        "Brilho azul intenso e duradouro até 8s.",
        "Verdadeiro Positivo. O heme fornece a necessária atividade catalítica."
      ],
      [
        "Lixívia Doméstica",
        "Mudança de cor rosa antes de aplicar H2O2.",
        "Brilho muito forte mas que dura menos de 2s.",
        "Falso Positivo. O oxidante forte reage sem catalisador."
      ],
      [
        "Óxido de Ferro (Ferrugem)",
        "Coloração rosa-acastanhada lenta e fraca.",
        "Brilho azul fraco e difuso.",
        "Falso Positivo. Os iões de ferro livre catalisam com baixa eficiência."
      ],
      [
        "Batata (Peroxidase)",
        "Coloração rosa pálida com atraso.",
        "Sem qualquer luminescência visivel.",
        "Falso Positivo (KM) / Negativo (LUM)."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Diferenciação de Sangue Frente a Falsos Positivos Comuns",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "A exclusão de reações falsas positivas é uma etapa essencial na análise científica de vestígios criminais. Os produtos de limpeza com hipoclorito de sódio (lixívia) oxidam os reagentes diretamente, simulando sangue. Os peritos distinguem-nos analisando a dinâmica temporal da reação: a lixívia reage no teste KM sem adição de peróxido de hidrogénio e a sua emissão de luminol desaparece quase de imediato. Adicionalmente, as peroxidases de origem vegetal são destruídas pela aplicação de calor, enquanto a hemoglobina do sangue permanece estável."
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
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
