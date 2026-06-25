import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('SEO Content Length Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(tool.entry.i18n).forEach((locale) => {
        it(`${locale}: SEO section should contain at least 300 words`, async () => {
          const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
          if (loader) {
            const content = (await loader()) as ToolLocaleContent;
            expect(Array.isArray(content.seo)).toBe(true);

            let textContent = '';
            content.seo.forEach((item) => {
              if (item.type === 'title' && item.text) {
                textContent += ' ' + item.text;
              } else if (item.type === 'paragraph' && item.html) {
                textContent += ' ' + item.html;
              } else if (item.type === 'table') {
                if (item.headers) {
                  textContent += ' ' + item.headers.join(' ');
                }
                if (item.rows) {
                  item.rows.forEach((row) => {
                    textContent += ' ' + row.join(' ');
                  });
                }
              }
            });

            const cleanText = textContent.replace(/<[^>]*>/g, ' ').trim();
            const words = cleanText.split(/\s+/).filter((w) => w.length > 0);

            const isCjk = ['zh', 'ja', 'ko'].includes(locale);
            const count = isCjk ? cleanText.replace(/\s+/g, '').length : words.length;

            expect(count).toBeGreaterThanOrEqual(300);
          }
        });
      });
    });
  });
});

