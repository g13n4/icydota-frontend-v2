import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  {
    value: "match",
    label: "Match",
  },
  {
    value: "agg",
    label: "Aggregation",
  },
  {
    value: "ccomp",
    label: "Cross-Comparison",
  },
];

export default function DataFormatSelector() {
  return (
    <Tabs defaultValue="match" orientation="vertical">
      <TabsList
        className={`grid w-full grid-rows-${data.length + 1} shadow-shadow border-2 `}
      >
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
