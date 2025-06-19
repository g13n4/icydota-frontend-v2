import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";
import dataFormatSelectorData from "@/constants/Selectors/dataFormatSelectorData";

export default function DataFormatSelector() {
  return (
    <CustomTabsSelector
      orientation="vertical"
      fieldName="selectedDataFormat"
      data={dataFormatSelectorData}
      className={`grid w-full grid-rows-${dataFormatSelectorData.length} shadow-shadow border-2 `}
    />
  );
}
