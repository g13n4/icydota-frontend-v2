import { useIsMobile } from "@/hooks/use-mobile";
import ComputationSelector from "../LeftBar/ComputationSelector/ComputationSelector";
import ComputationSelectorMobile from "../LeftBar/ComputationSelector/ComputationSelectorMobile";
import LeaguePatchSelector from "../LeftBar/LeaguePatchSelector/LeaguePatchSelector";
import DataFormatSelector from "../MiddleBar/Selectors/DataFormatSelector";
import DataFormatTypeSelector from "../MiddleBar/Selectors/DataFormatTypeSelector";
import PlayerTeamSelector from "../MiddleBar/Selectors/PlayerTeamSelector";

export default function CombinedLeftBar() {
  const isMobile = useIsMobile();

  const selectors = [
    <LeaguePatchSelector key={"league-patch-selector"} />,
    <PlayerTeamSelector key={"player-team-selector"} />,
    <DataFormatSelector key={"data-format-selector"} />,
    <DataFormatTypeSelector key={"data-format-type-selector"} />,
    isMobile ? (
      <ComputationSelectorMobile key={"computation-selector-monile"} />
    ) : (
      <ComputationSelector key={"computation-selector"} />
    ),
  ];

  if (isMobile) return <>{selectors}</>;

  return <div className="flex flex-col gap-4">{selectors}</div>;
} 