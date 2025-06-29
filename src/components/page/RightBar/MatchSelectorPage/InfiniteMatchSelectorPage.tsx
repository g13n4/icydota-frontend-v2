import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { allMatchesUrl } from "@/urls";
import useSWR from "swr";
import GameCard from "./GameCard/GameCard";
import type { AllGamesResponse } from "./types";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 48;
const OFFSET = 0;

export default function InfiniteMatchSelectorPage({className}: {className?: string | undefined}) {
  const { LoPType, isLP, selectedLeagueId, selectedPatchId } =
    usePageTypeContext();

  const { data, error, isLoading } = useSWR<AllGamesResponse, Error>(
    allMatchesUrl(
      LoPType,
      isLP ? selectedLeagueId : selectedPatchId,
      PAGE_SIZE,
      OFFSET,
    ),
  );

  if (isLoading || error || !data) return null;

  return (
    <>
      <div
        className={cn(
          "flex flex-col h-svh overflow-y-scroll",
          className
        )}
      >
        <div
          className="
      grid
      xl:grid-cols-5
      lg:grid-cols-4
      md:grid-cols-3 
      gap-2 
        "
        >
          {data.data.map((item) => (
            <GameCard {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div
        className="h-8 w-max text-2xl text-center align-middle"
        // onClick={() => setSize(size + 48)}
        //   onKeyDown={() => setSize(size + 48)}
      >
        Load More
      </div>
    </>
  );
}