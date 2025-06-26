import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import aggregationTypeSelectorData from "@/constants/Selectors/aggregationTypeSelectorData";
import CrossComparisonTypeSelectorData from "@/constants/Selectors/crossComparisonTypeSelectorData";
import type { useDataFormatDataReturnType } from "./types";

export default function useDataFormatData(): useDataFormatDataReturnType {
  const { selectedDataFormat } = usePageTypeContext();

  if (selectedDataFormat === "aggregation") {
    return {
      isActive: true,
      data: aggregationTypeSelectorData,
      dataFormatType: "selectedAggregationType",
    };
  }
  if (selectedDataFormat === "cross-comparison") {
    return {
      isActive: true,
      data: CrossComparisonTypeSelectorData,
      dataFormatType: "selectedCrossComparisonType",
    };
  }

  return {
    isActive: false,
    data: [],
    dataFormatType: null,
  };
}