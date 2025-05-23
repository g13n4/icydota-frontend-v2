import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  if (!values) return null;

  return (
    <SelectGroup>
      <SelectLabel>{title}</SelectLabel>
      {values.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </SelectGroup>
  );
}

export default function CrossComparisonFieldSelector() {
  const { data, isLoading } = useSWR<CrossComparisonFieldResponse, Error>(
    crossComparisonFieldsUrl,
  );

  if (!data || isLoading) return (<Select disabled={isLoading} />)

  return (
    <Select defaultValue="apple"> 
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a match" />
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
  