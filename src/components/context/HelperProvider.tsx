import { createContext, useState, useEffect, useContext } from "react";
import type { HelperContextType } from "./types";
import type { PropsWithChildren } from "react";

const HelperContext = createContext<HelperContextType>({
  isDarkMode: false,
  setDarkMode: () => {},
  toggleDarkMode: () => {},

  isSidebarHidden: false,
  setSidebarHidden: () => {},
  toggleSidebarHidden: () => {},
});

function checkForDarkMode() {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      return saved ? JSON.parse(saved) : false;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (prefersDark) {
      return true;
    }
    return false;
  }
}

function HelperProvider(props: PropsWithChildren) {
  const { children } = props;

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() =>
    checkForDarkMode(),
  );
  const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(() =>
    checkForDarkMode(),
  );

  // Apply dark mode class to document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const setDarkMode = (mode: boolean) => {
    setIsDarkMode(mode);
  };

  const toggleSidebarHidden = () => {
    setIsSidebarHidden((prev) => !prev);
  };

  const setSidebarHidden = (mode: boolean) => {
    setIsSidebarHidden(mode);
  };

  return (
    <HelperContext
      value={{
        isDarkMode,
        toggleDarkMode,
        setDarkMode,
        isSidebarHidden,
        setSidebarHidden,
        toggleSidebarHidden,
      }}
    >
      {children}
    </HelperContext>
  );
}

function useHelperContext(): HelperContextType {
  return useContext(HelperContext);
}

export { HelperProvider, useHelperContext };
