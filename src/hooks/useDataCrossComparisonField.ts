import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import type { ItemStringType } from "@/types/types";
import { crossComparisonFieldsUrl } from "@/urls";
import useSWR from "swr";

type CrossComparisonFieldResponse = {
  totals: ItemStringType[];
  lWindows: ItemStringType[];
  gWindows: ItemStringType[];
};

type useDataCrossComparisonFieldType = {
  isLoading: boolean;
  isTotal: boolean;

  currentSelectedField: string;
  fieldToChange: string;

  totals?: ItemStringType[];
  lWindows?: ItemStringType[];
  gWindows?: ItemStringType[];
};

export default function useDataCrossComparisonField(): useDataCrossComparisonFieldType {
  const {
    selectedCalculationId,
    selectedCrossComparisonFieldTotal,
    selectedCrossComparisonFieldWindow,
  } = usePageTypeContext();
  const isTotal = selectedCalculationId === "0";
  const currentSelectedField = isTotal
    ? selectedCrossComparisonFieldTotal
    : selectedCrossComparisonFieldWindow;

  const fieldToChange = isTotal
    ? "selectedCrossComparisonFieldTotal"
    : "selectedCrossComparisonFieldWindow";

  const { data, isLoading } = useSWR<CrossComparisonFieldResponse, Error>(
    crossComparisonFieldsUrl,
  );

  const baseData = { isLoading, isTotal, currentSelectedField, fieldToChange };

  if (!data || isLoading) return baseData;

  if (isTotal) {
    return {
      ...baseData,
      totals: data.totals,
    };
  }

  return {
    ...baseData,
    lWindows: data.lWindows,
    gWindows: data.gWindows,
  };
}