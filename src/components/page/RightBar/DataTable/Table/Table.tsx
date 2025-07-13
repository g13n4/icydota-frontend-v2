import {
  colorSchemeDark,
  colorSchemeLightCold,
  themeBalham,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";
import TableHeader from "./TableHeader";
import setCellsOptions from "./cellsStyling";
import type { TableResponseType } from "./types";

type TableType = {
  tableData: TableResponseType;
  isDarkMode: boolean;
  isTotal: boolean;
  isMatch: boolean;
  isPlayer: boolean;
};

export default function Table({ tableData, isDarkMode, isTotal, isMatch, isPlayer }: TableType) {
  const theme = themeBalham.withPart(
    isDarkMode ? colorSchemeDark : colorSchemeLightCold,
  );

  const updatedColumnData = setCellsOptions({
    columnData: tableData.columns,
    valueMap: tableData.valueMapping,
    isDarkTheme: isDarkMode,
    isTotal: isTotal,
    isMatch: isMatch,
    isPlayer: isPlayer,
  });

  return (
    // Data Grid will fill the size of the parent container
    <div className="flex flex-col">
      <TableHeader tableHeaderData={tableData.matchName} />
      <div className="h-200">
        <AgGridReact
          className="h-auto w-auto"
          columnDefs={updatedColumnData}
          rowData={tableData.data}
          theme={theme}
          autoSizeStrategy={{
            type: "fitCellContents",
            defaultMaxWidth: 120,
            defaultMinWidth: 50,
          }}
        />
      </div>
    </div>
  );
}

