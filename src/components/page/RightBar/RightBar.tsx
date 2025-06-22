import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { Card } from "@/components/ui/card";
import { memo } from "react";
import DataTable from "./DataTable/DataTablePage";
import DataTableSelectors from "./DataTableSelectors/DataTableSelectors";
import MatchSelectorPage from "./MatchSelectorPage/InfiniteMatchSelectorPage";

const RightBar = memo(function RightBar() {
  const { isMatchAll } = usePageTypeContext();

  if (isMatchAll) {
    return (
      <Card className="flex flex-col col-span-5 max-h-[80%]">
        <MatchSelectorPage />
      </Card>
    );
  }

  return (
    <Card className="flex flex-col col-span-5">
      <DataTableSelectors />
      <DataTable />
    </Card>
  );
});

export default RightBar;