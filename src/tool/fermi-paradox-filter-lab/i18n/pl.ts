const description =
  'Modeluj paradoks Fermiego za pomocą parametrów równania Drake\'a, filtrów ewolucyjnych, czasu życia sygnału i projekcji czasowej wykrywalnych cywilizacji Drogi Mlecznej.';
const slug = 'laboratorium-filtra-paradoksu-fermiego';
const title = 'Laboratorium Filtra Paradoksu Fermiego';

const howTo = [
  {
    name: 'Oszacuj pipeline Drake\'a',
    text: 'Przesuwaj suwaki formowania gwiazd, planet nadających się do zamieszkania, życia, inteligencji i technologii, aby określić, jak często Droga Mleczna tworzy wykrywalne cywilizacje.',
  },
  {
    name: 'Ustaw siłę filtra',
    text: 'Zwiększ filtr ewolucyjny, gdy chcesz, aby upadek, samozniszczenie, niestabilność ekologiczna lub wąskie gardła technologiczne szybciej eliminowały cywilizacje.',
  },
  {
    name: 'Porównaj czas życia z horyzontem',
    text: 'Używaj czasu życia sygnału i horyzontu projekcji razem. Krótki czas życia może wyciszyć galaktykę, nawet gdy cywilizacje rodzą się regularnie.',
  },
  {
    name: 'Odczytaj krzywą czasową',
    text: 'Wykres pokazuje wykrywalne cywilizacje w czasie, uwidaczniając koegzystencję i wymieranie zamiast sprowadzania paradoksu Fermiego do jednej liczby.',
  },
];

