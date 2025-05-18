import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  {
    value: "player",
    label: "Player",
  },
  {
    value: "team",
    label: "Team",
  },

];

export default function PlayerTeamSelector() {
  return (
    <Tabs defaultValue="player" orientation="horizontal" className="row-end-1">
      <TabsList className="grid w-full grid-cols-2 shadow-shadow border-2">
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
