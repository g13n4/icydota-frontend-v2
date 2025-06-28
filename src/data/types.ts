interface FacetHeroMap {
  name: string;
  description: string;
}

type FacetsMapType = Record<string, Record<string, FacetHeroMap>>;

interface HeroMap {
  name: string;
  img_url: string;
  icon_url: string;
}

type HeroesMapType = Record<string, HeroMap>;

type HeroesIconMapType = Record<string, string>;

type SideCalcMapType = Record<string, string>;

export type {
  FacetsMapType, HeroesIconMapType, HeroesMapType, HeroMap, SideCalcMapType
};

