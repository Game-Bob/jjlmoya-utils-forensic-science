import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'wyszukiwarka-struktury-sieci-krystalicznej';
const title = 'Wyszukiwarka struktury sieci krystalicznej';
const description = 'Poznaj komórki elementarne sieci regularnej prostej, regularnej ściennie centrowanej (FCC/RSC) i heksagonalnej zwartej (HCP) za pomocą interaktywnego podglądu 3D, kalkulatora wskaźnika wypełnienia, liczby koordynacyjnej i gęstości teoretycznej.';

const howTo = [
  {
    name: 'Wybierz sieć lub materiał',
    text: 'Zacznij od rodziny struktur, takich jak regularna prosta, FCC lub HCP, albo wybierz preset rzeczywistego materiału, aby załadować jego stałą sieciową oraz masę atomową lub formuły.',
  },
  {
    name: 'Obróć komórkę elementarną',
    text: 'Przeciągaj elementy sterowania kątem i zoomem, aby sprawdzić, które atomy znajdują się w narożach, na ścianach lub wewnątrz konwencjonalnej komórki.',
  },
  {
    name: 'Odczytaj wypełnienie i gęstość',
    text: 'Porównaj wskaźnik wypełnienia, liczbę koordynacyjną, liczbę atomów na komórkę, masę komórki, objętość komórki i gęstość teoretyczną dla wybranej struktury.',
  },
  {
    name: 'Przetestuj własne stałe',
    text: 'Edytuj parametr sieci a, stosunek c/a i masę, aby zobaczyć, jak zmienia się gęstość teoretyczna, gdy kryształ rozszerza się, kurczy lub zmienia skład.',
  },
];

