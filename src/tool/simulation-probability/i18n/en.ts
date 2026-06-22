const description = 'Analyze if our reality is a simulation using Nick Bostrom\'s trilemma argument. Calculate existential probability with 4 key parameters.';
const slug = 'simulation-probability-calculator';
const title = 'Simulation Probability Calculator: Do You Live in a Virtual Universe?';
const howTo = [
    {
      name: 'Adjust Technological Progress',
      text: 'Estimate the probability humanity reaches the post-human level. 50% is neutral; increase if you believe AI and computing will continue advancing exponentially.',
    },
    {
      name: 'Set Survival Rate',
      text: 'Consider the probability humanity does not self-destruct. Factors in wars, climate change, pandemics. High values = optimism about our future.',
    },
    {
      name: 'Evaluate Interest in Simulating',
      text: 'If humanity reaches the post-human level, would it want to create simulations of its past? Consider motivations: scientific research, entertainment, historical preservation.',
    },
    {
      name: 'Interpret the result',
      text: 'Observe how the probabilities change. Results > 90% suggest that simulation is almost inevitable if the assumptions are met. Play with the parameters to explore different futures.',
    },
  ];
const faq = [
    {
      question: 'What exactly is Bostrom\'s argument?',
      answer: 'Nick Bostrom proposes that if a post-human civilization has enough computing power, it could create millions of simulations of previous universes. If that occurs, the number of simulated beings would be massively higher than original biological beings. Statistically, therefore, you are more likely to be simulated than original.',
    },
    {
      question: 'Do high probabilities mean we are definitely a simulation?',
      answer: 'No. High probabilities suggest it is a serious possibility that must be considered, but it is not proof. The argument is based on assumptions about the future of technology that might not be fulfilled.',
    },
    {
      question: 'How would knowing we are a simulation affect us?',
      answer: 'Philosophically, many argue that it changes nothing fundamental. If you and your loved ones are simulated together, your experiences, emotions, and relationships remain real and felt. The lived experience is what matters, not the substrate.',
    },
    {
      question: 'Is there scientific evidence we are in a simulation?',
      answer: 'There is no conclusive evidence. Some physicists point to anomalies in quantum mechanics (quantization, entanglement) as possible "computational optimizations", but these are speculative interpretations.',
    },
    {
      question: 'What value should I assign to "N" (simulation scale)?',
      answer: 'It depends on your beliefs about the future of computing. Low values (100-1000) assume resource limitations. High values (millions) assume practically unlimited computing power. Most scientific discussions use values between 1000 and 1 trillion.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copied',
    noHistory: 'No history',
    load: 'Load',
    delete: 'Delete',
    simulationParameters: 'Simulation Parameters',
    fpLabel: 'fp',
    fpSub: 'Technological Progress',
    flLabel: 'fl',
    flSub: 'Species Survival',
    fiLabel: 'fi',
    fiSub: 'Interest in Simulating',
    nLabel: 'N',
    nSub: 'Simulation Scale',
    probabilityTitle: 'Simulation Probability',
    trilemmaResult: 'Trilemma Verdict',
    scenario1: 'Scenario 1: Extinction',
    scenario2: 'Scenario 2: Disinterest',
    scenario3: 'Scenario 3: We Are Simulated',
    fpDescription: 'Probability that humanity achieves the technical capability to simulate universes with consciousness.',
    flDescription: 'Probability of avoiding collapse (extinction, war) before reaching post-human level.',
    fiDescription: 'Percentage of advanced civilizations that decide to create simulations of their ancestors.',
    nDescription: 'Number of simulated worlds that each advanced civilization typically runs simultaneously.',
    verdictDetail: 'The data suggests it is extremely probable that your consciousness is a software process.',
  },
  seo: [
    {
      type: 'title',
      text: 'Do we live in a simulation? The science behind Nick Bostrom\'s argument',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The idea that our reality could be an artificial construction, an extremely advanced computer simulation, has gone from science fiction to a serious philosophical and scientific debate. In 2003, philosopher Nick Bostrom of Oxford University published an article titled <em>"Are You Living in a Computer Simulation?"</em>, where he proposed a trilemma argument that challenges our perception of existence.',
    },
    {
      type: 'paragraph',
      html: 'This simulation probability calculator uses key parameters derived from Bostrom\'s hypothesis to estimate the possibilities that your consciousness is, in fact, the result of a software process executed by a post-human civilization.',
    },
    {
      type: 'title',
      text: 'The Pillars of the Simulation Argument',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bostrom\'s argument does not state that we are in a simulation, but that at least one of the following three propositions is almost certainly true:',
    },
    {
      type: 'list',
      items: [
        '<strong>Premature Extinction:</strong> The human species will go extinct before reaching a post-human stage capable of running ancestor simulations.',
        '<strong>Technological Disinterest:</strong> Any post-human civilization will have no interest in running simulations of its ancestors for ethical or recreational reasons.',
        '<strong>Ubiquitous Simulation:</strong> Almost certainly we are living in a simulation because the number of simulated minds massively exceeds the number of original biological minds.',
      ],
    },
    {
      type: 'title',
      text: 'How to Interpret the Parameters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To use this tool correctly, it is essential to understand what the model variables represent:',
    },
    {
      type: 'table',
      headers: ['Variable', 'Concept', 'Meaning'],
      rows: [
        ['<strong>fp</strong>', 'Technological Progress', 'Probability that a civilization will reach the capacity to simulate minds.'],
        ['<strong>fl</strong>', 'Survival Rate', 'Probability that the civilization does not self-destruct before reaching that point.'],
                ['<strong>fi</strong>', 'Interest in Simulating', 'Percentage of civilizations that decide to use their power to create virtual worlds.'],
        ['<strong>N</strong>', 'Simulation Scale', 'Total number of simulations a single post-human civilization would create.'],
      ],
    },
    {
      type: 'title',
      text: 'Why is the probability usually so high?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If we assume that a post-human civilization would have immense computing power (like that of a Dyson Sphere or a Jupiter Brain), the number <strong>N</strong> (simulations) could be in the billions. If <em>N</em> is very large, even with low values of interest (<em>fi</em>), the number of simulated beings will exceed by orders of magnitude the original beings.',
    },
    {
      type: 'title',
      text: 'Evidence and Computational Limits',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'From quantum physics to cosmology, some scientists look for "glitches" or limits in the resolution of our reality. If the universe has a minimum length (Planck Length) or behaviors that look like code optimizations (such as quantum entanglement), the hypothesis gains adherents in the field of digital physics.',
    },
    {
      type: 'title',
      text: 'Ethical Reflection',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If we discovered we are a simulation, would our morals change? For Bostrom, what matters is the experience of consciousness. A simulated mind suffers and loves just like a biological one.',
    },
    {
      type: 'title',
      text: 'Calculator Use Cases',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Science Education:</strong> Understand probabilistic models applied to cosmology.',
        '<strong>Contemporary Philosophy:</strong> Explore Bostrom\'s trilemma interactively.',
        '<strong>Futurology:</strong> Analyze the impact of the species survival rate on our destiny.',
        '<strong>Existential Curiosity:</strong> Evaluate your own beliefs about the future of technology.',
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
        text: step.text,
      })),
    },
  ],
};

