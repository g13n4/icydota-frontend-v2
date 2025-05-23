import type {
  ItemNymericType,
  leaguePachTypeType,
  selectedDataFormatType,
  selectedPTType,
} from "@/types/types";

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

  selectedDataFormat: selectedDataFormatType;

  isLP: boolean; // if False patch is selected if True League
  leaguePachType: leaguePachTypeType;

  selectedLeagueId: number | null;
  selectedPatchId: number | null;
  selectedCalculationId: number | string;

  selectedPT: selectedPTType; // Player or Team

  selectedMatchId: number | string | null;
  selectedComparison: string; // query param
  selectedComparisonType: string; // query param

  selectedAggregationType: number | string;

  selectedCrossComparisonType: number | string;
  selectedCrossComparisonPosition: number | string; // query param
  selectedCrossComparisonField: string; // query param
}

type OptionalPageTypeType = Partial<PageTypeType>;

interface ItemCategoryType {
  label: string;
  description: string;
  value: number;
  items: ItemNymericType[];
}

type ComputationItemType = ItemCategoryType | ItemNymericType;

interface InitialDataType {
  computations: ComputationItemType[];
  patch: ItemNymericType[];
  league: ItemNymericType[];
}

export type {
  ComputationItemType,
  HelperContextType, InitialDataType,
  leaguePachTypeType, OptionalPageTypeType, PageTypeType,
  selectedDataFormatType,
  selectedPTType
};

