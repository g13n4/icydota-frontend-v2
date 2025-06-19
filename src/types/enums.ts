enum leaguePachTypeEnum {
  LEAGUE = "league",
  PATCH = "patch",
}

enum PlayerTeamEnum {
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

enum crossComparisonComparisonEnum {
  FLAT = "flat",
  PERCENT = "perc",
}

enum comparisonEnum {
  FLAT = "flat",
  PERCENT = "perc",
  NONE = "none",
}

enum GameStateEnum {
  LANE = "lane",
  GAME = "game",
}

export {
  comparisonEnum,
  comparisonTypeEnum, crossComparisonComparisonEnum, GameStateEnum, leaguePachTypeEnum, PlayerTeamEnum, selectedDataFormatEnum
};

