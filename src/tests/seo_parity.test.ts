import { describe, it, expect } from 'vitest';
import { ALL_ENTRIES } from '../entries';
import type { KnownLocale } from '../types';

interface ExpectedCounts {
  faq: number;
  howTo: number;
}

function countItems(arr: unknown[] | undefined): number {
  return arr?.length ?? 0;
}

async function verifyLocaleParity(
  entry: typeof ALL_ENTRIES[number],
  loc: KnownLocale,
  expected: ExpectedCounts,
): Promise<void> {
  const locContent = await entry.i18n[loc]?.();
  expect(locContent, `Locale ${loc} missing content`).toBeDefined();

  const locSeoCount = countItems(locContent?.seo);
  const locFaqCount = countItems(locContent?.faq);
  const locHowToCount = countItems(locContent?.howTo);

  expect(locSeoCount, `Locale ${loc} must provide SEO content`).toBeGreaterThan(0);
  expect(
    locFaqCount,
    `Locale ${loc} FAQ items count (${locFaqCount}) must match EN (${expected.faq})`,
  ).toBe(expected.faq);
  expect(
    locHowToCount,
    `Locale ${loc} HowTo steps count (${locHowToCount}) must match EN (${expected.howTo})`,
  ).toBe(expected.howTo);
}

describe('SEO & i18n Structural Parity Suite', () => {
  ALL_ENTRIES.forEach((entry) => {
    describe(`Tool: ${entry.id}`, () => {
      it('all 15 locales should provide SEO content and preserve FAQ and HowTo structure', async () => {
        const enContent = await entry.i18n.en?.();
        expect(enContent).toBeDefined();
        const expected: ExpectedCounts = {
          faq: countItems(enContent?.faq),
          howTo: countItems(enContent?.howTo),
        };

        const locales = Object.keys(entry.i18n) as KnownLocale[];
        for (const loc of locales) {
          await verifyLocaleParity(entry, loc, expected);
        }
      });
    });
  });
});
