import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dataFormatSelectorData from "@/constants/Selectors/dataFormatSelectorData";

export default function DataFormatSelector() {
  return (
    <Tabs value="match" orientation="vertical">
      <TabsList
        className={`grid w-full grid-rows-${dataFormatSelectorData.length + 1} shadow-shadow border-2 `}
      >
        {dataFormatSelectorData.map((item) => {
          return (
            <TabsTrigger key={item.value} value={item.value}>
              {item.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
