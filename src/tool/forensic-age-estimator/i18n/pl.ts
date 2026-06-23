import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'estymator-wieku-zebow-szkieletu-trzeciego-trzonowca';
const title = 'Estymator wieku na podstawie rozwoju zębów, szkieletu i trzeciego trzonowca';
const description = 'Oszacuj kryminalistyczny przedział wieku w oparciu o rozwój zębów, dojrzałość szkieletową oraz wskaźniki trzeciego trzonowca dla potrzeb badań przesiewowych i triażu.';

const howTo = [
  {
    name: 'Wybierz nacisk na dowody',
    text: 'Wybierz "Dowody mieszane" dla zrównoważonego triażu, "Priorytet stomatologiczny", gdy wyniki stomatologiczne są bardziej wiarygodne, lub "Priorytet szkieletowy", gdy wskaźniki radiograficzne układu kostnego stanowią główne źródło danych.',
  },
  {
    name: 'Oceń każdy wskaźnik dojrzałości',
    text: 'Określ etap dla każdego wskaźnika w skali od 0 do 8. Niższe etapy odzwierciedlają wczesny rozwój, etapy pośrednie dojrzewanie młodzieńcze, a wyższe etapy wyniki dojrzałe lub prawie dojrzałe.',
  },
  {
    name: 'Interpretuj przedział, nie tylko wiek centralny',
    text: 'Analizuj wartości minimalną, prawdopodobną i maksymalną łącznie. Ocena wieku w medycynie sądowej powinna być wyrażana jako przedział, ze względu na dużą zmienność osobniczą w tempie rozwoju biologicznego.',
  },
  {
    name: 'Weryfikuj niezgodności między wskaźnikami',
    text: 'Jeśli etapy rozwoju zębów, szkieletu i trzeciego trzonowca wskazują na rozbieżne zakresy wiekowe, traktuj wynik jako wstępny/eksploracyjny i zbierz dodatkowe dowody przed wyciągnięciem wniosków.',
  },
];

