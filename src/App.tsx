import { PageTypeContext } from "./components/context/DataTypeChoiceProvider";
import { HelperProvider } from "./components/context/HelperProvider";
import type { OptionalPageTypeType } from "./components/context/types";
import Page from "./components/page/Page";
import { SidebarProvider } from "./components/ui/sidebar";
import useParseURL from "./navigation/hooks/useParseURL";


function App(props: OptionalPageTypeType) {
  const data = useParseURL(props);

  return (
    <PageTypeContext value={data}>
      <SidebarProvider>
        <HelperProvider>
          <Page />
        </HelperProvider>
      </SidebarProvider>
    </PageTypeContext>
  );
}

export default App;
