import type { HeroesMapType } from "@/data/types";
import { cn } from "@/lib/utils";
import { steamLink } from "@/urls";
import HeroNameMap from "@/data/heroes.json";
import type { AllGamesHeroes } from "../../types";

const HERO_MAP = HeroNameMap as HeroesMapType;

function HeroLine({ isDire, hero_id }: { isDire: boolean; hero_id: string }) {
  const { name, icon_url } = HERO_MAP[hero_id];

  const HeroIcon = <img src={steamLink(icon_url)} alt={name} />;

  return (
    <h1
      className={cn("flex-row", isDire ? "text-left" : "text-right")}
      key={name}
    >
      {isDire ? HeroIcon : ""}
      {name}
      {isDire ? "" : HeroIcon}
    </h1>
  );
}

export default function GameCardFrontSide({
  sideName,
  sideHeroes,
  isDire,
  direHasWon,
}: {
  sideName: string;
  sideHeroes: AllGamesHeroes[];
  isDire: boolean;
  direHasWon: boolean;
}) {
  const hasWon = isDire === direHasWon;

  return (
    <div
      className={cn(
        "grid grid-flow-row p-2",
        hasWon ? "outline-2 outline-amber-200" : "",
        isDire ? "pr-2" : "pl-2"
    )}
    >
      <p
        className={cn(
          "row-span-2 text-center ",
          hasWon ? "text-green-500" : "text-red-600",
        )}
      >
        {sideName}
      </p>
      {sideHeroes.map((item) => (
        <HeroLine isDire hero_id={item.hero_id} key={item.hero_id} />
      ))}
    </div>
  );
}