import numberToTime from "@/lib/numberToTime";

export default function getTimeStyling(value: number | null | undefined) {
  if (value === null || value === undefined) return null;
  if (value > 0) return numberToTime(value);
  
  const formattedValue = numberToTime(Math.abs(value))
  return `-${formattedValue}`;
}
