import App from "@/App";
import {
  PageTypeContext,
  PageTypeDefaultState,
} from "@/components/context/DataTypeChoiceProvider";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: ":leaguePatchId/match/all",
    element: (
      <PageTypeContext
        value={{
          ...PageTypeDefaultState,
          isMatchAll: true,
        }}
      >
        <App />
      </PageTypeContext>
    ),
  },
  {
    path: ":leaguePatchId/match/:matchId/:playerTeamId/:calcId",
    element: (
      <PageTypeContext
        value={{
          ...PageTypeDefaultState,
          isMatchOne: true,
        }}
      >
        <App />
      </PageTypeContext>
    ),
  },
  {
    path: ":leaguePatchId/aggregation/:aggTypeId/:playerTeamId/:calcId",
    element: (
      <PageTypeContext
        value={{
          ...PageTypeDefaultState,
          isAggregation: true,
        }}
      >
        <App />
      </PageTypeContext>
    ),
  },
  {
    path: ":leaguePatchId/cross-comparison/:CCompTypeId/:playerTeamId/:calcId",
    element: (
      <PageTypeContext
        value={{
          ...PageTypeDefaultState,
          isCrossComparison: true,
        }}
      >
        <App />
      </PageTypeContext>
    ),
  },
  {
    path: "/",
    element: (
      <PageTypeContext
        value={{
          ...PageTypeDefaultState,
          isAggregation: true,
        }}
      >
        <App />
      </PageTypeContext>
    ),
  },
]);

export default router
