import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { Card } from "@/components/ui/card";
import { allMatchesUrl } from "@/urls";
import useSWR from "swr";
import GameCard from "./GameCard/GameCard";
import type { AllGamesResponse } from "./types";

const PAGE_SIZE = 48;
const OFFSET = 0;


export default function InfiniteMatchSelectorPage() {
  const { LoPType, isLP, selectedLeagueId, selectedPatchId } =
    usePageTypeContext();

  const { data, error, isLoading } = useSWR<AllGamesResponse, Error>(
    allMatchesUrl(LoPType, isLP ? selectedLeagueId : selectedPatchId, PAGE_SIZE, OFFSET),
  );

  if (isLoading || error || !data) return null;

  return (
    <div className="mb-8">
      <div className="grid grid-cols-4 overflow-scroll gap-2 bg-secondary-background ">
        {data.data.map((item) => (
          <GameCard {...item} key={item.id} />
        ))}
      </div>
      <div
        className="h-8 w-max text-2xl text-center align-middle"
        // onClick={() => setSize(size + 48)}
        //   onKeyDown={() => setSize(size + 48)}
      >
        Load More
      </div>
    </div>
  );
}