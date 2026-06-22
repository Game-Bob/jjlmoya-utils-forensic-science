import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { crystalCatalogTranslations } from './crystal-lattice-catalog-translations.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const i18nDir = join(root, 'src/tool/crystal-lattice-structure-finder/i18n');

const shortNames = {
  shortSimpleCubic: 'SC',
  shortFaceCenteredCubic: 'FCC',
  shortHexagonalClosePacked: 'HCP',
  shortBodyCenteredCubic: 'BCC',
  shortDiamondCubic: 'DC',
  shortRockSalt: 'NaCl',
  shortCesiumChloride: 'CsCl',
  shortZincBlende: 'ZnS',
  shortWurtzite: 'WZ',
  shortPerovskite: 'ABO3',
  shortRutile: 'TiO2',
};

const catalogKeys = Object.keys(crystalCatalogTranslations.en);
const managedKeys = [...Object.keys(shortNames), ...catalogKeys];

function quote(value) {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

function renderBlock(locale) {
  const values = crystalCatalogTranslations[locale];
  if (!values) throw new Error(`Missing crystal catalog translations for locale: ${locale}`);
  return Object.entries({ ...shortNames, ...values }).map(([key, value]) => `    ${key}: ${quote(value)},`).join('\n');
}

function insertBlock(text, block) {
  const withoutOldMarkers = text.replace(/\s*\/\/ crystal-catalog:start[\s\S]*?\/\/ crystal-catalog:end\r?\n?/g, '\n');
  const managedKeyPattern = new RegExp(`^\\s*(?:${managedKeys.join('|')}): .*?,\\r?\\n`, 'gm');
  const withoutManagedKeys = withoutOldMarkers.replace(managedKeyPattern, '');

  const anchor = /^(\s*materialHaliteNote: .*,\r?\n)/m;
  if (!anchor.test(withoutManagedKeys)) throw new Error('Could not find materialHaliteNote insertion point.');
  return withoutManagedKeys.replace(anchor, `$1${block}\n`);
}

for (const locale of Object.keys(crystalCatalogTranslations).sort()) {
  const file = join(i18nDir, `${locale}.ts`);
  const text = await readFile(file, 'utf8');
  await writeFile(file, insertBlock(text, renderBlock(locale)), 'utf8');
}
