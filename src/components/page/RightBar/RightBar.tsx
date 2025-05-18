import { Card } from "@/components/ui/card";
import DataTable from "./DataTable/DataTable";
import DataTableSelectors from "./DataTableSelectors/DataTableSelectors";
import { useParams } from "react-router";
import type { MainRouteType } from "@/Routes/types";


export default function RightBar() {
  //const { leaguePatchId } = useParams() as MainRouteType;

    return (
    <Card className="flex flex-col col-span-4">
      <DataTableSelectors />
      <DataTable />
    </Card>
  );
}