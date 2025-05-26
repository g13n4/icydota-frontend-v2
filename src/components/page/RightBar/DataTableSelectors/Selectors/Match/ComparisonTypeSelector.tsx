import TabsSelector from "@/components/Templates/Selectors/Base/BaseTabsSelector";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
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
  const { selectedComparisonType } = usePageTypeContext();
  const navigate = useCustomUseNavigate();

  function navFunc({ value }: { value: string }): void {
    navigate({ selectedComparisonType: value });
  }

  return (
    <TabsSelector
      value={selectedComparisonType}
      data={data}
      orientation="horizontal"
      navigateFunc={navFunc}
      className={className}
    />
  );
}
