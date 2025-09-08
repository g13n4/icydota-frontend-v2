import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
} from "react";
import DataLeaguePatchHeader from "../DataLeaguePatchHeader/DataLeaguePatchHeader";
import InfiniteMatchSelectorPage from "./InfiniteMatchCards";

const PAGE_SIZE = 24;
const OFFSET = 0;

const mobileColSize = "";
const pcColSize = "col-span-5 overflow-y-scroll";

const buttonClass = "h-8 text-2xl text-center align-middle py-4 my-4";

function addMatchCardPage(
  page: ReactNode[],
  setPage: Dispatch<SetStateAction<ReactNode[]>>,
  setHasEnded: Dispatch<SetStateAction<boolean>>,
) {
  const newPageSize = page.length + 1;

  setPage((prevItem) => [
    ...prevItem,
    <InfiniteMatchSelectorPage
      key={`match-cards-page-${newPageSize}`}
      pageSize={PAGE_SIZE * newPageSize}
      offset={OFFSET + PAGE_SIZE * newPageSize}
      setHasEnded={setHasEnded}
    />,
  ]);
}

export default function MatchCardPage() {
  const isMobile = useIsMobile();
  const [hasEnded, setHasEnded] = useState(false);
  const [page, setPage] = useState<ReactNode[]>([
    <InfiniteMatchSelectorPage
      key={`match-cards-page-${1}`}
      pageSize={PAGE_SIZE}
      offset={OFFSET}
      setHasEnded={setHasEnded}
    />,
  ]);

  return (
    <div
      className={cn(
        "flex flex-col h-svh px-1",
        isMobile ? mobileColSize : pcColSize,
      )}
    >
      <DataLeaguePatchHeader key={`match-cards-header-${1}`} />
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-2 ">
        {...page}
      </div>
      {!hasEnded ? (
        <Button
          className={buttonClass}
          onClick={() => addMatchCardPage(page, setPage, setHasEnded)}
          onKeyDown={() => addMatchCardPage(page, setPage, setHasEnded)}
        >
          Load More
        </Button>
      ) : (
        <Button disabled className={buttonClass}>
          No more games found!
        </Button>
      )}
    </div>
  );
}
