export default function getPercentFormatting(value: number | null) {
  if (value === null) return null;
  return `${(value * 100).toFixed(1)}%`;
}
  