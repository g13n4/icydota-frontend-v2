import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { List } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";

const data = [
  {
    value: "lane",
    label: "Lane",
  },
  {
    value: "game",
    label: "Game",
  },
];

export default function WindowsTypeSelector({
  className,
}: ComponentProps<typeof List>) {
  return (
    <Tabs orientation="horizontal" defaultValue="none">
      <TabsList className={cn("grid grid-cols-2 border-0", className)}>
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
