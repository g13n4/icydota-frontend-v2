import type { leaguePachTypeType } from "./types/types";

const initialDataUrl = "initial";
const crossComparisonFieldsUrl = "cross-comparison/fields";
const leagueMatchesUrl = (leagueId: string | number | null) => `league/${leagueId}`;
const allMatchesUrl = (type_: leaguePachTypeType, id_: number | string) =>
  `all/${type_}/${id_}`;

export { initialDataUrl, crossComparisonFieldsUrl, leagueMatchesUrl, allMatchesUrl };
