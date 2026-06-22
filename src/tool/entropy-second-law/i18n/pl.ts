import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'symulator-entropii-drugiej-zasady';
const title = 'Symulator entropii i drugiej zasady termodynamiki';
const description = 'Obserwuj, jak gorące i zimne komory cząstek mieszają się, wyrównują i zwiększają entropię dzięki wizualnemu symulatorowi dyfuzji i wykresowi entropii na żywo.';

const howTo = [
  {
    name: 'Ustaw temperatury lewą i prawą',
    text: 'Wybierz chłodniejszą komorę i cieplejszą komorę, aby stworzyć początkową nierównowagę termiczną. Większe różnice ułatwiają dostrzeżenie nieodwracalnego dążenia do równowagi.',
  },
  {
    name: 'Dostosuj otwór bariery',
    text: 'Otwórz lub zwęż przejście między dwiema komorami. Szersze otwarcie pozwala cząstkom i energii dyfundować szybciej, przez co krzywa entropii rośnie gwałtowniej.',
  },
  {
    name: 'Obserwuj pudełko z cząstkami',
    text: 'Niebieskie cząstki reprezentują ruch o niższej energii, a pomarańczowe cząstki ruch o wyższej energii. W miarę narastania kolizji i przecinania się trajektorii, pudełko staje się coraz bardziej wymieszane i mniej uporządkowane.',
  },
  {
    name: 'Odczytaj wykres entropii',
    text: 'Śledź, jak mieszanie przestrzenne i wyrównanie termiczne łączą się w jeden rosnący wskaźnik entropii. Krzywa ma budować intuicję, dlaczego izolowane układy ewoluują w kierunku bardziej prawdopodobnych makrostanów.',
  },
];

