import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'detektor-biosygnatur-egzoplanet';
const title = 'Detektor Biosygnatur Egzoplanet';
const description = 'Dopasuj linie absorpcyjne tlenu, metanu i ozonu w symulowanym widmie transmisyjnym egzoplanety. Oceń biologiczną zamieszkiwalność, ryzyko wystąpienia technosygnatur oraz prawdopodobieństwo wyników fałszywie pozytywnych na podstawie danych widmowych.';

const howTo = [
  {
    name: 'Wybierz gwiazdę macierzystą',
    text: 'Wybierz karła typu K, gwiazdę podobną do Słońca lub karła typu M. Rodzaj gwiazdy wpływa na ryzyko wyników fałszywie pozytywnych, ponieważ poziom promieniowania UV, aktywność rozbłyskowa oraz fotochemia atmosferyczna istotnie zmieniają interpretację sygnałów tlenu i ozonu.',
  },
  {
    name: 'Dopasuj linie widmowe',
    text: 'Przesuwaj kontrolki tlenu, metanu i ozonu, aż zaobserwowane znaczniki absorpcyjne idealnie pokryją się z pasmami referencyjnymi w symulowanym widmie.',
  },
  {
    name: 'Ustaw szum i kontekst atmosferyczny',
    text: 'Zwiększ szum instrumentu, aby sprawdzić, jak spada pewność pomiaru. Dostosuj zawartość pary wodnej i dwutlenku węgla, aby zasymulować warunki wilgotne, suche, gęste lub chemicznie skomplikowane.',
  },
  {
    name: 'Odczytaj wskaźniki zamieszkiwalności',
    text: 'Porównaj odczyty biologiczne, technologiczne oraz ryzyko błędów. Pamiętaj, że przekonujący dowód wymaga obecności wielu gazów w stanie nierównowagi chemicznej, a nie tylko jednej odizolowanej linii widmowej.',
  },
];

