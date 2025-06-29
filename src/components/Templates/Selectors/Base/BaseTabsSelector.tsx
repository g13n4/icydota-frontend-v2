import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import type { ItemStringType } from "@/types/types";
import type { TabsProps } from "@radix-ui/react-tabs";

interface BaseTabsType extends Pick<TabsProps, "orientation"> {
  value?: string;
  data: ItemStringType[];
  className?: string | undefined;
  disabled?: boolean | undefined;
  reponsive?: boolean | undefined;
  classNameMain?: string | undefined;
  navigateFunc: ({ value }: { value: string }) => void;
}

export default function BaseTabsSelector({
  value,
  data,
  orientation = "horizontal",
  className,
  classNameMain,
  disabled = false,
  reponsive = false,
  navigateFunc,
}: BaseTabsType) {
  const isMobile = useIsMobile();
  const finalOrientation =
    isMobile && orientation === "vertical" && reponsive
      ? "horizontal"
      : orientation;
  const isHorizontal = finalOrientation === "horizontal";

  return (
    <Tabs
      orientation={finalOrientation}
      value={value}
      className={cn(classNameMain)}
    >
      <TabsList
        className={cn(
          "grid  border-0 ",
          reponsive
            ? "grid-flow-dense"
            : isHorizontal
              ? "auto-cols-fr grid-flow-col h-full"
              : "auto-rows-fr grid-flow-row",

          className,
        )}
      >
        {data.map((item) => {
          return (
            <TabsTrigger
              disabled={disabled}
              key={item.value}
              value={item.value}
              onClick={() => navigateFunc({ value: item.value })}
            >
              {item.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
