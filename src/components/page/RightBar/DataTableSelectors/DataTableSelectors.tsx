import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { selectedDataFormatEnum } from "@/types/enums";
import ComparisonSelector from "./Selectors/ComparisonSelector";
import CrossComparisonFieldSelector from "./Selectors/CrossComparison/CrossComparisonFieldSelector";
import CrossComparisonPositionSelector from "./Selectors/CrossComparison/CrossComparisonPositionSelector";
import CrossComparisonTypeSelector from "./Selectors/CrossComparison/CrossComparisonTypeSelector";
import ComparisonTypeSelector from "./Selectors/Match/ComparisonTypeSelector";
import MatchSelector from "./Selectors/Match/MatchSelector";
import WindowsTypeSelector from "./Selectors/WindowsTypeSelector";
import CrossComparisonComparisonSelector from "./Selectors/CrossComparison/CrossComparisonComparisonSelector";

const gridTheme = "grid grid-cols-5 gap-2 p-2";

export default function DataTableSelectors() {
  const { selectedDataFormat } = usePageTypeContext();

  if (selectedDataFormat === selectedDataFormatEnum.MATCH) {
    return (
      <div className={gridTheme}>
        <MatchSelector />
        <ComparisonSelector />
        <ComparisonTypeSelector />
        <WindowsTypeSelector />
      </div>
    );
  }
  if (selectedDataFormat === selectedDataFormatEnum.AGGREGATION) {
    return (
      <div className={gridTheme}>
        <ComparisonSelector />
        <WindowsTypeSelector />
      </div>
    );
  }

  return (
    <div className={gridTheme}>
      <CrossComparisonPositionSelector />
      <CrossComparisonTypeSelector />
      <CrossComparisonFieldSelector />
      <CrossComparisonComparisonSelector />
    </div>
  );
}
