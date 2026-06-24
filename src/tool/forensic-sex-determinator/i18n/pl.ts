import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'wyznacznik-plci-biologicznej-morfologia-czaszki-miednicy-antropologia-sadowa';
const title = 'Klasyfikator Płci w Antropologii Sądowej';
const description = 'Oszacuj płeć biologiczną na podstawie morfologii czaszki i miednicy przy użyciu bayesowskiego modelu prawdopodobieństwa.';

const howTo = [
  {
    name: 'Wybierz region anatomiczny do analizy',
    text: 'Zdecyduj, czy chcesz analizować miednicę, czaszkę, czy oba elementy. Ocena obu obszarów zwiększa dokładność i pewność ostatecznej klasyfikacji płci biologicznej.',
  },
  {
    name: 'Oceń każdą cechę morfologiczną',
    text: 'Zbadaj preparaty kostne i oceń kluczowe wskaźniki w skali od 1 (hiperkobiecy) do 5 (hipermęski) na podstawie punktów orientacyjnych.',
  },
  {
    name: 'Wprowadź wyniki do silnika bayesowskiego',
    text: 'Użyj suwaków, aby wprowadzić wynik dla każdej cechy. Klasyfikator automatycznie zaktualizuje prawdopodobieństwo a posteriori dla kategorii męskiej i żeńskiej.',
  },
  {
    name: 'Zinterpretuj wyniki prawdopodobieństwa',
    text: 'Przeanalizuj ostateczny wskaźnik wiarygodności, dominującą klasyfikację płci i przeczytaj forensyczne uwagi diagnostyczne, aby zrozumieć warianty biologiczne.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Czym jest metoda Phenice w określaniu płci na podstawie miednicy?',
    answer: 'Metoda Phenice, opublikowana przez T. W. Phenice w 1969 roku, koncentruje się na trzech specyficznych cechach miednicy: łuku brzusznym, wklęsłości podłonowej i przyśrodkowej części gałęzi kulszowo-łonowej. Pozostaje jedną z najbardziej niezawodnych metod morfologicznych w antropologii sądowej, osiągając dokładność powyżej 95% przy dobrze zachowanych szczątkach.',
  },
  {
    key: 'faq-2',
    question: 'Dlaczego miednica jest preferowana nad czaszką do określania płci?',
    answer: 'Miednica jest najbardziej dymorficzną płciowo częścią ludzkiego szkieletu, ponieważ odzwierciedla funkcjonalne przystosowanie kobiet do porodu. Nacisk ewolucyjny ukształtował kobiecą miednicę tak, aby była szersza, płytsza i miała szersze kąty niż męska, podczas gdy dymorfizm czaszki wiąże się głównie z ogólną wielkością ciała i masą mięśniową.',
  },
  {
    key: 'faq-3',
    question: 'Jak klasyfikator bayesowski szacuje prawdopodobieństwo płci?',
    answer: 'Nasz klasyfikator używa bayesowskiego modelu aktualizacji. Zakłada prawdopodobieństwo a priori wynoszące 50% dla obu płci. Dla każdego ocenionego markera model mnoży prawdopodobieństwo a priori przez wiarygodność uzyskania tego konkretnego wyniku w populacji męskiej w porównaniu z żeńską.',
  },
  {
    key: 'faq-4',
    question: 'Co reprezentuje wynik 3 w analizie morfologicznej?',
    answer: 'Wynik 3 reprezentuje morfologię nieokreśloną lub neutralną. Wskazuje to, że cecha wykazuje właściwości leżące pośrodku spektrum ludzkiego dymorfizmu płciowego, nie wykazując ani wyraźnych cech żeńskich (1-2), ani męskich (4-5).',
  },
  {
    key: 'faq-5',
    question: 'Czy ten model może określić płeć szczątków dziecięcych?',
    answer: 'Nie. Morfologiczne określanie płci jest wysoce niewiarygodne w przypadku szczątków osobników młodocianych przed okresem dojrzewania, ponieważ cechy morfologiczne różnicujące szkielet męski i żeński nie rozwijają się w pełni przed pokwitaniem. W takich przypadkach antropolodzy polegają na badaniach genetycznych lub wskaźnikach zębowych.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Morfologia Miednicy',
    craniumRegion: 'Morfologia Czaszki',
    subpubicAngle: 'Kąt Podłonowy',
    subpubicAngleDesc: 'Kąt utworzony poniżej spojenia łonowego.',
    subpubicAngleFem: 'Szeroki kąt w kształcie litery U (>90°)',
    subpubicAngleMasc: 'Wąski kąt w kształcie litery V (<70°)',
    sciaticNotch: 'Wcięcie Kulszowe Większe',
    sciaticNotchDesc: 'Wcięcie kulszowe większe w tylnej części kości biodrowej.',
    sciaticNotchFem: 'Szerokie i płytkie wcięcie',
    sciaticNotchMasc: 'Wąskie i głębokie wcięcie',
    ventralArc: 'Łuk Brzuszny',
    ventralArcDesc: 'Grzbiet kostny przebiegający przez przednią część kości łonowej.',
    ventralArcFem: 'Wyraźny, uniesiony grzbiet kostny',
    ventralArcMasc: 'Brak lub bardzo słaba linia',
    preauricularSulcus: 'Bruzda Przeduszna',
    preauricularSulcusDesc: 'Bruzda przylegająca do stawu krzyżowo-biodrowego.',
    preauricularSulcusFem: 'Głęboka, dołkowana bruzda',
    preauricularSulcusMasc: 'Brak lub całkowicie gładka powierzchnia',
    mastoidProcess: 'Wyrostek Sutkowaty',
    mastoidProcessDesc: 'Wyrostek kostny za kanałem słuchowym.',
    mastoidProcessFem: 'Mały, krótki wyrostek',
    mastoidProcessMasc: 'Duży, długi wyrostek',
    supraorbitalRidge: 'Wał Nadoczodołowy',
    supraorbitalRidgeDesc: 'Wystawanie łuku brwiowego (glabella).',
    supraorbitalRidgeFem: 'Gładkie, płaskie czoło',
    supraorbitalRidgeMasc: 'Wyraźny, wystający wał brwiowy',
    mentalEminence: 'Wyniosłość Bródkowa (Bródka)',
    mentalEminenceDesc: 'Kształt i wyrazistość bródki.',
    mentalEminenceFem: 'Zaokrąglona, spiczasta bródka',
    mentalEminenceMasc: 'Szeroka, kwadratowa bródka',
    nuchalCrest: 'Kresa Karkowa',
    nuchalCrestDesc: 'Kresy kostne z tyłu czaszki.',
    nuchalCrestFem: 'Gładka płaszczyzna potyliczna',
    nuchalCrestMasc: 'Chropowata, haczykowata ostroga',
    selectOption: 'Wybierz wynik...',
    score1: '1 - Hiperkobiecy',
    score2: '2 - Kobiecy',
    score3: '3 - Nieokreślony',
    score4: '4 - Męski',
    score5: '5 - Hipermęski',
    notEvaluated: 'Nie oceniono',
    resultsTitle: 'Wyniki Określania Płci',
    femaleProbLabel: 'Prawdopodobieństwo Kobieta',
    maleProbLabel: 'Prawdopodobieństwo Mężczyzna',
    predominantLabel: 'Dominująca Klasyfikacja',
    confidenceLabel: 'Pewność Szacowania',
    weakConf: 'Słaba (Mało ocenionych wskaźników)',
    moderateConf: 'Umiarkowana',
    strongConf: 'Silna',
    femaleClass: 'Kobieta',
    maleClass: 'Mężczyzna',
    indeterminateClass: 'Nieokreślony',
    noteNoData: 'Oceń co najmniej jeden marker anatomiczny, aby rozpocząć obliczenia.',
    noteTriageOnly: 'To jest edukacyjne narzędzie przesiewowe. Formalna ocena sądowa wymaga analiz metrycznych i opinii wielu ekspertów.',
    noteBayesianEst: 'Prawdopodobieństwa są obliczane dynamicznie przy użyciu nieparametrycznej macierzy wiarygodności bayesowskiej.',
    pelvicTitle: 'Przewodnik po Miednicy',
    cranialTitle: 'Przewodnik po Czaszce',
    pelvisDesc: 'Kobieca miednica jest przystosowana do porodu, co skutkuje szerszymi strukturami i łagodniejszymi kątami. Męska miednica jest bardziej masywna, wąska i zorientowana pionowo.',
    cranialDesc: 'Męska czaszka jest ogólnie większa i bardziej masywna, z większymi wyrostkami sutkowatymi, wyraźnymi wałami nadoczodołowymi i szorstkimi przyczepami mięśniowymi. Kobieca czaszka jest bardziej delikatna, z gładszymi kresami i zaokrągloną bródką.',
  },
  seo: [
    {
      type: 'title',
      text: 'Wprowadzenie do osteologicznego określania płci w antropologii sądowej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Szacowanie płci biologicznej jest jednym z podstawowych kroków przy tworzeniu profilu biologicznego dla nieznanych szczątków szkieletowych w antropologii sądowej, toksykologii i archeologii. Wraz ze wzrostem, wiekiem w chwili śmierci i powinowactwem populacyjnym, szacowanie płci pomaga zawęzić grono potencjalnych osób zaginionych. Ludzkie szkielety wykazują dymorfizm płciowy, czyli fizyczne różnice między samcami i samicami danego gatunku. Dymorfizm ten odzwierciedla się zarówno w wielkości (masywność w porównaniu z delikatnością), jak i kształcie (szczególnie przystosowania miednicy do porodu).',
    },
    {
      type: 'paragraph',
      html: 'To interaktywne narzędzie pozwala studentom medycyny sądowej, patologom i stażystom na ocenę cech morfologicznych miednicy i czaszki. Wprowadzając wyniki na podstawie wizualnych wskazówek, użytkownicy mogą obserwować, jak poszczególne markery kostne wpływają na skumulowany model statystyczny.',
    },
    {
      type: 'title',
      text: 'Dymorfizm miednicy i metoda Phenice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Miednica jest powszechnie uznawana za najdokładniejszy obszar szkieletu do określania płci biologicznej. Kobiece miednice są szersze, mają większy kanał rodny, szersze wcięcie kulszowe większe i kąt podłonowy przekraczający dziewięćdziesiąt stopni. Z kolei męskie miednice charakteryzują się wąskimi kątami podłonowymi w kształcie litery V oraz wąskim wcięciem kulszowym. Metoda Phenice koncentruje się na trzech specyficznych cechach kości łonowej: łuku brzusznym, wklęsłości podłonowej i przyśrodkowej powierzchni gałęzi kulszowo-łonowej. Obecność dobrze określonego łuku brzusznego jest wyjątkowo silnym wskaźnikiem płci żeńskiej, podczas gdy jego brak jest typowy dla mężczyzn.',
    },
    {
      type: 'title',
      text: 'Dymorfizm czaszki i markery masywności',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W przypadku braku lub złego stanu zachowania kości miednicy, czaszka służy jako główna alternatywa do szacowania płci. Ocena czaszki opiera się na stopniu jej masywności, ponieważ męskie czaszki ogólnie wykazują wyraźniejsze miejsca przyczepu mięśni i większe wyrostki kostne z powodu różnic rozwojowych stymulowanych hormonami. Wyrostek sutkowaty za uchem jest większy i szerszy u mężczyzn. Wał nadoczodołowy (glabella) jest wyraźny i wystający u mężczyzn, podczas gdy u kobiet pozostaje gładki i pionowy. Bródka (wyniosłość bródkowa) ma tendencję do bycia kwadratową i szeroką u mężczyzn, podczas gdy kobiety wykazują bardziej zaokrągloną i spiczastą strukturę bródki.',
    },
    {
      type: 'table',
      headers: ['Punkt orientacyjny', 'Cechy kobiece (Wyniki 1-2)', 'Cechy męskie (Wyniki 4-5)', 'Wartość sądowa'],
      rows: [
        ['Kąt podłonowy', 'Szeroki, rozwarty kąt (często przekraczający 90 stopni).', 'Wąski, ostry kąt (zwykle poniżej 70 stopni).', 'Najwyższa indywidualna wartość diagnostyczna w określaniu płci na podstawie miednicy.'],
        ['Wcięcie kulszowe', 'Szerokie, płytkie wcięcie przypominające kształt litery U.', 'Wąskie, głębokie wcięcie przypominające kształt kciuka.', 'Niezwykle trwały marker, często zachowany w szczątkach pofragmentowanych.'],
        ['Wyrostek sutkowaty', 'Mały, krótki, minimalnie wystający poniżej przewodu słuchowego.', 'Duży, długi, znacząco wystający ku dołowi.', 'Niezawodny marker czaszkowy, odporny na wietrzenie.'],
        ['Wał nadoczodołowy', 'Gładka, płaska glabella z pionowym profilem czoła.', 'Wyraźny, wystający wał z pochyłym czołem.', 'Różnicuje masywne czaszki męskie od delikatnych kobiecych.'],
      ],
    },
    {
      type: 'title',
      text: 'Statystyczne modele bayesowskie w klasyfikacji morfologicznej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tradycyjne oceny sądowe opierały się na subiektywnej klasyfikacji, co mogło prowadzić do błędu obserwatora. Współczesna antropologia sądowa wykorzystuje statystyczne modele prawdopodobieństwa do ilościowego określenia niepewności. Statystyka bayesowska jest idealna do tego celu, zaczynając od równego prawdopodobieństwa a priori (50 procent mężczyzna, 50 procent kobieta) i aktualizując je w miarę wprowadzania nowych dowodów. Gdy cechy miednicy wykazują wysoce kobiecą morfologię (szeroki kąt podłonowy, wynik 1), prawdopodobieństwo klasyfikacji żeńskiej rośnie, przeważając nad pośrednimi lub sprzecznymi markerami w czaszce.',
    },
    {
      type: 'paragraph',
      html: 'Ten cyfrowy symulator implementuje nieparametryczny silnik bayesowski. Obliczenia dostarczają wartości procentowych prawdopodobieństwa, a nie sztywnych przypisań binarnych, co jest zgodne ze współczesnymi wytycznymi sądowymi, które kładą nacisk na zgłaszanie przedziałów ufności i współczynników błędów w zeznaniach sądowych. Pewność klasyfikacji zależy od liczby ocenianych punktów orientacyjnych, przy czym wyniki z obszaru miednicy i czaszki zapewniają najbardziej wiarygodne rezultaty.',
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
