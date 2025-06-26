import {
  colorSchemeDark,
  colorSchemeLightCold,
  themeBalham,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import TableHeader from "./TableHeader";
import setCellsStyling from "./cellsStyling";
import type { TableResponseType } from "./types";

type TableType = {
  tableData: TableResponseType;
  isDarkMode: boolean;
};

export default function Table({ tableData, isDarkMode }: TableType) {
  const theme = themeBalham.withPart(
    isDarkMode ? colorSchemeDark : colorSchemeLightCold,
  );

  const updatedColumnData = setCellsStyling({
    columnData: tableData.columns,
    valueMap: tableData.valueMapping,
    isDarkTheme: isDarkMode,
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
            defaultMaxWidth: 150,
            defaultMinWidth: 50,
          }}
        />
      </div>
    </div>
  );
}

