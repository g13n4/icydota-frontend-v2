import App from "@/App";
import { createBrowserRouter } from "react-router";
import DefaultRoute from "./DefaultRoute";

const leaguePatchMatcher = "/:leaguePachType/:leaguePatchId";
const playerTeamMatcher = ":playerTeamType";
// dataTypeValue is a match id here
const dataTypeMatcherMatch = ":dataType/:dataTypeValue";
// dataTypeValue is a type of aggregation of cross-comparison
const dataTypeMatcherOther = ":dataType/:dataTypeValue";
const calculationMatcher = ":calcId";



const router = createBrowserRouter([
  {
    path: [leaguePatchMatcher, playerTeamMatcher, ":dataType"].join(
      "/",
    ),
    element: <App match={1} />,
  },
  {
    path: [leaguePatchMatcher, playerTeamMatcher, dataTypeMatcherMatch, calculationMatcher].join(
      "/",
    ),
    element: <App match={2} />,
  },
  
  {
    path: [
      leaguePatchMatcher,
      playerTeamMatcher,
      dataTypeMatcherOther,
      calculationMatcher,
    ].join("/"),
    element: <App match={3} />,
  },
  {
    path: "/*",
    element: <DefaultRoute />,
  },
]);

export default router;
