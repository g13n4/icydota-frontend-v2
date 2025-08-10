import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import { leaguePatchHeaderUrl } from "@/urls";
import { ArrowBigDown, ArrowBigUp, Minus } from "lucide-react";
import useSWR from "swr";
import type {
  DataLeaguePatchHeaderDataType,
  DataLeaguePatchHeaderType,
} from "./types";
import { cn } from "@/lib/utils";

const MomentumIcon = ({
  momentum,
}: { momentum: boolean | null | undefined }) => {
  if (momentum === undefined) {
    return null;
  }

  if (momentum === null) {
    return <Minus fill="white" className="!size-6" />;
  }

  return momentum ? (
    <ArrowBigUp fill="green" className="!size-6" />
  ) : (
    <ArrowBigDown fill="red" className="!size-6" />
  );
};

export default function DataLeaguePatchHeader() {
  const isMobile = useIsMobile();

  const { LoPType, isLP, selectedLeagueId, selectedPatchId } =
    usePageTypeContext();

  const lopValue = isLP ? selectedLeagueId : selectedPatchId;

  const { data, error, isLoading } = useSWR<DataLeaguePatchHeaderType, Error>(
    leaguePatchHeaderUrl(LoPType, lopValue),
  );

  if (isLoading || error || !data) return null;

  return (
    <div 
          className={cn(
            "grid grid-flow-row-dense  gap-0.5 py-2 text-center",
            isMobile ? "grid-cols-2" : "xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2",
          )}
    >
      {Object.keys(data.data).map((key: string) => {
        const item = data.data[key as keyof DataLeaguePatchHeaderDataType];
        return (
          <TooltipProvider key={`tooltip-${lopValue}-${key}`}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card
                  key={`${lopValue}-${key}`}
                  className="flex flex-row items-center gap-0.5 justify-center"
                >
                  <p>{item.label}: </p>
                  <p>{item.value}</p>
                  <MomentumIcon momentum={item?.cmp_mom} />
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                {item?.cmp_value && (
                  <p>
                    Average value for patch (
                    {data.patch}) (this tournament patch(es)) is {item.cmp_value}
                  </p>
                )}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
}