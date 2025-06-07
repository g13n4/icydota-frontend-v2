import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import type { ItemStringType } from "@/types/types";
import { crossComparisonFieldsUrl } from "@/urls";
import useSWR from "swr";

type CrossComparisonFieldResponse = {
  totals: ItemStringType[];
  Lwindows: ItemStringType[];
  Gwindows: ItemStringType[];
};

function CrossComparisonFieldSelectorSelectGroup({
  title,
  isTotalSelected,
  values,
}: {
  title: string;
  isTotalSelected: boolean;
  values: ItemStringType[] | undefined;
}) {
  const navigate = useCustomUseNavigate();
  if (!values) return null;

  const crossComparisonFieldToChange = isTotalSelected
    ? "selectedCrossComparisonFieldTotal"
    : "selectedCrossComparisonFieldWindow";

  function navFunc({ value }: { value: string }): void {
    navigate({ [crossComparisonFieldToChange]: value });
  }

  return (
    <SelectGroup>
      <SelectLabel>{title}</SelectLabel>
      {values.map((item) => (
        <SelectItem
          key={item.value}
          value={item.value}
          onClick={() => navFunc({ value: item.value })}
        >
          {item.label}
        </SelectItem>
      ))}
    </SelectGroup>
  );
}

export default function CrossComparisonFieldSelector() {
  const {
    selectedCrossComparisonFieldTotal,
    selectedCrossComparisonFieldWindow,
    selectedCalculationId,
  } = usePageTypeContext();
  const { data, isLoading } = useSWR<CrossComparisonFieldResponse, Error>(
    crossComparisonFieldsUrl,
  );

  if (!data || isLoading) return <Select disabled={isLoading} />;

  const isTotalSelected = selectedCalculationId === "0";
  const selectedField = isTotalSelected
    ? selectedCrossComparisonFieldTotal
    : selectedCrossComparisonFieldWindow;

  return (
    <Select defaultValue={selectedField}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a field for cross-comparison" />
      </SelectTrigger>
      <SelectContent>
        {isTotalSelected && (
          <CrossComparisonFieldSelectorSelectGroup
            title="Totals"
            isTotalSelected={isTotalSelected}
            values={data?.totals}
          />
        )}
        {!isTotalSelected && (
          <>
            <CrossComparisonFieldSelectorSelectGroup
              title="Lane"
              isTotalSelected={isTotalSelected}
              values={data?.Lwindows}
            />
            <CrossComparisonFieldSelectorSelectGroup
              title="Game"
              isTotalSelected={isTotalSelected}
              values={data?.Gwindows}
            />
          </>
        )}
      </SelectContent>
    </Select>
  );
}
  