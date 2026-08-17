import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'kalkulator-czasu-zgonu-algor-mortis';
const title = 'Kalkulator Czasu Zgonu Algor Mortis i Nomogram Henssge';
const description = 'Oszacuj czas od zgonu oraz przedział godzinowy śmierci na podstawie temperatury rektalnej i nomogramu Henssge.';

const howTo = [
  { name: 'Wprowadź temperaturę rektalną i otoczenia', text: 'Podaj zmierzoną głęboką temperaturę rektalną zwłok oraz temperaturę powietrza na miejscu zdarzenia.' },
  { name: 'Ustal masę ciała i współczynnik korekcyjny', text: 'Wpisz masę ciała w kilogramach i wybierz współczynnik izolacji odzieży lub zanurzenia w wodzie.' },
  { name: 'Określ godzinę pomiaru temperatury', text: 'Wpisz dokładną godzinę wykonania pomiaru lub kliknij Aktualny czas.' },
  { name: 'Przeanalizuj czas zgonu i krzywą stygnięcia', text: 'Sprawdź obliczony czas od momentu śmierci, 95 procentowy przedział ufności i wykres termiczny.' }
];

const faq = [
  { question: 'Czym jest Algor Mortis w medycynie sądowej?', answer: 'Algor Mortis to pośmiertne oziębienie ciała wynikające z ustania krążenia i produkcji ciepła aż do zrównania z temperaturą otoczenia.' },
  { question: 'Dlaczego nomogram Henssge jest lepszy od reguł liniowych?', answer: 'Ponieważ uwzględnia początkowe plateau temperaturowe oraz podwójnie wykładniczy spadek ciepła zależny od masy i odzieży.' },
  { question: 'Jaka jest dokładność termometrycznego szacowania czasu zgonu?', answer: 'W kontrolowanych warunkach standardowych 95 procentowy przedział ufności wynosi około plus minus 2.8 godziny w pierwszych dziesięciu godzinach.' },
  { question: 'Co oznacza pośmiertne plateau temperaturowe?', answer: 'To początkowy okres 1 do 3 godzin po śmierci, w którym temperatura w odbytnicy spada bardzo wolno z powodu gradientu cieplnego.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Szacowanie Czasu od Zgonu i Nomogram Henssge',
    disclaimer: 'Narzędzie wyłącznie do celów edukacyjnych i akademickich. Oficjalne opinie sądowo-lekarskie wymagają pełnej sekcji zwłok i weryfikacji plam opadowych.',
    unitSystemLabel: 'Układ jednostek',
    unitMetricLabel: 'Metryczny',
    unitImperialLabel: 'Imperialny',
    presetsHeader: 'Standardowe scenariusze sądowe',
    presetCustom: 'Parametry niestandardowe',
    presetNakedCalm: 'Nago w spokojnym pokoju (20°C)',
    presetDressedIndoor: 'W ubraniu w pomieszczeniu (19.5°C)',
    presetWinterOutdoor: 'Na zewnątrz w zimie (4°C)',
    presetSubmergedWater: 'Zanurzenie w stojącej wodzie (12°C)',
    presetHeavyDuvet: 'Pod grubą pierzyną puchową (18°C)',
    inputsHeader: 'Pomiary termiczne i parametry otoczenia',
    rectalTempLabel: 'Głęboka temp. rektalna',
    ambientTempLabel: 'Temperatura otoczenia',
    bodyWeightLabel: 'Masa ciała',
    factorLabel: 'Współczynnik korekcyjny',
    measurementTimeLabel: 'Godzina pomiaru',
    factorNaked: 'Nago w stojącym powietrzu',
    factorLightClothes: 'Lekkie ubranie (1-2 warstwy)',
    factorStandardClothes: 'Standardowe ubranie (3-4 warstwy)',
    factorHeavyWinter: 'Gruba odzież zimowa',
    factorLightBlanket: 'Łóżko z lekkim kocem',
    factorHeavyDuvet: 'Łóżko z grubą pierzyną puchową',
    factorStillWater: 'Zanurzenie w wodzie stojącej',
    factorFlowingWater: 'Zanurzenie w zimnej wodzie płynącej',
    factorWetClothing: 'Mokre ubranie przy wietrze',
    factorMovingAir: 'Ruch powietrza z wentylatorem',
    resultsHeader: 'Analiza czasu od zgonu',
    estimatedPmiLabel: 'Szacowany czas od śmierci',
    deathWindowLabel: 'Prawdopodobne okno zgonu',
    confidenceMarginLabel: 'Przedział ufności (95%)',
    coolingPhaseLabel: 'Faza termodynamiczna',
    coolingRateLabel: 'Chwilowe tempo utraty ciepła',
    glaisterEstimateLabel: 'Porównanie z regułą Glaistera',
    chartHeader: 'Wykładnicza trajektoria stygnięcia Henssge',
    chartXAxis: 'Godziny po zgonie',
    chartYAxis: 'Temperatura głęboka',
    chartNowMarker: 'Zanotowany pomiar',
    chartPlateauMarker: 'Początkowe plateau',
    phasePlateau: 'Faza plateau',
    phaseDescent: 'Spadek wykładniczy',
    phaseEquilibrium: 'Równowaga termiczna',
    phaseHyperthermia: 'Ostrzeżenie o hipertermii',
    hoursUnit: 'godz.',
    minutesUnit: 'min',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: 'Resetuj',
    nowBtn: 'Aktualny czas',
    coreThermometerLabel: 'Temperatura głęboka',
    baselineAmbientLabel: 'Poziom otoczenia',
    referenceBodyTempLabel: 'Temperatura wyjściowa'
  },
  seo: [
    { type: 'title', text: 'Fizyczne Podstawy Oziębienia Pośmiertnego i Szacowanie Czasu Zgonu', level: 2 },
    { type: 'paragraph', html: 'Określenie czasu od momentu śmierci (Postmortem Interval, PMI) jest jednym z kluczowych zadań tanatologii sądowo-lekarskiej w ramach oględzin miejsca ujawnienia zwłok. <strong>Algor Mortis</strong> oznacza stopniową utratę energii cieplnej przez ciało po ustaniu krążenia krwi i metabolizmu komórkowego aż do osiągnięcia równowagi termicznej z otoczeniem. Pomiar głębokiej temperatury w odbytnicy w połączeniu z prawami termodynamiki pozwala naukowo i obiektywnie zrekonstruować ramy czasowe zgonu.' },
    { type: 'diagnostic', variant: 'info', title: 'Przebieg Termodynamiczny Stygnięcia Zwłok', html: 'Utrata ciepła nie przebiega liniowo od pierwszej chwili po zgonie. Występuje początkowe opóźnienie zwane <em>plateau temperaturowym</em>, po którym następuje faza szybkiego spadku wykładniczego oraz końcowa asymptota wyrównawcza.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Rektalna norma wyjściowa' },
      { value: '±2.8 h', label: 'Przedział 95% w 10h' },
      { value: 'Podwójny Wykładnik', label: 'Model matematyczny Henssge' }
    ] },
    { type: 'title', text: 'Równanie Podwójnie Wykładnicze Clausa Henssge', level: 3 },
    { type: 'paragraph', html: 'Uproszczone wzory liniowe, takie jak reguła Glaistera, zakładały stały spadek rzędu 0.83 stopnia Celsjusza na godzinę. Pomijały one jednak całkowitą masę ciała, właściwości izolacyjne odzieży oraz początkowe zjawisko opóźnienia stygnięcia rdzenia ciała.' },
    { type: 'code', ariaLabel: 'Wzór Henssge', code: 'Q = (T_rektalna - T_otoczenia) / (37.2 - T_otoczenia)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (MasaCiala^0.625 * WspolczynnikKorekcyjny) - 0.0284' },
    { type: 'paragraph', html: 'Profesor Claus Henssge opracował równanie dwuwykładnicze opisujące jednocześnie powierzchniowy gradient oddawania ciepła oraz bezwładność termiczną narządów wewnętrznych, co stanowi podstawę nowoczesnej tanatometrii sądowej.' },
    { type: 'title', text: 'Współczynniki Korekcyjne Środowiska i Odzieży', level: 3 },
    { type: 'paragraph', html: 'Szybkość wymiany ciepła zależy ściśle od masy ciała, ruchów powietrza wokół zwłok oraz warstw tkanin izolacyjnych zabezpieczających powłoki ciała.' + " Rzetelne oszacowanie powinno uwzględniać także otoczenie, odzież, ułożenie ciała, ruch powietrza oraz wiarygodność każdego pomiaru. Różnice mogą wynikać z wilgotności, źródeł ciepła, podłoża albo niepełnej dokumentacji. Wynik należy więc traktować jako zakres obarczony niepewnością i zestawiać go z innymi ustaleniami kryminalistycznymi, a nie z pojedynczą liczbą." + " Ocena powinna uwzględniać jakość obrazu, kierunek nacisku, możliwe zniekształcenia oraz pełną dokumentację porównania. Wiarygodny wniosek wymaga wielu niezależnych cech, ich relacji przestrzennych, opisanych ograniczeń i kontroli wykonanej przez wykwalifikowanego biegłego." },
    { type: 'table', headers: ['Warunki na Miejscu', 'Wartość Cf', 'Efekt Fizyczny'], rows: [
      ['Nago w stojącym powietrzu', '1.0', 'Standardowe promieniowanie i konwekcja naturalna'],
      ['Lekkie ubranie (1-2 warstwy)', '1.1', 'Niewielkie ograniczenie konwekcyjnej utraty ciepła'],
      ['Zwykłe ubranie (3-4 warstwy)', '1.2', 'Umiarkowana bariera termiczna tułowia i kończyn'],
      ['Gruba odzież zimowa', '1.4', 'Silna izolacja dzięki uwięzionej warstwie powietrza'],
      ['Pod grubą pierzyną puchową w łóżku', '1.8', 'Bardzo wysoka retencja ciepła i opóźnienie stygnięcia'],
      ['Zanurzenie w wodzie stojącej', '0.5', 'Przewodnictwo cieplne wody jest 24 razy wyższe niż powietrza'],
      ['Zanurzenie w zimnej wodzie płynącej', '0.35', 'Wymuszona konwekcja cieczy przyspiesza utratę ciepła']
    ] },
    { type: 'title', text: 'Fazy Termodynamiczne Stygnięcia Ciała', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Pośmiertne Plateau Temperaturowe', description: 'W pierwszych 1 do 3 godzinach temperatura rektalna spada minimalnie, podczas gdy skóra oddaje ciepło.', points: ['Kształtowanie gradientu rdzeń powłoki', 'Wzory liniowe zaniżają tu czas zgonu', 'Opisane składnikiem -0.25 exp(-5kt)'] },
      { title: 'Szybki Spadek Wykładniczy', description: 'Po uformowaniu gradientu ciepło ucieka z maksymalną regularnością zależną od masy.', highlight: true, points: ['Najwyższa czułość pomiarowa', 'Najwęższy margines błędu statystycznego', 'Optymalny czas dla termometrii'] }
    ] },
    { type: 'title', text: 'Zasady Pomiaru Temperatury na Miejscu Zdarzenia', level: 3 },
    { type: 'list', items: [
      '<strong>Głęboki pomiar temperatury rektalnej:</strong> wprowadzić skalibrowaną sondę cyfrową na głębokość co najmniej 8 do 10 cm.',
      '<strong>Pomiar temperatury otoczenia przy ciele:</strong> umieścić termometr w odległości nie większej niż 10 cm od zwłok.',
      '<strong>Kontrola stabilności termicznej otoczenia:</strong> odnotować działanie grzejników, otwarte okna lub nasłonecznienie.',
      '<strong>Ocena wilgotności odzieży:</strong> mokre tkaniny znacznie zwiększają chłodzenie wyparne.'
    ] },
    { type: 'summary', title: 'Podsumowanie Metodologiczne', items: [
      'Nomogram Henssge jest międzynarodowym standardem termometrycznego szacowania czasu śmierci.',
      'Wynik należy zawsze podawać w formie przedziału czasowego z granicami ufności, a nie pojedynczego punktu.',
      'Konieczna jest korelacja z oceną stężenia pośmiertnego, plam opadowych i pobudliwości suprawitalnej.'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
