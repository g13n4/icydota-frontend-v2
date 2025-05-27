import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";
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
  return (
    <CustomTabsSelector
      fieldName="selectedLaneOrGame"
      data={data}
      className={className}
    />
  );
}
