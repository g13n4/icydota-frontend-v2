import { PlayerTeamEnum, leaguePachTypeEnum } from "@/types/enums";

function getDataSource(
  isLeague: boolean,
  leagueId: string | number,
  patchId: string | number,
): { LoP: string; id_: string | number } {
  const LoP = isLeague ? leaguePachTypeEnum.LEAGUE : leaguePachTypeEnum.PATCH;
  const id_ = isLeague ? leagueId : patchId;
  return { LoP, id_ };
}

// function getDataFormat(isPlayer: boolean): string {
//   return isPlayer ? PlayerTeamEnum.PLAYER : PlayerTeamEnum.TEAM;
// }

function matchUrl(
  matchId: string | number,
  calculationId: string | number,
  PoT: string,
  stage: string,
  comparison: string,
  comparisonType: string,
) {
  const link = [
    "data",
    "match",
    `${PoT}`,
    `${matchId}`,
    `${calculationId}`,
  ].concat("/");

  const params = [
    `stage=${stage}`,
    `comparison=${comparison}`,
    `ctype=${comparisonType}`,
  ].concat("&");

  return `${link}?${params}`;
}

function aggregationUrl(
  isLeague: boolean,
  laegueId: string | number,
  patchId: string | number,
  PoT: string,
  calculationId: string | number,
  aggregationType: string | number,
  stage: string,
  comparison: string,
) {
  const { LoP, id_ } = getDataSource(isLeague, laegueId, patchId);

  const link = [
    "data",
    "aggregation",
    `${PoT}`,
    LoP,
    `${id_}`,
    `${calculationId}`,
    `${aggregationType}`,
  ].concat("/");

  const params = [`stage=${stage}`, `comparison=${comparison}`].concat("&");

  return `${link}?${params}`;
}

function crossComparisonUrl(
  isLeague: boolean,
  laegueId: string | number,
  patchId: string | number,
  PoT: string,
  calculationId: string | number,
  crossComparisonType: string | number,
  position: string | number,
  comparison: string,
  field: string,
) {
  const { LoP, id_ } = getDataSource(isLeague, laegueId, patchId);

  const link = [
    "data",
    "cross_comparison",
    `${PoT}`,
    LoP,
    `${id_}`,
    `${calculationId}`,
    `${crossComparisonType}`,
    `${position}`,
  ].concat("/");

  const params = [`field=${field}`, `comparison=${comparison}`].concat("&");

  return `${link}?${params}`;
}

export { aggregationUrl, crossComparisonUrl, matchUrl };
