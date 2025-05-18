import { createContext, useContext } from "react";
import type { InitialDataType } from "./types";

const InitialData = {
  computations: [],
  patch: [],
  league: [],
}

const InitialDataContext = createContext<InitialDataType>(InitialData);

function useInitialDataContext(): InitialDataType {
  return useContext(InitialDataContext);
}

export { InitialDataContext, useInitialDataContext, InitialData };

