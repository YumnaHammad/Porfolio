export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Two-digit index used for editorial numbering: 01, 02, 03… */
export function ordinal(index: number) {
  return String(index + 1).padStart(2, "0");
}
