import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'porownywarka-strychow-sladow-narzedzi-kryminalistyka';
const title = 'Porównywarka strychów i śladów narzędzi kryminalistyczna';
const description = 'Prześlij zdjęcia śladów dowodowych i porównawczych, dopasuj je pod dzielonym mikroskopem porównawczym i zbadaj ciągłość strychowania za pomocą sterowania wizualnego.';

const howTo = [
  {
    name: 'Załaduj zdjęcia do porównania',
    text: 'Prześlij zdjęcie znanego śladu testowego oraz śladu dowodowego ze swoich materiałów sprawy, notatek lub zestawu szkoleniowego.',
  },
  {
    name: 'Przesuń linię podziału porównania',
    text: 'Przeciągnij suwak w wizjerze optycznym, aby odsłonić więcej znanego lub dowodowego śladu, zachowując obie próbki w jednym polu widzenia.',
  },
  {
    name: 'Dostosuj przesunięcie, obrót, powiększenie i kontrast',
    text: 'Użyj mikrometrycznych kontrolek, aby przesunąć i obrócić obraz dowodowy, a następnie dostosuj powiększenie, kontrast i jasność, by widoczne były nawet najdelikatniejsze strychowania.',
  },
  {
    name: 'Eksportuj widok porównania',
    text: 'Gdy dopasowanie wizualne będzie gotowe, wyeksportuj widok w formacie PNG do dyskusji, analizy w klasie lub ilustracji notatek ze sprawy.',
  },
];

