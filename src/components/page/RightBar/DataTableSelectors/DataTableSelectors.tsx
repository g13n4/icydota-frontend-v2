import ComparisonSelector from "./Selectors/ComparisonSelector";
import ComparisonTypeSelector from "./Selectors/Match/ComparisonTypeSelector";
import CrossComparisonPositionSelector from "./Selectors/CrossComparison/CrossComparisonPositionSelector";
import CrossComparisonTypeSelector from "./Selectors/CrossComparison/CrossComparisonTypeSelector";
import MatchSelector from "./Selectors/Match/MatchSelector";
import WindowsTypeSelector from "./Selectors/WindowsTypeSelector";
import CrossComparisonFieldSelector from "./Selectors/CrossComparison/CrossComparisonFieldSelector";
import type { selectedDataFormatType } from "@/types/types";
import { selectedDataFormatEnum } from "@/types/enums";


function getSelector(selectorType: selectedDataFormatType) {
  if (selectorType === selectedDataFormatEnum.MATCH) {
    return 

  } 

}


export default function DataTableSelectors() {
  return (
    <div className="grid grid-cols-6 gap-2 p-2">
      <MatchSelector />
      <ComparisonTypeSelector />
      <ComparisonSelector />
      <WindowsTypeSelector />
      <CrossComparisonPositionSelector />
      <CrossComparisonTypeSelector />
      <CrossComparisonFieldSelector />
    </div>
  );
}


