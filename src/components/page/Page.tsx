import { useIsMobile } from "@/hooks/use-mobile";
import CombinedLeftBar from "./CombinedLeftBar/CombinedLeftBar";
import RightBar from "./RightBar/RightBar";
import { cn } from "@/lib/utils";

const mobileStyle = "auto-rows-auto gap-2";
const pcStyle = "grid-cols-6 gap-3  h-screen";


export default function Page() {
  const isMobile = useIsMobile()

  return (
    <div className="bg-red-200">
      <div className={cn(
        "grid items-center justify-center",
        isMobile ? mobileStyle : pcStyle
        )}>
        <CombinedLeftBar/>
        <RightBar />
      </div>
    </div>
  );
}
