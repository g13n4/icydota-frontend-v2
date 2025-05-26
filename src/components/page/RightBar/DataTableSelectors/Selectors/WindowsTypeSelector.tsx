import TabsSelector from "@/components/Templates/Selectors/Base/BaseTabsSelector";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import { GameStateEnum } from "@/types/enums";
import type { List } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";

const data = [
  {
    value: GameStateEnum.LANE,
    label: "Lane",
  },
  {
    value: GameStateEnum.GAME,
    label: "Game",
  },
];

export default function WindowsTypeSelector({
  className,
}: ComponentProps<typeof List>) {
  const { selectedLaneOrGame } = usePageTypeContext();
  const navigate = useCustomUseNavigate();

  function navFunc({ value }: { value: string }): void {
    navigate({ selectedLaneOrGame: value });
  }

  return (
    <TabsSelector
      value={selectedLaneOrGame}
      data={data}
      orientation="horizontal"
      navigateFunc={navFunc}
      className={className}
    />
  );
}
