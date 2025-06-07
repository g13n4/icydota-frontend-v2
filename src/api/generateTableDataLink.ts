import type { PageTypeType } from "src/components/context/types";
import { aggregationUrl, crossComparisonUrl, matchUrl } from "./dataUrl";

export default function generateTableDataLink({
  data,
}: { data: PageTypeType }): string {
  if (data.isMatchOne) {
    return matchUrl({
      matchId: data.selectedMatchId,
      calculationId: data.selectedCalculationId,
      PoT: data.selectedPT,
      stage: data.selectedLaneOrGame,
      comparison: data.selectedComparison,
      comparisonType: data.selectedCrossComparisonType,
    });
  }
  if (data.isAggregation) {
    return aggregationUrl({
      isLeague: data.isLP,
      laegueId: data.selectedLeagueId as string,
      patchId: data.selectedPatchId as string,
      PoT: data.selectedPT,
      calculationId: data.selectedCalculationId,
      aggregationType: data.selectedAggregationType,
      stage: data.selectedLaneOrGame,
      comparison: data.selectedComparison,
    });
  }
  if (data.isCrossComparison) {
    return crossComparisonUrl({
      isLeague: data.isLP,
      laegueId: data.selectedLeagueId as string,
      patchId: data.selectedPatchId as string,
      PoT: data.selectedPT,
      calculationId: data.selectedCalculationId,
      crossComparisonType: data.selectedCrossComparisonType,
      position: data.selectedCrossComparisonPosition,
      comparison: data.selectedComparison,
      fieldTotal: data.selectedCrossComparisonFieldTotal,
      fieldWindow: data.selectedCrossComparisonFieldWindow,
    });
  }

  return "";
}
