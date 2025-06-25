import { getColours, getTargetColor } from "./helpers";
import type { AgGridColumnsType, ValueMappingMapType } from "./types";

export default function setCellsStyling({
  columnData,
  valueMap,
  isDarkTheme,
}: {
  columnData: AgGridColumnsType[];
  valueMap: ValueMappingMapType;
  isDarkTheme: boolean;
}) {
  const colours = getColours(isDarkTheme);
  return columnData.map((item) => {
    const rangeValues = valueMap[item.field];
    return {
      cellStyle: (params) => {
        return getTargetColor(
          colours,
          params.value,
          rangeValues?.min,
          rangeValues?.max,
          isDarkTheme,
          item.field
        );
      },
      ...item,
    };
  });
}
