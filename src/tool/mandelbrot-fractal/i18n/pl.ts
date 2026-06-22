import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-fraktala-mandelbrota';
const title = 'Kalkulator fraktala Mandelbrota i eksplorator samopodobieństwa';
const description = 'Badaj zbiór Mandelbrota, przybliżaj samopodobne granice fraktali i porównuj głębokość iteracji, kontrast kolorów oraz współrzędne płaszczyzny zespolonej.';

const howTo = [
  {
    name: 'Wybierz obszar zbioru Mandelbrota',
    text: 'Zacznij od całego zbioru lub przejdź bezpośrednio do obszaru o wysokiej szczegółowości, takiego jak Dolina Konika Morskiego lub spiralny minibrot.',
  },
  {
    name: 'Przybliż, klikając obraz',
    text: 'Kliknij dowolny punkt na kanwie, aby wycentrować płaszczyznę zespoloną i powiększyć fraktal wokół tej współrzędnej.',
  },
  {
    name: 'Dostosuj głębokość iteracji i kontrast kolorów',
    text: 'Zwiększ budżet iteracji, aby odsłonić drobniejszą strukturę granicy, a następnie wyreguluj kontrast i paletę, by pasma czasu ucieczki były łatwiejsze do odczytania.',
  },
];

const faq = [
  {
    question: 'Co pokazuje kalkulator zbioru Mandelbrota?',
    answer: 'Pokazuje, które liczby zespolone c utrzymują rekurencję z(n+1) = z(n)^2 + c ograniczoną, gdy zaczniemy od z = 0. Punkty, które nigdy nie uciekają w ramach wybranego budżetu iteracji, są kolorowane jako części zbioru, podczas gdy punkty zewnętrzne są kolorowane według tego, jak szybko ich orbita ucieka.',
  },
  {
    question: 'Dlaczego granica zbioru Mandelbrota zawiera tak wiele szczegółów?',
    answer: 'Granica oddziela stabilne i uciekające orbity, a małe zmiany współrzędnych w pobliżu tej granicy mogą całkowicie zmienić długoterminowe zachowanie. Ta wrażliwość tworzy zagnieżdżone bulwy, spirale, filamenty i miniaturowe kopie, które pojawiają się na wielu poziomach powiększenia.',
  },
  {
    question: 'Czy zbiór Mandelbrota jest naprawdę samopodobny?',
    answer: 'Nie jest idealnie samopodobny w taki sam ścisły sposób jak trójkąt Sierpińskiego, ale jest bogato quasi-samopodobny. Małe kopie całego zbioru pojawiają się w całej płaszczyźnie, często zniekształcone i połączone rozbudowanymi strukturami gałęzistymi.',
  },
  {
    question: 'Co kontroluje liczba iteracji?',
    answer: 'Liczba iteracji kontroluje, jak długo kalkulator testuje każdy punkt przed podjęciem decyzji, że prawdopodobnie należy do zbioru. Wyższe wartości ujawniają głębsze filamenty i czystsze minibroty, ale wymagają więcej obliczeń na piksel.',
  },
  {
    question: 'Dlaczego kolory zmieniają się poza czarnym obszarem?',
    answer: 'Kolory zewnętrzne są oparte na czasie ucieczki: punkty, które uciekają szybko, otrzymują inne kolory niż punkty, które pozostają blisko zbioru przez wiele iteracji. Łagodne kolorowanie redukuje ostre pasma i ułatwia badanie geometrii pobliskich orbit.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulator fraktala Mandelbrota',
    canvasLabel: 'Interaktywna kanwa zbioru Mandelbrota',
    presetsLabel: 'Presety obszarów Mandelbrota',
    presetFull: 'Cały Zbiór',
    presetSeahorse: 'Dolina Konika Morskiego',
    presetSpiral: 'Spiralny Minibrot',
    centerPoint: 'Środek',
    magnification: 'Powiększenie',
    visibleWindow: 'Widoczne okno',
    renderBudget: 'Iteracje',
    iterationsLabel: 'Głębokość iteracji',
    contrastLabel: 'Kontrast ucieczki',
    colorLabel: 'Pole koloru',
    paletteEmber: 'Pasma żarzenia',
    paletteLagoon: 'Plazma lagunowa',
    paletteInk: 'Spektrum atramentu',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator zbioru Mandelbrota: Fraktale, czas ucieczki i samopodobieństwo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator fraktala Mandelbrota renderuje klasyczny zbiór na płaszczyźnie zespolonej, zdefiniowany przez iterację <strong>z(n+1) = z(n)^2 + c</strong>. Jest zaprojektowany do eksploracji, a nie biernego oglądania: każde kliknięcie wycentrowuje płaszczyznę, każde zbliżenie odsłania mniejsze matematyczne sąsiedztwo, a suwak iteracji pozwala zdecydować, jak głęboko kalkulator powinien testować granice przed pokolorowaniem punktu jako stabilnego lub uciekającego.',
    },
    {
      type: 'title',
      text: 'Jak czytać obraz Mandelbrota',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ciemny centralny kształt oznacza punkty, których orbity pozostają ograniczone w ramach obecnego budżetu iteracji. Kolorowe zewnętrzne to mapa czasu ucieczki. Punkt pokolorowany blisko zbioru może przetrwać setki iteracji, zanim jego wielkość przekroczy promień ucieczki, podczas gdy punkt daleko ucieka prawie natychmiast. Najbardziej interesująca naukowo geometria zwykle nie znajduje się wewnątrz wypełnionego kształtu, ale wzdłuż granicy, gdzie ograniczone i nieograniczone zachowanie się przeplata.',
    },
    {
      type: 'table',
      headers: ['Sterowanie', 'Co zmienia', 'Kiedy zwiększyć'],
      rows: [
        ['<strong>Głębokość iteracji</strong>', 'Ile kroków rekurencji jest testowanych dla każdego piksela.', 'Używaj wyższych wartości po zbliżeniu do cienkich filamentów lub miniaturowych kopii.'],
        ['<strong>Kontrast ucieczki</strong>', 'Jak silnie gładkie wartości ucieczki są rozdzielane na widoczne pasma.', 'Podnieś go, gdy obraz wygląda płasko; obniż, gdy kolory są zbyt ostre.'],
        ['<strong>Paleta</strong>', 'Mapowanie kolorów zastosowane do punktów zewnętrznych.', 'Zmieniaj palety, aby odsłonić struktury, które mogą być ukryte przez jedno pole koloru.'],
      ],
    },
    {
      type: 'title',
      text: 'Samopodobieństwo i Minibroty',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jednym z powodów, dla których zbiór Mandelbrota jest tak słynny, jest jego quasi-samopodobieństwo. Gdy zbliżasz się do anten, spiral i dolin, wielokrotnie napotykasz małe, przypominające Mandelbrota wyspy, często nazywane minibrotami. Te kopie nie są jedynie dekoracyjne. Ich ułożenie odzwierciedla dynamikę odwzorowań kwadratowych, w tym okresowe bulwy, wzory bifurkacji i obszary, w których orbity pozostają uwięzione przez długi czas przed ucieczką.',
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