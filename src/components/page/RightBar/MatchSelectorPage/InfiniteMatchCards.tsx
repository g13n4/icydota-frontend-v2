import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { allMatchesUrl } from "@/urls";
import type { Dispatch, SetStateAction } from "react";
import useSWR from "swr";
import GameCard from "./GameCard/GameCard";
import type { AllGamesResponse } from "./types";

const PAGE_SIZE = 48;
const OFFSET = 0;

interface InfiniteMatchSelectorPageType {
  pageSize: number;
  offset: number;
  setHasEnded: Dispatch<SetStateAction<boolean>>;
}

export default function InfiniteMatchSelectorPage({
  pageSize = PAGE_SIZE,
  offset = OFFSET,
  setHasEnded,
}: InfiniteMatchSelectorPageType) {
  const { LoPType, isLP, selectedLeagueId, selectedPatchId } =
    usePageTypeContext();

  const { data, error, isLoading } = useSWR<AllGamesResponse, Error>(
    allMatchesUrl(
      LoPType,
      isLP ? selectedLeagueId : selectedPatchId,
      pageSize,
      offset,
    ),
  );
  if (error) {
    setHasEnded(true);
  }

  if (isLoading || error || !data) return null;

  return (
    <>
      {data.data.map((item) => (
        <GameCard {...item} key={item.id} />
      ))}
    </>
  );
}