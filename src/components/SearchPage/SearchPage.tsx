import { Box } from "@mui/material";
import AutocompleteField from "../../ui/AutocompleteField";
import { useState } from "react";
import axios from "../../axios";
import { GET_REPOSITORIES_URL, PER_PAGE_DEFAULT } from "../../constants";

const SEARCH_FIELD_LABEL = "Search for repositories";

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
    <Box>
      <AutocompleteField
        label={SEARCH_FIELD_LABEL}
        searchResults={searchResults}
        handleSearch={handleFetchRepositories}
      />
    </Box>
  );
};
