import AggregationTypeSelector from "./Selectors/Aggregation/AggregationTypeSelector";
import ComparisonSelector from "./Selectors/ComparisonSelector";
import ComparisonTypeSelector from "./Selectors/Match/ComparisonTypeSelector";
import CrossComparisonPositionSelector from "./Selectors/CrossComparison/CrossComparisonPositionSelector";
import CrossComparisonTypeSelector from "./Selectors/CrossComparison/CrossComparisonTypeSelector";
import MatchSelector from "./Selectors/Match/MatchSelector";
import WindowsTypeSelector from "./Selectors/WindowsTypeSelector";

// CCOMP POS SELECTOR middle core support
// CCOMP TYPE SELECTOR PLAYER HERO HERO/FACET
// AGG TYPE SELECTOR

export default function DataTableSelectors() {
  return (
    <div className="grid grid-cols-6 gap-2 p-2">
      <MatchSelector />
      <ComparisonTypeSelector />
      <ComparisonSelector />
      <AggregationTypeSelector />
      <WindowsTypeSelector />
      <CrossComparisonPositionSelector />
      <CrossComparisonTypeSelector />
    </div>
  );
}