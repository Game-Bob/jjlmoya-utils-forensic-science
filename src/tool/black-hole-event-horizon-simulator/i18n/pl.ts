import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'symulator-horyzontu-zdarzen-czarnej-dziury';
const title = 'Symulator horyzontu zdarzeń czarnej dziury';
const description = 'Badaj horyzont zdarzeń czarnej dziury dzięki interaktywnym obliczeniom masy, odległości orbitalnej, dylatacji czasu, sfery fotonowej, prędkości ucieczki i promienia Schwarzschilda.';

const howTo = [
  {
    name: 'Wybierz masę czarnej dziury',
    text: 'Przesuwaj suwak masy od gwiazdowej czarnej dziury do supermasywnej i obserwuj, jak promień Schwarzschilda skaluje się w czasie rzeczywistym.',
  },
  {
    name: 'Przybliż sondę do horyzontu',
    text: 'Ustaw odległość w jednostkach promienia Schwarzschilda, aby porównać bezpieczną orbitę zewnętrzną, obszar sfery fotonowej oraz krawędź horyzontu zdarzeń.',
  },
  {
    name: 'Badaj efekty relatywistyczne',
    text: 'Sprawdź prędkość ucieczki, grawitacyjną dylatację czasu, przesunięcie ku czerwieni oraz okres orbitalny, aby zrozumieć, dlaczego klasyczna intuicja zawodzi w pobliżu horyzontu.',
  },
  {
    name: 'Porównaj charakterystyczne promienie',
    text: 'Użyj pierścieni prowadzących dla horyzontu zdarzeń, sfery fotonowej i ISCO, aby zrozumieć poszczególne granice wokół nierotującej czarnej dziury.',
  },
];

