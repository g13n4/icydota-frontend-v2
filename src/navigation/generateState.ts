import type { PageTypeType } from "src/components/context/types";

export default function generateState({
  data,
}: { data: PageTypeType }): PageTypeType {
  const isMatch = data.selectedDataFormat === "match";
  const isAggregation = data.selectedDataFormat === "aggregation";
  const isCrossComparison = data.selectedDataFormat === "cross-comparison";

  const isLeagueMode = data.leaguePachType === "league";

  return {
    ...data,
    isMatchOne: isMatch && !!data.selectedMatchId,
    isMatchAll: isMatch && !data.selectedMatchId,
    isAggregation: isAggregation,
    isCrossComparison: isCrossComparison,

    isLP: isLeagueMode,
  };
}
