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
  values,
}: { title: string; values: ItemStringType[] | undefined }) {
  const navigate = useCustomUseNavigate();
  if (!values) return null;

  function navFunc({ value }: { value: string }): void {
    navigate({ selectedCrossComparisonField: value });
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
  const { selectedCrossComparisonField } = usePageTypeContext();
  const { data, isLoading } = useSWR<CrossComparisonFieldResponse, Error>(
    crossComparisonFieldsUrl,
  );

  if (!data || isLoading) return <Select disabled={isLoading} />;

  return (
    <Select defaultValue={selectedCrossComparisonField}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a field for cross-comparison" />
      </SelectTrigger>
      <SelectContent>
        <CrossComparisonFieldSelectorSelectGroup
          title="Totals"
          values={data?.totals}
        />
        <CrossComparisonFieldSelectorSelectGroup
          title="Lane"
          values={data?.Lwindows}
        />
        <CrossComparisonFieldSelectorSelectGroup
          title="Game"
          values={data?.Gwindows}
        />
      </SelectContent>
    </Select>
  );
}
  