import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { List } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const data = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "flat",
    label: "Flat",
  },
  {
    value: "perc",
    label: "Percent",
  },
  
];

export default function ComparisonSelector({
  className,
}: ComponentProps<typeof List>) {
  return (
    <Tabs orientation="horizontal" value="none">
      <TabsList className={cn("grid grid-cols-3 border-0", className)}>
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
