import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const DEBUG_MODE = import.meta.env.VITE_DEBUG === "true";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Access-Control-Allow-Origin": `${API_URL}*`,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const axiosInfiniteFetcher = async (url: string) => {
  const { data } = await axiosInstance.get(url);
  return data.data;
};

function getSWRConfig(isDebugMode: boolean) {
  if (isDebugMode) {
    return {
      revalidateIfStale: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 0,
      dedupingInterval: 0,
      fetcher: async (url: string) => {
        const { data } = await axiosInstance.get(url);
        return data;
      },
    };
  }

  return {
    revalidateIfStale: false, // Don't revalidate if data exists
    revalidateOnFocus: false, // Ignore tab focus
    revalidateOnReconnect: false, // Ignore network reconnection
    revalidateOnMount: true, // Only fetch on component mount
    refreshInterval: 86400000, // 24h in milliseconds (optional)
    focusThrottleInterval: 86400000, // Prevent any focus rechecks
    dedupingInterval: 86400000, // Dedupe requests for 24h
    errorRetryInterval: 3600000, // Retry failed requests hourly
    fetcher: async (url: string) => {
        const { data } = await axiosInstance.get(url);
        return data;
      },
  };
}

const configSWR = getSWRConfig(DEBUG_MODE);

export { API_URL, configSWR, DEBUG_MODE, axiosInfiniteFetcher };
