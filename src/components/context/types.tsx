import type {
  ItemStringType,
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

  selectedLeagueId: string | null;
  selectedPatchId: string | null;
  selectedCalculationId: string | string;

  selectedPT: selectedPTType; // Player or Team

  selectedMatchId: number | string | null;
  selectedComparison: string; // query param
  selectedComparisonType: string; // query param
  selectedLaneOrGame: string; // query param

  selectedAggregationType: number | string;

  selectedCrossComparisonType: string;
  selectedCrossComparisonPosition: string; // query param
  selectedCrossComparisonField: string; // query param
}

type OptionalPageTypeType = Partial<PageTypeType>;

interface ItemCategoryType {
  label: string;
  description: string;
  value: string;
  items: ItemStringType[];
}

interface InitialDataType {
  computations: ItemStringType[];
  patch: ItemStringType[];
  league: ItemStringType[];
}

export type {
  ItemCategoryType,
  HelperContextType,
  InitialDataType,
  leaguePachTypeType,
  OptionalPageTypeType,
  PageTypeType,
  selectedDataFormatType,
  selectedPTType
};

