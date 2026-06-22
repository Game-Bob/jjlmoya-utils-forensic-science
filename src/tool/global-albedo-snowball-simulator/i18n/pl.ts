import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'globalny-albedo-kula-sniezna-symulator';
const title = 'Globalny Symulator Albedo i Kuli Śnieżnej Ziemi';
const description = 'Poznaj bilans promieniowania cieplnego Ziemi, zmiany stałej słonecznej, stężenie gazów cieplarnianych i sprzężenie zwrotne lód-albedo, aby sprawdzić, czy pokrywy lodowe cofają się, stabilizują czy wywołują klimat kuli śnieżnej.';

const howTo = [
  {
    name: 'Ustaw padające światło słoneczne',
    text: 'Przesuń suwak stałej słonecznej, aby przetestować scenariusze słabego młodego Słońca, obecnego światła słonecznego Ziemi lub jaśniejszego przyszłego wymuszenia.',
  },
  {
    name: 'Dostosuj stężenie gazów cieplarnianych',
    text: 'Zmień stężenie gazów cieplarnianych, aby zobaczyć, jak wymuszenie radiacyjne konkuruje z wyższym albedo planety.',
  },
  {
    name: 'Zasiej planetę lodem',
    text: 'Zacznij od małej czapy polarnej lub dużego pokrytego lodem świata. Model iteruje pętlę sprzężenia zwrotnego i pokazuje, czy lód postępuje czy się cofa.',
  },
  {
    name: 'Odczytaj stan klimatu',
    text: 'Użyj temperatury, pochłoniętego promieniowania, końcowego pokrycia lodowego i krzywej na osi czasu, aby porównać wyniki umiarkowane, kuli śnieżnej i szklarniowe.',
  },
];

