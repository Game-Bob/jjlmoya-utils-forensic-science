import type { ToolLocaleContent } from '../../../types';

const slug = 'symulator-wstepnego-badania-krwi-medycyna-sadowa';
const title = 'Symulator Wstępnego Badania Krwi w Medycynie Sądowej';
const description = 'Symuluj wstępne badania krwi za pomocą odczynników Kastle-Meyera i Luminolu. Odróżnij prawdziwą krew od fałszywych alarmów.';

const howTo = [
  {
    "name": "Wybierz próbkę",
    "text": "Wybierz próbkę do badania ze statywu, reprezentującą krew lub materiał dający wynik fałszywie dodatni."
  },
  {
    "name": "Wybierz metodę",
    "text": "Zdecyduj, czy wykonujesz test barwny Kastle-Meyera, czy test luminescencyjny z Luminolem."
  },
  {
    "name": "Nanieś odczynniki",
    "text": "Dodaj krople odczynnika Kastle-Meyera, a następnie nadtlenek wodoru, lub bezpośrednio nanieś Luminol."
  },
  {
    "name": "Zinterpretuj reakcję",
    "text": "Obserwuj zmiany koloru lub niebieską poświatę w ciemności, aby sklasyfikować reakcję."
  }
];

const faq = [
  {
    "key": "faq-1",
    "question": "Dlaczego to test wstępny?",
    "answer": "Testy wstępne (presumpcyjne) to wstępne badania przesiewowe oparte na aktywności katalitycznej. Są bardzo czułe, ale mogą dawać wyniki fałszywie dodatnie."
  },
  {
    "key": "faq-2",
    "question": "Co powoduje wynik fałszywie dodatni w teście Kastle-Meyera?",
    "answer": "Test opiera się na aktywności pseudoperoksydazowej hemu. Utleniacze chemiczne, jony metali w rdzy lub peroksydazy roślinne mogą również katalizować tę reakcję."
  },
  {
    "key": "faq-3",
    "question": "Jak zachodzi reakcja z Luminolem?",
    "answer": "Luminol reaguje z nadtlenkiem wodoru w obecności katalizatora (żelaza w hemoglobinie). Wzbudzony luminol emituje niebieskie światło, wracając do stanu podstawowego."
  },
  {
    "key": "faq-4",
    "question": "Czy wybielacz domowy daje wynik fałszywie dodatni?",
    "answer": "Tak, podchloryn sodu to silny utleniacz. Utlenia bezpośrednio fenoloftalinę lub luminol bez użycia katalizatora, dając szybko rozpraszającą się poświatę."
  },
  {
    "key": "faq-5",
    "question": "Jaka jest różnica między testem wstępnym a potwierdzającym?",
    "answer": "Testy wstępne są szybkie i tanie, służą do lokalizacji śladów. Testy potwierdzające jednoznacznie dowodzą obecności ludzkiej krwi."
  }
];

