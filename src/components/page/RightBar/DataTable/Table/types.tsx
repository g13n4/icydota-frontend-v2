import type { S2DataConfig } from "@antv/s2";

interface ValueMappingItemType {
  col: string;
  min: number;
  max: number;
}

interface TableResponseType {
  table_data: S2DataConfig;
  table_options: Record<string, unknown>;
  value_mapping: ValueMappingItemType[];
}

export type { TableResponseType };
