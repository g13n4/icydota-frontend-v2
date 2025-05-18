import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export default function ComparisonSelector() {
  return (
    <Tabs orientation="horizontal" defaultValue="none">
      <TabsList
        className="grid grid-cols-3 border-0"
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
