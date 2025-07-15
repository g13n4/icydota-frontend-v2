import numberToTime from "@/lib/numberToTime";

export default function getTimeStyling(value: number | null) {
  if (value === null) return null;
  return numberToTime(value);
}
