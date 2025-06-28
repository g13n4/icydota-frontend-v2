import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { memo } from "react";
import DataTable from "./DataTable/DataTablePage";
import DataTableSelectors from "./DataTableSelectors/DataTableSelectors";
import MatchSelectorPage from "./MatchSelectorPage/InfiniteMatchSelectorPage";

const mobileColSize = "";
const pcColSize = "col-span-5";

const RightBar = memo(function RightBar() {
  const isMobile = useIsMobile();
  const { isMatchAll } = usePageTypeContext();

  if (isMatchAll) {
    return <MatchSelectorPage />;
  }

  return (
    <Card className={cn("flex flex-col", isMobile ? mobileColSize : pcColSize)}>
      <DataTableSelectors />
      <DataTable />
    </Card>
  );
});

export default RightBar;