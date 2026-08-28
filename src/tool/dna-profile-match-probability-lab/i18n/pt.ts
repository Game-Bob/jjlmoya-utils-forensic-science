import { content as enContent } from './en';
import { createDnaLocale } from '../localize';

export const content = createDnaLocale({
  locale: 'pt',
  slug: 'laboratorio-probabilidade-correspondencia-perfil-dna',
  title: 'Laboratório de probabilidade de correspondência de perfis de DNA',
  description: 'Veja como as frequências alélicas e as regras de Hardy-Weinberg formam uma probabilidade educativa de correspondência aleatória de um perfil de DNA.',
  ui: {
    ...enContent.ui,
    controls: 'Controles do perfil', controlKicker: 'Construir um perfil', controlHelper: 'Comece com um preset educativo ou abra cada locus para editar os alelos e as frequências populacionais.', presets: 'Presets educativos', presetbalanced: 'Equilibrado', presethomozygote: 'Homozigotos', presetclassroom: 'Classe simples', loci: 'loci', locus: 'Locus', locusName: 'Nome do locus', alleleA: 'Alelo A', alleleB: 'Alelo B', frequencyA: 'Frequência A (%)', frequencyB: 'Frequência B (%)', removeLocus: 'Remover locus', addLocus: 'Adicionar locus', disclaimer: 'Simulador educativo. Não identifica pessoas, valida casos nem substitui um cálculo laboratorial.', sceneKicker: 'Traço do sinal', electropherogram: 'Traço do perfil', sceneNote: 'Dois picos mostram os dois alelos inseridos em cada locus. A altura é uma pista visual da frequência, não um sinal laboratorial.', peakHeight: 'A altura do pico acompanha a frequência', results: 'Resultados de probabilidade', resultKicker: 'Probabilidade de correspondência aleatória', locusBreakdown: 'Cálculo locus a locus', genotype: 'Genótipo', rule: 'Regra', frequency: 'Frequência do genótipo', badgeNeedsData: 'Dados necessários', badgeExploratory: 'Exploratório', badgeCalculated: 'Modelo calculado', needsData: 'Preencha cada locus com dois alelos e frequências entre 0 e 100%; a soma de cada par não pode ultrapassar 100%.', exploratoryResult: 'Este perfil pequeno ajuda a aprender o método. Mais loci podem torná-lo mais raro, mas não transformam o modelo numa conclusão de caso.', calculatedResult: 'O produto é calculado com as frequências inseridas e pressupostos simplificados de independência.', notCalculated: 'Não calculado', completeFields: 'Preencha os campos do perfil para ver um resultado.', ofRandomProfiles: 'de perfis aleatórios neste modelo educativo', missingValue: 'Locus sem nome', pattern: 'Padrão do perfil', calculation: 'Cálculo', meaning: 'Significado', homozygote: 'Dois alelos iguais', heterozygote: 'Dois alelos diferentes', independentLoci: 'Vários loci independentes', homozygoteMeaning: 'A frequência do alelo é multiplicada por si mesma.', heterozygoteMeaning: 'As duas frequências alélicas são multiplicadas e duplicadas.', independentLociMeaning: 'Cada locus contribui para a frequência combinada do perfil.',
  },
  seo: {
    calculatorTitle: 'Calculadora de probabilidade de correspondência de um perfil de DNA',
    intro: 'Este laboratório de probabilidade de perfis de DNA ajuda estudantes e leitores curiosos a explorar como um pequeno perfil STR autossômico se torna uma probabilidade num modelo simplificado de genética populacional. Insira dois alelos e as suas frequências para cada locus. A calculadora aplica a regra de Hardy-Weinberg e multiplica as frequências dos loci para mostrar uma correspondência aleatória educativa.',
    methodTitle: 'Como funciona a regra do genótipo',
    method: 'A interface mantém o raciocínio visível: o traço mostra os alelos inseridos, a tabela mostra cada frequência de genótipo e o resultado final aparece como um em uma potência de dez. Um homozigoto usa p² e um heterozigoto usa 2pq. Os presets usam valores sintéticos para ensino, não uma base populacional oficial.',
    populationTitle: 'Por que as frequências populacionais importam',
    population: 'As frequências alélicas são estimativas de bases de dados populacionais. A população de referência, a amostragem, o tamanho da base, o parentesco, a subestrutura e a validação influenciam a interpretação. Se as frequências descrevem a população relevante, o perfil é de fonte única e os loci são tratados como independentes, o produto estima a frequência entre pessoas aleatórias não aparentadas. Alterar um pressuposto altera a interpretação.',
    interpretation: 'O resultado é uma afirmação condicional baseada nos valores inseridos. O modelo não considera a seleção de uma pessoa, parentesco, perfis mistos ou o efeito de uma pesquisa numa base de dados. Por isso, um exemplo educativo deve ser lido com a população, o método e a incerteza apresentados.',
    application: 'Para praticar, escolha um preset, altere apenas um locus e observe a tabela e a probabilidade total. Assim fica claro que alelos raros podem mudar bastante a contribuição de um locus. Registre os valores, a fonte das frequências e o pressuposto de independência; a tela serve para ensino e não para uma opinião forense.',
    limitsTitle: 'Limites educativos',
    limits: 'Num caso real, também é preciso documentar a seleção da pessoa, a base de dados, os perfis mistos, a subestrutura e a interpretação especializada. Esta aplicação não analisa eletroferogramas, não corrige subestrutura, não calcula razões de verossimilhança e não pesquisa bases de DNA.',
    tipTitle: 'Use como modelo, não como veredito',
    tip: 'Uma probabilidade pequena de correspondência aleatória não é uma afirmação de identidade ou culpa. Use a ferramenta para explicar a aritmética e mantenha visíveis a fonte dos dados, a população, os pressupostos e a incerteza.',
    list: ['<strong>Uma população:</strong> Não misture frequências de bases incomparáveis.', '<strong>Pressupostos visíveis:</strong> O laboratório assume pessoas não aparentadas e independência simplificada entre loci.', '<strong>Separe probabilidade e identidade:</strong> Um perfil raro não prova origem nem culpa.', '<strong>Documente os dados:</strong> Um relatório formal precisa de fonte, método, incerteza e interpretação.'],
  },
  faq: [
    { question: 'O que significa a probabilidade de correspondência aleatória?', answer: 'É uma estimativa da probabilidade de uma pessoa não aparentada escolhida ao acaso ter o perfil inserido sob as frequências e pressupostos selecionados. Não é a probabilidade de culpa nem da origem de uma amostra.' },
    { question: 'Como se calcula a frequência de um genótipo?', answer: 'Para um homozigoto usa-se p². Para um heterozigoto usa-se 2pq; depois multiplicam-se as frequências dos loci.' },
    { question: 'Por que as frequências dos presets são sintéticas?', answer: 'São pequenos exemplos educativos. O trabalho forense precisa de uma base populacional validada, representativa e documentada.' },
    { question: 'A ferramenta compara duas pessoas?', answer: 'Não. Não recebe amostras, não compara perfis e não identifica ninguém; apenas explora um modelo matemático.' },
    { question: 'Por que uma probabilidade muito pequena não é um veredito?', answer: 'A interpretação depende da base, seleção, qualidade do perfil, pressupostos e avaliação profissional.' },
  ],
  howTo: [
    { name: 'Escolha um preset educativo', text: 'Comece pelo preset equilibrado, homozigoto ou de classe simples.' },
    { name: 'Edite um locus', text: 'Insira o nome, dois alelos e a frequência de cada alelo em percentagem.' },
    { name: 'Leia a regra do locus', text: 'A tabela mostra p² para homozigotos e 2pq para heterozigotos.' },
    { name: 'Interprete com cuidado', text: 'Trate o resultado como um modelo educativo e mantenha os pressupostos visíveis.' },
  ],
});
