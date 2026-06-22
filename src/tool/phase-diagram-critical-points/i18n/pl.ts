import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'wykres-fazowy-punkt-krytyczny-wizualizator';
const title = 'Wykres Fazowy i Wizualizator Punktu Krytycznego';
const description = 'Badaj obszary ciala stalego, cieczy, gazu i nadkrytyczne na interaktywnym wykresie fazowym cisnienie-temperatura z oznaczeniami punktu potrojnego i punktu krytycznego.';

const howTo = [
  {
    name: 'Wybierz substancje',
    text: 'Przelaczaj miedzy woda, dwutlenkiem wegla i azotem, aby zobaczyc, jak rzeczywiste punkty potrójne i punkty krytyczne przeksztalcaja mape fazowa.',
  },
  {
    name: 'Zmieniaj temperature i cisnienie',
    text: 'Uzyj suwakow, aby umiescic probe na plaszczyznie cisnienie-temperatura. Wykres aktualizuje aktywny obszar fazowy oraz znacznik próbki na zywo.',
  },
  {
    name: 'Obserwuj poswiate krytyczna',
    text: 'Przesun sie w strone konca granicy para-ciecz, aby zobaczyc zanikanie ciepla utajonego i zanik roznicy miedzy ciecza a gazem w plynie nadkrytycznym.',
  },
  {
    name: 'Czytaj panel edukacyjny',
    text: 'Uzyj etykiety fazy, miernika ciepla utajonego i odczytów punktowych, aby polaczyc wizualny wykres z terminologia termodynamiczna.',
  },
];

