import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";
import type { List } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";

const data = [
  {
    value: "1",
    label: "Player",
  },
  {
    value: "2",
    label: "Hero",
  },
  {
    value: "3",
    label: "Hero + Facet",
  },
];

export default function CrossComparisonTypeSelector({
  className,
}: ComponentProps<typeof List>) {
  return (
    <CustomTabsSelector
      fieldName="selectedCrossComparisonType"
      data={data}
      className={className}
      orientation="horizontal"
    />
  );
}
