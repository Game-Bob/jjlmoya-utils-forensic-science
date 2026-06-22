import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'symulator-energii-sfery-dysona';
const title = 'Symulator Przechwytywania Energii Sfery Dysona';
const description = 'Oszacuj projekty roju, pierścienia, powłoki i chmury zwierciadeł statytowych Dysona dla różnych gwiazd. Oblicz przechwyconą moc, promień orbity, masę materiału i pokrycie potrzebne do osiągnięcia docelowej skali Kardaszewa.';

const howTo = [
  {
    name: 'Wybierz typ gwiazdy',
    text: 'Zacznij od czerwonego karła, gwiazdy podobnej do Słońca, gwiazdy typu A, czerwonego olbrzyma lub błękitnego olbrzyma. Symulator używa reprezentatywnych wartości jasności i masy do oszacowania promienia kolektora i okresu orbitalnego.',
  },
  {
    name: 'Wybierz architekturę megastruktury',
    text: 'Porównaj rój Dysona, pierścień równikowy, sztywną powłokę lub chmurę zwierciadeł statytowych. Każdy projekt ma inną wydajność przechwytywania, gęstość materiału i założenia dotyczące stabilności.',
  },
  {
    name: 'Ustaw pokrycie i temperaturę roboczą',
    text: 'Zwiększ pokrycie, aby przechwycić więcej mocy gwiazdowej, a następnie dostosuj temperaturę roboczą, aby przybliżyć lub oddalić kolektory od gwiazdy.',
  },
  {
    name: 'Dopasuj cel Kardaszewa',
    text: 'Użyj suwaka celu, aby zobaczyć, jaka część gwiazdy musi być osłonięta, aby osiągnąć cel mocy na skali cywilizacyjnej.',
  },
];

