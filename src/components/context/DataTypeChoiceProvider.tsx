import { createContext, useContext } from "react";
import type { leaguePachTypeType, PageTypeType, selectedDataFormatType, selectedPTType } from "./types";

const PageTypeDefaultState = {
  isMatchOne: false,
  isMatchAll: false,
  isAggregation: false,
  isCrossComparison: false,

  isLP: true, // if False patch is selected if True League
  leaguePachType: "league" as leaguePachTypeType,

  selectedLeagueId: null,
  selectedPatchId: null,
  selectedCalculationId: "0",

  selectedPT: "player" as selectedPTType, // Player or Team

  selectedMatchId: "",
  selectedComparison: "none",
  selectedComparisonType: "basic",

  selectedLaneOrGame: "lane",
  selectedDataFormat: "match" as selectedDataFormatType,

  selectedAggregationType: "1",
  selectedCrossComparisonFieldTotal: "kda",
  selectedCrossComparisonFieldWindow: "l2",


  selectedCrossComparisonComparison: "flat",
  selectedCrossComparisonType: "1",
  selectedCrossComparisonPosition: "1",
};

const PageTypeContext = createContext<PageTypeType>(PageTypeDefaultState);

function usePageTypeContext(): PageTypeType {
  return useContext(PageTypeContext);
}

export { PageTypeContext, PageTypeDefaultState, usePageTypeContext };

