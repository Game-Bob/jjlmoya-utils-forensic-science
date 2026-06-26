import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'symulator-mikrokrystalicznych-testow-narkotykowych';
const title = 'Forensyczny Symulator Mikrokrystalicznych Testów Narkotykowych';
const description = 'Symuluj edukacyjne wzorce przesiewowych testów mikrokrystalicznych poprzez łączenie podejrzanych substancji kontrolowanych z klasycznymi odczynnikami forensycznymi oraz porównywanie pokroju kryształów, szybkości wzrostu i reakcji na światło spolaryzowane.';

const howTo = [
  {
    name: 'Wybierz podejrzaną próbkę',
    text: 'Wybierz kokainę, heroinę, amfetaminę lub metamfetaminę, aby załadować profil dydaktyczny dla nieznanej substancji.',
  },
  {
    name: 'Zastosuj odczynnik mikrokrystaliczny',
    text: 'Przełączaj między chlorkiem platyny, chlorkiem złota i odczynnikiem Dragendorffa, aby zobaczyć, jak chemia odczynnika wpływa na morfologię kryształów.',
  },
  {
    name: 'Dostosuj symulowaną polaryzację',
    text: 'Przesuń suwak polaryzacji, aby zwiększyć lub zmniejszyć kontrast dwójłomności w polu widzenia wirtualnego mikroskopu.',
  },
  {
    name: 'Porównaj wynik z referencyjnym',
    text: 'Użyj etykiety pokroju, oceny zgodności, szybkości wzrostu i notatki interpretacyjnej, aby zdecydować, czy wzorzec jest zgodny z referencyjnym, częściowy czy niespecyficzny.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Czy testy mikrokrystaliczne są potwierdzające dla nielegalnych narkotyków?',
    answer: 'Nie. Testy mikrokrystaliczne są narzędziami przesiewowymi o charakterze domniemanym lub porównawczym. Rzeczywista identyfikacja zabezpieczonych narkotyków powinna opierać się na walidowanych procedurach obejmujących odpowiednie próby kontrolne oraz potwierdzające metody instrumentalne, takie jak GC-MS, LC-MS lub spektroskopia w podczerwieni.',
  },
  {
    key: 'faq-2',
    question: 'Dlaczego różne odczynniki dają różne kształty kryształów?',
    answer: 'Odczynnik tworzy sole, kompleksy lub osady z grupami funkcyjnymi w docelowym związku. Rozpuszczalność, moc kwasu, stężenie, zanieczyszczenia i szybkość suszenia wpływają na to, czy obserwowany pokrój ma postać igieł, rozetek, pryzmatów, płytek czy słabego rozproszenia.',
  },
  {
    key: 'faq-3',
    question: 'Co światło spolaryzowane wnosi do badania mikrokrystalicznego?',
    answer: 'Światło spolaryzowane może zwiększyć kontrast i ujawnić dwójłomność, ułatwiając porównanie krawędzi, rozgałęzień i wewnętrznej struktury kryształu. Nie eliminuje to potrzeby stosowania wzorców referencyjnych i prób kontrolnych.',
  },
  {
    key: 'faq-4',
    question: 'Dlaczego wzorzec wyglądający na pozytywny może być mylący?',
    answer: 'Substancje rozcieńczające, mieszaniny, zdegradowany materiał, wiek odczynnika, zanieczyszczenia i oczekiwania analityka mogą powodować niejednoznaczne lub pokrywające się morfologie. Dlatego wyniki domniemane należy interpretować ostrożnie.',
  },
  {
    key: 'faq-5',
    question: 'Czy ten symulator może zidentyfikować nieznaną substancję?',
    answer: 'Nie. Jest to edukacyjna wizualizacja powszechnych pojęć morfologicznych. Nie pozwala na badanie rzeczywistych dowodów, pomiary chemiczne ani formułowanie wniosków laboratoryjnych.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Mikroskop spolaryzowany',
    canvasAria: 'Animowane pole wzrostu mikrokryształów',
    sample: 'Podejrzana próbka',
    sampleCocaine: 'Kokaina',
    sampleHeroin: 'Heroina',
    sampleAmphetamine: 'Amfetamina',
    sampleMethamphetamine: 'Metamfetamina',
    reagent: 'Półka z odczynnikami',
    reagentPlatinum: 'Chlorek platyny',
    reagentGold: 'Chlorek złota',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Kontrast polaryzacji',
    confidence: 'Zgodność',
    growth: 'Wzrost',
    birefringence: 'Dwójłom.',
    regrow: 'Wyhoduj ponownie kryształy',
    warningLabel: 'Ostrzeżenie forensyczne',
    warningTitle: 'Ostrzeżenie przesiewowe',
    matchReference: 'Zgodny z referencyjnym',
    matchPartial: 'Zgodność częściowa',
    matchNonSpecific: 'Nespecyficzny',
    habitFeatheryNeedles: 'Pęczki pierzastych igieł',
    habitRosettes: 'Rozetowe rozbłyski gwiazd',
    habitBranchingPrisms: 'Rozgałęzione pryzmaty',
    habitPlates: 'Cienkie płytki',
    habitWeakScatter: 'Rzadkie niespecyficzne rozproszenie',
    cueCocainePlatinumChloride: 'Pęczki pierzastych i rozgałęzionych igieł są oczekiwanym wzorcem dydaktycznym dla kokainy z chlorkiem platyny.',
    cueCocaineGoldChloride: 'Chlorek złota może tworzyć rozgałęzione pomarańczowo-brązowe kryształy, ale wzorzec ten jest mniej specyficzny niż w przypadku chlorku platyny.',
    cueCocaineDragendorff: 'Odczynnik Dragendorffa daje tutaj słabą reakcję na alkaloidy; morfologię należy traktować wyłącznie jako informację przesiewową.',
    cueHeroinPlatinumChloride: 'Mogą pojawić się osady płytkowe, ale to połączenie nie stanowi silnego potwierdzającego wzorca dydaktycznego.',
    cueHeroinGoldChloride: 'Gromady rozetek i zaokrąglone rozbłyski gwiazd to referencyjny wzorzec heroiny w tym symulatorze.',
    cueHeroinDragendorff: 'Odczynnik Dragendorffa daje pomarańczowe rozgałęzione pryzmaty zgodne z przesiewem alkaloidów, a nie dowodem tożsamości.',
    cueAmphetaminePlatinumChloride: 'Szybko rozgałęziające się pryzmaty sugerują stymulantopodobny wzorzec dydaktyczny pod wybranym odczynnikiem.',
    cueAmphetamineGoldChloride: 'Rzadka krystalizacja oznacza, że wynik wizualny należy zgłosić jako niespecyficzny.',
    cueAmphetamineDragendorff: 'Rozpryski igieł rosną szybko i są przydatne do nauki domniemanych porównań amfetaminy.',
    cueMethamphetaminePlatinumChloride: 'Mogą powstawać spolaryzowane rozetki, ale wynik pozostaje domniemanym porównaniem morfologii.',
    cueMethamphetamineGoldChloride: 'Cienkie formy płytkowe są widoczne, choć nakładanie się z innymi związkami ogranicza specyficzność.',
    cueMethamphetamineDragendorff: 'Gęste pomarańczowe rozgałęzione pryzmaty zapewniają najsilniejszą zgodność dydaktyczną dla metamfetaminy w tym zestawie.',
    disclaimer: 'Model przesiewowy wyłącznie do celów edukacyjnych. Rzeczywista identyfikacja narkotyków wymaga walidowanych wzorców referencyjnych, kontroli odczynników, łańcucha dowodowego i potwierdzającej analizy instrumentalnej.',
  },
  seo: [
    {
      type: 'title',
      text: 'Badania Mikrokrystaliczne Narkotyków w Kryminalistyce',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Symulator dydaktyczny',
      title: 'Do czego służy ten symulator mikrokrystaliczny',
      html: 'To narzędzie wyjaśnia, w jaki sposób klasyczne kryminalistyczne testy mikrokrystaliczne mogą wytworzyć rozpoznawalny pokrój kryształów po zmieszaniu podejrzanego narkotyku z odczynnikiem. Pomaga studentom porównywać <strong>morfologię kryształów</strong>, szybkość wzrostu i kontrast w świetle spolaryzowanym bez traktowania wyników z przeglądarki jako dowodu.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'dydaktyczne profile próbek', icon: 'mdi:flask-outline' },
        { value: '3', label: 'tradycyjne opcje odczynników', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'modelowane pokroje kryształów', icon: 'mdi:shape-outline' },
        { value: '0', label: 'prawne roszczenia identyfikacyjne', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'Jak interpretować pokrój kryształów',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Praktyczna lista kontrolna do porównań',
      items: [
        'Zacznij od znanego wzorca referencyjnego i ślepej próby odczynnika przed porównaniem nieznanej substancji.',
        'Zapisz odczynnik, stężenie, wielkość kropli, czas schnięcia, temperaturę i powiększenie mikroskopu.',
        'Najpierw porównaj ogólny pokrój: igły, rozetki, płytki, pryzmaty, rozgałęzienia lub słabe rozproszenie.',
        'Traktuj częściowy lub rzadki wzrost jako powód do dalszych badań, a nie pewną identyfikację.',
      ],
    },
    {
      type: 'table',
      headers: ['Zaobserwowany pokrój', 'Częste pytania użytkowników', 'Ostrożna interpretacja'],
      rows: [
        ['Pierzaste igły', 'Czy to wygląda jak kokaina z chlorkiem platyny?', 'Może to być przydatne dopasowanie dydaktyczne, ale mieszaniny i warunki odczynnika mogą zmienić pokrój.'],
        ['Rozetki', 'Czy kryształy rozetowe są diagnostyczne?', 'Rozetki mogą wspierać porównanie, gdy próby kontrolne są zgodne, ale same w sobie nie są wystarczające.'],
        ['Rozgałęzione pryzmaty', 'Dlaczego testy na stymulanty często rosną szybko?', 'Niektóre sole szybko zarodkują i rozgałęziają się w miarę parowania rozpuszczalnika; szybkość jest wskazówką pomocniczą, a nie potwierdzającą.'],
        ['Słabe rozproszenie', 'Czy słaby wzorzec oznacza brak narkotyku?', 'Nie. Niskie stężenie, zanieczyszczenia, zestarzały odczynnik lub słabe przygotowanie mogą zahamować wzrost kryształów.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Przesiew mikrokrystaliczny pomaga w',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Szybkim porównaniu wizualnym, gdy przeszkolony analityk stosuje próby kontrolne i materiały referencyjne.',
          points: ['Pokazy klasowe', 'Słownictwo morfologiczne', 'Wstępna selekcja', 'Porównanie efektów odczynników'],
        },
        {
          title: 'Przesiew mikrokrystaliczny nie zastępuje',
          icon: 'mdi:alert-circle-outline',
          description: 'Walidowanych metod chemii potwierdzającej w celu sformułowania ostatecznego wniosku o zabezpieczonym narkotyku.',
          points: ['Potwierdzenie instrumentalne', 'Akredytowane procedury', 'Walidacja specyficzna dla matrycy', 'Dokumentowanie niepewności'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Naukowe Podstawy Badań Mikrokrystalicznych',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Testy mikrokrystaliczne stanowią historyczną i wysoce czułą klasę chemicznych testów przesiewowych stosowanych przez chemików sądowych do identyfikacji podejrzanych substancji kontrolowanych. Gdy niewielka ilość próbki narkotyku zostanie rozpuszczona w kwasie i połączona z określonym odczynnikiem zawierającym metal ciężki, takim jak chlorek złota lub chlorek platyny, następuje wytrącenie kompleksu koordynacyjnego lub nierozpuszczalnej soli. Struktura cząsteczkowa narkotyku determinuje szybkość wzrostu, orientację i symetrię powstających kryształów, tworząc charakterystyczne kształty lub pokroje mikroskopowe.',
    },
    {
      type: 'paragraph',
      html: 'Analiza tych pokrojów pod mikroskopem polaryzacyjnym pozwala badaczom sądowym obserwować właściwości optyczne, takie jak dwójłomność, gdzie kryształ rozszczepia światło na dwa promienie, tworząc żywe kolory i wysoki kontrast. Chociaż metody instrumentalne, takie jak chromatografia gazowa ze spektrometrią mas, w dużej mierze zastąpiły testy mikrokrystaliczne w identyfikacji potwierdzającej, przesiew mikrokrystaliczny pozostaje cenioną techniką ze względu na szybkość, niski koszt i zdolność do rozdzielania izomerów optycznych, których odróżnienie innymi metodami może być trudne.',
    },
    {
      type: 'paragraph',
      html: 'W środowisku akademickim symulowanie tych reakcji pomaga studentom zrozumieć związek między odczynnikami chemicznymi a fizyczną morfologią kryształów. Obserwując, jak kokaina, heroina i różne amfetaminy reagują na różne odczynniki, studenci uczą się, że pojedynczy pozytywny test nie stanowi ostatecznego wniosku sądowego. Prawidłowe protokoły przesiewowe wymagają porównywania nieznanych próbek ze znanymi materiałami referencyjnymi i wykonywania ślepych prób odczynnikowych w celu zapewnienia ważności i specyficzności obserwowanych wzorców kryształów.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Pokrój kryształów', definition: 'Widoczny kształt lub forma wzrostu kryształu, np. igły, płytki, pryzmaty lub rozetki.' },
        { term: 'Zarodkowanie', definition: 'Początkowe powstawanie maleńkich centrów krystalizacji, z których rosną większe struktury.' },
        { term: 'Dwójłomność', definition: 'Zachowanie optyczne, które może sprawić, że kryształy wydają się jaśniejsze lub zabarwione pod wpływem światła spolaryzowanego.' },
        { term: 'Test domniemany', definition: 'Test przesiewowy, który sugeruje możliwą klasę lub związek, ale sam w sobie nie potwierdza tożsamości.' },
        { term: 'Wzorzec referencyjny', definition: 'Znany materiał przebadany w tych samych warunkach w celu porównania z nieznanym wzorcem.' },
      ],
    },
    {
      type: 'tip',
      title: 'Najlepsza praktyka dla rzeczywistych dowodów',
      html: 'Używaj morfologii mikrokryształów jako jednej ze ścieżek badawczych. Wiarygodny proces obejmuje próby ślepe, kontrole dodatnie, dokumentację wieku odczynnika, niezależną weryfikację w razie potrzeby oraz testy potwierdzające w ramach akceptowanego programu badania zabezpieczonych narkotyków.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Ostrzeżenie forensyczne',
      title: 'Piękny kryształ to nie identyfikacja prawna',
      html: 'Symulator celowo oddziela wizualną ocenę zgodności od ostatecznego wniosku kryminalistycznego. Rzeczywiste badania muszą uwzględniać mieszaniny, substancje rozcieńczające, zanieczyszczenia, stan odczynnika, przeszkolenie analityka i walidowane procedury laboratoryjne.',
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
