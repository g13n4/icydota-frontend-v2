import type { PageTypeType } from "@/components/context/types";
import type { ItemStringType } from "@/types/types";

interface useDataFormatDataType {
  dataType: string;
}

interface useDataFormatDataReturnType {
    isActive: boolean;
    data: ItemStringType[];
    dataFormatType: keyof PageTypeType | null;
  }
  
  interface TableDataRepresentationType {
    windowFormat?: number;
    totalFormat?: Record<string, number>;
    enforceWindowPercentFormat?: boolean;
    enforceTotalPercentFormat?: boolean;
}

export type {useDataFormatDataType, useDataFormatDataReturnType, TableDataRepresentationType}