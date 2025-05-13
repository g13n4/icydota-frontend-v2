import { CardBottom, CardTop, PseudoCard } from "./components/Templates/Cards/Cards";
import { HelperProvider } from "./components/context/HelperProvider";
import LeftSidebar from "./components/page/LeftSidebar/LeftSidebar";
import { Card } from "./components/ui/card";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider>
      <HelperProvider>
        <div className="bg-red-200">
          <div className="max-w-7xl h-screen mx-auto flex flex-row items-center justify-center">
            <div className="basis-1/7">
              <LeftSidebar />
            </div>
            <div className="basis-6/7">
              <PseudoCard className="h-20">
                <Card>
                  Hello
                </Card>
                <Card>
                  Hello
                </Card>
                <Card>
                  Hello
                </Card>
                <Card>
                  Hello
                </Card>
              </PseudoCard>
              <CardBottom>Base data</CardBottom>
            </div>
          </div>
        </div>
      </HelperProvider>
    </SidebarProvider>
  );
}

export default App;
