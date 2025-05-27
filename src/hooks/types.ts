import type { ItemStringType } from "@/types/types";

interface useDataFormatDataType {
  dataType: string;
}

interface useDataFormatDataReturnType {
    isActive: boolean;
    data: ItemStringType[];
    dataFormatType: string;
  }
  

export type {useDataFormatDataType, useDataFormatDataReturnType}