import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-przetrwania-atmosfery-planety';
const title = 'Kalkulator Przetrwania w Atmosferze Planety';
const description = 'Jak długo mozesz przetrwac bez skafandra na Marsie, Wenus, Tytanie, Jowiszu lub Evereście? Ten interaktywny kalkulator szacuje czas przetrwania niechronionego czlowieka na podstawie cisnienia, temperatury, tlenu, dwutlenku wegla, toksycznosci i zagrozen zwiazanych z wiatrem.';

const howTo = [
  {
    name: 'Wybierz cel, aby zaladowac rzeczywiste dane atmosferyczne',
    text: 'Wybierz Marsa, Wenus, Tytana, Jowisza lub ustawienie wstepne szczytu Everestu, aby natychmiast ustawic realistyczne wartosci cisnienia, temperatury, mieszanki gazowej i wiatru dla tego srodowiska.',
  },
  {
    name: 'Dostosuj warunki, aby zbadac punkt krytyczny',
    text: 'Przesuwaj suwaki cisnienia, temperatury, tlenu i dwutlenku wegla, aby zobaczyc, ktore zagrozenie staje sie smiertelne jako pierwsze. Male zmiany moga calkowicie przesunac czynnik ograniczajacy.',
  },
  {
    name: 'Odczytaj zegar przetrwania i najslabsze ogniwo',
    text: 'Licznik pokazuje szacowany czas przed wystapieniem powaznego stresu biologicznego. Etykieta czynnika ograniczajacego mowi dokladnie, ktore zagrozenie jest teraz najbardziej pilnym zagrozeniem.',
  },
  {
    name: 'Porownaj zagrozenia wizualnie na mapie ryzyka',
    text: 'Promieniste szprychy i wykres osi czasu pokazuja, jak cisnienie, cieplo, zimno, hipoksja, toksycznosc i wiatr przyczyniaja sie do calkowitego ryzyka w czasie.',
  },
];

