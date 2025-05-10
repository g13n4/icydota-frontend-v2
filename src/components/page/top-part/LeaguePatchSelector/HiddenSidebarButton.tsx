import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import type { SelectorItem } from "./types"
import { Button } from "@/components/ui/button";



export default function HiddenSidebar() {
  
        return (
            <>
            <Button size="lg">
                <ChevronsUpDown className="ml-auto" />          
            </Button>
            </>
        )
    }