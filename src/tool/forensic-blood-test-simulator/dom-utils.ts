export interface PetriReactionOptions {
  color: string;
  glow: boolean;
  glowColor: string;
  opacity: number;
}

export function animateDrop(dropEl: HTMLElement | null, dishEl: HTMLElement | null, onFinish: () => void) {
  if (!dropEl || !dishEl) {
    onFinish();
    return;
  }

  dropEl.classList.remove('animating');
  requestAnimationFrame(() => {
    dropEl.classList.add('animating');
  });

  setTimeout(() => {
    dropEl.classList.remove('animating');
    onFinish();
  }, 600);
}

export function applyPetriReaction(
  dishEl: HTMLElement | null,
  options: PetriReactionOptions
) {
  if (!dishEl) return;
  dishEl.style.backgroundColor = options.color;
  if (options.glow) {
    dishEl.style.boxShadow = `inset 0 0 40px ${options.glowColor}, 0 0 50px ${options.glowColor}`;
    dishEl.style.borderColor = options.glowColor;
    dishEl.style.opacity = String(options.opacity);
  } else {
    dishEl.style.boxShadow = 'none';
    dishEl.style.borderColor = '';
    dishEl.style.opacity = '1';
  }
}
