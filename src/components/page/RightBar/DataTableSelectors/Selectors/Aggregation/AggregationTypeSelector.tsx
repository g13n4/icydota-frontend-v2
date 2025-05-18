import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const aggregationTypes = [
  {
    value: "1",
    label: "Hero",
  },
  {
    value: "2",
    label: "Hero + Facet",
  },
  {
    value: "3",
    label: "Position",
  },
  {
    value: "4",
    label: "Hero + Player",
  },
  {
    value: "5",
    label: "Player + Hero",
  },
  {
    value: "6",
    label: "Hero + Facet + Player",
  },
  {
    value: "7",
    label: "Player + Hero + Facet",
  },
];

export default function AggregationTypeSelector() {
  return (
    <Select value="1">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select aggregation type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Aggregation types</SelectLabel>
          {aggregationTypes.map((item) => (
            <SelectItem
              key={`agg-type-selector-${item.value}`}
              value={item.value}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
  