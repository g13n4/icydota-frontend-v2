import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { selectedDataFormatEnum } from "@/types/enums";
import ComparisonSelector from "./Selectors/ComparisonSelector";
import CrossComparisonFieldSelector from "./Selectors/CrossComparison/CrossComparisonFieldSelector";
import CrossComparisonPositionSelector from "./Selectors/CrossComparison/CrossComparisonPositionSelector";
import ComparisonTypeSelector from "./Selectors/Match/ComparisonTypeSelector";
import WindowsTypeSelector from "./Selectors/WindowsTypeSelector";
import MatchSelector from "./Selectors/Match/MatchSelector";
import GoBackButton from "./GoBackButton";
import CrossComparisonComparisonSelector from "./Selectors/CrossComparison/CrossComparisonComparisonSelector";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function DataTableSelectors() {
  const { selectedDataFormat } = usePageTypeContext();
  const isMobile = useIsMobile();

  const gridTheme = cn(
    "grid lg:grid-flow-col sm:grid-flow-row gap-2 content-baseline sm:*:px-2",
    isMobile ? "" : "*:border-l-1 *:first:border-0 ",
  );

  if (selectedDataFormat === selectedDataFormatEnum.MATCH) {
    return (
      <div className={gridTheme}>
        <GoBackButton />
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
      <CrossComparisonFieldSelector />
      <CrossComparisonPositionSelector />
      <CrossComparisonComparisonSelector />
    </div>
  );
}
