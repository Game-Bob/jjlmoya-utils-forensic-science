import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'symulator-linii-beckego-wspolczynnika-zalamania-szkla';
const title = 'Forensyczny symulator linii Beckego i współczynnika załamania światła szkła';
const description = 'Symuluj metodę linii Beckego do kryminalistycznego porównywania szkła poprzez podgrzewanie cieczy immersyjnej, dopasowywanie współczynników załamania światła i obserwowanie znikającej jasnej otoczki.';

const howTo = [
  {
    name: 'Wybierz profil badanego szkła',
    text: 'Wybierz typowy profil referencyjny szkła, taki jak sodowo-wapniowe, borokrzemowe, kryształ ołowiowy lub hartowane szkło okienne.',
  },
  {
    name: 'Dostosuj temperaturę stolika grzewczego',
    text: 'Przesuń suwak temperatury, aby zmienić współczynnik załamania wirtualnej cieczy immersyjnej.',
  },
  {
    name: 'Obserwuj ruch linii Beckego',
    text: 'Użyj regulacji kierunku ogniskowania, aby zobaczyć, czy jasna linia przesuwa się do wewnątrz, na zewnątrz czy prawie znika w punkcie dopasowania.',
  },
  {
    name: 'Odczytaj różnicę współczynników',
    text: 'Porównaj współczynnik załamania cieczy, szkła, różnicę współczynników oraz procent dopasowania, aby zrozumieć, dlaczego otoczka słabnie w pobliżu dopasowania współczynników.',
  },
];

