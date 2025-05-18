interface HelperContextType {
  isDarkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  toggleDarkMode: () => void;

  isSidebarHidden: boolean;
  setSidebarHidden: (mode: boolean) => void;
  toggleSidebarHidden: () => void;
}

interface PageTypeType {
  isMatchOne: boolean;
  isMatchAll: boolean;
  isAggregation: boolean;
  isCrossComparison: boolean;

  isLP: boolean; // if False patch is selected if True League

  selectedLeagueId: number | null;
  selectedPatchId: number | null;
  selectedCalculationId: number;

  selectedPT: string; // Player or Team

  selectedMatchId: number | null;
  selectedComparison: string;
  selectedComparisonType: string;

  selectedDataType: string;
  
  selectedAggregationType: number;

  selectedCrossComparisonType: number;
  selectedCrossComparisonPosition: number;
}

interface ItemType {
  title: string;
  value: number;
}

interface ItemCategoryType {
  title: string;
  description: string;
  value: number;
  items: ItemType[];
}

type ComputationItemType = ItemCategoryType | ItemType;

interface InitialDataType {
  computations: ComputationItemType[];
  patch: ItemType[];
  league: ItemType[];
}

export type {
  ComputationItemType, HelperContextType, InitialDataType, PageTypeType
};
