import type { PageTypeType } from "src/components/context/types";
import { aggregationUrl, crossComparisonUrl, matchUrl } from "./dataUrl";

export default function generateTableDataLink({
  data,
}: { data: PageTypeType }): string {
  if (data.isMatchOne) {
    return matchUrl(
      data.selectedMatchId,
      data.selectedCalculationId,
      data.selectedPT,
      data.selectedLaneOrGame,
      data.selectedComparison,
      data.selectedCrossComparisonType,
    );
  }
  if (data.isAggregation) {
    return aggregationUrl(
      data.isLP,
      data.selectedLeagueId as string,
      data.selectedPatchId as string,
      data.selectedPT,
      data.selectedCalculationId,
      data.selectedAggregationType,
      data.selectedLaneOrGame,
      data.selectedComparison,
    );
  }
  if (data.isCrossComparison) {
    return crossComparisonUrl(
      data.isLP,
      data.selectedLeagueId as string,
      data.selectedPatchId as string,
      data.selectedPT,
      data.selectedCalculationId,
      data.selectedCrossComparisonType,
      data.selectedCrossComparisonPosition,
      data.selectedComparison,
      data.selectedCrossComparisonField,
    );
  }

  return "";
}
