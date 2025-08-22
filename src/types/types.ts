import type {
  DataRepresentationEnum,
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

type LoPTypeType = `${leaguePachTypeEnum}`;
type selectedPTType = `${PlayerTeamEnum}`;
type selectedDataFormatType = `${selectedDataFormatEnum}`;

type comparisonTypeType = `${comparisonTypeEnum}`;
type comparisonType = `${comparisonEnum}`;

type gameStateType = `${GameStateEnum}`;

type DataRepresentationType = `${DataRepresentationEnum}`

export type {
  DataRepresentationType,
  gameStateType,
  comparisonType,
  comparisonTypeType,
  ItemNymericType,
  ItemStringType,
  LoPTypeType,
  selectedDataFormatType,
  selectedPTType,
};

