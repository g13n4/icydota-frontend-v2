import type { ItemStringType } from "@/types/types";

interface useDataFormatDataType {
  dataType: string;
}

interface useDataFormatDataReturnType {
    isActive: boolean;
    data: ItemStringType[];
  }
  

export type {useDataFormatDataType, useDataFormatDataReturnType}