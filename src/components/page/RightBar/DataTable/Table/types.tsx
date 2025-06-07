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
  windows_data: Record<string, number | null>;
}

interface ValueMappingItemType {
  col: string;
  min: number;
  max: number;
}

interface TableResponseType {
  table_data: TableDataType;
  table_options: Record<string, unknown>;
  value_mapping: ValueMappingItemType[];
}

export type { TableResponseType };
