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

  const formattingIndexId = code[selectedDataFormat] + code[selectedPT];
  const windowFormattingId =
    windowRepresentation?.[selectedCalculationId]?.[formattingIndexId];

  if (selectedComparison === "perc") {
    return { enforcePercentFormat: true };
  }

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