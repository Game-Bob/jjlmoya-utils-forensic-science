import type { DnaProfileMatchProbabilityUI } from './ui';
import type { LocusInput, ProfileMatchResult } from './logic';
import { evaluateProfile } from './evaluator';

export interface ResultTargets {
  badge: HTMLElement;
  detail: HTMLElement;
  combined: HTMLElement;
  probability: HTMLElement;
  table: HTMLTableSectionElement;
}

function uiText(ui: DnaProfileMatchProbabilityUI, key: string): string {
  return ui[key] ?? '';
}

function formatPercent(value: number): string {
  const percent = value * 100;
  return percent > 0 && percent < 0.01 ? `${percent.toExponential(2)}%` : `${percent.toFixed(2)}%`;
}

function formatOneIn(log10Probability: number): string {
  if (log10Probability >= -3) return `1 in ${Math.round(10 ** -log10Probability)}`;
  const exponent = Math.floor(-log10Probability);
  const mantissa = 10 ** (-log10Probability - exponent);
  return `1 in ${mantissa.toFixed(1)} × 10^${exponent}`;
}

function addCell(row: HTMLTableRowElement, value: string): void {
  const cell = document.createElement('td');
  cell.textContent = value;
  row.append(cell);
}

function renderTable(target: HTMLTableSectionElement, result: ProfileMatchResult, ui: DnaProfileMatchProbabilityUI): void {
  target.replaceChildren();
  result.loci.forEach((locus) => {
    const row = document.createElement('tr');
    addCell(row, locus.name || uiText(ui, 'missingValue'));
    addCell(row, `${locus.allele1 || '?'} / ${locus.allele2 || '?'}`);
    addCell(row, locus.errors.length > 0 ? uiText(ui, 'badgeNeedsData') : locus.formula);
    addCell(row, locus.errors.length > 0 ? uiText(ui, 'badgeNeedsData') : formatPercent(locus.genotypeFrequency));
    target.append(row);
  });
}

function peakHeight(frequency: number): string {
  return `${Math.max(12, Math.min(92, frequency * 220))}%`;
}

function renderPeak(track: HTMLElement, allele: string, frequency: number, color: string): void {
  const peak = document.createElement('span');
  peak.className = 'dna-match-peak';
  peak.style.height = peakHeight(frequency);
  peak.style.backgroundColor = color;
  peak.setAttribute('data-allele', allele || '?');
  track.append(peak);
}

export function renderElectropherogram(target: HTMLElement, loci: LocusInput[], ui: DnaProfileMatchProbabilityUI): void {
  target.replaceChildren();
  loci.forEach((locus, index) => {
    const lane = document.createElement('div');
    lane.className = 'dna-match-lane';
    lane.setAttribute('aria-label', `${locus.name || `${uiText(ui, 'locus')} ${index + 1}`}: ${locus.allele1} / ${locus.allele2}`);
    const name = document.createElement('strong');
    name.textContent = locus.name || `${uiText(ui, 'locus')} ${index + 1}`;
    const track = document.createElement('div');
    track.className = 'dna-match-track';
    renderPeak(track, locus.allele1, locus.frequency1, 'var(--n-coral)');
    renderPeak(track, locus.allele2, locus.frequency2, 'var(--n-cyan)');
    const alleles = document.createElement('span');
    alleles.className = 'dna-match-alleles';
    alleles.textContent = `${locus.allele1 || '?'} · ${locus.allele2 || '?'}`;
    lane.append(name, track, alleles);
    target.append(lane);
  });
}

export function renderResults(targets: ResultTargets, result: ProfileMatchResult, ui: DnaProfileMatchProbabilityUI): void {
  const evaluation = evaluateProfile(result);
  targets.badge.textContent = ui[evaluation.badgeKey] ?? uiText(ui, 'badgeNeedsData');
  targets.badge.dataset.level = evaluation.level;
  targets.detail.textContent = ui[evaluation.detailKey] ?? uiText(ui, 'needsData');
  if (evaluation.level === 'invalid') {
    targets.combined.textContent = uiText(ui, 'notCalculated');
    targets.probability.textContent = uiText(ui, 'completeFields');
  } else {
    targets.combined.textContent = formatOneIn(result.log10CombinedProbability);
    targets.probability.textContent = `${formatPercent(result.combinedProbability)} ${uiText(ui, 'ofRandomProfiles')}`;
  }
  renderTable(targets.table, result, ui);
}
