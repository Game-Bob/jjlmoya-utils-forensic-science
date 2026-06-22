const slug = 'kalkulator-prawdopodobienstwa-symulacji';
const description = 'Przeanalizuj, czy nasza rzeczywistość jest symulacją, korzystając z argumentu trilematu Nicka Bostroma. Oblicz prawdopodobieństwo egzystencjalne za pomocą 4 kluczowych parametrów.';
const title = 'Kalkulator Prawdopodobieństwa Symulacji: Czy żyjesz w wirtualnym wszechświecie?';
const howTo = [
    {
      name: 'Dostosuj Postęp Technologiczny',
      text: 'Oszacuj prawdopodobieństwo osiągnięcia przez ludzkość poziomu postludzkiego. 50% to wartość neutralna; zwiększ ją, jeśli wierzysz, że AI i komputery będą nadal rozwijać się wykładniczo.',
    },
    {
      name: 'Ustaw Wskaźnik Przetrwania',
      text: 'Rozważ prawdopodobieństwo, że ludzkość nie ulegnie samozniszczeniu. Uwzględnij wojny, zmiany klimatyczne, pandemie. Wysokie wartości = optymizm co do naszej przyszłości.',
    },
    {
      name: 'Oceń Chęć Symulowania',
      text: 'Gdyby ludzkość osiągnęła poziom postludzki, czy chciałaby tworzyć symulacje swojej przeszłości? Rozważ motywacje: badania naukowe, rozrywka, ochrona dziedzictwa historycznego.',
    },
    {
      name: 'Interpretuj wynik',
      text: 'Obserwuj, jak zmieniają się prawdopodobieństwa. Wyniki > 90% sugerują, że symulacja jest niemal nieunikniona, jeśli założenia zostaną spełnione. Graj z parametrami, aby badać różne scenariusze przyszłości.',
    },
  ];
