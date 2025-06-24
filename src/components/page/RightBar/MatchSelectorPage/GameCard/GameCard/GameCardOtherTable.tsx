import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AllGamesItem } from "../../types";

export default function GameCardOtherTable({ id, duration }: AllGamesItem) {
  return (
    <Table className="w-full table-fixed">
      <TableHeader>
        <TableRow className="bg-secondary-background text-l">
          <TableHead className="align-middle text-center">Game ID</TableHead>
          <TableHead className="align-middle text-center">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="text-center">
          <TableCell>{id}</TableCell>

          <TableCell>{duration}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}


