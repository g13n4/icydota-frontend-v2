import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { comparisonTypeEnum } from "@/types/enums";
import type { List } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const data = [
  {
    value: comparisonTypeEnum.BASIC,
    label: "Basic",
  },
  {
    value: comparisonTypeEnum.COMPLEX,
    label: "Complex",
  },
];

export default function ComparisonTypeSelector({
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
