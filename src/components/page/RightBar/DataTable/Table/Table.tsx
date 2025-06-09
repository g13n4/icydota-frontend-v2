import {
  colorSchemeDark,
  colorSchemeLightCold,
  themeBalham,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import type { TableResponseType } from "./types";

type TableType = {
  tableData: TableResponseType;
  isDarkMode: boolean;
};

export default function Table({ tableData, isDarkMode }: TableType) {
  const theme = themeBalham.withPart(
    isDarkMode ? colorSchemeDark : colorSchemeLightCold,
  );

  return (
    // Data Grid will fill the size of the parent container
    <div>
      <AgGridReact rowData={tableData.table_data.windows_data} theme={themeBalham} />
    </div>
  );
}

