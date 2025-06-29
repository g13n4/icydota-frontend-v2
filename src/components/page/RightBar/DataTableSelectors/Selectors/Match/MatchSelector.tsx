import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import type { ItemStringType } from "@/types/types";
import { leagueMatchesUrl } from "@/urls";
import { Select } from "@radix-ui/react-select";
import { useState } from "react";
import useSWR from "swr";

export default function MatchSelector() {
  const navigate = useCustomUseNavigate();
  const [open, setOpen] = useState(false);

  const { selectedLeagueId, selectedMatchId } = usePageTypeContext();
  const { data, isLoading } = useSWR<{ games: ItemStringType[] }, Error>(
    leagueMatchesUrl(selectedLeagueId),
  );

  if (!data || isLoading) return <Select disabled={isLoading} />;

  const leagueGames = data.games;

  return (
    <div className="w-full flex items-center justify-center">
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="noShadow"
          role="combobox"
          aria-expanded={open}
          className="xl:w-11/12 md:w-full"
        >
          {leagueGames
            ? leagueGames.find((item) => {
                return item.value === selectedMatchId;
              })?.label
            : "Select different game..."}

          <ChevronsUpDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popover-trigger-width) border-0 p-0">
        <Command className="**:data-[slot=command-input-wrapper]:h-11">
          <CommandInput placeholder="Search game..." />
          <CommandList className="p-1">
            <CommandEmpty>No games found.</CommandEmpty>
            <CommandGroup>
              {leagueGames.map((item) => (
                <CommandItem
                  key={item.label}
                  value={item.label}
                  onSelect={() => {
                    navigate({ selectedMatchId: item.value });
                    setOpen(false);
                  }}
                >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
  );
}
