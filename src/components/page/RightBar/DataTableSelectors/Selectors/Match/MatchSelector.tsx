import CustomSelector from "@/components/Templates/Selectors/CustomSelector";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { Select } from "@/components/ui/select";
import type { ItemStringType } from "@/types/types";
import { leagueMatchesUrl } from "@/urls";
import useSWR from "swr";

export default function MatchSelector({ className }: { className?: string }) {
  const { selectedLeagueId } = usePageTypeContext();

  const { data, isLoading } = useSWR<ItemStringType[], Error>(
    leagueMatchesUrl(selectedLeagueId),
  );

  if (!data || isLoading) return <Select disabled={isLoading} />;
  return (
    <CustomSelector
      fieldName="selectedMatchId"
      title="Select match"
      data={data}
      className={className}
    />
  );
}
  