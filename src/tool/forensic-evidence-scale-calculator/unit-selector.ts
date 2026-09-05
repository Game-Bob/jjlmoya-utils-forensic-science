import type { MeasurementUnit } from "./logic";

interface UnitSelector {
  choice: HTMLElement;
  trigger: HTMLButtonElement;
  label: HTMLElement;
  menu: HTMLElement;
  options: HTMLButtonElement[];
}

const getElement = <T extends Element>(
  root: ParentNode,
  selector: string,
): T | null => root.querySelector<T>(selector);

const getSelector = (root: HTMLElement): UnitSelector | null => {
  const choice = getElement<HTMLElement>(root, "[data-unit-choice]");
  const trigger = getElement<HTMLButtonElement>(root, "[data-unit-trigger]");
  const label = getElement<HTMLElement>(root, "[data-unit-label]");
  const menu = getElement<HTMLElement>(root, "[data-unit-menu]");
  if (!choice || !trigger || !label || !menu) return null;
  return {
    choice,
    trigger,
    label,
    menu,
    options: Array.from(
      menu.querySelectorAll<HTMLButtonElement>("[data-unit-option]"),
    ),
  };
};

const setUnit = (selector: UnitSelector, unit: MeasurementUnit): void => {
  const hidden = getElement<HTMLInputElement>(selector.choice, '[name="unit"]');
  if (hidden) hidden.value = unit;
  selector.options.forEach((option) => {
    const selected = option.dataset.unitOption === unit;
    option.setAttribute("aria-selected", String(selected));
    if (selected) selector.label.textContent = option.textContent?.trim() ?? "";
  });
};

const bindTrigger = (
  selector: UnitSelector,
  open: () => void,
  close: () => void,
): void => {
  selector.trigger.addEventListener("click", () => {
    if (selector.menu.hidden) open();
    else close();
  });
  selector.trigger.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowDown" && event.key !== "Enter" && event.key !== " ")
      return;
    event.preventDefault();
    open();
    selector.options[0]?.focus();
  });
};

interface OptionContext {
  selector: UnitSelector;
  close: () => void;
  onChange: () => void;
}

const bindOption = (
  { selector, close, onChange }: OptionContext,
  option: HTMLButtonElement,
  index: number,
): void => {
  option.addEventListener("click", () => {
    setUnit(selector, option.dataset.unitOption as MeasurementUnit);
    close();
    onChange();
    selector.trigger.focus();
  });
  option.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      selector.trigger.focus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      selector.options[
        (index + direction + selector.options.length) % selector.options.length
      ]?.focus();
    }
  });
};

export const setupUnitSelector = (
  root: HTMLElement,
  onChange: () => void,
): void => {
  const selector = getSelector(root);
  if (!selector || selector.options.length === 0) return;
  const close = (): void => {
    selector.menu.hidden = true;
    selector.trigger.setAttribute("aria-expanded", "false");
  };
  const open = (): void => {
    selector.menu.hidden = false;
    selector.trigger.setAttribute("aria-expanded", "true");
  };
  bindTrigger(selector, open, close);
  selector.options.forEach((option, index) =>
    bindOption({ selector, close, onChange }, option, index),
  );
  root.addEventListener("click", (event) => {
    if (event.target instanceof Node && !selector.choice.contains(event.target))
      close();
  });
  const initialUnit = getElement<HTMLInputElement>(
    root,
    '[name="unit"]',
  )?.value;
  setUnit(selector, (initialUnit ?? "mm") as MeasurementUnit);
};
