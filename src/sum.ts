

export default function sum(numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe('sum()', () => {
    it('returns 0 with no numbers', () => {
      expect(sum([])).toBe(0);
    });
  });
}
