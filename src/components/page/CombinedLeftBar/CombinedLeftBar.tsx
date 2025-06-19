import ComputationSelector from "../LeftBar/ComputationSelector/ComputationSelector";
import LeaguePatchSelector from "../LeftBar/LeaguePatchSelector/LeaguePatchSelector";
import DataFormatSelector from "../MiddleBar/Selectors/DataFormatSelector";
import DataFormatTypeSelector from "../MiddleBar/Selectors/DataFormatTypeSelector";
import PlayerTeamSelector from "../MiddleBar/Selectors/PlayerTeamSelector";

export default function CombinedLeftBar() {
  return (
    <div className="flex flex-col gap-4">
      <LeaguePatchSelector />
      <PlayerTeamSelector />
      <DataFormatSelector />
      <DataFormatTypeSelector />
      <ComputationSelector />
    </div>
  );
} 