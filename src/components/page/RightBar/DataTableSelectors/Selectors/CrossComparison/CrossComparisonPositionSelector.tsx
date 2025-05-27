import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";
import type { List } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";

const data = [
  {
    value: "1",
    label: "Support",
  },
  {
    value: "2",
    label: "Carry",
  },
  {
    value: "3",
    label: "Middle",
  },
];

export default function CrossComparisonPositionSelector({
  className,
}: ComponentProps<typeof List>) {
  return (
    <CustomTabsSelector
      fieldName="selectedCrossComparisonPosition"
      data={data}
      className={className}
    />
  );
}
