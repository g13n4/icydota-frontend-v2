import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
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
import { cn } from "@/lib/utils";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import type { ItemStringType } from "@/types/types";
import { ChevronRight, SquareTerminal } from "lucide-react";

function valueToCatgetory(value: string): string {
  const output = Math.floor(Number(value) / 100)
  console.log(value, output )
  return output.toString();
}

const selectedButton = "text-main"

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
}: { item: ItemStringType & { items?: ItemStringType[] } }) {
  const Icon = getIcon(item.value);
  const { selectedCalculationId } = usePageTypeContext();
  const navigate = useCustomUseNavigate();

  if ("items" in item) {
    return (
      <Collapsible key={item.label} asChild className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              className={cn(
                "data-[state=open]:bg-main data-[state=open]:outline-border data-[state=open]:text-main-foreground",
                valueToCatgetory(selectedCalculationId) === item.value ? selectedButton : "",
              )}
              tooltip={item.label}
            >
              <Icon />
              <span>{item.label}</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items?.map((subItem: ItemStringType) => (
                <SidebarMenuSubItem key={subItem.label}>
                  <SidebarMenuSubButton
                    asChild
                    onClick={() =>
                      navigate({ selectedCalculationId: subItem.value })
                    }
                    isActive={subItem.value === selectedCalculationId}
                    className={cn(
                      "cursor-pointer",
                      item.value === selectedCalculationId ? selectedButton : "",
                    )}
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
          className={cn(
            "data-[state=open]:bg-main data-[state=open]:outline-border data-[state=open]:text-main-foreground",
            item.value === selectedCalculationId ? selectedButton : "",
          )}
          tooltip={item.label}
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
  