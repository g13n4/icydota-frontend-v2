import { PageTypeDefaultState } from "@/components/context/DataTypeChoiceProvider";
import { useParams, useSearchParams } from "react-router";
import type {
  PageTypeType,
  leaguePachTypeType,
  selectedDataFormatType,
  selectedPTType,
} from "src/components/context/types";

export default function useParseURL(): PageTypeType {
  const {
    leaguePachType,
    leaguePatchId,
    playerTeamType,
    dataType,
    dataTypeValue,
    calcId,
  } = useParams();

  const [searchParams] = useSearchParams();

  const cposition = searchParams.get("cposition"); // selectedCrossComparisonPosition
  const comp = searchParams.get("comp"); // selectedComparison
  const mcomp = searchParams.get("mcomp"); // selectedComparisonType
  const ccfield = searchParams.get("field"); // selectedComparisonType
  const gstate = searchParams.get("gstate"); // selectedLaneOrGame
  
  const isMatch = dataType === "match";
  const isAggregation = dataType === "aggregation";
  const isCrossComparison = dataType === "cross-comparison";

  const isLeagueMode = leaguePachType === "league";

  return {
    isMatchOne: isMatch && !!dataTypeValue,
    isMatchAll: isMatch && !dataTypeValue,
    isAggregation: isAggregation,
    isCrossComparison: isCrossComparison,

    isLP: isLeagueMode, // if False patch is selected if True League
    leaguePachType: leaguePachType as leaguePachTypeType,

    selectedLeagueId:
      isLeagueMode && leaguePatchId
        ? leaguePatchId.toString()
        : PageTypeDefaultState.selectedLeagueId,
    selectedPatchId:
      !isLeagueMode && leaguePatchId
        ? leaguePatchId.toString()
        : PageTypeDefaultState.selectedPatchId,
    selectedCalculationId: calcId
      ? calcId.toString()
      : PageTypeDefaultState.selectedCalculationId,

    selectedPT: playerTeamType as selectedPTType, // Player or Team

    selectedMatchId:
      isMatch && dataTypeValue
        ? Number.parseInt(dataTypeValue)
        : PageTypeDefaultState.selectedMatchId,
    selectedComparison: comp ? comp : PageTypeDefaultState.selectedComparison,
    selectedComparisonType: mcomp
      ? mcomp
      : PageTypeDefaultState.selectedComparisonType,

    selectedDataFormat: dataType as selectedDataFormatType,
    selectedLaneOrGame: gstate ? gstate : PageTypeDefaultState.selectedLaneOrGame,

    selectedAggregationType:
      isAggregation && dataTypeValue
        ? Number.parseInt(dataTypeValue)
        : PageTypeDefaultState.selectedAggregationType,

    selectedCrossComparisonType:
      isCrossComparison && dataTypeValue
        ? dataTypeValue.toString()
        : PageTypeDefaultState.selectedCrossComparisonType,
    selectedCrossComparisonPosition: cposition
      ? cposition.toString()
      : PageTypeDefaultState.selectedCrossComparisonPosition,
    selectedCrossComparisonField: ccfield
      ? ccfield
      : PageTypeDefaultState.selectedCrossComparisonField,
  };
}
