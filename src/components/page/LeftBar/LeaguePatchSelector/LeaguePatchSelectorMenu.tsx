import type { ItemNymericType } from "@/types/types";

import {
    DropdownMenuItem,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

interface LeaguePatchSelectorMenuType {
  data: ItemNymericType[];
  title: string;
}

export default function LeaguePatchSelectorMenu({
  title,
  data,
}: LeaguePatchSelectorMenuType) {
  return (
    <>
      <DropdownMenuLabel className="text-sm font-heading text-center">
        {title}
      </DropdownMenuLabel>
      {data.map((item) => (
        <DropdownMenuItem
          key={item.value}
          onClick={() => null}
          className="gap-2 p-1.5 text-center"
        >
          {item.label}
        </DropdownMenuItem>
      ))}
    </>
  );
}