import SelectorSelector from "@/components/Templates/Selectors/Base/BaseSelector";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import type { PageTypeType } from "@/components/context/types";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import type { ItemStringType } from "@/types/types";

interface CustomSelectorType {
  title: string;
  className?: string;
  fieldName: keyof PageTypeType;
  data: ItemStringType[];
  navigateFunc?: ({ value }: { value: string }) => void;
}

export default function CustomSelector({
  title,
  className,
  fieldName,
  data,
  navigateFunc,
}: CustomSelectorType) {
  const { [fieldName]: fieldValue } = usePageTypeContext();

  const navigate = useCustomUseNavigate();

  function navFunc({ value }: { value: string }): void {
    navigate({ [fieldName]: value });
  }

  return (
    <SelectorSelector
      title={title}
      data={data}
      value={fieldValue as string}
      className={className}
      navigateFunc={navigateFunc || navFunc}
    />
  );
}
  