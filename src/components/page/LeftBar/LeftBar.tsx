import { Sidebar } from "@/components/ui/sidebar";
import LeaguePatchSelector from "./LeaguePatchSelector/LeaguePatchSelector";
import ComputationSelector from "./ComputationSelector/ComputationSelector";

export default function LeftSidebar() {
  return (
    <div className="grid grid-flow-row-dense grid-rows-3 gap-2 my-auto">
      <LeaguePatchSelector />
      <ComputationSelector />
    </div>
  );
} 