import { useHelperContext } from "@/components/context/HelperProvider";
import useGetTableData from "@/hooks/useGetTableData";
import EmptyTable from "./EmptyTable";
import Table from "./Table/Table";
import useTableDataRepresentation from "@/hooks/useTableDataProcessing";

export default function DataTable() {
  const { data, isLoading, error } = useGetTableData();
  const { isDarkMode } = useHelperContext();
  const formatting = useTableDataRepresentation()

  if (isLoading) {
    return <EmptyTable isLoading={isLoading} />;
  }
  if (error) {
    return <EmptyTable isLoading={false} />;
  }

  if (data !== undefined) {
    return (
      <Table
        tableData={data}
        isDarkMode={isDarkMode}
        formatting={formatting}
      />
    );
  }
  return null;
}