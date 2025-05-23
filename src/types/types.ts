import type {
  comparisonEnum,
  comparisonTypeEnum,
  leaguePachTypeEnum,
  selectedDataFormatEnum,
  selectedPTEnum,
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
type selectedPTType = `${selectedPTEnum}`;
type selectedDataFormatType = `${selectedDataFormatEnum}`;

type comparisonTypeType = `${comparisonTypeEnum}`;
type comparisonType = `${comparisonEnum}`;

export type {
  comparisonType, comparisonTypeType,
  ItemNymericType,
  ItemStringType,
  leaguePachTypeType,
  selectedDataFormatType,
  selectedPTType
};

