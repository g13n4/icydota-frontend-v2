import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HeroNameMap from "@/data/heroes.json";
import type { HeroesMapType } from "@/data/types";
import { cn } from "@/lib/utils";
import { steamLink } from "@/urls";
import type { AllGamesItem } from "../../types";

const HERO_MAP = HeroNameMap as HeroesMapType;
const CellClass = "p-0.5 align-baseline";
const SentCellClass = `${CellClass} text-right pr-1`;
const DireCellClass = `${CellClass}  pl-1`;

const WinStatusCell = "decoration-green-500 font-semibold bg-green-500/50";
const LoseStatusCell = "decoration-red-500 bg-red-500/50 text-black";

function HeroLine({ isDire, hero_id }: { isDire: boolean; hero_id: string }) {
  const { name, icon_url } = HERO_MAP[hero_id];

  const IconCell = () => (
    <TableCell className="min-w-[24px]">
      <img src={steamLink(icon_url)} alt={name} width={24} height={24} />
    </TableCell>
  );
  const CurrentCell = () => (
    <TableCell
      className={cn("truncate", isDire ? DireCellClass : SentCellClass)}
      key={name}
    >
      {name}
    </TableCell>
  );

  if (isDire) {
    return (
      <>
        <IconCell />
        <CurrentCell />
      </>
    );
  }

  return (
    <>
      <CurrentCell />
      <IconCell />
    </>
  );
}

export default function GameCardHeroTable({
  sentName,
  direName,
  sentHeroes,
  direHeroes,
  direWon,
}: AllGamesItem & { direWon: boolean }) {
  return (
    <Table className="w-full table-fixed border-0">
      <TableHeader>
        <TableRow className="bg-secondary-background text-l">
          <TableHead className="text-center text-foreground w-5/12">
            {sentName}
          </TableHead>
          <TableHead className="align-middle text-right">v</TableHead>
          <TableHead className="align-middle text-left">s</TableHead>
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

        {[0, 1, 2, 3, 4].map((idx) => (
          <TableRow key={idx} className="">
            <HeroLine isDire={false} {...sentHeroes[idx]} />
            <HeroLine isDire={true} {...direHeroes[idx]} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


