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
  GameStateEnum, comparisonEnum, comparisonTypeEnum, leaguePachTypeEnum, selectedDataFormatEnum, PlayerTeamEnum
};
