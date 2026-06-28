import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'analizator-zrodla-wzorcow-pozarowych';
const title = 'Analizator źródła ognia na podstawie wzorców pożarowych';
const description = 'Mapuj wzorce V, głębokie zwęglenie, cienie sadzy i wskaźniki czystego wypalenia na planie pomieszczenia, a następnie rzutuj wektory rozprzestrzeniania się ognia, aby oszacować najbardziej prawdopodobny obszar źródła.';

const howTo = [
  {
    name: 'Importuj plan miejsca zdarzenia',
    text: 'Przeciągnij obraz planu na obszar roboczy lub załaduj go z dysku przed umieszczeniem wektorów dowodowych.',
  },
  {
    name: 'Kliknij, aby otworzyć radialny selektor dowodów',
    text: 'Umieść wskaźnik nad śladem pożaru, otwórz kontekstowe menu radialne i wybierz typ wskaźnika bezpośrednio na mapie.',
  },
  {
    name: 'Przeciągnij, aby dopracować wektory i obserwować zbieżność',
    text: 'Wydłuż każdy wektor propagacji z przyciąganiem na płótnie i obserwuj, jak pole prawdopodobieństwa przelicza się w czasie rzeczywistym w miarę gromadzenia dowodów.',
  },
  {
    name: 'Eksportuj migawkę techniczną',
    text: 'Wygeneruj ustrukturyzowany raport zawierający współrzędne źródła, poziom ufności, wariancję, stan warstw i pełny zestaw wektorów do późniejszego przeglądu.',
  },
];