const faq = [
  {
    question: 'Jaka jest różnica między sferą Dysona a rojem Dysona?',
    answer: 'Sztywna sfera Dysona to ciągła powłoka wokół gwiazdy, podczas gdy rój Dysona to duża kolekcja niezależnych kolektorów orbitalnych. Większość dyskusji inżynieryjnych faworyzuje roje, ponieważ stała powłoka byłaby strukturalnie niestabilna i niezwykle materiałochłonna.',
  },
  {
    question: 'Jak symulator wybiera optymalny promień?',
    answer: 'Szacuje odległość, w której kolektory promieniujące z obu stron osiągają wybraną temperaturę roboczą przy wybranej jasności gwiazdowej. Gorętsze kolektory mogą orbitować bliżej, podczas gdy chłodniejsze kolektory wymagają większych promieni.',
  },
  {
    question: 'Co tutaj oznacza ocena Kardaszewa?',
    answer: 'Wartość Kardaszewa jest obliczana z przechwyconej mocy przy użyciu powszechnej formy logarytmicznej K = (log10(P) - 6) / 10, gdzie P to moc w watach. Wartość bliska K1 oznacza użycie energii w skali planetarnej, podczas gdy K2 zbliża się do pełnej mocy gwiazdowej.',
  },
  {
    question: 'Czy masa materiału jest realistyczna?',
    answer: 'Jest to edukacyjne oszacowanie pierwszego rzędu oparte na powierzchni kolektora, gęstości powierzchniowej i współczynniku stabilności. Prawdziwe projekty wymagałyby utrzymania pozycji, transmisji mocy, strat wydobywczych, nadmiarowości, odprowadzania ciepła i infrastruktury produkcyjnej.',
  },
  {
    question: 'Dlaczego jasne gwiazdy wymagają tak dużych systemów kolektorów?',
    answer: 'Gwiazdy o wysokiej jasności wypychają bezpieczny promień termiczny na zewnątrz. To zwiększa powierzchnię potrzebną dla danej frakcji pokrycia, przez co zapotrzebowanie na materiał może rosnąć szybciej, niż intuicyjnie sugeruje przechwycona moc.',
  },
  {
    question: 'Czy cywilizacja może osiągnąć Typ II Kardaszewa z częściowym pokryciem?',
    answer: 'Tak, jeśli gwiazda macierzysta jest wystarczająco jasna, a kolektory wydajne. Wokół gwiazdy podobnej do Słońca, osiągnięcie blisko Typu II wymaga przechwycenia dużej frakcji jasności słonecznej, ale wokół jaśniejszych gwiazd ten sam cel mocy może wymagać niższej frakcji pokrycia.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Wizualizacja kolektora Dysona',
    starType: 'Typ gwiazdy',
    structureType: 'Struktura',
    coverage: 'Pokrycie kolektora',
    operatingTemp: 'Temperatura robocza',
    kardashevTarget: 'Cel Kardaszewa',
    kardashevRating: 'Obecna ocena',
    capturedPower: 'Przechwycona moc',
    optimalRadius: 'Optymalny promień',
    targetCoverage: 'Pokrycie docelowe',
    materialMass: 'Masa materiału',
    captureMeter: 'Postęp w kierunku celu',
    statusReady: 'Dostosuj system, aby oszacować zapotrzebowanie kolektora.',
    statusUnderbuilt: 'Pokrycie jest poniżej wybranego celu Kardaszewa. Dodaj kolektory albo wybierz jaśniejszą gwiazdę.',
    statusBalanced: 'Pokrycie i moc gwiazdy są blisko wybranego celu w skali cywilizacji.',
    statusExtreme: 'Ta konfiguracja przekracza cel. Przechwytuje ogromną moc, ale zapotrzebowanie materiałowe szybko rośnie.',
    orbitalPeriod: 'Okres orbitalny',
    collectorArea: 'Powierzchnia kolektora',
    mercuryMasses: '{value} mas Merkurego',
    kilograms: '{value} kg',
    daysUnit: '{value} dni',
    starMDwarf: 'Czerwony karzeł',
    starSun: 'Gwiazda typu G jak Słońce',
    starA: 'Gwiazda typu A',
    starRedGiant: 'Czerwony olbrzym',
    starBlueGiant: 'Błękitny olbrzym',
    structureSwarm: 'Rój Dysona',
    structureRing: 'Pierścień równikowy',
    structureShell: 'Sztywna powłoka',
    structureStatite: 'Chmura zwierciadeł statytowych',
  },
  seo: [
    { type: 'title', text: 'Symulator Przechwytywania Energii Sfery Dysona', level: 2 },
    { type: 'paragraph', html: 'Sfera Dysona to nie tylko obraz science fiction gwiazdy w powłoce. To rodzina możliwych koncepcji megastruktur do przechwytywania jasności gwiazdowej: roje satelitów, pierścienie równikowe, cienkie chmury zwierciadeł oraz znana, ale problematyczna sztywna powłoka. Ten symulator zamienia te pomysły w liczby, abyś mógł porównać, jak typ gwiazdy, temperatura kolektora, pokrycie i projekt konstrukcji zmieniają budżet energetyczny.' },
    { type: 'paragraph', html: 'Kalkulator szacuje przechwyconą moc, termiczny promień orbity, powierzchnię kolektora, okres orbitalny, masę materiału i pokrycie potrzebne do wybranego celu w skali Kardaszewa. Jest stworzony dla studentów, budowniczych światów, komunikatorów naukowych i wszystkich, którzy próbują zrozumieć, dlaczego cywilizacje Typu II są trudne: wyzwaniem jest nie tylko moc, ale także powierzchnia, ciepło, wydobycie, stabilność i logistyka orbitalna.' },
    { type: 'title', text: 'Jak szacowany jest promień Dysona', level: 3 },
    { type: 'paragraph', html: 'Optymalny promień jest obliczany z jasności gwiazdowej i temperatury roboczej kolektora. Kolektor blisko jasnej gwiazdy otrzymuje intensywny strumień i musi pracować gorąco lub odrzucać ogromne ilości ciepła. Oddalanie się zmniejsza naprężenia termiczne, ale wymagana powierzchnia kolektora rośnie z kwadratem odległości. Ten kompromis wyjaśnia, dlaczego ta sama frakcja pokrycia może być skromna wokół słabego czerwonego karła i ogromna wokół błękitnego olbrzyma.' },
    { type: 'title', text: 'Porównanie Roju Dysona, Pierścienia, Powłoki i Chmury Statytów', level: 3 },
    {
      type: 'list', items: [
        '<strong>Rój Dysona:</strong> wiele niezależnych kolektorów orbitalnych. To najbardziej prawdopodobna architektura na dużą skalę, ponieważ może być budowana stopniowo i nie wymaga sztywnej powłoki gwiazdowej.',
        '<strong>Pierścień równikowy:</strong> węższe pasmo kolektorów z niższą wydajnością pokrycia. Łatwiej wyobrazić go sobie jako pierwszą megastrukturę.',
        '<strong>Sztywna powłoka:</strong> wizualnie ikoniczna, ale mechanicznie niekorzystna. Powłoka wokół gwiazdy ma poważne problemy ze stabilnością i materiałem.',
        '<strong>Chmura zwierciadeł statytowych:</strong> ultralekkie reflektory utrzymywane częściowo przez ciśnienie promieniowania. Zmniejsza zapotrzebowanie na materiał, ale ma niższą tolerancję termiczną i wymagające wymogi kontrolne.'
      ]
    }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};