export function toggleDropdownExpanded(trigger: HTMLButtonElement, container: Element) {
  const isOpen = trigger.getAttribute('aria-expanded') === 'true';
  closeAllDropdowns();
  if (!isOpen) {
    trigger.setAttribute('aria-expanded', 'true');
    container.classList.remove('hidden');
  }
}

export function setupCustomDropdown(dropdownId: string, onSelect: (val: string) => void) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;
  const trigger = dropdown.querySelector('.custom-select-trigger') as HTMLButtonElement | null;
  const container = dropdown.querySelector('.custom-select-options');
  const input = dropdown.querySelector('input[type="hidden"]') as HTMLInputElement | null;
  const triggerText = dropdown.querySelector('.custom-select-trigger-text');

  if (!trigger || !container || !input) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdownExpanded(trigger, container);
  });

  const options = container.querySelectorAll('.custom-select-option');
  options.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = option.getAttribute('data-value') || '';
      input.value = val;
      if (triggerText) triggerText.textContent = option.textContent;
      trigger.setAttribute('aria-expanded', 'false');
      container.classList.add('hidden');
      onSelect(val);
      options.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
    });
  });
}

export function closeAllDropdowns() {
  document.querySelectorAll('.custom-select-trigger').forEach(trig => {
    trig.setAttribute('aria-expanded', 'false');
  });
  document.querySelectorAll('.custom-select-options').forEach(opts => {
    opts.classList.add('hidden');
  });
}

export function syncDropdown(id: string, val: string) {
  const opt = document.querySelector(`#${id} .custom-select-option[data-value="${val}"]`);
  const triggerText = document.querySelector(`#${id} .custom-select-trigger-text`);
  if (opt && triggerText) {
    triggerText.textContent = opt.textContent;
    document.querySelectorAll(`#${id} .custom-select-option`).forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
  }
}

export function restoreValue(input: HTMLInputElement | null, val: unknown) {
  if (input && val !== undefined && val !== null) {
    input.value = String(val);
  }
}

export function restoreSelectable(input: HTMLInputElement | null, val: unknown, dropdownId: string) {
  if (input && val) {
    input.value = String(val);
    syncDropdown(dropdownId, String(val));
  }
}
