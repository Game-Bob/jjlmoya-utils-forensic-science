import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-inflacji-kosmicznej';
const description = 'Oblicz wykladnicza ekspansje wczesnego wszechswiata podczas epoki inflacji kosmicznej.';
const title = 'Kalkulator Inflacji Kosmicznej: Ekspansja Wczesnego Wszechswiata';

const howTo = [
  {
    name: 'Wybierz wartosci',
    text: 'Przeciagnij suwaki aby zobaczyc wyniki.',
  },
  {
    name: 'Porownaj czynniki skali',
    text: 'Zobacz o ile rzedow wielkosci rozszerzyla sie przestrzeg.',
  },
  {
    name: 'Analizuj dynamiczne znieksztalcenie',
    text: 'Plotno pokazuje ekspansje przestrzeni.',
  },
];

const faq = [
  {
    "question": "Co to jest inflacja kosmiczna i dlaczego do niej doszlo?",
    "answer": "Inflacja kosmiczna to teoria postulujaca niezwykle szybka, wykladnicza ekspansje przestrzeni w pierwszych ulamkach sekund istnienia wszechswiata, konkretnie okolo 10^-36 sekundy po Wielkim Wybuchu. Doszlo do niej, poniewaz teoretyczne pole skalarne, zwane inflatonem, znajdowalo sie w stanie wysokiej gestosci energii falszywej prozni, co wygenerowalo ujemne cisnienie i odpychajaca sile grawitacji rozciagajaca czasoprzestrzen."
  },
  {
    "question": "Co oznacza liczba e-folds (e-zlozen)?",
    "answer": "Liczba e-folds mierzy czas trwania fazy ekspansji wykladniczej. Jedno e-zlozenie (e-fold) to czas, w ktorym rozmiar wszechswiata zwieksza sie e-krotnie (okolo 2.718 raza). Jesli wszechswiat przechodzi N e-folds, jego czynnik skali rosnie o czynnik e^N. Standardowe modele kosmologiczne wymagaja co najmniej 50 do 60 e-folds, aby rozwiazac problemy plaskosci i horyzontu."
  },
  {
    "question": "W jaki sposob inflacja rozwiazuje problem horyzontu?",
    "answer": "Problem horyzontu dotyczy tego, dlaczego odlegle obszary wszechswiata maja niemal identyczne temperatury promieniowania tła (CMB), mimo ze prędkosc swiatla nie pozwolilaby im na wymiane informacji w celu osiagniecia rownowagi. Inflacja rozwiazuje to wykazujac, ze przed wykladniczym rozszerzaniem caly obserwowalny wszechswiat byl malutkim, powiazanym przyczynowo i termicznie jednorodnym obszarem, ktory zostal blyskawicznie rozciagniety poza horyzont wizualny."
  },
  {
    "question": "Co to jest problem plaskosci i jak go rozwiazano?",
    "answer": "Gestosc energii dzisiejszego wszechswiata jest ekstremalnie bliska gestosci krytycznej, co oznacza, ze przestrzen jest plaska z minimalnym marginesem bledu. Bez inflacji kazde poczatkowe odchylenie od plaskosci rosloby wykladniczo, wymagajac niemozliwego dostrojenia w momencie Wielkiego Wybuchu. Inflacja rozciaga zakrzywienie przestrzeni tak gwaltownie, ze kazde poczatkowe zakrzywienie ulega rozmyciu, podobnie jak powierzchnia gigantycznej kuli wydaje sie plaska lokalnie."
  },
  {
    "question": "Co to jest proces ponownego podgrzania (reheating)?",
    "answer": "Ponowne podgrzanie to przejscie termiczne, ktore konczy faze inflacji. Podczas inflacji wszechswiat schladza sie do temperatur bliskich zeru absolutnemu z powodu wykladniczego zwiekszenia objetosci. Gdy pole inflatonowe spada do minimum swojego potencjalu, jego pozostala energia zostaje przekazana przestrzeni w postaci czastek Modelu Standardowego poprzez oddzialywania kwantowe, wypelniajac kosmos goraca, gesta plazma, ktora inicjuje tradycyjna faze Wielkiego Wybuchu."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulator Inflacji Kosmicznej',
    efoldsLabel: 'Liczba e-folds (N)',
    energyLabel: 'Poczatkowa Skala Energii (GeV)',
    scaleFactorResult: 'Wzrost Czynnika Skali',
    reheatingTempResult: 'Szacowana Temperatura Ponownego Podgrzania',
    chartTitle: 'Znieksztalcenie Czasoprzestrzeni',
    presetGuth: 'Standardowa (Guth)',
    presetChaotic: 'Chaotyczna',
    presetExtreme: 'Skrajne Granice',
    efoldsTooltip: 'Typowe modele przewiduja miedzy 50 a 60 e-folds.',
    energyTooltip: 'Skala GUT to okolo 10^16 GeV.',
    scaleFactorTooltip: 'Reprezentuje calkowity czynnik ekspansji.',
    reheatingTooltip: 'Temperatura pod koniec inflacji.',
    analogyInsuff: 'Umiarkowana inflacja. Ta ekspansja jest niewystarczajaca.',
    analogyProton: 'Wszechswiat rozszerzyl sie od rozmiarow protonu do rozmiarow galaktyki w ulamku sekundy.',
    analogyObservable: 'Wszechswiat rozszerzyl sie od skali subatomowej do rozmiarow wiekszych niz obserwowalny wszechswiat w 10^-32 sekundy.',
  },
  seo: [
  {
    "type": "title",
    "text": "KOSMOLOGIA: Teoria Inflacji Kosmicznej i Ekspansja Czasoprzestrzeni",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Inflacja kosmiczna stanowi fundamentalny filar laczacy fizyke czastek elementarnych z astrofizyka obserwacyjna. Zaproponowana na poczatku lat 80. przez fizykow Alana Gutha i Andrieja Lindego, teoria ta zaklada, ze wczesny wszechswiat przeszedl faze wykladniczej ekspansji napedzanej gestoscia energii pola skalarnego znanego jako inflaton. Ekspansja ta zwiekszyla objetosc wszechswiata o czynnik co najmniej 10^26 w ułamku sekundy, rozwiazujac glebokie paradoksy klasycznego modelu Wielkiego Wybuchu i tworzac teoretyczne ramy dla powstawania struktur kosmicznych."
  },
  {
    "type": "title",
    "text": "Porownanie Modelu Inflacji i Parametrow",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Rozne potencjaly pola inflatonowego generuja odmienne tempo ekspansji i temperatury ponownego podgrzania. Ponizej przedstawiono charakterystyke glownych modeli symulowanych w tym kalkulatorze:"
  },
  {
    "type": "table",
    "headers": [
      "Model Inflacji",
      "Zakres e-folds (N)",
      "Skala Energii (GeV)",
      "Wynik Fizyczny i Dynamiczny"
    ],
    "rows": [
      [
        "<strong>Standardowy Guth</strong>",
        "50 - 60",
        "10^16",
        "Rozwiazuje problem plaskosci i horyzontu; inflacja konczy sie nukleacja pecherzykow w powolnym przejsciu fazowym."
      ],
      [
        "<strong>Inflacja Chaotyczna (Linde)</strong>",
        "60 lub wiecej",
        "10^16",
        "Inflaton stacza sie lagodnie po prostym potencjale parabolicznym; pozwala uniknac problemow naglego przejscia fazowego."
      ],
      [
        "<strong>Skrajne Granice</strong>",
        "90 lub wiecej",
        "10^19 (Planck)",
        "Energie bliskie granicy grawitacji kwantowej; ogromne rozciagniecie pierwotnej czasoprzestrzeni."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Rozwiazanie Klasycznych Problemow Wielkiego Wybuchu",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Przed opracowaniem teorii inflacji klasyczna kosmologia Wielkiego Wybuchu borykala sie z powaznymi niespojnosciami teoretycznymi. Problem horyzontu, wynikajacy z jednorodnosci kosmicznego tła mikrofalowego, oraz problem plaskosci, zwiazany z gestoscia krytyczna przestrzeni, sugerowaly koniecznosc istnienia skrajnie malo prawdopodobnych warunkow poczatkowych. Inflacja w naturalny sposob rozwiazuje obie trudnosci poprzez rozciagniecie termicznie jednorodnego mikroobszaru i dynamiczne splaszczenie lokalnej geometrii przestrzeni. Dodatkowo rozprasza ona monopol magnetyczny, ktory powinnien obficie powstac we wczesnym wszechswiecie."
  },
  {
    "type": "title",
    "text": "Obserwacyjne Dowody Astronomiczne Modelu Inflacyjnego",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Teoria inflacji kosmicznej nie jest jedynie elegancka konstrukcja matematyczna; posiada solidne dowody posrednie potwierdzone przez satelity kosmiczne takie jak COBE, WMAP i Planck:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Jednorodnosc CMB:</strong> Kosmiczne promieniowanie tła wykazuje jednorodna temperature z wariacjami wynoszacymi zaledwie 1 czesc na 100,000 po przeciwnych stronach widzialnego nieba.",
      "<strong>Plaska Geometria:</strong> Pomiary zakrzywienia wszechswiata potwierdzaja, ze jest on plaski z bledem mniejszym niz 1%, co jest spednoscia z masowym rozciagnieciem inflacyjnym.",
      "<strong>Brak Monopoli:</strong> Logicznie wyjasnia zupelny brak stabilnych monopol magnetycznych o duzej masie w naszym obserwowalnym wszechswiecie.",
      "<strong>Spektrum Fluktuacji:</strong> Obserwowane anizotropie kosmicznego tła wykazuja indeks widmowy nieznacznie ponizej 1, dokladnie tak, jak przewiduja modele wolno staczajacego sie inflatonu."
    ]
  },
  {
    "type": "title",
    "text": "Fluktuacje Kwantowe i Nasiona Struktur Galaktycznych",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Najbardziej niezwyklym aspektem inflacji kosmicznej jest jej zdolnosc do dzialania jako kosmiczny mikroskop. Mikroskopijne fluktuacje kwantowe pola inflatonowego zostaly rozciagniete do skal astronomicznych podczas okresu ekspansji wykladniczej. Pod koniec inflacji fluktuacje te zamrozily sie w postaci zmian gestosci materii (pierwotne perturbacje). Te roznice gestosci posluzyly jako nasiona grawitacyjne, ktore przez miliardy lat przyciagaly materie, dajac poczatek pierwszym gwiazdom, galaktykom, gromadom galaktyk i kosmicznej sieci, ktora obserwujemy dzisiaj."
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
