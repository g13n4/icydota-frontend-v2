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

interface BaseSelectorType {
  title: string;
  label?: string;
  value?: string;
  data: ItemStringType[];
  className?: string | undefined;
  navigateFunc: ({ value }: { value: string }) => void;
}

export default function BaseSelector({
  title,
  label,
  value,
  data,
  className,
  navigateFunc,
}: BaseSelectorType) {
  return (
    <Select value={value}>
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        {
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}
            {data.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                onClick={() => navigateFunc({ value: item.value })}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        }
      </SelectContent>
    </Select>
  );
}
  