const faq = [
    {
      question: 'Na czym dokładnie polega argument Bostroma?',
      answer: 'Nick Bostrom sugeruje, że jeśli postludzka cywilizacja posiada wystarczającą moc obliczeniową, mogłaby stworzyć miliony symulacji poprzednich wszechświatów. Jeśli tak się stanie, liczba istot symulowanych byłaby masowo wyższa niż oryginalnych istot biologicznych. Statystycznie rzecz biorąc, masz zatem większą szansę być istotą symulowaną niż oryginalną.',
    },
    {
      question: 'Czy wysokie prawdopodobieństwo oznacza, że na pewno jesteśmy symulacją?',
      answer: 'Nie. Wysokie prawdopodobieństwo sugeruje, że jest to poważna możliwość, którą należy wziąć pod uwagę, ale nie jest to dowód. Argument opiera się na założeniach dotyczących przyszłości technologii, które mogą się nie spełnić.',
    },
    {
      question: 'Jak wpłynęłaby na nas świadomość bycia symulacją?',
      answer: 'Filozoficznie wielu twierdzi, że nie zmienia to niczego fundamentalnego. Jeśli Ty i Twoi bliscy jesteście symulowani razem, Wasze doświadczenia, emocje i relacje pozostają realne i odczuwalne. Liczy się przeżyte doświadczenie, a nie podłoże.',
    },
    {
      question: 'Czy istnieją naukowe dowody na to, że żyjemy w symulacji?',
      answer: 'Nie ma rozstrzygających dowodów. Niektórzy fizycy wskazują na anomalie w mechanice kwantowej (kwantyzacja, splątanie) jako możliwe "optymalizacje obliczeniowe", ale są to spekulatywne interpretacje.',
    },
    {
      question: 'Jaką wartość powinienem przypisać zmiennej "N" (skala symulacji)?',
      answer: 'To zależy od Twoich przekonań na temat przyszłości informatyki. Niskie wartości (100-1000) zakładają ograniczenia zasobów. Wysokie wartości (miliony) zakładają praktycznie nieograniczoną moc obliczeniową. Większość dyskusji naukowych operuje na wartościach między 1000 a 1 bilionem.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Skopiowano',
    noHistory: 'Brak historii',
    load: 'Wczytaj',
    delete: 'Usuń',
    simulationParameters: 'Parametry Symulacji',
    fpLabel: 'fp',
    fpSub: 'Postęp Technologiczny',
    flLabel: 'fl',
    flSub: 'Przetrwanie Gatunku',
    fiLabel: 'fi',
    fiSub: 'Chęć Symulowania',
    nLabel: 'N',
    nSub: 'Skala Symulacji',
    probabilityTitle: 'Prawdopodobieństwo Symulacji',
    trilemmaResult: 'Werdykt Trilematu',
    scenario1: 'Scenariusz 1: Wyginięcie',
    scenario2: 'Scenariusz 2: Brak zainteresowania',
    scenario3: 'Scenariusz 3: Jesteśmy symulowani',
    fpDescription: 'Prawdopodobieństwo, że ludzkość osiągnie zdolność techniczną do symulowania wszechświatów ze świadomością.',
    flDescription: 'Prawdopodobieństwo uniknięcia upadku (wyginięcie, wojna) przed osiągnięciem poziomu postludzkiego.',
    fiDescription: 'Odsetek zaawansowanych cywilizacji, które zdecydują się tworzyć symulacje swoich przodków.',
    nDescription: 'Liczba symulowanych światów, które każda zaawansowana cywilizacja zazwyczaj uruchamia jednocześnie.',
    verdictDetail: 'Dane sugerują, że jest niezwykle prawdopodobne, iż Twoja świadomość jest procesem programowym.',
  },
  seo: [
    {
      type: 'title',
      text: 'Czy żyjemy w symulacji? Nauka stojąca za argumentem Nicka Bostroma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pomysł, że nasza rzeczywistość może być sztuczną konstrukcją, niezwykle zaawansowaną symulacją komputerową, przeszedł drogę od science fiction do poważnej debaty filozoficznej i naukowej. W 2003 roku filozof Nick Bostrom z Uniwersytetu Oksfordzkiego opublikował artykuł zatytułowany <em>"Czy żyjesz w symulacji komputerowej?"</em>, w którym zaproponował argument trilematu, rzucający wyzwanie naszej percepcji istnienia.',
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator prawdopodobieństwa symulacji wykorzystuje kluczowe parametry pochodzące z hipotezy Bostroma, aby oszacować szanse na to, że Twoja świadomość jest w rzeczywistości wynikiem procesu programowego wykonywanego przez postludzką cywilizację.',
    },
    {
      type: 'title',
      text: 'Filary Argumentu Symulacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Argument Bostroma nie stwierdza, że jesteśmy w symulacji, ale że co najmniej jedno z trzech poniższych twierdzeń jest prawie na pewno prawdziwe:',
    },
    {
      type: 'list',
      items: [
        '<strong>Przedwczesne wyginięcie:</strong> Gatunek ludzki wyginie przed osiągnięciem etapu postludzkiego, zdolnego do uruchamiania symulacji przodków.',
        '<strong>Brak zainteresowania technologicznego:</strong> Żadna postludzka cywilizacja nie będzie zainteresowana uruchamianiem symulacji swoich przodków z powodów etycznych lub rekreacyjnych.',
        '<strong>Wszechobecna symulacja:</strong> Prawie na pewno żyjemy w symulacji, ponieważ liczba symulowanych umysłów masowo przewyższa liczbę oryginalnych umysłów biologicznych.',
      ],
    },
    {
      type: 'title',
      text: 'Jak interpretować parametry',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aby poprawnie korzystać z tego narzędzia, niezbędne jest zrozumienie, co reprezentują zmienne modelu:',
    },
    {
      type: 'table',
      headers: ['Zmienna', 'Koncepcja', 'Znaczenie'],
      rows: [
        ['<strong>fp</strong>', 'Postęp Technologiczny', 'Prawdopodobieństwo, że cywilizacja osiągnie zdolność do symulowania umysłów.'],
        ['<strong>fl</strong>', 'Wskaźnik Przetrwania', 'Prawdopodobieństwo, że cywilizacja nie ulegnie samozniszczeniu przed osiągnięciem tego punktu.'],
        ['<strong>fi</strong>', 'Chęć Symulowania', 'Odsetek cywilizacji, które zdecydują się wykorzystać swoją moc do tworzenia wirtualnych światów.'],
        ['<strong>N</strong>', 'Skala Symulacji', 'Całkowita liczba symulacji, które stworzyłaby pojedyncza postludzka cywilizacja.'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego prawdopodobieństwo jest zazwyczaj tak wysokie?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeśli założymy, że postludzka cywilizacja posiadałaby ogromną moc obliczeniową (jak Sfera Dysona czy Mózg Jowisza), liczba <strong>N</strong> (symulacji) mogłaby iść w miliardy. Jeśli <em>N</em> jest bardzo duże, nawet przy niskich wartościach zainteresowania (<em>fi</em>), liczba istot symulowanych przewyższy o rzędy wielkości liczbę istot oryginalnych.',
    },
    {
      type: 'title',
      text: 'Dowody i limity obliczeniowe',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Od fizyki kwantowej po kosmologię, niektórzy naukowcy szukają "glitchy" lub limitów w rozdzielczości naszej rzeczywistości. Jeśli wszechświat ma minimalną długość (Długość Plancka) lub zachowania, które wyglądają jak optymalizacje kodu (takie jak splątanie kwantowe), hipoteza ta zyskuje zwolenników w dziedzinie fizyki cyfrowej.',
    },
    {
      type: 'title',
      text: 'Refleksja etyczna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gdybyśmy odkryli, że jesteśmy symulacją, czy nasza moralność uległaby zmianie? Dla Bostroma liczy się doświadczenie świadomości. Symulowany umysł cierpi i kocha tak samo jak biologiczny.',
    },
    {
      type: 'title',
      text: 'Zastosowania Kalkulatora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Edukacja naukowa:</strong> Zrozumienie modeli probabilistycznych stosowanych w kosmologii.',
        '<strong>Filozofia współczesna:</strong> Interaktywne badanie trilematu Bostroma.',
        '<strong>Futurologia:</strong> Analiza wpływu wskaźnika przetrwania gatunku na nasze przeznaczenie.',
        '<strong>Egzystencjalna ciekawość:</strong> Ocena własnych przekonań na temat przyszłości technologii.',
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
      description: description,
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

