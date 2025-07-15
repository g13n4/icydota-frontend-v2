import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { Card } from "@/components/ui/card";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import { useState } from "react";
import type { AllGamesItem } from "../types";
import GameCardGraph from "./GameCard/GameCardGraph/GameCardGraph";
import GameCardHeaderTable from "./GameCard/GameCardHeaderTable";
import GameCardHeroTable from "./GameCard/GameCardHeroTable";
import GameCardOtherTable from "./GameCard/GameCardOtherTable";
import GameCardStatsTable from "./GameCard/GameCardStatsTable";

export default function GameCard({ ...data }: AllGamesItem) {
  const navigate = useCustomUseNavigate(false);
  const { LoPType } = usePageTypeContext();
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const hasGraph = data.graphData !== undefined;

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
      gap-2
      "
      onClick={() =>
        navigate({ isMatchOne: true, selectedMatchId: data.id }, {})
      }
      key={data.id}
    >
      {LoPType === "patch" && (
        <h1 className="text-center">{data.leagueName}</h1>
      )}
      <GameCardHeaderTable {...data} />
      <GameCardHeroTable
        hasGraph={hasGraph}
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
        {...data}
      />
      {hasGraph && data.graphData ? (
        <GameCardGraph
          gameGraphData={data.graphData}
          selectedPosition={selectedPosition}
          matchId={data.id}
        />
      ) : (
        <div className="w-full h-12">&nbsp;</div>
      )}
      <GameCardStatsTable {...data} />
      <GameCardOtherTable {...data} />
    </Card>
  );
}