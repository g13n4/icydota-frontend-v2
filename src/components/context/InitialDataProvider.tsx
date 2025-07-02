import { createContext, useContext } from "react";
import type { InitialDataType } from "./types";

const InitialData = {
  totalPercentFields: [],
  computations: [],
  patch: [],
  league: [],

};

const InitialDataContext = createContext<InitialDataType>(InitialData);

function useInitialDataContext(): InitialDataType {
  return useContext(InitialDataContext);
}

export { InitialData, InitialDataContext, useInitialDataContext };

