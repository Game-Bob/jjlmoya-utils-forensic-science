import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "analizator-spektrogramu-glosu-online";
const title = "Analizator Spektrogramu Głosu Online";
const description = "Wizualizuj częstotliwość, czas, intensywność i szacowane formanty dwóch próbek dźwiękowych prywatnie w przeglądarce.";

const howTo = [
  {
    "name": "Wybierz dwie próbki",
    "text": "Użyj plików lokalnych lub próbki syntezy."
  },
  {
    "name": "Ustaw granicę częstotliwości",
    "text": "Wybierz 4, 6 lub 8 kHz w zależności od głosu."
  },
  {
    "name": "Odczytaj spektrogram",
    "text": "Zaobserwuj czas, częstotliwości i linie formantów."
  },
  {
    "name": "Odsłuchaj i porównaj",
    "text": "Porównaj wartości F1, F2 i F3 w celach edukacyjnych."
  }
];

const faq = [
  {
    "question": "Co przedstawia spektrogram głosu?",
    "answer": "Spektrogram ukazuje czas na osi poziomej, częstotliwość na pionowej oraz natężenie dźwięku za pomocą jasności koloru."
  },
  {
    "question": "Czy moje nagrania są przesyłane do sieci?",
    "answer": "Nie. Cały proces odbywa się lokalnie na Twoim urządzeniu."
  },
  {
    "question": "Czym są formant F1, F2 i F3?",
    "answer": "To przybliżone częstotliwości rezonansowe traktu głosowego."
  },
  {
    "question": "Czy to narzędzie może zidentyfikować osobę po głosie?",
    "answer": "Nie. Podobieństwo wizualne nie stanowi dowodu tożsamości."
  },
  {
    "question": "Dlaczego zmiana granicy częstotliwości zmienia formant?",
    "answer": "Zmiana zakresu widma wpływa na rozdzielczość szczytów częstotliwości."
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "Tylko lokalnie",
    "privacyNote": "Nagrania pozostają na Twoim urządzeniu. Analiza odbywa się bezpośrednio w przeglądarce.",
    "loadHeading": "Wczytaj dwa pliki dźwiękowe do analizy",
    "sampleALabel": "Próbka A",
    "sampleBLabel": "Próbka B",
    "chooseFileLabel": "Wybierz audio",
    "replaceFileLabel": "Zmień audio",
    "dropHint": "Przeciągnij plik audio tutaj (maks. 25 MB). Analizowane jest pierwsze 20 sekund.",
    "presetHint": "Wypróbuj gotowe syntezy samogłosek.",
    "presetWarmLabel": "Ciepła samogłoska",
    "presetBrightLabel": "Jasna samogłoska",
    "emptySampleLabel": "Oczekiwanie na plik",
    "readySampleLabel": "Płyta spektrogramu gotowa",
    "decodingSampleLabel": "Generowanie spektrogramu",
    "errorSampleLabel": "Nie udało się przeanalizować próbki",
    "durationLabel": "Czas trwania",
    "ceilingHeading": "Górna granica częstotliwości",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "Lustrzane płyty spektrogramu",
    "mirrorViewLabel": "Widok lustrzany",
    "splitViewLabel": "Widok równoległy",
    "playALabel": "Odtwórz próbkę A",
    "playBLabel": "Odtwórz próbkę B",
    "stopLabel": "Zatrzymaj",
    "timeAxisLabel": "Czas",
    "frequencyAxisLabel": "Częstotliwość",
    "intensityLegendLabel": "Jaśniejszy kolor oznacza wyższą energię",
    "formantLegendLabel": "Linie szacowanych formantów",
    "sampleAEmptyCanvasLabel": "Wczytaj próbkę A, aby zobaczyć spektrogram",
    "sampleBEmptyCanvasLabel": "Wczytaj próbkę B, aby zobaczyć spektrogram",
    "comparisonHeading": "Analiza rezonansów akustycznych",
    "comparisonNote": "Średnie wartości punktów rezonansowych. Różnice są pomiarami fizycznymi, a nie dowodem tożsamości.",
    "formantOneLabel": "Pierwszy obszar rezonansu (F1)",
    "formantTwoLabel": "Drugi obszar rezonansu (F2)",
    "formantThreeLabel": "Trzeci obszar rezonansu (F3)",
    "averageLabel": "Średnia",
    "differenceLabel": "Różnica",
    "unavailableLabel": "Niedostępne",
    "statusEmptyLabel": "Wczytaj próbkę, aby rozpocząć",
    "statusSingleLabel": "Jedna płyta jest gotowa",
    "statusReadyLabel": "Obie płyty są gotowe",
    "limitError": "Plik przekracza lokalny limit 25 MB.",
    "decodeError": "Przeglądarka nie mogła zdekodować tego formatu.",
    "browserError": "Brak obsługi Web Audio API.",
    "educationalNote": "Narzędzie edukacyjne. Linie formantów mają charakter poglądowy i nie służą do identyfikacji głosowej."
},
  seo: [
    { type: 'title', text: "Jak spektrogram głosu zamienia dźwięk w obraz widmowy", level: 2 },
    { type: 'paragraph', html: "<strong>Spektrogram głosu</strong> przekształca nagranie w mapę z czasem na osi poziomej i częstotliwością na pionowej. Wyższa energia jest widoczna jako jaśniejszy kolor. Ułatwia to obserwację wybrzmiewających samogłosek, alikwotów, ciszy i zmian rezonansu w porównaniu ze zwykłym falogramem. Wizualizacja wspomaga szczegółową i dogłębną analizę sygnału w każdym momencie trwania nagrania audio oraz analizę barwy dźwięku." },
    { type: 'paragraph', html: "Analizator dzieli sygnał na krótkie nakładające się segmenty, stosuje okno Hamminga i oblicza rozkład energii w częstotliwościach za pomocą FFT. Krótki segment precyzyjnie określa czas, a rozdzielczość częstotliwościowa pokazuje koncentrację energii. Z powodu zasady nieoznaczoności istnieje kompromis między rozdzielczością czasową a częstotliwościową. Ustawienia te wpływają na ostrość obrazu oraz precyzję detekcji sygnału. Pozwala to na dokładne zrozumienie struktury mowy i akustyki w analizowanym materiale dźwiękowym." },

    { type: 'diagnostic', variant: 'info', title: "Prywatne przetwarzanie w przeglądarce", html: "Wizualizuj częstotliwość, czas, intensywność i szacowane formanty dwóch próbek dźwiękowych prywatnie w przeglądarce. Wszystkie nagrania pozostają wyłącznie na Twoim urządzeniu bez wysyłania danych." },
    { type: 'stats', columns: 3, items: [
      { value: "Czas", label: "Odczyt od lewej do prawej" },
      { value: "Hz", label: "Pozycja częstotliwości" },
      { value: "Energia", label: "Przedstawiona jako jasność" }
    ] },
    { type: 'title', text: "Prawidłowe odczytywanie formantów", level: 3 },
    { type: 'paragraph', html: "Formanty to obszary rezonansowe ukształtowane przez trakt głosowy. F1 i F2 są używane w fonetyce do dokładnego opisu wysokości samogłosek i miejsca artykulacji. Analizator śledzi wygładzone szczyty w trzech obszarach częstotliwości, pomagając połączyć widoczne pasma z zachowaniem F1, F2 i F3 w sposób przejrzysty i intuicyjny." },
    { type: 'paragraph', html: "Profesjonalny pomiar formantów wykorzystuje zazwyczaj kodowanie predykcyjne (LPC) dostosowane do mówcy. Harmonie tonu podstawowego, szumy i pogłos mogą zniekształcać proste szacunki. Traktuj te linie jako wskazówki edukacyjne i zawsze sprawdzaj tło spektrogramu w celu weryfikacji nakładających się częstotliwości." },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 do 1000 Hz","Pierwszy obszar rezonansu, związany z otwarciem samogłoski"],["F2","900 do 3000 Hz","Drugi obszar rezonansu, związany z pozycją języka"],["F3","2000 do 4500 Hz","Wyższy obszar rezonansu, zależny od kształtu traktu głosu"]] },
    { type: 'title', text: "Wpływ ustawień częstotliwości na analizę", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "Niska granica (4 kHz)", description: "Lepszy widok niskich częstotliwości", points: ["Przydatne dla samogłosek", "Może wykluczać wysoką energię", "Nie gwarantuje wyższej dokładności"] },
      { title: "Wysoka granica (6/8 kHz)", description: "Więcej górnych detali", highlight: true, points: ["Dla jasnych głosów", "Pokazuje spółgłoski trące", "Kompresuje dolne pasma"] }
    ] },
    { type: 'title', text: "Odpowiedzialne porównywanie dwóch próbek głosu", level: 3 },
    { type: 'paragraph', html: "Porównanie dwóch płyt jest najbardziej przydatne, gdy oba nagrania zawierają tę samą samogłoskę lub frazę w podobnych warunkach akustycznych. Wyświetlane różnice są bezwzględnymi pomiarami fizycznymi pomiędzy szczytami częstotliwości. Nie stanowią one procentu podobieństwa ani dowodu tożsamości." },
    { type: 'list', items: ["<strong>Porównuj tę samą treść:</strong> powtarzane samogłoski lub słowa są łatwiejsze do porównania.","<strong>Ujednolicaj warunki nagrania:</strong> mikrofon i akustyka pomieszczenia silnie wpływają na widmo.","<strong>Słuchaj z kursorami:</strong> łącz wydarzenia wizualne z dokładnym momentem dźwięku.","<strong>Unikaj roszczeń tożsamościowych:</strong> podobny spektrogram nie dowodzi tożsamości mówcy."] },
    { type: 'summary', title: "Podsumowanie analizatora", items: ["Generuj spektrogram audio lokalnie z kompatybilnych plików.","Badaj dwie próbki na płytach lustrzanych lub równoległych.","Ucz się, jak zmienia się energia widmowa i obszary formantów.","Zachowaj podejście opisowe i edukacyjne."] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
