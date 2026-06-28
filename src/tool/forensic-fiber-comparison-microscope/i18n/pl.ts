import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'mikroskop-porownawczy-wlokien-kryminalistycznych';
const title = 'Symulator mikroskopu porównawczego do mikrośladów włókien';
const description = 'Stwórz profil dowodowego włókna tekstylnego, porównaj go z referencyjnymi próbkami i zinterpretuj morfologię, polaryzację oraz widmo UV-Vis barwnika.';

const howTo = [
  {
    name: 'Stwórz profil dowodowego włókna',
    text: 'Ustaw materiał, średnicę, kierunek skrętu, reakcję polaryzacyjną i profil barwnika dla zabezpieczonego włókna.',
  },
  {
    name: 'Wybierz znane włókno porównawcze',
    text: 'Po prawej stronie wybierz włókno z odzieży podejrzanej, takie jak bawełna, wełna, poliester lub nylon.',
  },
  {
    name: 'Dostosuj ostrość i polaryzację',
    text: 'Przesuń suwak ostrości i obróć polaryzator, aby zaobserwować ostrość, prążki powierzchniowe i dwójłomność.',
  },
  {
    name: 'Porównaj morfologię i widma UV-Vis',
    text: 'Użyj wyników oceny morfologii, zgodności widma, wyniku łącznego i krzywych absorpcji, aby zdecydować, czy próbki są spójne, czy wyraźnie się różnią.',
  },
];

