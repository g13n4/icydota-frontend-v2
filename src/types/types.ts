import type {
  GameStateEnum,
  PlayerTeamEnum,
  comparisonEnum,
  comparisonTypeEnum,
  leaguePachTypeEnum,
  selectedDataFormatEnum,
} from "./enums";

interface ItemNymericType {
  label: string;
  value: number;
}

interface ItemStringType {
  label: string;
  value: string;
}

type leaguePachTypeType = `${leaguePachTypeEnum}`;
type selectedPTType = `${PlayerTeamEnum}`;
type selectedDataFormatType = `${selectedDataFormatEnum}`;

type comparisonTypeType = `${comparisonTypeEnum}`;
type comparisonType = `${comparisonEnum}`;

type gameStateType = `${GameStateEnum}`;

export type {
  gameStateType,
  comparisonType,
  comparisonTypeType,
  ItemNymericType,
  ItemStringType,
  leaguePachTypeType,
  selectedDataFormatType,
  selectedPTType,
};

