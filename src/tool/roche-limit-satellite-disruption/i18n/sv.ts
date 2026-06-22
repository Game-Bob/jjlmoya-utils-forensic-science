const slug = 'roche-grans-satellitstorning-kalkylator';
const title = 'Rochegränsen Kalkylator och Simulator för Satellitstörning';
const description = 'Beräkna Roche-gränsen för planeter och månar, jämför fluida och rigida avstånd för uppbrytning och visualisera hur tidvattenkrafter omvandlar en satellit till ett ringsystem.';

const howTo = [
  {
    name: 'Välj den primära himlakroppen',
    text: 'Välj planeten vars gravitation sträcker ut satelliten. Kalkylatorn laddar dess radie, densitet och massa för uppskattningar av Roche-gränsen och omloppstiden.',
  },
  {
    name: 'Välj satellittyp',
    text: 'Välj en ismåne, stenmåne, rubble pile eller järnrik kropp. Densitet och inre kohesion förändrar uppbrytningsgränsen.',
  },
  {
    name: 'Flytta omloppsreglaget',
    text: 'Dra omloppsavståndet inåt eller utåt. Den visuella skivan visar om satelliten befinner sig utanför Roche-gränsen, precis vid den, fragmenteras eller redan blir en ring.',
  },
  {
    name: 'Jämför gränserna',
    text: 'Använd avläsningarna för att jämföra den klassiska fluida Roche-gränsen med den lägre rigida uppskattningen och den kohesionsjusterade operativa gränsen.',
  },
];

