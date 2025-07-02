export default function getBooleanStyling(
  value: number | null,
  toBoolean: boolean,
) {
  if (value === null) return null;
  if (toBoolean) {
    return value > 0 ? "Yes" : "No";
  }
  return `%${(value * 100).toFixed(1)}`;
}
