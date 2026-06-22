const slug = 'microwave-leak-detector';
const description = 'Analyze if your microwave is leaking radiation by measuring real-time interference on your WiFi network. A scientific safety tool.';
const title = 'Microwave Leak Detector: WiFi Interference Visualizer';
const howTo = [
    {
      name: 'Connect to 2.4GHz WiFi network',
      text: 'Ensure your mobile or laptop is NOT connected to the 5GHz band so that interference is measurable.',
    },
    {
      name: 'Start base latency test',
      text: 'Press the start button with the microwave off to establish a stable connection baseline.',
    },
    {
      name: 'Turn on the microwave',
      text: 'Heat a glass of water for 30-60 seconds and stand near the appliance with your device.',
    },
    {
      name: 'Analyze real-time graph',
      text: 'Observe if latency rises above 100-200ms or if packet loss occurs while the device is running.',
    },
  ];
const faq = [
    {
      question: 'How can a website detect my microwave?',
      answer: 'We don\'t use magic sensors, but network latency. Both 2.4GHz WiFi and microwave ovens operate at the same frequency (approx. 2450 MHz). If the microwave shielding fails, it generates "noise" that collides with the WiFi, drastically increasing latency (ping).',
    },
    {
      question: 'Is it dangerous if my microwave leaks?',
      answer: 'Small WiFi interference is normal and does not imply an immediate health risk, as power decays quickly with distance. However, a massive leak indicates poor sealing of the door or mesh, which should be checked for technical safety.',
    },
    {
      question: 'Why doesn\'t the test work with 5GHz WiFi?',
      answer: 'Because 5GHz WiFi operates on a much higher frequency band than a microwave. For the test to be effective, your device must be connected to the router\'s 2.4GHz network.',
    },
    {
      question: 'What do the latency spikes on the graph mean?',
      answer: 'Constant spikes during microwave operation suggest that the electromagnetic signal is "escaping" and saturating the air, preventing WiFi data packets from arriving on time.',
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
    microwaveDetection: 'Microwave Detection',
    shieldingAnalysis: 'Shielding Analysis',
    startTest: 'Start Test',
    stopTest: 'Stop Test',
    waitingForStart: 'Waiting for start...',
    detectingInterference: 'Detecting interference...',
    baseLevel: 'Base Level',
    activeLevel: 'Active Level',
    leakProbability: 'Leak Probability',
    lowLeak: 'Low',
    mediumLeak: 'Medium',
    highLeak: 'High',
    pingLabel: 'Latency (ms)',
    packetLossLabel: 'Packet Loss (%)',
    rfInterferenceMonitor: 'RF Interference Monitor',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / jitter',
    systemReady: 'System Ready',
    physicalRequirement: 'Physical Requirement',
    physicalDesc: 'This detector uses interference in the 2.4GHz band (the microwave frequency). To work properly, make sure you are connected to a 2.4GHz WiFi network (not 5GHz/6GHz) or use your phone near the device.',
    understandStart: 'Understood, Start Scan',
    rfInterferenceTitle: 'Interference Monitor',
    connectToAnalyze: 'Connect to start thermal interference analysis.',
    audioFeedback: 'Audio Feedback',
    muteUnmute: 'MUTE / UNMUTE',
    static: 'Static',
  },
  seo: [
    {
      type: 'title',
      text: 'WAVE PHYSICS: Does Your Microwave Really Leak Radiation?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The microwave is the most misunderstood appliance in the modern kitchen. Hated by purists and loved by pragmatists, it hides a constant battle between contained energy and the outside world.',
    },
    {
      type: 'paragraph',
      html: 'From a purely physical standpoint, a microwave oven is a <strong>cavity resonator</strong> designed to bombard water molecules with electromagnetic radiation at a very specific frequency: <strong>2.45 GHz</strong>. This frequency is not arbitrary; it is necessary to cause the dipole oscillation of water particles, generating heat through friction. The problem is that this is exactly the same frequency used by the 802.11b/g/n WiFi standard.',
    },
    {
      type: 'title',
      text: 'Electromagnetic Interference (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Any WiFi device operating in the 2.4GHz band competes for the same "air" as your microwave. In a perfect oven, the <strong>Faraday Cage</strong> (the metal mesh you see on the door and inner walls) should contain 100% of the energy.',
    },
    {
      type: 'paragraph',
      html: 'However, no cage is perfect in the long run. Door seals, magnetic latches, and metal wear can allow small amounts of energy to escape. Although these levels are usually well below safety limits for humans, they are <strong>gigantic</strong> for a WiFi network card, causing latency, packet loss, and the characteristic "jitter" that our tool measures.',
    },
    {
      type: 'title',
      text: 'The Homemade Faraday Cage Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'There is a very simple analog way to check the basic state of your oven\'s shielding, although it is less accurate than our digital jitter measurement:',
    },
    {
      type: 'list',
      items: [
        '<strong>Step 1 - The Phone:</strong> Place your mobile phone inside the microwave (<strong>UNDER NO CIRCUMSTANCES TURN THE OVEN ON!</strong> Just close the door).',
        '<strong>Step 2 - The Call:</strong> Try calling that phone from another device. If the phone rings, the Faraday cage is defective or not tuned for cellular frequencies. If it gives "out of coverage," the shielding is working correctly.',
      ],
    },
    {
      type: 'title',
      text: 'Myths vs Scientific Reality',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"Microwaves alter the molecular structure of water"</strong> - FALSE. Microwave radiation is <em>non-ionizing</em>. It does not have enough energy to break chemical bonds or alter DNA. It simply vibrates water molecules, increasing their kinetic energy (temperature).',
        '<strong>"Radiation accumulates in food"</strong> - FALSE. Microwaves are like light: once you flip the switch off, they are gone. Hot food does not emit microwave radiation, only infrared radiation (heat) just like a campfire or a pan.',
        '<strong>"Watching the plate spin damages your eyes"</strong> - PARTIALLY TRUE. The door glass is designed with a mesh that blocks 2.45GHz wavelengths. However, if the mesh is damaged, the glass will not stop the microwaves. The lens of the eye is very heat-sensitive and has poor blood circulation, so prolonged direct exposure (near a leak) could cause thermal cataracts.',
      ],
    },
    {
      type: 'title',
      text: 'How does this digital detector work?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Our tool does not measure radiation directly (smartphones do not have sensors for this), but it measures the <strong>main symptom</strong>. When a 2.45GHz radiation molecule escapes the oven, it "collides" with your device\'s WiFi signal. This causes:',
    },
    {
      type: 'list',
      items: [
        '<strong>Packet Retransmissions:</strong> The router detects that the message arrived corrupt and has to resend it, increasing latency.',
        '<strong>Jitter Variation:</strong> This is the measure of instability in response time. High jitter is an unequivocal sign of massive external interference.',
        '<strong>Performance Drop:</strong> Transfer speed plummets due to radio spectrum saturation.',
        '<strong>Background Noise:</strong> The microwave injects noise that raises the "noise floor," making it difficult for the device to distinguish between real data and radioactive chaos.',
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

