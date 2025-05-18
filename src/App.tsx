import { HelperProvider } from "./components/context/HelperProvider";
import Page from "./components/page/Page";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {

  
  return (
    <SidebarProvider>
      <HelperProvider>
        <Page />
      </HelperProvider>
    </SidebarProvider>
  );
}

export default App;
