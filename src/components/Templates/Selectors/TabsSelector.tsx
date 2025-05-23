import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { ItemStringType } from "@/types/types";
import type { TabsProps } from "@radix-ui/react-tabs";


interface SelectorSelectorType extends Pick<TabsProps, "orientation"> {
  value?: string;
  data: ItemStringType[];
  className?: string | undefined;
}

export default function TabsSelector({
  value,
  data,
  orientation,
  className,
}: SelectorSelectorType) {
  const tabSize = data.length;
  return (
    <Tabs orientation={orientation} value={value}>
      <TabsList className={cn(`grid grid-cols-${tabSize} border-0`, className)}>
        {data.map((item) => {
          return (
            <TabsTrigger key={item.value} value={item.value}>
              {item.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
