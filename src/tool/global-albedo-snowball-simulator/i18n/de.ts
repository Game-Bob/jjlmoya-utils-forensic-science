import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'globaler-albedo-schneeball-simulator';
const title = 'Globaler Albedo und Schneeball Erde Simulator';
const description = 'Erkunden Sie die Strahlungsbilanz der Erde, Änderungen der Solarkonstante, Treibhausgaskonzentrationen und die Eis-Albedo-Rückkopplung, um zu sehen, ob sich Eisflächen zurückziehen, stabilisieren oder ein Schneeballklima auslösen.';

const howTo = [
  {
    name: 'Einstrahlung der Sonne einstellen',
    text: 'Bewegen Sie den Regler für die Solarkonstante, um Szenarien mit schwächerer junger Sonne, heutiger Sonneneinstrahlung oder stärkerem zukünftigen Antrieb zu testen.',
  },
  {
    name: 'Treibhauskonzentration anpassen',
    text: 'Ändern Sie die Treibhausgaskonzentration, um zu sehen, wie der Strahlungsantrieb mit der höheren planetaren Albedo konkurriert.',
  },
  {
    name: 'Planeten mit Eis besiedeln',
    text: 'Beginnen Sie mit einer kleinen Polkappe oder einer stark vereisten Welt. Das Modell durchläuft die Rückkopplungsschleife und zeigt, ob das Eis vorrückt oder sich zurückzieht.',
  },
  {
    name: 'Klimazustand ablesen',
    text: 'Nutzen Sie Temperatur, absorbierte Strahlung, endgültige Eisbedeckung und die Zeitverlaufskurve, um gemäßigte, Schneeball- und Treibhausergebnisse zu vergleichen.',
  },
];

