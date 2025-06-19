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
}

interface TableResponseType {
  data: Record<string, number | null>;
  columns: AgGridColumnsType[];
  valueMapping: ValueMappingMapType;
}

export type {
  AgGridColumnsType, TableResponseType,
  ValueMappingItemType,
  ValueMappingMapType
};

