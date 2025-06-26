import { PageTypeDefaultState } from "@/components/context/DataTypeChoiceProvider";
import { useParams, useSearchParams } from "react-router";
import type {
  OptionalPageTypeType,
  PageTypeType,
  LoPTypeType,
  selectedDataFormatType,
  selectedPTType,
} from "src/components/context/types";
import { compareVals } from "./helpers";

export default function useParseURL(props: OptionalPageTypeType): PageTypeType {
  const {
    LoPType,
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

  const isMatch = compareVals(props.selectedDataFormat, dataType, "match");
  const isAggregation = compareVals(
    props.selectedDataFormat,
    dataType,
    "aggregation",
  );
  const isCrossComparison = compareVals(
    props.selectedDataFormat,
    dataType,
    "cross-comparison",
  );

  const isLeagueMode = LoPType === "league";

  const selectedCalculationId = calcId
    ? calcId.toString()
    : PageTypeDefaultState.selectedCalculationId;

  const totalSelected = selectedCalculationId === "0";

  const selectedCrossComparisonFieldTotal =
    ccfield && totalSelected
      ? ccfield
      : PageTypeDefaultState.selectedCrossComparisonFieldTotal;

  const selectedCrossComparisonFieldWindow =
    ccfield && !totalSelected
      ? ccfield
      : PageTypeDefaultState.selectedCrossComparisonFieldWindow;

  return {
    isMatchOne: (isMatch && !!dataTypeValue) as boolean,
    isMatchAll: isMatch && !dataTypeValue,
    isAggregation: isAggregation,
    isCrossComparison: isCrossComparison,

    isLP: isLeagueMode, // if False patch is selected if True League
    LoPType: LoPType as LoPTypeType,

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
        ? dataTypeValue
        : PageTypeDefaultState.selectedMatchId,
    selectedComparison:
      comp && !isCrossComparison
        ? comp
        : PageTypeDefaultState.selectedComparison,
    selectedComparisonType: mcomp
      ? mcomp
      : PageTypeDefaultState.selectedComparisonType,

    selectedDataFormat: dataType as selectedDataFormatType,
    selectedLaneOrGame: gstate
      ? gstate
      : PageTypeDefaultState.selectedLaneOrGame,

    selectedAggregationType:
      isAggregation && dataTypeValue
        ? dataTypeValue
        : PageTypeDefaultState.selectedAggregationType,

    selectedCrossComparisonComparison:
      comp && isCrossComparison
        ? comp
        : PageTypeDefaultState.selectedCrossComparisonComparison,
    selectedCrossComparisonType:
      isCrossComparison && dataTypeValue
        ? dataTypeValue.toString()
        : PageTypeDefaultState.selectedCrossComparisonType,
    selectedCrossComparisonPosition: cposition
      ? cposition.toString()
      : PageTypeDefaultState.selectedCrossComparisonPosition,
    selectedCrossComparisonFieldTotal: selectedCrossComparisonFieldTotal,
    selectedCrossComparisonFieldWindow: selectedCrossComparisonFieldWindow,
    ...props,
  };
}
