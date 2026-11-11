import { describe, expect, it } from 'vitest';
import { wuerfeln } from './wuerfel';

describe('wuerfeln', () => {
  it('liefert bei vielen Würfen nur ganze Zahlen von 1 bis 6', () => {
    for (let i = 0; i < 10_000; i++) {
      const zahl = wuerfeln();
      expect(Number.isInteger(zahl)).toBe(true);
      expect(zahl).toBeGreaterThanOrEqual(1);
      expect(zahl).toBeLessThanOrEqual(6);
    }
  });

  it('kommt bei vielen Würfen auf jede Zahl von 1 bis 6', () => {
    const gesehen = new Set<number>();
    for (let i = 0; i < 10_000; i++) gesehen.add(wuerfeln());
    expect([...gesehen].sort()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('bildet die Grenzwerte des Zufalls korrekt ab', () => {
    expect(wuerfeln(() => 0)).toBe(1);
    expect(wuerfeln(() => 0.999999)).toBe(6);
    expect(wuerfeln(() => 0.5)).toBe(4);
  });
});
