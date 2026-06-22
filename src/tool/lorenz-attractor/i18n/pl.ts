const slug = 'atraktor-lorenza';
const title = 'Symulator Chaosu Atraktora Lorenza: Efekt Motyla w 3D';
const description = 'Badaj teorie chaosu z interaktywna symulacja 3D atraktora Lorenza. Zobacz efekt motyla.';

const howTo = [
  {
    "name": "Obracaj widok",
    "text": "Kliknij i przeciagnij na obszarze 3D, aby obrocic atraktor."
  },
  {
    "name": "Dostosuj suwaki",
    "text": "Zmieniaj parametry Sigma, Rho i Beta, aby wplynac na zachowanie ukladu."
  },
  {
    "name": "Obserwuj dywergencje",
    "text": "Zobacz, jak odleglosc miedzy dwiema trajektoriami rosnie wykladniczo."
  },
  {
    "name": "Pauza i reset",
    "text": "Uzyj przyciskow kontrolnych, aby zatrzymac lub zresetowac symulacje."
  }
];

const faq = [
  {
    "question": "Co to jest Atraktor Lorenza?",
    "answer": "Atraktor Lorenza to zbior chaotycznych rozwiazan ukladu rownan Lorenza."
  },
  {
    "question": "Co to jest Efekt Motyla?",
    "answer": "Wrażliwa zaleznosc ukladu od warunkow poczatkowych."
  },
  {
    "question": "Co oznaczaja parametry?",
    "answer": "Sigma to liczba Prandtla, Rho to liczba Rayleigha, a Beta to stosunek geometryczny."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Skopiowano",
  "noHistory": "Brak historii",
  "load": "Wczytaj",
  "delete": "Usun",
  "title": "Atraktor Lorenza",
  "subTitle": "Chaos Deterministyczny",
  "parameterControls": "Parametry Ukladu",
  "simulationSpeed": "Predkosc (dt)",
  "initialPerturbation": "Zaburzenie Poczatkowe (dx)",
  "trajectories": "Trajektorie",
  "distance": "Odleglosc Dywergencji",
  "exponentialGrowth": "Dywergencja Wykladnicza",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Wspolrzedne",
  "divergenceExplanation": "Wykres dywergencji pokazuje odleglosc euklidesowa miedzy dwiema trajektoriami w czasie."
},
  seo: [
    { type: 'title', text: "Chaos Deterministyczny: Zrozumiec Rownania Lorenza", level: 2 },
    { type: 'paragraph', html: "Uklad Lorenza to historyczne sformulowanie w dynamice nieliniowej i teorii chaosu. Opracowany w 1963 roku przez meteorologa i matematyka <strong>Edwarda Lorenza</strong>, model powstat z uproszczonej reprezentacji konwekcji atmosferycznej. Lorenz zredukkowal skomplikowane rownania dynamiki plynow do trzech sprzezonych zwyklych rownan rozniczkowych. Jego odkrycie, ze te proste deterministyczne rownania moga generowac zlozzone, nieperiodyczne i chaotyczne zachowanie, zmienilo nasze rozumienie ukladow fizycznych." },
    { type: 'paragraph', html: "Uklad opisany jest przez trzy sprzeezone rownania rozniczkowe sledzace wspolrzedna w trojwymiarowej przestrzeni fazowej w czasie:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> Opisuje tempo ruchu konwekcyjnego. Parametr &sigma; (liczba Prandtla) przedstawia stosunek lepkosci plynu do przewodnosci cieplnej.",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> Reprezentuje roznice temperatury miedzy wznoszacymi i opadajacymi pradami konwekcyjnymi. &rho; (liczba Rayleigha) reprezentuje intensywnosc ogrzewania konwekcyjnego.",
      "<strong>dz/dt = x * y - &beta; * z:</strong> Sledzi znieksztalcenie pionowego profilu temperatury. &beta; jest geometrycznym wspolczynnikiem ksztaltu komorki konwekcyjnej.",
      ],
    },
    { type: 'title', text: "Efekt Motyla: Czula Zaleznosc od Warunkow Poczatkowych", level: 3 },
    { type: 'paragraph', html: "Cecha definiujaca chaotyczne uklady jest ich <strong>czula zaleznosc od warunkow poczatkowych</strong>, znana popularnie jako <strong>Efekt Motyla</strong>. Symulator demonstruje to, uruchamiajac dwie trajektorie (T1 w kolorze cyan i T2 w kolorze rozowym) z minimalna separacja poczatkowa. Poczatkowo przebiegaja prawie identycznie. Po krotkim czasie nieliniowe czlony wzmacniaja roznice i trajektorie rozchodza sie calkowicie." },
    {
      type: 'table',
      headers: ["Parametr","Wartosc Standardowa","Kontekst Fizyczny","Zachowanie przy Zmianie"],
      rows: [
        ["&sigma; (Sigma)","10.0","Liczba Prandtla","Okresla tarcie wewnetrzne plynu. Wyzsze wartosci przyspieszaja reakcje zmian predkosci na gradienty temperatury."],
        ["&rho; (Rho)","28.0","Liczba Rayleigha","Glowny napedzajacy chaos. Ponizej &rho; = 1 poczatek ukladu jest jedynym stabilnym punktem. Przy &rho; = 28 system jest w pelni chaotyczny."],
        ["&beta; (Beta)","8/3 (2.667)","Geometryczny Wspolczynnik Ksztaltu","Kontroluje stosunek szerokosci do wysokosci komorek konwekcyjnych. Zmienia skale i predkosc rotacji orbit."],
      ],
    },
    { type: 'title', text: "Przestrzen Fazowa, Dziwne Atraktory i Fraktale", level: 3 },
    { type: 'paragraph', html: "W fizyce klasycznej trajektorie stabilizuja sie w punktach stalych lub powtarzaja jako cykle graniczne. Uklad Lorenza nie robi ani jednego, ani drugiego: sciezka zapetla sie nieskonczona ilosc razy w trzech wymiarach bez samoprzecinania, tworzac <strong>dziwny atraktor</strong> z geometria fraktalowa (wymiar Hausdorffa okolo 2,06)." },
    { type: 'title', text: "Zastosowania Teorii Chaosu w Nauce", level: 3 },
    { type: 'paragraph', html: "Wnioski z atraktora Lorenza wykraczaja daleko poza prognozowanie pogody i wywarty wplyw na wiele wspolczesnych dziedzin:" },
    {
      type: 'list',
      items: [
      "<strong>Meteorologia:</strong> Ustanowila fundamentalne granice przewidywalnosci pogody, prowadzac do metod prognozowania zespolowego.",
      "<strong>Kryptografia:</strong> Deterministyczna, ale nieprzewidywalna natura chaotycznych orbit sluzy do generowania bezpiecznych kluczy pseudolosowych.",
      "<strong>Kardiologia:</strong> Uzywana do modelowania rytmow serca, gdzie zdrowe serca wykazuja chaotyczne wlasciwosci.",
      "<strong>Inzynieria:</strong> Pomaga projektowac stabilne konstrukcje poprzez analize i unikanie chaotycznego rezonansu w mostach wiszacych.",
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