const faq = [
  {
    question: 'Czym jest linia Beckego w kryminalistycznej analizie szkła?',
    answer: 'Linia Beckego to jasna otoczka (halo) widoczna w pobliżu granicy między fragmentem szkła a cieczą immersyjną, gdy ich współczynniki załamania światła się różnią. Jej ruch podczas ogniskowania pomaga określić, który materiał ma wyższy współczynnik załamania.',
  },
  {
    question: 'Dlaczego podgrzewanie cieczy immersyjnej ma znaczenie?',
    answer: 'Współczynnik załamania światła wielu cieczy immersyjnych maleje wraz ze wzrostem temperatury. Podgrzewając ciecz do momentu, gdy jej współczynnik zrówna się ze współczynnikiem szkła, kontrast na granicy faz zanika, a krawędź fragmentu staje się trudna do zauważenia.',
  },
  {
    question: 'Czy sam współczynnik załamania światła pozwala zidentyfikować źródło pochodzenia szkła?',
    answer: 'Nie. Współczynnik załamania może wspierać porównanie i wykluczenie grupowe, ale kryminalistyczna interpretacja źródła uwzględnia również skład pierwiastkowy, grubość, kolor, kontekst pęknięć, kontrole, niepewność pomiarową i sprawdzone procedury laboratoryjne.',
  },
  {
    question: 'Co oznacza zniknięcie linii Beckego?',
    answer: 'Oznacza to, że ciecz i szkło mają bardzo zbliżone współczynniki załamania światła w danych symulowanych warunkach. W rzeczywistej mikroskopii zniknięcie ocenia się przy użyciu skalibrowanej kontroli temperatury i materiałów odniesienia.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Widok z mikroskopu wirtualnego przedstawiający fragment szkła w cieczy immersyjnej',
    units: 'Układ jednostek temperatury',
    metric: 'Metryczny',
    imperial: 'Imperialny',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Szkło referencyjne',
    sodaLime: 'Szkło opakowaniowe sodowo-wapniowe',
    borosilicate: 'Szkło laboratoryjne borokrzemowe',
    leadCrystal: 'Dekoracyjne szkło kryształowe ołowiowe',
    tempered: 'Hartowane szkło okienne',
    stageTemperature: 'Temperatura stolika',
    focusDirection: 'Kierunek ogniskowania',
    focusRaised: 'Podnieś ognisko',
    focusLowered: 'Obniż ognisko',
    liquidRi: 'RI cieczy',
    glassRi: 'RI szkła',
    deltaRi: 'Delta RI',
    matchMeter: 'Dopasowanie RI',
    canvasHalo: 'widoczna otoczka Beckego',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'krawędź prawie dopasowana',
    interpMatched: 'Granica faz jest bliska dopasowania optycznego. W rzeczywistym teście linii Beckego jest to obszar, w którym otoczka staje się słaba, a krawędź fragmentu najtrudniejsza do zlokalizowania.',
    interpGlassHigher: 'Szkło ma wyższy współczynnik załamania. Przy podniesionym ognisku zachowanie linii Beckego wskazuje na koncentrację światła w stronę szkła.',
    interpLiquidHigher: 'Ciecz immersyjna ma wyższy współczynnik załamania. Otoczka przesuwa się w stronę cieczy, dopóki temperatura nie zbliży współczynnika cieczy do współczynnika szkła.',
    disclaimer: 'Symulacja wyłącznie do celów edukacyjnych. Rzeczywiste kryminalistyczne porównywanie szkła wymaga skalibrowanego sprzętu do pomiaru współczynnika załamania, znanych wzorców, raportowania niepewności oraz wykwalifikowanej interpretacji.',
  },
  seo: [
    {
      type: 'title',
      text: 'Badanie współczynnika załamania linią Beckego dla szkła kryminalistycznego',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Symulator dydaktyczny',
      title: 'Co demonstruje ten symulator RI szkła',
      html: 'Ten symulator pokazuje, dlaczego fragment szkła staje się mniej lub bardziej widoczny w olejku immersyjnym, gdy współczynnik załamania światła cieczy zbliża się do współczynnika szkła. Jest przeznaczony dla studentów kryminalistyki uczących się <strong>mikroskopii linii Beckego</strong>, dopasowywania RI na stoliku grzewczym oraz ograniczeń dowodowych porównywania szkła.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n szkła - n cieczy', label: 'pokazany kontrast współczynników', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'zakres temperatury stolika', icon: 'mdi:thermometer' },
        { value: '4', label: 'profile szkła', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'konwertowalne jednostki temperatury', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktyczna lista kontrolna do obserwacji linii Beckego',
      items: [
        'Użyj czystego, małego fragmentu szkła całkowicie zanurzonego w odpowiedniej cieczy o znanym współczynniku załamania.',
        'Ogniskuj nieco powyżej i poniżej granicy faz i obserwuj, w którą stronę przesuwa się jasna linia.',
        'Podnoś temperaturę powoli w pobliżu szacowanego punktu dopasowania, ponieważ linia może zanikać w wąskim zakresie.',
        'Zapisz temperaturę, typ cieczy, wzorzec kalibracji, zaobserwowane zachowanie dopasowania oraz niepewność.',
        'Traktuj RI jako dowód grupowy: brak dopasowania może wykluczyć, podczas gdy dopasowanie wymaga dodatkowego kontekstu.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Co może wspierać porównanie RI',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Współczynnik załamania światła może pomóc w porównaniu fragmentów badanego szkła ze znanym szkłem referencyjnym w kontrolowanych warunkach.',
          points: ['Porównanie cech grupowych', 'Wykluczenie, gdy RI wyraźnie się różni', 'Wstępna selekcja przed analizą pierwiastkową', 'Nauka zachowania optycznego na granicach faz'],
        },
        {
          title: 'Czego sam RI nie może udowodnić',
          icon: 'mdi:alert-circle-outline',
          description: 'Dopasowany współczynnik załamania nie identyfikuje jednoznacznie szyby, butelki, szyby samochodowej ani źródła z miejsca zdarzenia.',
          points: ['Brak indywidualnej identyfikacji źródła na tej podstawie', 'Brak rekonstrukcji bez kontekstu zdarzenia', 'Nie zastępuje prób kontrolnych', 'Brak wniosków prawnych na podstawie modelu w przeglądarce'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pytanie użytkownika', 'Pojęcie mikroskopowe', 'Dokładna odpowiedź'],
      rows: [
        ['Dlaczego jasna krawędź się przesuwa?', 'Załamanie światła na granicy dwóch współczynników.', 'Linia Beckego ma tendencję do przesuwania się w stronę materiału o wyższym współczynniku załamania przy podnoszeniu ogniska.'],
        ['Dlaczego krawędź znika?', 'Dopasowanie współczynników.', 'Gdy współczynniki załamania szkła i cieczy są prawie równe, kontrast graniczny spada, a otoczka słabnie.'],
        ['Po co podgrzewać ciecz?', 'Współczynnik termiczny RI.', 'Współczynnik załamania symulowanej cieczy maleje wraz z temperaturą, umożliwiając dopasowanie do różnych typów szkła.'],
        ['Czy dopasowanie jest rozstrzygające?', 'Ograniczenie dowodu grupowego.', 'Dopasowanie świadczy jedynie o spójności; wiele obiektów szklanych może dzielić podobny współczynnik RI.'],
      ],
    },
    {
      type: 'title',
      text: 'Jak działa model symulacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model przypisuje każdemu profilowi szkła referencyjny współczynnik załamania światła, a ciecz immersyjną traktuje jako medium wrażliwe na temperaturę. W miarę jak stolik grzewczy się ociepla, współczynnik załamania cieczy maleje o stały współczynnik termiczny. Symulator oblicza różnicę między RI szkła a RI cieczy, używając tej różnicy do kontrolowania jasności otoczki, jej przesunięcia, procentu dopasowania oraz komunikatu interpretacyjnego.',
    },
    {
      type: 'paragraph',
      html: 'Pole widzenia mikroskopu jest celowo uproszczone jakościowo. Nie próbuje odwzorowywać fizycznie każdej ścieżki optycznej. Zamiast tego zachowuje kluczową relację dydaktyczną: silny kontrast RI daje jasną granicę, słabszy kontrast daje słabą granicę, a w pobliżu punktu dopasowania krawędź szkła może wydawać się znikać w cieczy.',
    },
    {
      type: 'paragraph',
      html: 'W profesjonalnych laboratoriach kryminalistycznych kalibracja stolika grzewczego jest przeprowadzana przy użyciu referencyjnych próbek szkła o znanym współczynniku załamania światła. Ponieważ współczynnik załamania cieczy immersyjnej zmienia się w przewidywalny sposób wraz z temperaturą (zwykle oznaczany jako dn/dT), dokładna temperatura, w której znika linia Beckego, pozwala naukowcowi obliczyć współczynnik załamania szkła z dokładnością do czterech miejsc po przecinku. Ten symulator modeluje to zależne od temperatury zachowanie za pomocą liniowego wzoru, umożliwiając uczniom ćwiczenie znajdowania dokładnego punktu dopasowania poprzez staranne kontrolowanie stolika grzewczego.',
    },
    {
      type: 'paragraph',
      html: 'Podczas analizy dowodów ze szkła współczynnik załamania światła jest uważany za dowód o charakterze grupowym. Chociaż dopasowanie współczynnika załamania między fragmentem z miejsca przestępstwa a odzieżą podejrzanego jest zgodne ze wspólnym źródłem, nie pozwala na jednoznaczną identyfikację źródła, ponieważ wiele szklanych przedmiotów ma identyczne wartości współczynnika załamania. Dlatego eksperci kryminalistyczni muszą interpretować dopasowane wyniki w sposób ostrożny, zgłaszając dopasowanie pod kątem spójności, jednocześnie podkreślając, że ostateczna identyfikacja źródła nie jest możliwa wyłącznie na podstawie właściwości optycznych.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Współczynnik załamania', definition: 'Miara tego, jak silnie materiał zagina światło w porównaniu z próżnią.' },
        { term: 'Ciecz immersyjna', definition: 'Ciecz o znanych właściwościach optycznych, służąca do otaczania fragmentu podczas mikroskopowego porównywania RI.' },
        { term: 'Linia Beckego', definition: 'Jasna linia lub otoczka widoczna na granicy faz, gdy dwa przezroczyste materiały mają różne współczynniki załamania światła.' },
        { term: 'Punkt dopasowania', definition: 'Obszar temperatury, w którym ciecz immersyjna i szkło mają prawie taki sam współczynnik załamania światła.' },
        { term: 'Dowód grupowy', definition: 'Dowód, który może powiązać przedmiot z grupą możliwych źródeł, a nie z jednym unikalnym źródłem.' },
      ],
    },
    {
      type: 'tip',
      title: 'Wskazówka interpretacyjna dla studentów',
      html: 'W przypadku dowodów ze szkła, wyraźny brak dopasowania RI jest często silniejszym dowodem niż dopasowanie, ponieważ pozwala wykluczyć sugerowane źródło. Dopasowanie jest użyteczne, ale jego siła zależy od danych populacyjnych, precyzji pomiaru, składu pierwiastkowego oraz kontekstu sprawy.',
    },
    {
      type: 'proscons',
      title: 'Mocne strony i ograniczenia badania RI szkła linią Beckego',
      items: [
        { pro: 'Szybkie, wizualne i doskonałe do nauki porównywania materiałów przezroczystych.', con: 'Ocena obserwatora i technika ogniskowania mogą wpływać na widoczny ruch linii.' },
        { pro: 'Dopasowanie temperatury pozwala oszacować RI z użyteczną precyzją, jeśli jest skalibrowane.', con: 'Kontrola temperatury, starzenie się cieczy, zanieczyszczenia i wzorce mają znaczenie w rzeczywistej pracy.' },
        { pro: 'Użyteczne do wykluczania fragmentów szkła o wyraźnie różnych właściwościach optycznych.', con: 'Nie pozwala na zidentyfikowanie konkretnego źródła bez szerszych dowodów analitycznych i kontekstowych.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Ostrzeżenie kryminalistyczne',
      title: 'Zachowaj proporcjonalność wniosków',
      html: 'Symulacja linii Beckego w przeglądarce jest pomocą naukową, a nie metodą laboratoryjną. Formalna interpretacja dowodów ze szkła powinna opierać się na skalibrowanych instrumentach, spisanych procedurach, rejestrach kalibracji, oszacowaniach niepewności, recenzjach naukowych oraz odpowiednim języku sprawozdawczości dla danej jurysdykcji.',
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
      applicationCategory: 'ForensicApplication',
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
