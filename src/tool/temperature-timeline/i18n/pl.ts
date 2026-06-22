import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperatura-linia-czasu';
const description = 'Poznaj historie srednich temperatur Ziemi w epokach geologicznych.';
const title = 'Linia Czasu Srednich Temperatur Planety';

const howTo = [
  {
    name: 'Wybierz ere',
    text: 'Kliknij naciecie na podzialce.',
  },
  {
    name: 'Sprawdz temperature',
    text: 'Odczytaj globalna srednia temperature.',
  },
  {
    name: 'Obserwuj planete',
    text: 'Obserwuj, jak plotno reaguje na stan termiczny.',
  },
];

const faq = [
  {
    "question": "Czy Ziemia byla w przeszlosci cieplejsza niz dzis?",
    "answer": "Tak, Ziemia doswiadczala klimatow znacznie cieplejszych niz obecny. W mezozoiku (erze dinozaurow) i we wczesnym eocenie planeta znajdowala sie w stanie cieplarni bez czap lodowych na biegunach, a srednie globalne temperatury przekraczaly 22 stopnie, czyli o okolo 7-8 stopni wiecej niz obecna srednia. Jednak przejscia do tych okresow trwaly miliony lat, co umozliwialo adaptacje ewolucyjna."
  },
  {
    "question": "Co spowodowalo zjawisko Ziemi Sniezki?",
    "answer": "Ziemia Sniezka (globalne zlodowacenie) miala miejsce glownie w neoproterozoiku (okolo 700 milionow lat temu). Zostala wywolana przez skrajne zmniejszenie ilosci gazow cieplarnianych w wyniku przyspieszonego wietrzenia chemicznego skal krzemianowych po rozpadzie superkontynentu Rodinia. Lod rozciagal sie od biegunow po rownik, odbijajac promieniowanie sloneczne (efekt albedo) i zamykajac planete w petli globalnego zamrazania, ktora zostala przerwana dopiero po milionach lat gromadzenia CO2 z wulkanow."
  },
  {
    "question": "Jak Ziemia reguluje swoja temperature w dlugiej perspektywie?",
    "answer": "Ziemia posiada naturalny termostat kontrolowany przez geologiczny obieg wegla, regulowany glownie przez tektonike plyt i wietrzenie krzemianow. Kiedy planeta sie ociepla, kwasny deszcz szybciej reaguje ze skalami krzemianowymi, usuwajac CO2 z atmosfery i osadzajac go na dnie oceanu w postaci weglanow, co zmniejsza efekt cieplarniany. Jesli planeta sie ochladza, wietrzenie maleje, ale aktywnosc wulkaniczna nadal uwalnia CO2, stopniowo ponownie ocieplajac planete."
  },
  {
    "question": "Czym rozni sie zmiana klimatu w antropocenie od zmian w przeszlosci geologicznej?",
    "answer": "Glowna roznica tkwi w szybkosci zmian. O ile naturalne przejscia klimatyczne w przeszlosci geologicznej trwaly zazwyczaj dziesiatki tysiecy lub miliony lat (co dawalo czas na migracje i ewolucje biologiczna), o tyle ocieplenie w antropocenie nastepuje w ciagu zaledwie dziesiecioleci. To tempo zmian termicznych jest wykladniczo szybsze niz niemal kazde udokumentowane wczesniej wydarzenie, co przekracza zdolnosci adaptacyjne obecnej biosfery i powoduje przyspieszone masowe wymieranie."
  },
  {
    "question": "Czym bylo paleocensko-eocenskie maksimum termiczne (PETM)?",
    "answer": "PETM to skrajne globalne ocieplenie, ktore mialo miejsce okolo 56 milionow lat temu. Bylo spowodowane szybkim i masowym uwolnieniem wegla do atmosfery (prawdopodobnie z oceanicznych hydratow metanu lub wulkanizmu na polnocnym Atlantyku), co podnioslo globalna temperature o 5 do 8 stopni w ciagu kilku tysiecy lat. Jest ono uwazane za najlepszy geologiczny odpowiednik wspolczesnych zmian klimatu, a jego skutkiem bylo silne zakwaszenie oceanow i masowe wymieranie organizmow bentonicznych."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Linia Czasu Temperatur Ziemi',
    sub: 'Poznaj epoki klimatyczne Ziemi',
    ageLabel: 'Wiek:',
    tempLabel: 'Srednia Temperatura:',
    selectPrompt: 'Wybierz okres geologiczny.',
    epoch_archean_name: 'Archaik',
    epoch_archean_age: '4,0 do 2,5 miliarda lat temu',
    epoch_archean_desc: 'Ekstremalnie goraca Ziemia z atmosfera bogata w metan.',
    epoch_proterozoic_name: 'Proterozoik',
    epoch_proterozoic_age: '2,5 miliarda do 541 milionow lat temu',
    epoch_proterozoic_desc: 'Wzrost tlenu wywoluje zlodowacenie huronskie.',
    epoch_paleozoic_name: 'Paleozoik',
    epoch_paleozoic_age: '541 do 252 milionow lat temu',
    epoch_paleozoic_desc: 'Eksplozja zycia w oceanach i wyjscie na lad.',
    epoch_mesozoic_name: 'Mezozoik',
    epoch_mesozoic_age: '252 do 66 milionow lat temu',
    epoch_mesozoic_desc: 'Era dinozaurow w warunkach cieplarnianych.',
    epoch_cenozoic_name: 'Kenozoik',
    epoch_cenozoic_age: '66 milionow lat temu do dzis',
    epoch_cenozoic_desc: 'Stopniowe ochlodzenie i zlodowacenia czwartorzedu.',
    epoch_anthropocene_name: 'Antropocen',
    epoch_anthropocene_age: 'Obecnie i w przyszlosci',
    epoch_anthropocene_desc: 'Szybkie ocieplenie wywolane emisja gazow.',
  },
  seo: [
  {
    "type": "title",
    "text": "KLIMATOLOGIA GEOLOGICZNA: Ewolucja termiczna Ziemi w epokach geologicznych",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Klimat Ziemi nigdy nie byl statyczny. W ciagu 4,5 miliarda lat swojego istnienia nasza planeta oscylowala miedzy dwoma podstawowymi stanami: stanem cieplarni (greenhouse) i stanem zlodowacenia (icehouse). Zrozumienie tych wahan na wielka skale to nie tylko ciekawosc geologiczna, ale niezbedne narzedzie do oceny szybkosci i powagi wspolczesnego ocieplenia wywolanego przez czlowieka. Dzieki badaniu izotopow tlenu w skamienialosciach morskich oraz pecherzykow powietrza w rdzeniach lodowych, paleoklimatolodzy zrekonstruowali dokladny zapis temperatur Ziemi z przeszlosci."
  },
  {
    "type": "title",
    "text": "Zapis temperatur wedlug eonow i er geologicznych",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Historia Ziemi dzieli sie na wielkie przedzialy czasu wyznaczone przez zmiany biologiczne i geologiczne. Ponizej przedstawiono zestawienie szacowanych srednich temperatur dla kazdej epoki dostepnej w tej chronologii:"
  },
  {
    "type": "table",
    "headers": [
      "Epoka Geologiczna",
      "Wiek Aprox.",
      "Srednia Temp.",
      "Kamienie Milowe i Cechy Klimatyczne"
    ],
    "rows": [
      [
        "<strong>Eon Archaeikum</strong>",
        "4,0 do 2,5 Ga",
        "30 °C",
        "Wczesna goraca Ziemia. Slabe mlode slonce bylo kompensowane przez ekstremalny efekt cieplarniany bogaty w metan."
      ],
      [
        "<strong>Eon Proterozoikum</strong>",
        "2,5 Ga do 541 Ma",
        "12 °C",
        "Wzrost wolnego tlenu; wywolal spadek metanu i doprowadzil do globalnych zlodowacen (\"Ziemia Sniezka\")."
      ],
      [
        "<strong>Era Paleozoica</strong>",
        "541 do 252 Ma",
        "20 °C",
        "Wielka bioroznorodnosc morska i kolonizacja ladu. Zakonczona erupcjami wulkanow i skrajnym ociepleniem."
      ],
      [
        "<strong>Era Mesozoica</strong>",
        "252 do 66 Ma",
        "22 °C",
        "Okres cieply par excellence (supercieplarnia bez lodu na biegunach). Era dinozaurow."
      ],
      [
        "<strong>Era Cenozoica</strong>",
        "66 Ma do dzis",
        "14 °C",
        "Stopniowe ochlodzenie wywolane pradami oceanicznymi kontynentow prowadzące do cykli zlodowacen czwartorzedu."
      ],
      [
        "<strong>Antropocen</strong>",
        "Obecnie & przyszlosc",
        "15.2 °C",
        "Drastyczne i anomaliowe ocieplenie wywolane antropogeniczna emisja gazow cieplarnianych."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Ekstrema termiczne przeszlosci: od globalnego zlodowacenia do mezozoicznego upalu",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Historia planety obejmuje skrajne wydarzenia klimatyczne. W proterozoiku prymitywna fotosynteza uwolnila tlen na masowa skale, utleniajac metan w atmosferze i pograzajac planete w zlodowaceniu huronskim - jednym z okresow \"Ziemi Sniezki\", kiedy lodowce siegaly rownika. W przeciwienstwie do tego, w mezozoiku i paleocenie intensywna aktywnosc wulkaniczna nasycila atmosfere CO2, podnoszac srednia globalna temperature do 10 stopni powyzej obecnego poziomu. W tych okresach na biegunach w ogole nie bylo lodu, w szerokosciach arktycznych rosly lasy strefy umiarkowanej, a dominowaly gady zmiennocieplne, takie jak dinozaury."
  },
  {
    "type": "title",
    "text": "Czynniki ksztaltujace klimat planety w skali geologicznej",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Dlugoterminowy klimat Ziemi jest wynikiem delikatnej rownowagi termodynamicznej kontrolowanej przez kilka powiazanych ze soba mechanizmow naturalnych:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Cykle Milankovitcha:</strong> Male okresowe zmiany ekscentrycznosci orbity, nachylenia i precesji osi Ziemi zmieniaja ilosc docierajacego promieniowania slonecznego.",
      "<strong>Krzemianowo-weglanowy obieg wegla:</strong> Dlugoterminowy termostat geochemiczny. Deszcz usuwa CO2, przeksztalcajac go w krzemiany osadzane w oceanach.",
      "<strong>Tektonika plyt:</strong> Dryf kontynentow zmienia globalne prady oceaniczne i tworzy lancuchy gorskie, ktore przyspieszaja chemiczne usuwanie CO2.",
      "<strong>Efekt albedo:</strong> Obecnosc sniegu i lodu odbija swiatlo sloneczne, dodatkowo ochladzajac planete w petlach sprzezenia zwrotnego."
    ]
  },
  {
    "type": "title",
    "text": "Antropocen: bezprecedensowe przyspieszenie termiczne w biosferze",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Przejscie ze stabilnego holocenu do antropocenu wyznacza ere bezposredniego wplywu czlowieka na systemy planetarne. W przeciwienstwie do minionych zdarzen termicznych, ktorych przyczyny orbitalne lub wulkaniczne dzialaly w skalach dziesiatek tysiecy lat, obecne ocieplenie jest napedzane masowym spalaniem wegla kopalnego zgromadzonego przez miliony lat. Szybkosci nagromadzania gazow cieplarnianych i wzrostu sredniej temperatury sa znacznie wyzsze niz podczas wymierania permskiego czy PETM, co stanowi bezprecedensowe wyzwanie adaptacyjne dla ziemskiej biosfery."
  }
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
