import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'epidemic-sir-simulator';
const title = 'Epidemic SIR Simulator';
const description = 'Explore pathogen spread with an interactive SIR model that adjusts R0, lethality, vaccination, infectious period, peak burden, and transmission curves in real time.';

const howTo = [
  {
    name: 'Set the reproduction number',
    text: 'Move the R0 slider to represent how many secondary infections one infectious person would cause in a fully susceptible population.',
  },
  {
    name: 'Add vaccination and vaccine effectiveness',
    text: 'Increase vaccination coverage or effectiveness to remove protected people from the susceptible pool and lower the effective reproduction number.',
  },
  {
    name: 'Adjust lethality and infectious duration',
    text: 'Change the fatality percentage and the number of infectious days to see how severe outcomes and curve timing respond.',
  },
  {
    name: 'Read the SIR curves',
    text: 'Use the chart and day inspector to compare susceptible, infected, recovered, and estimated death curves across the simulated outbreak.',
  },
];

const faq = [
  {
    question: 'What does an SIR model show?',
    answer: 'An SIR model divides a population into susceptible, infected, and recovered groups. It estimates how people move between those groups over time as transmission and recovery occur.',
  },
  {
    question: 'How does vaccination change the curve?',
    answer: 'Vaccination reduces the susceptible population when it prevents infection. In this simulator, effective vaccination lowers the effective reproduction number and can shrink or delay the infection peak.',
  },
  {
    question: 'Is R0 the same as Re?',
    answer: 'No. R0 describes spread in a fully susceptible population. Re is the effective reproduction number after immunity, vaccination, or behavior changes reduce the number of people who can be infected.',
  },
  {
    question: 'Why does the infected curve peak and then fall?',
    answer: 'The infected curve falls when each infectious person generates fewer new infections than the number of people leaving the infected group through recovery or death. Depleted susceptibility is the main driver in a basic SIR model.',
  },
  {
    question: 'Can this predict a real epidemic?',
    answer: 'It is a teaching and scenario tool, not a forecast. Real outbreaks need age structure, contact networks, geography, reporting delays, changing behavior, variants, waning immunity, and calibrated data.',
  },
  {
    question: 'What is the difference between attack rate and peak infected?',
    answer: 'Attack rate measures the total proportion of the population ever infected by the end of the outbreak. Peak infected measures the maximum number simultaneously infectious at any one time. A low peak does not guarantee a low attack rate, and vice versa.',
  },
  {
    question: 'What does Re below 1 mean visually?',
    answer: 'When Re falls below 1, each infectious person generates fewer than one new infection on average. On the chart, the infected curve never rises steeply and may decline immediately from the starting seed, meaning the outbreak cannot sustain itself.',
  },
  {
    question: 'How does the infectious period affect the outbreak?',
    answer: 'A longer infectious period prolongs the time during which each infected person can transmit the pathogen. This stretches the outbreak timeline, delays the peak, and, for the same R0, can produce a broader curve with a lower peak height.',
  },
  {
    question: 'Why does lethality not change the infected curve?',
    answer: 'In this SIR model, lethality affects only the death count that branches off the recovered group. It does not feed back into transmission because deaths and recoveries both remove people from the infectious pool at the same rate.',
  },
  {
    question: 'What is herd immunity threshold?',
    answer: 'The herd immunity threshold is the fraction of the population that must be immune for Re to fall below 1. It is approximated as 1 - 1/R0. For measles with R0 around 12, the threshold is over 91%. For seasonal flu with R0 around 1.3, the threshold is near 23%.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Live epidemic scenario',
    curveChart: 'SIR transmission curves',
    inspectDay: 'Inspect simulation day',
    legend: 'Curve legend',
    susceptible: 'Susceptible',
    infected: 'Infected',
    recovered: 'Recovered or immune',
    deaths: 'Deaths',
    controls: 'Epidemic controls',
    modelName: 'Compartment model',
    peakInfected: 'Peak infected',
    peakDay: 'Peak day',
    attackRate: 'Attack rate',
    estimatedDeaths: 'Estimated deaths',
    r0: 'Basic reproduction number R0',
    lethality: 'Lethality',
    vaccination: 'Vaccination coverage',
    vaccineEffectiveness: 'Vaccine effectiveness',
    infectiousDays: 'Infectious period',
    initialInfected: 'Initial infected',
    dayLabel: 'Day',
    daysUnit: 'days',
    infectiousLabel: 'infectious',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'Epidemic SIR simulator for R0, vaccination, lethality, and transmission curves',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This epidemic SIR simulator lets you explore how a pathogen spreads through a population when susceptible people become infected and then leave the infectious group through recovery or death. It is designed for students, science communicators, public health learners, and anyone who wants a fast visual explanation of why small changes in transmission or immunity can reshape an outbreak.',
    },
    {
      type: 'paragraph',
      html: 'The interactive controls focus on the variables people most often want to test: <strong>R0</strong>, lethality, vaccination coverage, vaccine effectiveness, infectious duration, and the initial infected share. The chart updates immediately so the susceptible, infected, recovered, immune, and death curves can be compared as one connected epidemic system.',
    },
    {
      type: 'title',
      text: 'How the SIR model works',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A basic SIR model divides the population into three main compartments. <strong>S</strong> is susceptible people who can still become infected. <strong>I</strong> is currently infectious people who can transmit the pathogen. <strong>R</strong> is people who are no longer infectious because they recovered, gained immunity, or otherwise left the transmission chain. This simulator also tracks estimated deaths as a severe-outcome branch from the group leaving infection.',
    },
    {
      type: 'paragraph',
      html: 'The transmission rate is linked to R0 and the infectious period. If R0 is high or people remain infectious for longer, more new infections are generated before the infected group shrinks. If vaccination removes enough people from the susceptible pool, the effective reproduction number falls and the outbreak peak can become much smaller.',
    },
    {
      type: 'table',
      headers: ['Control', 'What it changes', 'Typical curve effect'],
      rows: [
        ['R0', 'Transmission potential before immunity is considered', 'Higher R0 makes the infected curve rise faster and peak higher.'],
        ['Vaccination coverage', 'Share of people moved out of the susceptible pool when protected', 'Higher coverage lowers Re and can flatten the outbreak.'],
        ['Vaccine effectiveness', 'How much vaccination prevents infection in this simplified model', 'Higher effectiveness makes the same coverage more protective.'],
        ['Infectious period', 'Average time people remain infectious', 'Longer infection changes timing and can prolong the outbreak.'],
        ['Lethality', 'Share of people leaving infection who are counted as deaths', 'Higher lethality raises the death curve without directly increasing transmission.'],
      ],
    },
    {
      type: 'title',
      text: 'R0, Re, and herd immunity intuition',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0 is the average number of secondary cases caused by one infectious person in a fully susceptible population. Re, the effective reproduction number, is lower when some people are already immune, vaccinated, isolated, or otherwise not available for infection. In this simulator, effective vaccination directly reduces susceptibility, so the displayed Re falls as protected coverage rises.',
    },
    {
      type: 'paragraph',
      html: 'A common herd-immunity approximation is <strong>1 - 1 / R0</strong>. For an R0 of 3, the threshold is about 66.7% effective immunity. The simulator helps make that threshold tangible: when effective vaccination is below the threshold, outbreaks can still grow; when it is above the threshold, transmission struggles to maintain itself.',
    },
    {
      type: 'title',
      text: 'What the peak infected number means',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Peak infected is the maximum number of people simultaneously infectious in the simulated population. It is often more operationally important than total infections because hospitals, laboratories, isolation programs, and contact tracing teams experience pressure from simultaneous active cases. Lowering the peak can matter even when the final attack rate is not reduced to zero.',
    },
    {
      type: 'paragraph',
      html: 'The attack rate estimates the share of the whole population infected by the end of the run. A high attack rate means the pathogen reached many people before susceptibility was depleted or controlled. A low attack rate means immunity, vaccination, or weak transmission prevented broad spread.',
    },
    {
      type: 'title',
      text: 'Real-world R0 values and what they imply for herd immunity',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The basic reproduction number R0 is not a fixed biological constant for a pathogen. It depends on contact patterns, population density, cultural habits, and environmental factors. The same virus can have different R0 values in a dense city versus a rural area, or in a season with more indoor crowding. The values below are illustrative reference ranges from published studies.',
    },
    {
      type: 'table',
      headers: ['Pathogen', 'Typical R0 range', 'Herd immunity threshold (1 - 1/R0)', 'Key transmission feature'],
      rows: [
        ['Seasonal influenza', '1.2 - 1.4', '17% - 29%', 'Short infectious period, seasonal variation'],
        ['SARS-CoV-2 (ancestral)', '2.0 - 3.0', '50% - 67%', 'Pre-symptomatic transmission, aerosol routes'],
        ['SARS-CoV-2 (Delta)', '5.0 - 8.0', '80% - 87%', 'Increased viral load, faster spread'],
        ['SARS-CoV-2 (Omicron)', '8.0 - 12.0', '87% - 92%', 'Immune evasion, upper respiratory tropism'],
        ['Polio', '5.0 - 7.0', '80% - 86%', 'Fecal-oral route, long asymptomatic shedding'],
        ['Smallpox', '5.0 - 7.0', '80% - 86%', 'Eradicated through global vaccination campaign'],
        ['Measles', '12.0 - 18.0', '92% - 94%', 'Extremely contagious, airborne, long infectious period'],
        ['Pertussis (whooping cough)', '12.0 - 17.0', '92% - 94%', 'Waning immunity allows repeat infections'],
      ],
    },
    {
      type: 'paragraph',
      html: 'A high herd immunity threshold does not automatically mean vaccination is futile when coverage is below the threshold. Even partial immunity slows transmission, lowers the peak, reduces severe outcomes, and buys time for healthcare systems. The simulator demonstrates this effect when you move the vaccination slider through intermediate values.',
    },
    {
      type: 'title',
      text: 'How the effective reproduction number Re changes during an outbreak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re is the effective reproduction number at a given point in the outbreak. Unlike R0, which assumes a fully susceptible population, Re accounts for immunity, vaccination, and any other factors that reduce susceptibility. In this simulator, Re is calculated as <strong>R0 x (1 - protected fraction)</strong>, where the protected fraction is the share of the population effectively immune through vaccination.',
    },
    {
      type: 'paragraph',
      html: 'The Re value displayed in the simulator header updates as you move the controls. When Re stays above 1, the outbreak grows. When it falls below 1, each infected person generates fewer than one new infection on average, and the epidemic cannot sustain itself. This is the core insight behind epidemic control: bringing and keeping Re below 1 through immunity, behavior, or interventions.',
    },
    {
      type: 'title',
      text: 'Attack rate, peak burden, and what they reveal about outbreak severity',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The attack rate is the fraction of the total population infected over the entire simulated outbreak. It is the most commonly cited summary metric after an epidemic wave. A high attack rate means the pathogen infected most susceptible people before depletion or control stopped transmission. A low attack rate means immunity, vaccination, or inherently weak transmission prevented widespread infection.',
    },
    {
      type: 'paragraph',
      html: 'Peak infected - the maximum number of people simultaneously infectious - matters more for short-term healthcare pressure. A wave with a moderate attack rate but a very high, sharp peak can overwhelm hospitals even if total cases are not extreme. Conversely, a slow, flattened curve can have a similar attack rate spread over many weeks, giving the health system time to manage cases. This is why public health officials emphasize <strong>flattening the curve</strong> as an operational goal distinct from preventing all infections.',
    },
    {
      type: 'title',
      text: 'Flattening the curve and healthcare capacity in the SIR model',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The infected curve in an SIR model can be interpreted as the number of people requiring care simultaneously. In a real epidemic, each person who needs a hospital bed, oxygen support, or intensive care draws on a finite pool of resources. When the infected curve rises higher than the available capacity, mortality from all causes increases because the system cannot provide adequate care.',
    },
    {
      type: 'paragraph',
      html: 'Vaccination, in this model, flattens the curve by removing people from the susceptible pool before they can become infected. Reducing R0 through other measures - masks, ventilation, distancing, testing, isolation - would also lower the peak in a more complete model. The simulation makes the mechanism visible: as effective vaccination coverage increases, the peak shrinks, shifts later, or disappears entirely.',
    },
    {
      type: 'title',
      text: 'The mathematics behind the SIR model visualized',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Under the SIR model, the rate of new infections per time step depends on three quantities: the transmission rate <strong>beta</strong>, the current number of infectious people <strong>I</strong>, and the fraction of the effective population that is still susceptible <strong>S / N</strong>. The product <strong>beta x I x S / N</strong> is called the force of infection. Each day, this force determines how many susceptible people move into the infected compartment.',
    },
    {
      type: 'paragraph',
      html: 'People leave the infected compartment at the recovery rate <strong>gamma = 1 / infectious period</strong>. The balance between the force of infection and the recovery rate determines whether the epidemic grows or shrinks. When beta x S / N exceeds gamma, new infections outpace recoveries and the outbreak expands. When the susceptible fraction S / N has fallen enough, gamma dominates and the outbreak contracts.',
    },
    {
      type: 'paragraph',
      html: 'The parameter <strong>beta</strong> is not directly visible in the interface. Instead, it is derived from R0 and the infectious period through the relation <strong>beta = R0 x gamma</strong>. This is why changing R0 or the infectious period produces similar but not identical curve shapes. Both parameters influence the force of infection, but the infectious period also stretches the time axis of the outbreak.',
    },
    {
      type: 'title',
      text: 'How to use this simulator for learning and teaching',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Compare high vs. low R0 scenarios:</strong> set R0 to 1.5 (seasonal flu range) and then to 6.0 (pre-vaccination polio range). Notice how the peak height, peak timing, and attack rate change even when all other controls are identical.',
        '<strong>Explore the herd immunity threshold:</strong> start with R0 at 3.0 and no vaccination. Note the attack rate. Then add vaccination coverage until Re falls below 1. Compare the peak and attack rate at coverage just below and just above the threshold.',
        '<strong>Test the effect of slow vs. fast response:</strong> set vaccination coverage at different levels and observe when the peak occurs. Higher coverage not only reduces the peak height but usually delays it, buying time for healthcare preparation.',
        '<strong>Separate lethality from transmission:</strong> set lethality to 0% and observe the infected curve. Then set lethality to 10% without changing other settings. The infected curve does not change, but the death toll rises. This demonstrates why case fatality rate and transmission speed are distinct epidemiological dimensions.',
        '<strong>Examine the infectious period effect:</strong> compare a 4-day infectious period against an 18-day period at the same R0. The longer period stretches the curve, delays the peak, and produces a longer but lower wave.',
        '<strong>Classroom exercise - find the threshold:</strong> ask students to find the minimum vaccination coverage that brings Re below 1 for a given R0, then compare the result to the formula 1 - 1/R0.',
      ],
    },
    {
      type: 'title',
      text: 'When and why to use this simulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Epidemiology students:</strong> connect the mathematical SIR framework to interactive curve shapes before working with differential equations or programming their own models.',
        '<strong>Science communicators and journalists:</strong> generate plots, screenshots, or live explanations showing why R0, vaccination, and infectious period matter for outbreak trajectories.',
        '<strong>Public health learners:</strong> test how different intervention combinations shift the epidemic peak and attack rate to develop intuition about the trade-offs in outbreak response.',
        '<strong>Anyone curious about epidemic math:</strong> explore the SIR model without needing to write code or install software. Every control updates the chart in real time.',
      ],
    },
    {
      type: 'title',
      text: 'Model extensions: SEIR, SIRS, and beyond',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This simulator uses a basic SIR structure. Several common extensions add realism. An <strong>SEIR model</strong> adds an exposed (E) compartment for people who are infected but not yet infectious, representing the incubation period. The exposed group delays the epidemic peak outward compared to the SIR model because infections spend time in the latent phase before contributing to transmission.',
    },
    {
      type: 'paragraph',
      html: 'An <strong>SIRS model</strong> allows recovered individuals to lose immunity over time and re-enter the susceptible compartment. This models pathogens like pertussis or SARS-CoV-2 with waning immunity and produces sustained or recurrent outbreak waves. An <strong>age-structured model</strong> partitions the population into age groups with different contact matrices and severity profiles, which is essential for diseases where children and elderly people have very different outcomes.',
    },
    {
      type: 'paragraph',
      html: 'Other extensions add geographic spread (metapopulation models), behavior change (adaptive contact rates), stochastic noise (for small populations where random extinction matters), and intervention timing (school closures, lockdowns, travel restrictions that turn on and off). Each extension adds complexity that is essential for forecasting but can obscure the core transmission dynamics that the basic SIR model illustrates cleanly.',
    },
    {
      type: 'title',
      text: 'Limitations of this epidemic simulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This is a compact deterministic SIR model. It does not include age groups, household structure, schools, travel, superspreading, incubation periods, asymptomatic transmission, seasonality, variants, waning immunity, behavior changes, testing delays, or public health interventions that switch on and off over time. Those details are essential for real forecasting.',
    },
    {
      type: 'paragraph',
      html: 'The model assumes a well-mixed population where every susceptible person has equal contact probability with every infectious person. Real populations have contact networks with strong clustering, age assortativity, geographic structure, and individual variation in infectiousness. These features can create slower initial growth, superspreading events, and heterogeneous outbreak patterns that a homogeneous model does not capture.',
    },
    {
      type: 'paragraph',
      html: 'Use the simulator to understand mechanisms and compare scenarios, not to make medical, policy, or emergency decisions. Real-world epidemic assessment requires surveillance data, local context, uncertainty analysis, and specialist epidemiological modeling.',
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
