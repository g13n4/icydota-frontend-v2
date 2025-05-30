import { useInitialDataContext } from "@/components/context/InitialDataProvider";
import { Navigate } from "react-router";


export default function DefaultRoute() {
    const { league } = useInitialDataContext();
    return league.length === 0 ? null : <Navigate to={`/league/${league[0].value}/player/match`} />
}