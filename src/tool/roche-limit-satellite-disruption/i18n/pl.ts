import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'granica-roche-kalkulator-zaklocenia-satelity';
const title = 'Kalkulator granicy Roche i symulator zakłócenia satelity';
const description = 'Oblicz granice Roche dla planet i księżyców, porównaj odległości rozpadu dla ciał płynnych i sztywnych oraz zobacz, jak siły pływowe zamieniają satelitę w układ pierścieni.';

const howTo = [
  {
    name: 'Wybierz ciało główne',
    text: 'Wybierz planetę, której grawitacja rozciąga satelitę. Kalkulator ładuje jej promień, gęstość i masę do szacowania granicy Roche oraz okresu orbitalnego.',
  },
  {
    name: 'Wybierz typ satelity',
    text: 'Wybierz lodowy księżyc, skalisty księżyc, zbiorowisko gruzu lub ciało bogate w żelazo. Gęstość i spójność wewnętrzna zmieniają granice rozpadu.',
  },
  {
    name: 'Przesuń suwak orbity',
    text: 'Przeciągnij odległość orbitalną do wewnątrz lub na zewnątrz. Wizualizacja pokazuje, czy satelita znajduje się poza granicą Roche, na jej krawędzi, ulega fragmentacji lub już staje się pierścieniem.',
  },
  {
    name: 'Porównaj granice',
    text: 'Użyj odczytów, aby porównać klasyczną granicę Roche dla ciał płynnych z niższym oszacowaniem dla ciała sztywnego oraz granicę operacyjną skorygowaną o spójność.',
  },
];

const faq = [
  {
    question: 'Czym jest granica Roche?',
    answer: 'Granica Roche to odległość od masywnego ciała głównego, przy której siły pływowe działające na mniejsze ciało na orbicie stają się wystarczająco silne, aby pokonać jego grawitację własną. Wewnątrz tej granicy słaby lub płynny satelita może zostać rozerwany.',
  },
  {
    question: 'Dlaczego istnieją granice Roche dla ciał płynnych i sztywnych?',
    answer: 'Satelita płynny łatwo się odkształca, więc siły pływowe mogą zwiększyć jego wydłużenie i rozerwać go dalej od planety. Satelita sztywny może przeciwstawiać się odkształceniom dzięki wytrzymałości materiału, dlatego prostsze oszacowanie dla ciała sztywnego umieszcza rozpad bliżej ciała głównego.',
  },
  {
    question: 'Czy każdy księżyc wewnątrz granicy Roche natychmiast staje się pierścieniem?',
    answer: 'Nie. Rzeczywisty rozpad zależy od rotacji, składu, pęknięć, porowatości, ogrzewania, uderzeń i wytrzymałości materiału. To narzędzie pokazuje klasyczną granicę grawitacyjną i używa pasa przejściowego do określenia ryzyka, a nie natychmiastowego przełączenia.',
  },
  {
    question: 'Dlaczego pierścienie Saturna znajdują się w pobliżu granicy Roche?',
    answer: 'Pierścienie Saturna zajmują region, w którym materiał lodowy może utrzymywać się jako cząstki zamiast łączyć się w jeden duży księżyc. Granica Roche pomaga wyjaśnić, dlaczego cząstki pierścieni pozostają rozproszone blisko planety.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Ciało główne',
    satelliteType: 'Typ satelity',
    orbitDistance: 'Odległość orbitalna',
    rocheBoundary: 'Granica Roche',
    fluidLimit: 'Granica dla ciała płynnego',
    rigidLimit: 'Granica dla ciała sztywnego',
    activeLimit: 'Granica aktywna',
    safetyRatio: 'Współczynnik bezpieczeństwa',
    orbitalPeriod: 'Okres orbitalny',
    tidalStress: 'Naprężenie pływowe',
    ringFormation: 'Tworzenie się pierścienia',
    stable: 'Stabilna orbita',
    grazing: 'Oddziaływanie pływowe',
    fragmenting: 'Fragmentacja',
    ring: 'Układ pierścieni',
    km: 'km',
    hours: 'h',
    density: 'Gęstość',
    cohesion: 'Spójność',
    planetRadius: 'Promień planety',
    reset: 'Resetuj',
    closePass: 'Bliski przelot',
    moonTrack: 'Tor księżyca',
    debrisTrack: 'Tor szczątków',
    primaryEarth: 'Ziemia',
    primaryMars: 'Mars',
    primaryJupiter: 'Jowisz',
    primarySaturn: 'Saturn',
    primaryNeptune: 'Neptun',
    satelliteIcyMoon: 'Lodowy księżyc',
    satelliteRockyMoon: 'Skalisty księżyc',
    satelliteRubblePile: 'Stos gruzu',
    satelliteIronCore: 'Księżyc bogaty w żelazo',
    cohesionFluid: 'Płynny',
    cohesionFractured: 'Spękany',
    cohesionRigid: 'Sztywny',
  },
  seo: [
    {
      type: 'title',
      text: 'Wzór granicy Roche, znaczenie i jak używać tego kalkulatora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Granica Roche</strong> to minimalna odległość orbitalna, przy której satelita utrzymywany głównie przez własną grawitację może okrążyć większe ciało bez rozerwania przez siły pływowe. Kalkulator łączy promień planety, gęstość planety, gęstość satelity i przybliżoną wytrzymałość wewnętrzną satelity, aby oszacować ryzyko fragmentacji.',
    },
    {
      type: 'paragraph',
      html: 'Kluczowa idea jest prosta: grawitacja nie działa równomiernie na całego satelitę. Strona bliższa jest przyciągana silniej niż strona dalsza, co tworzy siłę rozciągającą. Jeśli to rozciąganie pływowe jest silniejsze niż grawitacja własna i spójność materiału satelity, ciało może pękać, tracić masę i ostatecznie ulec fragmentacji.',
    },
    {
      type: 'title',
      text: 'Równania granicy Roche używane przez kalkulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dla płynnego lub bardzo słabego satelity klasyczne przybliżenie to <strong>d = 2,44 R (rho_M / rho_m)^(1/3)</strong>. Dla sztywnego satelity popularne przybliżenie to <strong>d = 1,26 R (rho_M / rho_m)^(1/3)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Promień ciała głównego:</strong> Większe planety tworzą większą odległość granicy Roche.',
        '<strong>Gęstość ciała głównego:</strong> Gęstsze ciało główne zwiększa siłę pływową.',
        '<strong>Gęstość satelity:</strong> Gęstszy satelita ma silniejszą grawitację własną.',
        '<strong>Wytrzymałość satelity:</strong> Płynny, lodowy lub spękany obiekt rozpada się dalej niż zbity, sztywny obiekt.',
      ],
    },
    {
      type: 'table',
      headers: ['Model', 'Postać wzoru', 'Zastosowanie', 'Co oznacza wynik'],
      rows: [
        ['Granica Roche dla ciała płynnego', '2,44 R (rho_M / rho_m)^(1/3)', 'Lodowe księżyce, ciała stopione, gruz', 'Konserwatywna odległość rozpadu.'],
        ['Granica Roche dla ciała sztywnego', '1,26 R (rho_M / rho_m)^(1/3)', 'Gęste skały, metale', 'Bliższe, niższe oszacowanie.'],
        ['Wskazanie z korektą o spójność', 'Między przypadkiem płynnym a sztywnym', 'Porównanie scenariuszy', 'Praktyczna linia ryzyka.'],
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