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
import type { selectedDataFormatType } from "@/types/types";

type TableType = {
  tableData: TableResponseType;
  isDarkMode: boolean;
  isTotal: boolean;
  useBoolean: boolean;
};

export default function Table({ tableData, isDarkMode, isTotal, useBoolean }: TableType) {
  const gridRef = useRef<AgGridReact<Record<string, number | string>>>(null);
  const theme = themeBalham.withPart(
    isDarkMode ? colorSchemeDark : colorSchemeLightCold,
  );

  const updatedColumnData = setCellsOptions({
    columnData: tableData.columns,
    valueMap: tableData.valueMapping,
    isDarkTheme: isDarkMode,
    isTotal: isTotal,
    useBoolean: useBoolean,
  });

  return (
    // Data Grid will fill the size of the parent container
    <div className="flex flex-col">
      <TableHeader tableHeaderData={tableData.matchName} />
      <div className="h-200">
        <AgGridReact
          ref={gridRef}
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

