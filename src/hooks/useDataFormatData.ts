import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import aggregationTypeSelectorData from "@/constants/Selectors/aggregationTypeSelectorData";
import CrossComparisonTypeSelectorData from "@/constants/Selectors/crossComparisonTypeSelectorData";
import type { useDataFormatDataReturnType } from "./types";
import { selectedDataFormatEnum } from "@/types/enums";

export default function useDataFormatData(): useDataFormatDataReturnType {
  const { selectedDataFormat } = usePageTypeContext();

  if (selectedDataFormat === selectedDataFormatEnum.AGGREGATION) {
    return {
      isActive: true,
      data: aggregationTypeSelectorData,
      dataFormatType: "selectedAggregationType",
    };
  }
  if (selectedDataFormat === selectedDataFormatEnum.CROSS_COMPARISON) {
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