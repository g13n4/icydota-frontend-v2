import { Sidebar } from "@/components/ui/sidebar";
import LeaguePatchSelector from "./LeaguePatchSelector/LeaguePatchSelector";
import ComputationSelector from "./ComputationSelector/ComputationSelector";

export default function LeftSidebar() {
  return (
    <Sidebar>
      <LeaguePatchSelector />
      <ComputationSelector />
    </Sidebar>
  );
} 