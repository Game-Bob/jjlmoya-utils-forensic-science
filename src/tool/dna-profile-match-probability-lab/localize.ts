import { bibliography } from './bibliography';
import type { ToolLocaleContent } from '../../types';
import type { DnaProfileMatchProbabilityUI } from './ui';

interface DnaLocaleCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  ui: DnaProfileMatchProbabilityUI;
  seo: {
    calculatorTitle: string;
    intro: string;
    methodTitle: string;
    method: string;
    populationTitle: string;
    population: string;
    limitsTitle: string;
    limits: string;
    interpretation?: string;
    application?: string;
    tipTitle: string;
    tip: string;
    list: string[];
  };
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
}

function uiText(ui: DnaProfileMatchProbabilityUI, key: string): string {
  return ui[key] ?? '';
}

export function createDnaLocale(copy: DnaLocaleCopy): ToolLocaleContent<DnaProfileMatchProbabilityUI> {
  return {
    slug: copy.slug,
    title: copy.title,
    description: copy.description,
    ui: copy.ui,
    seo: buildSeo(copy),
    faq: copy.faq,
    bibliography,
    howTo: copy.howTo,
    schemas: buildSchemas(copy),
  };
}

function buildSeo(copy: DnaLocaleCopy): ToolLocaleContent['seo'] {
  const { seo, ui } = copy;
  const sections: ToolLocaleContent['seo'] = [
      { type: 'title', text: seo.calculatorTitle, level: 2 },
      { type: 'paragraph', html: seo.intro },
      { type: 'title', text: seo.methodTitle, level: 3 },
      {
        type: 'table',
        headers: [uiText(ui, 'pattern'), uiText(ui, 'calculation'), uiText(ui, 'meaning')],
        rows: [
          [uiText(ui, 'homozygote'), 'p²', uiText(ui, 'homozygoteMeaning')],
          [uiText(ui, 'heterozygote'), '2pq', uiText(ui, 'heterozygoteMeaning')],
          [uiText(ui, 'independentLoci'), '×', uiText(ui, 'independentLociMeaning')],
        ],
      },
      { type: 'paragraph', html: seo.method },
      { type: 'title', text: seo.populationTitle, level: 3 },
      { type: 'paragraph', html: seo.population },
      ...optionalContext(seo),
      { type: 'list', items: seo.list },
      { type: 'title', text: seo.limitsTitle, level: 3 },
      { type: 'tip', title: seo.tipTitle, html: seo.tip },
      { type: 'paragraph', html: seo.limits },
  ];
  return sections;
}

function optionalContext(seo: DnaLocaleCopy['seo']): ToolLocaleContent['seo'] {
  const text = [seo.interpretation, seo.application].filter(Boolean).join(' ');
  return text ? [{ type: 'paragraph', html: text }] : [];
}

function buildSchemas(copy: DnaLocaleCopy): ToolLocaleContent['schemas'] {
  return [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: copy.title,
        description: copy.description,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        inLanguage: copy.locale,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: copy.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: copy.title,
        step: copy.howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
      },
  ];
}
