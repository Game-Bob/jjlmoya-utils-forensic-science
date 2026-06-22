import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'schwarzes-loch-ereignishorizont-simulator';
const title = 'Schwarzes Loch Ereignishorizont Simulator';
const description = 'Erkunden Sie den Ereignishorizont eines schwarzen Lochs mit interaktiven Berechnungen von Masse, Orbitdistanz, Zeitdilatation, Photonensphäre, Fluchtgeschwindigkeit und Schwarzschild-Radius.';

const howTo = [
  {
    name: 'Wählen Sie die Masse des schwarzen Lochs',
    text: 'Bewegen Sie den Masse-Regler von einem stellaren schwarzen Loch zu einem supermassiven schwarzen Loch und beobachten Sie, wie der Schwarzschild-Radius in Echtzeit skaliert.',
  },
  {
    name: 'Bewegen Sie die Sonde nahe an den Horizont',
    text: 'Stellen Sie die Entfernung in Schwarzschild-Radien ein, um einen sicheren äußeren Orbit, die Region der Photonensphäre und den Rand des Ereignishorizonts zu vergleichen.',
  },
  {
    name: 'Untersuchen Sie relativistische Effekte',
    text: 'Lesen Sie die Fluchtgeschwindigkeit, die gravitative Zeitdilatation, die Rotverschiebung und die Umlaufzeit ab, um zu verstehen, warum die gewöhnliche Intuition in der Nähe des Horizonts versagt.',
  },
  {
    name: 'Vergleichen Sie die charakteristischen Radien',
    text: 'Nutzen Sie die Leitringe für Ereignishorizont, Photonensphäre und ISCO, um die verschiedenen Grenzen um ein nicht rotierendes schwarzes Loch zu verstehen.',
  },
];

