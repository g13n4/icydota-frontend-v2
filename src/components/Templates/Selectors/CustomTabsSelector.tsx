import BaseTabsSelector from "@/components/Templates/Selectors/Base/BaseTabsSelector";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import type { PageTypeType } from "@/components/context/types";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import type { ItemStringType } from "@/types/types";
import type { TabsProps } from "@radix-ui/react-tabs";

interface CustomTabsSelectorType extends Pick<TabsProps, "orientation"> {
  className?: string | undefined;
  classNameMain?: string | undefined;
  disabled?: boolean | undefined;
  fieldName: keyof PageTypeType;
  data: ItemStringType[];
  navigateFunc?: ({ value }: { value: string }) => void;
}

export default function CustomTabsSelector({
  fieldName,
  data,
  className,
  classNameMain,
  navigateFunc,
  orientation,
  disabled,
}: CustomTabsSelectorType) {
  const { [fieldName]: fieldValue } = usePageTypeContext();
  const navigate = useCustomUseNavigate();

  function baseFunc({ value }: { value: string }): void {
    navigate({ [fieldName]: value });
  }

  return (
    <BaseTabsSelector
      value={disabled ? undefined : fieldValue as string}
      data={data}
      orientation={orientation}
      navigateFunc={navigateFunc || baseFunc}
      className={className}
      classNameMain={classNameMain}
      disabled={disabled}
    />
  );
}
