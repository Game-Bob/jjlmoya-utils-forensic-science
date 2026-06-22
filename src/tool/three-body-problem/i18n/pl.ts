import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'symulator-problemu-trzech-cial';
const title = 'Symulator Problemu Trzech Ciał';
const description = 'Symuluj trzy ciała grawitacyjne na płaszczyźnie dwuwymiarowej z edytowalnymi masami, wektorami prędkości, śladami oraz stabilnymi lub chaotycznymi presetami.';

const howTo = [
  {
    name: 'Wybierz preset orbitalny',
    text: 'Zacznij od orbity w kształcie ósemki jako stabilnego punktu odniesienia, trójkąta Lagrange\'a dla równowagi rotacyjnej lub presetu procy dla widocznie chaotycznego spotkania.',
  },
  {
    name: 'Dostosuj masy i wektory prędkości',
    text: 'Użyj suwaków dla każdego ciała, aby zmienić masę i początkowe składowe prędkości. Małe zmiany mogą zachować wzór, zdeformować go lub całkowicie zniszczyć.',
  },
  {
    name: 'Czytaj diagnostykę',
    text: 'Śledź energię całkowitą, najmniejszą i największą odległość oraz środek masy, aby zrozumieć, czy numeryczna orbita pozostaje związana, czy się rozpada.',
  },
];

