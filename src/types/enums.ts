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
  PLAYER = "player",
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

enum DataRepresentationEnum {
  LANE = 0,
  PERCENT = 1,
  LEVEL = 2, 
  TIME = 3, 
  BOOLEAN = 4,
}

export {
  comparisonEnum, DataRepresentationEnum,
  comparisonTypeEnum, crossComparisonComparisonEnum, GameStateEnum, leaguePachTypeEnum, PlayerTeamEnum, selectedDataFormatEnum
};

