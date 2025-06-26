import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { ItemStringType } from "@/types/types";
import type { TabsProps } from "@radix-ui/react-tabs";

interface BaseTabsType extends Pick<TabsProps, "orientation"> {
  value?: string;
  data: ItemStringType[];
  className?: string | undefined;
  disabled?: boolean | undefined;
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
  navigateFunc,
}: BaseTabsType) {
  const tabDirection =
    orientation === "horizontal"
      ? "auto-cols-fr grid-flow-col"
      : "auto-rows-fr grid-flow-row";

  return (
    <Tabs orientation={orientation} value={value} className={cn(
      classNameMain,
      )} >
      <TabsList className={cn("grid  border-0 ", tabDirection, className)}>
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