const faq = [
  {
    question: 'Was ist der Ereignishorizont eines schwarzen Lochs?',
    answer: 'Der Ereignishorizont ist die Grenze, an der die Fluchtgeschwindigkeit die Lichtgeschwindigkeit erreicht. Sobald ein Objekt ihn überquert, kann kein Signal, das sich mit oder unter Lichtgeschwindigkeit bewegt, zum äußeren Universum zurückkehren.',
  },
  {
    question: 'Was bedeutet der Schwarzschild-Radius?',
    answer: 'Der Schwarzschild-Radius ist der Ereignishorizont-Radius für ein nicht rotierendes, ungeladenes schwarzes Loch. Er wächst linear mit der Masse, sodass eine Verdopplung der Masse den Horizontradius verdoppelt.',
  },
  {
    question: 'Was ist die Photonensphäre?',
    answer: 'Die Photonensphäre ist eine Region bei 1,5 Schwarzschild-Radien, in der Licht auf einem instabilen Pfad um das schwarze Loch kreisen kann. Winzige Störungen lassen Photonen entweder nach außen entkommen oder nach innen fallen.',
  },
  {
    question: 'Was ist die ISCO?',
    answer: 'ISCO steht für "Innermost Stable Circular Orbit" (innerster stabiler kreisförmiger Orbit). Bei einem nicht rotierenden schwarzen Loch liegt sie bei 3 Schwarzschild-Radien bzw. 6 Gravitationsradien und markiert den letzten stabilen kreisförmigen Orbit für massereiche Teilchen.',
  },
  {
    question: 'Warum nimmt die Zeitdilatation in der Nähe des Horizonts zu?',
    answer: 'In der Schwarzschild-Geometrie ticken Uhren, die tiefer im Gravitationsfeld liegen, langsamer relativ zu entfernten Beobachtern. Der angezeigte Faktor nähert sich Null, wenn sich die Sonde dem Ereignishorizont nähert.',
  },
  {
    question: 'Kann dieser Simulator ein rotierendes schwarzes Loch modellieren?',
    answer: 'Nein. Er verwendet die Schwarzschild-Lösung, die keine Rotation und keine elektrische Ladung annimmt. Echte astrophysikalische schwarze Löcher rotieren oft, und die Rotation verändert die Horizontgröße, die ISCO-Position und das Verhalten der Scheibe.',
  },
  {
    question: 'Warum sind supermassive schwarze Löcher am Horizont weniger "tidal gewalttätig"?',
    answer: 'Der Gezeitengradient am Horizont nimmt mit zunehmender Masse des schwarzen Lochs ab. Ein kleines stellares schwarzes Loch kann Objekte in der Nähe des Horizonts gewaltsam auseinanderziehen, während ein supermassives schwarzes Loch an dieser Grenze einen sanfteren lokalen Gradienten aufweisen kann.',
  },
  {
    question: 'Zeigt die Visualisierung ein echtes Bild eines schwarzen Lochs?',
    answer: 'Es ist ein lehrreiches Diagramm, keine Raytracing-Beobachtung. Die Ringe und die Scheibe sind auf die vereinfachten Schwarzschild-Radien skaliert, damit die physikalischen Zonen leicht vergleichbar sind.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Ereignishorizont-Feldkarte',
    visualCaption: 'Die Sonde bewegt sich durch die skalierte Schwarzschild-Geometrie. Die hellen Leitringe markieren den Horizont, die Photonensphäre und den innersten stabilen kreisförmigen Orbit.',
    controlsTitle: 'Steuerung des schwarzen Lochs',
    eventHorizon: 'Ereignishorizont',
    photonSphere: 'Photonensphäre',
    isco: 'ISCO',
    rsLabel: 'Schwarzschild-Radius',
    diameterLabel: 'Durchmesser',
    timeLabel: 'Zeitdilatation',
    redshiftLabel: 'Rotverschiebung',
    statusSafe: 'Außerhalb der stabilen Orbitregion',
    statusPhoton: 'Innerhalb der Photonensphären-Zone',
    statusInside: 'An der Horizontgrenze',
    diameter: 'Horizontdurchmesser',
    lightCrossing: 'Lichtdurchquerungszeit',
    timeDilation: 'Uhrenrate vs. entfernter Beobachter',
    redshift: 'Gravitative Rotverschiebung',
    mass: 'Masse des schwarzen Lochs',
    distance: 'Sondenentfernung',
    speed: 'Orbitalgeschwindigkeit der Sonde',
    escapeVelocity: 'Fluchtgeschwindigkeit',
    orbitalPeriod: 'Umlaufzeit der Sonde',
    tidalGradient: 'Gezeitengradient',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'Sonnenmassen',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 Sonnenmassen',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Schwarzes Loch Ereignishorizont Simulator für Schwarzschild-Radius, Photonensphäre und Zeitdilatation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Schwarzes Loch Ereignishorizont Simulator verwandelt die Kernideen von Schwarzschild-schwarzen Löchern in ein interaktives visuelles Modell. Ändern Sie die Masse des schwarzen Lochs, bewegen Sie eine Sonde nach innen oder außen und vergleichen Sie, wie Ereignishorizont, Photonensphäre, innerster stabiler kreisförmiger Orbit, Fluchtgeschwindigkeit, gravitative Rotverschiebung und Zeitdilatation reagieren.',
    },
    {
      type: 'paragraph',
      html: 'Der Simulator wurde für Astronomiestudenten, Physiklehrer, Wissenschaftsautoren und neugierige Lernende entwickelt, die mehr als eine statische Formel wollen. Die Anzeige verbindet die Zahlen mit einem räumlichen Diagramm, sodass Sie sehen können, warum der Ereignishorizont keine materielle Oberfläche ist, warum Photonen einen speziellen instabilen Orbit haben und warum stabile Kreisbewegungen stoppen, bevor der Horizont erreicht wird.',
    },
    {
      type: 'title',
      text: 'Wie der Ereignishorizont-Radius berechnet wird',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Für ein nicht rotierendes, ungeladenes schwarzes Loch ist der Ereignishorizont-Radius der <strong>Schwarzschild-Radius</strong>. Er wird berechnet als <strong>Rs = 2GM / c^2</strong>, wobei G die Gravitationskonstante, M die Masse des schwarzen Lochs und c die Lichtgeschwindigkeit ist. Eine Sonnenmasse entspricht einem Schwarzschild-Radius von etwa 2,95 Kilometern.',
    },
    {
      type: 'paragraph',
      html: 'Da der Schwarzschild-Radius linear mit der Masse skaliert, hat ein schwarzes Loch mit 10 Sonnenmassen einen Radius von nahezu 29,5 Kilometern, während ein schwarzes Loch mit 4 Millionen Sonnenmassen wie Sagittarius A* einen Radius von etwa 11,8 Millionen Kilometern hat. Der Masse-Regler verwendet eine logarithmische Skala, damit sowohl stellare als auch supermassive Fälle in dieselbe Steuerung passen.',
    },
    {
      type: 'table',
      headers: ['Region', 'Radius in Schwarzschild-Radien', 'Bedeutung'],
      rows: [
        ['Ereignishorizont', '1.0 Rs', 'Die Einweg-Grenze, an der die Fluchtgeschwindigkeit der Lichtgeschwindigkeit entspricht.'],
        ['Photonensphäre', '1.5 Rs', 'Der instabile kreisförmige Orbit für Licht um ein Schwarzschild-schwarzes Loch.'],
        ['ISCO', '3.0 Rs', 'Der innerste stabile kreisförmige Orbit für massereiche Teilchen.'],
        ['Schwaches Feld', '6 Rs und darüber', 'Die Schwerkraft ist immer noch stark, aber kreisförmige Orbits sind leichter aufrechtzuerhalten.'],
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