const faq = [
  {
    question: 'Was ist die Eis-Albedo-Rückkopplung?',
    answer: 'Eis und Schnee reflektieren mehr Sonnenlicht als Ozean oder Land. Wenn sich Eis ausdehnt, steigt die planetare Albedo, die absorbierte Sonnenenergie sinkt, und die Abkühlung kann die Bildung von weiterem Eis begünstigen. Wenn Eis zurückgeht, absorbiert die dunklere Oberfläche mehr Energie, und die Erwärmung beschleunigt sich.',
  },
  {
    question: 'Was bedeutet Schneeball Erde?',
    answer: 'Schneeball Erde ist ein hypothetischer Klimazustand, in dem Eis niedrige Breiten oder nahezu globale Bedeckung erreicht. Geologische Hinweise deuten darauf hin, dass die Erde während des Neoproterozoikums solche Zustände erreicht haben könnte.',
  },
  {
    question: 'Ist dies ein vollständiges Klimamodell?',
    answer: 'Nein. Es ist ein kompaktes Energiebilanzmodell zu Lernzwecken. Es ignoriert atmosphärische Zirkulation, Wolken, ozeanischen Wärmetransport, Jahreszeiten, Geografie und Kohlenstoffkreislauf-Rückkopplungen, erfasst jedoch die grundlegende Strahlungslogik der Albedo-Rückkopplung.',
  },
  {
    question: 'Warum können Treibhausgase einen Schneeballzustand durchbrechen?',
    answer: 'Treibhausgase reduzieren die ausgehende langwellige Kühlung, indem sie einen Strahlungsantrieb hinzufügen. In Schneeballerde-Szenarien kann sich vulkanisches Kohlendioxid ansammeln, wenn die Silikatverwitterung nachlässt, und schließlich den Planeten genug erwärmen, um das Eis in niedrigen Breiten zu schmelzen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Klimasteuerung',
    solarConstant: 'Solarkonstante',
    greenhouse: 'Treibhausgase',
    initialIce: 'Anfängliche Eisbedeckung',
    temperature: 'Gleichgewichtstemperatur',
    absorbed: 'Absorbierte Sonnenstrahlung',
    finalIce: 'Endgültige Eisbedeckung',
    albedo: 'Planetarische Albedo',
    forcing: 'Treibhausantrieb',
    state: 'Klimazustand',
    timeline: 'Eisentwicklung',
    years: 'Modelljahre',
    snowball: 'Schneeballblockade',
    temperate: 'Gemäßigtes Gleichgewicht',
    hothouse: 'Treibhausrückzug',
    retreating: 'Eis im Rückzug',
    advancing: 'Eis im Vormarsch',
    stable: 'Nahe am Gleichgewicht',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Strahlungsdiagnostik',
  },
  seo: [
    {
      type: 'title',
      text: 'Globaler Albedosimulator für Eis-Albedo-Rückkopplung und Schneeball Erde',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Simulator untersucht eine der wichtigsten Rückkopplungsschleifen im Planetenklima: die Verbindung zwischen Eisbedeckung, Reflexionsvermögen und absorbierter Sonnenstrahlung. Ein Planet mit hellem Eis reflektiert mehr einfallende Sonnenstrahlung zurück ins All. Diese Abkühlung kann das Eis erhalten oder ausdehnen, wodurch die Albedo weiter steigt und das System in einen Schneeballerde-Zustand gedrückt wird. Ein Planet mit weniger Eis absorbiert mehr Sonnenlicht, was die Enteisung beschleunigen kann.',
    },
    {
      type: 'paragraph',
      html: 'Nutzen Sie die Regler, um die Solarkonstante, die Treibhausgaskonzentration und die anfängliche Eisbedeckung zu verändern. Das Modell durchläuft dann eine einfache globale Energiebilanz und zeigt, ob sich das Klima in Richtung ausgedehnter Vereisung, eines gemäßigten Gleichgewichts oder eines heißen Zustands mit wenig Eis bewegt. Es ist für schnelle Intuition ausgelegt: Jeder Regler greift direkt in einen physikalischen Term der Strahlungsbilanz ein.',
    },
    {
      type: 'title',
      text: 'Wie die Energiebilanz geschätzt wird',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die absorbierte kurzwellige Strahlung wird als S(1 - a) / 4 geschätzt, wobei S die Solarkonstante und a die planetare Albedo ist. Die Division durch vier wandelt das von der Erdscheibe aufgefangene Sonnenlicht in einen Durchschnitt über die gesamte Kugeloberfläche um. Eine höhere Albedo senkt die absorbierte Energie; eine höhere Treibhauskonzentration erhöht den positiven Strahlungsantrieb, der die geschätzte Oberflächentemperatur anhebt.',
    },
    {
      type: 'table',
      headers: ['Steuerung', 'Physikalische Bedeutung', 'Klimaeffekt'],
      rows: [
        ['Solarkonstante', 'Einstrahlende Sternenenergie in Erdumlaufbahn', 'Höhere Werte erwärmen den Planeten und lassen Eis schrumpfen.'],
        ['Treibhausgase', 'Langwelliger Strahlungsantrieb relativ zu einer Referenzatmosphäre', 'Höhere Werte erschweren die Schneeballblockade.'],
        ['Anfängliche Eisbedeckung', 'Startreflexionsvermögen des Planeten', 'Hohe Werte können durch Albedo-Rückkopplung eine davonlaufende Abkühlung auslösen.'],
      ],
    },
    {
      type: 'title',
      text: 'Warum die Albedo-Rückkopplung nichtlinear werden kann',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Eis-Albedo-Schleife ist keine sanfte lineare Anpassung. Sobald Eis einen ausreichenden Teil des Planeten bedeckt, kann die hellere Oberfläche so viel Sonnenlicht absorbieren, dass die sommerliche Schmelze schwach wird. In die entgegengesetzte Richtung legt zurückweichendes Eis dunkleren Ozean und Land frei, was die Absorption erhöht und den Planeten von der Vereisung wegbewegt. Deshalb können ähnliche Antriebe je nach anfänglicher Eisbedeckung zu unterschiedlichen Ergebnissen führen.',
    },
    {
      type: 'paragraph',
      html: 'Die reale Erde bringt viele Komplikationen mit sich: Wolken, Staub auf Eis, ozeanischen Wärmetransport, Kontinentallagen, jahreszeitliches Sonnenlicht, Meereisdynamik und den Kohlenstoffkreislauf. Ein einfaches Modell hat dennoch seinen Wert, weil es die Strahlungsbilanz erster Ordnung isoliert. Es zeigt, warum Schneeballerde-Hypothesen sowohl von schwachem Sonnenlicht oder hohen Albedo-Auslösern als auch von späterem Treibhausaufbau für die Entkommung abhängen.',
    },
    {
      type: 'title',
      text: 'Den Simulator interpretieren',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Schneeballblockade:</strong> Die endgültige Eisbedeckung ist sehr hoch und die Gleichgewichtstemperatur bleibt weit unter dem Gefrierpunkt.',
        '<strong>Gemäßigtes Gleichgewicht:</strong> Das Modell stabilisiert sich mit teilweiser Eisbedeckung und moderater absorbierter Strahlung.',
        '<strong>Treibhausrückzug:</strong> Das Eis schrumpft auf einen sehr kleinen Anteil, während der Treibhausantrieb und die absorbierte Sonnenstrahlung hoch bleiben.',
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
