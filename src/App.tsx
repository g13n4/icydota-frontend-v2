import { useNavigate } from "react-router";
import { PageTypeContext } from "./components/context/DataTypeChoiceProvider";
import { HelperProvider } from "./components/context/HelperProvider";
import Page from "./components/page/Page";
import { SidebarProvider } from "./components/ui/sidebar";
import { useInitialDataContext } from "./components/context/InitialDataProvider";
import useParseURL from "./hooks/useParseURL";

type appType = {useDefault: boolean}

function App({useDefault = true}: appType) {
  const navigate = useNavigate()

  if (useDefault) {
    const {league } = useInitialDataContext()
    const mostRecentLeague = league[0].value
    navigate(`/league/${mostRecentLeague}/player/match/0`, {preventScrollReset: true})
  }
  
  const data = useParseURL()

  
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
