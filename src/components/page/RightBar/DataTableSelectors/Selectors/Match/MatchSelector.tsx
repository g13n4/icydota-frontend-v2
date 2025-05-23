import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import SelectorSelector from "@/components/Templates/Selectors/SelectorSelector";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { ItemStringType } from "@/types/types";
import { leagueMatchesUrl } from "@/urls";
import type { Trigger } from "@radix-ui/react-select";
import type { ComponentProps } from "react";
import useSWR from "swr";

export default function MatchSelector({
  ...className
}: ComponentProps<typeof Trigger>) {
  const { selectedLeagueId, selectedMatchId } = usePageTypeContext();

  const { data, isLoading } = useSWR<ItemStringType[], Error>(
    leagueMatchesUrl(selectedLeagueId),
  );

  if (!data || isLoading) return <Select disabled={isLoading} />;

  return (
    <SelectorSelector title="Select match" label="" value={`${selectedMatchId}`} />
  );
}
  