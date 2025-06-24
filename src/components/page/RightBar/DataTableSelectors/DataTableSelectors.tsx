import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { selectedDataFormatEnum } from "@/types/enums";
import ComparisonSelector from "./Selectors/ComparisonSelector";
import CrossComparisonFieldSelector from "./Selectors/CrossComparison/CrossComparisonFieldSelector";
import CrossComparisonPositionSelector from "./Selectors/CrossComparison/CrossComparisonPositionSelector";
import CrossComparisonTypeSelector from "./Selectors/CrossComparison/CrossComparisonTypeSelector";
import ComparisonTypeSelector from "./Selectors/Match/ComparisonTypeSelector";
import WindowsTypeSelector from "./Selectors/WindowsTypeSelector";
import CrossComparisonComparisonSelector from "./Selectors/CrossComparison/CrossComparisonComparisonSelector";
import MatchSelectorV2 from "./Selectors/Match/MatchSelectorV2";

const gridTheme = "grid grid-flow-col-dense gap-2 content-baseline *:border-l-1 *:first:border-0 *:px-2";

export default function DataTableSelectors() {
  const { selectedDataFormat } = usePageTypeContext();

  if (selectedDataFormat === selectedDataFormatEnum.MATCH) {
    return (
      <div className={gridTheme}>
        <MatchSelectorV2 />
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
      <CrossComparisonFieldSelector />
      <CrossComparisonPositionSelector />
      <CrossComparisonTypeSelector />
      <CrossComparisonComparisonSelector />
    </div>
  );
}
