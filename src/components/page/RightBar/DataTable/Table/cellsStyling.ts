import { getColours, getTargetColor } from "./helpers";
import type { AgGridColumnsType, ValueMappingMapType,  } from "./types";
// import type { HeroesMapType, FacetsMapType } from "@/data/types";
// import HeroNameMap from "@/data/heroes.json";
// import FaceteMap from "@/data/facets.json";

// const HERO_MAP = HeroNameMap as HeroesMapType;
// const FACET_MAP = FaceteMap as FacetsMapType;

export default function setCellsStyling({
  columnData,
  valueMap,
  isDarkTheme,
}: {
  columnData: AgGridColumnsType[];
  valueMap: ValueMappingMapType;
  isDarkTheme: boolean;
}) {
  const colours = getColours(isDarkTheme);
  return columnData.map((item) => {
    const rangeValues = valueMap[item.field];

    return {
      cellStyle: (params) => {
        return getTargetColor(
          colours,
          params.value,
          rangeValues?.min,
          rangeValues?.max,
          isDarkTheme,
        );
      },
      ...item,
    };
  });
}
