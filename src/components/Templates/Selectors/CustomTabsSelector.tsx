import TabsSelector from "@/components/Templates/Selectors/Base/BaseTabsSelector";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import type { PageTypeType } from "@/components/context/types";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import type { ItemStringType } from "@/types/types";

interface CustomTabsSelectorType {
  className?: string;
  fieldName: keyof PageTypeType;
  data: ItemStringType[];
  navigateFunc?: ({ value }: { value: string }) => void;
}

export default function CustomTabsSelector({
  className,
  fieldName,
  data,
  navigateFunc,
}: CustomTabsSelectorType) {
  const { [fieldName]: fieldValue } = usePageTypeContext();
  const navigate = useCustomUseNavigate();

  function baseFunc({ value }: { value: string }): void {
    navigate({ [fieldName]: value });
  }

  return (
    <TabsSelector
      value={fieldValue as string}
      data={data}
      orientation="horizontal"
      navigateFunc={navigateFunc || baseFunc}
      className={className}
    />
  );
}
