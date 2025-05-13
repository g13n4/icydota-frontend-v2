import { Sidebar } from "@/components/ui/sidebar";
import LeaguePatchSelector from "./LeaguePatchSelector/LeaguePatchSelector";
import ComputationSelector from "./ComputationSelector/ComputationSelector";

export default function LeftSidebar() {
  return (
    <Sidebar side="left" variant="inset" collapsible="offcanvas" className="min-h-0">
      <LeaguePatchSelector />
      <ComputationSelector />
    </Sidebar>
  );
} 