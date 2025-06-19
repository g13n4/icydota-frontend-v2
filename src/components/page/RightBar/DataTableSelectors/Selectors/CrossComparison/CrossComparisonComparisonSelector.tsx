import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";
import { crossComparisonComparisonEnum } from "@/types/enums";
import type { List } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";

const data = [
  {
    value: crossComparisonComparisonEnum.FLAT,
    label: "Flat",
  },
  {
    value: crossComparisonComparisonEnum.PERCENT,
    label: "Percent",
  },
];

export default function CrossComparisonComparisonSelector({
  className,
}: ComponentProps<typeof List>) {
  return (
    <CustomTabsSelector
      fieldName="selectedCrossComparisonComparison"
      data={data}
      className={className}
    />
  );
}
