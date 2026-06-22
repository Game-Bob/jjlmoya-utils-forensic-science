import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'symulator-podwojnej-szczeliny-dekoherencji';
const title = 'Symulator Doswiadczenia z Podwojna Szczelina i Dekoherencja';
const description = 'Wlaczaj i wylaczaj detektory ktoredy, aby zobaczyc, jak interferencja kwantowa zanika w dwa paski czastek w wizualnym symulatorze podwojnej szczeliny.';

const howTo = [
  {
    name: 'Zaczynaj z wylaczonym detektorem',
    text: 'Pozostaw detektor ktoredy wylaczony i obserwuj, jak ekran tworzy jasne i ciemne prazki interferencyjne z koherentnych amplitud prawdopodobienstwa.',
  },
  {
    name: 'Zwieksz sile detektora',
    text: 'Podnies sterowanie detektorem, aby wprowadzic informacje ktoredy. Im silniejszy detektor, tym bardziej spada koherencja i prazki zanikaja.',
  },
  {
    name: 'Zmien geometrie szczelin',
    text: 'Dostosuj odleglosc miedzy szczelinami i szerokosc szczelin, aby zobaczyc, jak geometria zmienia odstepy prazkow, szerokosc obwiedni i koncowy rozklad na ekranie.',
  },
  {
    name: 'Odczytuj metryki na zywo',
    text: 'Uzywaj widocznosci prazkow, informacji ktoredy i koherencji, aby polaczyc wzorzec wizualny z historia pomiaru kwantowego.',
  },
];