const faq = [
  {
    question: 'Czym jest sprzężenie zwrotne lód-albedo?',
    answer: 'Lód i śnieg odbijają więcej światła słonecznego niż ocean czy ląd. Gdy lód się rozszerza, albedo planety wzrasta, pochłonięta energia słoneczna spada, a ochłodzenie może pozwolić na utworzenie się jeszcze większej ilości lodu. Gdy lód się cofa, ciemniejsza powierzchnia pochłania więcej energii, a ocieplenie przyspiesza.',
  },
  {
    question: 'Co oznacza Ziemia Kula Śnieżna?',
    answer: 'Ziemia Kula Śnieżna to hipotetyczny stan klimatyczny, w którym lód osiąga niskie szerokości geograficzne lub prawie globalne pokrycie. Dowody geologiczne sugerują, że Ziemia mogła zbliżyć się do takich stanów w erze neoproterozoicznej.',
  },
  {
    question: 'Czy to jest pełny model klimatyczny?',
    answer: 'Nie. Jest to kompaktowy model bilansu energetycznego do nauki. Pomija cyrkulację atmosferyczną, chmury, transport ciepła w oceanach, pory roku, geografię i sprzężenia zwrotne cyklu węglowego, ale oddaje podstawową logikę radiacyjną sprzężenia albedo.',
  },
  {
    question: 'Dlaczego gazy cieplarniane mogą przełamać stan kuli śnieżnej?',
    answer: 'Gazy cieplarniane zmniejszają wychodzące chłodzenie długofalowe poprzez dodawanie wymuszenia radiacyjnego. W scenariuszach Ziemi Kuli Śnieżnej wulkaniczny dwutlenek węgla może się gromadzić, gdy wietrzenie krzemianów zwalnia, ostatecznie ogrzewając planetę na tyle, by stopić lód na niskich szerokościach geograficznych.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Sterowanie klimatem',
    solarConstant: 'Stała słoneczna',
    greenhouse: 'Gazy cieplarniane',
    initialIce: 'Początkowe pokrycie lodem',
    temperature: 'Temperatura równowagi',
    absorbed: 'Pochłonięte światło słoneczne',
    finalIce: 'Końcowe pokrycie lodem',
    albedo: 'Albedo planety',
    forcing: 'Wymuszenie cieplarniane',
    state: 'Stan klimatu',
    timeline: 'Ewolucja lodu',
    years: 'lat modelu',
    snowball: 'Blokada kuli śnieżnej',
    temperate: 'Równowaga umiarkowana',
    hothouse: 'Cofanie szklarniowe',
    retreating: 'Lód się cofa',
    advancing: 'Lód postępuje',
    stable: 'Blisko równowagi',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Diagnostyka promieniowania',
  },
  seo: [
    {
      type: 'title',
      text: 'Globalny symulator albedo do sprzężenia lód-albedo i Ziemi Kuli Śnieżnej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten symulator bada jedną z najważniejszych pętli sprzężenia zwrotnego w klimacie planetarnym: związek między pokryciem lodowym, odbijalnością i pochłoniętym światłem słonecznym. Planeta z jasnym lodem odbija więcej padającego promieniowania słonecznego z powrotem w kosmos. To ochłodzenie może zachować lub rozszerzyć lód, podnosząc albedo jeszcze bardziej i popychając system w kierunku stanu Ziemi Kuli Śnieżnej. Planeta z mniejszą ilością lodu pochłania więcej światła słonecznego, co może przyspieszyć deglacjację.',
    },
    {
      type: 'paragraph',
      html: 'Użyj suwaków, aby zmienić stałą słoneczną, stężenie gazów cieplarnianych i początkowe pokrycie lodem. Model następnie iteruje prosty globalny bilans energetyczny i pokazuje, czy klimat zmierza w kierunku rozległego zlodowacenia, umiarkowanej równowagi czy gorącego stanu z małą ilością lodu. Zaprojektowany do szybkiej intuicji: każdy element sterujący odpowiada bezpośrednio fizycznemu terminowi w budżecie radiacyjnym.',
    },
    {
      type: 'title',
      text: 'Jak szacowany jest bilans energetyczny',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pochłonięte promieniowanie krótkofalowe jest szacowane jako S(1 - a) / 4, gdzie S to stała słoneczna, a a to albedo planety. Dzielenie przez cztery przekształca światło słoneczne przechwycone przez tarczę Ziemi w średnią dla całej powierzchni kulistej. Wyższe albedo obniża pochłoniętą energię; wyższe stężenie gazów cieplarnianych dodaje dodatnie wymuszenie radiacyjne, które podnosi szacunkową temperaturę powierzchni.',
    },
    {
      type: 'table',
      headers: ['Sterowanie', 'Znaczenie fizyczne', 'Wpływ na klimat'],
      rows: [
        ['Stała słoneczna', 'Padająca energia gwiazd na orbicie Ziemi', 'Wyższe wartości ogrzewają planetę i zmniejszają lód.'],
        ['Gazy cieplarniane', 'Długofalowe wymuszenie radiacyjne względem atmosfery referencyjnej', 'Wyższe wartości utrudniają blokadę kuli śnieżnej.'],
        ['Początkowe pokrycie lodem', 'Początkowa odbijalność planety', 'Wysokie wartości mogą wywołać niekontrolowane ochłodzenie przez sprzężenie albedo.'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego sprzężenie albedo może stać się nieliniowe',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pętla lód-albedo nie jest łagodną jednokierunkową regulacją. Gdy lód pokryje wystarczającą część planety, jaśniejsza powierzchnia może usunąć tak dużo pochłoniętego światła słonecznego, że letnie topnienie staje się słabe. W przeciwnym kierunku, cofający się lód odsłania ciemniejszy ocean i ląd, zwiększając absorpcję i oddalając planetę od zlodowacenia. Dlatego podobne wymuszenia mogą dawać różne wyniki w zależności od początkowego pokrycia lodem.',
    },
    {
      type: 'paragraph',
      html: 'Prawdziwa Ziemia dodaje wiele komplikacji: chmury, pył na lodzie, transport ciepła w oceanach, położenie kontynentów, sezonowe światło słoneczne, dynamikę lodu morskiego i cykl węglowy. Prosty model wciąż ma wartość, ponieważ izoluje budżet radiacyjny pierwszego rzędu. Pozwala zobaczyć, dlaczego hipotezy Ziemi Kuli Śnieżnej zależą zarówno od słabego światła słonecznego lub wyzwalaczy wysokiego albedo, jak i od późniejszej akumulacji gazów cieplarnianych do ucieczki.',
    },
    {
      type: 'title',
      text: 'Interpretacja symulatora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Blokada kuli śnieżnej:</strong> końcowe pokrycie lodem jest bardzo wysokie, a temperatura równowagi pozostaje znacznie poniżej zera.',
        '<strong>Równowaga umiarkowana:</strong> model stabilizuje się z częściowym pokryciem lodem i umiarkowanym pochłoniętym promieniowaniem.',
        '<strong>Cofanie szklarniowe:</strong> lód zapada się do bardzo małej frakcji, podczas gdy wymuszenie cieplarniane i pochłonięte światło słoneczne pozostają wysokie.',
      ],
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
