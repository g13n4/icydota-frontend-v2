import { Card } from "@/components/ui/card";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import type { AllGamesItem } from "../types";
import GameCardFrontTable from "./GameCard/GameCardHeroTable";
import GameCardOtherTable from "./GameCard/GameCardOtherTable";
import GameCardStatsTable from "./GameCard/GameCardStatsTable";

export default function GameCard({ ...data }: AllGamesItem) {
  const navigate = useCustomUseNavigate();

  return (
    <Card
      className="
      flex 
      flex-col 
      p-1 
      bg-background 
      text-foreground 
      font-base
      hover:bg-background/85
      hover:text-foreground/85
      hover:outline-4
      hover:outline-amber-600/70
      hover:cursor-pointer
      "
      onClick={() => navigate({ isMatchOne: true, selectedMatchId: data.id })}
      key={data.id}
    >
      <GameCardFrontTable {...data} />
      <GameCardStatsTable {...data} />
      <GameCardOtherTable {...data} />
    </Card>
  );
}