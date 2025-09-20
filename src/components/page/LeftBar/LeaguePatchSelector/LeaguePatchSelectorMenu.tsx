import type {
  ItemStringType,
  LoPTypeType
} from "@/types/types";

import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";

interface LeaguePatchSelectorMenuType {
  data: ItemStringType[];
  menuType: string;
  title: string;
}

export default function LeaguePatchSelectorMenu({
  title,
  data,
  menuType,
}: LeaguePatchSelectorMenuType) {
  const navigate = useCustomUseNavigate(false, false);

  const isLP = menuType === "league";
  const valueKey = isLP ? "selectedLeagueId" : "selectedPatchId";

  return (
    <>
      <DropdownMenuLabel className="text-sm font-heading text-center">
        {title}
      </DropdownMenuLabel>
      {data.map((item) => (
        <DropdownMenuItem
          key={item.value}
          onClick={() =>
            navigate({
              LoPType: menuType as LoPTypeType,
              isLP,
              [valueKey]: item.value,
            })
          }
          className="gap-2 p-1.5 text-center"
        >
          {item.label}
        </DropdownMenuItem>
      ))}
    </>
  );
}