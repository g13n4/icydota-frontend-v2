interface TableFieldsType {
  rows: string[];
  colunbs: string[];
  values: string[];
  valueInCols?: boolean;
}

interface TableMetaItemType {
  field: string;
  name: string;
}

interface TableDataType {
  fields: TableFieldsType;
  meta: TableMetaItemType[];
  data: Record<string, number | null>;
}

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
  data: TableDataType;
  columns: AgGridColumnsType[];
  valueMapping: ValueMappingMapType;
}

export type { TableResponseType, ValueMappingItemType, ValueMappingMapType, AgGridColumnsType };
