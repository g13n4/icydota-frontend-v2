import { useInitialDataContext } from "@/components/context/InitialDataProvider";
import type { ReactNode } from "react";
import getBooleanFormatting from "./getBooleanFormatting";
import getLaneFormatting from "./getLaneFormatting";
import getTimeStyling from "./getTimeStyling";
import { getBooleanColor, getTargetColor } from "./helpers";
import type { AgGridColumnsType, ValueMappingMapType } from "./types";

interface CellOptionsType {
  // adds icons
  cellRenderer?: (params: any) => ReactNode | null;
  // adds formatting to totals
  valueFormatter?: (params: any) => string | null;
  cellStyle?: (
    params: any,
  ) => { color: string; backgroundColor: string } | null;
}

export default function setCellsOptions({
  columnData,
  valueMap,
  isDarkTheme,
  isTotal,
  isMatch,
  isPlayer,
}: {
  columnData: AgGridColumnsType[];
  valueMap: ValueMappingMapType;
  isDarkTheme: boolean;
  isTotal: boolean;
  isMatch: boolean;
  isPlayer: boolean;
}) {
  const { totalPercentFields, totalLanes } = useInitialDataContext();

  return columnData.map((item) => {
    const rangeValues = valueMap[item.field];
    const cellOptions: CellOptionsType = {};

    if (isTotal) {
      if (totalLanes.find((i) => i === item.field)) {
        cellOptions.valueFormatter = (params) =>
          getLaneFormatting(params.value);

        cellOptions.cellStyle = (params) => null;
      } else if (totalPercentFields.find((i) => i === item.field)) {
        cellOptions.valueFormatter = (params) =>
          getBooleanFormatting(params.value, isMatch);

        if (isMatch) {
          cellOptions.cellStyle = (params) =>
            getBooleanColor(params.value, isDarkTheme);
        }
      }
    }

    if (
      "duration" === item.field.toLowerCase() &&
      item.field.endsWith("_time")
    ) {
      cellOptions.valueFormatter = (params) => getTimeStyling(params.value);
    }

    // doesn't work for some reason
    // if (["hero", "heroes"].includes(item.field.toLowerCase())) {
    //   cellOptions.cellRenderer = (params) => getHeroStyling(params.value);
    // }

    return {
      cellStyle: (params) => {
        return getTargetColor(
          params.value,
          rangeValues?.min,
          rangeValues?.max,
          isDarkTheme,
        );
      },
      ...cellOptions,
      ...item,
    };
  });
}
