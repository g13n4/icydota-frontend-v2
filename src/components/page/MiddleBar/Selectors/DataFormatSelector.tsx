import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";
import dataFormatSelectorData from "@/constants/Selectors/dataFormatSelectorData";

export default function DataFormatSelector() {
  return (
    <CustomTabsSelector
      orientation="vertical"
      reponsive={true}
      fieldName="selectedDataFormat"
      data={dataFormatSelectorData}
      className="w-full shadow-shadow border-2"
    />
  );
}
