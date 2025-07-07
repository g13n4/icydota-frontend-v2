import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { AllGamesItem } from "../../types";

const CellClass = "p-0.5 align-baseline";

const WinStatusCell = "decoration-green-500 font-semibold bg-green-500/50";
const LoseStatusCell = "decoration-red-500 bg-red-500/50 text-black";

export default function GameCardHeader({
  sentName,
  direName,
  direWon,
}: AllGamesItem & { direWon: boolean }) {
  return (
    <Table className="w-full table-fixed border-0">
      <TableHeader>
        <TableRow className="bg-secondary-background text-l">
          <TableHead className="text-center text-foreground w-5/12">
            {sentName}
          </TableHead>
          <TableHead className="align-middle text-right w-1/12">v</TableHead>
          <TableHead className="align-middle text-left w-1/12">s</TableHead>
          <TableHead className="text-center text-foreground w-5/12">
            {direName}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="text-center">
          <TableCell
            colSpan={2}
            className={cn(
              CellClass,
              "underline",
              direWon ? LoseStatusCell : WinStatusCell,
            )}
          >
            {direWon ? "Lose" : "Win"}
          </TableCell>
          <TableCell
            colSpan={2}
            className={cn(
              CellClass,
              "underline",
              direWon ? WinStatusCell : LoseStatusCell,
            )}
          >
            {direWon ? "Win" : "Lose"}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}


