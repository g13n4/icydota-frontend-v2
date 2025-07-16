import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { useInitialDataContext } from "@/components/context/InitialDataProvider";
import type { ItemCategoryType } from "@/components/context/types";
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

function ComputationSelectorMobileGroup({
  title,
  values,
}: {
  title: string;
  values: ItemStringType[];
}) {
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

export default function ComputationSelectorMobile() {
  const navigate = useCustomUseNavigate();
  const { selectedCalculationId } = usePageTypeContext();
  const { computations } = useInitialDataContext();

  if (!computations?.length || computations?.length === 0) return null;

  const totalItem = computations[0];
  const windowsItems = computations.slice(1) as ItemCategoryType[];

  return (
    <Select
      defaultValue={selectedCalculationId}
      onValueChange={(value) => navigate({ selectedCalculationId: value })}
    >
      <SelectTrigger className="w-full rounded-base shadow-shadow border-2 border-border bg-background text-foreground font-base">
        <SelectValue placeholder="Select calculation type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Total calculations</SelectLabel>
          <SelectItem key={totalItem.value} value={totalItem.value}>
            {totalItem.label}
          </SelectItem>
        </SelectGroup>
        {windowsItems.map((groupItem) => (
          <ComputationSelectorMobileGroup
            key={`computation-selector-mobile-${groupItem.value}`}
            title={groupItem.label}
            values={groupItem?.items}
          />
        ))}
      </SelectContent>
    </Select>
  );
}
  