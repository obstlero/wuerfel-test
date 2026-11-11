/**
 * Würfelt eine ganze Zahl von 1 bis 6.
 * `zufall` liefert eine Zahl in [0, 1) – standardmäßig Math.random.
 * So lässt sich die Funktion im Test mit festen Werten prüfen.
 */
export function wuerfeln(zufall: () => number = Math.random): number {
  return Math.floor(zufall() * 6) + 1;
}
