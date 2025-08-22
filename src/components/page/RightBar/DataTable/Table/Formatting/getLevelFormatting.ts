export default function getLevelFormatting(value: number | null) {
    if (value === null) return null;
    return `${(value)} lvl`;
  }
    