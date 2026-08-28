import {
  DEFAULT_PRESET_ID,
  MAX_LOCI,
  MIN_LOCI,
  calculateProfile,
  getPreset,
  type LocusInput,
} from './logic';
import { renderElectropherogram, renderResults, type ResultTargets } from './dom-views';
import { loadProfileState, saveProfileState, type SavedProfileState } from './storage';
import type { DnaProfileMatchProbabilityUI } from './ui';

function uiText(ui: DnaProfileMatchProbabilityUI, key: string): string {
  return ui[key] ?? '';
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? '');
}

function inputValue(card: HTMLElement, field: string): string {
  return card.querySelector<HTMLInputElement>(`[data-field="${field}"]`)?.value.trim() ?? '';
}

function readLocus(card: HTMLElement): LocusInput {
  return {
    name: inputValue(card, 'name'),
    allele1: inputValue(card, 'allele1'),
    allele2: inputValue(card, 'allele2'),
    frequency1: Number(inputValue(card, 'frequency1')) / 100,
    frequency2: Number(inputValue(card, 'frequency2')) / 100,
  };
}

function readLoci(root: HTMLElement): LocusInput[] {
  return [...root.querySelectorAll<HTMLElement>('[data-locus-card]')].map(readLocus);
}

function fieldMarkup(label: string, field: string, value: string, type: string): string {
  return `<label class="dna-match-field"><span>${escapeHtml(label)}</span><input data-field="${field}" type="${type}" value="${escapeHtml(value)}" ${type === 'number' ? 'min="0.01" max="100" step="0.01"' : ''} /></label>`;
}

function locusMarkup(locus: LocusInput, index: number, ui: DnaProfileMatchProbabilityUI): string {
  const name = locus.name || `${uiText(ui, 'locus')} ${index + 1}`;
  return `<details class="dna-match-locus" data-locus-card ${index === 0 ? 'open' : ''}><summary><span data-locus-title>${escapeHtml(name)}</span><span data-locus-summary>${escapeHtml(locus.allele1)} / ${escapeHtml(locus.allele2)}</span></summary><div class="dna-match-locus-fields">${fieldMarkup(uiText(ui, 'locusName'), 'name', locus.name, 'text')}${fieldMarkup(uiText(ui, 'alleleA'), 'allele1', locus.allele1, 'text')}${fieldMarkup(uiText(ui, 'alleleB'), 'allele2', locus.allele2, 'text')}${fieldMarkup(uiText(ui, 'frequencyA'), 'frequency1', String(locus.frequency1 * 100), 'number')}${fieldMarkup(uiText(ui, 'frequencyB'), 'frequency2', String(locus.frequency2 * 100), 'number')}<button type="button" class="dna-match-remove" data-remove-locus>${escapeHtml(uiText(ui, 'removeLocus'))}</button></div></details>`;
}

function appendLocus(list: HTMLElement, locus: LocusInput, index: number, ui: DnaProfileMatchProbabilityUI): void {
  list.insertAdjacentHTML('beforeend', locusMarkup(locus, index, ui));
}

function replaceLoci(list: HTMLElement, loci: LocusInput[], ui: DnaProfileMatchProbabilityUI): void {
  list.replaceChildren();
  loci.forEach((locus, index) => appendLocus(list, locus, index, ui));
}

function updateRemoveButtons(root: HTMLElement, ui: DnaProfileMatchProbabilityUI): void {
  const disabled = root.querySelectorAll('[data-locus-card]').length <= MIN_LOCI;
  root.querySelectorAll<HTMLButtonElement>('[data-remove-locus]').forEach((button) => {
    button.disabled = disabled;
  });
  const count = root.querySelector<HTMLElement>('[data-locus-count]');
  if (count) count.textContent = `${root.querySelectorAll('[data-locus-card]').length} ${uiText(ui, 'loci')}`;
}

function updateLocusSummaries(root: HTMLElement, ui: DnaProfileMatchProbabilityUI): void {
  root.querySelectorAll<HTMLElement>('[data-locus-card]').forEach((card, index) => {
    const name = inputValue(card, 'name') || `${uiText(ui, 'locus')} ${index + 1}`;
    const alleles = `${inputValue(card, 'allele1') || '?'} / ${inputValue(card, 'allele2') || '?'}`;
    const title = card.querySelector<HTMLElement>('[data-locus-title]');
    const summary = card.querySelector<HTMLElement>('[data-locus-summary]');
    if (title) title.textContent = name;
    if (summary) summary.textContent = alleles;
  });
}

