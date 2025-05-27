import { PageTypeContext } from "./components/context/DataTypeChoiceProvider";
import { HelperProvider } from "./components/context/HelperProvider";
import Page from "./components/page/Page";
import { SidebarProvider } from "./components/ui/sidebar";
import useParseURL from "./navigation/hooks/useParseURL";

type appType = { match: number };

function App({ match }: appType) {
  const data = useParseURL();
  console.log(match)
  console.log(data)

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
