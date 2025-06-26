import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useDataCrossComparisonField from "@/hooks/useDataCrossComparisonField";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import type { ItemStringType } from "@/types/types";
import { useEffect } from "react";

function CrossComparisonFieldSelectorSelectGroup({
  title,
  values,
}: {
  title: string;
  isTotalSelected: boolean;
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

// TODO: create a hook

export default function CrossComparisonFieldSelector() {
  const navigate = useCustomUseNavigate();
  const fieldData = useDataCrossComparisonField();

  if (fieldData.isLoading) return <Select disabled />;

  return (
    <Select
    key={`cross-comparison-field-selector-${fieldData.isTotal}`}
      defaultValue={fieldData.currentSelectedField}
      onValueChange={(value) => navigate({ [fieldData.fieldToChange]: value })}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a field for cross-comparison" />
      </SelectTrigger>
      <SelectContent>
        {fieldData.totals && (
          <CrossComparisonFieldSelectorSelectGroup
            title="Totals"
            isTotalSelected={fieldData.isTotal}
            values={fieldData.totals}
          />
        )}
        {fieldData.lWindows && fieldData.gWindows && (
          <>
            <CrossComparisonFieldSelectorSelectGroup
              title="Lane"
              isTotalSelected={fieldData.isTotal}
              values={fieldData.lWindows}
            />
            <CrossComparisonFieldSelectorSelectGroup
              title="Game"
              isTotalSelected={fieldData.isTotal}
              values={fieldData.gWindows}
            />
          </>
        )}
      </SelectContent>
    </Select>
  );
}
  