const faq = [
  {
    question: 'Czym jest biosygnatura w spektroskopii egzoplanet?',
    answer: 'Biosygnatura to cecha możliwa do zdalnego wykrycia, która może wskazywać na procesy biologiczne. W widmach atmosferycznych najczęściej analizuje się tlen, ozon, metan, parę wodną oraz kombinacje gazów, które powinny ze sobą reagować, chyba że są stale uzupełniane przez żywe organizmy.',
  },
  {
    question: 'Dlaczego obecność tlenu i metanu jest tak istotna?',
    answer: 'Tlen i metan reagują ze sobą chemicznie. Ich jednoczesna obecność w znaczących stężeniach sugeruje, że atmosfera znajduje się w stanie nierównowagi chemicznej, jest to znacznie silniejszy sygnał potencjalnego życia niż obecność któregokolwiek z tych gazów w izolacji.',
  },
  {
    question: 'Czy tlen może dawać wynik fałszywie pozytywny?',
    answer: 'Tak. Tlen może gromadzić się w atmosferze bez udziału życia, np. w wyniku utraty wody (fotoliza), wulkanizmu czy nietypowego promieniowania UV gwiazdy. Dlatego narzędzie to raportuje ryzyko błędnej interpretacji, zamiast traktować tlen jako dowód ostateczny.',
  },
  {
    question: 'Dlaczego ozon jest traktowany oddzielnie od tlenu?',
    answer: 'Ozon powstaje w wyniku fotochemicznych reakcji tlenu i ma silne, charakterystyczne cechy widmowe. Jest użytecznym wskaźnikiem pośrednim, szczególnie gdy bezpośrednie pasma tlenu są trudne do zaobserwowania, jednak wymaga precyzyjnej analizy kontekstu atmosferycznego.',
  },
  {
    question: 'Co oznacza wskaźnik technologiczny?',
    answer: 'Wskaźnik technologiczny to ostrzeżenie dla przypadków, w których widmo jest na tyle nietypowe, zaszumione lub energetyczne, że nie można wykluczyć źródeł sztucznych (technosygnatur). Nie jest to stwierdzenie odkrycia, lecz sygnał do dalszych, szczegółowych badań.',
  },
  {
    question: 'Czy ten model analizy jest używany w prawdziwych badaniach?',
    answer: 'Nie. Jest to symulator edukacyjny, który upraszcza koncepcje spektroskopii do modelu interaktywnego. Prawdziwe analizy naukowe opierają się na zaawansowanym transferze promieniowania, modelach chmur, korektach zanieczyszczeń gwiazdowych i złożonym wnioskowaniu bayesowskim.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Wizualizacja widma transmisyjnego egzoplanety',
    starClass: 'Gwiazda macierzysta',
    starK: 'Spokojny karzeł typu K',
    starSun: 'Gwiazda typu G (podobna do Słońca)',
    starM: 'Aktywny karzeł typu M',
    noise: 'Szum instrumentu',
    oxygenLine: 'Znacznik tlenu',
    methaneLine: 'Znacznik metanu',
    ozoneLine: 'Znacznik ozonu',
    waterVapor: 'Kontekst pary wodnej',
    carbonDioxide: 'Kontekst CO2',
    habitabilityIndex: 'Wskaźnik zamieszkiwalności',
    biologicalIndex: 'Biologiczny',
    technologicalIndex: 'Technologiczny',
    falsePositiveRisk: 'Ryzyko fałszywie pozytywne',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Podsumowanie',
    dataLive: 'Synteza danych w czasie rzeczywistym',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Dopasuj znaczniki widmowe, aby ocenić skład atmosfery.',
    verdictWeak: 'Widmo jest słabe: dane nie wspierają interpretacji wskazującej na życie.',
    verdictPromising: 'Widmo jest obiecujące: wiele znaczników biosygnatur częściowo się pokrywa.',
    verdictStrong: 'Widmo jest silne: tlen, metan i ozon tworzą spójny sygnał nierównowagi chemicznej.',
    verdictAmbiguous: 'Sygnał jest interesujący, ale niejednoznaczny: wysokie ryzyko błędów (np. przez aktywność gwiazdy).',
  },
  seo: [
    { type: 'title', text: 'Detektor Biosygnatur Egzoplanet', level: 2 },
    {
      type: 'paragraph',
      html: 'Detektor biosygnatur egzoplanet to interaktywny symulator spektroskopowy, który pozwala zrozumieć, jak gazy związane z życiem manifestują się w świetle przenikającym przez obcą atmosferę. Zamiast zero-jedynkowego podejścia, narzędzie wymaga dopasowania charakterystyk tlenu, metanu i ozonu, a następnie waży wynik w oparciu o szum, zawartość pary wodnej i CO2 oraz charakterystykę gwiazdy macierzystej.',
    },
    {
      type: 'paragraph',
      html: 'To właśnie trudność nauki o biosygnaturach: każdy gaz z osobna może być fascynujący, ale żaden nie stanowi dowodu. Najsilniejsze argumenty łączą wiele gazów, kontekst fizyczny i wykluczenie procesów abiotycznych. Ten symulator wizualizuje te wyzwania w przystępnym interfejsie.',
    },
    { type: 'title', text: 'Jak spektroskopia transmisyjna odkrywa skład atmosfery', level: 3 },
    {
      type: 'paragraph',
      html: 'Podczas tranzytu planety, część światła gwiazdy przechodzi przez jej atmosferę, gdzie cząsteczki pochłaniają konkretne długości fal. Pozostawia to "ślady" (absorpcje) w widmie. Astronomowie porównują te dane z wzorcami laboratoryjnymi, aby zidentyfikować skład gazowy, przy czym analizę utrudniają chmury, aerozole, temperatura i szum instrumentów.',
    },
    { type: 'title', text: 'Tlen, metan i ozon, synergia sygnałów', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Tlen (O2):</strong> Na Ziemi utrzymywany przez fotosyntezę, ale w innych warunkach może gromadzić się bez udziału biologii.',
        '<strong>Metan (CH4):</strong> Może mieć źródła biologiczne, geologiczne lub być efektem impaktów. Najbardziej sugestywny w towarzystwie gazów utleniających.',
        '<strong>Ozon (O3):</strong> Fotochemiczny produkt tlenu; często łatwiejszy do wykrycia, stanowiący pośrednią wskazówkę.',
        '<strong>Woda i CO2:</strong> Woda wspiera zamieszkiwalność, a CO2 pozwala zrozumieć efekt cieplarniany i wykluczyć błędne interpretacje.',
      ],
    },
    { type: 'title', text: 'Dlaczego analiza wyników fałszywie pozytywnych jest kluczowa', level: 3 },
    {
      type: 'paragraph',
      html: 'Wysoka zawartość tlenu to nie zawsze życie. Procesy niebiologiczne, jak fotoliza wody przez promieniowanie UV gwiazdy, mogą imitować biosygnatury. Szczególnie trudne są aktywne karły typu M, których rozbłyski zmieniają skład chemiczny atmosfery. Symulator podnosi wskaźnik ryzyka, gdy biologiczne wyjaśnienie danych staje się mniej wiarygodne.',
    },
    {
      type: 'table',
      headers: ['Układ sygnałów', 'Interpretacja', 'Uwagi'],
      rows: [
        ['Tylko O2', 'Potencjalnie bogata w tlen atmosfera', 'Możliwy proces abiotyczny (utrata wody)'],
        ['Tylko CH4', 'Atmosfera redukująca lub aktywna geologia', 'Słaby dowód na życie'],
        ['O2 + CH4', 'Nierównowaga chemiczna', 'Wymaga zaawansowanej analizy i kontroli zanieczyszczeń'],
        ['O2 + O3 + woda', 'Kontekst zbliżony do ziemskiego', 'Chmury i aktywność gwiazdy pozostają krytyczne'],
      ],
    },
    { type: 'title', text: 'Wskaźniki biologiczne i technologiczne', level: 3 },
    {
      type: 'paragraph',
      html: 'Wskaźnik biologiczny skupia się na nierównowadze chemicznej (O2 + CH4). Wskaźnik technologiczny jest bardziej spekulatywny i zwraca uwagę na przypadki, w których atmosfera wykazuje nietypowe parametry sugerujące zanieczyszczenia przemysłowe, celową modyfikację lub artefakty obserwacyjne.',
    },
    {
      type: 'paragraph',
      html: 'Używaj tego narzędzia do ćwiczenia logicznego wnioskowania. Profesjonalne badania wymagają wielomodelowej analizy atmosfery, korekt systematycznych oraz rygorystycznego rachunku niepewności. Wartość tego symulatora polega na wymuszeniu dyscypliny: dopasuj dane, sprawdź kontekst i zawsze miej na uwadze ryzyko błędów.',
    },
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