const faq = [
  {
    question: 'Czy badania mikroskopowe włókien pozwalają zidentyfikować konkretną sztukę odzieży, z której pochodzi włókno?',
    answer: 'Zazwyczaj nie. Porównanie włókien może wykazać spójność lub różnice między włóknem dowodowym a znanym tekstyliem, jednak przypisanie do indywidualnego źródła wymaga szczegółowej analizy kontekstu, walidowanych metod, a często także dodatkowych badań chemicznych lub instrumentalnych.',
  },
  {
    question: 'Dlaczego w porównywaniu włókien stosuje się światło spolaryzowane?',
    answer: 'Światło spolaryzowane pozwala ujawnić dwójłomność, zachowanie wygaszania oraz różnice strukturalne między włóknami naturalnymi i syntetycznymi. Włókna syntetyczne często wykazują silniejszą reakcję na polaryzację ze względu na uporządkowanie cząsteczkowe.',
  },
  {
    question: 'Co wnosi widmo UV-Vis?',
    answer: 'Podczas gdy mikroskopia pozwala opisać kształt i właściwości optyczne, absorbancja UV-Vis umożliwia porównanie charakterystyki barwników przy różnych długościach fal. Podobne włókna o różnych barwnikach mogą wyraźnie rozdzielić się na wykresie widmowym.',
  },
  {
    question: 'Dlaczego wyniki są przedstawiane jako ocena punktowa, a nie ostateczna identyfikacja?',
    answer: 'Dowody w postaci mikrośladów powinny być opiniowane w sposób proporcjonalny. Wyniki punktowe są edukacyjnym podsumowaniem podobieństwa morfologii i barwników, a nie kategoryczną opinią biegłego czy orzeczeniem prawnym.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Wirtualny mikroskop porównawczy o dzielonym polu widzenia porównujący dwa włókna tekstylne',
    chartAria: 'Wykres absorbancji UV-Vis porównujący widma barwnika włókna dowodowego i porównawczego',
    questionedSample: 'Próbka dowodowa',
    fixedEvidence: 'Zabezpieczony mikroślad',
    builderSummaryDefault: 'Bawełna / 18 µm / nieregularny / indygo',
    customQuestionedLabel: 'Włókno dowodowe w sprawie',
    material: 'Materiał',
    cotton: 'Bawełna',
    woolMaterial: 'Wełna',
    polyesterMaterial: 'Poliester',
    nylonMaterial: 'Nylon',
    materialcotton: 'bawełna',
    materialwool: 'wełna',
    materialpolyester: 'poliester',
    materialnylon: 'nylon',
    twist: 'Skręt',
    irregularTwist: 'Nieregularny',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Średnica',
    polarResponse: 'Reakcja na polaryzację',
    dyeProfile: 'Profil barwnika',
    indigoDye: 'Indygo',
    crimsonDye: 'Karmazynowy',
    navyDye: 'Granatowy',
    violetDye: 'Fioletowy',
    dyeindigo: 'indygo',
    dyecrimson: 'karmazynowy',
    dyenavy: 'granatowy',
    dyeviolet: 'fioletowy',
    knownSample: 'Próbka porównawcza',
    questionedCotton: 'Dowodowe niebieskie włókno bawełniane',
    suspectCotton: 'Porównawcze włókno bawełniane z koszuli',
    wool: 'Włókno z czerwonego wełnianego swetra',
    polyester: 'Włókno z granatowej kurtki poliestrowej',
    nylon: 'Włókno z fioletowej nylonowej podszewki',
    focus: 'Dokładna ostrość',
    polarizer: 'Kąt polaryzatora',
    morphology: 'Morfologia',
    spectrum: 'UV-Vis',
    birefringence: 'Dwójłomność',
    combinedMatch: 'Zgodność łączna',
    uvVisTitle: 'Nałożenie absorbancji UV-Vis',
    statusStrong: 'Wysoka spójność',
    statusPartial: 'Niejednoznaczne porównanie',
    statusDifferent: 'Wskazanie na wykluczenie',
    verdictStrong: 'Włókno dowodowe i porównawcze wykazują wysoką spójność pod względem średnicy, skrętu, właściwości optycznych oraz widma barwnika. W rzeczywistej sprawie zostałoby to przedstawione jako potwierdzenie potencjalnego wspólnego pochodzenia tekstylnego, a nie jako kategoryczna identyfikacja.',
    verdictPartial: 'Wynik porównania jest mieszany. Niektóre cechy grupowe są zgodne, lecz różnice w morfologii, reakcji barwnika lub dwójłomności są na tyle znaczące, że przed sformułowaniem jakichkolwiek ostrożnych wniosków wymagane byłyby dalsze badania.',
    verdictDifferent: 'Włókna wykazują brak spójności w kluczowych cechach grupowych. Symulowany wynik przemawia za wykluczeniem tego materiału tekstylnego jako prawdopodobnego źródła włókna dowodowego.',
    disclaimer: 'Symulacja wyłącznie do celów edukacyjnych. Rzeczywiste kryminalistyczne porównywanie włókien wymaga walidowanych metod mikroskopowych, stosowania prób kontrolnych, dokumentacji, zabezpieczeń przed zanieczyszczeniem próbek, recenzji partnerskich oraz wykwalifikowanej interpretacji biegłego.',
  },
  seo: [
    {
      type: 'title',
      text: 'Kryminalistyczne porównywanie włókien za pomocą mikroskopii porównawczej i widm UV-Vis',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Symulator dydaktyczny',
      title: 'Co demonstruje ten wirtualny mikroskop do włókien',
      html: 'Ten symulator przedstawia praktyczny schemat postępowania przy <strong>kryminalistycznym porównywaniu włókien</strong>: opisz dowodowe włókno tekstylne, porównaj je z referencyjnym wzorcem, ustaw ostrość, obracaj filtry polaryzacyjne i porównaj charakterystykę barwnika przy użyciu uproszczonej krzywej absorbancji UV-Vis. Narzędzie jest przeznaczone dla studentów badających mikroślady, nie do celów opiniodawczych w realnych sprawach.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 pola', label: 'dzielony widok mikroskopu', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'zakres widma widzialnego', icon: 'mdi:chart-bell-curve' },
        { value: '4 klasy', label: 'bawełna, wełna, poliester, nylon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'rotacja polaryzatora', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Kluczowe obserwacje w porównywaniu włókien tekstylnych',
      items: [
        'Zmierz lub oszacuj średnicę włókna, zwracając uwagę na naturalne wahania wzdłuż jego długości.',
        'Zarejestruj kierunek skrętu, prążki powierzchniowe, obecność rdzenia, cząstki matujące oraz cechy przekroju poprzecznego, o ile są widoczne.',
        'Użyj światła spolaryzowanego do porównania dwójłomności, zachowania wygaszania oraz zmian jasności podczas obrotu.',
        'Porównaj barwę mikroskopowo, a następnie użyj metod instrumentalnych do analizy barwnika, jeśli stopień skomplikowania sprawy wymaga większej dokładności.',
        'Sformułuj wniosek, czy wyniki są spójne, różne czy niejednoznaczne; unikaj sformułowań wskazujących na konkretną sztukę odzieży bez pełnego uzasadnienia.',
      ],
    },
    {
      type: 'table',
      headers: ['Obserwacja', 'W czym pomaga?', 'Ograniczenia'],
      rows: [
        ['Średnica i morfologia', 'Czy włókna są fizycznie podobne?', 'Różnice produkcyjne mogą nakładać się na siebie w różnych sztukach odzieży.'],
        ['Skręt i szczegóły powierzchni', 'Czy cechy naturalne lub syntetyczne są zgodne?', 'Uszkodzenia, naciągnięcie i sposób montażu preparatu mogą zmienić wygląd.'],
        ['Odpowiedź w świetle spolaryzowanym', 'Czy właściwości optyczne są zgodne?', 'Dwójłomność stanowi dowód o charakterze grupowym, a nie indywidualnym.'],
        ['Widmo barwnika UV-Vis', 'Czy barwniki są spójne?', 'Podobne barwniki mogą dawać zbliżone wykresy; znaczenie mają ekstrakcja i ustawienia przyrządu.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Co wspiera spójność',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Wiele niezależnych cech grupowych zgadza się między włóknem dowodowym a porównawczym.',
          points: ['Zbliżony zakres średnic', 'Ten sam ogólny typ włókna', 'Podobne zachowanie polaryzacyjne', 'Nakładające się piki absorbancji barwnika'],
        },
        {
          title: 'Co wspiera wykluczenie',
          icon: 'mdi:close-circle-outline',
          description: 'Pojawia się wyraźna, powtarzalna różnica w cesze, która powinna być zgodna dla włókien z tego samego źródła.',
          points: ['Niezgodność włókna naturalnego i syntetycznego', 'Inny skręt lub morfologia powierzchni', 'Wyraźnie odmienne widmo barwnika', 'Niezgodna reakcja dwójłomności'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak działa model symulacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model opiera się na niewielkiej bazie danych referencyjnych obejmującej średnicę, kierunek skrętu, klasę włókna, dwójłomność, rodzinę barwników oraz punkty absorbancji UV-Vis. Włókno dowodowe może być konfigurowane przez użytkownika, dzięki czemu wynik dopasowania reaguje na profil mikrośladu, a nie na sztywny przykład. Wizualny obraz mikroskopowy reaguje na ostrość i kąt polaryzatora, uświadamiając studentom znaczenie parametrów optycznych.',
    },
    {
      type: 'paragraph',
      html: 'Regulacja polaryzatora jest szczególnie przydatna przy włóknach syntetycznych. Poliestrowi i nylonowi przypisano wyższe wartości dwójłomności, przez co ich jasność zmienia się bardziej zauważalnie przy obrocie polaryzatora. Naturalna bawełna i wełna również reagują, jednak w subtelniejszy sposób. Odzwierciedla to dydaktyczną zasadę, że orientacja cząsteczkowa i struktura włókna wpływają na zachowanie optyczne.',
    },
    {
      type: 'paragraph',
      html: 'Wykres UV-Vis jest uproszczoną nakładką graficzną, a nie pełnym zamiennikiem spektrofotometru. W rzeczywistych badaniach mikrośladów porównanie barwników może wymagać mikrospektrofotometrii, chromatografii cienkowarstwowej, ekstrakcji chemicznej, prób kontrolnych i określenia niepewności pomiaru. Wykres ma na celu pokazanie, dlaczego dwa włókna wyglądające podobnie pod mikroskopem mogą różnić się składem barwnika.',
    },
    {
      type: 'paragraph',
      html: 'Biegli sądowi muszą dokumentować każdy krok procesu analizy włókien. Obejmuje to wykonywanie szczegółowych fotografii, rejestrowanie pomiarów i zachowanie łańcucha dowodowego dla wszystkich fizycznych dowodów. Symulator pomaga studentom zrozumieć znaczenie systematycznej dokumentacji i obiektywnego porównywania w pracy kryminalistycznej. Poprzez interakcję z różnymi ustawieniami użytkownicy mogą dowiedzieć się, jak droga światła, grubość próbki i stężenie barwnika wpływają na krzywe widmowe i wygląd fizyczny.',
    },
    {
      type: 'paragraph',
      html: 'Biegli sądowi muszą dokumentować każdy krok procesu analizy włókien. Obejmuje to wykonywanie szczegółowych fotografii, rejestrowanie pomiarów i zachowanie łańcucha dowodowego dla wszystkich fizycznych dowodów. Symulator pomaga studentom zrozumieć znaczenie systematycznej dokumentacji i obiektywnego porównywania w pracy kryminalistycznej. Poprzez interakcję z różnymi ustawieniami użytkownicy mogą dowiedzieć się, jak droga światła, grubość próbki i stężenie barwnika wpływają na krzywe widmowe i wygląd fizyczny.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Włókno dowodowe', definition: 'Włókno zabezpieczone na miejscu zdarzenia, ofierze, podejrzanym, narzędziu, pojeździe lub innym obiekcie, którego pochodzenie jest nieznane.' },
        { term: 'Włókno porównawcze', definition: 'Wzorcowe włókno pobrane ze znanego materiału tekstylnego lub obiektu w celu porównania z próbką dowodową.' },
        { term: 'Dwójłomność', definition: 'Zjawisko optyczne polegające na tym, że materiał wykazuje różne współczynniki załamania światła w zależności od kierunku i polaryzacji przechodzącego światła.' },
        { term: 'Widmo UV-Vis', definition: 'Wykres przedstawiający natężenie absorpcji światła przez barwnik lub materiał przy różnych długościach fal.' },
        { term: 'Cecha grupowa', definition: 'Właściwość pozwalająca przypisać dowód do określonej grupy potencjalnych źródeł, zamiast wskazywać na jedno konkretne źródło.' },
      ],
    },
    {
      type: 'tip',
      title: 'Wskazówka interpretacyjna dla studentów',
      html: 'Wysoki wynik podobieństwa należy odczytywać jako <strong>spójność</strong>, a nie tożsamość. Analiza mikrośladów jest najbardziej przekonująca, gdy badania mikroskopowe, analiza chemiczna, kontekst przeniesienia, trwałość śladu, metoda zabezpieczenia i zabezpieczenie przed zanieczyszczeniem wskazują na ten sam kierunek.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Formułuj wnioski zgodnie z wartością dowodu',
      html: 'Mikroskop w przeglądarce nie pozwala na walidację zgodności włókien. Oficjalne sprawozdania powinny opisywać obserwacje, podstawy porównania, ograniczenia oraz stopień wsparcia hipotezy, bez nadmiernego przesądzania o tożsamości źródła.',
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
