import {fetchMatchData} from "./helpers.tsx"
import { useQuery } from "@tanstack/react-query";

  
export const useMatchData = (url: string) => {
    return useQuery({
      queryKey: ['matchData'],
      queryFn: () => fetchMatchData(url),
      staleTime: 1000 * 60 * 60, // one hour
    });
};