const faq = [
  {
    question: 'Dlaczego entropia rośnie w tym symulatorze?',
    answer: 'Stan początkowy jest sztucznie uporządkowany: jedna strona jest chłodniejsza, druga cieplejsza. Gdy bariera umożliwia wymianę, istnieje znacznie więcej mieszanych układów niż rozdzielonych, więc układ naturalnie dąży do przytłaczająco bardziej prawdopodobnego makrostanu.',
  },
  {
    question: 'Czy to dokładnie dowodzi drugiej zasady?',
    answer: 'Nie. Jest to dydaktyczny model cząstek, a nie laboratoryjny kod dynamiki molekularnej. Oddaje on podstawową intuicję stojącą za nieodwracalną dyfuzją i wyrównaniem termicznym, co stanowi intencję wyszukiwania większości użytkowników pytających, dlaczego entropia ma tendencję do wzrostu.',
  },
  {
    question: 'Co oznaczają tutaj entropia przestrzenna i entropia termiczna?',
    answer: 'Entropia przestrzenna mierzy, jak równomiernie cząstki są rozmieszczone między lewą i prawą komorą. Entropia termiczna w tym symulatorze mierzy, jak mała jest luka energetyczna między dwiema połowami. Całkowity wynik łączy obie wartości, aby użytkownicy mogli jednocześnie obserwować mieszanie i przepływ ciepła.',
  },
  {
    question: 'Dlaczego cząstki poruszają się nawet blisko równowagi?',
    answer: 'Równowaga nie oznacza zatrzymania ruchu. Oznacza zniknięcie makroskopowej nierównowagi. Cząsteczki nadal się poruszają, zderzają i wymieniają energię, ale nie ma już trwałego, wielkoskalowego kierunku do wykorzystania.',
  },
  {
    question: 'Czy entropia może kiedykolwiek chwilowo spaść?',
    answer: 'W układach mikroskopowych możliwe są małe fluktuacje. To narzędzie wizualne wygładza te fluktuacje i podkreśla ogólny trend statystyczny: w dużym izolowanym układzie uporządkowane stany o niskiej entropii są znacznie mniej prawdopodobne niż stany mieszane.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Nieodwracalne mieszanie',
    results: 'Wyniki symulatora entropii',
    particleBox: 'Pudełko dyfuzji cząstek',
    barrier: 'Bariera',
    entropyGraph: 'Wykres entropii w czasie',
    liveTrace: 'Ślad na żywo',
    highEntropy: 'wysoka',
    midEntropy: 'średnia',
    lowEntropy: 'niska',
    controls: 'Sterowanie symulatorem entropii',
    leftTemperature: 'Lewa temperatura',
    rightTemperature: 'Prawa temperatura',
    gateAperture: 'Otwór bariery',
    pause: 'Pauza',
    reset: 'Resetuj stan',
    resume: 'Wznów',
    totalEntropy: 'Całkowita entropia',
    particleBalance: 'Cząstki lewo/prawo',
    spatialEntropy: 'Entropia przestrzenna',
    thermalEntropy: 'Entropia termiczna',
    energyGap: 'Luka energetyczna',
    noteLabel: 'Interpretacja',
    stateGradient: 'Gradient',
    stateMixing: 'Mieszanie',
    stateEquilibrium: 'Równowaga',
    note: 'Prawdopodobieństwo makrostanu wskazuje na maksymalny nieład.',
  },
  seo: [
    {
      type: 'title',
      text: 'Symulator entropii dla drugiej zasady termodynamiki i nieodwracalnej dyfuzji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Użyj tego symulatora entropii, aby zwizualizować jedną z najważniejszych idei w fizyce: izolowane układy ewoluują od sztucznie uporządkowanych stanów ku bardziej prawdopodobnym stanom mieszanym. Zamiast czytać statyczną definicję entropii, możesz obserwować, jak gorąca i zimna komora wymieniają cząstki i energię w czasie rzeczywistym, podczas gdy żywa krzywa śledzi wzrost nieładu.',
    },
    {
      type: 'paragraph',
      html: 'To narzędzie zostało zaprojektowane z myślą o najczęstszej intencji wyszukiwania stojącej za pytaniami takimi jak "dlaczego entropia rośnie", "jak działa druga zasada" i "czym jest dyfuzja termiczna". Celem nie jest jedynie podanie hasła o nieładzie, ale połączenie entropii z prawdopodobieństwem, przepływem ciepła, mieszaniem i równowagą w sposób, który staje się natychmiast widoczny.',
    },
    {
      type: 'title',
      text: 'Co druga zasada termodynamiki oznacza w praktyce',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Druga zasada mówi, że w izolowanym układzie procesy spontaniczne zmierzają w kierunku makrostanów o wyższej entropii. W języku potocznym oznacza to, że silnie zorganizowany układ termiczny, taki jak gorące cząstki po jednej stronie i zimne po drugiej, nie pozostaje rozdzielony, chyba że ciągle dostarcza się pracę, aby go utrzymać.',
    },
    {
      type: 'paragraph',
      html: 'Nie dzieje się tak dlatego, że materia "woli chaos" w mistycznym sensie. Dzieje się tak, ponieważ istnieje ogromnie więcej mikroskopowych układów odpowiadających stanowi mieszanemu niż rozdzielonemu. Entropia łączy więc termodynamikę z liczeniem: im większa liczba kompatybilnych mikrostanów, tym większa entropia.',
    },
    {
      type: 'title',
      text: 'Jak działa ten symulator dyfuzji entropii',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pudełko z cząstkami zaczyna w konfiguracji o niskiej entropii z nierównowagą temperaturową po obu stronach bariery. Gdy przejście między komorami jest otwarte, cząstki przecinają je, zderzają się i przenoszą energię z jednej strony na drugą. Symulacja śledzi dwa intuicyjne składniki: <strong>entropię przestrzenną</strong>, która rośnie, gdy cząstki stają się mniej segregowane, oraz <strong>entropię termiczną</strong>, która rośnie, gdy lewy i prawy rozkład energii stają się mniej różne.',
    },
    {
      type: 'paragraph',
      html: 'Całkowity wynik entropii wyświetlany na ekranie jest dydaktycznym zastępstwem zbudowanym z tych dwóch składników. Nie jest to laboratoryjna funkcja stanu i nie twierdzi, że odtwarza pełną mechanikę statystyczną. Jego celem jest pomoc użytkownikom w zbudowaniu prawidłowej intuicji: nieodwracalny przepływ ciepła i dyfuzja oba przesuwają układ w kierunku równowagi, ponieważ równowaga odpowiada znacznie większej liczbie dostępnych układów.',
    },
    {
      type: 'table',
      headers: ['Sygnał wizualny', 'Co reprezentuje', 'Dlaczego to ważne'],
      rows: [
        ['Niebieskie vs pomarańczowe cząstki', 'Względna energia kinetyczna', 'Pokazuje, że różnice temperatur to tak naprawdę różnice w średnim ruchu mikroskopowym.'],
        ['Otwór bariery', 'Łatwość wymiany między komorami', 'Pozwala zobaczyć, dlaczego szybkość dyfuzji zmienia się, gdy zmienia się droga transportu.'],
        ['Licznik entropii przestrzennej', 'Jak równomiernie rozłożone są cząstki', 'Wyjaśnia, że samo mieszanie już czyni makrostan bardziej prawdopodobnym.'],
        ['Licznik entropii termicznej', 'Jak mała staje się lewo-prawa luka energetyczna', 'Pokazuje, że równowaga dotyczy nie tylko położenia, ale także dzielenia się energią.'],
        ['Krzywa entropii', 'Trend w czasie', 'Zamienia abstrakcyjną ideę nieodwracalności w widoczny jednokierunkowy proces relaksacji.'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego entropia może rosnąć, mimo że każda cząstka podlega prostemu ruchowi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Studenci często zakładają, że druga zasada wymaga tarcia, intencji lub specjalnej "siły strzałki czasu". Głębszy punkt jest statystyczny. Każda cząstka podlega lokalnym regułom, ale gdy wiele cząstek oddziałuje, liczba mieszanych makrostanów całkowicie dominuje nad liczbą uporządkowanych makrostanów. Układ spędza więc prawie cały czas w konfiguracjach mieszanych, a tylko niezwykle małą część w starannie rozdzielonych.',
    },
    {
      type: 'paragraph',
      html: 'Dlatego kropla barwnika rozprzestrzenia się w wodzie, dlatego temperatura w pomieszczeniu wyrównuje się po wyłączeniu grzejnika i dlatego gorący przedmiot stygnie w kontakcie z zimniejszym. Odwrotny proces nie jest zabroniony przez ruch newtonowski w ścisłym mikroskopowym sensie, ale jest tak statystycznie mało prawdopodobny dla dużych układów, że w praktyce nigdy nie jest obserwowany w ludzkiej skali.',
    },
    {
      type: 'title',
      text: 'Entropia, równowaga i częste nieporozumienia',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Entropia to nie tylko "nieporządek":</strong> bardziej precyzyjną ideą jest liczba mikroskopowych układów zgodnych z tym samym makroskopowym opisem.',
        '<strong>Równowaga nie oznacza bezruchu:</strong> cząstki poruszają się nieustannie, ale ich wielkoskalowe nierównowagi znoszą się nawzajem.',
        '<strong>Przepływ ciepła jest kierunkowy, ponieważ prawdopodobieństwo jest kierunkowe:</strong> istnieje przytłaczająco więcej sposobów dzielenia energii niż utrzymywania jej ostro rozdzielonej.',
        '<strong>Niska entropia nie jest niemożliwa:</strong> wymaga po prostu ograniczeń, przygotowania lub pracy z zewnątrz izolowanego układu.',
        '<strong>Ten symulator ma charakter jakościowy:</strong> daje fizyczną intuicję, a nie dokładną kalorymetrię, funkcje podziału ani molekularne współczynniki transportu.',
      ],
    },
    {
      type: 'title',
      text: 'Kiedy używać tego symulatora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Używaj go do demonstracji w klasie, powtórek z fizyki, edukacji chemicznej, pisania tekstów naukowych i szybkich wyjaśnień koncepcyjnych. Jest szczególnie przydatny, gdy ktoś rozumie, że ciepło płynie z gorąca do zimna, ale jeszcze nie widzi, jak łączy się to z prawdopodobieństwem, liczeniem makrostanów i drugą zasadą termodynamiki.',
    },
    {
      type: 'paragraph',
      html: 'Jeśli twoim celem są rygorystyczne obliczenia termodynamiczne dla rzeczywistego gazu, cyklu silnika lub układu laboratoryjnego, będziesz potrzebować równań stanu, warunków brzegowych i eksperymentalnie ugruntowanych parametrów. Jeśli twoim celem jest intuicja, dlaczego dyfuzja jest nieodwracalna i dlaczego entropia ma tendencję do wzrostu, ten symulator został zbudowany właśnie dla tego pytania.',
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
