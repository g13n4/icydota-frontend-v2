import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import { ArrowBigLeft } from "lucide-react";

export default function GoBackButton() {
  const navigate = useCustomUseNavigate();
  const isMobile = useIsMobile();

  return (
    <div className="w-full flex items-center justify-evenly">
      <Button
        className={cn("text-xl", isMobile ? "w-full" : "w-10/12")}
        onClick={() => navigate({ selectedMatchId: undefined })}
        onKeyDown={() => navigate({ selectedMatchId: undefined })}
      >
        <ArrowBigLeft fill="black" className="!size-7 self-al" />
        <span>Back</span>
      </Button>
    </div>
  );
}
