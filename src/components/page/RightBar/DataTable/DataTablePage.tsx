import { useHelperContext } from "@/components/context/HelperProvider";
import useGetTableData from "@/hooks/useGetTableData";
import EmptyTable from "./EmptyTable";
import Table from "./Table/Table";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";

export default function DataTable() {
  const { data, isLoading, error } = useGetTableData();
  const { isDarkMode } = useHelperContext();
  const { selectedCalculationId, selectedDataFormat, selectedPT } = usePageTypeContext();

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
        isTotal={selectedCalculationId === "0"}
        useBoolean={selectedPT === "player" && selectedDataFormat === "match"}
      />
    );
  }
  return null;
}