import App from "@/App";
import { createBrowserRouter } from "react-router";

const leaguePatchMatcher = ":leaguePachType(league|patch)/:leaguePatchId(\\d+)";
const playerTeamMatcher = ":playerTeamType(player|team)";
// dataTypeValue is a match id here
const dataTypeMatcherMatch = ":dataType(match):dataTypeValue(\\d+)";
// dataTypeValue is a type of aggregation of cross-comparison
const dataTypeMatcherOther = ":dataType(aggregation|cross-comparison):dataTypeValue(\\d+)";
const calculationMatcher = ":calcId(\\d+)$";

const router = createBrowserRouter([
  {
    path: [leaguePatchMatcher, playerTeamMatcher, ":dataType(match)$"].join(
      "/",
    ),
    element: <App useDefault={false} />,
  },
  {
    path: [leaguePatchMatcher, playerTeamMatcher, dataTypeMatcherMatch, calculationMatcher].join(
      "/",
    ),
    element: <App useDefault={false} />,
  },
  
  {
    path: [
      leaguePatchMatcher,
      playerTeamMatcher,
      dataTypeMatcherOther,
      calculationMatcher,
    ].join("/"),
    element: <App useDefault={false} />,
  },
  {
    path: "/*",
    element: <App useDefault={true} />,
  },
]);

export default router;
