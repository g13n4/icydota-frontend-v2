import { useHelperContext } from "@/components/context/HelperProvider";
import { Button } from "@/components/ui/button";
import { PanelLeftIcon } from "lucide-react";

function OpenSidebarButton({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebarHidden } =
    useHelperContext();


  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="noShadow"
      size="icon"
      className="size-7"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebarHidden();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

export { OpenSidebarButton }