import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";
import { comparisonTypeEnum } from "@/types/enums";
import type { List } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";

const data = [
  {
    value: comparisonTypeEnum.BASIC,
    label: "Basic",
  },
  {
    value: comparisonTypeEnum.COMPLEX,
    label: "Complex",
  },
];

export default function ComparisonTypeSelector({
  className,
}: ComponentProps<typeof List>) {
  return (
    <CustomTabsSelector
      fieldName="selectedComparisonType"
      data={data}
      className={className}
    />
  );
}
