import TabsSelector from "@/components/Templates/Selectors/Base/BaseTabsSelector";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
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
  const { selectedCrossComparisonType } = usePageTypeContext();
  const navigate = useCustomUseNavigate();

  function navFunc({ value }: { value: string }): void {
    navigate({ selectedCrossComparisonType: value });
  }

  return (
    <TabsSelector
      value={selectedCrossComparisonType}
      data={data}
      orientation="horizontal"
      navigateFunc={navFunc}
      className={className}
    />
  );
}