const faq = [
  {
    question: 'Czym jest komórka elementarna w sieci krystalicznej?',
    answer: 'Komórka elementarna to najmniejszy powtarzalny trójwymiarowy blok, który może wypełnić przestrzeń, tworząc kryształ. Jej atomy mogą być współdzielone z sąsiednimi komórkami, więc netto liczba atomów na komórkę może być mniejsza niż liczba kul narysowanych na granicach.',
  },
  {
    question: 'Dlaczego FCC i HCP mają ten sam wskaźnik wypełnienia?',
    answer: 'FCC i idealna HCP to zwarte ułożenia równych kul. Układają one gęste trójkątne warstwy w różnych sekwencjach: ABCABC dla FCC i ABAB dla HCP, ale obie wypełniają około 74 procent przestrzeni atomami.',
  },
  {
    question: 'Jak obliczana jest gęstość teoretyczna?',
    answer: 'Kalkulator dzieli masę wewnątrz jednej komórki elementarnej przez objętość komórki. Masa komórki pochodzi z liczby atomów lub jednostek formuły na komórkę pomnożonej przez masę molową i podzielonej przez stałą Avogadra.',
  },
  {
    question: 'Dlaczego zmierzona gęstość może różnić się od wyniku teoretycznego?',
    answer: 'Rzeczywiste próbki mogą zawierać wakancje, zanieczyszczenia, pory, granice ziaren, mieszaniny izotopowe, rozszerzalność temperaturową lub wiele faz. Wartość teoretyczna zakłada idealny kryształ z wybraną stałą sieciową.',
  },
  {
    question: 'Czy halit to naprawdę metaliczna sieć FCC?',
    answer: 'Nie. Halit to jonowa sól kamienna, a nie metal. Preset wykorzystuje jego konwencjonalną komórkę wywodzącą się z FCC, ponieważ NaCl ma cztery jednostki formuły na komórkę sześcienną, co czyni go przydatnym do ćwiczeń z obliczania gęstości.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'Interaktywna krystaliczna komórka elementarna',
    material: 'Materiał',
    lattice: 'Sieć',
    rotation: 'Obrót',
    zoom: 'Zoom',
    latticeA: 'Stała sieci a',
    cRatio: 'Stosunek c/a',
    molarMass: 'Masa molowa',
    atomsPerCell: 'Atomów na komórkę',
    packingFactor: 'Wskaźnik wypełnienia',
    coordination: 'Koordynacja',
    density: 'Gęstość',
    cellVolume: 'Objętość komórki',
    cellMass: 'Masa komórki',
    radius: 'Promień atomowy',
    cornerAtoms: 'Atomy narożne',
    faceAtoms: 'Atomy ścienne',
    interiorAtoms: 'Atomy wewnętrzne',
    materialNote: 'Uwaga o materiale',
    formula: 'Wzór',
    resetView: 'Resetuj widok',
    crystalProperties: 'Właściwości kryształu',
    physicalMetrics: 'Parametry fizyczne',
    latticeSimpleCubic: 'Regularna prosta',
    latticeFcc: 'Regularna ściennie centrowana (FCC)',
    latticeHcp: 'Heksagonalna zwarta (HCP)',
    shortSc: 'RP',
    shortFcc: 'FCC',
    shortHcp: 'HCP',
    materialCopper: 'Miedź',
    materialCopperNote: 'Powszechny metal FCC o wysokim przewodnictwie elektrycznym.',
    materialAluminum: 'Aluminium',
    materialAluminumNote: 'Lekki metal FCC używany jako wzorzec gęstości na zajęciach.',
    materialPolonium: 'Polon alfa',
    materialPoloniumNote: 'Rzadki przykład pierwiastkowego kryształu o sieci regularnej prostej.',
    materialMagnesium: 'Magnez',
    materialMagnesiumNote: 'Metal HCP o stosunku c/a bliskim idealnemu upakowaniu.',
    materialTitanium: 'Tytan alfa',
    materialTitaniumNote: 'Faza HCP tytanu w temperaturze pokojowej.',
    materialHalite: 'Aproksymacja halitu',
    materialHaliteNote: 'Sól kamienna modelowana przez konwencjonalną komórkę FCC z czterema jednostkami wzoru NaCl.',
    shortSimpleCubic: 'SC',
    shortFaceCenteredCubic: 'FCC',
    shortHexagonalClosePacked: 'HCP',
    shortBodyCenteredCubic: 'BCC',
    shortDiamondCubic: 'DC',
    shortRockSalt: 'NaCl',
    shortCesiumChloride: 'CsCl',
    shortZincBlende: 'ZnS',
    shortWurtzite: 'WZ',
    shortPerovskite: 'ABO3',
    shortRutile: 'TiO2',
    latticeBodyCenteredCubic: 'Regularna przestrzennie centrowana',
    latticeCesiumChloride: 'Chlorek cezu',
    latticeDiamondCubic: 'Regularna diamentowa',
    latticeFaceCenteredCubic: 'Regularna ściennie centrowana',
    latticeHexagonalClosePacked: 'Heksagonalna zwarta',
    latticePerovskite: 'Perowskit regularny',
    latticeRockSalt: 'Sól kamienna',
    latticeRutile: 'Rutyl',
    latticeWurtzite: 'Wurcyt',
    latticeZincBlende: 'Blenda cynkowa',
    materialAlphaIron: 'Żelazo alfa',
    materialAlphaIronNote: 'Faza żelaza BCC w temperaturze pokojowej.',
    materialTungsten: 'Wolfram',
    materialTungstenNote: 'Gęsty metal ogniotrwały BCC o bardzo wysokiej temperaturze topnienia.',
    materialSilicon: 'Krzem',
    materialSiliconNote: 'Półprzewodnik o strukturze diamentowej używany w układach scalonych.',
    materialDiamond: 'Diament',
    materialDiamondNote: 'Kowalencyjna sieć węglowa w strukturze regularnej diamentowej.',
    materialCesiumChloride: 'Chlorek cezu',
    materialCesiumChlorideNote: 'Przenikająca się prosta struktura jonowa o koordynacji ośmiokrotnej.',
    materialZincSulfide: 'Siarczek cynku',
    materialZincSulfideNote: 'Sfalerit, zwany też blendą cynkową, o koordynacji tetraedrycznej.',
    materialGalliumNitride: 'Azotek galu',
    materialGalliumNitrideNote: 'Półprzewodnik wurcytowy używany w LED i elektronice mocy.',
    materialStrontiumTitanate: 'Tytanian strontu',
    materialStrontiumTitanateNote: 'Regularny tlenek perowskitowy używany jako podłoże i model dielektryczny.',
    materialRutileTitania: 'Tytania rutylowa',
    materialRutileTitaniaNote: 'Struktura rutylowa TiO2 z oktaedryczną koordynacją tytanu.',
  },
  seo: [
    {
      type: 'title',
      text: 'Wyszukiwarka struktury sieci krystalicznej dla komórek elementarnych, wskaźnika wypełnienia i gęstości',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ta wyszukiwarka struktury sieci krystalicznej pomaga połączyć obraz komórki elementarnej z obliczeniami, których zwykle potrzebują studenci i inżynierowie materiałowi. Możesz badać struktury regularną prostą, regularną ściennie centrowaną (FCC/RSC) i heksagonalną zwartą (HCP), a następnie obliczać wskaźnik wypełnienia, liczbę koordynacyjną, liczbę atomów na komórkę, promień atomowy z parametru sieci, objętość komórki, masę komórki i gęstość teoretyczną na podstawie presetów rzeczywistych materiałów lub własnych parametrów.',
    },
    {
      type: 'paragraph',
      html: 'Interaktywny podgląd został zaprojektowany z myślą o typowej trudności w krystalografii: atomy graniczne są widoczne, ale tylko ułamek każdego atomu granicznego należy do wybranej komórki. Obrót modelu ułatwia dostrzeżenie różnicy między pozycjami narożnymi, ściennymi i wewnętrznymi, zanim użyje się wzoru numerycznego.',
    },
    {
      type: 'title',
      text: 'Porównanie sieci regularnej prostej, FCC i HCP',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Struktura', 'Netto atomów na komórkę', 'Liczba koordynacyjna', 'Wskaźnik wypełnienia', 'Typowe przykłady'],
      rows: [
        ['Regularna prosta', '1', '6', '52,36%', 'Polon alfa to klasyczny pierwiastek przykład.'],
        ['Regularna ściennie centrowana', '4', '12', '74,05%', 'Miedź, aluminium, nikiel, srebro, złoto i wiele ciągliwych metali.'],
        ['Heksagonalna zwarta', '6', '12', '74,05%', 'Magnez, tytan alfa, cynk, kobalt i beryl.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Wypełnienie sieci regularnej prostej jest łatwe do wyobrażenia, ponieważ atomy stykają się wzdłuż krawędzi sześcianu, a każdy atom narożny wnosi jedną ósmą do komórki. FCC dodaje atomy w środku każdej ściany, więc atomy stykają się wzdłuż przekątnych ściany, a netto liczba atomów wynosi cztery na konwencjonalną komórkę sześcienną. HCP wykorzystuje warstwy heksagonalne zamiast sześciennego pudełka, ale idealna HCP osiąga tę samą granicę zwartego wypełnienia co FCC.',
    },
    {
      type: 'title',
      text: 'Wzór na wskaźnik wypełnienia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wskaźnik wypełnienia to ułamek objętości komórki elementarnej zajętej przez atomy w modelu twardych kul. Oblicza się go jako <strong>APF = objętość atomów w komórce / objętość komórki elementarnej</strong>. Dla sieci regularnej prostej jest to pi / 6, ponieważ jeden atom o promieniu a/2 mieści się w komórce sześciennej. FCC i idealna HCP osiągają około 0,7405, co jest maksymalnym ułamkiem wypełnienia dla równych kul.',
    },
    {
      type: 'paragraph',
      html: 'Wskaźnik wypełnienia to nie to samo co gęstość. APF opisuje, jak efektywnie identyczne kule wypełniają przestrzeń, podczas gdy gęstość zależy również od masy molowej i wymiarów sieci. Lekki metal HCP i ciężki metal FCC mogą mieć podobne wskaźniki wypełnienia, ale bardzo różne gęstości.',
    },
    {
      type: 'title',
      text: 'Wzór na gęstość teoretyczną używany przez kalkulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator używa <strong>rho = nM / (NA Vkomórki)</strong>. W tym równaniu <strong>n</strong> to liczba atomów lub jednostek formuły na komórkę, <strong>M</strong> to masa molowa w gramach na mol, <strong>NA</strong> to stała Avogadra, a <strong>Vkomórki</strong> to objętość komórki elementarnej w centymetrach sześciennych. Komórki sześcienne używają a^3. Komórki heksagonalne używają (3 sqrt(3) / 2) a^2 c, gdzie c jest podawane przez stosunek c/a.',
    },
    {
      type: 'paragraph',
      html: 'Ponieważ stałe sieciowe są zwykle podawane w angstremach, kalkulator przelicza angstremy na centymetry przed obliczeniem gęstości. Niewielka zmiana stałej sieciowej może wyraźnie wpłynąć na gęstość, ponieważ objętość skaluje się z trzecią potęgą dla komórek sześciennych.',
    },
    {
      type: 'title',
      text: 'Jak używać presetów sieci dla metali i minerałów',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Miedź i aluminium:</strong> porównaj dwa metale FCC o tej samej netto liczbie atomów na komórkę, ale różnych masach molowych i stałych sieciowych.',
        '<strong>Magnez i tytan alfa:</strong> zbadaj upakowanie HCP i zobacz, jak stosunek c/a zmienia objętość komórki heksagonalnej.',
        '<strong>Polon alfa:</strong> przeanalizuj rzadką strukturę regularną prostą i jej niższą efektywność wypełnienia.',
        '<strong>Halit:</strong> poćwicz gęstość jednostek formuły z mineralną konwencjonalną komórką NaCl zamiast jednoelementowego metalu.',
      ],
    },
    {
      type: 'title',
      text: 'Ograniczenia modelu komórki elementarnej z twardych kul',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To narzędzie wykorzystuje wyidealizowane modele geometryczne. Rzeczywiste kryształy mają gęstość elektronową zamiast twardych granic, a stałe sieciowe zmieniają się wraz z temperaturą, ciśnieniem, składem i defektami. Kryształy jonowe i kowalencyjne mogą również wymagać atomów bazy, częściowych obsadzeń i operacji symetrii wykraczających poza trzy struktury dydaktyczne pokazane tutaj.',
    },
    {
      type: 'paragraph',
      html: 'Używaj wyników do celów edukacyjnych, szybkich szacunków i porównywania popularnych rodzin sieci. Do krystalografii na poziomie publikacyjnym zweryfikuj parametry sieci, fazę, stechiometrię i obsadzenie pozycji na podstawie pierwotnych danych dyfrakcyjnych lub z kuratorowanej bazy danych krystalograficznych.',
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
      applicationCategory: 'EducationalApplication',
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
