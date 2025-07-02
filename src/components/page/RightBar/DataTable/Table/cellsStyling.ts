import { useInitialDataContext } from "@/components/context/InitialDataProvider";
import type { ReactNode } from "react";
import getBooleanStyling from "./getBooleanStyling";
import getHeroStyling from "./getHeroStyling";
import { getTargetColor } from "./helpers";
import type { AgGridColumnsType, ValueMappingMapType } from "./types";

interface CellOptionsType {
  // adds icons
  cellRenderer?: (params: any) => ReactNode | null;
  // adds formatting to totals
  valueFormatter?: (params: any) => string | null;
}

export default function setCellsOptions({
  columnData,
  valueMap,
  isDarkTheme,
  isTotal,
  useBoolean,
}: {
  columnData: AgGridColumnsType[];
  valueMap: ValueMappingMapType;
  isDarkTheme: boolean;
  isTotal: boolean;
  useBoolean: boolean;
}) {
  const { totalPercentFields } = useInitialDataContext();

  return columnData.map((item) => {
    const rangeValues = valueMap[item.field];
    const cellOptions: CellOptionsType = {};

    if (isTotal && totalPercentFields.find((i) => i === item.field)) {
      cellOptions.valueFormatter = (params) =>
        getBooleanStyling(params.value, useBoolean);
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
