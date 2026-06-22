export function labelFor(ui: Record<string, string>, key: string, fallback: string): string {
  return ui[key] ?? fallback;
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function capitalizeId(value: string): string {
  return value.split('-').map(capitalize).join('');
}
