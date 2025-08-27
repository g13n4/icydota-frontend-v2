import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { useInitialDataContext } from "@/components/context/InitialDataProvider";
import type { TableDataRepresentationType } from "./types";

export default function useTableDataRepresentation(): TableDataRepresentationType {
  const {
    selectedCalculationId,
    selectedDataFormat,
    selectedPT,
    selectedComparison,
  } = usePageTypeContext();
  const { code, windowRepresentation, totalRepresentation } =
    useInitialDataContext();
  const isTotal = selectedCalculationId === "0";

  const formattingIndexId =
    code[selectedDataFormat] + code[selectedPT] + code[selectedComparison];
  const windowFormattingId =
    windowRepresentation?.[selectedCalculationId]?.[formattingIndexId];

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
      if (possibleFormattingId) {
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