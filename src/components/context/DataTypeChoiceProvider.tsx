import { createContext, useContext } from "react";
import type { PageTypeType } from "./types";

const PageTypeDefaultState = {
  isMatchOne: false,
  isMatchAll: false,
  isAggregation: false,
  isCrossComparison: false,

  isLP: true, // if False patch is selected if True League 

  selectedLeagueId: null,
  selectedPatchId: null,
  selectedCalculationId: 0,

  selectedPT: "player", // Player or Team
  
  selectedMatchId: null,
  selectedComparison: "none",
  selectedComparisonType: "basic",

  selectedDataType: "match",
  
  selectedAggregationType: 1,

  selectedCrossComparisonType: 1,
  selectedCrossComparisonPosition: 1,  

};

const PageTypeContext = createContext<PageTypeType>(PageTypeDefaultState);

function usePageTypeContext(): PageTypeType {
  return useContext(PageTypeContext);
}

export { PageTypeContext, PageTypeDefaultState, usePageTypeContext };

