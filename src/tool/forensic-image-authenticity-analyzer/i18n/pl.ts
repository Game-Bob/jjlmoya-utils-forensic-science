import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensyczny-analizator-metadanych-i-autentycznosci-obrazu';
const title = 'Forensyczny Analizator Metadanych i Autentyczności Obrazu';
const description = 'Sprawdzaj nagłówki obrazów, dane EXIF z rejestracji, współrzędne GPS, ślady oprogramowania edycyjnego i surowe bajty lokalnie w przeglądarce.';

const howTo = [
  { name: 'Zachowaj oryginalny materiał dowodowy', text: 'Pracuj na kopii kryminalistycznej i przechowuj plik źródłowy oraz jego skrót kryptograficzny poza tym narzędziem przeglądarkowym.' },
  { name: 'Załaduj obraz lokalnie', text: 'Przeciągnij lub wybierz plik JPEG albo PNG. Plik jest odczytywany tylko w pamięci przeglądarki i nie jest wysyłany.' },
  { name: 'Przeanalizuj metadane i lokalizację', text: 'Porównaj czas wykonania, tożsamość aparatu, oprogramowanie i pola GPS z opisem sprawy oraz dokumentacją pozyskania.' },
  { name: 'Interpretuj sygnały integralności', text: 'Traktuj podpisy edycyjne i brakujące pola jako tropy dochodzeniowe, a nie dowód manipulacji.' },
  { name: 'Sprawdź podgląd szesnastkowy', text: 'Wykorzystaj podświetlone strefy nagłówka i metadanych do rozpoznania struktury kontenera oraz udokumentowania offsetów do dalszej analizy.' },
];

