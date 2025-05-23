import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import type {
  OptionalPageTypeType,
  PageTypeType,
} from "src/components/context/types";

export default function generateState({
  data,
}: { data: OptionalPageTypeType }): PageTypeType {
  const prevData = usePageTypeContext();

  const output: PageTypeType = { ...prevData, ...data };

  const isMatch = output.selectedDataFormat === "match";
  const isAggregation = output.selectedDataFormat === "aggregation";
  const isCrossComparison = output.selectedDataFormat === "cross-comparison";

  const isLeagueMode = output.leaguePachType === "league";

  return {
    ...output,
    isMatchOne: isMatch && !!output.selectedMatchId,
    isMatchAll: isMatch && !output.selectedMatchId,
    isAggregation: isAggregation,
    isCrossComparison: isCrossComparison,

    isLP: isLeagueMode,
  };
}
