interface SelectorItem {
  id: number;
  name: string;
  background: string;
  dateStart: string | null;
  dateEnd: string | null;
}

interface LeaguePatchSelectorType {
  leagues: SelectorItem[]
  patches: SelectorItem[]
}

export type { SelectorItem };