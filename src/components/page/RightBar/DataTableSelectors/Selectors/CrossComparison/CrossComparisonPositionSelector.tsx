import TabsSelector from "@/components/Templates/Selectors/Base/BaseTabsSelector";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
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
  const { selectedCrossComparisonPosition } = usePageTypeContext();
  const navigate = useCustomUseNavigate();

  function navFunc({ value }: { value: string }): void {
    navigate({ selectedCrossComparisonPosition: value });
  }

  return (
    <TabsSelector
      value={selectedCrossComparisonPosition}
      data={data}
      orientation="horizontal"
      navigateFunc={navFunc}
      className={className}
    />
  );
}
