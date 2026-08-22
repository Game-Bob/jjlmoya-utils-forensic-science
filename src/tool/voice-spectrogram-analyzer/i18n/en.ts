import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = 'voice-spectrogram-analyzer-online';
const title = 'Voice Spectrogram Analyzer Online';
const description = 'Reveal the frequency, time, intensity, and estimated formant patterns of two audio samples privately in your browser.';

const howTo = [
  { name: 'Choose Two Audio Samples', text: 'Load one or two local audio files, drag them onto the sample chambers, or begin with the included synthetic vowel studies.' },
  { name: 'Set the Frequency Ceiling', text: 'Choose a 4, 6, or 8 kHz ceiling to frame the frequencies that matter for the material and voice range you are studying.' },
  { name: 'Read the Spectral Plates', text: 'Inspect time from left to right, frequency vertically, intensity as brightness, and the three fine guides as educational formant peak estimates.' },
  { name: 'Listen and Compare', text: 'Play either sample to move the synchronized cursor, then compare average F1, F2, and F3 estimates without treating the result as speaker identification.' }
];

const faq = [
  { question: 'What does a voice spectrogram show?', answer: 'A spectrogram maps time horizontally, frequency vertically, and signal intensity through color brightness. Sustained speech resonances often appear as horizontal energy bands.' },
  { question: 'Are my audio recordings uploaded?', answer: 'No. Audio decoding, spectral analysis, visualization, and playback happen locally in the browser. The tool does not send the selected files to a server.' },
  { question: 'What are the F1, F2, and F3 guides?', answer: 'They are educational estimates of three broad spectral envelope peaks. F1 and F2 are commonly used to discuss vowel height and vowel place, while F3 can reflect additional vocal tract resonances.' },
  { question: 'Can this analyzer identify a speaker?', answer: 'No. Visual resemblance or formant proximity cannot establish identity. Forensic voice comparison requires validated methods, suitable recordings, uncertainty assessment, and qualified expert interpretation.' },
  { question: 'Why can formant estimates change with the ceiling?', answer: 'The selected frequency range changes which spectral peaks are available and how they are separated. Speaker anatomy, vowel, recording quality, pitch, and analysis settings also affect estimates.' }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    privacyBadge: 'Local only',
    privacyNote: 'Your recordings stay on this device. Decoding and analysis run inside the browser.',
    loadHeading: 'Bring two sounds into the light',
    sampleALabel: 'Sample A',
    sampleBLabel: 'Sample B',
    chooseFileLabel: 'Choose audio',
    replaceFileLabel: 'Replace audio',
    dropHint: 'Drop an audio file here, up to 25 MB. The first 20 seconds are analyzed.',
    presetHint: 'Start instantly with the two synthetic vowel studies.',
    presetWarmLabel: 'Warm vowel study',
    presetBrightLabel: 'Bright vowel study',
    emptySampleLabel: 'Waiting for audio',
    readySampleLabel: 'Spectral plate revealed',
    decodingSampleLabel: 'Developing the spectral plate',
    errorSampleLabel: 'The sample could not be analyzed',
    durationLabel: 'Duration',
    ceilingHeading: 'Frequency ceiling',
    ceilingFourLabel: '4 kHz',
    ceilingSixLabel: '6 kHz',
    ceilingEightLabel: '8 kHz',
    stageLabel: 'Mirrored voice spectrogram stage',
    mirrorViewLabel: 'Mirror plates',
    splitViewLabel: 'Parallel plates',
    playALabel: 'Play sample A',
    playBLabel: 'Play sample B',
    stopLabel: 'Stop',
    timeAxisLabel: 'Time',
    frequencyAxisLabel: 'Frequency',
    intensityLegendLabel: 'Brighter ink means stronger energy',
    formantLegendLabel: 'Estimated formant guides',
    sampleAEmptyCanvasLabel: 'Load sample A to reveal its spectrum',
    sampleBEmptyCanvasLabel: 'Load sample B to reveal its spectrum',
    comparisonHeading: 'Read the resonant fingerprints',
    comparisonNote: 'These values describe average spectral peak positions across voiced frames. Differences are measurements, not a similarity score or identity conclusion.',
    formantOneLabel: 'First resonance region',
    formantTwoLabel: 'Second resonance region',
    formantThreeLabel: 'Third resonance region',
    averageLabel: 'Average',
    differenceLabel: 'Gap',
    unavailableLabel: 'Not available',
    statusEmptyLabel: 'Load a sample to begin',
    statusSingleLabel: 'One plate is ready',
    statusReadyLabel: 'Two spectral plates are ready',
    limitError: 'This file is larger than the 25 MB local analysis limit.',
    decodeError: 'This browser could not decode the selected audio format.',
    browserError: 'Web Audio is unavailable in this browser.',
    educationalNote: 'Educational signal visualization only. Formant guides use smoothed spectral peak regions, not a validated LPC workflow, and must not be used for speaker identification.'
  },
  seo: [
    { type: 'title', text: 'How a Voice Spectrogram Turns Sound Into a Visible Landscape', level: 2 },
    { type: 'paragraph', html: 'A <strong>voice spectrogram</strong> transforms a recording into a map with time on the horizontal axis and frequency on the vertical axis. Stronger energy appears as brighter color. This makes sustained vowels, harmonics, silence, noise, and changing resonances easier to explore than they are in a waveform alone.' },
    { type: 'paragraph', html: 'The analyzer divides the signal into short overlapping frames, applies a Hamming window, and transforms each frame from amplitude over time into energy by frequency. A short frame preserves when a sound happened, while its frequency bins reveal where energy is concentrated. Because every spectrogram balances time resolution against frequency resolution, narrow transients and stable vowels can never both be represented with unlimited precision. The display should therefore be read as a measured view of the chosen settings, not as a perfect picture of the original pressure wave.' },
    { type: 'diagnostic', variant: 'info', title: 'Private Browser Processing', html: 'The selected recording is decoded into an in-memory audio buffer and analyzed locally. No upload is needed, so private classroom recordings, rehearsals, and personal voice samples remain on the device.' },
    { type: 'stats', columns: 3, items: [
      { value: 'Time', label: 'Read from left to right' },
      { value: 'Hz', label: 'Frequency position' },
      { value: 'Energy', label: 'Shown as luminous intensity' }
    ] },
    { type: 'title', text: 'Reading Formants Without Overstating the Result', level: 3 },
    { type: 'paragraph', html: 'Formants are resonant regions shaped by the vocal tract. F1 and F2 are often used in phonetics to discuss vowel height and place. This analyzer traces broad smoothed peaks in three frequency regions so beginners can connect visible bands with approximate F1, F2, and F3 behavior.' },
    { type: 'paragraph', html: 'Professional formant measurement normally uses a carefully configured linear predictive coding workflow, checks the tracking by eye, and adapts the formant ceiling to the speaker and vowel. Pitch harmonics, nasalization, room reflections, lossy compression, background noise, and weak recording levels can all pull a simple peak estimate away from the vocal tract resonance of interest. The guides here intentionally expose broad regions and average values for learning. If a guide jumps between bands or conflicts with the visible spectrum, treat that disagreement as a reason to inspect the recording and settings rather than as hidden evidence.' },
    { type: 'table', headers: ['Guide', 'Search region', 'Useful interpretation'], rows: [
      ['F1', '180 to 1000 Hz', 'A broad first resonance region often associated with vowel openness'],
      ['F2', '900 to 3000 Hz', 'A broad second resonance region often associated with front and back vowel position'],
      ['F3', '2000 to 4500 Hz', 'A higher resonance region affected by vocal tract shape and articulation']
    ] },
    { type: 'title', text: 'Why Analysis Settings Change the Picture', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Lower Ceiling', description: 'A 4 kHz ceiling gives more visual space to lower speech frequencies.', points: ['Useful for a close look at lower resonances', 'May exclude higher energy', 'Does not guarantee more accurate formants'] },
      { title: 'Higher Ceiling', description: 'A 6 or 8 kHz ceiling includes more upper spectrum detail.', highlight: true, points: ['Useful for brighter voices and broadband sounds', 'Shows frication and upper harmonics', 'Compresses lower bands vertically'] }
    ] },
    { type: 'title', text: 'A Responsible Two Sample Comparison', level: 3 },
    { type: 'paragraph', html: 'Comparing two plates is most useful when the recordings contain the same vowel, word, or short phrase and were made with similar microphones and environments. The displayed gaps are absolute differences between average peak positions. They do not model within speaker variability, between speaker variability, channel mismatch, speaking style, health, age, or the probability of competing explanations. For that reason the analyzer never converts a gap into a match percentage, identity badge, or forensic conclusion.' },
    { type: 'list', items: [
      '<strong>Match the spoken material:</strong> repeated vowels or words are easier to compare than unrelated phrases.',
      '<strong>Use similar recording conditions:</strong> microphones, compression, background noise, and distance can alter the spectrum.',
      '<strong>Listen with the cursor:</strong> connect a visible event to the exact moment that produced it.',
      '<strong>Avoid identity claims:</strong> a similar looking spectrogram does not prove that two recordings share a speaker.'
    ] },
    { type: 'summary', title: 'What This Analyzer Is For', items: [
      'Generate an audio spectrogram locally from common browser decodable files.',
      'Explore two samples in mirrored or parallel plates with synchronized playback.',
      'Learn how spectral energy and approximate formant regions change across a recording.',
      'Keep comparison descriptive and educational rather than forensic or biometric.'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
