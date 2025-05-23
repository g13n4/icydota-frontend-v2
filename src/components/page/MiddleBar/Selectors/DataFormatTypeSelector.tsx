import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
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
import useDataFormatData from "@/hooks/useDataFormatData";

export default function DataFormatTypeSelector() {
  const { selectedDataFormat } = usePageTypeContext();

  const { isActive, data } = useDataFormatData({
    dataType: selectedDataFormat,
  });

  if (!isActive) {
    return (
      <Card className="h-fit">
        <Select disabled>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Data Format" />
          </SelectTrigger>
        </Select>
      </Card>
    );
  }

  return (
    <Card className="h-fit">
      <Select disabled={!isActive}>
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder="Select Data Format"
            className="text-center"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Data Formats</SelectLabel>
            {data.map((item) => (
              <SelectItem
                key={`data-format-selector-${item.value}`}
                value={item.value}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Card>
  );
}
  