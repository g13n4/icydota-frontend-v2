import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { Card } from "@/components/ui/card";
import DataTableSelectors from "./DataTableSelectors/DataTableSelectors";
import MatchSelectorPage from "./MatchSelectorPage/MatchSelectorPage";
import DataTable from "./DataTable/DataTablePage";

export default function RightBar() {
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
}