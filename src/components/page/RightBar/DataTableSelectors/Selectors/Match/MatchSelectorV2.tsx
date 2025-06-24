import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider"
import type { ItemStringType } from "@/types/types"
import { leagueMatchesUrl } from "@/urls"
import { Select } from "@radix-ui/react-select"
import useSWR from "swr"
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate"
import { useState } from "react"

export default function MatchSelectorV2() {
    const navigate = useCustomUseNavigate();
    const [open, setOpen] = useState(false)

    const { selectedLeagueId, selectedMatchId } = usePageTypeContext();
  const { data, isLoading } = useSWR<{ games: ItemStringType[] }, Error>(
    leagueMatchesUrl(selectedLeagueId),
  );

  if (!data || isLoading) return <Select disabled={isLoading} />;

  const leagueGames = data.games

  console.log("selectedMatchId", selectedMatchId)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="noShadow"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {leagueGames
            ? leagueGames.find((item) => {
                console.log("Tex", item, selectedMatchId, item.value === selectedMatchId)
                return item.value === selectedMatchId
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
                  key={item.value}
                  value={item.value}
                  onSelect={() => {
                    navigate({ selectedMatchId: item.value })
                    setOpen(false)
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
  )
}
