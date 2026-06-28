import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'analizator-pochodzenia-plam-krwi';
const title = 'Trójwymiarowy analizator pochodzenia plam krwi';
const description = 'Modeluj eliptyczne plamy krwi na płaszczyźnie pionowej, szacuj kąty uderzenia i wizualizuj rzutowane trajektorie w interaktywnej scenie 3D.';

const howTo = [
  { name: 'Wprowadź lub dostosuj plamy', text: 'Użyj tabeli lub powierzchni 2D, aby zdefiniować pozycję, szerokość, długość i orientację osi długiej każdej plamy.' },
  { name: 'Sprawdź kąty uderzenia', text: 'Kalkulator szacuje kąt uderzenia na podstawie stosunku szerokości do długości za pomocą funkcji arcus sinus.' },
  { name: 'Zbadaj konwergencję 3D', text: 'Obróć rzutnię, aby porównać rzutowane trajektorie i szacowaną sferę źródła.' },
  { name: 'Zweryfikuj niepewność', text: 'Użyj wartości rozrzutu jako praktycznego wskaźnika ostrzegawczego: szerokie rozproszenie linii oznacza, że wyznaczony punkt pochodzenia jest mniej stabilny.' },
];

const faq = [
  { question: 'Czy narzędzie w przeglądarce może określić rzeczywiste źródło krwawienia?', answer: 'Nie. Może uczyć i wstępnie oceniać zależności geometryczne, ale wnioski procesowe wymagają walidowanych metod, dokumentacji miejsca zdarzenia, kalibracji skali oraz kwalifikowanej analizy śladów krwawych.' },
  { question: 'Dlaczego kąt uderzenia jest obliczany na podstawie szerokości i długości?', answer: 'Dla idealnej plamy eliptycznej sinus kąta uderzenia jest przybliżany poprzez podział szerokości przez długość. Rzeczywiste plamy mogą być zniekształcone przez teksturę podłoża, spływanie, przeniesienie lub błędy pomiarowe.' },
  { question: 'Co reprezentuje sfera źródła 3D?', answer: 'Jest to szacowany metodą najmniejszych kwadratów obszar konwergencji rzutowanych linii trajektorii, a nie gwarantowany punktowy punkt źródłowy.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Metryczne',
    imperial: 'Imperialne',
    unitsLabel: 'Jednostki',
    addStain: 'Dodaj plamę',
    reset: 'Resetuj',
    surface: 'Powierzchnia uderzenia',
    viewport3dLabel: 'Rzutnia trajektorii 3D',
    stainLabel: 'Plama',
    table: 'Pomiary',
    origin: 'Szacowane źródło',
    spread: 'Rozrzut linii',
    confidence: 'Pewność',
    impact: 'Kąt uderzenia',
    high: 'Wysoka',
    medium: 'Średnia',
    low: 'Niska',
    x: 'X',
    y: 'Y',
    width: 'Szerokość',
    length: 'Długość',
    rotation: 'Obrót',
    remove: 'Usuń',
    cm: 'cm',
    inch: 'cale',
    degree: 'stopnie',
    rotateHint: 'Przeciągnij widok 3D, aby obrócić rekonstrukcję.',
    disclaimer: 'Rekonstrukcja wyłącznie do celów edukacyjnych. Interpretuj na podstawie walidowanych pomiarów miejsca zdarzenia i udokumentowanej niepewności.',
  },
  seo: [
    { type: 'title', text: 'Jak działa trójwymiarowy analizator pochodzenia plam krwi', level: 2 },
    { type: 'paragraph', html: 'Analizator pochodzenia plam krwi pomaga użytkownikom zbadać jedno z kluczowych pytań geometrycznych w analizie śladów krwawych: <strong>gdzie w przestrzeni mogło znajdować się źródło krwi, gdy krople uderzyły w powierzchnię?</strong> Narzędzie to modeluje plamy jako elipsy na płaszczyźnie pionowej, oblicza kąt uderzenia na podstawie stosunku szerokości do długości każdej z nich, rzutuje trajektorie wstecz w scenie 3D i szacuje praktyczny obszar konwergencji.' },
    { type: 'diagnostic', variant: 'warning', title: 'Ostrzeżenie kryminalistyczne', html: 'Wynik jest pomocą w rekonstrukcji, a nie kategorycznym wnioskiem procesowym. Na rzeczywiste plamy mogą wpływać tekstura podłoża, plamy satelitarne, krzepnięcie, spływanie, wycieranie, przeniesienie, błędy perspektywy oraz niepełna dokumentacja skali.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(W/L)', label: 'Wzór na kąt uderzenia' },
      { value: '3+', label: 'Zalecane niezależne plamy' },
      { value: '3D', label: 'Obszar konwergencji trajektorii' },
    ] },
    { type: 'title', text: 'Wzór na kąt uderzenia', level: 3 },
    { type: 'paragraph', html: 'Dla prostej plamy eliptycznej kąt uderzenia jest powszechnie przybliżany jako <strong>arcsin(szerokość / długość)</strong>. Plama o zmierzonej szerokości 1 cm i długości 2 cm daje zatem kąt uderzenia równy 30 stopni. Ta zależność jest użyteczna, ponieważ pozwala przekształcić płaski ślad w kąt wzniesienia trajektorii, zakłada jednak, że zmierzona plama jest reprezentatywna i nie uległa zniekształceniu.' },
    { type: 'code', ariaLabel: 'Obliczanie kąta uderzenia', code: 'kąt uderzenia = arcsin(szerokość plamy / długość plamy)\nprzykład: arcsin(1 cm / 2 cm) = 30 stopni' },
    { type: 'paragraph', html: 'Jest to częsty cel wyszukiwania kryjący się za zapytaniami takimi jak <em>kalkulator kąta uderzenia plamy krwi</em>, <em>wzór na kąt uderzenia Blutspritzer</em> oraz <em>jak obliczyć trajektorię plam krwi</em>. Istotne jest to, że wzór odpowiada tylko na jedną część rekonstrukcji. Szacuje kąt wzniesienia drogi lotu względem powierzchni uderzenia; sam w sobie nie identyfikuje źródła, mechanizmu, broni ani sekwencji zdarzeń.' },
    { type: 'title', text: 'Jak mierzyć plamy przed wprowadzeniem danych', level: 3 },
    { type: 'paragraph', html: 'Najbardziej użyteczne dane wejściowe pochodzą ze skalibrowanych zdjęć wykonanych prostopadle do powierzchni lub z bezpośrednich pomiarów na miejscu zdarzenia. Mierz główny eliptyczny korpus plamy, a nie plamy satelitarne, ogonki, ślady spływania czy ślady wtórne. Szerokość należy mierzyć wzdłuż osi krótkiej, a długość wzdłuż osi długiej. Obrót powinien być zgodny z kierunkiem osi długiej na płaszczyźnie uderzenia. Niewielkie błędy w długości, szerokości lub orientacji mogą znacznie przesunąć rzutowaną trajektorię po jej rozciągnięciu w przestrzeni 3D.' },
    { type: 'table', headers: ['Jakość pomiaru', 'Prawdopodobny efekt', 'Praktyczne postępowanie'], rows: [
      ['Oś długa jest wyraźna', 'Obrót jest bardziej wiarygodny', 'Użyj widocznej osi długiej i udokumentuj metodę orientacji.'],
      ['Szerokość lub długość zniekształcona', 'Kąt uderzenia może być obarczony błędem', 'Oznacz niepewność i porównaj z sąsiednimi plamami.'],
      ['Mało plam konwerguje', 'Szacowanie źródła staje się niestabilne', 'Dodaj niezależne plamy przed interpretacją źródła w 3D.'],
      ['Brak skali', 'Wszystkie odległości stają się wyłącznie ilustracyjne', 'Nie podawaj rzeczywistych współrzędnych źródła bez kalibracji.'],
    ] },
    { type: 'title', text: 'Odczytywanie konwergencji 3D', level: 3 },
    { type: 'paragraph', html: 'Sfera źródła w tym narzędziu jest obliczana jako punkt leżący najbliżej wszystkich rzutowanych linii trajektorii. Gdy linie przebiegają blisko siebie, wartość rozrzutu jest mała, co zwiększa pewność. Gdy linie się rozchodzą, sfera nadal jest wyświetlana, ale należy ją odczytywać jako słaby kompromis metody najmniejszych kwadratów, a nie precyzyjny punkt źródłowy.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Obszar konwergencji', description: 'Dwuwymiarowy szacunek na płaszczyźnie uderzenia, często używany do zweryfikowania, gdzie krzyżują się kierunki osi długich patrząc na wprost.', points: ['Pomocny przy wstępnej selekcji', 'Sam w sobie nie reprezentuje wysokości pionowej'] },
      { title: 'Obszar lub objętość źródła', description: 'Trójwymiarowy szacunek łączący kierunek na płaszczyźnie z kątem uderzenia w celu rzutowania trajektorii w przestrzeń.', highlight: true, points: ['Wyjaśnia możliwą wysokość źródła', 'Wrażliwy na niepewność pomiaru i kąta'] },
    ] },
    { type: 'paragraph', html: 'Użytkownicy często szukają <em>kalkulatora punktu pochodzenia plam krwi</em> oczekując jednej dokładnej współrzędnej. W praktyce rzetelna interpretacja wymaga ostrożności. Pochodzenie najlepiej rozumieć jako obszar wspierany przez wiele trajektorii. Jeśli wyznaczone linie tworzą wąską wiązkę, model jest spójniejszy. Jeśli przechodzą przez dużą objętość, rekonstrukcja wskazuje, że pomiary, selekcja plam lub założenia wymagają ponownej weryfikacji.' },
    { type: 'title', text: 'Typowe przyczyny braku zbieżności trajektorii', level: 3 },
    { type: 'proscons', title: 'Mocne dane wejściowe vs słabe dane wejściowe', items: [
      { pro: 'Kilka dobrze uformowanych eliptycznych plam z wyraźnymi osiami długimi', con: 'Tylko jedna lub dwie plamy, bądź plamy dobrane pod z góry założoną teorię' },
      { pro: 'Skalibrowane pomiary wykonane prostopadle do powierzchni uderzenia', con: 'Zdjęcia wykonane pod kątem, nieznana skala lub skopiowane zrzuty ekranu' },
      { pro: 'Niezależne plamy pochodzące z tego samego mechanizmu zdarzenia', con: 'Mieszanina śladów skapywania, plam transferowych, śladów wyrzutu, spływania lub wtórnych wzorów uderzenia' },
    ] },
    { type: 'paragraph', html: 'Słaba konwergencja nie oznacza automatycznie błędu narzędzia. Może oznaczać, że plamy nie należą do tego samego wzoru, zdjęcie ma zniekształconą perspektywę, oś długa została źle odczytana, plama nie jest czystą elipsą lub fizyczny przebieg zdarzenia był bardziej skomplikowany niż prosty model źródła punktowego. To cenne informacje. Narzędzie do rekonstrukcji powinno ujawniać rozbieżności, zamiast ukrywać je za pozornie pewną liczbą.' },
    { type: 'title', text: 'Do czego przydaje się to narzędzie', level: 3 },
    { type: 'list', items: [
      '<strong>Używaj wielu plam:</strong> trzy lub więcej niezależne plamy zapewniają bardziej wiarygodne szacowanie konwergencji.',
      '<strong>Obserwuj rozrzut:</strong> wysoki rozrzut ostrzega, że linie nie są zbieżne w przestrzeni 3D.',
      '<strong>Zachowaj skalę:</strong> wartości w centymetrach lub calach muszą pochodzić ze skalibrowanych zdjęć lub pomiarów z miejsca zdarzenia.',
      '<strong>Oddziel edukację od formalnych opinii:</strong> ta wizualizacja jest optymalna do celów dydaktycznych, planowania i objaśniania przed formalną oceną.'
    ] },
    { type: 'card', title: 'Najlepszy schemat pracy', html: 'Zacznij od naniesienia małego zestawu plam o wysokiej jakości. Sprawdź, czy kierunki osi długich w 2D mają sens wizualny. Następnie zbadaj trajektorie 3D, zwróć uwagę na rozrzut i zmieniaj po jednym pomiarze, aby zobaczyć, która plama najbardziej wpływa na rekonstrukcję. Taka analiza wrażliwości jest często bardziej użyteczna niż surowa współrzędna źródła.' },
    { type: 'title', text: 'Kiedy nie należy polegać na szacowaniu źródła plam krwi', level: 3 },
    { type: 'paragraph', html: 'Nie polegaj na prostym szacowaniu źródła, gdy plamy są silnie zniekształcone, powierzchnia uderzenia jest zakrzywiona lub nieregularna, wzór zawiera plamy transferowe lub krew wydmuchaną, powierzchnia uległa przemieszczeniu lub na miejscu zdarzenia brakuje wiarygodnej skali. Podobną ostrożność należy zachować, gdy plamy pochodzą z różnych mechanizmów lub różnych momentów zdarzenia. Estetycznie wyglądająca wizualizacja 3D może wprowadzać w błąd, jeśli wejściowy wzór nie nadaje się do rekonstrukcji geometrycznej.' },
    { type: 'glossary', items: [
      { term: 'Kąt uderzenia', definition: 'Szacowany kąt między tor lotu kropli a powierzchnią uderzenia, zwykle obliczany ze stosunku szerokości do długości eliptycznej plamy.' },
      { term: 'Linia trajektorii', definition: 'Rzutowana linia pokazująca możliwy wsteczny tor lotu kropli od plamy w przestrzeń trójwymiarową.' },
      { term: 'Obszar konwergencji', definition: 'Przybliżony obszar, w którym przecinają się kierunki plam po rzutowaniu na płaszczyznę uderzenia.' },
      { term: 'Obszar źródła', definition: 'Przybliżony trójwymiarowy obszar, z którego mogła pochodzić krew, wyznaczony na podstawie wielu rzutowanych trajektorii.' },
    ] },
    { type: 'summary', title: 'Optymalne zastosowanie', items: [
      'Używaj analizatora do zrozumienia geometrii trajektorii i testowania wrażliwości pomiarów.',
      'Porównaj sferę źródła z wartością rozrzutu przed zaufaniem rekonstrukcji.',
      'Nie traktuj wizualizacji jako samodzielnej opinii kryminalistycznej.',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
