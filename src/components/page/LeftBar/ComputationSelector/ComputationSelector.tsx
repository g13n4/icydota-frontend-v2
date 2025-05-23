
import { CardBottom } from "@/components/Templates/Cards/Cards";
import { useInitialDataContext } from "@/components/context/InitialDataProvider";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu
} from "@/components/ui/sidebar";
import ComputiationItem from "./ComputationSelectorItem";

export default function ComputationSelector() {
  const { computations } = useInitialDataContext();

  return (
    <CardBottom>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Calculation Types
          </SidebarGroupLabel>
          <SidebarMenu>
            {computations.map((item) => (
              <ComputiationItem key={`computation-${item.value}`} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </CardBottom>
  );
} 