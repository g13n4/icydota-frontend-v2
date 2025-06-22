interface FacetHeroMap {
  name: string;
  descriptin: string;
}

type FacetsMapType = Record<string, Record<string, FacetHeroMap>>;

interface HeroMap {
  name: string;
  img_url: string;
  icon_url: string;
}

type HeroesMapType = Record<string, HeroMap>;

type SideCalcMapType = Record<string, string>;

export type { FacetsMapType, HeroesMapType, SideCalcMapType, HeroMap };
