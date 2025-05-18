import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";


const data = [
  {
    value: "1",
    label: "Support",
  },
  {
    value: "2",
    label: "Carry",
  },
  {
    value: "3",
    label: "Middle",
  },
];

export default function CrossComparisonPositionSelector() {
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
