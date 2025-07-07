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
import type { AllGameSideComparisonData, AllGameSideData } from "../../types";

const CALC_NAME_MAP = SideCalcNames as SideCalcMapType;

const WinStatusCell = "border-1 border-green-600/50";
const LoseStatusCell = "border-1 border-red-600/50 border-dotted";

const sentCellBorder = "border-y-0 border-l-0";
const direCellBorder = "border-y-0 border-r-0";

const EqualStatusCell = "";

function getCellStyle(isDire: boolean, compValue: boolean | null) {
  if (compValue === null) return EqualStatusCell;
  const sideBorder = isDire ? direCellBorder : sentCellBorder;
  const mainColour = compValue === isDire ? WinStatusCell : LoseStatusCell;
  return `${mainColour} ${sideBorder}`;
}

export default function GameCardStatsTable({
  sentData,
  direData,
  compData,
}: {
  sentData: AllGameSideData;
  direData: AllGameSideData;
  compData: AllGameSideComparisonData;
}) {
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

          const direStyle = getCellStyle(
            true,
            compData[key as keyof AllGameSideData],
          );
          const sentStyle = getCellStyle(
            false,
            compData[key as keyof AllGameSideData],
          );

          return (
            <TableRow className="text-center" key={`row-${key}`}>
              <TableCell key={`row-${key}-sent`} className={sentStyle}>
                {sentValue}
              </TableCell>
              <TableCell key={`row-${key}-name`}>{cellName}</TableCell>

              <TableCell key={`row-${key}-dire`} className={direStyle}>
                {direValue}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}


