export default function getPercentFormatting(value: number | null | undefined) {
  if (value === null || value === undefined) return null;
  return `${(value * 100).toFixed(1)}%`;
}
  