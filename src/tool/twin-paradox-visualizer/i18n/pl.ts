import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'paradoks-blizniat-wizualizator';
const title = 'Wizualizator paradoksu bliźniąt: Dylatacja czasu w szczególnej teorii względności';
const description = 'Wizualizuj, jak szczególna teoria względności sprawia, że szybko podróżujący bliźniak wraca młodszy od bliźniaka, który pozostał na Ziemi.';

const howTo = [
  {
    name: 'Ustaw prędkość statku kosmicznego',
    text: 'Użyj suwaka prędkości, aby wybrać ułamek prędkości światła i obserwuj wzrost czynnika Lorentza.',
  },
  {
    name: 'Wybierz czas trwania misji w układzie ziemskim',
    text: 'Dostosuj, ile lat upływa dla bliźniaka pozostającego na Ziemi podczas całej podróży w obie strony.',
  },
  {
    name: 'Porównaj zegary i linie świata',
    text: 'Odczytaj różnicę wieku, czas, który upłynął na statku, odległość w układzie ziemskim oraz zakrzywioną linię świata oznaczającą zmianę układu inercjalnego przez podróżującego bliźniaka.',
  },
];

const faq = [
  {
    question: 'Czym jest paradoks bliźniąt w szczególnej teorii względności?',
    answer: 'Paradoks bliźniąt to eksperyment myślowy, w którym jeden bliźniak podróżuje przez przestrzeń z prędkością relatywistyczną, a później wraca na Ziemię młodszy od bliźniaka, który został w domu. Wydaje się paradoksalny, ponieważ każdy bliźniak może początkowo opisać drugiego jako poruszającego się, ale podróżujący bliźniak zmienia układy inercjalne podczas zawracania, więc dwie ścieżki przez czasoprzestrzeń nie są symetryczne.',
  },
  {
    question: 'Dlaczego podróżujący bliźniak starzeje się wolniej?',
    answer: 'W szczególnej teorii względności upływ czasu własnego zależy od ścieżki przez czasoprzestrzeń. Zegar poruszający się z prędkością v względem obserwatora inercjalnego tyka wolniej o czynnik Lorentza gamma. Podróżnik gromadzi mniej czasu własnego na odcinku w drodze i z powrotem niż bliźniak pozostający na Ziemi.',
  },
  {
    question: 'Czy przyspieszenie powoduje różnicę wieku?',
    answer: 'Przyspieszenie jest ważne, ponieważ pozwala podróżnikowi zmienić kierunek i spotkać się z Ziemią, ale różnica wieku jest obliczana na podstawie pełnej ścieżki czasoprzestrzennej, a nie tylko przyspieszenia. Nawet gdyby zawrócenie było bardzo krótkie, ścieżka podróżnika nadal zawierałaby mniej czasu własnego niż ścieżka ziemska.',
  },
  {
    question: 'Co oznacza czynnik Lorentza gamma?',
    answer: 'Czynnik Lorentza gamma równa się 1 podzielone przez pierwiastek kwadratowy z 1 minus v kwadrat nad c kwadrat. Mówi on, jak silnie różnią się odstępy czasu, długości i energie między układami inercjalnymi. Przy codziennych prędkościach gamma wynosi prawie 1, ale blisko prędkości światła gwałtownie wzrasta.',
  },
  {
    question: 'Czy ten efekt można zmierzyć w rzeczywistości?',
    answer: 'Tak. Dylatacja czasu została zmierzona za pomocą szybkich cząstek, zegarów atomowych na pokładzie samolotów, systemów nawigacji satelitarnej i akceleratorów cząstek. Paradoks bliźniąt wykorzystuje ekstremalną historię podróży, ale leżący u jego podstaw efekt zegarowy jest rutynowo weryfikowaną częścią współczesnej fizyki.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Wizualizacja czasoprzestrzeni paradoksu bliźniąt',
    controlsTitle: 'Sterowanie paradoksem bliźniąt',
    worldlineLabel: 'Diagram linii świata dla bliźniaka na Ziemi i podróżującego bliźniaka',
    earthTwin: 'Wiek bliźniaka na Ziemi',
    travelingTwin: 'Wiek podróżnika',
    presetCruise: 'Rejs',
    presetRelativistic: 'Relatywistyczny',
    presetExtreme: 'Ekstremalny',
    velocityLabel: 'Prędkość statku',
    earthYearsLabel: 'Czas ziemski',
    ageGapLabel: 'Różnica wieku przy spotkaniu',
    gammaLabel: 'Czynnik Lorentza',
    shipTimeLabel: 'Czas własny podróżnika',
    distanceLabel: 'Odległość zawrócenia',
    yearsUnit: 'lat',
    yearsShortUnit: 'lat',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator paradoksu bliźniąt dla szczególnej teorii względności',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wizualizator paradoksu bliźniąt zamienia jeden z najsłynniejszych pomysłów szczególnej teorii względności w interaktywny diagram czasoprzestrzenny. Ustaw prędkość statku kosmicznego jako ułamek prędkości światła, wybierz ile lat upływa na Ziemi, a kalkulator oblicza czynnik Lorentza, czas własny podróżnika, różnicę wieku przy spotkaniu i odległość do punktu zawrócenia. Układ wizualny oddziela zegar ziemski od zegara statku kosmicznego, dzięki czemu asymetria jest widoczna, a nie ukryta we wzorach.',
    },
    {
      type: 'title',
      text: 'Jak Działa Obliczenie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Podstawową wielkością jest czynnik Lorentza: gamma = 1 / sqrt(1 - v^2 / c^2). Dla prostej podróży tam i z powrotem ze stałą prędkością rejsową, czas doświadczany przez podróżnika to czas trwania misji w układzie ziemskim podzielony przez gamma. Różnica między tymi dwoma czasami to różnica wieku, gdy bliźnięta się spotykają. Narzędzie pokazuje również odległość zawrócenia w układzie ziemskim, która jest połową całkowitego czasu ziemskiego pomnożoną przez prędkość statku w latach świetlnych na rok.',
    },
    {
      type: 'table',
      headers: ['Prędkość', 'Czynnik Lorentza', 'Tempo Zegara Podróżnika', 'Znaczenie Fizyczne'],
      rows: [
        ['0.50c', '1.155', '86.6% tempa ziemskiego', 'Zauważalny, ale umiarkowany efekt relatywistyczny.'],
        ['0.86c', '1.960', '51.0% tempa ziemskiego', 'Podróżnik starzeje się mniej więcej o połowę szybciej podczas rejsu.'],
        ['0.98c', '5.025', '19.9% tempa ziemskiego', 'Ekstremalna dylatacja czasu dominuje wynik misji.'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Sytuacja Nie Jest Symetryczna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Na pierwszy rzut oka każdy bliźniak może powiedzieć, że drugi się porusza, co sprawia, że wynik wydaje się sprzeczny. Rozwiązanie polega na tym, że bliźniak na Ziemi pozostaje w przybliżeniu w jednym układzie inercjalnym, podczas gdy podróżujący bliźniak odlatuje, zmienia kierunek i wraca. Ta zmiana układu inercjalnego daje podróżnikowi inną ścieżkę przez czasoprzestrzeń. Linia świata rysowana przez to narzędzie zagina się w momencie zawrócenia, podczas gdy linia świata bliźniaka na Ziemi pozostaje prosta.',
    },
    {
      type: 'title',
      text: 'Czytanie Diagramu Linii Świata',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Linia świata to mapa obiektu w czasoprzestrzeni, a nie tylko w przestrzeni. W tym wizualizatorze pionowa linia Ziemi reprezentuje bliźniaka, który zostaje w domu. Czerwona ścieżka pod kątem reprezentuje podróżnika opuszczającego Ziemię i wracającego. Zwiększenie prędkości sprawia, że ścieżka podróżnika pochyla się bardziej dramatycznie i zmniejsza ilość czasu własnego zgromadzonego na zegarze statku kosmicznego.',
    },
    {
      type: 'list',
      items: [
        '<strong>Różnica wieku:</strong> o ile młodszy jest podróżnik po spotkaniu.',
        '<strong>Czynnik Lorentza:</strong> mnożnik łączący czas w układzie ziemskim z czasem własnym podróżnika.',
        '<strong>Czas własny podróżnika:</strong> rzeczywisty czas, który upłynął zmierzony przez zegar na statku kosmicznym.',
        '<strong>Odległość zawrócenia:</strong> odległość w układzie ziemskim przed zawróceniem podróżnika.',
      ],
    },
    {
      type: 'title',
      text: 'Praktyczne Dowody na Dylatację Czasu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Paradoks bliźniąt to czysty eksperyment myślowy, ale dylatacja czasu nie jest spekulacją. Miony powstałe w górnych warstwach atmosfery żyją wystarczająco długo, aby dotrzeć do ziemi, ponieważ ich poruszające się zegary są spowolnione z perspektywy Ziemi. Eksperymenty z zegarami atomowymi na pokładzie samolotów oraz precyzyjna nawigacja satelitarna również wymagają korekt relatywistycznych. Ta sama matematyka stojąca za tym wizualizatorem jest częścią infrastruktury pomiaru czasu używanej przez nowoczesne systemy GPS.',
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
