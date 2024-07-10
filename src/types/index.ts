export type ZustandStore = {
  searchResults: Repository[];
  starredRepositories: Repository[];
  setSearchResults: Function;
  setStarredRepositories: Function;
};
