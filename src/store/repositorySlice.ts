import { create } from "zustand";
import { ZustandStore } from "../types";

export const useRepositoryStore = create<ZustandStore>((set) => ({
  searchResults: [],
  starredRepositories: [],
  setSearchResults: (searchResults: Repository[]) =>
    set(() => ({ searchResults })),
  setStarredRepositories: (starredRepositories: Repository[]) =>
    set({ starredRepositories }),
}));