const faq = [
  {
    question: 'Czym jest horyzont zdarzeń czarnej dziury?',
    answer: 'Horyzont zdarzeń to granica, na której prędkość ucieczki osiąga prędkość światła. Gdy obiekt ją przekroczy, żaden sygnał poruszający się z prędkością światła lub mniejszą nie może powrócić do zewnętrznego wszechświata.',
  },
  {
    question: 'Co oznacza promień Schwarzschilda?',
    answer: 'Promień Schwarzschilda to promień horyzontu zdarzeń dla nierotującej, nienaładowanej czarnej dziury. Rośnie on liniowo wraz z masą, więc podwojenie masy oznacza podwojenie promienia horyzontu.',
  },
  {
    question: 'Czym jest sfera fotonowa?',
    answer: 'Sfera fotonowa to obszar w odległości 1,5 promienia Schwarzschilda, gdzie światło może krążyć wokół czarnej dziury po niestabilnej orbicie. Niewielkie zaburzenia powodują, że fotony albo uciekają na zewnątrz, albo spadają do wewnątrz.',
  },
  {
    question: 'Czym jest ISCO?',
    answer: 'ISCO (ang. Innermost Stable Circular Orbit) to wewnętrzna stabilna orbita kołowa. Dla nierotującej czarnej dziury znajduje się ona w odległości 3 promieni Schwarzschilda (6 promieni grawitacyjnych) i wyznacza ostatnią stabilną orbitę kołową dla cząstek posiadających masę.',
  },
  {
    question: 'Dlaczego dylatacja czasu wzrasta w pobliżu horyzontu?',
    answer: 'W geometrii Schwarzschilda zegary znajdujące się głębiej w polu grawitacyjnym tykają wolniej w porównaniu z zegarami odległych obserwatorów. Wyświetlany współczynnik dąży do zera, gdy sonda zbliża się do horyzontu zdarzeń.',
  },
  {
    question: 'Czy ten symulator może modelować wirującą czarną dziurę?',
    answer: 'Nie. Symulator wykorzystuje rozwiązanie Schwarzschilda, które zakłada brak rotacji i ładunku. Prawdziwe czarne dziury często rotują, co zmienia rozmiar horyzontu, położenie ISCO oraz zachowanie dysku akrecyjnego.',
  },
  {
    question: 'Dlaczego supermasywne czarne dziury są mniej "porywające" na horyzoncie?',
    answer: 'Gradient pływowy na horyzoncie maleje wraz ze wzrostem masy czarnej dziury. Niewielka gwiazdowa czarna dziura może silnie rozciągać obiekty w pobliżu horyzontu, podczas gdy supermasywna czarna dziura może mieć łagodniejszy gradient lokalny na tej granicy.',
  },
  {
    question: 'Czy wizualizacja pokazuje prawdziwy obraz czarnej dziury?',
    answer: 'Jest to diagram edukacyjny, a nie obserwacja oparta na ray-tracingu. Pierścienie i dysk są przeskalowane do uproszczonych wartości promienia Schwarzschilda, aby ułatwić porównywanie stref fizycznych.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Mapa pola horyzontu zdarzeń',
    visualCaption: 'Sonda porusza się w przeskalowanej geometrii Schwarzschilda. Jasne pierścienie prowadzące wyznaczają horyzont, sferę fotonową oraz wewnętrzną stabilną orbitę kołową.',
    controlsTitle: 'Kontrola czarnej dziury',
    eventHorizon: 'Horyzont zdarzeń',
    photonSphere: 'Sfera fotonowa',
    isco: 'ISCO',
    rsLabel: 'Promień Schwarzschilda',
    diameterLabel: 'Średnica',
    timeLabel: 'Dylatacja czasu',
    redshiftLabel: 'Przesunięcie ku czerwieni',
    statusSafe: 'Poza obszarem stabilnej orbity',
    statusPhoton: 'Wewnątrz sfery fotonowej',
    statusInside: 'Na granicy horyzontu',
    diameter: 'Średnica horyzontu',
    lightCrossing: 'Czas przelotu światła',
    timeDilation: 'Tempo zegara względem obserwatora',
    redshift: 'Grawitacyjne przesunięcie ku czerwieni',
    mass: 'Masa czarnej dziury',
    distance: 'Odległość sondy',
    speed: 'Prędkość orbitalna sondy',
    escapeVelocity: 'Prędkość ucieczki',
    orbitalPeriod: 'Okres orbitalny sondy',
    tidalGradient: 'Gradient pływowy',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'mas słonecznych',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 mas słonecznych',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Symulator horyzontu zdarzeń czarnej dziury: promień Schwarzschilda, sfera fotonowa i dylatacja czasu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten symulator horyzontu zdarzeń przekłada kluczowe idee czarnych dziur Schwarzschilda na interaktywny model wizualny. Zmieniaj masę czarnej dziury, przesuwaj sondę i porównuj reakcje horyzontu zdarzeń, sfery fotonowej, ISCO, prędkości ucieczki, grawitacyjnego przesunięcia ku czerwieni oraz dylatacji czasu.',
    },
    {
      type: 'paragraph',
      html: 'Narzędzie stworzono z myślą o studentach astronomii, nauczycielach fizyki i pasjonatach nauki. Wyświetlacz łączy dane liczbowe z diagramem przestrzennym, co pozwala zrozumieć, dlaczego horyzont nie jest materialną powierzchnią, dlaczego fotony mają specjalną, niestabilną orbitę i dlaczego ruch kołowy staje się niestabilny przed osiągnięciem horyzontu.',
    },
    {
      type: 'title',
      text: 'Jak obliczany jest promień horyzontu zdarzeń',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dla nierotującej, nienaładowanej czarnej dziury promień horyzontu zdarzeń to <strong>promień Schwarzschilda</strong>. Oblicza się go jako <strong>Rs = 2GM / c^2</strong>, gdzie G to stała grawitacyjna, M to masa czarnej dziury, a c to prędkość światła. Jedna masa słoneczna odpowiada promieniowi Schwarzschilda około 2.95 kilometra.',
    },
    {
      type: 'paragraph',
      html: 'Ponieważ promień Schwarzschilda skaluje się liniowo z masą, czarna dziura o masie 10 mas słonecznych ma promień około 29.5 kilometra, a czarna dziura o masie 4 milionów mas słonecznych, jak Strzelec A*, ma promień około 11.8 miliona kilometrów. Suwak masy używa skali logarytmicznej, aby przypadki gwiazdowe i supermasywne mogły zmieścić się w tym samym elemencie sterowania.',
    },
    {
      type: 'table',
      headers: ['Region', 'Promień w promieniach Schwarzschilda', 'Znaczenie'],
      rows: [
        ['Horyzont zdarzeń', '1.0 Rs', 'Jednokierunkowa granica, gdzie prędkość ucieczki równa się prędkości światła.'],
        ['Sfera fotonowa', '1.5 Rs', 'Niestabilna orbita kołowa dla światła wokół czarnej dziury Schwarzschilda.'],
        ['ISCO', '3.0 Rs', 'Wewnętrzna stabilna orbita kołowa dla cząstek posiadających masę.'],
        ['Słabe pole', '6 Rs i dalej', 'Grawitacja jest wciąż silna, ale orbity kołowe są łatwiejsze do utrzymania.'],
      ],
    },
    {
      type: 'title',
      text: 'Prędkość ucieczki i dlaczego horyzont jest granicą przyczynową',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Prędkość ucieczki to prędkość, jaką obiekt musi osiągnąć, aby oddalić się na dowolnie dużą odległość bez dodatkowego napędu. W języku newtonowskim prędkość ucieczki na promieniu Schwarzschilda wynosi c. Ogólna teoria względności daje głębszą interpretację: przyszłe stożki świetlne przechylają się do wewnątrz, tak że wszystkie skierowane w przyszłość ścieżki wewnątrz horyzontu prowadzą do mniejszego promienia.',
    },
    {
      type: 'paragraph',
      html: 'Odczyt prędkości ucieczki jest użyteczną intuicją, ale nie należy go traktować jako pełnego opisu relatywistycznego. W pobliżu horyzontu przestrzeń i czas są zakrzywione na tyle silnie, że współrzędne globalne, pomiary lokalne i to, co widzi odległy obserwator, nie są wymienne. Właśnie dlatego wizualny symulator pomaga oddzielić nazwane promienie i ich znaczenia.',
    },
    {
      type: 'title',
      text: 'Dylatacja czasu i grawitacyjne przesunięcie ku czerwieni w pobliżu czarnej dziury',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zegar utrzymywany w stałej odległości na zewnątrz czarnej dziury Schwarzschilda tyka wolniej w porównaniu z odległym obserwatorem. Uproszczony współczynnik pokazany tutaj to <strong>sqrt(1 - Rs / r)</strong>. Przy 3 Rs tempo zegara wynosi około 0.82 tempa odległego. Przy 1.1 Rs spada do około 0.30, co oznacza, że odległy obserwator widzi procesy w pobliżu tego promienia jako znacznie spowolnione.',
    },
    {
      type: 'paragraph',
      html: 'Grawitacyjne przesunięcie ku czerwieni wynika z tej samej geometrii. Światło wydostające się ze studni grawitacyjnej traci energię, więc jego długość fali się wydłuża. Wyświetlane przesunięcie ku czerwieni szybko rośnie w pobliżu horyzontu, co jest jednym z powodów, dla których dyski akrecyjne i emisja w pobliżu horyzontu wymagają modelowania relatywistycznego, a nie zwykłej mechaniki orbitalnej.',
    },
    {
      type: 'title',
      text: 'Sfera fotonowa i ISCO: wyjaśnienie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sfera fotonowa w odległości 1.5 Rs to obszar, w którym światło może w zasadzie poruszać się po orbicie kołowej wokół czarnej dziury Schwarzschilda. Orbita jest niestabilna: niewielkie zaburzenie na zewnątrz pozwala fotonowi uciec, a niewielkie zaburzenie do wewnątrz wysyła go w kierunku horyzontu. Obszar ten kształtuje silne soczewkowanie grawitacyjne i przyczynia się do struktury jasnego pierścienia widocznego na obrazach czarnych dziur.',
    },
    {
      type: 'paragraph',
      html: 'ISCO w odległości 3 Rs to wewnętrzna stabilna orbita kołowa dla cząstek posiadających masę wokół nierotującej czarnej dziury. Wewnątrz ISCO orbity kołowe wymagają wyidealizowanych warunków i nie są stabilne wobec małych zaburzeń. W teorii dysków akrecyjnych ISCO pomaga wyznaczyć wewnętrzną krawędź najjaśniejszej emisji dysku dla prostych modeli czarnych dziur.',
    },
    {
      type: 'title',
      text: 'Gwiazdowe a supermasywne czarne dziury',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zaskakującą lekcją jest to, że większe czarne dziury mogą być mniej niszczące na horyzoncie. Promień rośnie wprost proporcjonalnie do masy, ale gradient pływowy w pobliżu horyzontu maleje dla większej masy. Gwiazdowa czarna dziura może powodować ekstremalne rozciąganie na odległościach ludzkiej skali w pobliżu horyzontu. Supermasywna czarna dziura może mieć tak duży horyzont, że lokalny gradient pływowy na jego granicy jest znacznie mniejszy.',
    },
    {
      type: 'paragraph',
      html: 'Symulator zawiera odczyt gradientu pływowego w ziemskich jednostkach g na metr. Jest to uproszczone oszacowanie gradientu radialnego, ale pomaga zrozumieć, dlaczego zjawisko "spaghetyfikacji na horyzoncie" silnie zależy od masy. Horyzont zdarzeń jest granicą przyczynową, a nie zawsze miejscem, w którym siły pływowe stają się śmiertelne.',
    },
    {
      type: 'title',
      text: 'Ograniczenia tego symulatora czarnej dziury',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Brak rotacji:</strong> narzędzie wykorzystuje geometrię Schwarzschilda. Czarna dziura Kerra pociąga za sobą porywanie układów inercjalnych, posiada ergosferę i zależne od rotacji promienie ISCO.',
        '<strong>Brak fizyki akrecji:</strong> świecący dysk jest warstwą prowadzącą, a nie symulacją plazmy z temperaturą, nieprzezroczystością, polami magnetycznymi czy efektem Dopplera.',
        '<strong>Brak ray tracingu:</strong> diagram jest skalowany do celów edukacyjnych. Nie odwzorowuje dokładnego wzoru soczewkowania, który zaobserwowałaby kamera w pobliżu czarnej dziury.',
        '<strong>Brak widoku współrzędnych spadającego obserwatora:</strong> współczynnik dylatacji czasu opisuje nieruchomy zegar na zewnątrz horyzontu w porównaniu z odległym obserwatorem. Swobodny spadek doświadcza geometrii inaczej.',
      ],
    },
    {
      type: 'title',
      text: 'Przydatne eksperymenty dydaktyczne',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Skaluj centrum Drogi Mlecznej:</strong> ustaw masę na około 4 miliony mas słonecznych i porównaj średnicę horyzontu ze skalami orbit planetarnych.',
        '<strong>Znajdź sferę fotonową:</strong> przesuń suwak odległości do 1.5 Rs i zwróć uwagę, jak blisko jest horyzontu zdarzeń w porównaniu z ISCO przy 3 Rs.',
        '<strong>Porównaj gradienty pływowe:</strong> ustaw 10 mas słonecznych, następnie 1 miliard mas słonecznych, utrzymując sondę w pobliżu 1.1 Rs. Promień horyzontu ogromnie rośnie, podczas gdy lokalny gradient pływowy maleje.',
        '<strong>Śledź spowolnienie zegara:</strong> przesuń się od 10 Rs do 1.02 Rs i obserwuj, jak współczynnik dylatacji czasu dąży do zera.',
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