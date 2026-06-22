const slug = 'calculadora-renovacao-celular';
const description = 'Calcule a percentagem do seu corpo que se renovou desde o nascimento. Estimativas baseadas na taxa de divisão celular de órgãos, ossos e tecidos. O Paradoxo de Teseu tornado tangível.';
const title = 'Calculadora de Renovação Celular: Quanto Resta do "Tu" Original?';
const howTo = [
    {
      name: 'Ajuste a sua idade',
      text: 'Deslize o seletor de 1 a 105 anos. Esta é a variável mais importante para os cálculos de renovação.',
    },
    {
      name: 'Observe a percentagem principal',
      text: 'O número grande no centro mostra qual a percentagem da sua matéria atual que é "nova" (renovada desde o nascimento).',
    },
    {
      name: 'Analise as barras de progresso',
      text: 'Cada barra representa um tecido diferente: pele/sangue, osso, órgãos e cérebro. Note como o cérebro quase não muda enquanto a pele se renova constantemente.',
    },
    {
      name: 'Reflita sobre a sua identidade',
      text: 'Se 99% de si é matéria nova, quem é você realmente? Use esta ferramenta como ponto de partida para reflexões sobre a continuidade pessoal e o Paradoxo de Teseu.',
    },
  ];
const faq = [
    {
      question: 'O que é exatamente a "renovação celular"?',
      answer: 'É o processo natural pelo qual as células envelhecidas ou danificadas morrem (apoptose) e são substituídas por novas células geradas por divisão mitótica. Este ciclo é essencial para manter os tecidos funcionais e reparar danos.',
    },
    {
      question: 'Por que é que o cérebro se renova tão lentamente?',
      answer: 'Os neurónios no córtex cerebral são gerados antes do nascimento e geralmente não se dividem mais. Isto proporciona estabilidade neurológica: a sua "cablagem" fundamental permanece constante. No entanto, as células gliais (suporte) renovam-se. A memória é armazenada em ligações, não em átomos.',
    },
    {
      question: 'É verdade que a cada 7 anos somos "pessoas novas"?',
      answer: 'É uma simplificação e não é exata. O seu sangue renova-se em 4 meses, a sua pele num mês, o seu esqueleto em 10 anos. O seu cérebro permanece praticamente inalterado. O número de 7 anos é histórico (Aristóteles mencionou-o), mas biologicamente é uma média imprecisa.',
    },
    {
      question: 'Se o meu corpo é 99% novo, continuo a ser a mesma pessoa?',
      answer: 'Sim. A identidade é uma continuidade de informação, consciência e memória, não de átomos. Você é como um rio: a água muda constantemente, mas o rio persiste. O Paradoxo de Teseu sugere que a identidade reside no padrão, não na matéria.',
    },
    {
      question: 'Quais os tecidos que se renovam mais rapidamente?',
      answer: 'O sangue e a pele lideram o caminho. A sua medula óssea produz 200 mil milhões de células sanguíneas diariamente. Perde cerca de 30.000 células da pele por minuto. É por isso que cicatrizam tão bem e envelhecem tão visivelmente: são jovens em termos de idade celular.',
    },
    {
      question: 'O cristalino do olho realmente não se renova?',
      answer: 'Correto. As células do cristalino são depositadas durante o desenvolvimento embrionário e são mantidas para a vida toda. Aos 100 anos, as células centrais do seu cristalino podem ser as mesmas de quando estava no útero. É uma cápsula do tempo biológica.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copiado',
    noHistory: 'Sem histórico',
    load: 'Carregar',
    delete: 'Apagar',
    biologicalTimeline: 'Linha do Tempo Biológica',
    ageUnit: 'anos de evolução',
    matterNewPercent: 'A sua matéria é nova em',
    atomicRenewal: 'Renovação Atómica',
    skinAndBlood: 'Pele e Sangue',
    boneRemodeling: 'Remodelação Óssea',
    organicMatrix: 'Matriz Orgânica',
    perennialCells: 'Células Perenes',
    disclaimerText: 'Os cálculos baseiam-se na vida média celular de acordo com estudos isotópicos. Embora o sangue e a pele se renovem em semanas, as proteínas do cristalino e grande parte do seu córtex cerebral permanecem desde o desenvolvimento embrionário. Fisicamente, você é uma estrutura dinâmica em fluxo constante.',
  },
  seo: [
    {
      type: 'title',
      text: 'Quanto de ti é realmente "teu"? A ciência da renovação celular',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O seu corpo é um rio em constante movimento. A cada segundo, milhões de células morrem e são substituídas por novas. Em sete anos, praticamente todos os átomos do seu corpo terão sido substituídos. No entanto, esta estatística é profundamente enganadora, porque diferentes partes do seu organismo renovam-se a ritmos radicalmente diferentes.',
    },
    {
      type: 'paragraph',
      html: 'Este paradoxo, conhecido como o <strong>Paradoxo do Navio de Teseu</strong>, coloca uma questão antiga: se substituirmos todas as partes de algo, continua a ser a mesma coisa? No seu caso, é uma questão literal. Os átomos que compõem o seu corpo hoje não são os mesmos que lá estavam há 10 anos, mas <em>você</em> continua a ser você.',
    },
    {
      type: 'title',
      text: 'Rotatividade Celular: Um Mapa do Seu Corpo Dinâmico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A velocidade de renovação varia dramaticamente por tecido:',
    },
    {
      type: 'table',
      headers: ['Tecido', 'Vida Média Celular', 'Renovação Total', 'Descrição'],
      rows: [
        ['<strong>Sangue</strong>', '120 dias', '4 meses', 'Os glóbulos vermelhos são os mais rápidos. A sua medula óssea produz 200 mil milhões diariamente.'],
        ['<strong>Pele</strong>', '2-4 semanas', '1 mês', 'Renovação extremamente rápida. Perde cerca de 30.000 células da pele por minuto.'],
        ['<strong>Osso</strong>', '10 anos', 'Uma década', 'O esqueleto é mais conservador. Ainda assim, após 10 anos, terá substituído praticamente todo o seu esqueleto.'],
        ['<strong>Órgãos</strong>', '15 anos', '1,5 décadas', 'O fígado renova-se em meses. O coração, em anos. Um mosaico de ritmos.'],
        ['<strong>Cérebro</strong>', '80+ anos (neurónios)', 'Quase nunca', 'Os seus neurónios corticais datam do nascimento. Mas a glia (células de suporte) renova-se.'],
      ],
    },
    {
      type: 'title',
      text: 'O Cristalino: A Parte Mais Antiga de Si',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existe uma estrutura no seu corpo que é especial: o <strong>cristalino</strong> do olho. As células que compõem o cristalino são depositadas durante o desenvolvimento fetal e nunca são substituídas. Se viver até aos 100 anos, as células centrais do seu cristalino continuarão a ser as mesmas que tinha no útero materno. São, literalmente, a parte mais antiga de si.',
    },
    {
      type: 'title',
      text: 'Cálculo de Renovação Total: O Paradoxo dos Pesos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora utiliza uma média ponderada de diferentes tecidos:',
    },
    {
      type: 'list',
      items: [
        '<strong>30% pele e sangue:</strong> Renovação quase completa nos anos mais jovens.',
        '<strong>35% esqueleto:</strong> Renovação progressiva, atingindo os 100% aos 10 anos.',
        '<strong>25% órgãos:</strong> Renovação mais lenta, variável por órgão.',
        '<strong>10% cérebro:</strong> Mudança mínima nos neurónios, máxima nas estruturas de suporte.',
      ],
    },
    {
      type: 'paragraph',
      html: 'O resultado é que aos 25 anos, aproximadamente <strong>93% da sua matéria atual é nova</strong>. Aos 80 anos, poderá ser composto por mais de 99% de átomos diferentes daqueles que tinha ao nascer.',
    },
    {
      type: 'title',
      text: 'Implicações Filosóficas: Identidade é Informação, Não Matéria',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se o seu corpo é completamente novo a cada década, por que é que é "você"? A resposta é que a identidade reside não em átomos específicos, mas no <strong>padrão de informação</strong> que esses átomos detêm. Você é como uma música: não é o mesmo ar a vibrar, mas o padrão persiste.',
    },
    {
      type: 'paragraph',
      html: 'Isto tem implicações profundas: o seu corpo é um processo, não uma coisa. Você é um padrão auto-organizado que persiste através da mudança. Não possui átomos; é uma estrutura que os canaliza temporariamente.',
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

