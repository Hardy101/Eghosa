import { create } from "zustand";

type SidebarState = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: false,
  setIsSidebarOpen: (open) => set({ isSidebarOpen: open }),
}));
