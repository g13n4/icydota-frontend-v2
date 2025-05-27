import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";
import type { List } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";

const data = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "flat",
    label: "Flat",
  },
  {
    value: "perc",
    label: "Percent",
  },
];

export default function ComparisonSelector({
  className,
}: ComponentProps<typeof List>) {
  return (
    <CustomTabsSelector
      fieldName="selectedComparison"
      data={data}
      className={className}
    />
  );
}
