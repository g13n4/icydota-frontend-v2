import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HeroNameMap from "@/data/heroes.json";
import type { HeroesMapType } from "@/data/types";
import { cn } from "@/lib/utils";
import { steamLink } from "@/urls";
import type { AllGamesHeroes, AllGamesItem } from "../../types";

const HERO_MAP = HeroNameMap as HeroesMapType;
const CellClass = "p-0.25 align-baseline";
const SentCellClass = `${CellClass} text-right pr-0.5`;
const DireCellClass = `${CellClass} text-left  pl-0.5`;

function HeroLine({
  isDire,
  hero_id,
  nickname,
  kda,
}: { isDire: boolean } & AllGamesHeroes) {
  const { name: hero_name, icon_url } = HERO_MAP[hero_id];

  const IconCell = () => (
    <TableCell className="min-w-[24px] text-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <img
              className="inline-block"
              src={steamLink(icon_url)}
              alt={hero_name}
              width={24}
              height={24}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{hero_name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </TableCell>
  );
  const NicknameCell = () => (
    <TableCell
      className={cn("truncate", isDire ? DireCellClass : SentCellClass)}
      key={nickname}
    >
      {nickname}
    </TableCell>
  );
  const KDACell = () => (
    <TableCell
      key={`${hero_name}-kda`}
      className={cn(isDire ? DireCellClass : SentCellClass)}
    >
      {kda}
    </TableCell>
  );

  if (isDire) {
    return (
      <>
        <IconCell />
        <KDACell />
        <NicknameCell />
      </>
    );
  }

  return (
    <>
      <NicknameCell />
      <KDACell />
      <IconCell />
    </>
  );
}

export default function GameCardHeroTable({
  sentHeroes,
  direHeroes,
}: AllGamesItem & { direWon: boolean }) {
  return (
    <Table className="w-full table-fixed border-0">
      <TableHeader>
        <TableRow className="bg-secondary-background text-l">
          <TableHead className="text-center text-foreground w-5/24" />
          <TableHead className="text-center text-foreground w-5/24" />
          <TableHead className="text-center text-foreground w-2/24" />
          <TableHead className="text-center text-foreground w-2/24" />
          <TableHead className="text-center text-foreground w-5/24" />
          <TableHead className="text-center text-foreground w-5/24" />
        </TableRow>
      </TableHeader>
      <TableBody>
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


