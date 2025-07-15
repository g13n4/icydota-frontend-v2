import type { graphDataType } from "@/components/page/RightBar/MatchSelectorPage/GameCard/GameCard/types";
import numberToTime from "@/lib/numberToTime";
import { graphDataUrl } from "@/urls";
import useSWR from "swr";

interface useGetTableDataResultDataType {
  xp: number;
  gold: number;
  time: string;
}

interface useGetTableDataResultType {
  isLoading: boolean;
  error: Error | undefined;
  data: useGetTableDataResultDataType[] | undefined;
}

interface useGraphDataType {
  position: number | null;
  matchId: number | string;
  defaultData: graphDataType;
}

function toChartData({ gold, xp }: graphDataType) {
  const arrLength = gold.length;

  return gold.map((value, index) => {
    const goldValue = gold[index];
    const xpValue = xp[index];
    const timeValue = (index - 1) * 120;

    if (index + 1 === arrLength) {
      return { time: "game's end", xp: xpValue, gold: goldValue };
    }
    if (index === 0) {
      return { time: "game's start", xp: xpValue, gold: goldValue };
    }
    return { time: numberToTime(timeValue), xp: xpValue, gold: goldValue };
  });
}

export default function useGraphData({
  position,
  matchId,
  defaultData,
}: useGraphDataType): useGetTableDataResultType {
  const { data, isLoading, error } = useSWR<graphDataType, Error>(
    position ? graphDataUrl(matchId, position) : null,
  );

  if (position === null) {
    return {
      data: toChartData(defaultData),
      error: undefined,
      isLoading: false,
    };
  }

  if (data === undefined) {
    return {
      data,
      isLoading,
      error,
    };
  }

  return {
    data: toChartData(data),
    isLoading,
    error,
  };
}
