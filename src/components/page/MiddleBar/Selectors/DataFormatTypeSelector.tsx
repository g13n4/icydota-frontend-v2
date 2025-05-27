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
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";

export default function DataFormatTypeSelector() {
  const navigate = useCustomUseNavigate();
  const { selectedDataFormat } = usePageTypeContext();
  const { isActive, data, dataFormatType } = useDataFormatData({
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

  function baseFunc({ value }: { value: string }): void {
    navigate({ [dataFormatType]: value as string });
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
                onClick={() => baseFunc({ value: item.value })}
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
  