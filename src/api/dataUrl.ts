import { PlayerTeamEnum, leaguePachTypeEnum } from "@/types/enums";
import type {
  AggregationUrlType,
  CrossComparisonUrl,
  MatchUrlType,
} from "./types";

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

function matchUrl({
  matchId,
  calculationId,
  PoT,
  stage,
  comparison,
  comparisonType,
}: MatchUrlType) {
  const link = [
    "data",
    "match",
    `${PoT}`,
    `${matchId}`,
    `${calculationId}`,
  ].join("/");

  if (PlayerTeamEnum.PLAYER === PoT) {
    const params = [
      `stage=${stage}`,
      `comp=${comparison}`,
      `ctype=${comparisonType}`,
    ].join("&");
    return `${link}?${params}`;
  }
  const params = [`comp=${comparison}`].join("&");

  return `${link}?${params}`;
}

function aggregationUrl({
  isLeague,
  laegueId,
  patchId,
  PoT,
  calculationId,
  aggregationType,
  stage,
  comparison,
}: AggregationUrlType) {
  const { LoP, id_ } = getDataSource(isLeague, laegueId, patchId);

  const link = [
    "data",
    "aggregation",
    `${PoT}`,
    LoP,
    `${id_}`,
    `${calculationId}`,
  ].join("/");

  if (PlayerTeamEnum.PLAYER === PoT) {
    const params = [
      `atype=${aggregationType}`,
      `stage=${stage}`,
      `comp=${comparison}`,
    ].join("&");

    return `${link}?${params}`;
  }

  const params = [`stage=${stage}`, `comp=${comparison}`].join("&");

  return `${link}?${params}`;
}

function crossComparisonUrl({
  isLeague,
  laegueId,
  patchId,
  PoT,
  calculationId,
  crossComparisonType,
  position,
  comparison,
  fieldTotal,
  fieldWindow,
}: CrossComparisonUrl) {
  const { LoP, id_ } = getDataSource(isLeague, laegueId, patchId);

  const link = [
    "data",
    "cross_comparison",
    `${PoT}`,
    LoP,
    `${id_}`,
    `${calculationId}`,
  ].join("/");

  const selectedField = calculationId === "0" ? fieldTotal : fieldWindow;

  if (PlayerTeamEnum.PLAYER === PoT) {
    const params = [
      `atype=${crossComparisonType}`,
      `position=${position}`,
      `field=${selectedField}`,
      `comp=${comparison}`,
    ].join("&");

    return `${link}?${params}`;
  }
  const params = [`field=${selectedField}`, `comp=${comparison}`].join("&");

  return `${link}?${params}`;
}

export { aggregationUrl, crossComparisonUrl, matchUrl };
