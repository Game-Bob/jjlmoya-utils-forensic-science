import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'roche-grens-satellietverstoring-calculator';
const title = 'Rochegrenscalculator en simulatie van satellietverstoring';
const description = 'Bereken de Roche-grens voor planeten en manen, vergelijk vloeibare en vaste verbrokkelingsafstanden en visualiseer hoe getijdenkrachten een satelliet in een ringsysteem veranderen.';

const howTo = [
  {
    name: 'Kies het primaire hemellichaam',
    text: 'Selecteer de planeet waarvan de zwaartekracht de satelliet uitrekt. De calculator laadt de straal, dichtheid en massa voor de Roche-grens en omlooptijdberekeningen.',
  },
  {
    name: 'Selecteer het satelliettype',
    text: 'Kies een ijzige maan, rotsachtige maan, puinhoop of ijzerrijk lichaam. Dichtheid en interne cohesie veranderen de verbrokkelingsgrens.',
  },
  {
    name: 'Verplaats de omloopbaanschuif',
    text: 'Sleep de omloopafstand naar binnen of naar buiten. De visuele schijf toont of de satelliet zich buiten de Roche-grens bevindt, er net langs scheert, aan het fragmenteren is of al een ring aan het vormen is.',
  },
  {
    name: 'Vergelijk de grenzen',
    text: 'Gebruik de uitlezingen om de klassieke vloeibare Roche-grens te vergelijken met de lagere vaste-lichaamschatting en de cohesie-aangepaste operationele grens.',
  },
];

