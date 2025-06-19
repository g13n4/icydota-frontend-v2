import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { Card } from "@/components/ui/card";
import { memo } from "react";
import DataTable from "./DataTable/DataTablePage";
import DataTableSelectors from "./DataTableSelectors/DataTableSelectors";
import MatchSelectorPage from "./MatchSelectorPage/MatchSelectorPage";

const RightBar = memo(function RightBar() {
  const { isMatchAll } = usePageTypeContext();

  if (isMatchAll) {
    return <MatchSelectorPage />;
  }

  return (
    <Card className="flex flex-col col-span-4">
      <DataTableSelectors />
      <DataTable />
    </Card>
  );
});

export default RightBar;