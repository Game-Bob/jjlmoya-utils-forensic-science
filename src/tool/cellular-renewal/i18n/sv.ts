const slug = 'cellfornyelsekalkylator';
const description = 'Beräkna hur stor andel av din kropp som har förnyats sedan födseln. Uppskattningar baserade på celldelningshastigheten i organ, skelett och vävnader. Theseusskeppet-paradoxen gjord konkret.';
const title = 'Cellförnyelsekalkylator: Hur mycket är kvar av det ursprungliga "Du"?';
const howTo = [
    {
      name: 'Justera din ålder',
      text: 'Dra reglaget från 1 till 105 år. Detta är den viktigaste variabeln för förnyelseberäkningarna.',
    },
    {
      name: 'Observera huvudprocenten',
      text: 'Den stora siffran i mitten visar hur många procent av din nuvarande materia som är "ny" (förnyad sedan födseln).',
    },
    {
      name: 'Analysera förloppsindikatorerna',
      text: 'Varje stapel representerar en specifik vävnad: hud/blod, skelett, organ och hjärna. Notera hur hjärnan knappt ändras medan huden ständigt förnyas.',
    },
    {
      name: 'Reflektera över din identitet',
      text: 'Om 99% av dig är ny materia, vem är du egentligen? Använd detta verktyg som en utgångspunkt för tankar kring personlig kontinuitet och Theseusskeppet-paradoxen.',
    },
  ];
