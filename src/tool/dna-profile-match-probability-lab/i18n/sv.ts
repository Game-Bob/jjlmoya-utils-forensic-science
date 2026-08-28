import { content as enContent } from './en';
import { createDnaLocale } from '../localize';

export const content = createDnaLocale({
  locale: 'sv',
  slug: 'laboratorium-sannolikhet-dna-profilmatchning',
  title: 'Laboratorium för sannolikhet vid DNA profilmatchning',
  description: 'Utforska hur allelfrekvenser och Hardy-Weinberg-regler skapar en pedagogisk sannolikhet för slumpmässig DNA-profilmatchning.',
  ui: {
    ...enContent.ui,
    controls: 'Profilinställningar', controlKicker: 'Bygg en profil', controlHelper: 'Välj en pedagogisk förinställning eller öppna varje locus för att ändra alleler och populationsfrekvenser.', presets: 'Pedagogiska förinställningar', presetbalanced: 'Balanserad', presethomozygote: 'Homozygoter', presetclassroom: 'Enkel klass', loci: 'loci', locus: 'Locus', locusName: 'Locusnamn', alleleA: 'Allel A', alleleB: 'Allel B', frequencyA: 'Frekvens A (%)', frequencyB: 'Frekvens B (%)', removeLocus: 'Ta bort locus', addLocus: 'Lägg till locus', disclaimer: 'Pedagogisk simulator. Den identifierar ingen person, validerar inget fall och ersätter inte en laboratorieberäkning.', sceneKicker: 'Signalspår', electropherogram: 'Profilspår', sceneNote: 'Två toppar visar de två angivna allelerna för varje locus. Höjden är en visuell frekvenssignal, inte en laboratoriesignal.', peakHeight: 'Toppens höjd följer angiven frekvens', results: 'Sannolikhetsresultat', resultKicker: 'Sannolikhet för slumpmässig matchning', locusBreakdown: 'Beräkning locus för locus', genotype: 'Genotyp', rule: 'Regel', frequency: 'Genotypfrekvens', badgeNeedsData: 'Data behövs', badgeExploratory: 'Utforskande', badgeCalculated: 'Beräknad modell', needsData: 'Fyll i varje locus med två alleler och frekvenser mellan 0 och 100 %; summan av ett frekvenspar får inte överstiga 100 %.', exploratoryResult: 'Den här lilla profilen är användbar för att lära sig metoden. Fler loci kan göra profilen ovanligare men gör inte modellen till en slutsats i ett fall.', calculatedResult: 'Produkten beräknas från de angivna frekvenserna med förenklade antaganden om oberoende.', notCalculated: 'Inte beräknad', completeFields: 'Fyll i profilfälten för att se ett resultat.', ofRandomProfiles: 'av slumpmässiga profiler enligt denna pedagogiska modell', missingValue: 'Namnlös locus', pattern: 'Profilmönster', calculation: 'Beräkning', meaning: 'Betydelse', homozygote: 'Två lika alleler', heterozygote: 'Två olika alleler', independentLoci: 'Flera oberoende loci', homozygoteMeaning: 'Allelfrekvensen multipliceras med sig själv.', heterozygoteMeaning: 'De två allelfrekvenserna multipliceras och fördubblas.', independentLociMeaning: 'Varje locus bidrar till profilens sammanlagda frekvens.',
  },
  seo: {
    calculatorTitle: 'Kalkylator för sannolikhet vid slumpmässig DNA-profilmatchning',
    intro: 'Det här laboratoriet för DNA-profilsannolikhet hjälper studenter och nyfikna läsare att utforska hur en liten autosomal STR-profil blir en sannolikhet i en förenklad populationsgenetisk modell. Ange två alleler och deras frekvenser för varje locus. Kalkylatorn använder Hardy-Weinberg-regeln och multiplicerar locusfrekvenserna för att visa en pedagogisk slumpmässig matchning.',
    methodTitle: 'Så fungerar genotypregeln',
    method: 'Gränssnittet gör beräkningen synlig: spåret visar de angivna allelerna, tabellen visar varje genotypfrekvens och slutresultatet skrivs som en på en tiopotens. En homozygot använder p² och en heterozygot 2pq. Förinställningarna innehåller syntetiska undervisningsvärden, inte en officiell populationsdatabas.',
    populationTitle: 'Varför populationsfrekvenser spelar roll',
    population: 'Allelfrekvenser är uppskattningar från populationsdatabaser. Referenspopulation, urval, databasens storlek, släktskap, populationsstruktur och validering påverkar tolkningen. Om frekvenserna beskriver den relevanta populationen, profilen är en ren enkelkälla och loci behandlas som oberoende, uppskattar produkten profilens frekvens bland slumpmässigt valda obesläktade personer. Ändrade antaganden ändrar resultatets betydelse.',
    interpretation: 'Resultatet är ett villkorat påstående om de värden som angavs. Modellen tar inte hänsyn till personurval, släktskap, blandprofiler eller effekten av en databassökning. Ett undervisningsexempel bör därför läsas tillsammans med population, metod och angiven osäkerhet.',
    application: 'En bra övning börjar med att välja en förinställning, ändra bara ett locus och sedan följa tabellen och den sammanlagda sannolikheten. Då blir det tydligt att sällsynta alleler kan ändra ett enskilt locus bidrag kraftigt. Skriv ner de angivna värdena, frekvensernas källa och det förenklade antagandet om oberoende. Vyn är avsedd för undervisning, självstudier och en tydlig förklaring av beräkningen, inte för ett forensiskt utlåtande.',
    limitsTitle: 'Pedagogiska begränsningar',
    limits: 'I ett verkligt fall måste även personurval, databas, blandprofiler, populationsstruktur och expertens tolkning dokumenteras. Verktyget analyserar inte elektroferogram, korrigerar inte populationsstruktur, beräknar inte likelihood-kvoter och söker inte i DNA-databaser.',
    tipTitle: 'Använd som modell, inte som dom',
    tip: 'En liten sannolikhet för slumpmässig matchning är inte ett påstående om identitet eller skuld. Använd verktyget för att förklara aritmetiken och håll källa, population, antaganden och osäkerhet synliga.',
    list: ['<strong>En population:</strong> Blanda inte frekvenser från databaser som inte kan jämföras.', '<strong>Synliga antaganden:</strong> Laboratoriet antar obesläktade personer och förenklat oberoende mellan loci.', '<strong>Skilj sannolikhet från identitet:</strong> En ovanlig profil bevisar inte källa eller skuld.', '<strong>Dokumentera data:</strong> En formell rapport behöver källa, metod, osäkerhet och tolkning.'],
  },
  faq: [
    { question: 'Vad betyder sannolikhet för slumpmässig matchning?', answer: 'Det är en uppskattning av sannolikheten att en slumpmässigt vald obesläktad person har den angivna profilen enligt valda frekvenser och antaganden. Det är inte sannolikheten för skuld eller för att ett prov kommer från en viss person.' },
    { question: 'Hur beräknas en genotypfrekvens?', answer: 'För en homozygot används p². För en heterozygot används 2pq, varefter locusfrekvenserna multipliceras.' },
    { question: 'Varför är förinställningarnas frekvenser syntetiska?', answer: 'Det är små undervisningsexempel. Forensiskt arbete kräver en validerad, representativ och dokumenterad populationsdatabas.' },
    { question: 'Kan verktyget jämföra två personer?', answer: 'Nej. Det tar inte emot biologiska prover, jämför inte profiler och identifierar ingen; det visar bara en matematisk modell.' },
    { question: 'Varför är en mycket liten sannolikhet inte en dom?', answer: 'Tolkningen beror på databas, urval, profilkvalitet, antaganden och professionell bedömning.' },
  ],
  howTo: [
    { name: 'Välj en pedagogisk förinställning', text: 'Börja med den balanserade, homozygota eller enkla klassprofilen.' },
    { name: 'Redigera ett locus', text: 'Ange namn, två alleler och varje allels frekvens i procent.' },
    { name: 'Läs locusregeln', text: 'Tabellen visar p² för homozygoter och 2pq för heterozygoter.' },
    { name: 'Tolka försiktigt', text: 'Se resultatet som en pedagogisk modell och behåll antagandena synliga.' },
  ],
});