const faq = [
  {
    question: 'Co to jest wykres fazowy?',
    answer: 'Wykres fazowy odwzorowuje, ktory stan skupienia jest stabilny w roznych kombinacjach temperatury i cisnienia. Linie graniczne oznaczaja warunki, w ktorych dwie fazy moga wspolistniec w rownowadze.',
  },
  {
    question: 'Co dzieje sie w punkcie krytycznym?',
    answer: 'W punkcie krytycznym konczy sie granica para-ciecz. Powyzej temperatury krytycznej i cisnienia krytycznego material staje sie plynem nadkrytycznym i nie ma ostrego rozroznienia miedzy ciecza a gazem.',
  },
  {
    question: 'Dlaczego woda ma inna linie topnienia?',
    answer: 'Woda jest nietypowa, poniewaz lod jest mniej gesty niz ciekla woda w poblizu punktu topnienia. Wzrastajace cisnienie moze sprzyjac gestszej fazie cieklej, przez co granica cialo stale-ciecz ma inne nachylenie niz u wielu substancji.',
  },
  {
    question: 'Czy wykreslone krzywe sa dokladne laboratoryjnie?',
    answer: 'Nie. Narzedzie uzywa uproszczonych krzywych zakotwiczonych w opublikowanych wartosciach punktu potrojnego i punktu krytycznego. Jest zaprojektowane do nauki koncepcyjnej, a nie do inzynierii procesowej lub obliczen bezpieczenstwa.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Sterowanie wykresem fazowym',
    substance: 'Substancja',
    units: 'Jednostki',
    scientificUnits: 'Naukowe (K, MPa)',
    metricUnits: 'Metryczne (Celsjusz, kPa)',
    imperialUnits: 'Imperialne (Fahrenheit, psi)',
    temperature: 'Temperatura',
    pressure: 'Cisnienie',
    diagram: 'Wykres fazowy cisnienie-temperatura',
    sample: 'Stan próbki',
    phase: 'Faza stabilna',
    triplePoint: 'Punkt potrójny',
    criticalPoint: 'Punkt krytyczny',
    vaporCurve: 'Granica para-ciecz',
    meltingLine: 'Granica cialo stale-ciecz',
    latentHeat: 'Kontrast ciepla utajonego',
    criticalProximity: 'Bliskosc krytyczna',
    coordinates: 'Wspólrzedne',
    solid: 'Cialo stale',
    liquid: 'Ciecz',
    gas: 'Gaz',
    supercritical: 'Nadkrytyczny',
    low: 'niski',
    high: 'wysoki',
    reset: 'Resetuj',
    interpretation: 'Interpretacja',
    note: 'Linie graniczne oznaczaja wspolistnienie; obszary oznaczaja najbardziej stabilna faze dla wybranych warunkow.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interaktywny wizualizator wykresu fazowego dla punktów potrójnych, krzywych wrzenia i punktów krytycznych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten wizualizator wykresu fazowego zamienia abstrakcyjny wykres cisnienie-temperatura w interaktywna mape. Wybierz substancje, przesun temperature i cisnienie i sprawdz, czy próbka zachowa sie jako cialo stale, ciecz, gaz czy plyn nadkrytyczny. Celem jest sprawienie, by granice faz wydawaly sie przestrzenne: przekroczenie linii zmienia stan stabilny, a zblizanie sie do punktu krytycznego zmienia to, czym w ogóle jest granica faz.',
    },
    {
      type: 'paragraph',
      html: 'Narzedzie jest stworzone dla studentów, nauczycieli, pisarzy naukowych i kazdego, kto szuka jasnego wyjasnienia wykresów fazowych. Podkresla cechy, które maja najwieksze znaczenie we wstepnej termodynamice: punkt potrójny, w którym trzy fazy wspólistnieja, krzywa para-ciecz, granice cialo stale-ciecz oraz punkt krytyczny, w którym znika rozróznienie miedzy ciecza a gazem.',
    },
    {
      type: 'title',
      text: 'Jak czytac wykres cisnienie-temperatura',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wykres fazowy umieszcza temperature na jednej osi, a cisnienie na drugiej. Kazdy obszar pokazuje faze stabilna w danych warunkach. Linie miedzy obszarami to krzywe wspólistnienia: wzdloz tych linii dwie fazy moga pozostawac w rownowadze, zamiast jednej fazy calkowicie zastepowac druga.',
    },
    {
      type: 'table',
      headers: ['Cecha wykresu', 'Znaczenie', 'Na co zwrócic uwage w narzedziu'],
      rows: [
        ['Punkt potrójny', 'Cialo stale, ciecz i gaz wspólistnieja', 'Niskotemperaturowe polaczenie, gdzie spotykaja sie granice.'],
        ['Krzywa para-ciecz', 'Rownowaga wrzenia lub kondensacji', 'Zakrzywiona linia od punktu potrójnego do punktu krytycznego.'],
        ['Granica cialo stale-ciecz', 'Rownowaga topnienia lub zamarzania', 'Stroma linia oddzielajaca obszary stale i ciekle.'],
        ['Punkt krytyczny', 'Koniec granicy para-ciecz', 'Podswietlony punkt koncowy, gdzie zanika cieplo utajone.'],
        ['Obszar nadkrytyczny', 'Brak ostrego rozróznienia ciecz-gaz', 'Obszar wysokiej temperatury i wysokiego cisnienia poza punktem krytycznym.'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego punkt krytyczny ma znaczenie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ponizej punktu krytycznego wrzenie jest przejsciem fazowym: ciecz i para moga wspólistniec, a energia moze byc absorbowana jako cieplo utajone, podczas gdy temperatura pozostaje zwiazana z warunkiem granicznym. W punkcie krytycznym ta granica sie konczy. Powyzej niej gestosc zmienia sie w sposób ciagly, a substancje opisuje sie jako plyn nadkrytyczny, a nie normalna ciecz czy gaz.',
    },
    {
      type: 'paragraph',
      html: 'Ma to znaczenie w chemii, naukach planetarnych, ekstrakcji przemyslowej, chlodnictwie i fizyce wysokich cisnien. Na przyklad dwutlenek wegla staje sie nadkrytyczny w stosunkowo latwo osiagalnych warunkach w porównaniu z woda, dlatego nadkrytyczny CO2 pojawia sie w ekstrakcji i przetwarzaniu materialów. Woda wymaga znacznie wyzszej temperatury i cisnienia, co czyni jej punkt krytyczny waznym dla systemów energetycznych i geofizyki.',
    },
    {
      type: 'title',
      text: 'Co ten wizualizator upraszcza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rzeczywiste wykresy fazowe moga zawierac polimorfy, stany metastabilne, mieszaniny nieidealne, wiele faz stalych i eksperymentalnie dopasowane równania stanu. To narzedzie edukacyjne utrzymuje model celowo zwartym. Kotwiczy kazda substancje do rozpoznawalnych wartosci referencyjnych i rysuje gladkie krzywe dydaktyczne, aby glówne koncepcje byly latwe do przeanalizowania bez potrzeby korzystania z tabel termodynamicznych.',
    },
    {
      type: 'list',
      items: [
        '<strong>Uzywaj do intuicji:</strong> pomaga wyjasnic, dlaczego szybkowary, suchy lod, wrzenie i plyny nadkrytyczne zachowuja sie inaczej.',
        '<strong>Nie uzywaj do granic inzynieryjnych:</strong> uproszczone krzywe nie zastapia certyfikowanych danych wlasciwosci.',
        '<strong>Skoncentruj sie na topologii:</strong> najwazniejszym efektem uczenia sie jest zrozumienie, jak obszary fazowe sa polaczone i gdzie koncza sie granice.',
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
