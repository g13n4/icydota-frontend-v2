import { type ThemeName, setLang } from "@antv/s2";
import { SheetComponent, type SheetComponentOptions } from "@antv/s2-react";
import { customBlackPallete, customBlackTheme } from "./customBlackTheme";
import { getColours, getTargetColor } from "./helpers";
import type { TableResponseType } from "./types";
setLang("en_US");

interface TableType {
  tableData: TableResponseType;
  hoverHighlight: boolean;
  isDarkMode: boolean;
}

export default function Table({
  tableData,
  isDarkMode,
  hoverHighlight,
}: TableType) {
  const colours = getColours(isDarkMode);

  const tableOptions: SheetComponentOptions = {
    tooltip: {
      operation: {
        trend: true,
        hiddenColumns: true,
      },
    },
    interaction: {
      hoverHighlight: hoverHighlight,
    },
    conditions: {
      background: tableData.value_mapping.map((item) => {
        return {
          field: item.col,
          mapping(value: number | string) {
            const cellColour = getTargetColor(
              colours,
              value,
              item.min,
              item.max,
            );

            return {
              fill: cellColour,
            };
          },
        };
      }),
    },
  };

  return (
    <SheetComponent
      dataCfg={tableData.table_data}
      options={tableOptions}
      adaptive={{
        width: true,
        height: true,
      }}
      sheetType="pivot"
      themeCfg={
        isDarkMode
          ? {
              theme: customBlackTheme,
              palette: customBlackPallete,
            }
          : {
              name: "colorful" as ThemeName,
            }
      }
    />
  );
}

