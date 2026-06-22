const slug = 'kalkulator-odnowy-komorkowej';
const description = 'Oblicz jaki procent Twojego ciała odnowił się od momentu narodzin. Szacunki oparte na tempie podziału komórek organów, kości i tkanek. Paradoks Statku Tezeusza w praktyce.';
const title = 'Kalkulator Odnowy Komórkowej: Ile Zostało z Oryginalnego "Ciebie"?';
const howTo = [
    {
      name: 'Ustaw swój wiek',
      text: 'Przesuń suwak w zakresie od 1 do 105 lat. Jest to najważniejsza zmienna w obliczeniach odnowy.',
    },
    {
      name: 'Obserwuj główny procent',
      text: 'Duża liczba na środku pokazuje, jaki procent Twojej obecnej materii jest "nowy" (odnowiony od narodzin).',
    },
    {
      name: 'Analizuj słupki postępu',
      text: 'Każdy słupek reprezentuje inną tkankę: skórę/krew, kości, organy i mózg. Zauważ, jak mózg prawie się nie zmienia, podczas gdy skóra odnawia się nieustannie.',
    },
    {
      name: 'Zastanów się nad swoją tożsamością',
      text: 'Skoro 99% Ciebie to nowa materia, to kim tak naprawdę jesteś? Użyj tego narzędzia jako punktu wyjścia do przemyśleń na temat ciągłości osobowej i Paradoksu Tezeusza.',
    },
  ];
