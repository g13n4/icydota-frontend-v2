interface HelperContextType {
  isDarkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  toggleDarkMode: () => void;

  isSidebarHidden: boolean;
  setSidebarHidden: (mode: boolean) => void;
  toggleSidebarHidden: () => void;
}


export type { HelperContextType };