const faq = [
    {
      question: 'Vad exakt är "cellförnyelse"?',
      answer: 'Det är den naturliga process genom vilken gamla eller skadade celler dör (apoptos) och ersätts av nya celler som skapats genom celldelning (mitos). Denna cykel är nödvändig för att upprätthålla fungerande vävnader och reparera skador.',
    },
    {
      question: 'Varför förnyas hjärnan så långsamt?',
      answer: 'Neuroner i hjärnbarken skapas före födseln och delar sig generellt inte mer. Detta ger neurologisk stabilitet: dina grundläggande "kopplingar" förblir konstanta. Däremot förnyas gliaceller (stödceller). Minnet lagras i kopplingar, inte i atomer.',
    },
    {
      question: 'Är det sant att vi är "nya människor" vart sjunde år?',
      answer: 'Det är en förenkling och inte helt korrekt. Ditt blod förnyas på 4 månader, din hud på en månad, ditt skelett på 10 år. Din hjärna förblir i stort sett oförändrad. Siffran sju år är historisk (Aristoteles nämnde den) men biologiskt sett är det ett oprecist genomsnitt.',
    },
    {
      question: 'Om min kropp är 99% ny, är jag då fortfarande samma person?',
      answer: 'Ja. Identitet är en kontinuitet av information, medvetande och minne, inte av atomer. Du är som en flod: vattnet ändras ständigt men floden består. Theseusskeppet-paradoxen antyder att identiteten ligger i mönstret, inte materien.',
    },
    {
      question: 'Vilka vävnader förnyas snabbast?',
      answer: 'Blod och hud leder ligan. Din benmärg producerar 200 miljarder blodceller dagligen. Du förlorar ca 30 000 hudceller per minut. Det är därför de läker så bra och åldras så synligt: de är unga rent cellulärt sett.',
    },
    {
      question: 'Förnyas verkligen inte ögonlinsen?',
      answer: 'Stämmer. Linsceller bildas under fosterutvecklingen och behålls livet ut. Vid 100 års ålder kan de centrala cellerna i din lins vara desamma som när du låg i livmodern. Det är en biologisk tidskapsel.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Kopierad',
    noHistory: 'Ingen historik',
    load: 'Ladda',
    delete: 'Radera',
    biologicalTimeline: 'Biologisk tidslinje',
    ageUnit: 'år av evolution',
    matterNewPercent: 'Din materia är ny till',
    atomicRenewal: 'Atomär förnyelse',
    skinAndBlood: 'Hud och blod',
    boneRemodeling: 'Skelettförnyelse',
    organicMatrix: 'Organisk matris',
    perennialCells: 'Bestående celler',
    disclaimerText: 'Beräkningarna baseras på genomsnittlig livslängd för celler enligt isotopstudier. Medan blod och hud förnyas på veckor, förblir linsproteiner och stora delar av din hjärnbark kvar från fosterutvecklingen. Fysiskt sett är du en dynamisk struktur i ständig förändring.',
  },
  seo: [
    {
      type: 'title',
      text: 'Hur mycket av dig är verkligen "ditt"? Vetenskapen om cellförnyelse',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Din kropp är som en flod i ständig rörelse. Varje sekund dör miljontals celler och ersätts av nya. På sju år har praktiskt taget varje atom i din kropp bytts ut. Denna statistik är dock djupt vilseledande, eftersom olika delar av din organism förnyas i radikalt olika takt.',
    },
    {
      type: 'paragraph',
      html: 'Denna paradox, känd som <strong>Theseusskeppet-paradoxen</strong>, väcker en urgammal fråga: om man byter ut alla delar på något, är det då fortfarande samma sak? I ditt fall är det en bokstavlig fråga. Atomerna som utgör din kropp idag är inte desamma som för 10 år sedan, men <em>du</em> är fortfarande du.',
    },
    {
      type: 'title',
      text: 'Cellomsättning: En karta över din dynamiska kropp',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Förnyelsehastigheten varierar dramatiskt mellan olika vävnader:',
    },
    {
      type: 'table',
      headers: ['Vävnad', 'Genomsnittlig livslängd för celler', 'Fullständig förnyelse', 'Beskrivning'],
      rows: [
        ['<strong>Blod</strong>', '120 dagar', '4 månader', 'Röda blodkroppar är snabbast. Din benmärg producerar 200 miljarder dagligen.'],
        ['<strong>Hud</strong>', '2-4 veckor', '1 månad', 'Extremt snabb förnyelse. Du förlorar ca 30 000 hudceller per minut.'],
        ['<strong>Skelett</strong>', '10 år', 'Ett decennium', 'Skelettet är mer konservativt. Ändå har du efter 10 år praktiskt taget bytt ut hela ditt skelett.'],
        ['<strong>Organ</strong>', '15 år', '1,5 decennier', 'Levern förnyas på månader. Hjärtat på år. En mosaik av rytmer.'],
        ['<strong>Hjärna</strong>', '80+ år (neuroner)', 'Nästan aldrig', 'Dina kortikala neuroner är de du föddes med. Men glia (stödceller) förnyas.'],
      ],
    },
    {
      type: 'title',
      text: 'Ögonlinsen: Den äldsta delen av dig',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det finns en struktur i din kropp som är speciell: <strong>ögonlinsen</strong>. Cellerna som utgör linsen deponeras under fosterutvecklingen och ersätts aldrig. Om du lever tills du blir 100 år kommer de centrala cellerna i din lins fortfarande att vara desamma som du hade i din moders livmoder. De är bokstavligt talat den äldsta delen av dig.',
    },
    {
      type: 'title',
      text: 'Beräkning av total förnyelse: Tyngdpunktens paradox',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Denna kalkylator använder ett viktat genomsnitt av olika vävnader:',
    },
    {
      type: 'list',
      items: [
        '<strong>30% hud och blod:</strong> Nästan fullständig förnyelse i yngre år.',
        '<strong>35% skelett:</strong> Progressiv förnyelse som når 100% vid 10 år.',
        '<strong>25% organ:</strong> Långsammare förnyelse, varierar beroende på organ.',
        '<strong>10% hjärna:</strong> Minimal förändring i neuroner, maximal i stödstrukturer.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Resultatet är att vid 25 års ålder är ungefär <strong>93% av din nuvarande materia ny</strong>. Vid 80 års ålder kan du bestå av mer än 99% andra atomer än de du hade vid födseln.',
    },
    {
      type: 'title',
      text: 'Filosofiska implikationer: Identitet är information, inte materia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om din kropp är helt ny vart tionde år, varför är det då "du"? Svaret är att identiteten inte ligger i specifika atomer, utan i det <strong>informationsmönster</strong> som dessa atomer bär upp. Du är som en sång: det är inte samma luft som vibrerar, men mönstret kvarstår.',
    },
    {
      type: 'paragraph',
      html: 'Detta har djupa implikationer: din kropp är en process, inte ett ting. Du är ett självorganiserande mönster som består genom förändring. Du äger inte atomer; du är en struktur som kanaliserar dem tillfälligt.',
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
        text: step.text,
      })),
    },
  ],
};

