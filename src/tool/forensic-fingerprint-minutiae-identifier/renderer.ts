import type { FingerprintClassification, MinutiaeSummary, MinutiaMark, MinutiaType } from './logic';

function setText(id: string, value: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

export function updateWorkflow(
  activeStep: number,
  ui: Record<string, string>,
  board: HTMLElement | null
): void {
  document.querySelectorAll<HTMLElement>('[data-fp-step]').forEach((item) => {
    const itemStep = Number(item.dataset.fpStep ?? 1);
    item.dataset.active = itemStep === activeStep ? 'true' : 'false';
    item.dataset.done = itemStep < activeStep ? 'true' : 'false';
  });
  document.querySelectorAll<HTMLElement>('[data-fp-panel]').forEach((panel) => {
    panel.dataset.active = Number(panel.dataset.fpPanel ?? 1) === activeStep ? 'true' : 'false';
  });
  if (board) {
    board.dataset.activeStep = String(activeStep);
  }
  setText('fp-stage-label', `${ui.stepLabel} ${activeStep}/4`);
  setText('fp-stage-title', ui[`stage${activeStep}Title`] ?? '');
  setText('fp-stage-copy', ui[`stage${activeStep}Copy`] ?? '');
}

export function updateUIStates(
  activeMinutia: MinutiaType,
  activePattern: string,
  limits: Record<MinutiaType, number>,
  canAdd: (type: MinutiaType) => boolean
): void {
  document.querySelectorAll<HTMLButtonElement>('[data-fp-pattern]').forEach((button) => {
    button.dataset.active = button.dataset.fpPattern === activePattern ? 'true' : 'false';
  });
  document.querySelectorAll<HTMLButtonElement>('[data-fp-minutia]').forEach((button) => {
    const type = (button.dataset.fpMinutia || 'ridgeEnding') as MinutiaType;
    button.dataset.active = type === activeMinutia ? 'true' : 'false';
    button.dataset.full = canAdd(type) ? 'false' : 'true';
    button.disabled = !canAdd(type) && type !== activeMinutia;
  });
}

export function updateActionButtons(
  selectedMark: MinutiaMark | undefined,
  ui: Record<string, string>,
  hasLastMark: boolean
): void {
  const deleteSelected = document.getElementById('fp-delete-selected') as HTMLButtonElement | null;
  const undo = document.getElementById('fp-undo') as HTMLButtonElement | null;
  if (deleteSelected) {
    deleteSelected.disabled = !selectedMark;
    deleteSelected.title = selectedMark ? `${ui.deleteSelected}: ${ui[selectedMark.type] ?? selectedMark.type}` : ui.selectMarkToDelete;
  }
  if (undo) {
    undo.disabled = !hasLastMark;
  }
}

export function updateClassifierLabels(
  classification: FingerprintClassification,
  coreVal: string,
  deltaVal: string,
  ui: Record<string, string>
): void {
  setText('fp-core-label', coreVal);
  setText('fp-delta-label', deltaVal);
  const henryLabel = ui[classification.henryLabel] ?? classification.henryLabel;
  const ridgeFlow = ui[classification.ridgeFlow] ?? classification.ridgeFlow;
  setText('fp-class', `${henryLabel} (${classification.confidence}%)`);
  setText('fp-class-review', `${henryLabel} (${classification.confidence}%)`);
  setText('fp-flow', ridgeFlow);
  setText('fp-flow-compact', ridgeFlow);
}

export function updateMinutiaeLabels(
  summary: MinutiaeSummary,
  activeMinutia: MinutiaType,
  ui: Record<string, string>,
  limits: Record<MinutiaType, number>
): void {
  (['ridgeEnding', 'bifurcation', 'island', 'dot'] as MinutiaType[]).forEach((type) => {
    setText(`fp-count-${type}`, `${summary.byType[type]}/${limits[type]}`);
  });
  setText('fp-active-minutia-label', ui.activeMinutia);
  setText('fp-active-minutia-title', ui[activeMinutia] ?? activeMinutia);
  setText('fp-active-minutia-copy', ui[`${activeMinutia}Help`] ?? '');
  setText('fp-score', `${summary.validationScore}%`);
  setText('fp-score-review', `${summary.validationScore}%`);
  setText('fp-total', String(summary.total));
  setText('fp-checklist', `${ui.endingsGoal}: ${summary.byType.ridgeEnding}/5 | ${ui.bifurcationsGoal}: ${summary.byType.bifurcation}/3 | ${ui.totalMarks}: ${summary.total}`);
}

interface RenderTableParams {
  marks: MinutiaMark[];
  colors: Record<MinutiaType, string>;
  ui: Record<string, string>;
  tableBody: HTMLElement | null;
  trashIconTemplate: HTMLTemplateElement | null;
}

export function renderTable(p: RenderTableParams): void {
  if (!p.tableBody) return;
  p.tableBody.innerHTML = '';
  p.marks.forEach((mark) => {
    const row = document.createElement('tr');
    const label = p.ui[mark.type] ?? mark.type;
    const trashIcon = p.trashIconTemplate?.innerHTML || p.ui.remove;
    row.innerHTML = `<td><span style="--dot:${p.colors[mark.type]}"></span>${label}</td><td>${mark.x.toFixed(1)}, ${mark.y.toFixed(1)}</td><td><button type="button" class="fp-icon-button" data-remove="${mark.id}" aria-label="${p.ui.remove} ${label}">${trashIcon}</button></td>`;
    p.tableBody.append(row);
  });
}