const faq = [
  {
    question: 'Vad är Roche-gränsen?',
    answer: 'Roche-gränsen är avståndet från en massiv primär himlakropp där tidvattenkrafterna över en mindre kretsande kropp blir tillräckligt starka för att övervinna den mindre kroppens egen gravitation. Innanför den gränsen kan en svag eller fluidliknande satellit dras isär.',
  },
  {
    question: 'Varför finns det fluida och rigida Roche-gränser?',
    answer: 'En fluid satellit deformeras lätt, så tidvattenkrafter kan förstärka dess utsträckning och bryta sönder den längre från planeten. En rigid satellit kan motstå deformation med materialstyrka, så den enkla rigida uppskattningen placerar uppbrytning närmare den primära kroppen.',
  },
  {
    question: 'Blir varje måne innanför Roche-gränsen omedelbart ringar?',
    answer: 'Nej. Verklig uppbrytning beror på rotation, sammansättning, sprickor, porositet, uppvärmning, nedslag och materialstyrka. Detta verktyg visar den klassiska gravitationsgränsen och använder ett övergångsband för att kommunicera risk snarare än en omedelbar omkoppling.',
  },
  {
    question: 'Varför ligger Saturnus ringar nära Roche-gränsens fysik?',
    answer: 'Saturnus ringar upptar ett område där isigt material kan bestå som partiklar istället för att ackretera till en stor måne. Roche-gränsen hjälper till att förklara varför ringpartiklar förblir spridda nära planeten.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Primär himlakropp',
    satelliteType: 'Satellittyp',
    orbitDistance: 'Omloppsavstånd',
    rocheBoundary: 'Roche-gräns',
    fluidLimit: 'Fluid gräns',
    rigidLimit: 'Rigid gräns',
    activeLimit: 'Aktiv gräns',
    safetyRatio: 'Säkerhetskvot',
    orbitalPeriod: 'Omloppstid',
    tidalStress: 'Tidvattenspänning',
    ringFormation: 'Ringbildning',
    stable: 'Stabil omloppsbana',
    grazing: 'Tidvattenbetning',
    fragmenting: 'Fragmentering',
    ring: 'Ringsystem',
    km: 'km',
    hours: 'h',
    density: 'Densitet',
    cohesion: 'Kohesion',
    planetRadius: 'Planetradie',
    reset: 'Återställ',
    closePass: 'Nära passage',
    moonTrack: 'Månspår',
    debrisTrack: 'Skräpspår',
    primaryEarth: 'Jorden',
    primaryMars: 'Mars',
    primaryJupiter: 'Jupiter',
    primarySaturn: 'Saturnus',
    primaryNeptune: 'Neptunus',
    satelliteIcyMoon: 'Ismåne',
    satelliteRockyMoon: 'Sten måne',
    satelliteRubblePile: 'Grushög',
    satelliteIronCore: 'Järnrik måne',
    cohesionFluid: 'Fluid',
    cohesionFractured: 'Sprucken',
    cohesionRigid: 'Styv',
  },
  seo: [
    {
      type: 'title',
      text: 'Roche-gränsen Formel, Betydelse och Hur Man Använder Denna Kalkylator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Roche-gränsen</strong> är det minsta omloppsavståndet där en satellit som hålls samman främst av sin egen gravitation kan kretsa kring en större kropp utan att slitas sönder av tidvattenkrafter. Människor söker vanligtvis efter den när de vill veta om en måne, komet, asteroid eller artificiellt scenario skulle överleva en nära passage av en planet, eller om materialet skulle spridas till en ring. Denna kalkylator svarar på den frågan genom att kombinera planetradien, planetens densitet, satellitens densitet och satellitens ungefärliga inre styrka.',
    },
    {
      type: 'paragraph',
      html: 'Nyckelidén är enkel: gravitationen är inte lika stark över hela satelliten. Den närmaste sidan dras hårdare än den bortre sidan, vilket skapar en sträckande kraft. Om den tidvattensträckningen är starkare än satellitens egen gravitation och materialkohesion kan kroppen spricka, tappa massa och slutligen fragmenteras. Roche-gränsen är därför inte bara ett avstånd, det är en jämförelse mellan extern tidvattenspänning och inre bindning.',
    },
    {
      type: 'title',
      text: 'Roche-gränsen Ekvationer som Används av Kalkylatorn',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För en fluid eller mycket svag satellit är den klassiska approximationen <strong>d = 2,44 R (rho_M / rho_m)^(1/3)</strong>. För en rigid satellit är en vanlig approximation <strong>d = 1,26 R (rho_M / rho_m)^(1/3)</strong>. I dessa ekvationer är <strong>d</strong> Roche-gränsen mätt från planetens centrum, <strong>R</strong> är radien för den primära kroppen, <strong>rho_M</strong> är densiteten för den primära kroppen och <strong>rho_m</strong> är densiteten för satelliten.',
    },
    {
      type: 'list',
      items: [
        '<strong>Primär radie:</strong> Större planeter skapar ett större Roche-gränsavstånd även när densiteten är liknande.',
        '<strong>Primär densitet:</strong> En tätare primärkropp ökar tidvattenstyrkan vid en given multipel av dess radie.',
        '<strong>Satellitens densitet:</strong> En tätare satellit har starkare egen gravitation, så den kan överleva närmare planeten.',
        '<strong>Satellitens styrka:</strong> Ett fluidt, isigt, sprucket eller rubble pile-objekt bryts sönder längre ut än ett kompakt rigidt objekt.',
      ],
    },
    {
      type: 'table',
      headers: ['Modell', 'Formelform', 'Använd den för', 'Vad resultatet betyder'],
      rows: [
        ['Fluid Roche-gräns', '2,44 R (rho_M / rho_m)^(1/3)', 'Ismånar, smälta kroppar, rubble piles, svaga kometer', 'Det konservativa uppbrytningsavståndet för objekt som deformeras lätt.'],
        ['Rigid Roche-gräns', '1,26 R (rho_M / rho_m)^(1/3)', 'Täta steniga eller metalliska kroppar med materialstyrka', 'Ett närmare lägre estimat där materialstyrka fördröjer uppbrytning.'],
        ['Kohesionsjusterad visning', 'Mellan fluida och rigida fallen', 'Snabb scenariosjämförelse i denna simulator', 'En praktisk risklinje för den valda satellittypen, inte en universell naturlag.'],
      ],
    },
    {
      type: 'title',
      text: 'Exempel: Varför en Ismåne nära Saturnus är Sårbar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturnus är mycket mindre tät än jorden, men den är enorm. En lågdensitetsismåne har svag egen gravitation jämfört med en kompakt stenmåne, så densitetskvoten placerar ändå den fluida Roche-gränsen långt från Saturnus molntoppar. Det är en anledning till att Roche-gränsens fysik är central för att förstå varför Saturnus kan upprätthålla ett brett, ljust ringsystem som mestadels består av ispartiklar istället för en enda stor återsamlad måne.',
    },
    {
      type: 'paragraph',
      html: 'Om du väljer Saturnus och en ismåne i kalkylatorn och sedan drar omloppsbanan inåt, titta på säkerhetskvoten. Över <strong>1,00x</strong> befinner sig den valda omloppsbanan utanför den aktiva Roche-gränsen. Nära <strong>1,00x</strong> befinner sig månen i ett tidvattenbetningsområde där massavsöndring eller sprickbildning blir trolig. Under <strong>1,00x</strong> skiftar visualiseringen mot fragmentbågar och ringbildning eftersom den valda modellen förutsäger uppbrytning.',
    },
    {
      type: 'title',
      text: 'Hur Man Tolkar Säkerhetskvoten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Säkerhetskvoten</strong> är det aktuella omloppsavståndet dividerat med den valda Roche-gränsen. En kvot på <strong>1,25x</strong> innebär att omloppsbanan är 25% längre ut än den aktiva uppbrytningsuppskattningen. En kvot på <strong>1,00x</strong> innebär att omloppsbanan är exakt på den valda Roche-gränsen. En kvot på <strong>0,80x</strong> innebär att satelliten är väl innanför den valda störningszonen.',
    },
    {
      type: 'table',
      headers: ['Säkerhetskvot', 'Visat tillstånd', 'Praktisk tolkning'],
      rows: [
        ['Över 1,12x', 'Stabil omloppsbana', 'Satelliten är utanför den valda Roche-gränsen för denna förenklade modell.'],
        ['1,00x till 1,12x', 'Tidvattenbetning', 'Objektet är tillräckligt nära för att deformation, sprickbildning eller ytavsöndring kan vara relevant.'],
        ['0,78x till 1,00x', 'Fragmentering', 'Egen gravitation är inte längre tillräcklig i den valda modellen; skräpströmmar är troliga.'],
        ['Under 0,78x', 'Ringsystem', 'Den ursprungliga kroppen representeras som spritt material som följer näriliggande banor.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Omloppstidsavläsningen är inkluderad eftersom nära passager inte bara handlar om avstånd. Material innanför störningszonen följer snabba, något olika omloppsbanor. När fragment väl separerar sprider omloppsskjuvning dem runt planeten, medan kollisioner planar ut och sorterar skräpet till en skivliknande ring.',
    },
    {
      type: 'title',
      text: 'Varför Roche-gränsen Kan Skapa Ringar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När en satellit bryts sönder utanför Roche-gränsen kan fragmenten så småningom kollidera och återackretera till en mindre måne. Innanför Roche-gränsen kan näriliggande fragment inte enkelt smälta samman till en stabil självgraviterande kropp eftersom tidvattenkrafterna ständigt drar isär materialet. Resultatet kan bli en långlivad ring, särskilt när skräpet är isigt, kollisionsbenäget och kontinuerligt omrört av små månar eller resonanser.',
    },
    {
      type: 'paragraph',
      html: 'Ringbildning är gradvis. En sönderbruten måne blir först utsträckt, avger sedan partiklar och större fragment. Dessa fragment upptar något olika omloppsradier, så de driver framför eller bakom varandra. Med tiden dämpar kollisioner vertikal rörelse och materialet lägger sig i en tunn skiva. Det är därför simulatorn visar en övergång från en ensam måne till bågar och sedan till en fullare ring, istället för att behandla uppbrytning som en omedelbar explosion.',
    },
    {
      type: 'title',
      text: 'Viktiga Begränsningar för Denna Roche-gränsen-kalkylator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkylatorn är designad för snabb vetenskaplig intuition, inte för högprecision uppdragsdesign. Verkliga satelliter påverkas av rotation, omloppsexcentricitet, inre skiktning, draghållfasthet, porositet, temperatur, tidvattenuppvärmning, tidigare frakturer, nedslag och resonanser med andra månar. En snurrande rubble pile i en excentrisk bana kan bete sig annorlunda än en kall monolitiskt sten i en cirkulär bana, även om deras genomsnittliga densiteter ser likadana ut.',
    },
    {
      type: 'list',
      items: [
        '<strong>Använd den fluida gränsen</strong> när objektet är svagt, isigt, smält, kraftigt sprucket eller gjort av löst aggregat.',
        '<strong>Använd den rigida gränsen</strong> som en nedre gränsuppskattning för kompakta kroppar med meningsfull inre styrka.',
        '<strong>Läs den aktiva gränsen</strong> som simulatorns valda arbetsgräns för den valda satellittypen.',
        '<strong>Tolka inte resultatet</strong> som en exakt förutsägelse för en namngiven verklig måne utan en detaljerad geofysisk modell.',
      ],
    },
    {
      type: 'title',
      text: 'Vanliga Frågor Detta Verktyg Hjälper Att Besvara',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Använd detta verktyg när du vill uppskatta frågor som: Hur nära kan en måne komma jorden innan den bryts sönder? Varför är Saturnus ringar innanför en Roche-gränsregion? Skulle en stenmåne överleva närmare än en ismåne? Hur förändrar densitet Roche-gränsen? Vad är skillnaden mellan fluid och rigid Roche-gräns? Kontrollerna är byggda kring dessa jämförelser, så att ändra en variabel visar omedelbart hur uppbrytningsavståndet, säkerhetskvoten och ringbildningsvisualiseringen svarar.',
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
