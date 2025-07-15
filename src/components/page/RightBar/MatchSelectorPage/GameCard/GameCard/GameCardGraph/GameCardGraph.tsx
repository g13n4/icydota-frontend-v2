import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

import useGraphData from "@/hooks/useGraphData";
import { useState } from "react";
import { Bar, BarChart, Cell } from "recharts";
import { GraphDataEnum, type graphDataType } from "../types";
import { cn } from "@/lib/utils";

function getTooltipText(
  value: number,
  position: number | null,
  dataType: string,
  time: string,
) {
  if (value === 0) {
    return `Teams' ${dataType} is equal at ${time}`;
  }
  const sideName = value > 0 ? "Sentinel" : "Dire";
  const positionText = position === null ? " " : `'s position ${position}`;

  return `${sideName}${positionText} has ${Math.abs(value)} ${dataType} advantage at ${time}`;
}

interface GameCardGraphType {
  selectedPosition: number | null;
  matchId: number | string;
  gameGraphData: graphDataType;
}

export default function GameCardGraph({
  selectedPosition,
  gameGraphData,
  matchId,
}: GameCardGraphType) {
  const { data, error, isLoading } = useGraphData({
    position: selectedPosition,
    matchId,
    defaultData: gameGraphData,
  });
  const [selectedDataType, setSelectedDataType] = useState<
    GraphDataEnum.GOLD | GraphDataEnum.XP
  >(GraphDataEnum.GOLD);

  if (data === undefined || error || isLoading) return null;

  const chartConfig = {
    value: {
      label: selectedDataType,
    },
  } satisfies ChartConfig;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">
            {getTooltipText(
              payload[0].value,
              selectedPosition,
              selectedDataType,
              payload[0].payload.time,
            )}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="w-full h-12 flex flex-row">
      <span
        className={cn(
          "h-full w-6 [writing-mode:sideways-lr] text-center border-1",
          "shadow-shadow hover:translate-x-reverseBoxShadowX hover:shadow-none",
          selectedDataType === GraphDataEnum.XP
            ? "bg-blue-500/70  text-shadow-white text-white border-blue-900/55"
            : "bg-yellow-300/70  text-shadow-black text-black border-yellow-300",
        )}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedDataType((prevState) =>
            prevState === GraphDataEnum.GOLD
              ? GraphDataEnum.XP
              : GraphDataEnum.GOLD,
          );
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
          setSelectedDataType((prevState) =>
            prevState === GraphDataEnum.GOLD
              ? GraphDataEnum.XP
              : GraphDataEnum.GOLD,
          );
        }}
      >
        {selectedDataType}
      </span>
      <ChartContainer config={chartConfig} className="w-full  h-full">
        <BarChart accessibilityLayer data={data}>
          <ChartTooltip cursor={false} content={CustomTooltip} />
          <Bar dataKey={selectedDataType}>
            {data.map((item) => (
              <Cell
                key={item.time}
                fill={
                  item[selectedDataType] > 0
                    ? "var(--chart-4)"
                    : "var(--chart-3)"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export const description = "A bar chart with negative values";
