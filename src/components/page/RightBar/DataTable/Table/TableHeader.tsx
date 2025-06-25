import type { MatchNamingDataType } from "./types";

export default function TableHeader({
  tableHeaderData,
}: { tableHeaderData: MatchNamingDataType | undefined }) {
  if (tableHeaderData === undefined) return null;

  const wonText = (hasWon: boolean) => (hasWon ? " (Win) " : " (Lose) ");

  return (
    <h1 className="text-2xl text-center pb-2">
      <span>
        {tableHeaderData.sentName} {wonText(!tableHeaderData.hasDireWon)}
      </span>
      {" vs "}
      <span>
        {tableHeaderData.direName} {wonText(tableHeaderData.hasDireWon)}
      </span>
    </h1>
  );
}

