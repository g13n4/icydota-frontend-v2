import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import type { ItemCategoryType } from "@/components/context/types";
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
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import type { ItemStringType } from "@/types/types";
import { ChevronRight, SquareTerminal } from "lucide-react";

const getIcon = (value: string) => {
  switch (value) {
    case "1":
      return SquareTerminal;
    case "2":
      return SquareTerminal;
    case "3":
      return SquareTerminal;
    case "4":
      return SquareTerminal;
    default:
      return SquareTerminal;
  }
};

export default function ComputiationItem({
  item,
}: { item: ItemCategoryType | ItemStringType }) {
  const Icon = getIcon(item.value);
  const { selectedCalculationId } = usePageTypeContext();
  const navigate = useCustomUseNavigate();

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
                  <SidebarMenuSubButton
                    asChild
                    isActive={subItem.value === selectedCalculationId}
                    onClick={() =>
                      navigate({ selectedCalculationId: subItem.value })
                    }
                    className="cursor-pointer"
                  >
                    <span>{subItem.label}</span>
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
        <SidebarMenuButton
          className="data-[state=open]:bg-main data-[state=open]:outline-border data-[state=open]:text-main-foreground"
          tooltip={item.label}
          isActive={item.value === selectedCalculationId}
          onClick={() => navigate({ selectedCalculationId: item.value })}
        >
          <Icon />
          <span>{item.label}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SelectSeparator />
    </>
  );
}
  