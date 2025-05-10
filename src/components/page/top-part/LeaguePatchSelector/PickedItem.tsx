import * as React from "react";

import { useHelperContext } from "@/components/context/HelperProvider";
import { Card } from "@/components/ui/card";
import {
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import clsx from "clsx";
import HiddenSidebar from "./HiddenSidebarButton";
import { OpenSidebarButton } from "./OpenSidebarButton";
import type { SelectorItem } from "./types";

export default function PickedItem(item: SelectorItem) {
  const { isSidebarHidden, setSidebarHidden, toggleSidebarHidden } =
    useHelperContext();

  if (isSidebarHidden) {
    return (
      <Card>
        <HiddenSidebar />
      </Card>
    );
  }

  return (
    <Card>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className={clsx(
            "bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
            item.background ? `bg-[url(${item.background})]` : "bg-black-700",
          )}
        >
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{item.name}</span>
            {item.dateStart && item.dateEnd && (
              <span className="truncate text-xs">
                `{item.dateStart} - {item.dateEnd}`
              </span>
            )}
          </div>
          <OpenSidebarButton />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
    </Card>
  );
}