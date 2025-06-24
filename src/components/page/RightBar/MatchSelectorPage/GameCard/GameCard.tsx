import { Card } from "@/components/ui/card";
import type { AllGamesItem } from "../types";
import GameCardFrontTable from "./GameCard/GameCardHeroTable";
import GameCardStatsTable from "./GameCard/GameCardStatsTable";
import GameCardOtherTable from "./GameCard/GameCardOtherTable";

export default function GameCard({ ...data }: AllGamesItem) {
  return (
    <Card
      className="flex flex-col p-1 bg-background text-foreground font-base"
      key={data.id}
    >
      <GameCardFrontTable {...data} />
      <GameCardStatsTable {...data} />
      <GameCardOtherTable {...data} />
    </Card>
  );
}