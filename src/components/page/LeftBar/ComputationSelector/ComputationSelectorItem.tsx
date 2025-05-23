import { ChevronRight, SquareTerminal } from "lucide-react";

import type { ComputationItemType } from "@/components/context/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SelectSeparator } from "@/components/ui/select";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const getIcon = (value: number) => {
  switch (value) {
    case 1:
      return SquareTerminal;
    case 2:
      return SquareTerminal;
    case 3:
      return SquareTerminal;
    case 4:
      return SquareTerminal;
    default:
      return SquareTerminal;
  }
};

export default function ComputiationItem({
  item,
}: { item: ComputationItemType }) {
  const Icon = getIcon(item.value);

  if ("items" in item) {
    return (
      <Collapsible key={item.label} asChild className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-main data-[state=open]:outline-border data-[state=open]:text-main-foreground"
              tooltip={item.label}
            >
              <Icon />
              <span>{item.label}</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.label}>
                  <SidebarMenuSubButton asChild>
                    <a>
                      <span>{subItem.label}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  }

  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="data-[state=open]:bg-main data-[state=open]:outline-border data-[state=open]:text-main-foreground"
            tooltip={item.label}
          >
            <Icon />
            <span>{item.label}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenuItem>
      <SelectSeparator />
    </>
  );
}
  