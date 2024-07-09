import { Box } from "@mui/material";
import { useState } from "react";
import axios from "../../axios";
import { GET_REPOSITORIES_URL, PER_PAGE_DEFAULT } from "../../constants";
import SearchField from "../../ui/SearchField";
import RepositoriesList from "../RepositoriesList";

const SEARCH_FIELD_PLACEHOLDER = "Search for repositories";

export const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleFetchRepositories = (searchValue: string) => {
    if (searchValue?.trim() !== "") {
      axios(GET_REPOSITORIES_URL, {
        params: { q: searchValue, per_page: PER_PAGE_DEFAULT },
      }).then((res) => setSearchResults(res.data.items));
    } else {
      setSearchResults([]);
    }
  };
  return (
    <Box className="gap-0">
      <SearchField
        placeholder={SEARCH_FIELD_PLACEHOLDER}
        searchResults={searchResults}
        handleSearch={handleFetchRepositories}
        className="w-80"
      />
      <RepositoriesList
        repositories={searchResults}
        refetchRepositories={handleFetchRepositories}
      />
    </Box>
  );
};
