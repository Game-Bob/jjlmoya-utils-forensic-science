import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-okresu-poltrwania-rozpadu-promieniotworczego';
const title = 'Kalkulator okresu poltrwania i rozpadu promieniotworczego';
const description = 'Symuluj rozpad promieniotworczy z realnymi izotopami, wzorem okresu poltrwania, stochastycznym polem atomow, iloscia pozostala i aktywnoscia wzgledna.';

const howTo = [
  { name: 'Wybierz izotop', text: 'Zacznij od wegla-14, jodu-131, uranu-238, technetu-99m albo radonu-222. Kazdy preset laduje realistyczny okres poltrwania i typowy kontekst naukowy.' },
  { name: 'Ustaw probke i czas', text: 'Dostosuj liczbe widocznych atomow i przesuwaj czas, aby zobaczyc, jak pozostala frakcja podaza za prawem wykladniczym.' },
  { name: 'Porownaj wynik dokladny i losowosc atomowa', text: 'Uzyj wyniku deterministycznego jako wartosci oczekiwanej i obserwuj pole atomow, aby zrozumiec wahania malych probek.' },
  { name: 'Zinterpretuj aktywnosc', text: 'Aktywnosc spada proporcjonalnie do liczby jader, ktore jeszcze sie nie rozpadly.' },
];

const faq = [
  { question: 'Co oznacza okres poltrwania?', answer: 'To czas, po ktorym srednio polowa niestabilnych jader w probce ulega rozpadowi. Po jednym okresie zostaje 50%, po dwoch 25%, po trzech 12,5%.' },
  { question: 'Dlaczego pole atomow nie zawsze zgadza sie z dokladnym procentem?', answer: 'Rozpad promieniotworczy jest probabilistyczny. Wzor daje wartosc oczekiwana dla duzej probki, a pole symuluje pojedyncze atomy z losowymi progami.' },
  { question: 'Czy aktywnosc jest tym samym co liczba atomow pozostalych?', answer: 'Dla jednego izotopu aktywnosc jest proporcjonalna do liczby jader, ktore sie nie rozpadly.' },
  { question: 'Czy kalkulator nadaje sie do datowania radioweglowego?', answer: 'Tak, koncepcyjnie. Prawdziwe datowanie laboratoryjne wymaga takze krzywych kalibracyjnych, kontroli zanieczyszczen i przygotowania probki.' },
  { question: 'Czy kazdy izotop rozpada sie do jednego stabilnego produktu?', answer: 'Nie zawsze. Niektore izotopy rozpadaja sie lancuchowo z kilkoma produktami potomnymi. Narzedzie modeluje izotop macierzysty.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Izotop',
    sampleAtoms: 'Atomy probki',
    elapsedTime: 'Czas',
    halfLife: 'Okres poltrwania',
    remaining: 'Pozostalo',
    decayed: 'Rozpadlo sie',
    activity: 'Aktywnosc wzgledna',
    timeUnit: 'Jednostka czasu',
    expectedCurve: 'Krzywa oczekiwana',
    atomField: 'Pole atomow',
    presetUse: 'Typowe uzycie',
    oneHalfLife: '1 okres poltrwania',
    twoHalfLives: '2 okresy poltrwania',
    fourHalfLives: '4 okresy poltrwania',
    custom: 'Wlasne',
    liveAtoms: 'Aktywne atomy',
    decayedAtoms: 'Atomy po rozpadzie',
    resetSeed: 'Nowy wzor atomow',
  },
  seo: [
    { type: 'title', text: 'Kalkulator okresu poltrwania: pozostale atomy, aktywnosc i przyklady izotopow', level: 2 },
    { type: 'paragraph', html: 'Ten kalkulator rozpadu promieniotworczego pomaga oszacowac, ile niestabilnego izotopu zostaje po zadanym czasie. Odpowiada na najczestsze intencje wyszukiwania: wzor okresu poltrwania, obliczenia dla realnych izotopow, jadra macierzyste pozostale, jadra rozpade i spadek aktywnosci.' },
    { type: 'paragraph', html: 'Wzor to <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. Pole atomow pokazuje jednoczesnie losowy charakter pojedynczych rozpadów i przewidywalna krzywa dla duzych probek.' },
    { type: 'table', headers: ['Czas', 'Czynnik', 'Jadra macierzyste', 'Aktywnosc wzgledna'], rows: [['0 okresow', '(1/2)^0', '100%', '100%'], ['1 okres', '(1/2)^1', '50%', '50%'], ['2 okresy', '(1/2)^2', '25%', '25%'], ['3 okresy', '(1/2)^3', '12,5%', '12,5%'], ['5 okresow', '(1/2)^5', '3,125%', '3,125%'], ['10 okresow', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'table', headers: ['Izotop', 'Okres poltrwania', 'Zastosowanie', 'Znaczenie wyniku'], rows: [['Wegiel-14', '5 730 lat', 'Datowanie radioweglowe', 'Ile aktywnosci wegla-14 pozostaje w materiale organicznym.'], ['Jod-131', '8,02 dnia', 'Terapia i zdarzenia nuklearne', 'Jak szybko aktywnosc spada w ciagu dni.'], ['Technet-99m', '6,01 godziny', 'Diagnostyka obrazowa', 'Dlaczego uzyteczna aktywnosc maleje w czasie dnia klinicznego.'], ['Uran-238', '4,47 mld lat', 'Datowanie geologiczne', 'Dlaczego dlugozyciowe izotopy sa mierzalne.'], ['Radon-222', '3,82 dnia', 'Promieniowanie w budynkach', 'Jak zmienia sie gazowe zrodlo ekspozycji.']] },
    { type: 'paragraph', html: 'Dla jednego izotopu aktywnosc jest proporcjonalna do liczby jader nierozpadlych. Symulacja nadaje sie do nauki fizyki, chemii jadrowej, intuicji radioweglowej, planowania izotopow medycznych i edukacji radiologicznej.' },
    { type: 'paragraph', html: 'Model uzywa jednego okresu poltrwania. Rzeczywiste pomiary moga wymagac korekt detektora, tla, produktow potomnych, eliminacji biologicznej, postaci chemicznej, ekranowania i kalibracji. Nie zastepuje porad medycznych, dozymetrii ani analizy laboratoryjnej.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};

