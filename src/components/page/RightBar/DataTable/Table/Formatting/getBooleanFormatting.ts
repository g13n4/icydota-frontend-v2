export default function getBooleanFormatting(value: number | null) {
  if (value === null) return null;
  return value > 0 ? "Yes" : "No";
}
