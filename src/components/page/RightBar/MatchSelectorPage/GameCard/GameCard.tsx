import { Card } from "@/components/ui/card";
import GameCardFront from "./GameCardFront/GameCardFront";
import type { AllGamesItem } from "../types";

export default function GameCard({ ...data }: AllGamesItem) {
  return (
    <div className="grid grid-flow-col" key={data.id}>
        <GameCardFront {...data}/>
    </div>
  );
}