const faq = [
  {
    question: 'Czy czlowiek moze przetrwac na Marsie bez skafandra?',
    answer: 'Nie. Mars ma ekstremalnie niskie cisnienie (mniej niz 1% cisnienia Ziemi), prawie nic oddychajacego tlenu i atmosfere skladajaca sie glownie z dwutlenku wegla. Utrata swiadomosci nastapilaby w ciagu sekund, a powazne obrazenia w ciagu minut bez wspomagania cisnienia i tlenu.',
  },
  {
    question: 'Dlaczego cisnienie atmosferyczne jest tak krytyczne dla przetrwania czlowieka?',
    answer: 'Ponizej granicy Armstronga (okolo 6,3 kPa) woda moze wrzec w temperaturze ciala. Niskie cisnienie zapobiega rowniez przedostawaniu sie tlenu do krwiobiegu, nawet jesli powietrze jest w 100% tlenem. Dlatego cisnienie jest jednym z najszybszych smiertelnych zagrozen.',
  },
  {
    question: 'Ktora planeta ma najbardziej sprzyjajaca przetrwaniu atmosfere?',
    answer: 'Wsrod celow w Ukladzie Slonecznym, Ziemia na duzej wysokosci (Everest) jest najbardziej sprzyjajaca przetrwaniu, choc wciaz niebezpieczna bez aklimatyzacji. Tytan jest najmniej wrogim z pozostalych opcji, poniewaz jego cisnienie jest mozliwe do opanowania, ale brakuje mu tlenu i jest kriogenicznie zimny. Zadna planeta ani ksiezyc poza Ziemia nie ma atmosfery nadajacej sie do oddychania.',
  },
  {
    question: 'Czy Wenus jest gorsza z powodu ciepla czy cisnienia?',
    answer: 'Oba sa ekstremalne na powierzchni. Wenus ma miazdzace cisnienie (92 razy wieksze niz Ziemi) i temperature powierzchni wyzsza niz w piekarniku kuchennym. Te zagrozenia dzialaja razem, wiec narzedzie oznacza oba jako bezposrednie dominujace zagrozenia.',
  },
  {
    question: 'Dlaczego Tytan ma dluzszy szacowany czas przetrwania niz Mars?',
    answer: 'Tytan ma gesta atmosfere, wiec samo cisnienie nie jest bezposrednim problemem. Czas przetrwania jest ograniczony przez ekstremalne zimno (okolo -180°C) i calkowity brak tlenu. Mars zawodzi na cisnieniu, Tytan zawodzi na temperaturze.',
  },
  {
    question: 'Jakie sa glowne przyczyny smierci w kosmosie bez skafandra?',
    answer: 'Najszybszymi zabojcami sa ekspozycja na proznie (utrata cisnienia powodujaca ebullizm i hipoksje w ciagu sekund), nastepnie ekstremalna temperatura, toksyczny sklad gazu i utrata ciepla spowodowana wiatrem. Kalkulator sledzi wszystkie szesc kategorii zagrozen.',
  },
  {
    question: 'Czy to narzedzie nadaje sie do planowania misji kosmicznych?',
    answer: 'Nie. Jest to model edukacyjny wykorzystujacy uproszczone progi biologiczne. Rzeczywista analiza dekompresji, hipoksji, toksycznych gazow, urazow termicznych i ryzyka misji wymaga specjalistycznej oceny medycznej i inzynieryjnej dla bezpieczenstwa.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Mapa ryzyka atmosferycznego',
    timeline: 'Osi czasu ryzyka biologicznego',
    controls: 'Sterowanie atmosfera',
    destination: 'Cel',
    pressure: 'Cisnienie',
    temperature: 'Temperatura',
    oxygen: 'Tlen',
    co2: 'Dwutlenek wegla',
    limitingFactor: 'Czynnik ograniczajacy',
    verdict: 'Werdykt',
    exposureSummary: 'Podsumowanie ekspozycji',
    atmosphericModel: 'Model ekspozycji atmosferycznej',
    survivalEnvelope: 'otulina przetrwania',
    survival: 'Przetrwanie',
    mode: 'Tryb',
    metric: 'Metryczny',
    imperial: 'Imperialny',
    unitSystem: 'System jednostek',
    vitalStress: 'stres życiowy',
    timeLabel: 'czas',
    estimatedSurvival: 'szacowane przetrwanie',
    hazardPressure: 'Ciśnienie',
    hazardTemperature: 'Temperatura',
    hazardOxygen: 'Tlen',
    hazardToxicity: 'Toksyczność',
    hazardWind: 'Wiatr',
    presetMars: 'Mars',
    presetVenus: 'Powierzchnia Wenus',
    presetTitan: 'Tytan',
    presetJupiter: 'Warstwa chmur Jowisza',
    presetEverest: 'Ziemia, szczyt Everestu',
    noteMars: 'Prawie próżnia, ekstremalne zimno i prawie żadnego tlenu.',
    noteVenus: 'Miażdżące ciśnienie i żar piekarnika dominują natychmiast.',
    noteTitan: 'Gęste azotowe powietrze, ale śmiertelne zimno i brak tlenu.',
    noteJupiter: 'Atmosfera bogata w wodór, silne zimno i gwałtowne wiatry.',
    noteEverest: 'Możliwe do przeżycia dla trenowanych wspinaczy, ale hipoksja i zimno są poważne.',
    verdictSeconds: 'Sekundy',
    verdictMinutes: 'Minuty',
    verdictHours: 'Godziny',
    verdictExtended: 'Ryzyko długotrwałej ekspozycji',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Przetrwania w Atmosferze Planety: Jak Dlugo Mozesz Przetrwac Bez Skafandra na Marsie, Wenus, Tytanie lub Jowiszu?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gdybys zostal nagle wystawiony na dzialanie atmosfery innej planety bez skafandra, jak dlugo bys przetrwal? Ten kalkulator szacuje czas przetrwania niechronionego czlowieka na Marsie, Wenus, Tytanie, Jowiszu i Evereście, symulujac szesc zagrozen: calkowite cisnienie, dostepnosc tlenu, temperature, stezenie dwutlenku wegla, chemie toksyczna i naprezenia wiatrowe. Odpowiada na pytania, ktore entuzjasci kosmosu i studenci zadaja najczesciej: ktora planeta zabija najszybciej, ktore zagrozenie jest prawdziwym zagrozenim i czego potrzebujesz, aby przetrwac.',
    },
    {
      type: 'paragraph',
      html: 'Wynik jest szacunkiem edukacyjnym, a nie liczba do planowania misji. Zostal zaprojektowany, aby pomoc zrozumiec, dlaczego rozne swiaty sa niebezpieczne na bardzo rozne sposoby. Mars zawodzi na cisnieniu i hipoksji w ciagu sekund. Wenus laczy miazdzace cisnienie z cieplem piekarnika. Tytan jest kriogeniczny i nie ma tlenu. Warstwy chmur gazowych olbrzymow dodaja toksyczne sklady i naddzwiekowe wiatry. Kazde srodowisko uczy czegos innego o tym, co czyni Ziemie wyjatkowo nadajaca sie do zamieszkania.',
    },
    {
      type: 'title',
      text: 'Ktora Planeta Ma Najbardziej Sprzyjajaca Przetrwaniu Atmosfere?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wsrod celow w tym kalkulatorze, srodowiska Ziemi na duzej wysokosci (takie jak szczyt Everestu) sa najbardziej sprzyjajace przetrwaniu, choc wciaz niebezpieczne bez przygotowania. Wsrod innych planet, Tytan ma najbardziej wybaczajace cisnienie, ale zawodzi na temperaturze i tlenie. Zadne inne miejsce poza Ziemia nie oferuje obecnie atmosfery nadajacej sie do oddychania. Kalkulator pomaga dokladnie zobaczyc, dlaczego kazdy swiat zawodzi i ktore zagrozenie jako pierwsze przekracza krytyczny prog.',
    },
    {
      type: 'title',
      text: 'Jak Kazde Zagrozenie Wplywa na Cialo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cisnienie (niskie):</strong> ponizej 6,3 kPa plyny ustrojowe moga wrzec (ebullizm). Nawet powyzej, niskie cisnienie zapobiega wchlanianiu tlenu. To najszybszy zabojca w srodowiskach bliskich prozni.',
        '<strong>Cisnienie (wysokie):</strong> ekstremalne cisnienie sciska gazy oddechowe, zwieksza ryzyko narkozy azotowej i moze mechanicznie uszkodzic pluca i zatoki.',
        '<strong>Czastkowe cisnienie tlenu:</strong> oddychajacy tlen zalezy zarowno od procentowej zawartosci gazu, jak i calkowitego cisnienia. Cienka atmosfera moze miec 21% tlenu, a mimo to powodowac hipoksje.',
        '<strong>Temperatura (cieplo):</strong> powyzej okolo 60°C denaturacja bialek i niewydolnosc narzadow zaczynaja sie szybko. Temperatura powierzchni Wenus przekracza 460°C.',
        '<strong>Temperatura (zimno):</strong> ponizej zera, odmrozenia i hipotermia pojawiaja sie szybko. W temperaturach kriogenicznych, takich jak -180°C na Tytanie, zamarzanie tkanki jest niemal natychmiastowe.',
        '<strong>Tok-sycznosc dwutlenku wegla:</strong> CO2 powyzej okolo 5% powoduje zawroty glowy, bol glowy i utrate swiadomosci. Wiele atmosfer planetarnych to glownie CO2.',
        '<strong>Chemia toksyczna:</strong> zwiazki siarki, amoniak, metan i wodr moga byc zerdne, duszace lub chemicznie niebezpieczne.',
        '<strong>Wiatr:</strong> silne wiatry przyspieszaja utrate ciepla przez konwekcje, powoduja ochlodzenie wiatrem, rozrzucaja gruz i moga fizycznie destabilizowac czlowieka.',
      ],
    },
    {
      type: 'title',
      text: 'Mars: Dlaczego Niskie Cisnienie Zabija Przed Czymkolwiek Innym',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mars ma cisnienie powierzchniowe okolo 0,6 kPa, znacznie ponizej granicy Armstronga wynoszacej 6,3 kPa, gdzie woda moze wrzec w temperaturze ciala. Niechroniona ekspozycja spowodowalaby ebullizm, szybka hipoksje i utrate swiadomosci w ciagu 15 sekund. Nawet jesli uwzglednimy zimno (srednio -60°C) i atmosfere bogata w dwutlenek wegla, cisnienie i niedobor tlenu dominuja na osi czasu. Funkcjonalna odziez cisnieniowa i doplyw tlenu to absolutne minimum do przetrwania na Marsie.',
    },
    {
      type: 'title',
      text: 'Wenus: Ekstremalne Cisnienie i Cieplo Dzialajace Razem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Powierzchnia Wenus ma cisnienie 92 atmosfer ziemskich (okolo 9,3 MPa, co odpowiada 900 metrom pod woda) i temperature powierzchni 462°C. Atmosfera sklada sie w 96% z dwutlenku wegla z chmurami kwasu siarkowego. Te zagrozenia dzialaja jednoczesnie, a nie sekwencyjnie: cisnienie miazdzy, cieplo gotuje, a CO2 truje. W tym kalkulatorze Wenus jest jedynym celem, gdzie wiele zagrozen przekracza smiertelny prog niemal w tej samej chwili.',
    },
    {
      type: 'title',
      text: 'Tytan: Najbardziej Przyjazne Cisnienie w Ukladzie Slonecznym Poza Ziemia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ksiezyc Saturna, Tytan, jest niezwykly, poniewaz jego cisnienie powierzchniowe (okolo 147 kPa, czyli 1,45 razy wieksze niz Ziemi) znajduje sie w zakresie, ktory czlowiek moze wytrzymac. Do tej zmiennej nie bylby potrzebny kombinezon cisnieniowy. Jednak Tytan nie ma praktycznie zadnego tlenu, temperature powierzchni -179°C i atmosfere metanowo-azotowa. Kalkulator pokazuje cisnienie jako mozliwe do opanowania, ale temperatura i niedobor tlenu dominuja natychmiast. Tytan przypomina, ze przetrwanie zalezy od calego profilu zagrozen, a nie tylko od jednego pomiaru.',
    },
    {
      type: 'title',
      text: 'Jak Interpretowac Licznik Przetrwania i Mape Ryzyka',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Licznik przetrwania szacuje interwal przed wystapieniem powaznego stresu biologicznego u niechronionej osoby. Etykieta czynnika ograniczajacego okresla, ktore zagrozenie jako pierwsze przekracza krytyczny prog. Promieniste szprychy zagrozen pokazuja wzgledna dotkliwosc kazdego z szesciu sledzonych zagrozen, a wykres osi czasu pokazuje, jak laczne ryzyko narasta w oknie ekspozycji. Te narzedzia wizualne pomagaja zobaczyc na pierwszy rzut oka, dlaczego dane srodowisko jest niebezpieczne i ktory system ochronny mialby najwieksze znaczenie.',
    },
    {
      type: 'table',
      headers: ['Cel', 'Smiertelne zagrozenia', 'Najszybsze zagrozenie', 'Co kombinezon musi naprawic'],
      rows: [
        ['Mars', 'Bliska proznia, hipoksja, zimno, CO2', 'Cisnienie < granica Armstronga', 'Odziez cisnieniowa, tlen, izolacja termiczna'],
        ['Powierzchnia Wenus', 'Miazdzace cisnienie, 462°C cieplo, CO2, kwas siarkowy', 'Cisnienie i cieplo jednoczesnie', 'Ciezkie chlodzenie, kadlub cisnieniowy, aparat oddechowy'],
        ['Tytan', 'Brak tlenu, -179°C zimno, metan', 'Temperatura i hipoksja', 'Doplyw tlenu, ekstremalna ochrona termiczna'],
        ['Warstwa chmur Jowisza', 'Brak tlenu, bogaty w wodr, zimno, silny wiatr', 'Hipoksja i brak gazu do oddychania', 'Uszczelniony uklad oddechowy, kontrola termiczna'],
        ['Szczyt Everestu', 'Hipoksja, zimno, wiatr', 'Czastkowe cisnienie tlenu zbyt niskie', 'Maska tlenowa, odziez zimowa, aklimatyzacja'],
      ],
    },
    {
      type: 'title',
      text: 'Co Byloby Potrzebne, Aby Przetrwac Bez Skafandra?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realistycznie, zadne znane cialo w Ukladzie Slonecznym poza Ziemia nie pozwala na niechronione przetrwanie czlowieka na dluzej niz kilka minut, a wiekszosc zabija w ciagu sekund. Wartosc tego kalkulatora nie polega na znalezieniu bezpiecznej planety, ale na zrozumieniu konkretnych powodow, dla kazde srodowisko jest wrogie. Ta wiedza kieruje edukacja w zakresie nauk planetarnych, projektowaniem siedzib kosmicznych, priorytetami szkolenia astronautow i poszukiwaniem potencjalnie nadajacych sie do zamieszkania egzoplanet, gdzie atmosfera moglaby rzeczywiscie wspierac zycie.',
    },
    {
      type: 'list',
      items: [
        '<strong>Uzyj do nauki:</strong> zobacz, jak zmiana jednej zmiennej, takiej jak podwojenie cisnienia na Marsie, zmienia okno przetrwania.',
        '<strong>Uzyj do porownania:</strong> porownaj, dlaczego Tytan daje wiecej czasu niz Wenus, mimo ze oba sa nie do przezycia.',
        '<strong>Uzyj do dyskusji:</strong> zbadaj, czego potrzebowalaby terraformowana atmosfera, aby osiagnac warunki oddychania.',
        '<strong>Nie uzywaj do prawdziwych decyzji:</strong> kalkulator uzywa uproszczonych progow. Planowanie awaryjne wymaga profesjonalnej medycyny lotniczej.',
      ],
    },
    {
      type: 'title',
      text: 'Wazne Ograniczenia i Cel Edukacyjny',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rzeczywiste przetrwanie zalezy od indywidualnego stanu zdrowia, ubioru, poziomu wysilku, wilgotnosci, promieniowania slonecznego, historii dekompresji, mieszanki gazow oddechowych, czasu ratunku i wielu innych zmiennych. Dane atmosferyczne planet roznia sie rowniez w zaleznosci od wysokosci, pory roku i zrodla pomiaru. To narzedzie wykorzystuje uproszczone progi biologiczne i reprezentatywne dane srodowiskowe do edukacji naukowej. Zostalo zaprojektowane, aby pomoc studentom, nauczycielom, entuzjastom kosmosu i autorom naukowym zrozumiec mieszkalnosc planet, a nie do kierowania rzeczywistymi operacjami kosmicznymi.',
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
