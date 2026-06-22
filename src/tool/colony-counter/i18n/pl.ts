const howTo = [
    {
      name: 'Przygotuj zdjęcie szalki',
      text: 'Umieść szalkę Petriego na ciemnym tle lub użyj iluminatora, aby kolonie były wyraźnie widoczne.',
    },
    {
      name: 'Zidentyfikuj typy kolonii',
      text: 'Użyj różnych kolorów znaczników, aby pogrupować kolonie według morfologii, koloru lub wielkości.',
    },
    {
      name: 'Zaznacz każdą kolonię',
      text: 'Klikaj na każdą widoczną kolonię. Narzędzie automatycznie numeruje każde kliknięcie, aby zapobiec powtórzeniom lub pominięciu kolonii.',
    },
    {
      name: 'Oblicz stężenie końcowe',
      text: 'Wprowadź objętość posiewu i współczynnik rozcieńczenia, aby otrzymać końcowy wynik w jtk/ml lub jtk/g.',
    },
  ];
const faq = [
    {
      question: 'Co to jest liczenie jtk?',
      answer: 'Jednostki Tworzące Kolonie (jtk) to miara szacująca liczbę żywych komórek bakterii lub grzybów w próbce. Przyjmuje się, że każda widoczna kolonia wyrosła z pojedynczej komórki lub grupy komórek.',
    },
    {
      question: 'Dlaczego licznik cyfrowy jest lepszy od liczenia ręcznego?',
      answer: 'Liczenie cyfrowe pozwala uniknąć ludzkiego błędu polegającego na "gubieniu się" podczas wizualnego zaznaczania kolonii. Dodatkowo nasze narzędzie pozwala na różnicowanie typów kolonii za pomocą kolorów, co ułatwia analizę szalek mieszanych.',
    },
    {
      question: 'Jak oblicza się jtk na mililitr?',
      answer: 'Liczbę policzonych kolonii mnoży się przez odwrotność współczynnika rozcieńczenia. Na przykład, jeśli policzysz 30 kolonii w rozcieńczeniu 1:100, oryginalna próbka zawiera 3000 jtk/ml.',
    },
    {
      question: 'Kiedy szalkę uważa się za "niepoliczalną"?',
      answer: 'W standardowej mikrobiologii, jeśli na szalce znajduje się więcej niż 250-300 kolonii, uważa się ją za zbyt zagęszczoną (Too Numerous To Count, TNTC), a dane są niewiarygodne z powodu konkurencji między koloniami.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'licznik-kolonii';
const title = 'Licznik Kolonii: Cyfrowe Narzędzie do Liczenia jtk na Szalkach Petriego';
const description = 'Cyfrowe narzędzie do liczenia kolonii bakterii na szalkach Petriego. Różnicuj typy, unikaj błędów i precyzyjnie obliczaj jtk.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Kliknij, aby przesłać zdjęcie swojej szalki Petriego',
    uploadSubtitle: 'Prześlij zdjęcie szalki i zacznij liczyć kolonie',
    currentModeLabel: 'Aktualny Tryb',
    typeA: 'Typ A',
    typeB: 'Typ B',
    colonyType: 'Typ Kolonii',
    counting: 'Liczenie',
    totalCFU: 'Suma jtk',
    undo: 'Cofnij Ostatnie',
    clearAll: 'Wyczyść Wszystko',
    infoClick: 'Klikaj na szalkę, aby zaznaczać kolonie',
    infoChange: 'Zmień typ przed zaznaczaniem',
    confirmClear: 'Czy na pewno chcesz wyczyścić wszystkie zaznaczone kolonie?',
  },
  seo: [
    {
      type: 'title',
      text: 'Cyfrowa Mikrobiologia: Precyzyjne Liczenie Kolonii',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Liczenie kolonii bakterii na szalkach Petriego jest podstawową techniką w mikrobiologii. Tradycyjnie wykonywane za pomocą ręcznego licznika i markera, łatwo prowadzi do pomyłek w liczeniu lub dwukrotnego zaznaczenia tej samej kolonii. To cyfrowe narzędzie eliminuje te błędy i pozwala na wizualne rozróżnienie typów kolonii.',
    },
    {
      type: 'title',
      text: 'Dlaczego Liczenie Kolonii Jest Ważne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Liczba kolonii na szalce jest bezpośrednio proporcjonalna do stężenia żywych mikroorganizmów w oryginalnej próbce. Dane te są kluczowe w:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kontroli Jakości Żywności:</strong> Wykrywanie zanieczyszczeń bakteryjnych.',
        '<strong>Badaniach Farmaceutycznych:</strong> Ocena skuteczności antybiotyków.',
        '<strong>Diagnostyce Klinicznej:</strong> Ilościowe oznaczanie infekcji w próbkach pacjentów.',
        '<strong>Biotechnologii:</strong> Optymalizacja hodowli produkcyjnych dla białek rekombinowanych.',
      ],
    },
    {
      type: 'title',
      text: 'Jednostki Tworzące Kolonie (jtk)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Przyjmuje się, że każda widoczna kolonia na szalce pochodzi od jednej żywej komórki. Dlatego nazywa się je <strong>jtk</strong> (Jednostki Tworzące Kolonie).',
    },
    {
      type: 'paragraph',
      html: '<strong>Wzór na Stężenie:</strong><br><code>jtk/mL = (Policzone Kolonie × Współczynnik Rozcieńczenia) / Objętość Posiewu</code>',
    },
    {
      type: 'title',
      text: 'Najlepsze Praktyki Liczenia',
      level: 3,
    },
    {
      type: 'title',
      text: 'Zakres Policzalny',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Idealny zakres dla liczenia ręcznego wynosi od <strong>30 do 300 kolonii</strong> na szalkę. Poniżej 30 błąd statystyczny jest zbyt wysoki. Powyżej 300 kolonie zaczynają się zlewać, co uniemożliwia ich indywidualne rozróżnienie.',
    },
    {
      type: 'title',
      text: 'Typy Kolonii',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Na podłożach wybiórczych lub różnicujących powszechne jest występowanie wielu morfologii kolonii:',
    },
    {
      type: 'list',
      items: [
        '<strong>Typ A (Morski/Zielony):</strong> Duże, śluzowate kolonie, typowe dla bakterii Gram-ujemnych fermentujących laktozę.',
        '<strong>Typ B (Różowy/Fioletowy):</strong> Małe, półprzezroczyste kolonie, niefermentujące.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Nasze narzędzie pozwala na rozróżnienie do dwóch typów kolonii za pomocą różnych kolorów, co ułatwia liczenie różnicowe bez potrzeby używania fizycznych markerów.',
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

