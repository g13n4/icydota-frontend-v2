import {
  colorSchemeDark,
  colorSchemeLightCold,
  themeBalham,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import TableHeader from "./TableHeader";
import setCellsOptions from "./cellsStyling";
import type { TableResponseType } from "./types";
import type { TableDataRepresentationType } from "@/hooks/types";

type TableType = {
  tableData: TableResponseType;
  isDarkMode: boolean;
  formatting: TableDataRepresentationType;
};

export default function Table({ tableData, isDarkMode, formatting }: TableType) {
  const theme = themeBalham.withPart(
    isDarkMode ? colorSchemeDark : colorSchemeLightCold,
  );

  const updatedColumnData = setCellsOptions({
    columnData: tableData.columns,
    valueMap: tableData.valueMapping,
    isDarkTheme: isDarkMode,
    formatting: formatting,
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
          //getRowId={getRowId}
          autoSizeStrategy={{
            type: "fitCellContents",
          }}
        />
      </div>
    </div>
  );
}