const faq = [
  {
    question: 'Czy wzorce pożarowe mogą udowodnić dokładny punkt, w którym rozpoczął się pożar?',
    answer: 'Nie. Wzorce pożarowe mogą pomóc w generowaniu i testowaniu hipotez dotyczących źródła ognia, ale wentylacja, gaszenie, obciążenie ogniowe, flashover i zakłócenia po pożarze mogą zniekształcać wzorce. Rzeczywiste określenie źródła wymaga systematycznego dochodzenia.',
  },
  {
    question: 'Dlaczego wzorce V są ważne w dochodzeniu pożarowym?',
    answer: 'Wzorce V często odzwierciedlają rozprzestrzenianie się płomieni w górę i na zewnątrz na powierzchniach pionowych. Mogą wskazywać na niższy obszar źródła, ale muszą być porównane z innymi dowodami przed wyciągnięciem wniosków.',
  },
  {
    question: 'Co oznacza głębokie zwęglenie?',
    answer: 'Głębokie zwęglenie może wskazywać na dłuższe nagrzewanie, wyższy strumień ciepła lub efekty paliwa. Jest to użyteczny kontekst, ale nie wskazuje automatycznie źródła, ponieważ materiały zwęglają się w różnym tempie.',
  },
  {
    question: 'Dlaczego używać wielu wektorów zamiast jednej strzałki?',
    answer: 'Pojedynczy wzorzec może być mylący. Wiele niezależnych wektorów zmniejsza wpływ jednej uszkodzonej ściany, jednego pakietu paliwowego lub jednej ścieżki wentylacji.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Interaktywna przestrzeń robocza kryminalistyczna do rysowania wektorów rozprzestrzeniania się ognia',
    vPattern: 'Wzorzec V',
    deepChar: 'Głębokie zwęglenie',
    sootShadow: 'Cień sadzy',
    cleanBurn: 'Czyste wypalenie',
    loadPlan: 'Załaduj plan',
    generateReport: 'Generuj raport',
    pointerLabel: 'Wskaźnik',
    resetVectors: 'Resetuj',
    estimatedOrigin: 'Szacowane źródło',
    visibleLayers: 'Widoczne warstwy dowodowe',
    vectorsLabel: 'WEKTORY',
    confidenceLabel: 'UFNOŚĆ',
    varianceLabel: 'WARIANCJA',
    modeLabel: 'TRYB',
    guideSummary: 'Jak korzystać z tego narzędzia',
    flowPanelTitle: 'Przepływ pracy',
    legendPanelTitle: 'Legenda dowodów',
    readoutPanelTitle: 'Panel wyników',
    flow1Kicker: 'KROK 1',
    flow1Icon: '1',
    flow1Title: 'Załaduj',
    flow1Text: 'Prześlij plan miejsca zdarzenia',
    flow2Kicker: 'KROK 2',
    flow2Icon: '2',
    flow2Title: 'Wybierz ślad',
    flow2Text: 'Kliknij znak pożaru',
    flow3Kicker: 'KROK 3',
    flow3Icon: '3',
    flow3Title: 'Przeciągnij wektor',
    flow3Text: 'Nakieruj kierunek ognia',
    flow4Kicker: 'KROK 4',
    flow4Icon: '4',
    flow4Title: 'Odczytaj wynik',
    flow4Text: 'Sprawdź stopkę + eksportuj',
    basicsTitle: 'Co powinieneś zrobić najpierw',
    basicsIntro: 'Załaduj wyraźny plan, oznaczaj tylko wzorce, które możesz uzasadnić, i rozkładaj wektory na różnych powierzchniach zamiast powtarzać ten sam ślad.',
    indicatorsTitle: 'Co oznacza każdy typ dowodu',
    vPatternShort: 'Przypalenie ściany otwiera się ku górze',
    vPatternExplain: 'Wzorzec V to znajomy kształt przypalenia ku górze i na zewnątrz, często widoczny na ścianie. Może sugerować, że ciepło i płomienie wznosiły się z niższego obszaru, ale nie jest to automatyczny dowód dokładnego źródła.',
    deepCharShort: 'Obszar spalony mocniej lub dłużej',
    deepCharExplain: 'Głębokie zwęglenie oznacza, że materiał wydaje się bardziej spalony, sczerniały lub skonsumowany w jednym obszarze niż wokół niego. Może wskazywać na dłuższe lub intensywniejsze nagrzewanie, ale rodzaj paliwa i grubość materiału mają duże znaczenie.',
    sootShadowShort: 'Dym zablokowany lub przekierowany',
    sootShadowExplain: 'Cień sadzy to chroniony lub inaczej przyciemniony obszar, który sugeruje, że obiekt, powierzchnia lub przepływ powietrza zmienił sposób osadzania się sadzy. Może pomóc zrekonstruować, co było obecne lub jak przemieszczał się dym.',
    cleanBurnShort: 'Mniej sadzy z powodu ciepła lub przepływu powietrza',
    cleanBurnExplain: 'Czyste wypalenie to obszar, w którym sadza wydaje się jaśniejsza, usunięta lub nieobecna, ponieważ ciepło, wentylacja lub bezpośrednie działanie płomienia wpłynęły na nią inaczej. Jest to przydatne, ale nie każdy czysty obszar oznacza źródło.',
    resultsTitle: 'Jak odczytać wynik',
    resultsIntro: 'Użyj stopki jako szybkiej kontroli stanu mapowania, a nie jako ostatecznego wniosku kryminalistycznego.',
    resultsPoint1: 'Ile linii dowodowych jest aktywnych.',
    resultsPoint2: 'Jak silnie aktywne wektory są zgodne.',
    resultsPoint3: 'Jak szeroki jest nadal obszar źródła.',
    resultsPoint4: 'Czego narzędzie oczekuje od Ciebie w następnej kolejności.',
    awaitingVector: 'Oczekiwanie na wektor',
    selectIndicator: 'Wybierz wskaźnik',
    refiningVector: 'Dopracowywanie wektora',
    needsMoreVectors: 'Potrzeba więcej wektorów',
    wideArea: 'Szeroki obszar źródła',
    focusedArea: 'Skoncentrowany obszar źródła',
    dropPlan: 'Upuść obraz planu lub kliknij, aby przesłać',
    needsMoreVectorsText: 'Narysuj co najmniej dwie wyraźne strzałki kierunkowe. Trzy lub więcej niezależnych obserwacji zwykle sprawia, że zbieżność jest znacznie łatwiejsza do interpretacji.',
    wideAreaText: 'Rzutowane linie przecinają się, ale rozrzut jest nadal szeroki. W rzeczywistej scenie porównaj wentylację, obciążenie ogniowe, efekty gaszenia i informacje od świadków przed zawężeniem źródła.',
    focusedAreaText: 'Wektory zbiegają się w zwartym obszarze. Potraktuj to jako silny sygnał dydaktyczny do opracowywania hipotez dotyczących źródła, a nie jako ostateczny wniosek kryminalistyczny.',
    disclaimer: 'Wyłącznie symulacja edukacyjna. Rzeczywiste dochodzenie w sprawie źródła i przyczyny pożaru powinno być zgodne z uznanymi wytycznymi, protokołami bezpieczeństwa na miejscu zdarzenia, standardami dokumentacji i kwalifikowaną oceną ekspertów.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interaktywna analiza źródła pożaru na podstawie wektorów wzorców pożarowych',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Symulator dydaktyczny',
      title: 'Czego uczy ten analizator źródła na podstawie wzorców pożarowych',
      html: 'To narzędzie przeglądarkowe pokazuje, jak śledczy wnioskują od fizycznych wzorców pożarowych do prawdopodobnego <strong>obszaru źródła</strong>. Użytkownicy mapują widoczne dowody, rysują kierunkowe wektory rozprzestrzeniania i obserwują, jak rzutowane linie zbiegają się lub rozchodzą. Model jest celowo edukacyjny: uczy geometrii i interpretacji wzorców, a nie prawnego określania przyczyn.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 warstwy', label: 'Wzorzec V, zwęglenie, sadza, czyste wypalenie', icon: 'mdi:layers-triple' },
        { value: 'Plan 2D', label: 'mapa strukturalna pomieszczenia', icon: 'mdi:floor-plan' },
        { value: '3+ strzałki', label: 'zalecane obserwacje', icon: 'mdi:vector-line' },
        { value: '0-100%', label: 'wprowadzanie ufności', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'Zdyscyplinowany przepływ pracy dla interpretacji wzorców pożarowych',
      items: [
        'Zacznij od bezpieczeństwa, zabezpieczenia miejsca zdarzenia, fotografii, szkiców i systematycznej dokumentacji przed interpretacją wzorców.',
        'Rozdzielaj typy wzorców, aby uszkodzenia w kształcie V, głębokość zwęglenia, osadzanie sadzy i czyste wypalenie nie zostały zredukowane do jednego założenia.',
        'Rysuj wskaźniki kierunkowe tylko tam, gdzie fizyczny wzorzec wspiera możliwy do obrony kierunek rozprzestrzeniania.',
        'Szukaj zbieżności między niezależnymi obserwacjami, zamiast polegać na najbardziej dramatycznych uszkodzeniach.',
        'Używaj oszacowanego obszaru źródła jako hipotezy do sprawdzenia względem paliw, źródeł zapłonu, wentylacji, dowodów elektrycznych i zeznań świadków.',
      ],
    },
    {
      type: 'table',
      headers: ['Wzorzec', 'Potencjalna wartość', 'Główne zastrzeżenie'],
      rows: [
        ['Wzorzec V', 'Może sugerować rozprzestrzenianie się płomieni w górę i na zewnątrz z niższego obszaru.', 'Może być zmieniony przez wentylację, flashover, geometrię ścian i gaszenie.'],
        ['Głębokie zwęglenie', 'Może wskazywać na długotrwałą ekspozycję na ciepło lub intensywne spalanie.', 'Rodzaj paliwa i grubość materiału silnie wpływają na głębokość zwęglenia.'],
        ['Cień sadzy', 'Może ujawniać chronione obszary, rozmieszczenie obiektów lub efekty przepływu powietrza.', 'Przemieszczone meble lub działania gaśnicze mogą zmienić interpretację.'],
        ['Czyste wypalenie', 'Może pokazywać wysoką temperaturę, wentylację lub późną fazę spalania.', 'Nie identyfikuje automatycznie pierwszego zapalonego materiału.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Lepsze hipotezy źródła',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Najlepsze hipotezy wyjaśniają wiele obserwacji jednocześnie.',
          points: ['Niezależne wektory są zbieżne', 'Dowody pasują do znanych ścieżek wentylacji', 'Pakiety paliwowe są uwzględnione', 'Alternatywne źródła są aktywnie testowane'],
        },
        {
          title: 'Słabe hipotezy źródła',
          icon: 'mdi:alert-circle-outline',
          description: 'Słabe hipotezy często opierają się na jednym wzorcu bez testowania czynników zniekształcających.',
          points: ['Jeden dramatycznie zwęglony obszar jest traktowany jako dowód', 'Flashover jest ignorowany', 'Uszkodzenia po gaszeniu nie są udokumentowane', 'Dowody źródła zapłonu są zakładane'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak działa model wektorowy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Każda strzałka jest traktowana jako rzutowana linia rozprzestrzeniania się ognia. Estymator oblicza przecięcia linii parami, filtruje punkty mieszczące się w rozsądnych granicach planu, uśrednia pozostałe przecięcia i raportuje promień na podstawie rozrzutu tych przecięć. Mały promień z kilkoma wektorami daje silniejszy sygnał zbieżności. Model przecięcia działa poprzez rozwiązanie równań parametrycznych dwóch linii rozciągających się od odpowiednich znaczników dowodowych. Gdy dwa wektory wskazują na wspólny obszar, ich teoretyczny punkt przecięcia wnosi jedną współrzędną do puli uśredniania. Im więcej niezależnych wektorów uczestniczy, tym bardziej estymator może odfiltrować przecięcia leżące daleko od głównego skupiska, skutecznie zmniejszając wpływ pojedynczej obserwacji, która mogła być źle zorientowana lub błędnie zinterpretowana.',
    },
    {
      type: 'paragraph',
      html: 'To podejście geometryczne odzwierciedla ćwiczenie rysunkowe w klasie: pomaga studentom zrozumieć, dlaczego analiza źródła poprawia się, gdy obserwacje pochodzą z różnych powierzchni i typów wzorców. Ujawnia również powszechny problem: strzałki mogą się przecinać, nawet gdy podstawowa interpretacja jest słaba, więc centrum matematyczne nigdy nie może zastąpić oceny nauki o pożarach. W prawdziwym dochodzeniu praktycy porównują wykreślony wynik ze ścieżkami wentylacji, rozkładem obciążenia ogniowego, uszkodzeniami strukturalnymi i zeznaniami świadków, zanim potraktują jakąkolwiek współrzędną jako prawdopodobne źródło. Narzędzie zachęca do tego nawyku, wyświetlając wariancję obok szacowanego punktu, przypominając użytkownikom, że zwarte skupisko przecięć jest tylko tak silne, jak jakość obserwacji, które je wytworzyły.',
    },
    {
      type: 'paragraph',
      html: 'Poza podstawową logiką przecięć, estymator stosuje ograniczenie graniczne, tak że przecięcia znajdujące się daleko poza planem pomieszczenia są wykluczane. Zapobiega to przeciąganiu uśrednionego środka przez wartości odstające w kierunku niemożliwych lokalizacji. Końcowy promień reprezentuje odchylenie standardowe pozostałych współrzędnych przecięć, dając bezpośrednią miarę tego, jak spójnie aktywne wektory są zgodne. Promień poniżej dziesięciu procent rozpiętości planu wskazuje na silną zbieżność. Promień przekraczający ćwierć planu sygnalizuje, że dowody nie wspierają jeszcze skoncentrowanego źródła i potrzebne są kolejne lub lepsze obserwacje przed wyciągnięciem wniosków.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Obszar źródła', definition: 'Ogólny region, w którym dostępne dowody sugerują, że pożar się rozpoczął.' },
        { term: 'Wzorzec V', definition: 'Wzorzec pożarowy, który często pojawia się jako uszkodzenie skierowane w górę i na zewnątrz na powierzchni pionowej.' },
        { term: 'Czyste wypalenie', definition: 'Jaśniejszy lub czystszy obszar spowodowany wypaleniem się sadzy lub jej brakiem w warunkach wysokiej temperatury lub przepływu powietrza.' },
        { term: 'Cień sadzy', definition: 'Chroniony lub inaczej osadzony obszar sadzy, który może zachować informacje o obiektach, przepływie powietrza lub ekspozycji na ciepło.' },
        { term: 'Zbieżność wektorowa', definition: 'Grupowanie się rzutowanych wskaźników kierunkowych wokół wspólnego obszaru.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Ostrożność kryminalistyczna',
      title: 'Nie zamieniaj zbieżności w pewność',
      html: 'Zwarta grupa przecięć jest użyteczna tylko wtedy, gdy obserwacje są prawidłowe. Rzeczywiste dochodzenia muszą uwzględniać wentylację, flashover, pakiety paliwowe, systemy elektryczne, dowody z urządzeń, zeznania świadków, gaszenie i naruszenie miejsca zdarzenia.',
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