const faq = [
    {
      question: 'Czym dokładnie jest "odnowa komórkowa"?',
      answer: 'To naturalny proces, w którym starzejące się lub uszkodzone komórki umierają (apoptoza) i są zastępowane nowymi komórkami generowanymi przez podziały mitotyczne. Cykl ten jest niezbędny do utrzymania funkcjonalności tkanek i naprawy uszkodzeń.',
    },
    {
      question: 'Dlaczego mózg odnawia się tak wolno?',
      answer: 'Neurony w korze mózgowej powstają przed narodzinami i zazwyczaj nie dzielą się ponownie. Zapewnia to stabilność neurologiczną: Twoje podstawowe "okablowanie" pozostaje stałe. Jednak komórki glejowe (wspierające) odnawiają się. Pamięć jest zapisana w połączeniach, a nie w atomach.',
    },
    {
      question: 'Czy to prawda, że co 7 lat stajemy się "nowymi ludźmi"?',
      answer: 'To uproszczenie, które nie jest do końca ścisłe. Krew odnawia się w 4 miesiące, skóra w miesiąc, szkielet w 10 lat. Mózg pozostaje w dużej mierze niezmieniony. Liczba 7 lat jest historyczna (wspominał o niej już Arystoteles), ale biologicznie jest to mało precyzyjna średnia.',
    },
    {
      question: 'Jeśli moje ciało jest w 99% nowe, czy wciąż jestem tą samą osobą?',
      answer: 'Tak. Tożsamość to ciągłość informacji, świadomości i pamięci, a nie atomów. Jesteś jak rzeka: woda zmienia się nieustannie, ale rzeka trwa. Paradoks Tezeusza sugeruje, że tożsamość tkwi we wzorcu, a nie w materii.',
    },
    {
      question: 'Które tkanki odnawiają się najszybciej?',
      answer: 'Krew i skóra wiodą prym. Twój szpik kostny produkuje 200 miliardów komórek krwi dziennie. Tracisz ok. 30 000 komórek skóry na minutę. Dlatego tak dobrze się regenerują i tak dają po sobie znać upływ czasu: są młode pod względem wieku komórkowego.',
    },
    {
      question: 'Czy soczewka oka naprawdę się nie odnawia?',
      answer: 'Zgadza się. Komórki soczewki powstają w trakcie rozwoju embrionalnego i pozostają na całe życie. W wieku 100 lat centralne komórki Twojej soczewki mogą być tymi samymi, które miałeś w łonie matki. To biologiczna kapsuła czasu.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Skopiowano',
    noHistory: 'Brak historii',
    load: 'Wczytaj',
    delete: 'Usuń',
    biologicalTimeline: 'Oś Czasu Biologicznego',
    ageUnit: 'lat ewolucji',
    matterNewPercent: 'Twoja materia jest nowa w',
    atomicRenewal: 'Odnowa Atomowa',
    skinAndBlood: 'Skóra i Krew',
    boneRemodeling: 'Remodeling Kości',
    organicMatrix: 'Matryca Organiczna',
    perennialCells: 'Komórki Trwałe',
    disclaimerText: 'Obliczenia opierają się na średnim czasie życia komórek według badań izotopowych. Podczas gdy krew i skóra odnawiają się w kilka tygodni, białka soczewki oka i znaczna część kory mózgowej pozostają te same od etapu rozwoju embrionalnego. Fizycznie jesteś dynamiczną strukturą w ciągłym ruchu.',
  },
  seo: [
    {
      type: 'title',
      text: 'Ile z Ciebie jest naprawdę "Twoje"? Nauka o odnowie komórkowej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Twoje ciało jest jak rzeka w ciągłym ruchu. W każdej sekundzie miliony komórek umierają i są zastępowane nowymi. W ciągu siedmiu lat praktycznie każdy atom w Twoim ciele zostanie wymieniony. Jednak ta statystyka jest głęboko myląca, ponieważ różne części organizmu odnawiają się w radykalnie różnym tempie.',
    },
    {
      type: 'paragraph',
      html: 'Ten paradoks, znany jako <strong>Paradoks Statku Tezeusza</strong>, stawia starożytne pytanie: jeśli wymienisz wszystkie części czegoś, czy to wciąż to samo? W Twoim przypadku jest to pytanie dosłowne. Atomy budujące dziś Twoje ciało nie są tymi samymi, które były w nim 10 lat temu, ale <em>Ty</em> wciąż jesteś Sobą.',
    },
    {
      type: 'title',
      text: 'Wymiana Komórkowa: Mapa Twojego Dynamicznego Ciała',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tempo odnowy różni się drastycznie w zależności od tkanki:',
    },
    {
      type: 'table',
      headers: ['Tkanka', 'Średni Czas Życia Komórki', 'Pełna Odnowa', 'Opis'],
      rows: [
        ['<strong>Krew</strong>', '120 dni', '4 miesiące', 'Czerwone krwinki są najszybsze. Twój szpik kostny produkuje ich 200 miliardów dziennie.'],
        ['<strong>Skóra</strong>', '2-4 tygodnie', '1 miesiąc', 'Ekstremalnie szybka odnowa. Tracisz ok. 30 000 komórek skóry na minutę.'],
        ['<strong>Kości</strong>', '10 lat', 'Dekada', 'Szkielet jest bardziej konserwatywny. Niemniej po 10 latach praktycznie cały szkielet zostanie wymieniony.'],
        ['<strong>Organy</strong>', '15 lat', '1,5 dekady', 'Wątroba odnawia się w miesiące. Serce w lata. Mozaika rytmów.'],
        ['<strong>Mózg</strong>', '80+ lat (neurony)', 'Prawie nigdy', 'Twoje neurony kory mózgowej pochodzą z narodzin. Jednak glej (komórki wspierające) odnawia się.'],
      ],
    },
    {
      type: 'title',
      text: 'Soczewka Oka: Najstarsza Część Ciebie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W Twoim ciele znajduje się jedna wyjątkowa struktura: <strong>soczewka oka</strong>. Komórki budujące soczewkę powstają w trakcie rozwoju płodowego i nigdy nie są wymieniane. Jeśli dożyjesz 100 lat, centralne komórki Twojej soczewki wciąż będą tymi samymi, które miałeś w łonie matki. Są one dosłownie najstarszą częścią Ciebie.',
    },
    {
      type: 'title',
      text: 'Obliczanie Całkowitej Odnowy: Paradoks Wag',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator wykorzystuje średnią ważoną dla różnych tkanek:',
    },
    {
      type: 'list',
      items: [
        '<strong>30% skóra i krew:</strong> Prawie całkowita odnowa w młodszym wieku.',
        '<strong>35% szkielet:</strong> Stopniowa odnowa, osiągająca 100% po 10 latach.',
        '<strong>25% organy:</strong> Wolniejsza odnowa, zależna od narządu.',
        '<strong>10% mózg:</strong> Minimalna zmiana w neuronach, maksymalna w strukturach wspierających.',
      ],
    },
    {
      type: 'paragraph',
      html: 'W rezultacie w wieku 25 lat około <strong>93% Twojej obecnej materii jest nowe</strong>. W wieku 80 lat możesz składać się w ponad 99% z innych atomów niż te, które miałeś w chwili narodzin.',
    },
    {
      type: 'title',
      text: 'Implikacje Filozoficzne: Tożsamość to Informacja, nie Materia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeśli Twoje ciało jest całkowicie nowe co dekadę, dlaczego to wciąż "Ty"? Odpowiedź brzmi: tożsamość nie tkwi w konkretnych atomach, ale we <strong>wzorcu informacji</strong>, który te atomy przechowują. Jesteś jak piosenka: to nie to samo drgające powietrze, ale wzorzec trwa.',
    },
    {
      type: 'paragraph',
      html: 'Ma to głębokie konsekwencje: Twoje ciało to proces, a nie rzecz. Jesteś samoorganizującym się wzorcem, który trwa mimo zmian. Nie posiadasz atomów na własność; jesteś strukturą, która tymczasowo je kanalizuje.',
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

