import DataFormatSelector from "./Selectors/DataFormatSelector";
import PlayerTeamSelector from "./Selectors/PlayerTeamSelector";
import DataFormatTypeSelector from "./Selectors/DataFormatTypeSelector";

export default function MiddleBar() {
  return (
    <div className="grid grid-flow-row-dense grid-rows-3 gap-2 my-auto">
      <PlayerTeamSelector />
      <DataFormatSelector />
      <DataFormatTypeSelector />
    </div>
  );
}