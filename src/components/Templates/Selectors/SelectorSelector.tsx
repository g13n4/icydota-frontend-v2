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

interface SelectorSelectorType {
  title: string;
  label: string;
  value?: string;
  data: ItemStringType[];
  className?: string | undefined;
}

export default function SelectorSelector({
  title,
  label,
  value,
  data,
  className,
}: SelectorSelectorType) {
  return (
    <Select value={value}>
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        {
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {data.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        }
      </SelectContent>
    </Select>
  );
}
  