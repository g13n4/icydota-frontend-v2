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

  if (selectedComparison === "perc") {
    return { enforcePercentFormat: true };
  }

  const formattingIndexId = code[selectedDataFormat] + code[selectedPT] + code[selectedComparison];
  const windowFormattingId =
    windowRepresentation?.[selectedCalculationId]?.[formattingIndexId];


  if (isTotal) {
    const output: { totalFormat: Record<string, number> } = { totalFormat: {} };

    for (const [totalName, subDict] of Object.entries(totalRepresentation)) {
      const possibleFormattingId = subDict?.[formattingIndexId];
      if (possibleFormattingId) {
        output.totalFormat[totalName] = possibleFormattingId;
      }
    }
    return output;
  }
  if (!isTotal && windowFormattingId !== undefined) {
    return { windowFormat: windowFormattingId };
  }

  return {};
}