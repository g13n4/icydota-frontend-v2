import { Button } from "@/components/ui/button";
import useCustomUseNavigate from "@/navigation/hooks/useCustomUseNavigate";
import { ArrowBigLeft } from "lucide-react";

export default function GoBackButton() {
  const navigate = useCustomUseNavigate();

  return (
    <div className="w-full flex items-center justify-evenly">
    <Button
      className="text-xl w-10/12"
      onClick={() => navigate({ selectedMatchId: undefined })}
      onKeyDown={() => navigate({ selectedMatchId: undefined })}
    >
      <ArrowBigLeft className="!size-9 self-al" />
      <span>Back</span>
    </Button>
    </div>
  );
}