const faq = [
  {
    question: 'Wat is de Roche-grens?',
    answer: 'De Roche-grens is de afstand tot een massief primair hemellichaam waarbij getijdenkrachten over een kleiner omwentelend lichaam sterk genoeg worden om de eigen zwaartekracht van het kleinere lichaam te overwinnen. Binnen die grens kan een zwakke of vloeibare satelliet uit elkaar worden getrokken.',
  },
  {
    question: 'Waarom zijn er vloeibare en vaste Roche-grenzen?',
    answer: 'Een vloeibare satelliet vervormt gemakkelijk, zodat getijden zijn uitrekking kunnen versterken en hem verder van de planeet kunnen verstoren. Een vaste satelliet kan vervorming weerstaan met materiaalsterkte, dus de eenvoudige vaste schatting plaatst verbrokkeling dichter bij het primaire lichaam.',
  },
  {
    question: 'Wordt elke maan binnen de Roche-grens onmiddellijk ringen?',
    answer: 'Nee. Echte verstoring hangt af van rotatie, samenstelling, scheuren, porositeit, verhitting, inslagen en materiaalsterkte. Deze tool toont de klassieke zwaartekrachtsgrens en gebruikt een overgangszone om risico aan te geven in plaats van een onmiddellijke omschakeling.',
  },
  {
    question: 'Waarom staan de ringen van Saturnus in verband met de Roche-grens?',
    answer: 'De ringen van Saturnus bevinden zich in een gebied waar ijzig materiaal als deeltjes kan blijven bestaan in plaats van samen te klonteren tot een grote maan. De Roche-grens helpt verklaren waarom ringdeeltjes verspreid blijven dicht bij de planeet.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Primair lichaam',
    satelliteType: 'Satelliettype',
    orbitDistance: 'Omloopafstand',
    rocheBoundary: 'Roche-grens',
    fluidLimit: 'Vloeibare limiet',
    rigidLimit: 'Vaste limiet',
    activeLimit: 'Actieve limiet',
    safetyRatio: 'Veiligheidsratio',
    orbitalPeriod: 'Omlooptijd',
    tidalStress: 'Getijdenspanning',
    ringFormation: 'Ringvorming',
    stable: 'Stabiele omloopbaan',
    grazing: 'Getijden scherend',
    fragmenting: 'Fragmenterend',
    ring: 'Ringsysteem',
    km: 'km',
    hours: 'u',
    density: 'Dichtheid',
    cohesion: 'Cohesie',
    planetRadius: 'Planetstraal',
    reset: 'Resetten',
    closePass: 'Nadering',
    moonTrack: 'Maanbaan',
    debrisTrack: 'Puinbaan',
    primaryEarth: 'Aarde',
    primaryMars: 'Mars',
    primaryJupiter: 'Jupiter',
    primarySaturn: 'Saturnus',
    primaryNeptune: 'Neptunus',
    satelliteIcyMoon: 'IJzige maan',
    satelliteRockyMoon: 'Rotsachtige maan',
    satelliteRubblePile: 'Puinmassa',
    satelliteIronCore: 'IJzerrijke maan',
    cohesionFluid: 'Vloeibaar',
    cohesionFractured: 'Gebarsten',
    cohesionRigid: 'Rigide',
  },
  seo: [
    {
      type: 'title',
      text: 'Roche-grens Formule, Betekenis en Hoe Gebruik Je Deze Calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De <strong>Roche-grens</strong> is de minimale omloopafstand waarop een satelliet die voornamelijk door zijn eigen zwaartekracht bij elkaar wordt gehouden, om een groter lichaam kan draaien zonder door getijdenkrachten uit elkaar te worden gerukt. Mensen zoeken hier meestal naar wanneer ze willen weten of een maan, komeet, asteroide of kunstmatig scenario een nadering tot een planeet zou overleven, of of het materiaal zich tot een ring zou verspreiden. Deze calculator beantwoordt die vraag door de planeetstraal, de planeetdichtheid, de satellietdichtheid en de geschatte interne sterkte van de satelliet te combineren.',
    },
    {
      type: 'paragraph',
      html: 'Het kernidee is eenvoudig: zwaartekracht is niet even sterk over de satelliet. De nabije kant wordt harder getrokken dan de verre kant, wat een rekkracht creëert. Als die getijdenrekking sterker is dan de eigen zwaartekracht en materiaalcohesie van de satelliet, kan het lichaam scheuren, massa verliezen en uiteindelijk fragmenteren. De Roche-grens is daarom niet alleen een afstand; het is een vergelijking tussen externe getijdenspanning en interne binding.',
    },
    {
      type: 'title',
      text: 'Roche-grensformules Gebruikt door de Calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voor een vloeibare of zeer zwakke satelliet is de klassieke benadering <strong>d = 2,44 R (rho_M / rho_m)^(1/3)</strong>. Voor een vaste satelliet is een gangbare benadering <strong>d = 1,26 R (rho_M / rho_m)^(1/3)</strong>. In deze vergelijkingen is <strong>d</strong> de Roche-grens gemeten vanaf het centrum van de planeet, <strong>R</strong> de straal van het primaire lichaam, <strong>rho_M</strong> de dichtheid van het primaire lichaam en <strong>rho_m</strong> de dichtheid van de satelliet.',
    },
    {
      type: 'list',
      items: [
        '<strong>Primaire straal:</strong> Grotere planeten creëren een grotere Roche-grensafstand, zelfs bij vergelijkbare dichtheid.',
        '<strong>Primaire dichtheid:</strong> Een dichter primair lichaam verhoogt de getijdensterkte op een bepaald veelvoud van zijn straal.',
        '<strong>Satellietdichtheid:</strong> Een dichtere satelliet heeft sterkere eigen zwaartekracht, zodat hij dichter bij de planeet kan overleven.',
        '<strong>Satellietsterkte:</strong> Een vloeibaar, ijzig, gebroken of puinophoopobject wordt verder weg verstoord dan een compact vast object.',
      ],
    },
    {
      type: 'table',
      headers: ['Model', 'Formulevorm', 'Gebruik het voor', 'Wat het resultaat betekent'],
      rows: [
        ['Vloeibare Roche-grens', '2,44 R (rho_M / rho_m)^(1/3)', 'IJzige manen, gesmolten lichamen, puinhopen, zwakke kometen', 'De conservatieve verbrokkelingsafstand voor objecten die gemakkelijk vervormen.'],
        ['Vaste Roche-grens', '1,26 R (rho_M / rho_m)^(1/3)', 'Dichte rotsachtige of metaalhoudende lichamen met materiaalsterkte', 'Een dichterbij gelegen lagere schatting waar materiaalsterkte verstoring vertraagt.'],
        ['Cohesie-aangepaste weergave', 'Tussen de vloeibare en vaste gevallen', 'Snelle scenariosvergelijking in deze simulator', 'Een praktische risicolijn voor het geselecteerde satelliettype, geen universele natuurwet-schakelaar.'],
      ],
    },
    {
      type: 'title',
      text: 'Voorbeeld: Waarom een IJzige Maan Nabij Saturnus Kwetsbaar Is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturnus is veel minder dicht dan de aarde, maar hij is enorm. Een ijzige satelliet met lage dichtheid heeft een zwakke eigen zwaartekracht vergeleken met een compacte rotsachtige maan, dus de dichtheidsverhouding plaatst de vloeibare Roche-grens nog steeds ver van de wolkentoppen van Saturnus. Dat is een reden waarom Roche-grensfysica centraal staat in het begrijpen waarom Saturnus een breed, helder ringsysteem kan onderhouden dat voornamelijk uit ijzige deeltjes bestaat in plaats van een grote opnieuw samengeklonterde maan.',
    },
    {
      type: 'paragraph',
      html: 'Als je Saturnus en een ijzige maan in de calculator kiest en dan de omloopbaan naar binnen sleept, let dan op de veiligheidsratio. Boven <strong>1,00x</strong> bevindt de geselecteerde omloopbaan zich buiten de actieve Roche-grens. Rond <strong>1,00x</strong> bevindt de maan zich in een getijdenscheergebied waar massa-uitstoot of scheuren aannemelijk wordt. Onder <strong>1,00x</strong> verschuift de visualisatie naar fragmentbogen en ringvorming omdat het geselecteerde model verstoring voorspelt.',
    },
    {
      type: 'title',
      text: 'Hoe de Veiligheidsratio te Interpreteren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De <strong>veiligheidsratio</strong> is de huidige omloopafstand gedeeld door de geselecteerde Roche-grens. Een ratio van <strong>1,25x</strong> betekent dat de omloopbaan 25% verder weg is dan de actieve verbrokkelingsschatting. Een ratio van <strong>1,00x</strong> betekent dat de omloopbaan precies op de geselecteerde Roche-grens ligt. Een ratio van <strong>0,80x</strong> betekent dat de satelliet zich diep in de geselecteerde verstoringszone bevindt.',
    },
    {
      type: 'table',
      headers: ['Veiligheidsratio', 'Weergegeven status', 'Praktische betekenis'],
      rows: [
        ['Boven 1,12x', 'Stabiele omloopbaan', 'De satelliet bevindt zich buiten de gekozen Roche-grens voor dit vereenvoudigde model.'],
        ['1,00x tot 1,12x', 'Getijden scherend', 'Het object is dichtbij genoeg dat vervorming, scheurvorming of oppervlakte-uitstoot van belang kan zijn.'],
        ['0,78x tot 1,00x', 'Fragmenterend', 'Eigen zwaartekracht is niet langer voldoende in het geselecteerde model; puinstromen zijn aannemelijk.'],
        ['Onder 0,78x', 'Ringsysteem', 'Het oorspronkelijke lichaam wordt weergegeven als verspreid materiaal dat naburige omloopbanen volgt.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'De uitlezing van de omlooptijd is toegevoegd omdat nabije naderingen niet alleen over afstand gaan. Materiaal binnen de verstoringszone volgt snelle, enigszins verschillende omloopbanen. Zodra fragmenten scheiden, verspreidt baanafschuiving ze rond de planeet, terwijl botsingen het puin afvlakken en sorteren tot een schijfachtige ring.',
    },
    {
      type: 'title',
      text: 'Waarom de Roche-grens Ringen Kan Creëren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanneer een satelliet buiten de Roche-grens uit elkaar valt, kunnen de fragmenten uiteindelijk botsen en opnieuw samenklonteren tot een kleinere maan. Binnen de Roche-grens kunnen nabijgelegen fragmenten niet gemakkelijk samensmelten tot een stabiel zelfzwaartekrachtlichaam omdat getijdenkrachten het materiaal uit elkaar blijven trekken. Het resultaat kan een langlevende ring zijn, vooral wanneer het puin ijzig, botsingsrijk en continu geroerd wordt door kleine manen of resonanties.',
    },
    {
      type: 'paragraph',
      html: 'Ringvorming is geleidelijk. Een verstoorde maan wordt eerst langwerpig, verliest dan deeltjes en grotere fragmenten. Die fragmenten bezetten enigszins verschillende omloopstralen, zodat ze voor of achter elkaar drijven. Na verloop van tijd dempen botsingen de verticale beweging en zakt het materiaal neer in een dunne schijf. Daarom toont de simulator een overgang van een enkele maan naar bogen en vervolgens naar een vollere ring, in plaats van verbrokkeling als een onmiddellijke explosie te behandelen.',
    },
    {
      type: 'title',
      text: 'Belangrijke Beperkingen van Deze Roche-grenscalculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De calculator is ontworpen voor snelle wetenschappelijke intuïtie, niet voor hoogwaardig missieontwerp. Echte satellieten worden beïnvloed door rotatie, omloopexcentriciteit, interne gelaagdheid, treksterkte, porositeit, temperatuur, getijdenverhitting, eerdere breuken, inslagen en resonanties met andere manen. Een ronddraaiende puinhoop op een excentrische baan kan op een andere manier falen dan een koud monolithisch gesteente op een cirkelvormige baan, zelfs als hun gemiddelde dichtheden er vergelijkbaar uitzien.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gebruik de vloeibare limiet</strong> wanneer het object zwak, ijzig, gesmolten, sterk gefractureerd of van los aggregaat is.',
        '<strong>Gebruik de vaste limiet</strong> als een lagere schatting voor compacte lichamen met betekenisvolle interne sterkte.',
        '<strong>Lees de actieve limiet</strong> als de door de simulator gekozen werkende grens voor het geselecteerde satelliettype.',
        '<strong>Beschouw het resultaat niet</strong> als een exacte voorspelling voor een genoemde echte maan zonder een gedetailleerd geofysisch model.',
      ],
    },
    {
      type: 'title',
      text: 'Veelgestelde Vragen Die Deze Tool Helpt Beantwoorden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gebruik deze tool wanneer je vragen wilt schatten zoals: Hoe dicht kan een maan bij de aarde komen voordat hij uit elkaar valt? Waarom bevinden de ringen van Saturnus zich in een Roche-grensgebied? Zou een rotsachtige maan dichterbij overleven dan een ijzige maan? Hoe verandert dichtheid de Roche-grens? Wat is het verschil tussen de vloeibare en de vaste Roche-grens? De bedieningselementen zijn rond die vergelijkingen gebouwd, zodat het wijzigen van een variabele onmiddellijk laat zien hoe de verbrokkelingsafstand, veiligheidsratio en ringvormingsvisualisatie reageren.',
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
