import { setLang } from "@antv/s2";
import { SheetComponent } from "@antv/s2-react";
import "@antv/s2/dist/s2.min.css"
import { getColours, getTargetColor } from "./helpers";
setLang("en_US");

interface TableType {
  tableData: Record<string, unknown>;
  hoverHighlight: boolean;
  isDarkMode: boolean;
}

export default function Table({
  tableData,
  isDarkMode,
  hoverHighlight,
}: TableType) {
  const colours = getColours(isDarkMode);

  const tableOptions = {
    layoutWidthType: "colAdaptive",
    interaction: {
      selectedCellsSpotlight: false,
      hoverHighlight: hoverHighlight,
    },
    conditions: {
      background: tableData.value_mapping.map((item) => {
        return {
          field: item.col,
          mapping(value) {
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
      options={{
        ...tableOptions,
      }}
      adaptive={{
        width: true,
        height: true,
        getContainer: () => document.getElementById("dota-data-table"),
      }}
      sheetType="pivot"
      themeCfg={{
        name: isDarkMode ? "dark" : "colorful",
      }}
    />
  );
}
