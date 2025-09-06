import type { TableDataRepresentationType } from "@/hooks/types";
import { DataRepresentationEnum } from "@/types/enums";
import type { ReactNode } from "react";
import getBooleanFormatting from "./Formatting/getBooleanFormatting";
import getLaneFormatting from "./Formatting/getLaneFormatting";
import getLevelFormatting from "./Formatting/getLevelFormatting";
import getPercentFormatting from "./Formatting/getPercentFormatting";
import getTimeStyling from "./Formatting/getTimeStyling";
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

function setFormatting(formattingId: number | undefined, isDarkTheme: boolean) {
  const cellOptions: CellOptionsType = {};

  if (formattingId === undefined || formattingId === null) {
    return cellOptions;
  }

  switch (formattingId) {
    case DataRepresentationEnum.LANE: // Lane
      cellOptions.valueFormatter = (params) => getLaneFormatting(params.value);

      cellOptions.cellStyle = (params) => null;
      return cellOptions;
    case DataRepresentationEnum.PERCENT: // Percent
      cellOptions.valueFormatter = (params) =>
        getPercentFormatting(params.value);
      return cellOptions;
    case DataRepresentationEnum.LEVEL: // Level
      cellOptions.valueFormatter = (params) => getLevelFormatting(params.value);
      return cellOptions;
    case DataRepresentationEnum.TIME: // Time
      cellOptions.valueFormatter = (params) => getTimeStyling(params.value);
      return cellOptions;
    case DataRepresentationEnum.BOOLEAN: // Boolean
      cellOptions.valueFormatter = (params) =>
        getBooleanFormatting(params.value);
      cellOptions.cellStyle = (params) =>
        getBooleanColor(params.value, isDarkTheme);
      return cellOptions;
  }
}

export default function setCellsOptions({
  columnData,
  valueMap,
  isDarkTheme,
  formatting,
}: {
  columnData: AgGridColumnsType[];
  valueMap: ValueMappingMapType;
  isDarkTheme: boolean;
  formatting: TableDataRepresentationType;
}) {
  return columnData.map((item) => {
    if (item)
      if (
        (formatting.totalFormat || formatting.enforceTotalPercentFormat) &&
        item?.children
      ) {
        item.children = item.children.map((subItem) => {
          const formattingId = formatting.totalFormat?.[subItem.field];
          const rangeValues = valueMap[subItem.field];
          const finalRepId =
            !subItem.pinned && formatting.enforceTotalPercentFormat
              ? DataRepresentationEnum.PERCENT
              : formattingId;

          return {
            cellStyle: (params) => {
              return getTargetColor(
                params.value,
                rangeValues?.min,
                rangeValues?.max,
                isDarkTheme,
              );
            },
            ...setFormatting(finalRepId, isDarkTheme),
            ...subItem,
          };
        });
        return item;
      }

    if (formatting.windowFormat || formatting.enforceWindowPercentFormat) {
      const rangeValues = valueMap[item.field];
      const formattingId = formatting?.windowFormat;
      const finalRepId =
        !item.pinned && formatting.enforceWindowPercentFormat
          ? DataRepresentationEnum.PERCENT
          : formattingId;

      return {
        cellStyle: (params) => {
          return getTargetColor(
            params.value,
            rangeValues?.min,
            rangeValues?.max,
            isDarkTheme,
          );
        },
        ...setFormatting(finalRepId, isDarkTheme),
        ...item,
      };
    }

    return item;
  });
}



  // doesn't work for some reason
  // if (["hero", "heroes"].includes(item.field.toLowerCase())) {
  //   cellOptions.cellRenderer = (params) => getHeroStyling(params.value);
  // }
