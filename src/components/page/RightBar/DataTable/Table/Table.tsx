import { setLang } from "@antv/s2";
import type { SheetComponentOptions } from "@antv/s2-react";
import { SheetComponent } from "@antv/s2-react";
import "@antv/s2/dist/s2.min.css";
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
    interaction: {
      selectedCellsSpotlight: false,
      hoverHighlight: hoverHighlight,
      resize: {
        minCellWidth: 40,
        minCellHeight: 20,
      },
    },
    showDefaultHeaderActionIcon: true,
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
      themeCfg={{
        name: isDarkMode ? "dark" : "colorful",
      }}
    />
  );
}
