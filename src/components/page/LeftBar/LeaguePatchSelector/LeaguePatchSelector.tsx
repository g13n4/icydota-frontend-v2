import { CardTop } from "@/components/Templates/Cards/Cards";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { useInitialDataContext } from "@/components/context/InitialDataProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import type { ItemStringType } from "@/types/types";
import { ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { useEffect } from "react";
import LeaguePatchSelectorMenu from "./LeaguePatchSelectorMenu";

export default function LeaguePatchSelector() {
  const { selectedLeagueId, selectedPatchId, isLP } = usePageTypeContext();

  const { patch, league } = useInitialDataContext();
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState<ItemStringType>({
    label: "",
    value: "",
  });

  useEffect(() => {
    if (isLP) {
      league.map(
        (item) => item.value === selectedLeagueId && setActiveTeam(item),
      );
    } else {
      patch.map(
        (item) => item.value === selectedPatchId && setActiveTeam(item),
      );
    }
  }, [selectedLeagueId, selectedPatchId, isLP, patch, league]);

  if (!activeTeam) {
    return null;
  }

  return (
    <CardTop>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:ring-0" asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-main data-[state=open]:text-main-foreground data-[state=open]:outline-border data-[state=open]:outline-2"
                >
                  <div className="grid flex-1 text-center text-xl leading-tight">
                    <span className="font-heading">
                      {isLP ? "" : "Patch: "}{activeTeam.label}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-base"
                align="start"
                side={isMobile ? "bottom" : "right"}
                sideOffset={4}
              >
                <LeaguePatchSelectorMenu
                  menuType="league"
                  title="League"
                  data={league}
                />
                <DropdownMenuSeparator />
                <LeaguePatchSelectorMenu
                  menuType="patch"
                  title="Patch"
                  data={patch}
                />
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    </CardTop>
  );
} 