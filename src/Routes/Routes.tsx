import App from "@/App";
import { selectedDataFormatEnum } from "@/types/enums";
import { createBrowserRouter } from "react-router";
import DefaultRoute from "./DefaultRoute";

const leaguePatchMatcher = "/:leaguePachType/:leaguePatchId";
const playerTeamMatcher = ":playerTeamType";
// dataTypeValue is a match id here

const router = createBrowserRouter([
  {
    path: `${leaguePatchMatcher}/${playerTeamMatcher}/match/:dataTypeValue/:calcId`,
    element: <App selectedDataFormat={selectedDataFormatEnum.MATCH} />,
  },
  {
    path: `${leaguePatchMatcher}/${playerTeamMatcher}/match`,
    element: <App selectedDataFormat={selectedDataFormatEnum.MATCH} />,
  },

  {
    path: `${leaguePatchMatcher}/${playerTeamMatcher}/aggregation/:dataTypeValue/:calcId`,
    element: <App selectedDataFormat={selectedDataFormatEnum.AGGREGATION} />,
  },
  {
    path: `${leaguePatchMatcher}/${playerTeamMatcher}/cross-comparison/:dataTypeValue/:calcId`,
    element: (
      <App selectedDataFormat={selectedDataFormatEnum.CROSS_COMPARISON} />
    ),
  },
  {
    path: "/*",
    element: <DefaultRoute />,
  },
]);

export default router;
