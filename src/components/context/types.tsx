import type {
  ItemStringType,
  LoPTypeType,
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
  LoPType: LoPTypeType;

  selectedLeagueId: string | null;
  selectedPatchId: string | null;

  selectedCalculationId: string;

  selectedPT: selectedPTType; // Player or Team

  selectedMatchId: number | string;
  selectedComparison: string; // query param
  selectedComparisonType: string; // query param
  selectedLaneOrGame: string; // query param

  selectedAggregationType: number | string;

  selectedCrossComparisonComparison: string; // query param
  selectedCrossComparisonType: string;
  selectedCrossComparisonPosition: string; // query param
  selectedCrossComparisonFieldTotal: string; // query param
  selectedCrossComparisonFieldWindow: string; // query param
}

type OptionalPageTypeType = Partial<PageTypeType>;

interface ItemCategoryType {
  label: string;
  description: string;
  value: string;
  items: ItemStringType[];
}

interface NameMapType {
  heroes: Record<string, string>;
  facets: Record<string, string>;
  sideCalc: Record<string, string>;
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
  LoPTypeType,
  OptionalPageTypeType,
  PageTypeType,
  selectedDataFormatType,
  selectedPTType
};

