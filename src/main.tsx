import { Spinner } from "@/components/ui/spinner";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import useSWR, { SWRConfig } from "swr";
import router from "./routes/Routes.tsx";
import {
  InitialData,
  InitialDataContext,
} from "./components/context/InitialDataProvider";
import type { InitialDataType } from "./components/context/types.tsx";
import { configSWR } from "./config.ts";
import "./index.css";
import { initialDataUrl } from "./urls.ts";

function Main() {
  const { data, isLoading } = useSWR<InitialDataType, Error>(initialDataUrl);

  const value = !isLoading && data ? data : InitialData;

  if (isLoading) {
    return <Spinner size="large" />;
  }

  return (
    <InitialDataContext value={value}>
      <RouterProvider router={router} />
    </InitialDataContext>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <SWRConfig value={configSWR}>
      <Main />
    </SWRConfig>
  </StrictMode>,
);
