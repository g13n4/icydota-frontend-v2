import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { ItemStringType } from "@/types/types";
import type { TabsProps } from "@radix-ui/react-tabs";

interface BaseTabsType extends Pick<TabsProps, "orientation"> {
  value?: string;
  data: ItemStringType[];
  className?: string | undefined;
  navigateFunc: ({ value }: { value: string }) => void;
}

export default function BaseTabsSelector({
  value,
  data,
  orientation,
  className,
  navigateFunc,
}: BaseTabsType) {
  const tabSize = data.length;
  return (
    <Tabs orientation={orientation} value={value}>
      <TabsList className={cn(`grid grid-cols-${tabSize} border-0`, className)}>
        {data.map((item) => {
          return (
            <TabsTrigger
              key={item.value}
              value={item.value}
              onClick={() => navigateFunc({value: item.value})}
            >
              {item.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
