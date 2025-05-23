import aggregationTypeSelectorData from "@/constants/Selectors/aggregationTypeSelectorData";
import CrossComparisonTypeSelectorData from "@/constants/Selectors/crossComparisonTypeSelectorData";
import type {
  useDataFormatDataReturnType,
  useDataFormatDataType,
} from "./types";

export default function useDataFormatData({
  dataType,
}: useDataFormatDataType): useDataFormatDataReturnType {
  if (dataType === "ccomp") {
    return {
      isActive: true,
      data: aggregationTypeSelectorData,
    };
  }
  if (dataType === "ccomp") {
    return {
      isActive: true,
      data: CrossComparisonTypeSelectorData,
    };
  }

  return { isActive: false, data: [] };
}