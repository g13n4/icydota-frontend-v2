import CombinedLeftBar from "./CombinedLeftBar/CombinedLeftBar";
import RightBar from "./RightBar/RightBar";

export default function Page() {
  return (
    <div className="bg-red-200">
      <div className="grid grid-cols-6 gap-3 h-screen items-center justify-center">
        <CombinedLeftBar />
        <RightBar />
      </div>
    </div>
  );
}
