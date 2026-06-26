import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-odleglosci-strzalu-rozrzut-gsr';
const title = 'Kalkulator Odległości Strzału na Podstawie GSR';
const description = 'Symuluj edukacyjne wzory rozrzutu powypałowych pozostałości strzałowych (GSR) na powierzchni celu w zależności od odległości oddania strzału, rodzaju amunicji i efektów termicznych.';

const howTo = [
  {
    name: 'Ustaw odległość strzału',
    text: 'Przesuń suwak odległości od strzału bezpośredniego do trzech metrów i zaobserwuj, jak osad zmienia się ze zwartej, przypalonej strefy w szerokie, luźne pole cząstek.',
  },
  {
    name: 'Wybierz profil amunicji',
    text: 'Wybierz profil pistoletu 9 mm, rewolweru .38 lub strzelby kaliber 12. Każdy profil zmienia liczbę cząstek, współczynnik rozrzutu i szacowany zasięg termiczny.',
  },
  {
    name: 'Przeanalizuj cel i stożek rozrzutu',
    text: 'Użyj podglądu tkaniny celu, aby ocenić gęstość cząstek i rozkład radialny, oraz stożka bocznego, aby zrozumieć fizyczną ekspansję chmury pozostałości strzałowych.',
  },
  {
    name: 'Zinterpretuj kategorię odległości',
    text: 'Zapoznaj się z uzyskaną klasyfikacją i typowymi ustaleniami. Wynik opisuje dydaktyczne znaczenie strzałów z przyłożenia, bliskiego kontaktu, bliskiego zasięgu i strzałów dalekich.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Czy rozrzut powypałowych pozostałości strzałowych może wskazać dokładną odległość strzału?',
    answer: 'Nie. Wzory rozrzutu GSR pozwalają na oszacowanie przedziału odległości, a nie dokładnej wartości. Rzeczywiste ustalenia wymagają zbadania konkretnej broni, amunicji, materiału celu, kąta uderzenia oraz oddania próbnych strzałów porównawczych w kontrolowanych warunkach.',
  },
  {
    key: 'faq-2',
    question: 'Dlaczego strzały z bliska wykazują więcej sadzy i oparzeń?',
    answer: 'Przy bardzo małych odległościach gorące gazy, sadza, niespalone ziarna prochu i metaliczne cząstki spłonki docierają do celu, zanim chmura gazów ulegnie rozproszeniu i ochłodzeniu, co powoduje osmalenie, przypalenie i rozerwanie tkaniny.',
  },
  {
    key: 'faq-3',
    question: 'Jakie pierwiastki chemiczne są powiązane z pozostałościami strzałowymi spłonki?',
    answer: 'Klasyczna analiza GSR koncentruje się na cząstkach zawierających ołów, bar i antymon. Choć nowoczesna amunicja bezołowiowa może modyfikować ten profil, analizy SEM-EDS oceniają morfologię i skład chemiczny cząstek łącznie.',
  },
  {
    key: 'faq-4',
    question: 'Dlaczego symulator wykorzystuje gaussowski model rozkładu radialnego?',
    answer: 'Rozkład Gaussa jest użytecznym przybliżeniem dydaktycznym, ponieważ większość cząstek koncentruje się w pobliżu centrum uderzenia. W rzeczywistości wiatr, kąt uderzenia, konstrukcja broni lub struktura tkaniny mogą powodować asymetrie.',
  },
  {
    key: 'faq-5',
    question: 'Czy ten kalkulator nadaje się do opracowywania ekspertyz sądowych?',
    answer: 'Nie. Jest to model edukacyjny. Oficjalna opinia kryminalistyczna musi opierać się na walidowanych procedurach laboratoryjnych, kontroli jakości, fizycznych strzałach porównawczych i ocenie biegłego sądowego.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Odległość strzału',
    units: 'Układ jednostek',
    metric: 'Metryczny',
    imperial: 'Imperialny',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Profil amunicji',
    ammoPistol9mm: 'Pistolet 9 mm',
    ammoRevolver38: 'Rewolwer .38',
    ammoShotgun12: 'Strzelba kaliber 12',
    target: 'Tkanina celu',
    cone: 'Chmura pozostałości',
    canvasAria: 'Rozrzut cząstek powypałowych pozostałości strzałowych na tkaninie celu',
    rangeStripAria: 'Kategorie odległości',
    category: 'Interpretacja odległości',
    categoryContactLabel: 'Strzał z przyłożenia / bezpośredni kontakt',
    categoryNearContactLabel: 'Bliski kontakt / strefa oparzenia',
    categoryCloseRangeLabel: 'Bliski zasięg / strefa tatuażu prochowego',
    categoryDistantLabel: 'Strzał daleki lub nieokreślona odległość',
    density: 'Gęstość cząstek',
    thermal: 'Efekt termiczny',
    radius: 'Szacowany promień wzoru',
    radiusSuffix: 'promień',
    expected: 'Oczekiwany wynik',
    expectedContact: 'W strefie celu oczekiwany jest gęsty osad centralny, ryzyko odbicia wylotu lufy, osmalenie sadzą, rozerwanie tkaniny oraz zmiany termiczne.',
    expectedNearContact: 'Obfita sadza i drobiny prochu pozostają skoncentrowane wokół otworu wlotowego, z widoczną, lecz zwartą aureolą radialną.',
    expectedCloseRange: 'Tatuaż prochowy i pozostałości metaliczne rozszerzają się w mierzalny pierścień; efekty termiczne i sadza stają się minimalne.',
    expectedDistant: 'Cząstki są nieliczne i szeroko rozproszone. Określenie odległości wymaga analiz chemicznych, mikroskopii i strzałów porównawczych.',
    contact: 'Przyłożenie',
    near: 'Bliski kontakt',
    close: 'Bliski zasięg',
    distant: 'Strzał daleki',
    disclaimer: 'Wyłącznie model edukacyjny. Ustalanie odległości strzału na podstawie GSR wymaga kontrolowanych strzałów próbnych, porównania materiałów celu i walidowanych metod chemicznych.',
  },
  seo: [
    {
      type: 'title',
      text: 'Określanie Odległości Strzału na Podstawie Wzorów Rozrzutu GSR',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Model edukacyjny',
      title: 'Co wyjaśnia ten kalkulator',
      html: 'Ten kalkulator rozrzutu GSR ilustruje, czy wzór pozostałości przypomina strzał z przyłożenia, bliskiego kontaktu, bliskiego zasięgu czy strzał daleki. Służy do nauki zasad <strong>określania odległości strzału</strong> za pomocą GSR, a nie do wydawania ekspertyz.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'symulowana odległość strzału', icon: 'mdi:ruler' },
        { value: '4', label: 'wyjaśnione kategorie odległości', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'porównane profile amunicji', icon: 'mdi:ammunition' },
        { value: '2', label: 'układy jednostek: metryczny i imperialny', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'Jak Czytać Symulowany Wzór Rozrzutu',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Szybka lista interpretacyjna',
      items: [
        'Gęsta sadza centralna, oparzenia, rozerwania lub odbicie wylotu lufy wskazują na strzał z przyłożenia lub bliskiego kontaktu.',
        'Zwarte, ciemne centrum otoczone drobinami prochu sugeruje bardzo małą odległość, wymagającą strzałów próbnych do doprecyzowania.',
        'Rozproszony tatuaż prochowy przy minimalnej ilości sadzy jest typowy dla strzałów z bliskiego zasięgu, poza zasięgiem płomienia.',
        'Brak widocznych pozostałości na odległość nie wyklucza obecności GSR; mikroskopia lub analizy chemiczne mogą wciąż wykryć cząstki.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'W czym pomaga narzędzie',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Wizualizuje relację między odległością strzału, gęstością pozostałości, rozrzutem cząstek i efektami termicznymi.',
          points: ['Pokazy akademickie', 'Objaśnienia techniczne', 'Terminologia kryminalistyczna', 'Porównanie jednostek'],
        },
        {
          title: 'Czego nie może udowodnić',
          icon: 'mdi:alert-circle-outline',
          description: 'Nie pozwala na wyznaczenie rzeczywistej odległości strzału w konkretnej sprawie bez badania fizycznych dowodów.',
          points: ['Brak przesyłania próbek', 'Brak potwierdzenia chemicznego', 'Brak strzałów próbnych z danej broni', 'Brak mocy dowodowej'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Częste pytanie', 'Kluczowa wskazówka we wzorze', 'Odpowiedź techniczna'],
      rows: [
        ['Jak wygląda strzał z przyłożenia?', 'Obfita sadza, przypalenie, rozerwanie tkaniny lub odbicie wylotu lufy.', 'Interpretacja strzału z przyłożenia jest prawdopodobna, lecz gazy powypałowe i elastyczność celu mogą zmienić wygląd.'],
        ['Z jakiej odległości padł strzał?', 'Skoncentrowane pozostałości wokół otworu z ciasną otoczką prochową.', 'Wzór wspiera hipotezę o przedziale odległości, lecz konieczne jest porównanie ze strzałami próbnymi.'],
        ['Co to jest tatuaż prochowy?', 'Kropkowane ślady spowodowane uderzeniem niespalonych drobin prochu z małą ilością sadzy.', 'Jego rozrzut różni się w zależności od amunicji, rodzaju tkaniny, kąta i przeszkód pośrednich.'],
        ['Czy pozostałości znikają przy strzałach z daleka?', 'Bardzo nieliczne cząstki i brak widocznego osadu makroskopowego.', 'Ślady widoczne zanikają, lecz cząstki spłonki mogą być wciąż wykrywane metodami laboratoryjnymi.'],
      ],
    },
    {
      type: 'title',
      text: 'Naukowe Podstawy Modelu Symulacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Symulator wykorzystuje radialny rozkład Gaussa do precyzyjnego i realistycznego rozmieszczania cząstek wokół punktu uderzenia pocisku w płaszczyznę celu. Krótkie odległości strzału tworzą bardzo wąskie, zwarte i wysoce gęste skupiska pozostałości powypałowych w strefie centralnej; większe odległości znacząco zwiększają radialny rozrzut cząstek w przestrzeni oraz obniżają średnią gęstość pozostałości przypadającą na jednostkę powierzchni celu. Model matematyczny w sposób szczególny oddziela osad sadzy i drobnego pyłu od cięższych metalicznych cząstek pochodzących ze spłonki, ponieważ osmalenie termiczne oraz działanie płomienia charakteryzują się znacznie mniejszym fizycznym zasięgiem niż mikrocząstki wykrywane metodami chemicznymi i mikroskopowymi.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Powypałowe pozostałości strzałowe (Gunshot Residue): cząstki powstałe ze spłonki, prochu, pocisku i gorących gazów podczas strzału.' },
        { term: 'Osmalenie', definition: 'Ciemny osad bogaty w węgiel (sadza), widoczny głównie przy strzałach z przyłożenia i bardzo bliskich odległości.' },
        { term: 'Tatuaż prochowy', definition: 'Drobne, punktowe uszkodzenia lub ślady spowodowane uderzeniem niespalonych lub częściowo spalonych drobin prochu.' },
        { term: 'Odbicie wylotu lufy', definition: 'Ślad na celu odwzorowujący kształt wylotu lufy broni pod wpływem wysokiej temperatury i ciśnienia.' },
        { term: 'Strzał próbny', definition: 'Doświadczalne strzały oddawane z znanych odległości z badanej broni i amunicji do identycznego podłoża.' },
      ],
    },
    {
      type: 'title',
      text: 'Kategorie Odległości i Oczekiwane Wyniki',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kategoria', 'Typowe ustalenia', 'Ograniczenia interpretacji'],
      rows: [
        ['Przyłożenie', 'Masowy osad centralny, sadza, przypalenie, rozerwanie, odbicie lufy.', 'Struktura tkaniny i ciśnienie gazów mogą znacznie zniekształcić średnicę uszkodzenia.'],
        ['Bliski kontakt', 'Gęsta sadza i ciasna aureola prochowa wokół otworu wlotowego.', 'Luźna odzież lub przeszkoda pośrednia mogą zakłócić oczekiwany rozkład pozostałości.'],
        ['Bliski zasięg', 'Tatuaż prochowy, drobiny prochu bez wyraźnej obecności sadzy.', 'Ta sama odległość daje różne wzory na bawełnie, jeansie, skórze czy papierze.'],
        ['Strzał daleki', 'Nieliczne pozostałości, duży rozrzut lub brak widocznych śladów.', 'Analiza chemiczna i mikroskopowa stają się kluczowe w miarę zanikania śladów makroskopowych.'],
      ],
    },
    {
      type: 'tip',
      title: 'Praktyczna wskazówka interpretacyjna',
      html: 'Zawsze oceniaj pozostałości strzałowe jako <strong>analizę porównawczą przedziałów</strong>, a nie jako sztywną wartość liczbową. Pewne wnioski naukowe płyną z zestawienia próbki dowodowej z identycznymi wzorami doświadczalnymi.',
    },
    {
      type: 'title',
      text: 'Protokół Dokumentacji Przed Analizą Wzoru',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Udokumentować właściwości fizyczne podłoża: rodzaj tkaniny, splot, kolor, grubość i ewentualne fałdy.',
        'Zapisać markę, model, długość lufy broni, partię amunicji, ładunek prochu i urządzenia wylotowe.',
        'Sfotografować wzór z przymiarem skali, odpowiednim oświetleniem i zachowaniem łańcucha dowodowego.',
        'Oddzielnie przeanalizować obecność sadzy, przypaleń, niespalonego prochu, rąbka oczyszczenia i rozerwań.',
        'Zawsze przeprowadzić próbne strzały porównawcze przed sformułowaniem wniosków o odległości strzału.',
      ],
    },
    {
      type: 'proscons',
      title: 'Symulacja cyfrowa a badanie balistyczne w laboratorium',
      items: [
        { pro: 'Ułatwia zrozumienie wpływu odległości na wzrost rozrzutu cząstek pozostałości strzałowych.', con: 'Nie odzwierciedla specyfiki konkretnej broni palnej, partii amunicji ani struktury tkaniny.' },
        { pro: 'Wyjaśnia koncepcyjne różnice między kategoriami odległości strzału.', con: 'Nie zastępuje testów chemicznych ani skaningowej mikroskopii elektronowej (SEM-EDS).' },
        { pro: 'Pomaga zrozumieć fizyczne ograniczenia wizualnej oceny makroskopowej.', con: 'Nie ma wartości dowodowej bez kalibracji eksperymentalnej i oficjalnej oceny biegłego.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Ostrzeżenie kryminalistyczne',
      title: 'Wykluczenie zastosowania sądowego',
      html: 'Model symulacyjny nie może zastąpić fizycznych dowodów w rzeczywistej sprawie. Nie ocenia stanu broni, chemii pozostałości, przeszkód pośrednich ani jakości pobrania próbki. Korzystaj z tej strony wyłącznie w celach dydaktycznych i zlecaj badania uprawnionym laboratoriom peryferyjnym.',
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
      applicationCategory: 'ForensicApplication',
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
