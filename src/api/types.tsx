interface MatchUrlType {
  matchId: string | number,
  calculationId: string | number,
  PoT: string,
  stage: string,
  comparison: string,
  comparisonType: string,
}

interface AggregationUrlType {
  isLeague: boolean,
  laegueId: string | number,
  patchId: string | number,
  PoT: string,
  calculationId: string | number,
  aggregationType: string | number,
  stage: string,
  comparison: string,
}

interface CrossComparisonUrl {
  isLeague: boolean,
  laegueId: string | number,
  patchId: string | number,
  PoT: string,
  calculationId: string | number,
  crossComparisonType: string | number,
  position: string | number,
  comparison: string,
  fieldTotal: string,
  fieldWindow: string,
}

export type {
    MatchUrlType, AggregationUrlType, CrossComparisonUrl
}
