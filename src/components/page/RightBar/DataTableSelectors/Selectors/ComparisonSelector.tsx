import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";
import { comparisonEnum } from "@/types/enums";
import type { List } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";

const data = [
  {
    value: comparisonEnum.NONE,
    label: "None",
  },
  {
    value: comparisonEnum.FLAT,
    label: "Flat",
  },
  {
    value: comparisonEnum.PERCENT,
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
      orientation="horizontal"
    />
  );
}