const faq = [
  {
    question: 'Co oblicza ten symulator paradoksu Fermiego?',
    answer: 'Łączy wyrażenia równania Drake\'a z filtrem przetrwania i horyzontem czasowym, aby oszacować, ile technologicznych cywilizacji może być jednocześnie wykrywalnych w Drodze Mlecznej.',
  },
  {
    question: 'Czy to jest prognoza rzeczywistych obcych cywilizacji?',
    answer: 'Nie. To model eksploracyjny. Wartością jest obserwowanie, jak założenia współdziałają: galaktyka może wytworzyć wiele cywilizacji na przestrzeni dziejów, a jednocześnie mieć bardzo niewiele takich, które pokrywają się z naszą.',
  },
  {
    question: 'Czym jest Wielki Filtr?',
    answer: 'Wielki Filtr to koncepcja, według której jeden lub więcej etapów między prostą chemią a długowieczną cywilizacją technologiczną jest niezwykle mało prawdopodobnych lub niebezpiecznych.',
  },
  {
    question: 'Dlaczego czas życia sygnału ma aż takie znaczenie?',
    answer: 'Wykrywalność zależy od nakładania się. Cywilizacja, która nadaje sygnał zaledwie przez kilka stuleci, może być realna, ale niewidoczna dla innej cywilizacji obserwującej w innej epoce.',
  },
  {
    question: 'Jak wybierać frakcje życia i inteligencji?',
    answer: 'Używaj niskich wartości dla pesymistycznego scenariusza rzadkiego życia, a wyższych, gdy badasz możliwość, że biologia lub inteligencja pojawia się często na stabilnych światach nadających się do zamieszkania.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Prognozowane wykrywalne cywilizacje w czasie',
    metricsLabel: 'Metryki modelu Fermiego',
    controlsLabel: 'Sterowanie modelem Fermiego',
    birthRate: 'Wskaźnik narodzin',
    peakCivilizations: 'Szczytowa liczba cywilizacji',
    finalCivilizations: 'Końcowa liczba cywilizacji',
    silenceScore: 'Wskaźnik ciszy',
    starFormationRate: 'Tempo formowania gwiazd',
    habitableFraction: 'Frakcja planet nadających się do zamieszkania',
    lifeFraction: 'Frakcja powstania życia',
    intelligenceFraction: 'Frakcja inteligencji',
    technologyFraction: 'Frakcja technologii',
    signalLifetime: 'Czas życia sygnału',
    filterSeverity: 'Siła filtra',
    horizonYears: 'Horyzont projekcji',
    maxLabel: 'maks',
    yearUnit: 'r',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: 'Praktyczny symulator paradoksu Fermiego dla założeń równania Drake\'a',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Paradoks Fermiego pyta, dlaczego nocne niebo wydaje się ciche, skoro Droga Mleczna zawiera setki miliardów gwiazd i wiele planet. To narzędzie zamienia to pytanie w interaktywny model, łącząc równanie Drake\'a z filtrami ewolucyjnymi i projekcją czasową wykrywalnych cywilizacji.',
    },
    {
      type: 'paragraph',
      html: 'Zamiast podawać pojedyncze statyczne oszacowanie, symulator pokazuje, jak cywilizacje mogą się rodzić, stawać się wykrywalne i znikać, zanim inne społeczeństwo będzie miało szansę je usłyszeć. Ten problem synchronizacji jest kluczowy dla SETI, ponieważ dwie kultury technologiczne muszą nakładać się na siebie w przestrzeni, czasie i zachowaniu sygnału.',
    },
    {
      type: 'title',
      text: 'Jak model wykorzystuje parametry równania Drake\'a',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pierwsze elementy sterowania reprezentują uproszczony pipeline Drake\'a. Formowanie gwiazd dostarcza nowe układy gwiezdne. Część tych układów tworzy planety nadające się do zamieszkania, na części z nich powstaje życie, na części żywych światów rozwija się inteligencja, a część inteligentnych gatunków staje się wykrywalna dzięki technologii.',
    },
    {
      type: 'table',
      headers: ['Sterowanie', 'Znaczenie', 'Efekt'],
      rows: [
        ['Tempo formowania gwiazd', 'Nowe gwiazdy rocznie w Drodze Mlecznej', 'Zwiększa lub zmniejsza surową podaż możliwych układów'],
        ['Frakcja planet nadających się do zamieszkania', 'Udział układów ze stabilnymi światami, gdzie może utrzymać się chemia ciekłej wody', 'Kontroluje, jaka część galaktyki wchodzi do biologicznego pipeline\'u'],
        ['Frakcja powstania życia', 'Prawdopodobieństwo, że proste życie zacznie się na nadającym się do zamieszkania świecie', 'Testuje założenia rzadkiego życia w porównaniu z powszechnym'],
        ['Frakcja inteligencji', 'Prawdopodobieństwo, że życie wyewoluuje zdolności poznawcze umożliwiające technologię', 'Reprezentuje biologiczne i ekologiczne wąskie gardła'],
        ['Frakcja technologii', 'Prawdopodobieństwo, że inteligencja wytworzy wykrywalne sygnały', 'Uwzględnia wybory kulturowe, inżynieryjne i komunikacyjne'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego filtry mogą sprawić, że zatłoczona galaktyka będzie wyglądać na pustą',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Suwak siły filtra kompresuje wiele potencjalnych punktów awarii w jedną presję przetrwania: uderzenia asteroid, niestabilny klimat, samozniszczenie, załamanie zasobów, ryzyko związane ze sztuczną inteligencją lub inne wąskie gardła skracające fazę wykrywalności. Silny filtr nie oznacza, że cywilizacje nigdy nie powstają. Oznacza, że rzadko pozostają widoczne na długo.',
    },
    {
      type: 'paragraph',
      html: 'To rozróżnienie ma znaczenie. Droga Mleczna mogła wytworzyć tysiące technologicznych gatunków w ciągu głębokiego czasu, nie pozostawiając prawie żadnych aktywnych sąsiadów w naszym własnym wąskim oknie nasłuchu. Wykres uwidacznia tę różnicę, wykreślając wykrywalne cywilizacje w wybranym horyzoncie projekcji.',
    },
    {
      type: 'title',
      text: 'Interpretacja wskaźnika ciszy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wskaźnik ciszy rośnie, gdy końcowa liczba nakładających się wykrywalnych cywilizacji jest niska. Wysoka cisza nie dowodzi, że ludzie są sami; pokazuje, że wybrane założenia sprawiają, iż brak detekcji nie jest zaskakujący. Niska cisza oznacza, że model oczekuje głośniejszej galaktyki, więc brak dowodów staje się bardziej interesujący.',
    },
    {
      type: 'list',
      items: [
        '<strong>Wysoki wskaźnik narodzin plus niski filtr:</strong> zatłoczona galaktyka, w której ciszę SETI trudniej wyjaśnić.',
        '<strong>Wysoki wskaźnik narodzin plus wysoki filtr:</strong> pojawia się wiele cywilizacji, ale niewiele przetrwa wystarczająco długo, by się nakładać.',
        '<strong>Niskie frakcje biologiczne:</strong> życie lub inteligencja są rzadkie, więc cisza może wystąpić, zanim technologia w ogóle zacznie mieć znaczenie.',
        '<strong>Krótki czas życia sygnału:</strong> cywilizacje mogą istnieć, ale nadawać zbyt krótko, aby kontakt był prawdopodobny.',
      ],
    },
    {
      type: 'title',
      text: 'Zastosowania w nauczaniu, debacie i intuicji SETI',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Laboratorium Filtra Paradoksu Fermiego jest przydatne na lekcjach astronomii, w dyskusjach astrobiologicznych, popularyzacji nauki i filozoficznych debatach o przyszłości ludzkości. Pomaga rozdzielić trzy pytania, które często są ze sobą mieszane: jak często rodzą się cywilizacje, jak długo pozostają wykrywalne i czy ich osie czasu pokrywają się z naszą.',
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
