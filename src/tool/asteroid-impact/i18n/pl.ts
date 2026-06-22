const slug = 'symulator-uderzenia-asteroidy';
const description = 'Symuluj uderzenia asteroid przy użyciu prawdziwej fizyki. Oblicz energię, rozmiar krateru, promieniowanie cieplne i falę uderzeniową. Czy przetrwałbyś Chicxulub?';
const title = 'Symulator Uderzenia Asteroidy: Kalkulator Apokalipsy';
const howTo = [
    {
      name: 'Wybierz rozmiar pocisku',
      text: 'Wprowadź średnicę asteroidy, od małego 10-metrowego meteorytu po 10-kilometrowego zabójcę planet.',
    },
    {
      name: 'Skonfiguruj prędkość i kąt',
      text: 'Dostosuj prędkość podejścia i kąt wlotu (45° to statystycznie najbardziej prawdopodobna wartość).',
    },
    {
      name: 'Określ naturę asteroidy',
      text: 'Wybierz, czy asteroida składa się ze skały, żelaza czy lodu, aby poprawnie obliczyć głębokość krateru.',
    },
    {
      name: 'Przeanalizuj werdykt przetrwania',
      text: 'Przeciągnij asteroidę na mapę i wskaż, jak daleko się znajdujesz, aby zobaczyć skutki promieniowania, trzęsienia ziemi i fali uderzeniowej.',
    },
  ];
const faq = [
    {
      question: 'Jak obliczana jest energia uderzenia?',
      answer: 'Główną energią jest energia kinetyczna: (1/2) * masa * prędkość². Używamy realistycznych gęstości (np. 3000 kg/m³ dla asteroid skalistych) i typowych prędkości wchodzenia w atmosferę (od 11 do 72 km/s). Wynikowa energia jest mierzona w megatonach TNT.',
    },
    {
      question: 'Co to jest termiczna fala uderzeniowa?',
      answer: 'Wchodząc w atmosferę, asteroida spręża powietrze tak gwałtownie, że tworzy kulę ognia tysiąc razy jaśniejszą niż Słońce. Wynikające z tego promieniowanie cieplne może powodować oparzenia trzeciego stopnia i wywoływać pożary lasów wiele kilometrów od miejsca uderzenia.',
    },
    {
      question: 'Dlaczego niektóre asteroidy nie tworzą kraterów?',
      answer: 'Mniejsze skały (<50m) zazwyczaj rozpadają się i eksplodują w atmosferze pod wpływem ciśnienia powietrza (Eksplozja powietrzna), jak to miało miejsce w Czelabińsku. Energia jest uwalniana w postaci potężnej fali ciśnienia, ale nie uderza w ziemię jako ciało stałe.',
    },
    {
      question: 'Jakie jest realne prawdopodobieństwo uderzenia?',
      answer: 'Małe uderzenia (jak w Rosji w 2013 roku) zdarzają się co dekadę. Katastrofalne uderzenia (w stylu Tunguski) co kilka stuleci. Globalne wymieranie, takie jak po Chicxulub, zdarza się mniej więcej co 100 milionów lat.',
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
    activateGPS: 'Aktywuj GPS',
    analysisLabel: 'Analiza',
    dragToMap: 'PRZECIĄGNIJ NA MAPĘ',
    diameterLabel: 'Średnica',
    velocityLabel: 'Prędkość',
    typeLabel: 'Typ',
    historicalData: 'Dane Historyczne',
    composition: 'Skład',
    rock: 'Skała',
    iron: 'Żelazo',
    ice: 'Lód',
    clearAll: 'Wyczyść wszystko',
    searching: 'Szukanie...',
    gpsActive: 'GPS Aktywny',
    gpsError: 'Błąd GPS',
    verdictSafe: 'STREFA BEZPIECZNA',
    verdictSafeSub: 'Brak zagrożeń',
    verdictShock: 'FALA UDERZENIOWA',
    verdictShockSub: 'Uszkodzenia strukturalne',
    verdictBurned: 'PROMIENIOWANIE CIEPLNE',
    verdictBurnedSub: 'Ekstremalne niebezpieczeństwo',
    verdictVaporized: 'GROUND ZERO',
    verdictVaporizedSub: 'Uderzenie bezpośrednie',
    presetAerial: 'Eksplozja powietrzna',
    presetForest: 'Las',
    presetComet: 'Kometa',
    presetELE: 'E.L.E.',
  },
  seo: [
    {
      type: 'title',
      text: 'Kiedy Niebo Spada: Fizyka Kosmicznej Apokalipsy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Asteroidy to nie tylko kosmiczne skały. To kosmiczne pociski poruszające się z prędkością 20 km/s, zdolne do wyzwolenia energii większej niż cała broń nuklearna na planecie razem wzięta. Ten symulator przekłada abstrakcyjną fizykę na wymierne konsekwencje dla ludzi.',
    },
    {
      type: 'title',
      text: 'Równanie Dnia Sądu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wszystko zaczyna się od energii kinetycznej: <strong>E = ½mv²</strong>. Asteroida o średnicy 100 metrów poruszająca się z prędkością 20 km/s wyzwala około 0,5 megatony TNT. Dla porównania, bomba z Hiroszimy miała moc 0,015 megatony.',
    },
    {
      type: 'paragraph',
      html: 'Jednak rozmiar skaluje się wykładniczo. Obiekt 10 razy większy ma 1000 razy większą objętość (i masę), wyzwalając energię równoważną <strong>500 megatonom</strong>. Chicxulub, zabójca dinozaurów, wyzwolił równowartość <strong>100 milionów megaton</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Asteroida o średnicy 1 km uderzająca w Ziemię wyzwoliłaby więcej energii niż cała broń nuklearna planety zdetonowana jednocześnie.',
    },
    {
      type: 'title',
      text: 'Anatomia Zniszczenia: Koncentryczne Warstwy Apokalipsy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Krater (Ground Zero):</strong> Średnica krateru skaluje się z E^0.3. Uderzenie o mocy 1 megatony tworzy krater o średnicy ok. 1 km. Wszystko wewnątrz zostaje natychmiast odparowane.',
        '<strong>Promieniowanie Cieplne (Błysk):</strong> Kula ognia emituje intensywne promieniowanie podczerwone. W odległości E^0.41 km ubrania stają w płomieniach, a skóra ulega oparzeniom trzeciego stopnia.',
        '<strong>Fala Uderzeniowa (Młot):</strong> Fala nadciśnienia porusza się z prędkością naddźwiękową. Przy 1 psi pękają szyby. Przy 5 psi budynki ulegają zawaleniu.',
        '<strong>Trzęsienie Ziemi (Echo Sejsmiczne):</strong> Uderzenie generuje globalne fale sejsmiczne. Chicxulub spowodował trzęsienie ziemi o magnitudzie 11, wykraczając poza skalę Richtera.',
      ],
    },
    {
      type: 'title',
      text: 'Historyczne Uderzenia: Lekcje z Przeszłości',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Lokalizacja i Rok', 'Rozmiar', 'Energia', 'Skutki'],
      rows: [
        ['Czelabińsk, Rosja (2013)', '20 metrów', '500 kiloton', 'Fala uderzeniowa w promieniu 100 km, 1500 rannych, wybite szyby'],
        ['Tunguska, Syberia (1908)', '50-60 metrów', '10-15 megaton', 'Powalono 2000 km² lasu, 80 milionów drzew'],
        ['Chicxulub, Zatoka Meksykańska (66 mln lat temu)', '10 km', '100 milionów megaton', 'Wyginięcie 75% życia na Ziemi'],
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


