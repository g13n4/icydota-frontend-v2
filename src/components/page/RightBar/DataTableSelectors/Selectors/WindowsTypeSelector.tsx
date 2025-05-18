import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export default function WindowsTypeSelector() {
  return (
    <Tabs orientation="horizontal" defaultValue="none">
      <TabsList
        className="grid grid-cols-2 border-0"
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
