import type { LoPTypeType } from "./types/types";

const initialDataUrl = "initial";
const graphDataUrl = (matchId: number | string, position: number) =>
  `graph/${matchId}/${position}`;
const crossComparisonFieldsUrl = "cross-comparison/fields";
const leagueMatchesUrl = (leagueId: string | number | null) =>
  `league/${leagueId}`;
const allMatchesUrl = (
  type_: LoPTypeType,
  id_: number | string | null,
  limit: number | string,
  offset: number | string,
) => `all/${type_}/${id_}?limit=${limit}&offset=${offset}`;

const leaguePatchHeaderUrl = (
  type_: LoPTypeType,
  id_: number | string | null,
) => `header/${type_}/${id_}`;

const steamLink = (link: string) =>
  `https://cdn.cloudflare.steamstatic.com/${link}`;

export {
  leaguePatchHeaderUrl,
  allMatchesUrl,
  crossComparisonFieldsUrl,
  initialDataUrl,
  graphDataUrl,
  leagueMatchesUrl,
  steamLink,
};

