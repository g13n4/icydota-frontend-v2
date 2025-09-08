import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import CombinedLeftBar from "./CombinedLeftBar/CombinedLeftBar";
import RightBar from "./RightBar/RightBar";

const mobileStyle = "auto-rows-auto gap-3 *:w-full p-3";
const pcStyle = "justify-center grid-cols-6 gap-3 h-screen p-4";

export default function Page() {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "grid items-center ",
        isMobile ? mobileStyle : pcStyle,
      )}
    >
      <CombinedLeftBar />
      <RightBar />
    </div>
  );
}
