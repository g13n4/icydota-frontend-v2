import type { AllGamesItem } from "../../types";
import GameCardFrontSide from "./GameCardFrontSide";

export default function GameCardFront({
  sentName,
  direName,
  sentHeroes,
  direHeroes,
  direWon,
}: AllGamesItem & { direWon: boolean }) {
  return (
    <>
      <GameCardFrontSide
        sideName={sentName}
        sideHeroes={sentHeroes}
        isDire={false}
        direHasWon={direWon}
      />
      <GameCardFrontSide
        sideName={direName}
        sideHeroes={direHeroes}
        isDire={true}
        direHasWon={direWon}
      />
    </>
  );
}