const faq = [
  {
    question: 'Czym jest kryminalistyczne porównanie śladów narzędzi?',
    answer: 'Kryminalistyczne porównanie śladów narzędzi bada ślady powstałe, gdy narzędzie styka się, tnie, skrobie, podważa lub uciska inną powierzchnię. Biegli porównują cechy grupowe, jakość śladu oraz mikroskopijne szczegóły strychowania między śladami dowodowymi a znanymi śladami testowymi.',
  },
  {
    question: 'Czy to narzędzie online może zidentyfikować dokładne narzędzie, które pozostawiło ślad?',
    answer: 'Nie. Ten obszar roboczy służy do dopasowania wizualnego i celów edukacyjnych. Nie oblicza przypisania źródła, prawdopodobieństwa, współczynnika błędu ani automatycznej konkluzji kryminalistycznej.',
  },
  {
    question: 'Dlaczego przesunięcie, obrót i powiększenie są ważne przy porównywaniu śladów?',
    answer: 'Niewielkie różnice w kącie narzędzia, nacisku, skali, pozycji aparatu i położeniu bocznym mogą sprawić, że podobne linie strychowania będą wyglądać na niedopasowane. Kontrolki przesunięcia, obrotu i powiększenia pomagają ustawić dwa obrazy w porównywalnej pozycji.',
  },
  {
    question: 'Jakie zdjęcia działają najlepiej do wizualnego dopasowania śladów narzędzi?',
    answer: 'Używaj ostrych, dobrze oświetlonych zdjęć zrobionych jak najbardziej na wprost, z wystarczającym pokryciem obszaru śladu. Unikaj silnego rozmycia, ekstremalnych odblasków, zniekształceń perspektywicznych oraz zdjęć, na których obszar strychowania jest zbyt krótki lub uszkodzony.',
  },
  {
    question: 'Co użytkownik powinien udokumentować po dopasowaniu dwóch zdjęć śladów?',
    answer: 'Udokumentuj źródło każdego obrazu, to czy jest on dowodowy czy porównawczy, użyte ustawienia dopasowania, wszelkie zastosowane korekty obrazu, widoczne obszary zgodności lub niezgodności oraz ograniczenia jakości obrazu.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Widok pod mikroskopem porównawczym strychowania znanych i dowodowych śladów narzędzi',
    splitLabel: 'Przesuń linię podziału',
    units: 'System jednostek przesunięcia',
    metric: 'Metryczny',
    imperial: 'Imperialny',
    toolProfile: 'Profil narzędzia',
    loadImages: '1. Załaduj',
    alignImage: '2. Dopasuj obraz dowodowy',
    adjustImage: '3. Dostosuj widoczność',
    outputControls: 'Kontrola wyjściowa',
    demoOptions: 'Opcje demonstracyjne',
    uploadKnown: 'Obraz znany/testowy',
    uploadQuestioned: 'Obraz dowodowy',
    noFile: 'Nie załadowano obrazu',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Końcówka śrubokręta',
    prybar: 'Krawędź łomu',
    boltCutter: 'Szczęka przecinaka do śrub',
    offset: 'Przesunięcie poziome',
    rotation: 'Obrót kątowy',
    zoom: 'Powiększenie obrazu',
    contrast: 'Kontrast',
    brightness: 'Jasność',
    microns: 'mikrony',
    thousandths: 'tysięczne',
    degrees: 'stopnie',
    correlation: 'Tryb / wynik',
    verdictStrong: 'silne dopasowanie',
    verdictPartial: 'częściowe dopasowanie',
    verdictWeak: 'słabe dopasowanie',
    center: 'Centruj',
    fineTip: 'drobne linie przeciągania',
    wideEdge: 'szerokie tłoczenie',
    crushJaw: 'sparowane grzbiety zgniatania',
    grid: 'Siatka',
    exportImage: 'Eksportuj widok',
    exportFilename: 'widok-porownania-sladow-narzedzi.png',
    phaseFit: 'Dopasowanie fazy',
    rotationFit: 'Dopasowanie rotacji',
    knownMark: 'Znany ślad testowy',
    questionedMark: 'Ślad dowodowy',
    reliefGraph: 'Zdigitalizowany mikrorelief powierzchni',
    visualMode: 'Wizualny',
    visualVerdict: 'porównanie ręczne',
    visualInterpretation: 'Tylko dopasowanie wizualne. Nie jest obliczana automatyczna konkluzja kryminalistyczna.',
    interpMatch: 'Podgląd demonstracyjny. Prześlij obrazy, aby porównać rzeczywiste ślady.',
    interpPossible: 'Podgląd demonstracyjny. Dostosuj dopasowanie lub prześlij obrazy.',
    interpMismatch: 'Podgląd demonstracyjny. Wycentruj ponownie lub prześlij obrazy.',
    disclaimer: 'Tylko wizualny obszar roboczy.',
  },
  seo: [
    {
      type: 'title',
      text: 'Kryminalistyczny mikroskop porównawczy śladów narzędzi online',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Obszar wizualny',
      title: 'Porównaj obrazy dowodowych i znanych śladów narzędzi w swojej przeglądarce',
      html: 'Ten obszar roboczy do porównywania śladów narzędzi umożliwia załadowanie dwóch obrazów, umieszczenie ich pod dzielonym mikroskopem porównawczym i dostosowanie śladu dowodowego, aż linie strychowania, ślady nacisku, zadrapania lub mikroskopijne bruzdy będą mogły być zbadane obok siebie. Jest przeznaczony dla studentów kryminalistyki, instruktorów, śledczych i zespołów prawnych potrzebujących jasnego sposobu na wyjaśnienie <strong>porównania śladów znanych i dowodowych</strong> bez instalowania specjalistycznego oprogramowania mikroskopowego.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 pliki', label: 'obrazy znane i dowodowe', icon: 'mdi:image-plus' },
        { value: 'dzielony widok', label: 'układ mikroskopu porównawczego', icon: 'mdi:compare-horizontal' },
        { value: 'dopasowanie', label: 'kontrola przesunięcia, obrotu i powiększenia', icon: 'mdi:axis-arrow' },
        { value: 'eksport PNG', label: 'zapisanie widoku porównania', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'Kiedy ten obszar roboczy porównania śladów narzędzi jest przydatny',
      items: [
        'Nauczanie, jak mikroskopy porównawcze umieszczają znany ślad testowy obok śladu dowodowego.',
        'Przygotowywanie demonstracji klasowych z rzeczywistymi lub szkoleniowymi obrazami śladów narzędzi.',
        'Wyjaśnianie, jak wyrównanie, skala, obrót, oświetlenie i kontrast wpływają na interpretację strychowania.',
        'Tworzenie czystej ilustracji wizualnej do notatek ze sprawy lub raportów bez deklarowania automatycznej identyfikacji.',
        'Wstępna ocena jakości obrazu przed podjęciem decyzji, czy ślad nadaje się do formalnego porównania laboratoryjnego.',
      ],
    },
    {
      type: 'title',
      text: 'Jak porównywać obrazy śladów narzędzi online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zacznij od załadowania obrazu <strong>znanego śladu testowego</strong> oraz obrazu <strong>śladu dowodowego</strong>. Znany ślad jest zazwyczaj wykonywany w kontrolowanych warunkach za pomocą konkretnego narzędzia. Ślad dowodowy to ślad zabezpieczony na miejscu zdarzenia, obiekcie, ościeżnicy drzwi, zamku czy innym elemencie, którego pochodzenie jest nieznane. Celem obszaru roboczego nie jest automatyczne decydowanie o tożsamości; celem jest ustawienie obu obrazów w użytecznej relacji wizualnej, tak aby użytkownik mógł zbadać ciągłość i rozbieżności.',
    },
    {
      type: 'paragraph',
      html: 'Po załadowaniu obu obrazów użyj suwaka podziału, aby odsłonić więcej lub mniej z każdej strony. Dostosuj przesunięcie poziome, aby zsynchronizować fazy linii strychowania, a następnie obróć obraz dowodowy, aby skompensować kąt aparatu lub narzędzia. Powiększenie pomaga, gdy oba zdjęcia zostały zrobione w różnych skalach. Kontrast i jasność ułatwiają dostrzeżenie słabych zarysowań lub płytkich śladów, ale modyfikacje te należy udokumentować, ponieważ zmieniają one wyświetlany wygląd obrazu.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Co obszar roboczy pomaga zaobserwować',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Dobry układ z dzielonym widokiem ułatwia sprawdzenie, czy dwa ślady mają porównywalną strukturę wizualną po starannym dopasowaniu.',
          points: ['Podobny kierunek grzbietów lub strychowania', 'Ciągłość w obrębie kilku sąsiednich szczegółów', 'Różnice skali i obrotu wymagające korekty', 'Obszary, w których jakość śladu jest wystarczająca do analizy', 'Oczywiste niezgodności cech grupowych, które mogą szybko zakończyć porównanie'],
        },
        {
          title: 'Czego nie może udowodnić',
          icon: 'mdi:alert-circle-outline',
          description: 'To narzędzie przeglądarkowe nie jest walidowanym systemem identyfikacji kryminalistycznej i nie powinno być tak stosowane.',
          points: ['Brak automatycznej konkluzji o wspólnym pochodzeniu', 'Brak wyliczenia prawdopodobieństwa przypadkowej zgodności', 'Brak oszacowania częstości występowania w populacji', 'Nie zastępuje badania oryginalnego dowodu rzeczowego', 'Nie zastępuje kontroli jakości w laboratorium ani niezależnej weryfikacji'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Kontrolka', 'Co zmienia', 'Dlaczego to ważne'],
      rows: [
        ['Przesyłanie znanego obrazu', 'Ładuje ślad kontrolny lub referencyjny.', 'Znana strona powinna pochodzić z udokumentowanego śladu testowego lub przykładu szkoleniowego.'],
        ['Przesyłanie obrazu dowodowego', 'Ładuje ślad, którego pochodzenie jest nieznane.', 'Ta strona jest przesuwana i dostosowywana w celu znalezienia porównywalnej orientacji.'],
        ['Suwak podziału', 'Zmienia widoczną część każdego z obrazów.', 'Ruchomy podział pomaga sprawdzić, czy linie przechodzą wizualnie przez granicę.'],
        ['Przesunięcie poziome', 'Przesuwa obraz dowodowy w lewo lub w prawo.', 'Małe przesunięcia boczne mogą wprowadzić odpowiednie grzbiety w fazę lub ją zaburzyć.'],
        ['Obrót', 'Obraca obraz dowodowy.', 'Kąt narzędzia, aparatu i montażu mogą powodować odchylenia kątowe między obrazami.'],
        ['Powiększenie', 'Zmienia wyświetlane powiększenie.', 'Różne skale obrazów muszą zostać zrównane przed oceną szczegółów.'],
        ['Kontrast i jasność', 'Dostosowują wyświetlaną widoczność.', 'Niskokontrastowe strychowania mogą stać się łatwiejsze do zauważenia, ale zmiany należy zapisać.'],
        ['Eksportuj widok', 'Zapisuje plik PNG z aktualnym dopasowaniem.', 'Przydatne do przeglądu w klasie, notatek, dyskusji lub raportów jasno określających ograniczenia.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Jakość obrazu',
      title: 'Słaba jakość zdjęcia może uniemożliwić poprawne porównanie',
      html: 'Porównanie śladów narzędzi w dużej mierze zależy od jakości zdjęcia. Rozmycie, odblaski, artefakty kompresji, głębokie cienie, zniekształcenia perspektywiczne i bardzo krótkie linie strychowania mogą tworzyć mylne wrażenia wizualne. Jeśli śladu nie można wyraźnie zorientować, przeskalować i oświetlić, właściwym wnioskiem może być uznanie obrazu za nieprzydatny do celów porównawczych.',
    },
    {
      type: 'summary',
      title: 'Praktyczna lista kontrolna przed porównaniem dwóch śladów',
      items: [
        'Potwierdź, który obraz reprezentuje ślad dowodowy, a który znany ślad testowy.',
        'Sprawdź, czy oba zdjęcia pokazują ten sam ogólny typ śladu, obszar styku narzędzia i orientację powierzchni roboczej.',
        'Unikaj porównywania pojedynczych, odizolowanych linii; szukaj serii sąsiadujących szczegółów na użytecznej długości.',
        'Używaj kontrastu i jasności ostrożnie i odnotuj, kiedy zastosowano cyfrowe ulepszenie obrazu.',
        'Eksportuj dopasowany widok wyłącznie jako ilustrację poglądową, a nie jako dowód tożsamości.',
      ],
    },
    {
      type: 'title',
      text: 'Ślady narzędzi dowodowe a znane',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ślad dowodowy jest zazwyczaj zabezpieczany z przedmiotu powiązanego ze zdarzeniem, np. ślad podważenia na drzwiach, cięcie drutu, zadrapanie metalu lub ślad wgniecenia na miękkiej powierzchni. Znany ślad testowy jest wykonywany za pomocą podejrzewanego narzędzia w kontrolowanych warunkach. W formalnej pracy kryminalistycznej biegli oceniają najpierw zgodność cech grupowych, zanim poświęcą czas na badanie drobnych szczegółów strychowania. Jeśli cechy grupowe się nie zgadzają, mikroskopijne podobieństwo w małym obszarze nie wystarczy do wykazania powiązania.',
    },
    {
      type: 'paragraph',
      html: 'Obszar roboczy w przeglądarce jest celowo konserwatywny. Pomaga dopasować obrazy i omawiać cechy wizualne, ale nie modeluje zużycia narzędzia, cech podgrupowych, deformacji podłoża, śladów produkcyjnych, progów decyzyjnych biegłego, niepewności pomiaru ani współczynników błędów. Odpowiedzialne korzystanie z narzędzia polega na traktowaniu wyeksportowanego obrazu jako pomocy komunikacyjnej, a nie rezultatu identyfikacji.',
    },
    {
      type: 'proscons',
      title: 'Zalety i ograniczenia internetowego porównywania zdjęć śladów narzędzi',
      items: [
        { pro: 'Szybki sposób na załadowanie dwóch obrazów i sprawdzenie dopasowania bez instalacji oprogramowania.', con: 'Widok w przeglądarce nie jest skalibrowanym kryminalistycznym mikroskopem porównawczym.' },
        { pro: 'Pomocne w nauce, jak dzielony widok i orientacja wpływają na to, co widzi użytkownik.', con: 'Ulepszanie obrazu poprawia widoczność, ale może również zmienić wygląd cech charakterystycznych.' },
        { pro: 'Wyeksportowane pliki PNG są pomocne w notatkach, dyskusjach i wyjaśnieniach wizualnych.', con: 'Wyeksportowany widok nie zachowuje pełnego kontekstu dowodowego, metadanych ani łańcucha dowodowego.' },
        { pro: 'Działa z rzeczywistymi zdjęciami przesłanymi przez użytkownika, a nie tylko ze śladami syntetycznymi.', con: 'Narzędzie nie potrafi określić, czy dwa ślady pochodzą od tego samego narzędzia.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ślad dowodowy', definition: 'Ślad zabezpieczony na miejscu zdarzenia lub z przedmiotu, którego pochodzenie jest nieznane.' },
        { term: 'Znany ślad testowy', definition: 'Kontrolowany ślad wykonany konkretnym narzędziem w celu porównania ze śladem dowodowym.' },
        { term: 'Strychowanie (stria)', definition: 'Mikroskopijna linia lub bruzda powstała w wyniku przesuwania się powierzchni narzędzia po innym materiale.' },
        { term: 'Cechy grupowe', definition: 'Właściwości wspólne dla grupy narzędzi, takie jak szerokość ostrza, ogólny kształt lub typ narzędzia.' },
        { term: 'Cechy indywidualne', definition: 'Drobne szczegóły powierzchni powstałe w procesie produkcji, użytkowania, uszkodzenia lub zużycia.' },
        { term: 'Cechy podgrupowe', definition: 'Cechy wspólne dla podgrupy narzędzi wynikające z procesów produkcyjnych; mogą utrudniać interpretację pochodzenia.' },
        { term: 'Przydatność do badań', definition: 'Ocena, czy ślad zawiera wystarczającą jakość i ilość szczegółów, aby umożliwić porównanie.' },
      ],
    },
    {
      type: 'tip',
      title: 'Dobre hasła wyszukiwania, na które ta strona odpowiada',
      html: 'Użytkownicy szukający tego typu aplikacji często wpisują frazy takie jak <strong>mikroskop porównawczy śladów narzędzi online</strong>, <strong>kryminalistyczne porównanie strychowania</strong>, <strong>ślad dowodowy a porównawczy</strong>, <strong>porównywanie śladów narzędzi ze zdjęć</strong> oraz <strong>symulator kryminalistycznego mikroskopu porównawczego</strong>. Strona jest zbudowana wokół tych rzeczywistych zadań: przesyłania, dopasowywania, badania, dokumentowania i rozumienia ograniczeń.',
    },
    {
      type: 'table',
      headers: ['Częste pytanie użytkownika', 'Krótka odpowiedź'],
      rows: [
        ['Czy mogę przesyłać własne zdjęcia śladów narzędzi?', 'Tak. Narzędzie zostało zaprojektowane z myślą o zdjęciach dowodowych i znanych przesłanych przez użytkownika.'],
        ['Czy aplikacja decyduje, czy oba ślady do siebie pasują?', 'Nie. Umożliwia jedynie dopasowanie wizualne i nie formułuje wniosków identyfikacyjnych.'],
        ['Dlaczego przesuwa się obraz dowodowy, a nie oba?', 'Utrzymanie znanej strony nieruchomo ułatwia udokumentowanie sposobu dopasowania śladu dowodowego.'],
        ['Czy mogę użyć narzędzia do śladów broni palnej lub łusek?', 'Może pomóc w demonstracji pojęć dopasowania obrazów, ale badanie broni palnej i łusek wymaga procedur specjalistycznych i walidacji.'],
        ['Czy mogę dołączyć wyeksportowany plik PNG do moich notatek?', 'Tak, pod warunkiem, że zostanie on wyraźnie opisany jako poglądowy widok uzyskany za pomocą ręcznych kontrolek dopasowania.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Ostrzeżenie kryminalistyczne',
      title: 'Używaj ostrożnego języka przy opisywaniu wyników porównania śladów',
      html: 'Unikaj wyciągania z wizualnego dopasowania wniosków mocniejszych, niż pozwala na to materiał dowodowy. Odpowiednie sformułowania zależą od jurysdykcji, procedur laboratoryjnych, walidacji, jakości zdjęć, oceny biegłego oraz kontekstu sprawy. To narzędzie online powinno być opisywane jako pomoc w wizualnym porównaniu, a nie jako walidowana metoda indywidualizacji narzędzia.',
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
