import ComputationSelector from "./ComputationSelector/ComputationSelector";
import LeaguePatchSelector from "./LeaguePatchSelector/LeaguePatchSelector";

export default function LeftSidebar() {
  return (
    <div className="grid grid-flow-row-dense grid-rows-2 gap-2 ">
      <LeaguePatchSelector />
      <ComputationSelector />
    </div>
  );
} 