const faq = [
  {
    question: 'Czy to narzędzie służy do określania pełnoletności prawnej?',
    answer: 'Nie. Jest to kalkulator przesiewowy przeznaczony do celów edukacyjnych i triażu. Prawne określenie wieku wymaga zastosowania zatwierdzonych lokalnych protokołów, opinii wykwalifikowanych biegłych, formalnej dokumentacji tożsamości oraz standardów zgodnych z wymogami danej jurysdykcji.',
  },
  {
    question: 'Dlaczego wynik jest prezentowany jako przedział wieku?',
    answer: 'Wyrzynanie zębów, zrost szkieletowy i rozwój trzecich trzonowców przebiegają odmiennie w zależności od pochodzenia etnicznego, stanu odżywienia, zdrowia, płci, populacji referencyjnej oraz metody obrazowania. Przedział wiekowy jest rzetelniejszy niż wskazanie jednej, dokładnej daty.',
  },
  {
    question: 'Co oznaczają "Dowody mieszane"?',
    answer: 'Tryb "Dowody mieszane" równoważy dane z rozwoju zębów, dojrzałości szkieletowej i etapu rozwoju trzeciego trzonowca. Użyj tego trybu, gdy żaden z pojedynczych wskaźników nie jest wyraźnie bardziej wiarygodny dla danego przypadku.',
  },
  {
    question: 'Czy trzecie trzonowce są wiarygodne w każdym przypadku?',
    answer: 'Trzecie trzonowce są przydatne w ocenie wieku późnej adolescencji i młodych dorosłych, lecz charakteryzują się dużą zmiennością. Agenesia (brak zawiązków), patologie, różnice populacyjne oraz jakość zdjęć RTG mogą ograniczać ich wartość diagnostyczną.',
  },
  {
    question: 'Czy narzędzie to powinno być stosowane w rzeczywistej pracy śledczej?',
    answer: 'Wyłącznie jako pomoc wstępna. W rzeczywistych sprawach sądowych należy korzystać z walidowanych metod, skalibrowanych danych referencyjnych, niezależnej weryfikacji przez biegłych oraz przejrzystego raportowania ograniczeń i niepewności pomiarowej.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: 'Tablica sprawy kryminalistycznej',
    controls: 'Kontrolki estymacji wieku',
    results: 'Wyniki estymacji wieku',
    maturityProfile: 'Dynamiczny profil dojrzałości',
    screeningOnly: 'Oszacowanie przesiewowe',
    evidenceType: 'Nacisk na dowody',
    mixedEvidence: 'Dowody mieszane',
    dentalPriority: 'Priorytet stomatologiczny',
    skeletalPriority: 'Priorytet szkieletowy',
    dentalStage: 'Etap rozwoju zębów',
    epiphysealStage: 'Etap zrostu nasad',
    thirdMolarStage: 'Etap trzeciego trzonowca',
    minimumAge: 'Minimum',
    likelyAge: 'Prawdopodobny',
    maximumAge: 'Maksimum',
    maturityScore: 'Wynik dojrzałości',
    stageLabel: 'Etap',
    ageUnit: 'lat',
    dentalShort: 'Zęby',
    boneShort: 'Kości',
    molarShort: 'Trzonowiec',
    dentalStageHelp: 'Formowanie korony, korzenia i wierzchołka.',
    epiphysealStageHelp: 'Zamknięcie płytki wzrostowej i zrost szkieletowy.',
    molarStageHelp: 'Mineralizacja trzeciego trzonowca i zamknięcie wierzchołka.',
    dentalStage0: 'Brak',
    dentalStage1: 'Guzek',
    dentalStage2: 'Korona',
    dentalStage3: 'Początek korzenia',
    dentalStage4: 'Połowa korzenia',
    dentalStage5: 'Korzeń długi',
    dentalStage6: 'Wierzchołek wąski',
    dentalStage7: 'Wierzchołek zamykający się',
    dentalStage8: 'Kompletny',
    epiphysealStage0: 'Otwarta',
    epiphysealStage1: 'Brzeg',
    epiphysealStage2: 'Zwężenie',
    epiphysealStage3: 'Most',
    epiphysealStage4: 'Połowa zrośnięta',
    epiphysealStage5: 'Prawie zrośnięta',
    epiphysealStage6: 'Tylko linia',
    epiphysealStage7: 'Prawie zamknięta',
    epiphysealStage8: 'Zamknięta',
    molarStage0: 'Brak',
    molarStage1: 'Guzek',
    molarStage2: 'Początek korony',
    molarStage3: 'Korona pełna',
    molarStage4: 'Początek korzenia',
    molarStage5: 'Połowa korzenia',
    molarStage6: 'Korzeń długi',
    molarStage7: 'Wierzchołek zamykający się',
    molarStage8: 'Kompletny',
    confidenceexploratory: 'Eksploracyjny',
    confidencemoderate: 'Umiarkowany',
    confidencestrong: 'Silny',
    noteTriage: 'Stosować jako oszacowanie przesiewowe, nie jako prawne określenie wieku.',
    noteFinalAssessment: 'Ostateczna ocena wieku w medycynie sądowej wymaga integracji radiologii, badania stomatologicznego, dokumentacji medycznej oraz standardów właściwych dla jurysdykcji.',
    noteWideInterval: 'Wskaźniki różnią się o ponad cztery lata, dlatego przedział został poszerzony.',
  },
  seo: [
    {
      type: 'title',
      text: 'Kryminalistyczny estymator wieku: kalkulator przesiewowy zębów, szkieletu i trzeciego trzonowca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Użyj tego kryminalistycznego estymatora wieku, gdy potrzebujesz szybkiego i przejrzystego uporządkowania dowodów dojrzałości biologicznej przed formalną ekspertyzą. Kalkulator integruje dane o rozwoju zębów, zroście nasad i etapie trzeciego trzonowca w oszacowany przedział wieku. Narzędzie stworzono dla potrzeb wyszukiwania takich haseł jak <strong>kryminalistyczna ocena wieku</strong>, <strong>estymacja wieku zębów</strong> czy <strong>ocena dojrzałości szkieletowej</strong>, ułatwiając zrozumienie wyników i ograniczeń związanych z niepewnością pomiarową.',
    },
    {
      type: 'paragraph',
      html: 'Wynik jest świadomie prezentowany jako <strong>wiek minimalny, prawdopodobny i maksymalny</strong>. Podanie jednej, dokładnej daty byłoby błędne, gdyż rozwój biologiczny jest procesem wysoce zindywidualizowanym. Czynniki takie jak odżywianie, zdrowie, pochodzenie, płeć, jakość obrazowania, patologie i błąd obserwatora znacząco wpływają na wynik. Traktuj ten kalkulator jako ustrukturyzowaną pomoc diagnostyczną, a nie jako ostateczną opinię biegłego.',
    },
    {
      type: 'title',
      text: 'Znaczenie trzech wskaźników dojrzałości',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Suwaki etapów (0-8) pozwalają na praktyczną abstrakcję danych w celu porównania różnych systemów biologicznych. Etap 0 oznacza wczesny stan lub brak dowodów dojrzałości; etap 8 oznacza pełną dojrzałość. Te etapy ułatwiają porównanie danych dentystycznych, szkieletowych i zębów mądrości w ramach jednego przedziału wiekowego.',
    },
    {
      type: 'table',
      headers: ['Wskaźnik', 'Opis', 'Kluczowe zastosowanie', 'Uwagi'],
      rows: [
        ['Rozwój zębów', 'Formowanie i wyrzynanie (z wyłączeniem trzecich trzonowców).', 'Podstawowy wskaźnik u dzieci i młodzieży.', 'Wypaczenia mogą wynikać z chorób zębów, ekstrakcji lub różnic populacyjnych.'],
        ['Zrost nasad', 'Postępujące zamykanie płytek wzrostowych w kościach.', 'Kluczowe dla oceny wieku młodzieńczego.', 'Zależne od badanej kości, płci, zdrowia endokrynnego i techniki obrazowania.'],
        ['Trzeci trzonowiec', 'Formowanie i dojrzewanie zębów mądrości.', 'Istotny dla oceny wieku młodych dorosłych.', 'Wysoka zmienność; konieczna weryfikacja agenezji i zatrzymania.'],
      ],
    },
    {
      type: 'title',
      text: 'Interpretacja przedziału wiekowego',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Analizuj trzy wartości łącznie. <strong>Wiek prawdopodobny</strong> to ważona centralna estymacja. Wartości <strong>minimalna</strong> i <strong>maksymalna</strong> definiują pas niepewności. Gdy wskaźniki są zgodne, zakres się zwęża; gdy sygnały stomatologiczne, szkieletowe i trzecich trzonowców są sprzeczne, zakres się rozszerza, a wskaźnik ufności spada.',
    },
    {
      type: 'table',
      headers: ['Wzór wyników', 'Interpretacja', 'Zalecane działanie'],
      rows: [
        ['Wąski przedział, wysoka ufność', 'Wskaźniki są zgodne.', 'Udokumentuj źródła i oceń, czy wymagana jest formalna metoda biegła.'],
        ['Umiarkowany przedział', 'Istnieją pewne rozbieżności.', 'Sprawdź jakość obrazu i poprawność przypisania etapów.'],
        ['Szeroki przedział, niska ufność', 'Wskaźniki sprzeczne.', 'Nie polegaj wyłącznie na kalkulatorze; poszukaj dodatkowej dokumentacji lub opinii specjalisty.'],
      ],
    },
    {
      type: 'title',
      text: 'Wybór trybu analizy dowodów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Dowody mieszane</strong> to tryb domyślny, równoważący wszystkie wskaźniki. Wybierz <strong>priorytet stomatologiczny</strong>, gdy dane dentystyczne są wyjątkowo rzetelne. Wybierz <strong>priorytet szkieletowy</strong>, gdy obrazowanie RTG kości jest najbardziej kompletną daną. Tryby te nie zwiększają jakości słabych dowodów, lecz modyfikują ich wagę statystyczną.',
    },
    {
      type: 'list',
      items: [
        '<strong>Priorytet stomatologiczny:</strong> gdy rozwój zębów jest czytelny i dostępne są dane o trzecich trzonowcach.',
        '<strong>Priorytet szkieletowy:</strong> gdy zrost nasad jest najlepiej udokumentowanym sygnałem.',
        '<strong>Dowody mieszane:</strong> dla zrównoważonego przeglądu wstępnego.',
        '<strong>Etykieta ufności:</strong> monitoruj ją, aby wykryć rozbieżności przed nadinterpretacją wyniku.',
      ],
    },
    {
      type: 'title',
      text: 'Ograniczenia kryminalistyczne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Estymacja wieku jest narzędziem pomocniczym, nigdy dowodem tożsamości. W sprawach karnych, identyfikacji ofiar katastrof czy sprawach migracyjnych wymagane jest podejście multidyscyplinarne. Rzetelny raport musi zawsze zawierać informacje o metodologii, populacji referencyjnej, kwalifikacjach biegłego oraz znanych ograniczeniach.',
    },
    {
      type: 'paragraph',
      html: 'Narzędzie służy do <strong>edukacji, triażu i przejrzystej komunikacji</strong>. Podkreślamy konieczność ostrożności w formułowaniu wniosków oraz to, że kluczowe progi prawne (np. ukończenie 18. roku życia) nie powinny być ustalane wyłącznie na podstawie uproszczonych kalkulatorów.',
    },
    {
      type: 'title',
      text: 'Lista kontrolna raportu biegłego',
      level: 3,
    },
    {
      list: [
        '<strong>Źródło dowodów:</strong> Określ, czy etapy wynikają z badania klinicznego, RTG pantomograficznego, czy obrazowania kości (np. ręka, obojczyk).',
        '<strong>Dane niekompletne:</strong> Udokumentuj brakujące zawiązki zębów, niską jakość obrazów czy anomalie.',
        '<strong>Walidacja metod:</strong> Upewnij się, że wybrane metody są uznawane w danej jurysdykcji.',
        '<strong>Przejrzystość niepewności:</strong> Zawsze podawaj zakres; unikaj sformułowań sugerujących dokładny wiek chronologiczny.',
        '<strong>Opinia specjalisty:</strong> W sprawach wysokiego ryzyka wymagana jest weryfikacja przez odontologa sądowego, radiologa lub antropologa.'
      ],
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