const faq = [
  { question: 'Czy metadane mogą dowieść, że fotografia jest autentyczna?', answer: 'Nie. Metadane można usunąć, skopiować albo zmienić. Uwierzytelnienie wymaga połączenia struktury pliku, pochodzenia, hashy, oględzin wizualnych, analizy kompresji i zwalidowanych metod kryminalistycznych.' },
  { question: 'Czy podpis Adobe lub GIMP dowodzi złośliwej edycji?', answer: 'Nie. Oznacza jedynie, że oprogramowanie mogło zapisać metadane lub wyeksportować plik. Legalna korekcja barwna, obróbka redakcyjna lub przygotowanie materiału dowodowego mogą pozostawić ten sam ślad.' },
  { question: 'Czy obraz jest wysyłany?', answer: 'Nie. Analiza odbywa się w pamięci przeglądarki. Mimo to przed otwarciem wrażliwego materiału w dowolnym oprogramowaniu stosuj politykę obchodzenia się z dowodami obowiązującą w twojej organizacji.' },
  { question: 'Dlaczego dane GPS mogą być nieobecne?', answer: 'Aparat mógł nie obsługiwać GPS, rejestrowanie lokalizacji mogło być wyłączone, platforma mogła usunąć metadane albo plik mógł zostać ponownie zakodowany.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    privacy: 'Wyłącznie lokalne badanie binarne',
    dropTitle: 'Umieść obraz na stole dowodowym',
    dropHint: 'Upuść tutaj plik JPEG lub PNG albo wybierz plik. Nic nie jest wysyłane.',
    chooseFile: 'Wybierz obraz',
    replaceFile: 'Zastąp obraz',
    waiting: 'Oczekiwanie na dowód',
    metadata: 'Metadane rejestracji',
    integrity: 'Sygnały integralności',
    location: 'Zarejestrowana lokalizacja',
    hex: 'Szesnastkowe okno dowodowe',
    hexHint: 'Pierwsze 512 bajtów · nagłówek w kolorze cyjan · metadane bursztynowe · neutralne dane obrazu',
    noData: 'Brak czytelnej wartości',
    noGps: 'Nie znaleziono czytelnych współrzędnych GPS.',
    mapLink: 'Otwórz współrzędne w OpenStreetMap',
    score: 'Zaufanie heurystyczne',
    disclaimer: 'Wysoki wynik nie ustanawia autentyczności. Zachowaj oryginał, oblicz hashe kryptograficzne i korzystaj ze zwalidowanych procedur laboratoryjnych przy formułowaniu wniosków w sprawie.',
    fileName: 'Plik',
    fileSize: 'Rozmiar',
    fileType: 'Kontener',
    camera: 'Aparat',
    captured: 'Zarejestrowano',
    software: 'Oprogramowanie',
    coordinates: 'Współrzędne',
    statusNoObvious: 'Brak oczywistych oznak edycji',
    statusReview: 'Zalecana weryfikacja',
    statusEditing: 'Wykryto podpis edycyjny',
    processing: 'Odczyt danych binarnych...',
    loadError: 'Nie udało się przeanalizować pliku. Wybierz prawidłowy obraz JPEG lub PNG.',
  },
  seo: [
    { type: 'title', text: 'Jak analizować metadane obrazu i wskaźniki autentyczności', level: 2 },
    { type: 'paragraph', html: 'Forensyczny analizator metadanych obrazu pomaga śledczym, dziennikarzom, zespołom prawnym, audytorom zgodności i biegłym odpowiedzieć na pytanie o wysokiej intencji wyszukiwania: <strong>co metadane obrazu mogą naprawdę ujawnić o fotografii?</strong> Metadane mogą dostarczać użytecznych wskazówek o rejestracji, lokalizacji, przetwarzaniu programowym i strukturze pliku, ale nie są samodzielną maszyną prawdy. Największą wartość mają na etapie triage. Pomagają wskazać pliki wymagające głębszej analizy, szczegóły wspierające deklarowaną historię obrazu oraz sprzeczności wymagające dalszego sprawdzenia.' },
    { type: 'paragraph', html: 'To narzędzie przeglądarkowe jest przeznaczone dla użytkowników, którzy chcą czegoś więcej niż surowego dumpu EXIF. Lokalnie odczytuje wybrany plik JPEG lub PNG i pokazuje w jednym miejscu pola aparatu, znaczniki czasu, tagi oprogramowania, współrzędne, wskazówki o kontenerze i początkowe bajty pliku. Odpowiada to częstym intencjom wyszukiwania stojącym za frazami takimi jak <em>sprawdzanie autentyczności zdjęcia</em>, <em>analiza metadanych EXIF</em>, <em>jak rozpoznać, czy obraz był edytowany</em> lub <em>jak zweryfikować metadane GPS obrazu</em>.' },
    { type: 'paragraph', html: 'Najważniejsza zasada brzmi: wynik należy czytać jako kontekst, a nie werdykt. Plik może zawierać użyteczne metadane i nadal wprowadzać w błąd. Może też zawierać niewiele metadanych albo nie zawierać ich wcale, a mimo to być autentyczny. Podpis oprogramowania może wskazywać na zwykły eksport, a nie na oszukańczą manipulację. Dobra praktyka kryminalistyczna traktuje więc metadane jako jedną warstwę dowodową, którą trzeba zestawiać z pochodzeniem, hashami, zeznaniami, historią urządzenia i zwalidowanymi metodami badawczymi.' },
    { type: 'title', text: 'Co EXIF mo\u017ce powiedzie\u0107, a czego nie', level: 3 },
    { type: 'paragraph', html: 'Standard EXIF przechowuje kilkadziesi\u0105t p\u00f3l opisuj\u0105cych okoliczno\u015bci wykonania zdj\u0119cia. Do najbardziej warto\u015bciowych nale\u017c\u0105: model i producent aparatu, data i czas wykonania, przys\u0142ona, czas na\u015bwietlania, ogniskowa, czu\u0142o\u015b\u0107 ISO, orientacja, balans bieli, tryb pomiaru \u015bwiat\u0142a i flash. Te dane s\u0105 pomocne w ocenie sp\u00f3jno\u015bci ze zdarzeniem dowodowym. EXIF nie potrafi jednak stwierdzi\u0107, kto nacisn\u0105\u0142 spust migawki, jaki by\u0142 rzeczywisty przebieg wydarzenia ani czy obraz by\u0142 p\u00f3\u017aniej modyfikowany \u2013 o ile edytor nie zmieni\u0142 oryginalnych tag\u00f3w. Co wi\u0119cej, niekt\u00f3re pola s\u0105 opcjonalne, a inne \u2013 jak znaczniki czasu \u2013 pochodz\u0105 wy\u0142\u0105cznie z osobnego zegara aparatu, kt\u00f3ry mo\u017ce by\u0107 \u017ale ustawiony lub celowo zmieniony. Najwi\u0119kszym ryzykiem interpretacyjnym pozostaje mo\u017cliwo\u015b\u0107 ca\u0142kowitego skopiowania EXIF z jednego zdj\u0119cia na drugie za pomoc\u0105 narz\u0119dzi takich jak ExifTool, co podwa\u017ca warto\u015b\u0107 dowodow\u0105 metadanych w izolacji.' },
    { type: 'title', text: 'Jak odpowiedzialnie czyta\u0107 metadane GPS', level: 3 },
    { type: 'paragraph', html: 'Wsp\u00f3\u0142rz\u0119dne GPS zapisane w metadanych obrazu mog\u0105 pom\u00f3c w odtworzeniu geografii zdarzenia dowodowego, ale nale\u017cy do nich podchodzi\u0107 z ostro\u017cno\u015bci\u0105. Lokalizacj\u0119 rejestruje wbudowany odbiornik aparatu lub telefonu, jednak jej dok\u0142adno\u015b\u0107 zale\u017cy od warunk\u00f3w odbioru satelitarnego, czasu synchronizacji i ustawie\u0144 urz\u0105dzenia. W praktyce oznacza to mo\u017cliwe odchylenia od kilku do kilkudziesi\u0119ciu metr\u00f3w, a w trudnym terenie nawet wi\u0119cej. Ponadto u\u017cytkownik mo\u017ce wy\u0142\u0105czy\u0107 zapis GPS, a niekt\u00f3re platformy automatycznie usuwaj\u0105 lub zaokr\u0105glaj\u0105 wsp\u00f3\u0142rz\u0119dne. Podczas analizy kryminalistycznej nie wolno polega\u0107 na samych wsp\u00f3\u0142rz\u0119dnych \u2013 trzeba je zestawi\u0107 z dokumentacj\u0105 pozyskania obrazu, zeznaniami, danymi o zasi\u0119gu sieci kom\u00f3rkowej oraz innymi \u017ar\u00f3d\u0142ami ustalaj\u0105cymi czas i miejsce. W\u0142a\u015bciwa praktyka polega na traktowaniu GPS jako poszlaki wymagaj\u0105cej potwierdzenia innymi metodami.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
