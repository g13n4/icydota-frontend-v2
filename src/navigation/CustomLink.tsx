import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import type { OptionalPageTypeType } from "@/components/context/types";
import type { PropsWithChildren } from "react";
import { Link } from "react-router";
import generateLink from "./generateNavigationLink";
import generateState from "./generateState";
import { cn } from "@/lib/utils";

export default function CustomLink({
  changedData,
  children,
}: PropsWithChildren<{ changedData: OptionalPageTypeType }>) {
  const oldData = usePageTypeContext();

  const data = generateState({ data: { ...oldData, ...changedData } });
  const navigateLink = generateLink({ data });

  return (
    <Link
      to={navigateLink}
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size="md"
      data-active={true}
      className={cn(
        "text-foreground hover:bg-main hover:outline-border hover:text-main-foreground  active:bg-main outline-transparent outline-2 [&>svg]:text-main-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-base px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-main data-[active=true]:outline-border",
        "text-xs",
        "group-data-[collapsible=icon]:hidden",
      )}
    >
      {children}
    </Link>
  );
}