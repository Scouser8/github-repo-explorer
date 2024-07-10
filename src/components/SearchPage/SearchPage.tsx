import { Box } from "@mui/material";
import { useState } from "react";
import axios from "../../axios";
import {
  GET_REPOSITORIES_URL,
  GET_STARRED_REPOSITORIES_URL,
  PER_PAGE_DEFAULT,
} from "../../constants";
import SearchField from "../../ui/SearchField";
import RepositoriesList from "../RepositoriesList";

const SEARCH_FIELD_PLACEHOLDER = "Search for repositories";

export const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [starredRepositories, setStarredRepositories] = useState({});

  const handleFetchRepositories = () => {
    if (searchValue?.trim() !== "") {
      Promise.all([
        axios(GET_REPOSITORIES_URL, {
          params: { q: searchValue, per_page: PER_PAGE_DEFAULT },
        }),
        axios(GET_STARRED_REPOSITORIES_URL, {
          headers: {
            accept: "application/vnd.github+json",
            "If-None-Match": "", // This is a trick to prevent caching to be able to have the updated list
          },
        }),
      ]).then(([searchRepos, starredRepos]) => {
        setSearchResults(searchRepos.data.items);
        const starredReposMap = starredRepos?.data?.reduce(
          (acc: Record<string, boolean>, current: Repository) => {
            const newMap = { ...acc };
            newMap[current.full_name] = true;
            return newMap;
          },
          {}
        );
        setStarredRepositories({ ...starredReposMap });
      });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Box className="gap-0">
      <SearchField
        value={searchValue}
        setValue={setSearchValue}
        placeholder={SEARCH_FIELD_PLACEHOLDER}
        searchResults={searchResults}
        handleSearch={handleFetchRepositories}
        className="w-80"
        debounce
      />
      <RepositoriesList
        repositories={searchResults}
        starredRepositories={starredRepositories}
        refetchRepositories={handleFetchRepositories}
      />
    </Box>
  );
};
