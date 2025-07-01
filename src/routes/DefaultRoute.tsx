import { useInitialDataContext } from "@/components/context/InitialDataProvider";
import { Navigate } from "react-router";


export default function DefaultRoute() {
    const { league } = useInitialDataContext();

    if (league === undefined) {
        return <Navigate to="/" />
    }

    return  <Navigate to={`/league/${league[0].value}/player/match`} />
}