const faq = [
  {
    question: 'Czym jest problem trzech ciał?',
    answer: 'Problem trzech ciał bada, jak poruszają się trzy masy, gdy każde ciało przyciąga grawitacyjnie pozostałe dwa. W przeciwieństwie do problemu dwóch ciał nie ma ogólnego równania w formie zamkniętej, które rozwiązywałoby każdą możliwą konfigurację, dlatego większość praktycznych przypadków bada się za pomocą całkowania numerycznego.',
  },
  {
    question: 'Dlaczego orbity trzech ciał są niestabilne?',
    answer: 'Wiele układów trzech ciał jest wrażliwych na warunki początkowe. Niewielka zmiana prędkości, położenia lub masy zmienia czas bliskich spotkań, a te spotkania mogą dramatycznie wymieniać energię. Rezultatem jest układ, który może przez pewien czas pozostawać związany, a następnie nagle wyrzucić jedno ciało.',
  },
  {
    question: 'Co pokazuje preset w kształcie ósemki?',
    answer: 'Preset w kształcie ósemki to słynne okresowe rozwiązanie dla trzech równych mas. Każde ciało podąża tą samą ścieżką z przesunięciem fazowym, pokazując, że problem trzech ciał może zawierać eleganckie stabilne wyspy w znacznie większym chaotycznym krajobrazie.',
  },
  {
    question: 'Czy to jest fizycznie dokładny symulator astronomiczny?',
    answer: 'To narzędzie używa złagodzonego modelu newtonowskiego i symplektycznego kroku Verleta prędkości, aby ruch był wierny i stabilny do nauki. Jest przeznaczone do interaktywnej eksploracji, a nie do przewidywania efemeryd z wysoką precyzją.',
  },
  {
    question: 'Jak interpretować energię całkowitą?',
    answer: 'Ujemna energia całkowita zwykle wskazuje na układ związany, podczas gdy energia bliska zera może ułatwić ucieczkę. W symulacji numerycznej duży dryf energetyczny ostrzega również, że krok czasowy lub geometria spotkania obciążają integrator.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Laboratorium chaosu grawitacyjnego',
    canvasLabel: 'Interaktywne dwuwymiarowe płótno orbity trzech ciał',
    presetsLabel: 'Presety orbitalne',
    figureEightPreset: 'Ósemka',
    lagrangePreset: 'Trójkąt Lagrange\'a',
    slingshotPreset: 'Proca',
    pauseButton: 'Pauza',
    playButton: 'Odtwórz',
    resetButton: 'Resetuj',
    speedLabel: 'Prędkość symulacji',
    trailLabel: 'Długość śladu',
    massLabel: 'Masa',
    velocityXLabel: 'Prędkość X',
    velocityYLabel: 'Prędkość Y',
    energyLabel: 'Energia całkowita',
    separationLabel: 'Zakres odległości',
    centerMassLabel: 'Środek masy',
  },
  seo: [
    {
      type: 'title',
      text: 'Interaktywny symulator problemu trzech ciał dla chaosu orbitalnego',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Problem trzech ciał jest jednym z najjaśniejszych dowodów na to, że proste prawa mogą wytwarzać skomplikowany ruch. Grawitacja newtonowska daje zwartą regułę siły, ale gdy trzeci masywny ciało dołącza do układu, każda orbita nieustannie przekształca pozostałe dwie. Ten symulator pozwala bezpośrednio eksperymentować z tą niestabilnością: wybierz znaną konfigurację, dostosuj masy i wektory prędkości i obserwuj, czy ciała tworzą powtarzającą się orbitę, wirujący trójkąt czy chaotyczne zdarzenie rozpraszania.',
    },
    {
      type: 'title',
      text: 'Co pokazują presety',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Preset', 'Idea fizyczna', 'Na co zwrócić uwagę'],
      rows: [
        ['<strong>Ósemka</strong>', 'Okresowe rozwiązanie o równych masach, w którym wszystkie trzy ciała dzielą tę samą pętlę.', 'Orbita pozostaje zorganizowana tylko wtedy, gdy symetria i równowaga prędkości są starannie zachowane.'],
        ['<strong>Trójkąt Lagrange\'a</strong>', 'Trzy ciała zajmują trójkąt równoboczny obracający się wokół środka masy.', 'Równowaga mas i prędkość styczna zapobiegają zapadaniu się trójkąta do wewnątrz.'],
        ['<strong>Proca</strong>', 'Bliskie spotkanie przenosi energię między ciałami.', 'Jedno ciało może zyskać prędkość, podczas gdy drugie staje się silniej związane, ujawniając, dlaczego dochodzi do chaotycznych wyrzutów.'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego małe zmiany mają znaczenie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W orbicie dwóch ciał środek masy i elipsa orbitalna zapewniają stabilny obraz geometryczny. W układzie trzech ciał bliskie przeloty działają jak grawitacyjne negocjacje: ciało może pożyczyć energię orbitalną, gwałtownie zmienić kierunek lub przekształcić uporządkowaną pętlę w zdarzenie rozpraszania. Ta wrażliwość jest powodem, dla którego rzeczywiste układy astrofizyczne, takie jak gwiazdy potrójne, spotkania planeta-księżyc i planetozymale wczesnego Układu Słonecznego, często wymagają całkowania numerycznego zamiast jednego prostego wzoru.',
    },
    {
      type: 'title',
      text: 'Jak korzystać z diagnostyki',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Energia całkowita</strong> pomaga ocenić, czy układ jest związany i czy całkowanie numeryczne pozostaje stabilne.',
        '<strong>Zakres odległości</strong> pokazuje najbliższe i najdalsze odległości par, ułatwiając dostrzeżenie prawie zderzeń i wyrzutów.',
        '<strong>Środek masy</strong> powinien pozostać względnie stabilny, gdy początkowy pęd jest zrównoważony; dryf sugeruje celowo asymetryczną konfigurację lub zmieniony wektor prędkości.',
        '<strong>Długość śladu</strong> ujawnia długoterminową strukturę: krótkie ślady podkreślają bieżącą interakcję, podczas gdy długie odsłaniają powtarzające się pętle i powolną precesję orbitalną.',
      ],
    },
    {
      type: 'title',
      text: 'Model numeryczny użyty w narzędziu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Symulator wykorzystuje newtonowskie przyciąganie odwrotności kwadratu z małym członem wygładzającym, który zapobiega wizualnym eksplozjom podczas ekstremalnie bliskich przelotów. Ruch jest realizowany krokiem Verleta prędkości, powszechnym wyborem w demonstracjach orbitalnych, ponieważ lepiej radzi sobie z zachowaniem energii niż prosta aktualizacja Eulera. Rezultatem jest responsywny model edukacyjny, który uwidacznia jakościowe zachowanie problemu trzech ciał, nie udając profesjonalnego oprogramowania do mechaniki nieba.',
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
