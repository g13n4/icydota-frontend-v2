import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const DEBUG_MDOE = import.meta.env.VITE_DEBUG === "true";


const axiosInstance = axios.create({
  baseURL: API_URL,
})

const configSWR = {
  revalidateIfStale: false, // Don't revalidate if data exists
  revalidateOnFocus: false, // Ignore tab focus
  revalidateOnReconnect: false, // Ignore network reconnection
  revalidateOnMount: true, // Only fetch on component mount
  refreshInterval: 86400000, // 24h in milliseconds (optional)
  focusThrottleInterval: 86400000, // Prevent any focus rechecks
  dedupingInterval: 86400000, // Dedupe requests for 24h
  errorRetryInterval: 3600000, // Retry failed requests hourly
  fetcher: (url: string) => axiosInstance.get(url).then((res) => res.data),
};

export { API_URL, configSWR, DEBUG_MDOE };

