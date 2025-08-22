import numberToTime from "@/lib/numberToTime";

export default function getTimeStyling(value: number | null) {
  if (value === null) return null;
  if (value > 0) return numberToTime(value);
  
  const formattedValue = numberToTime(Math.abs(value))
  return `-${formattedValue}`;
}