const faq = [
  {
    question: 'Dlaczego wzorzec zmienia sie po wlaczeniu detektorow?',
    answer: 'Detektor, ktory moze ujawnic, ktorej szczeliny uzyła czastka, niszczy zaleznosc fazowa miedzy tymi dwiema alternatywami. Bez tej koherencji dwie sciezki prawdopodobienstwa juz nie interferuja, a ekran zbliza sie do dwoch szerokich paskow czastek.',
  },
  {
    question: 'Czy ten symulator oznacza, ze swiadomosc zapada funkcje falowa?',
    answer: 'Nie. Symulator koncentruje sie na fizycznej informacji ktoredy i dekoherencji. Detektor, srodowisko lub jakakolwiek interakcja czyniaca sciezke rozroznalna moze stlumic interferencje bez potrzeby swiadomego obserwatora.',
  },
  {
    question: 'Co to jest widocznosc prazkow?',
    answer: 'Widocznosc prazkow porownuje jasne i ciemne obszary na ekranie. Wysoka widocznosc oznacza silny kontrast interferencji. Niska widocznosc oznacza, ze ciemne przerwy zostaly wypelnione, a wzorzec zachowuje sie bardziej jak dwa niezalezne strumienie czastek.',
  },
  {
    question: 'Czy to jest pelny rozwiazywacz mechaniki kwantowej?',
    answer: 'Nie. To model edukacyjny, ktory laczy obwiednie interferencji podwojnej szczeliny z kontrola dekoherencji. Zostal zbudowany, aby wizualnie wyjasnic efekt pomiaru, a nie zastepowac symulacje rownania Schrodingera dla rzeczywistego aparatu.',
  },
  {
    question: 'Dlaczego odleglosc miedzy szczelinami wplywa na odstepy prazkow?',
    answer: 'Wieksza odleglosc tworzy szybsza roznice fazowa na ekranie, przez co jasne i ciemne paski sa blizej siebie. Mniejsza odleglosc rozsuwa prazki dalej od siebie.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Aparat z podwojna szczelina',
    controls: 'Sterowanie podwojna szczelina',
    results: 'Wyniki podwojnej szczeliny',
    kicker: 'Kontrola pomiaru',
    detectorToggle: 'Wlacz detektor ktoredy',
    detectorStrength: 'Sila detektora',
    slitSeparation: 'Odleglosc szczelin',
    slitWidth: 'Szerokosc szczeliny',
    unobserved: 'Nieobserwowane',
    observed: 'Obserwowane',
    waveMode: 'Interferencja',
    particleMode: 'Paski czastek',
    fringeVisibility: 'Widocznosc prazkow',
    whichPath: 'Informacja ktoredy',
    coherence: 'Koherencja',
    readoutNote: 'Interferencja przetrwa, gdy obie sciezki pozostaja nierozroznialne. Pomiar udostepnia informacje o sciezce, a ekran traci ciemne prazki.',
  },
  seo: [
    {
      type: 'title',
      text: 'Symulator doswiadczenia z podwojna szczelina z dekoherencja i detekcja ktoredy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten symulator podwojnej szczeliny zamienia klasyczne doswiadczenie kwantowe w interaktywny model wizualny. Przy wylaczonym detektorze ekran pokazuje wzorzec interferencyjny: jasne i ciemne paski powstaja, poniewaz dwie mozliwe sciezki pozostaja koherentne. Po dodaniu detektora ktoredy wzorzec stopniowo zmienia sie w dwa szerokie paski czastek, poniewaz alternatywy sciezek staja sie rozroznialne.',
    },
    {
      type: 'paragraph',
      html: 'Narzedzie jest przeznaczone dla uczniow szukajacych jasnego wyjasnienia, dlaczego obserwacja zmienia wynik podwojnej szczeliny. Unika niejasnego stwierdzenia "obserwator zmienia rzeczywistosc" i zamiast tego koncentruje sie na fizycznie uzytecznej idei: interferencja wymaga nierozroznialnych alternatyw, podczas gdy pomiar i splatanie ze srodowiskiem usuwaja zaleznosc fazowa potrzebna do prazkow.',
    },
    {
      type: 'title',
      text: 'Co pokazuje doswiadczenie z podwojna szczelina',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W nieobserwowanej konfiguracji pojedynczy obiekt kwantowy jest opisywany przez amplitudy prawdopodobienstwa zwiazane z obiema szczelinami. Te amplitudy sumuja sie z faza. W niektorych pozycjach na ekranie wzajemnie sie wzmacniaja, tworzac jasne paski; w innych pozycjach znosza sie, tworzac ciemne paski. Ta naprzemienna struktura jest cecha charakterystyczna interferencji.',
    },
    {
      type: 'paragraph',
      html: 'Jesli detektor rejestruje, ktorej szczeliny uzyto, alternatywy przestaja byc nierozroznialne. Ekran nie otrzymuje juz koherentnej sumy amplitud. Otrzymuje mieszanine dwoch wynikow warunkowanych sciezka, wiec ciemne przerwy interferencyjne wypelniaja sie, a wynik wyglada jak czastki przechodzace przez jedna lub druga szczeline.',
    },
    {
      type: 'title',
      text: 'Jak czytac symulator',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sterowanie lub metryka', 'Co zmienia', 'Na co zwracac uwage'],
      rows: [
        ['Sila detektora', 'Ile informacji ktoredy jest dostepne', 'Wyzsze wartosci zmniejszaja widocznosc prazkow i wzmacniaja wzorzec dwoch paskow.'],
        ['Odleglosc szczelin', 'Dystans miedzy dwoma otworami', 'Wieksza odleglosc zageszcza paski interferencyjne na ekranie.'],
        ['Szerokosc szczeliny', 'Rozmiar kazdego otworu', 'Szersze szczeliny zwezaja obwiednie dyfrakcyjna i przeksztalcaja ogolna jasnosc.'],
        ['Widocznosc prazkow', 'Kontrast miedzy jasnymi i ciemnymi obszarami ekranu', 'Wysoka liczba oznacza, ze koherentna interferencja jest nadal widoczna.'],
        ['Koherencja', 'Ile zaleznosci fazowej pozostaje miedzy sciezkami', 'Koherencja spada, gdy detektor czyni sciezki rozroznialnymi.'],
      ],
    },
    {
      type: 'title',
      text: 'Dekoherencja bez mistycyzmu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dekoherencja to utrata uzytecznej koherencji fazowej, gdy uklad kwantowy koreluje z detektorem lub srodowiskiem. W doswiadczeniu z podwojna szczelina ta korelacja moze przenosic informacje ktoredy. Gdy sciezka zostanie w zasadzie zarejestrowana, nawet jesli nikt nie czyta rejestracji, wzorzec interferencyjny jest tlumiony.',
    },
    {
      type: 'paragraph',
      html: 'To rozroznienie ma znaczenie, poniewaz wiele wyjasnien przecenia role ludzkiej obserwacji. Wazna fizyka nie polega na wzroku ani swiadomosci; chodzi o to, czy konfiguracja doswiadczalna zachowuje czy niszczy nierozroznialnosc alternatyw, ktore w przeciwnym razie interferowalyby.',
    },
    {
      type: 'title',
      text: 'Ograniczenia tego modelu edukacyjnego',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Symulator uzywa zwartego optycznego wzorca podwojnej szczeliny i laczy go z modelem sily detektora dla dekoherencji. Jest doskonaly do intuicji, demonstracji w klasie i powtorek koncepcyjnych, ale nie jest numerycznym rozwiazaniem pelnego aparatu kwantowego z przestrzeniami Hilberta detektora, zrodlami szumu ani kalibracja laboratoryjna.',
    },
    {
      type: 'list',
      items: [
        '<strong>Uzywaj do zrozumienia koncepcji:</strong> interferencja, informacja ktoredy, koherencja i pomiar.',
        '<strong>Nie uzywaj do projektowania doswiadczen:</strong> prawdziwe doswiadczenia z podwojna szczelina wymagaja precyzyjnych obliczen dlugosci fali, apertury, detektora i propagacji.',
        '<strong>Skoncentruj sie na trendzie:</strong> wraz ze wzrostem rozroznialnosci kontrast interferencji maleje.',
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
