import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { useInitialDataContext } from "@/components/context/InitialDataProvider";
import type { TableDataRepresentationType } from "./types";
import {
  crossComparisonComparisonEnum,
  selectedDataFormatEnum,
} from "@/types/enums";

export default function useTableDataRepresentation(): TableDataRepresentationType {
  const {
    selectedCalculationId,
    selectedDataFormat,
    selectedPT,
    selectedComparison,
    selectedCrossComparisonComparison,
  } = usePageTypeContext();
  const { code, windowRepresentation, totalRepresentation } =
    useInitialDataContext();
  const isTotal = selectedCalculationId === "0";

  const formattingIndexId =
    code[selectedDataFormat] + code[selectedPT] + code[selectedComparison];
  const windowFormattingId =
    windowRepresentation?.[selectedCalculationId]?.[formattingIndexId];

  const isCrossComparisonPerc =
    selectedDataFormat === selectedDataFormatEnum.CROSS_COMPARISON &&
    selectedCrossComparisonComparison === crossComparisonComparisonEnum.PERCENT;

  if (isCrossComparisonPerc) {
    return { enforcePercentFormat: true };
  }

  if (isTotal) {
    if (selectedComparison === "perc") {
      return { enforceTotalPercentFormat: true };
    }

    const output: { totalFormat: Record<string, number>; isTotal: boolean } = {
      totalFormat: {},
      isTotal,
    };

    for (const [totalName, subDict] of Object.entries(totalRepresentation)) {
      const possibleFormattingId = subDict?.[formattingIndexId];
      if (possibleFormattingId !== undefined && possibleFormattingId !== null) {
        output.totalFormat[totalName] = possibleFormattingId;
      }
    }
    return output;
  }
  if (!isTotal) {
    if (selectedComparison === "perc") {
      return { enforceTotalPercentFormat: true };
    }
    if (windowFormattingId !== undefined) {
      return { windowFormat: windowFormattingId };
    }
  }

  return {};
}