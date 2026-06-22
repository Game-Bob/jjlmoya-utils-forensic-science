import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'strefa-zamieszkiwalna-gwiazd';
const description = 'Oblicz i zwizualizuj ekosferę (strefę Złotowłosej) wokół różnych typów gwiazd, korzystając z konfiguracji gwiezdnych i planetarnych.';
const title = 'Symulator Ekosfery Gwiazd: Znajdź Strefę Złotowłosej';

const howTo = [
  {
    name: 'Wybierz szablon gwiazdy',
    text: 'Wybierz typ gwiazdy, od niebieskich olbrzymów po czerwone karły, aby załadować standardowe właściwości fizyczne, takie jak masa, jasność i temperatura.',
  },
  {
    name: 'Dostosuj parametry planety',
    text: 'Zmieniaj odległość orbitalną planety (półoś wielką), albedo oraz efekt cieplarniany atmosfery za pomocą interaktywnych suwaków.',
  },
  {
    name: 'Analizuj orbitę i ekosferę',
    text: 'Obserwuj planetę krążącą wokół gwiazdy w czasie rzeczywistym. Sprawdź, czy temperatura równowagowa i powierzchniowa pozwalają na występowanie płynnej wody.',
  },
];

const faq = [
  {
    question: 'Co to jest ekosfera (strefa zamieszkiwalna)?',
    answer: 'Ekosfera (często nazywana strefą Złotowłosej) to obszar wokół gwiazdy, w którym warunki panujące na powierzchni planety pozwalają na utrzymanie wody w stanie ciekłym pod określonym ciśnieniem atmosferycznym. Jest definiowana przez konserwatywne i optymistyczne granice na podstawie jasności i temperatury efektywnej gwiazdy.',
  },
  {
    question: 'Jak jasność gwiazdy wpływa na ekosferę?',
    answer: 'Jasność gwiazdy określa całkowitą ilość energii przez nią wypromieniowywanej. Gorętsze i bardziej masywne gwiazdy (typu O, B lub A) są niezwykle jasne, przez co ich strefy zamieszkiwalne leżą znacznie dalej. Chłodniejsze, mniej masywne gwiazdy (jak pomarańczowe lub czerwone karły typu K lub M) mają niską jasność, co przesuwa ich ekosfery bardzo blisko gwiazdy.',
  },
  {
    question: 'Czym różni się temperatura równowagowa od temperatury powierzchni?',
    answer: 'Temperatura równowagowa to teoretyczna temperatura planety przy założeniu, że zachowuje się ona jak ciało czarne pochłaniające promieniowanie gwiazdy i emitujące je z powrotem w przestrzeń kosmiczną. Temperatura powierzchni uwzględnia efekt cieplarniany atmosfery planety, który zatrzymuje ciepło i dodatkowo ją ogrzewa.',
  },
  {
    question: 'Dlaczego albedo jest ważne dla zdatności planety do zamieszkania?',
    answer: 'Albedo to miara refleksyjności powierzchni planety. Wyższe albedo (bliskie 1.0) oznacza, że planeta odbija więcej docierającego światła gwiazdy, co ją ochładza. Niższe albedo oznacza większą absorpcję promieniowania, co podwyższa jej ogólną temperaturę.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Symulator Ekosfery Gwiazd',
    starPresetsLabel: 'Typy Widmowe Gwiazd',
    customStarHeader: 'Parametry Gwiazdy',
    starTemperature: 'Temperatura Efektywna (K)',
    starLuminosity: 'Jasność (L/L⊙)',
    starMass: 'Masa (M/M⊙)',
    starRadius: 'Promień (R/R⊙)',
    planetHeader: 'Parametry Planety',
    planetDistance: 'Odległość Orbitalna (AU)',
    planetAlbedo: 'Albedo Bonda',
    greenhouseDelta: 'Ocieplenie Cieplarniane (K)',
    resultsHeader: 'Wyniki Symulacji',
    stellarFluxResult: 'Otrzymany Strumień Gwiazdy',
    eqTempResult: 'Temperatura Równowagowa',
    surfTempResult: 'Szacowana Temperatura Powierzchni',
    orbitPeriodResult: 'Okres Orbitalny',
    orbitVelocityResult: 'Prędkość Orbitalna',
    hzLimitsHeader: 'Granice Ekosfery',
    innerLimit: 'Konserwatywna Granica Wewnętrzna',
    outerLimit: 'Konserwatywna Granica Zewnętrzna',
    optInnerLimit: 'Optymistyczna Granica Wewnętrzna',
    optOuterLimit: 'Optymistyczna Granica Zewnętrzna',
    orbitCanvasTitle: 'Interaktywny Wizualizator Orbity',
    statusLabel: 'Status Zdatności do Zamieszkania',
    statusTooHot: 'ZA GORĄCO (Woda wyparowuje)',
    statusHabitable: 'W EKOSFERZE (Możliwa płynna woda)',
    statusTooCold: 'ZA ZIMNO (Woda zamarza)',
    statusExplanation: 'W oparciu o konserwatywne granice, planeta ta znajduje się w określonym statusie ekosfery.',
    unitsLabel: 'Układ Jednostek',
    unitsScientific: 'Naukowy',
    unitsImperial: 'Anglosaski',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBIOLOGIA: Fizyka gwiezdnych stref zamieszkiwalnych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Poszukiwanie życia poza Ziemią rozpoczyna się od zrozumienia warunków fizycznych niezbędnych do istnienia płynnej wody. Astrobiolodzy używają modeli matematycznych do mapowania granic ekosfer wokół różnych typów gwiazd. Ten symulator wykorzystuje modele Kopparapu i wsp. (2013) do oszacowania strumienia energii docierającego do planet i określenia, czy znajdują się one w strefie Złotowłosej. Ekosferę definiuje się jako obszar, w którym planeta o masie zbliżonej do Ziemi z atmosferą składającą się z CO2-H2O-N2 może utrzymać płynną wodę na swojej powierzchni.',
    },
    {
      type: 'title',
      text: 'Wzory Matematyczne i Fizyka Atmosfery',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Granice ekosfery określa się obliczając efektywny strumień gwiezdny (Seff) wymagany do wywołania wilgotnego cieplarnianego lub maksymalnego efektu cieplarnianego. Równanie na Seff zależy od temperatury efektywnej gwiazdy (Teff):<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>gdzie T* = Teff - 5780 K, a współczynniki (a, b, c, d) są empirycznie wyznaczone z jednowymiarowych klimatycznych modeli radiacyjno-konwekcyjnych. Po obliczeniu Seff, odległość orbitalną d w jednostkach astronomicznych (AU) określa wzór:<br><br>d = sqrt(L / Seff)<br><br>gdzie L to jasność gwiazdy w odniesieniu do Słońca. Temperaturę równowagową (Teq) planety oblicza się przy założeniu, że planeta zachowuje się jak kuliste ciało czarne w równowadze termicznej:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>gdzie R* to promień gwiazdy, A to albedo Bonda planety, a S to strumień gwiezdny w jednostkach stałej słonecznej Ziemi.',
    },
    {
      type: 'title',
      text: 'Klasyfikacja Widmowa i Granice Zamieszkiwalności',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Charakterystyka gwiazd różni się znacznie w zależności od typu widmowego. Poniżej znajduje się podsumowanie typowych właściwości i granic ekosfery (HZ):',
    },
    {
      type: 'table',
      headers: [
        'Klasa Widmowa',
        'Temperatura (K)',
        'Jasność (L/L⊙)',
        'HZ Granica Wewn. (AU)',
        'HZ Granica Zewn. (AU)',
      ],
      rows: [
        ['Typ O (Olbrzym)', '40 000', '100 000', '300.0', '530.0'],
        ['Typ B (Olbrzym)', '20 000', '1 000', '30.1', '53.2'],
        ['Typ A (Syriusz)', '8 500', '20.0', '4.2', '7.4'],
        ['Typ F (Procyon)', '6 500', '2.5', '1.5', '2.6'],
        ['Typ G (Słońce)', '5 778', '1.0', '0.95', '1.67'],
        ['Typ K (Karzeł)', '4 500', '0.15', '0.37', '0.65'],
        ['Typ M (Karzeł)', '3 200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Wpływ Klasy Widmowej na Warunki Sprzyjające Życiu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Każda klasa widmowa tworzy unikalne środowisko radiacyjne i grawitacyjne dla swoich planet:<br><br><strong>Gwiazdy Typu O i B:</strong> Te masywne niebieskie gwiazdy emitują intensywne promieniowanie ultrafioletowe (UV) i żyją niezwykle krótko (dziesiątki milionów lat). Płynna woda mogłaby istnieć na ich zewnętrznych światach, ale życie nie miałoby czasu na ewolucję przed wybuchem gwiazdy jako supernowa.<br><br><strong>Gwiazdy Typu A i F:</strong> Są jaśniejsze i gorętsze od Słońca. Ich strefy zamieszkiwalne są szerokie i położone daleko, co minimalizuje skutki rotacji synchronicznej. Jednak wysoki poziom bliskiego promieniowania UV może poważnie uszkodzić cząsteczki organiczne, jeśli planeta nie posiada ochronnej warstwy ozonowej.<br><br><strong>Gwiazdy Typu G (słoneczne):</strong> Zapewniają stabilny strumień światła przez miliardy lat, stanowiąc główny cel poszukiwań życia. Ich promieniowanie idealnie odpowiada wymaganiom znanej nam biochemii.<br><br><strong>Gwiazdy Typu K (pomarańczowe karły):</strong> Uznawane przez wielu astrobiologów za gospodarzy "superzamieszkiwalnych". Żyją dziesiątki miliardów lat, emitują mniej szkodliwego promieniowania UV niż gwiazdy typu G i nie wykazują tak gwałtownych rozbłysków jak młode karły typu M.<br><br><strong>Gwiazdy Typu M (czerwone karły):</strong> Najpowszechniejsze gwiazdy w galaktyce. Ponieważ ich strefy zamieszkiwalne leżą bardzo blisko (zazwyczaj < 0,2 AU), planety są narażone na rotację synchroniczną (jedna strona stale zwrócona do gwiazdy). Ponadto aktywne karły typu M generują silne wiatry gwiezdne i rozbłyski o wysokiej energii, mogące odrzeć planety z atmosfery.',
    },
    {
      type: 'title',
      text: 'Kluczowe Czynniki w Planetarnych Środowiskach Zamieszkiwalnych',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Środowisko fizyczne planety kształtowane jest przez wiele zmiennych wykraczających poza samą odległość od gwiazdy macierzystej:',
    },
    {
      type: 'list',
      items: [
        '<strong>Atmosferyczny Efekt Cieplarniany:</strong> Naturalne gazy cieplarniane podnoszą temperaturę powierzchni ponad poziom równowagowy ciała czarnego. Planety skaliste wymagają cyklu węglanowo-krzemianowego do stabilizacji poziomu CO2 w atmosferze i regulacji temperatury w geologicznych skalach czasowych.',
        '<strong>Albedo Bonda Planety:</strong> Wysoka refleksyjność (spowodowana chmurami, czapami lodowymi lub aerozolami siarczanowymi) chłodzi planetę, podczas gdy niskie albedo (ciemna gleba, zbiorniki wodne) zatrzymuje więcej energii gwiezdnej.',
        '<strong>Pola Magnetyczne:</strong> Silna magnetosfera planetarna chroni atmosferę przed wiatrem słonecznym i gwiezdnym, zapobiegając nietermicznej ucieczce atmosferycznej i utracie wody.',
        '<strong>Dynamika Pułapki Zimna:</strong> Efekt pułapki zimna w wyższych warstwach atmosfery zapobiega przedostawaniu się pary wodnej na duże wysokości, gdzie gwiezdne promieniowanie UV mogłoby rozłożyć ją na wodór i tlen.',
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
