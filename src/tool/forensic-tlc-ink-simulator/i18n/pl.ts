import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensyczny-symulator-chromatografii-cienkowarstwowej-tlc-atramentu';
const title = 'Forensyczny symulator chromatografii cienkowarstwowej (TLC) atramentu';
const description = 'Symuluj chromatografię cienkowarstwową kwestionowanych atramentów, wizualizuj czoło rozpuszczalnika, rozdzielaj pasma barwników i obliczaj dokładne wartości Rf dla każdego pigmentu.';

const howTo = [
  {
    name: 'Wybierz kwestionowany atrament lub długopis porównawczy',
    text: 'Wybierz atrament z listu z żądaniem okupu lub profil podejrzanego długopisu. Każdy atrament zawiera inny zestaw składników barwnikowych o różnej polarności i powinowactwie do fazy stacjonarnej.',
  },
  {
    name: 'Wybierz fazę ruchomą',
    text: 'Zmień układ rozpuszczalników, aby zobaczyć, jak polarność rozpuszczalnika wpływa na rozwój kapilarny i względną migrację każdego pasma barwnika.',
  },
  {
    name: 'Rozwiń płytkę TLC',
    text: 'Przesuń suwak czasu rozwijania i obserwuj, jak czoło rozpuszczalnika wędruje w górę płytki, a rozdzielone pasma pojawiają się powyżej linii startu.',
  },
  {
    name: 'Odczytaj tabelę wartości Rf',
    text: 'Porównaj odległość przebytą przez każdy pigment z odległością czoła rozpuszczalnika. Symulator oblicza wartość Rf jako odległość pigmentu podzieloną przez odległość czoła rozpuszczalnika.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Co oznacza Rf w chromatografii cienkowarstwowej?',
    answer: 'Rf to współczynnik opóźnienia (retention factor): odległość przebyta przez substancję podzielona przez odległość przebytą przez czoło rozpuszczalnika od tej samej linii startu. Jest to wartość bezwymiarowa i zazwyczaj mieści się w zakresie od 0 do 1.',
  },
  {
    key: 'faq-2',
    question: 'Czy TLC może udowodnić, że dwie próbki atramentu pochodzą z tego samego długopisu?',
    answer: 'Nie. TLC może wykazać, czy wzory barwników są spójne, czy niespójne, ale przypisanie źródła wymaga zweryfikowanych metod porównawczych, kontroli, dokumentacji oraz interpretacji eksperta.',
  },
  {
    key: 'faq-3',
    question: 'Dlaczego zmiana rozpuszczalnika wpływa na układ pasm?',
    answer: 'Barwniki różnie dzielą się między fazę stacjonarną a ruchomą. Rozpuszczalnik o lepszym dopasowaniu polarności może przenieść barwnik dalej, zwiększając jego wartość Rf.',
  },
  {
    key: 'faq-4',
    question: 'Dlaczego linia startu jest ważna?',
    answer: 'Zarówno odległość czoła rozpuszczalnika, jak i odległość pigmentu muszą być mierzone od linii startu. Pomiar od dolnej krawędzi płytki prowadzi do błędnych wartości Rf.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Komora do chromatografii cienkowarstwowej z płytką rozwijaną',
    rulerAria: 'Wirtualna linijka milimetrowa do pomiaru czoła rozpuszczalnika i pasm pigmentu',
    rulerMarks: '80,60,40,20,0',
    units: 'Układ jednostek',
    metric: 'Metryczny',
    imperial: 'Imperialny',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: 'min',
    inkSample: 'Próbka atramentu',
    ransomNote: 'Kwestionowany atrament z listu z żądaniem okupu',
    bluePen: 'Zabezpieczony niebieski długopis',
    blackPen: 'Zabezpieczony czarny długopis',
    gelPen: 'Zabezpieczony długopis żelowy',
    solventSystem: 'Fase ruchoma',
    ethanolWater: 'Etanol / woda',
    butanolAcetic: 'Butanol / kwas octowy',
    isopropanolAmmonia: 'Izopropanol / amoniak',
    developmentTime: 'Czas rozwijania',
    frontDistance: 'Droga rozpuszczalnika',
    matchScore: 'Podobieństwo wzoru',
    solventFront: 'Czoło rozpuszczalnika',
    originLine: 'Linia startu',
    pigment: 'Pasmo pigmentu',
    pigmentCyanDye: 'barwnik cyjanowy',
    pigmentVioletDye: 'barwnik fioletowy',
    pigmentGrayCarrier: 'szary nośnik',
    pigmentNavyDye: 'barwnik granatowy',
    pigmentYellowDye: 'barwnik żółty',
    pigmentRedDye: 'barwnik czerwony',
    pigmentBlueDye: 'barwnik niebieski',
    pigmentDarkBinder: 'ciemne spoiwo',
    pigmentTealDye: 'barwnik turkusowy',
    pigmentMagentaDye: 'barwnik magenta',
    pigmentGelBinder: 'spoiwo żelowe',
    distance: 'Odległość',
    rfValue: 'Wartość Rf',
    disclaimer: 'Symulacja wyłącznie do celów edukacyjnych. Forensyczne badanie porównawcze atramentów wymaga oryginalnych dokumentów, zweryfikowanych metod laboratoryjnych, wzorców odniesienia i wykwalifikowanych biegłych z zakresu badania dokumentów.',
  },
  seo: [
    {
      type: 'title',
      text: 'Chromatografia cienkowarstwowa w forensycznym porównywaniu atramentów',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Symulator dydaktyczny',
      title: 'W czym pomaga ten symulator chromatografii atramentu TLC',
      html: 'To narzędzie wyjaśnia, jak <strong>chromatografia cienkowarstwowa atramentów</strong> pozwala rozdzielić widoczną linię pisma na wiele pasm barwników. Jest przeznaczone dla studentów kryminalistyki, osób uczących się badania dokumentów oraz każdego, kto chce zrozumieć, jak oblicza się wartości Rf na podstawie rozwiniętej płytki TLC.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d pasma / d czoła', label: 'wzór na współczynnik opóźnienia', icon: 'mdi:division' },
        { value: '4', label: 'porównywane profile atramentów', icon: 'mdi:pen' },
        { value: '3', label: 'symulowane fazy ruchome', icon: 'mdi:flask-outline' },
        { value: '2', label: 'odczyty metryczne i imperialne', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista kontrolna prawidłowego pomiaru TLC',
      items: [
        'Zaznacz linię startu powyżej poziomu rozpuszczalnika przed rozpoczęciem rozwijania.',
        'Wyjmij płytkę, zanim rozpuszczalnik dotrze do górnej krawędzi.',
        'Zaznacz cło rozpuszczalnika natychmiast, ponieważ może ono odparować lub stać się słabo widoczne.',
        'Mierz drogę pigmentu i drogę rozpuszczalnika od tej samej linii startu.',
        'Zgłaszaj wartości Rf wraz z użytym układem rozpuszczalników, typem płytki, warunkami rozwijania i próbami kontrolnymi.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Co może wykazać TLC',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'TLC może wykazać, czy kwestionowane i znane atramenty wykazują podobne zachowanie podczas rozdziału barwników w tych samych warunkach.',
          points: ['Porównanie przesiewowe', 'Wizualizacja wzoru barwników', 'Dokumentowanie Rf', 'Wybór próbek do badań potwierdzających'],
        },
        {
          title: 'Czego TLC nie może udowodnić samodzielnie',
          icon: 'mdi:alert-circle-outline',
          description: 'TLC samo w sobie nie pozwala na jednoznaczną identyfikację konkretnego egzemplarza długopisu, określenie wieku dokumentu ani potwierdzenie autorstwa.',
          points: ['Brak unikalnego przypisania źródła', 'Brak identyfikacji autora pisma', 'Brak domyślnego określenia wieku pisma', 'Brak zastępstwa dla zatwierdzonych protokołów'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Częste pytanie', 'Koncepcja TLC', 'Szczegółowa odpowiedź'],
      rows: [
        ['Jak obliczyć Rf?', 'Odległość barwnika podzielona przez odległość czoła rozpuszczalnika.', 'Zmierz obie odległości od linii startu, a następnie podziel. Wynik jest bezwymiarowy.'],
        ['Dlaczego atramenty rozdzielają się na kolory?', 'Różne barwniki mają różne powinowactwo do fazy stacjonarnej i ruchomej.', 'Pojedyncza nakreślona linia może zawierać kilka barwników wędrujących z różną prędkością.'],
        ['Czy dwa długopisy mogą mieć taki sam wzór TLC?', 'Tak, zbliżone receptury mogą dawać bardzo podobne wzory rozdziału.', 'Podobieństwo potwierdza zgodność grupową, a nie indywidualizację do konkretnego długopisu.'],
        ['Dlaczego moja wartość Rf się zmieniła?', 'Rozpuszczalnik, płytka, wilgotność, nasycenie komory, temperatura i wielkość naniesionej kropli wpływają na migrację.', 'Wartości Rf są porównywalne tylko wtedy, gdy warunki są kontrolowane i udokumentowane.'],
      ],
    },
    {
      type: 'title',
      text: 'Jak symulator modeluje rozdział',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model traktuje ruch czoła rozpuszczalnika jako proces wznoszenia kapilarnego, który spowalnia w czasie, podczas gdy każdemu barwnikowi przypisywana jest wartość Rf oparta na dwóch uproszczonych właściwościach: jego powinowactwie do wędrującego rozpuszczalnika i dopasowaniu polarności do wybranej fazy ruchomej. Ma to charakter wyłącznie edukacyjny, a nie chemii instrumentalnej, ale oddaje kluczową zależność, którą użytkownicy powinni przyswoić: rozpuszczalnik przemieszcza się jako pierwszy, barwniki dzielą się między fazy, a wartość Rf jest obliczana na podstawie zmierzonych odległości.',
    },
    {
      type: 'paragraph',
      html: 'Chromatografia cienkowarstwowa jest powszechnie akceptowaną techniką analityczną w laboratoriach kryminalistycznych ze względu na swoją prostotę, szybkość i opłacalność. W kontekście badania dokumentów jest ona stosowana głównie do porównywania składu barwników różnych próbek atramentu. Biegli pobierają mały fragment atramentu z kwestionowanego dokumentu za pomocą skalpela lub igły, rozpuszczają go w odpowiednim rozpuszczalniku, takim jak pirydyna lub metanol, a następnie nanoszą go na płytkę TLC obok referencyjnych wzorców atramentu.',
    },
    {
      type: 'paragraph',
      html: 'Po rozwinięciu płytki w zamkniętej komorze poszczególne składniki atramentu rozdzielają się na podstawie ich różnego powinowactwa do stacjonarnej fazy żelu krzemionkowego i ruchomej fazy rozpuszczalnika. Otrzymany chromatogram stanowi wizualny profil atramentu, ukazując wyraźne pasma barwne na określonych wysokościach. Eksperci badający dokumenty obliczają następnie współczynnik opóźnienia dla każdego widocznego pasma barwnika, co pomaga ustalić, czy badany atrament jest chemicznie spójny z podejrzanym narzędziem pisarskim lub czy odpowiada znanej marce i recepturze w bazie danych atramentów.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Faza stacjonarna', definition: 'Warstwa na płytce TLC, najczęściej żel krzemionkowy, która oddziałuje ze składnikami i spowalnia ich wędrówkę.' },
        { term: 'Faza ruchoma', definition: 'Układ rozpuszczalników wędrujący w górę płytki i unoszący ze sobą składniki barwnika.' },
        { term: 'Linia startu', definition: 'Linia narysowana ołówkiem, na którą nanosi się próbkę atramentu przed rozpoczęciem analizy.' },
        { term: 'Czoło rozpuszczalnika', definition: 'Najwyższy punkt osiągnięty przez fazę ruchomą przed wyjęciem płytki z komory.' },
        { term: 'Wartość Rf', definition: 'Współczynnik opóźnienia: odległość przebyta przez substancję podzielona przez odległość przebytą przez czoło rozpuszczalnika.' },
      ],
    },
    {
      type: 'tip',
      title: 'Praktyczna wskazówka interpretacyjna',
      html: 'W kryminalistycznym badaniu dokumentów brak zgodności jest szczególnie wartościowy, ponieważ pozwala wykluczyć badany długopis. Zgodność wzorów TLC jest słabszym dowodem: oznacza jedynie, że próbki są spójne chemicznie w danych warunkach, ale nie gwarantuje, że pochodzą z tego samego długopisu.',
    },
    {
      type: 'proscons',
      title: 'Zalety i ograniczenia porównywania atramentów metodą TLC',
      items: [
        { pro: 'Szybka, niedroga i wizualnie intuicyjna metoda rozdziału barwników atramentu.', con: 'Zazwyczaj niszcząca, ponieważ wymaga pobrania mikroskopijnej próbki z dokumentu.' },
        { pro: 'Wartości Rf tworzą ustrukturyzowany sposób porównywania próbek kwestionowanych i znanych.', con: 'Wartości Rf zmieniają się pod wpływem zmian rozpuszczalnika, płytki, wilgotności i warunków rozwijania.' },
        { pro: 'Przydatna jako metoda przesiewowa przed bardziej zaawansowanymi badaniami.', con: 'Nie pozwala na sformułowanie jednoznacznego wniosku o pochodzeniu z konkretnego długopisu bez dodatkowych dowodów.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Przestroga kryminalistyczna',
      title: 'Nie przeceniaj znaczenia chromatografii atramentu',
      html: 'Symulacja komputerowa nie zbada papieru, wieku atramentu, chemii ekstrakcji, jakości płytki, zanieczyszczeń ani nie zastąpi potwierdzenia metodami instrumentalnymi. Używaj jej do nauki logiki pomiaru i ograniczeń interpretacji, a w przypadku rzeczywistych dowodów opieraj się na zatwierdzonych metodach kryminalistycznego badania dokumentów.',
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
