import generateTableDataLink from "@/api/generateTableDataLink";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import type { TableResponseType } from "@/components/page/RightBar/DataTable/Table/types";
import useSWR from "swr";

interface useGetTableDataResultType {
  isLoading: boolean;
  error: Error | undefined;
  data: TableResponseType | undefined;
}

export default function useGetTableData(): useGetTableDataResultType {
  const stateData = usePageTypeContext();
  const url = generateTableDataLink({ data: stateData });
  const { data, isLoading, error } = useSWR<TableResponseType, Error>(url);

  return {
    data,
    isLoading,
    error,
  };
}