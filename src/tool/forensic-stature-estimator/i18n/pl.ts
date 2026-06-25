import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-szacowania-wzrostu-trotter-gleser-antropologia-sadowa';
const title = 'Sądowy Estymator Wzrostu';
const description = 'Szacowanie wzrostu w okresie życia na podstawie kości długich człowieka przy użyciu równań regresji Trotter i Gleser z uwzględnieniem płci, pochodzenia i poprawki na wiek.';

const howTo = [
  {
    name: 'Wybierz kość i zmienne',
    text: 'Wybierz konkretną kość długą do pomiaru (Kość udowa, piszczelowa, ramienna, strzałkowa, promieniowa lub łokciowa), a także płeć biologiczną, grupę pochodzenia i wiek osobnika.'
  },
  {
    name: 'Określ długość kości',
    text: 'Dopasuj suwak na wirtualnej tablicy osteometrycznej, aby wskazać maksymalną długość próbki kości w centymetrach.'
  },
  {
    name: 'Oblicz szacowany wzrost',
    text: 'Kalkulator stosuje odpowiednie równania regresji Trotter-Gleser, odejmując 0.06 cm za każdy rok życia powyżej 30 lat.'
  },
  {
    name: 'Zinterpretuj przedziały i błędy',
    text: 'Przeanalizuj szacowany wzrost, błąd standardowy estymacji (SEE) oraz 95% przedział predykcji.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Jak działają równania regresji Trotter i Gleser?',
    answer: 'Równania te wykorzystują regresję liniową do modelowania korelacji między wzrostem za życia a maksymalną długością kości długich. Kalkulator stosuje specyficzne współczynniki dla danej płci i pochodzenia.'
  },
  {
    key: 'faq-2',
    question: 'Dlaczego narzędzie wymaga podania płci biologicznej i pochodzenia?',
    answer: 'Proporcje ludzkiego ciała różnią się w zależności od płci i populacji geograficznych. Mężczyźni mają ogólnie inne proporcje kończyn do wzrostu niż kobiety.'
  },
  {
    key: 'faq-3',
    question: 'Dlaczego w szacowaniu wzrostu występuje poprawka na wiek?',
    answer: 'Wzrost za życia zmniejsza się stopniowo po okresie wczesnej dorosłości z powodu kompresji krążków międzykręgowych. Trotter i Gleser zalecali odjęcie 0,06 cm za każdy rok powyżej 30 roku życia.'
  },
  {
    key: 'faq-4',
    question: 'Co to jest błąd standardowy estymacji (SEE)?',
    answer: 'SEE reprezentuje odchylenie standardowe reszt w modelu regresji, określające dokładność przewidywanego wzrostu dla danej kości.'
  },
  {
    key: 'faq-5',
    question: 'Które kości długie dają najdokładniejsze szacunki wzrostu?',
    answer: 'Kości kończyn dolnych (w szczególności kość udowa i piszczelowa) dają najdokładniejsze wyniki, ponieważ bezpośrednio wpływają na wzrost człowieka.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Sądowy Estymator Wzrostu',
    desc: 'Symuluj pomiary na tablicy osteometrycznej i obliczaj wzrost za życia przy użyciu regresji liniowej.',
    configTitle: 'Konfiguracja Osteometryczna',
    boneLabel: 'Próbka Kości',
    lengthLabel: 'Długość Kości',
    unitLabel: 'Jednostka Układu',
    metricOption: 'Metryczny (cm)',
    imperialOption: 'Imperialny (cale)',
    sexLabel: 'Płeć Biologiczna',
    ancestryLabel: 'Grupa Pochodzenia',
    ageLabel: 'Wiek w Chwili Śmierci (lata)',
    maleOption: 'Mężczyzna',
    femaleOption: 'Kobieta',
    whiteOption: 'Biała / Kaukaska',
    blackOption: 'Czarna / Afroamerykańska',
    asianOption: 'Azjatycka / Mongoloidalna',
    femurName: 'Kość udowa',
    tibiaName: 'Kość piszczelowa',
    humerusName: 'Kość ramienna',
    fibulaName: 'Kość strzałkowa',
    radiusName: 'Kość promieniowa',
    ulnaName: 'Kość łokciowa',
    resultsTitle: 'Wyniki Szacowania Wzrostu',
    estimateLabel: 'Szacowany Wzrost',
    errorLabel: 'Błąd Standardowy (SEE)',
    rangeLabel: '95% Przedział Predykcji',
    formulaLabel: 'Równanie Regresji',
    formulaBoneFactor: 'Czynnik Kości',
    formulaConstant: 'Stała',
    formulaAgeCorrection: 'Poprawka na Wiek',
    formulaStdError: 'Błąd Standardowy (SEE)',
    fallbackAlert: 'Brak bezpośredniego równania Trotter-Gleser dla kobiet pochodzenia azjatyckiego; jako alternatywę zastosowano równania dla kobiet rasy kaukaskiej.',
    boardInstructions: 'Przeciągnij suwak kumpasu lub użyj pól tekstowych, aby zmierzyć kość.',
    rulerLabelMetric: 'Skala Metryczna (mm)',
    rulerLabelImperial: 'Skala Imperialna (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Kompleksowy przewodnik po szacowaniu wzrostu w antropologii sądowej',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Szacowanie wzrostu stanowi fundamentalny element tworzenia profilu biologicznego w antropologii fizycznej, bioarcheologii oraz medycynie sądowej. W przypadku odnalezienia szczątków kostnych, rekonstrukcja wzrostu za życia pomaga śledczym w identyfikacji tożsamości poprzez porównanie z bazą osób zaginionych. Wzrost szacuje się mierząc maksymalną długość kości długich, które ściśle korelują z wysokością ciała.'
    },
    {
      type: 'paragraph',
      html: 'Ten cyfrowy symulator tablicy osteometrycznej pozwala studentom i specjalistom badać liniowe modele regresji opracowane przez Mildred Trotter i Goldine C. Gleser. Poprzez konfigurację takich zmiennych jak typ kości, płeć, pochodzenie oraz wiek, użytkownicy mogą analizować wpływ proporcji ciała na stałe matematyczne.'
    },
    {
      type: 'title',
      text: 'Zrozumienie wzorów regresji Trotter-Gleser',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter i Goldine C. Gleser opublikowały swoje kluczowe równania w latach 1952 i 1958. Równania te mają postać liniową: Wzrost = (Współczynnik × Długość Kości) + Stała ± Błąd Standardowy. Z uwagi na różnice w proporcjach ciała, stosuje się odrębne wzory dla płci i grup pochodzenia.'
    },
    {
      type: 'table',
      headers: ['Próbka Kości Długiej', 'Model dla białych mężczyzn', 'Model dla białych kobiet', 'Użyteczność i wiarygodność sądowa'],
      rows: [
        ['Kość udowa (Femur)', 'Wzrost = 2.32 × Femur + 65.53 ± 3.94 cm', 'Wzrost = 2.47 × Femur + 54.10 ± 3.72 cm', 'Najwyższa ogólna wiarygodność. Kość udowa jest głównym elementem nośnym kończyny dolnej.'],
        ['Kość piszczelowa (Tibia)', 'Wzrost = 2.42 × Tibia + 81.93 ± 4.00 cm', 'Wzrost = 2.90 × Tibia + 61.53 ± 3.66 cm', 'Wysoka wiarygodność. Należy zachować ostrożność, by mierzyć bez kostki przyśrodkowej, zgodnie z protokołem Trotter.'],
        ['Kość strzałkowa (Fibula)', 'Wzrost = 2.60 × Fibula + 75.50 ± 3.86 cm', 'Wzrost = 2.93 × Fibula + 59.61 ± 3.57 cm', 'Wysoka wiarygodność, jednak kość strzałkowa jest delikatna i często ulega fragmentacji.'],
        ['Kość ramienna (Humerus)', 'Wzrost = 2.89 × Humerus + 78.10 ± 4.57 cm', 'Wzrost = 3.36 × Humerus + 57.97 ± 4.45 cm', 'Umiarkowana wiarygodność. Kończyny górne nie przenoszą ciężaru ciała i wykazują większe błędy standardowe.'],
        ['Kość promieniowa (Radius)', 'Wzrost = 3.79 × Radius + 79.42 ± 4.66 cm', 'Wzrost = 4.74 × Radius + 54.93 ± 4.45 cm', 'Niższa wiarygodność z uwagi na znaczną indywidualną zmienność proporcji przedramienia.']
      ]
    },
    {
      type: 'title',
      text: 'Utrata wzrostu z wiekiem i poprawki pośmiertne',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Wzrost za życia nie jest stały. Począwszy od 30 roku życia ciało ludzkie ulega stopniowemu obniżeniu z powodu ucisku tarczek międzykręgowych. Trotter i Gleser zalecali odjęcie 0,06 cm za każdy rok powyżej trzydziestki: Utrata wzrostu = 0,06 × (Wiek - 30).'
    },
    {
      type: 'title',
      text: 'Rozbieżności metodologiczne w protokole pomiaru piszczeli',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Znany problem metodologiczny w antropologii sądowej dotyczy pomiarów kości piszczelowej. W badaniu z 1952 roku piszczel mierzono bez kostki przyśrodkowej, natomiast w 1958 roku włączono ją do pomiarów. Stosowanie równań z 1952 roku do piszczeli zmierzonej z kostką prowadzi do systematycznego zawyżania wyników.'
    },
    {
      type: 'title',
      text: 'Trendy sekularne i zastosowanie historycznych danych referencyjnych',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Dane referencyjne Trotter-Gleser pochodzą od osób urodzonych na przełomie XIX i XX wieku. W ciągu ostatniego stulecia nastąpił pozytywny trend sekularny (populacje stają się wyższe). Współcześni antropolodzy często uzupełniają te badania nowocześniejszymi bazami danych, takimi jak FORDISC.'
    }
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
