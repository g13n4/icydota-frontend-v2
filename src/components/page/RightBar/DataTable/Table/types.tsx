interface ValueMappingItemType {
  col: string;
  min: number;
  max: number;
}

type ValueMappingMapType = Record<
  string,
  {
    min: number;
    max: number;
  }
>;


interface AgGridColumnsType {
  field: string;
  headerName: string;
  pinned: string;
  children?: AgGridColumnsType[];
}

interface MatchNamingDataType {
  direName: string;
  sentName: string;
  hasDireWon: boolean;
}

interface TableResponseType {
  data: Record<string, number | null>;
  columns: AgGridColumnsType[];
  valueMapping: ValueMappingMapType;
  matchName?: MatchNamingDataType;
}

export type {
  AgGridColumnsType,
  TableResponseType,
  ValueMappingItemType,
  ValueMappingMapType,
  MatchNamingDataType
};

