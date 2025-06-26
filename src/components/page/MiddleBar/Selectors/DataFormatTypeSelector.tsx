import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import type { PageTypeType } from "@/components/context/types";
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
  const { isActive, data, dataFormatType } = useDataFormatData();
  const props = usePageTypeContext();
  const dataFormatValue = props[dataFormatType as keyof PageTypeType];

  if (!isActive) {
    return (
      <Card className="h-fit">
        <Select disabled>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="No format available" />
          </SelectTrigger>
        </Select>
      </Card>
    );
  }

  return (
    <Card className="h-fit">
      <Select
      key={`data-format-type-selector-${props.selectedDataFormat}`}
        defaultValue={dataFormatValue as string}
        onValueChange={(value) =>
          navigate({ [dataFormatType as string]: value })
        }
      >
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder="Select data format"
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
