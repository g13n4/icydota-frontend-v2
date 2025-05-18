import { Card } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const crossComparisonData = [
  {
    value: "1",
    label: "Player",
  },
  {
    value: "2",
    label: "Hero",
  },
  {
    value: "3",
    label: "Hero + Facet",
  },
];


export default function DataFormatTypeSelector() {
  return (
    <Card className="h-fit"> 
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Data Format" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </Card>
  );
}
  