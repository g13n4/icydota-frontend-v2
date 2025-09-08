export default function getBooleanFormatting(value: number | null | undefined) {
  if (value === null || value === undefined) return null;
  return value > 0 ? "Yes" : "No";
}
