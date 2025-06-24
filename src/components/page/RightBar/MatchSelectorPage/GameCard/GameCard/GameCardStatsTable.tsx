import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SideCalcNames from "@/data/side_calc.json";
import type { SideCalcMapType } from "@/data/types";
import type { AllGameSideData } from "../../types";

const CALC_NAME_MAP = SideCalcNames as SideCalcMapType;

const WinStatusCell = "decoration-green-500 font-semibold";
const LoseStatusCell = "decoration-red-500";

export default function GameCardStatsTable({
  sentData,
  direData,
}: { sentData: AllGameSideData; direData: AllGameSideData }) {
  return (
    <Table className="w-full table-fixed">
      <TableHeader>
        <TableRow className="bg-secondary-background text-l">
          <TableHead className="align-middle text-left" />
          <TableHead className="align-middle text-center" />
          <TableHead className="align-middle text-right" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(sentData).map((key) => {
          const cellName = CALC_NAME_MAP[key];
          const sentValue = sentData[key as keyof AllGameSideData];
          const direValue = direData[key as keyof AllGameSideData];
          return (
            <TableRow className="text-center" key={`row-${key}`}>
              <TableCell key={`row-${key}-sent`}>{sentValue}</TableCell>
              <TableCell key={`row-${key}-name`}>{cellName}</TableCell>

              <TableCell key={`row-${key}-dire`}>{direValue}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}


