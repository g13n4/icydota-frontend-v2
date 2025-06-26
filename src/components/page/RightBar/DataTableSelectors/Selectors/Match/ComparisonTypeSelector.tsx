import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
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
  const { selectedComparison } = usePageTypeContext();
  const isHidden = selectedComparison === "none";

  return (
    <CustomTabsSelector
      fieldName="selectedComparisonType"
      data={data}
      className={className}
      orientation="horizontal"
      disabled={isHidden}
    />
  );
}