const bibliography = [
  {
    "name": "Kastle-Meyer test - Wikipedia",
    "url": "https://en.wikipedia.org/wiki/Kastle%E2%80%93Meyer_test"
  },
  {
    "name": "Grodsky, M., Wright, K. & Kirk, P. L. (1951). Simplified preliminary blood testing. An improved technique and comparative study of methods. Journal of Criminal Law and Criminology.",
    "url": "https://scholarlycommons.law.northwestern.edu/jclc/vol42/iss1/10/"
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "title": "Symulator Badania Krwi",
  "desc": "Wykonuj wirtualne doświadczenia laboratoryjne z Luminolem i Kastle-Meyerem w celu wykrywania krwi.",
  "configTitle": "Kontrola Laboratoryjna",
  "sampleLabel": "Wybierz Próbkę Badawczą",
  "reagentLabel": "Wybierz Odczynnik",
  "lightsLabel": "Oświetlenie",
  "btnLightsOff": "Wyłącz Światło",
  "btnLightsOn": "Włącz Światło",
  "btnReset": "Wyczyść Płytkę",
  "resultsTitle": "Wyniki Badania Wstępnego",
  "sampleBlood": "Próbka Krwi (Kontrolna)",
  "sampleRust": "Rdza (Tlenek Żelaza)",
  "sampleBleach": "Wybielacz (Podchloryn Sodu)",
  "samplePotato": "Ziemniak (Peroksydaza Roślinna)",
  "sampleSaliva": "Próbka Śliny",
  "reagentKM": "Odczynnik Kastle-Meyera",
  "reagentH2O2": "Nadtlenek Wodoru (H2O2)",
  "reagentLuminol": "Roztwór Luminolu",
  "resultTruePositive": "Prawdziwie Dodatni (Wykryto Krew)",
  "resultFalsePositive": "Fałszywie Dodatni (Katalizator Inny niż Krew)",
  "resultNegative": "Reakcja Negatywna",
  "statusLabel": "Status Reakcji",
  "reactionLabel": "Wyjaśnienie Reakcji",
  "dropReagentBtn": "Nanieś Kroplę",
  "activeCompounds": "Aktywne Związki",
  "reactionSpeed": "Szybkość Reakcji",
  "reactionDuration": "Czas Trwania Reakcji",
  "specimenBase": "Baza Próbki",
  "kmPending": "Niesiono odczynnik Kastle-Meyera. Dodaj Nadtlenek Wodoru (H2O2), aby skatalizować zmianę koloru.",
  "h2o2Only": "Niesiono nadtlenek wodoru. Brak widocznej reakcji bez wskaźnika Kastle-Meyera.",
  "noReaction": "Nie zaobserwowano reakcji. Próbka pozostaje bezbarwna.",
  "luminolBlood": "Natychmiastowa intensywna niebieska poświata w ciemności. Grupy hemowe w hemoglobinie skatalizowały utlenienie luminolu. Prawdziwie Dodatni.",
  "luminolBleach": "Natychmiastowa, bardzo intensywna niebieska poświata, która zniknęła w czasie poniżej 2 sekund. Wybielacz utlenia bezpośrednio. Fałszywie Dodatni.",
  "luminolRust": "Słaba, matowa niebieska poświata. Jony metalu w rdzy słabo katalizują reakcję. Fałszywie Dodatni.",
  "luminolPotato": "Brak widocznej luminescencji. Peroksydazy roślinne nie katalizują utleniania luminolu w tych warunkach. Negatywny.",
  "luminolNegative": "Brak luminescencji w ciemności. Związek nie katalizuje utleniania luminolu. Negatywny.",
  "kmBlood": "Natychmiastowe jasnoróżowe zabarwienie po dodaniu nadtlenku wodoru. Hem w krwi skatalizował utlenienie fenoloftaliny do fenoloftaleiny. Prawdziwie Dodatni.",
  "kmBleach": "Natychmiastowa silna różowa zmiana koloru. Podchloryn sodu utlenia bezpośrednio fenoloftalinę bez nadtlenku wodoru. Fałszywie Dodatni.",
  "kmRust": "Powolne, słabe brązowo-różowe zabarwienie po kilku sekundach. Rdza katalizuje reakcję znacznie wolniej. Fałszywie Dodatni.",
  "kmPotato": "Powolne, blade różowe zabarwienie po opóźnieniu. Peroksydazy roślinne słabo katalizują reakcję. Fałszywie Dodatni.",
  "kmNegative": "Nie zaobserwowano zmiany koloru. Roztwór pozostaje bezbarwny. Negatywny."
},
  seo: [
  {
    "type": "title",
    "text": "Kompletny Podręcznik Wstępnych Badań Krwi w Kryminalistyce",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Wstępne badania krwi są niezwykle czułymi testami przesiewowymi stosowanymi na miejscach zdarzeń oraz w laboratoriach kryminalistycznych do szybkiego wykrywania obecności śladów biologicznych. Przed przystąpieniem do drogich i czasochłonnych procedur sekwencjonowania DNA, śledczy polegają na tych szybkich testach w celu zlokalizowania krwi na odzieży, narzędziach zbrodni i innych powierzchniach. Ponieważ testy te opierają się na aktywności pseudoperoksydazowej hemu, czyli żelazowej grupy hemowej hemoglobiny, ich charakter określa się jako wstępny. Wynik dodatni silnie sugeruje obecność krwi, jednak wymaga przeprowadzenia laboratoryjnych testów potwierdzających w celu wykluczenia fałszywych alarmów."
  },
  {
    "type": "title",
    "text": "Zasada Działania Testu Kastle Meyera",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Test barwny Kastle-Meyera (KM) opiera się na reakcji utleniania bezbarwnej fenoloftaliny do różowej fenoloftaleiny. Cała procedura musi przebiegać w określonej kolejności: najpierw na próbkę nanosi się odczynnik fenoloftalinowy. W obecności krwi, grupa hemowa hemoglobiny działa jako organiczny katalizator. Po dodaniu nadtlenku wodoru hem przyspiesza rozkład nadtlenku i natychmiast utlenia fenoloftalinę do fenoloftaleiny, dając intensywnie różowy kolor. Opóźniona zmiana zabarwienia po upływie piętnastu sekund uznawana jest za wynik ujemny spowodowany powolnym utlenieniem tlenem atmosferycznym."
  },
  {
    "type": "title",
    "text": "Luminol i Chemiluminescencja Sądowa w Praktyce",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Luminol to związek chemiczny wykazujący charakterystyczną niebieską świecenie w ciemności pod wpływem utleniacza i katalizatora metalicznego. Technicy kryminalistyczni rozpylają roztwór luminolu na dużych obszarach. Gdy wejdzie on w kontakt ze śladami krwi, żelazo z grupy hemowej hemoglobiny działa jako silny katalizator reakcji utleniania. Wynikiem tej reakcji jest powstanie wzbudzonego jonu aminofalanowego, który emituje światło podczas powrotu do stanu podstawowego. Ponieważ emitowana luminescencja ma niską intensywność, do jej zaobserwowania i sfotografowania konieczne jest pełne zaciemnienie."
  },
  {
    "type": "table",
    "headers": [
      "Badana Substancja",
      "Reakcja Kastle-Meyera",
      "Reakcja z Luminolem",
      "Klasyfikacja Diagnostyczna"
    ],
    "rows": [
      [
        "Ludzka Krew Kontrola",
        "Natychmiastowe jasnoróżowe zabarwienie po H2O2.",
        "Intensywna i trwała niebieska poświata do 8s.",
        "Prawdziwie Dodatni. Hem zapewnia wysoką wydajność katalityczną."
      ],
      [
        "Wybielacz Domowy",
        "Różowe zabarwienie przed dodaniem H2O2.",
        "Poświata bardzo silna, lecz szybko znika.",
        "Fałszywie Dodatni. Silny utleniacz reaguje bez katalizatora."
      ],
      [
        "Tlenek Żelaza (Rdza)",
        "Powolne, słabe brązowo-różowe zabarwienie.",
        "Słaba, matowa niebieska poświata w ciemności.",
        "Fałszywie Dodatni. Wolne jony żelaza katalizują z niską wydajnością."
      ],
      [
        "Ziemniak (Peroksydaza)",
        "Powolne i słabe różowe zabarwienie po czasie.",
        "Brak jakiejkolwiek widocznej luminescencji.",
        "Fałszywie Dodatni (KM) / Negatywny (LUM)."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Różnicowanie Krwi od Fałszywych Wyników Dodatnich",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Prawidłowe odróżnianie prawdziwej krwi od fałszywych wyników dodatnich ma kluczowe znaczenie dla rzetelności dowodów sądowych. Środki czyszczące zawierające podchloryn sodu (wybielacz) utleniają wskaźnik bezpośrednio. Eksperci sądowi identyfikują je poprzez badanie dynamiki czasowej reakcji: wybielacz daje reakcję barwną w teście Kastle-Meyera bez użycia nadtlenku wodoru, a jego luminescencja z luminolem wygasa w niecałe dwie sekundy. Z kolei peroksydazy roślinne ulegają dezaktywacji pod wpływem wysokiej temperatury, podczas gdy hemoglobina krwi pozostaje stabilna termicznie."
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
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
