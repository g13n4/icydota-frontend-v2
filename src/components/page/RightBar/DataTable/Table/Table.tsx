import {
  colorSchemeDark,
  colorSchemeLightCold,
  themeBalham,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import type { TableResponseType } from "./types";
import setCellsStyling from "./cellsStyling";

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
    <div className="h-186">
      <AgGridReact
        className="h-auto w-auto"
        columnDefs={updatedColumnData}
        rowData={tableData.data}
        theme={theme}
      />
    </div>
  );  
}

