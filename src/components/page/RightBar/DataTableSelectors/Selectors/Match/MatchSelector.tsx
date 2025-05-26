import SelectorSelector from "@/components/Templates/Selectors/Base/BaseSelector";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { Select } from "@/components/ui/select";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import type { ItemStringType } from "@/types/types";
import { leagueMatchesUrl } from "@/urls";
import useSWR from "swr";

export default function MatchSelector({ className }: { className?: string }) {
  const { selectedLeagueId, selectedMatchId } = usePageTypeContext();

  const { data, isLoading } = useSWR<ItemStringType[], Error>(
    leagueMatchesUrl(selectedLeagueId),
  );

  if (!data || isLoading) return <Select disabled={isLoading} />;
  const navigate = useCustomUseNavigate();

  function navFunc({ value }: { value: string }): void {
    navigate({ selectedMatchId: value });
  }

  return (
    <SelectorSelector
      title="Select match"
      data={data}
      value={`${selectedMatchId}`}
      className={className}
      navigateFunc={navFunc}
    />
  );
}
  