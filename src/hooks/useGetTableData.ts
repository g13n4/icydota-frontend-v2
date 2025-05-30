import generateTableDataLink from "@/api/generateTableDataLink";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { selectedDataFormatEnum } from "@/types/enums";
import useSWR from "swr";

interface useGetTableDataResultType {
  isLoading: boolean;
  error: Error | undefined;
  data: Record<string, unknown> | undefined;
  hoverHighlight: boolean;
}

export default function useGetTableData(): useGetTableDataResultType {
  const stateData = usePageTypeContext();
  const url = generateTableDataLink({ data: stateData });

  const { data, isLoading, error } = useSWR<Record<string, unknown>, Error>(
    url,
  );
  console.log(url, data, isLoading, error)
  return {
    data,
    isLoading,
    error,
    hoverHighlight: selectedDataFormatEnum.MATCH === data?.selectedDataFormat,
  };
}