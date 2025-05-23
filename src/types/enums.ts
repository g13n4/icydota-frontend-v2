enum leaguePachTypeEnum {
  LEAGUE = "league",
  PATCH = "patch",
}

enum selectedPTEnum {
  PLAYER = "player",
  TEAM = "team",
}

enum selectedDataFormatEnum {
  MATCH = "match",
  AGGREGATION = "aggregation",
  CROSS_COMPARISON = "cross-comparison",
}

enum comparisonTypeEnum {
  BASIC = "basic",
  COMPLEX = "complex",
}

enum comparisonEnum {
  FLAT = "flat",
  PERCENT = "perc",
  NONE = "none",
}

export {
    comparisonEnum, comparisonTypeEnum, leaguePachTypeEnum, selectedDataFormatEnum, selectedPTEnum
};
