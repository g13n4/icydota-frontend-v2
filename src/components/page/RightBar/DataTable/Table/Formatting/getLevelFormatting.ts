export default function getLevelFormatting(value: number | null | undefined) {
    if (value === null || value === undefined) return null;
    return `${(value)} lvl`;
  }
    