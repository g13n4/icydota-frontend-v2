import HeroIconMap from "@/data/heroes_icons.json";
import type { HeroesIconMapType } from "@/data/types";
import { steamLink } from "@/urls";

const HERO_ICON = HeroIconMap as HeroesIconMapType;

export default function getHeroStyling(value: string) {
  const iconUrl = HERO_ICON[value];

  return (
    <span className="flex-col">
      {value}
      <img src={steamLink(iconUrl)} loading="lazy" alt={value} width={24} height={24} className="z-10"/>
    </span>
  );
}
