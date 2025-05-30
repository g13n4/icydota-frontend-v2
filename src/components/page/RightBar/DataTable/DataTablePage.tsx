import { useHelperContext } from "@/components/context/HelperProvider";
import useGetTableData from "@/hooks/useGetTableData";
import EmptyTable from "./EmptyTable";
import Table from "./Table/Table";

export default function DataTable() {
  const { data, isLoading, error, hoverHighlight } = useGetTableData();
  const { isDarkMode } = useHelperContext();

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
        hoverHighlight={hoverHighlight}
        isDarkMode={isDarkMode}
      />
    );
  }
  return null;
}