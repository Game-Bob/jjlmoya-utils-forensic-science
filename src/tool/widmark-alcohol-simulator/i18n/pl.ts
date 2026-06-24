import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-alkoholu-widmarka';
const title = 'Symulator Stężenia Alkoholu Widmarka';
const description = 'Symuluj wchłanianie, dystrybucję i eliminację alkoholu w organizmie człowieka przy użyciu wzoru Widmarka.';

const howTo = [
  {
    name: 'Skonfiguruj profil fizyczny',
    text: 'Wprowadź wagę ciała, płeć biologiczną oraz stopień nawodnienia. Te parametry biologiczne bezpośrednio obliczają współczynnik Widmarka (r), który określa objętość dystrybucji etanolu w organizmie.',
  },
  {
    name: 'Wybierz zawartość żołądka',
    text: 'Wybierz pusty żołądek, lekki posiłek lub pełny posiłek. Dostosowuje to dynamicznie stałą szybkości wchłaniania (ka), aby pokazać opóźniający wpływ żywności na krzywą stężenia alkoholu.',
  },
  {
    name: 'Dodaj napoje do linii czasu',
    text: 'Dodaj poszczególne napoje, określając objętość w mililitrach, procentową zawartość alkoholu (ABV) oraz godzinę spożycia względem początku symulacji.',
  },
  {
    name: 'Analizuj wykres stężenia alkoholu',
    text: 'Zweryfikuj zmiany stężenia alkoholu we krwi (BAC) w ciągu 12 godzin. Porównaj stężenie szczytowe, czas do jego osiągnięcia oraz prognozowany czas trzeźwienia.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Czym jest wzór Widmarka i jak jest stosowany w toksykologii sądowej?',
    answer: 'Wzór Widmarka to model matematyczny opracowany przez Erika M. P. Widmarka w 1932 roku. Szacuje on stężenie alkoholu we krwi na podstawie spożytej masy alkoholu, masy ciała, współczynnika dystrybucji (r) oraz liniowego tempa eliminacji. Toksykolodzy sądowi używają go do obliczeń retrospektywnych w celu określenia stanu trzeźwości w momencie wypadku.',
  },
  {
    key: 'faq-2',
    question: 'Jak jedzenie w żołądku wpływa na kształt krzywej stężenia alkoholu?',
    answer: 'Jedzenie w żołądku opóźnia opróżnianie żołądkowe, spowalniając przechodzenie alkoholu do jelita cienkiego, gdzie zachodzi główne wchłanianie. W symulacji zmniejsza to stałą szybkości wchłaniania (ka), co przesuwa szczyt stężenia w czasie i znacznie obniża jego maksymalną wartość.',
  },
  {
    key: 'faq-3',
    question: 'Dlaczego eliminacja alkoholu przebiega według kinetyki rzędu zerowego?',
    answer: 'Większość substancji leczniczych jest eliminowana według kinetyki pierwszego rzędu. Eliminacja alkoholu przebiega według kinetyki rzędu zerowego, ponieważ główny enzym wątrobowy odpowiedzialny za jego rozkład (dehydrogenaza alkoholowa - ADH) ulega nasyceniu przy bardzo niskich stężeniach (około 0,02 g/l). Wątroba przetwarza alkohol ze stałą maksymalną prędkością.',
  },
  {
    key: 'faq-4',
    question: 'Jakie czynniki biologiczne wpływają na współczynnik dystrybucji Widmarka r?',
    answer: 'Współczynnik r reprezentuje stosunek wody w organizmie do masy ciała. Ponieważ etanol rozpuszcza się tylko w wodzie, tkanka mięśniowa (bogata w wodę) zwiększa ten współczynnik, a tkanka tłuszczowa (uboga w wodę) go zmniejsza. Osoby z wyższą zawartością tłuszczu lub odwodnione osiągają wyższe BAC.',
  },
  {
    key: 'faq-5',
    question: 'Czy ten symulator może być prawnym dowodem zdolności do prowadzenia pojazdów?',
    answer: 'Absolutnie nie. Jest to wyłącznie narzędzie edukacyjne. Rzeczywisty metabolizm zależy od genetyki, stanu wątroby, leków i dokładnego składu posiłków. Nigdy nie należy polegać na obliczeniach matematycznych przed decyzją o prowadzeniu pojazdu.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profil',
    weight: 'Waga (kg)',
    sex: 'Płeć biologiczna',
    male: 'Mężczyzna',
    female: 'Kobieta',
    hydration: 'Nawodnienie',
    hydrationLow: 'Niskie',
    hydrationNormal: 'Normalne',
    hydrationHigh: 'Wysokie',
    stomachState: 'Zawartość żołądka',
    stomachEmpty: 'Pusty (Szybko)',
    stomachLight: 'Lekki posiłek (Średnio)',
    stomachFull: 'Pełny posiłek (Powoli)',
    drinksTimeline: 'Oś czasu spożycia',
    addDrink: 'Dodaj napój',
    drinkVolume: 'Objętość (ml)',
    drinkAbv: 'Zawartość alkoholu (% vol)',
    drinkTime: 'Czas (Godzina)',
    drinksList: 'Spożyte napoje',
    remove: 'Usuń',
    beer: 'Piwo (330ml, 5%)',
    wine: 'Wino (150ml, 12%)',
    spirits: 'Wódka (40ml, 40%)',
    peakBac: 'Szczyt BAC',
    timeToSober: 'Czas do trzeźwości',
    sober: 'Trzeźwy',
    currentBac: 'Aktualne BAC',
    drivingLimitAlert: 'Status kierowcy',
    safeLimit: 'Poniżej limitu',
    warningLimit: 'Przekroczono próg ostrzegawczy',
    dangerLimit: 'Przekroczono próg niebezpieczny',
    graphTitle: 'Stężenie alkoholu we krwi w ciągu 12 godzin',
    timeAxisLabel: 'Czas (Godziny)',
    bacAxisLabel: 'Promile (g/L)',
    legalLimitText: 'Standardowy limit prawny',
    noDrinksText: 'Dodaj napoje, aby rozpocząć symulację.',
    hours: 'godzin',
    soberStatus: 'Trzeźwy za {time} godz.',
    neverSober: 'Przekracza 12h',
    noteDisclaimer: 'Wyłącznie do celów edukacyjnych. Nigdy nie jedź po alkoholu.',
    noteWidmark: 'Oparte na równaniu Widmarka i liniowej eliminacji.',
  },
  seo: [
    {
      type: 'title',
      text: 'Toksykologia Sądowa i Farmakokinetyka Etanolu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zrozumienie procesów <strong>wchłaniania, dystrybucji i eliminacji etanolu</strong> stanowi kluczowy wymóg w toksykologii sądowej oraz przy rekonstrukcji wypadków drogowych. Po spożyciu alkohol trafia do żołądka, skąd wchłania się jedynie niewielka część. Ponad 80% dawki wchłania się w dwunastnicy i jelicie cienkim ze względu na ich ogromną powierzchnię. Szybkość opróżniania żołądka jest głównym czynnikiem limitującym, co tłumaczy, dlaczego posiłek spłaszcza i opóźnia szczyt krzywej alcoholemia.',
    },
    {
      type: 'paragraph',
      html: 'Prezentowany interaktywny symulator implementuje klasyczne równania Erika Widmarka w połączeniu z ciągłym modelem przedziałowym w oknie 12 godzin. Dopasowanie parametrów fizycznych pozwala zaobserwować akumulację oraz liniowy spadek stężenia we krwi.',
    },
    {
      type: 'title',
      text: 'Matematyczne wyprowadzenie wzoru Widmarka',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Podstawowe równanie Widmarka oblicza teoretyczne stężenie alkoholu we krwi przy założeniu natychmiastowego wchłaniania: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. W tym równaniu <em>A</em> oznacza masę czystego etanolu w gramach, <em>W</em> wagę ciała w kilogramach, a <em>r</em> współczynnik dystrybucji. Stała <em>&beta;</em> reprezentuje stężeniowy ubytek na godzinę, a <em>t</em> czas od rozpoczęcia eliminacji.',
    },
    {
      type: 'paragraph',
      html: 'Objętość napoju przelicza się na masę czystego etanolu poprzez pomnożenie objętości (ml) przez stężenie (ABV) oraz gęstość etanolu (około 0,8 g/ml). Na przykład 330 ml piwa o mocy 5% zawiera 13,2 g czystego etanolu. Masa ta ulega rozcieńczeniu w całkowitej wodzie organizmu. Symulator dostosowuje współczynnik r do płci (0,68 dla mężczyzn i 0,55 dla kobiet) oraz stopnia nawodnienia.',
    },
    {
      type: 'title',
      text: 'Zmienne fizjologiczne i objętość dystrybucji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Objętość dystrybucji etanolu zależy bezpośrednio od składu ciała. Etanol rozpuszcza się w wodzie, a nie w tłuszczu. Mięśnie zawierają około 75% wody, podczas gdy tkanka tłuszczowa prawie wcale jej nie posiada. Osoba umięśniona ma wyższy współczynnik r i osiąga niższe stężenie szczytowe niż osoba o tej samej wadze z większym poziomem tłuszczu. Odwodnienie zmniejsza ilość wody w organizmie, podnosząc szczyt BAC.',
    },
    {
      type: 'table',
      headers: ['Zmienna fizjologiczna', 'Mechanizm biologiczny', 'Efekt farmakokinetyczny', 'Znaczenie sądowe'],
      rows: [
        ['Masa ciała', 'Określa całkowitą objętość wody w organizmie.', 'Odwrotnie proporcjonalna do maksymalnego BAC.', 'Stanowi punkt wyjścia dla retrospektywnych obliczeń sądowych.'],
        ['Płeć biologiczna', 'Wpływa na typowy stosunek masy mięśniowej do tłuszczowej.', 'Współczynnik r jest niższy u kobiet (0,55), co podnosi szczyt.', 'Wyjaśnia różnice w podatności biologicznej na tę samą dawkę.'],
        ['Stan nawodnienia', 'Zmienia wolną objętość wody w organizmie.', 'Odwodnienie obniża r o 0,05, podnosząc krzywą.', 'Pozwala skorygować obliczenia po dużym wysiłku.'],
        ['Zawartość żołądka', 'Jedzenie spowalnia opróżnianie żołądkowe.', 'Zmniejsza stałą ka, spłaszczając szczyt krzywej.', 'Tłumaczy niskie stężenia przy dużym spożyciu po posiłku.'],
      ],
    },
    {
      type: 'title',
      text: 'Kinetyka eliminacji: Clearance rzędu zerowego w wątrobie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Po wniknięciu do krwi alkohol jest metabolizowany w wątrobie przez dehydrogenazę alkoholową (ADH). Enzym ten ulega całkowitemu nasyceniu przy bardzo niskich stężeniach (0,02 g/L), co wymusza kinetykę eliminacji rzędu zerowego. Wątroba rozkłada stałą ilość alkoholu na jednostkę czasu. Średnie tempo eliminacji (&beta;<sub>60</sub>) wynosi w sądownictwie 0,15 g/L na godzinę, co powoduje stały, liniowy spadek stężenia na wykresie.',
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