function profilesMatch(first: LocusInput[], second: LocusInput[]): boolean {
  return first.length === second.length && first.every((locus, index) => {
    const other = second[index];
    return other !== undefined && JSON.stringify(locus) === JSON.stringify(other);
  });
}

function syncPresetButtons(root: HTMLElement, loci: LocusInput[]): void {
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => {
    const preset = getPreset(button.dataset.preset ?? DEFAULT_PRESET_ID);
    button.classList.toggle('is-active', profilesMatch(loci, preset.loci));
  });
}

function resultTargets(root: HTMLElement): ResultTargets | null {
  const badge = root.querySelector<HTMLElement>('[data-result="badge"]');
  const detail = root.querySelector<HTMLElement>('[data-result="detail"]');
  const combined = root.querySelector<HTMLElement>('[data-result="combined"]');
  const probability = root.querySelector<HTMLElement>('[data-result="probability"]');
  const table = root.querySelector<HTMLTableSectionElement>('[data-result="table"]');
  if (!badge || !detail || !combined || !probability || !table) return null;
  return { badge, detail, combined, probability, table };
}

function update(root: HTMLElement, ui: DnaProfileMatchProbabilityUI): void {
  const loci = readLoci(root);
  const result = calculateProfile(loci);
  const scene = root.querySelector<HTMLElement>('[data-electropherogram]');
  const targets = resultTargets(root);
  if (scene) renderElectropherogram(scene, loci, ui);
  if (targets) renderResults(targets, result, ui);
  updateLocusSummaries(root, ui);
  saveProfileState({ loci });
  updateRemoveButtons(root, ui);
  syncPresetButtons(root, loci);
}

function bindPresetButtons(root: HTMLElement, list: HTMLElement, ui: DnaProfileMatchProbabilityUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => {
    button.addEventListener('click', () => {
      replaceLoci(list, getPreset(button.dataset.preset ?? DEFAULT_PRESET_ID).loci, ui);
      root.querySelectorAll('[data-preset]').forEach((item) => item.classList.toggle('is-active', item === button));
      update(root, ui);
    });
  });
}

function bindLocusActions(root: HTMLElement, list: HTMLElement, ui: DnaProfileMatchProbabilityUI): void {
  list.addEventListener('input', () => update(root, ui));
  list.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const remove = target.closest<HTMLButtonElement>('[data-remove-locus]');
    if (!remove) return;
    remove.closest('[data-locus-card]')?.remove();
    update(root, ui);
  });
}

function bindAddButton(root: HTMLElement, list: HTMLElement, ui: DnaProfileMatchProbabilityUI): void {
  root.querySelector<HTMLButtonElement>('[data-add-locus]')?.addEventListener('click', () => {
    if (list.querySelectorAll('[data-locus-card]').length >= MAX_LOCI) return;
    const index = list.querySelectorAll('[data-locus-card]').length;
    appendLocus(list, { name: `${uiText(ui, 'locus')} ${index + 1}`, allele1: '', allele2: '', frequency1: 0, frequency2: 0 }, index, ui);
    update(root, ui);
  });
}

function restore(list: HTMLElement, ui: DnaProfileMatchProbabilityUI): void {
  const fallback: SavedProfileState = { loci: getPreset(DEFAULT_PRESET_ID).loci };
  const saved = loadProfileState(fallback);
  const loci = saved.loci.length >= MIN_LOCI && saved.loci.length <= MAX_LOCI ? saved.loci : fallback.loci;
  replaceLoci(list, loci, ui);
}

export function startDnaProfileMatch(root: HTMLElement, ui: DnaProfileMatchProbabilityUI): void {
  const list = root.querySelector<HTMLElement>('[data-locus-list]');
  if (!list) return;
  restore(list, ui);
  bindPresetButtons(root, list, ui);
  bindLocusActions(root, list, ui);
  bindAddButton(root, list, ui);
  update(root, ui);
}
