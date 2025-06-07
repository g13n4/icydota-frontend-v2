import type { PageTypeType } from "src/components/context/types";

export default function generateNavigationLink({
  data,
}: { data: PageTypeType }): string {
  const LoPPart = `/${data.leaguePachType}/${data.leaguePachType === "patch" ? data.selectedPatchId : data.selectedLeagueId}`;

  const linkStart = `${LoPPart}/${data.selectedPT}/${data.selectedDataFormat}`;

  if (data.isMatchAll) {
    return linkStart;
  }
  if (data.isMatchOne) {
    const linkEnding = `${data.selectedMatchId}/${data.selectedCalculationId}`;
    const params = `comp=${data.selectedComparison}&mcomp=${data.selectedComparisonType}&gstate=${data.selectedLaneOrGame}`;
    return `${linkStart}/${linkEnding}?${params}`;
  }
  if (data.isAggregation) {
    const linkEnding = `${data.selectedAggregationType}/${data.selectedCalculationId}`;
    const params = `comp=${data.selectedComparison}&gstate=${data.selectedLaneOrGame}`;
    return `${linkStart}/${linkEnding}?${params}`;
  }
  if (data.isCrossComparison) {
    const linkEnding = `${data.selectedCrossComparisonType}/${data.selectedCalculationId}`;
    const isTotal = data.selectedCalculationId === "0";
    const selectedCrossComparisonField = isTotal
      ? data.selectedCrossComparisonFieldTotal
      : data.selectedCrossComparisonFieldWindow;

    const params = `comp=${data.selectedComparison}&field=${selectedCrossComparisonField}&cposition=${data.selectedCrossComparisonPosition}`;
    return `${linkStart}/${linkEnding}?${params}`;
  }

  return "/";
}
