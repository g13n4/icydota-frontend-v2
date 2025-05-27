import { selectedDataFormatEnum } from "@/types/enums";

const dataFormatSelectorData = [
  {
    value: selectedDataFormatEnum.MATCH,
    label: "Match",
  },
  {
    value: selectedDataFormatEnum.AGGREGATION,
    label: "Aggregation",
  },
  {
    value: selectedDataFormatEnum.CROSS_COMPARISON,
    label: "Cross-Comparison",
  },
];

export default dataFormatSelectorData;
