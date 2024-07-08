import { Box } from "@mui/material";
import AutocompleteField from "../../ui/AutocompleteField";
import { useState } from "react";

const SEARCH_FIELD_LABEL = "Search for repositories";

type Repository = { id: number };

export const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleFetchRepositories = (searchValue: string) => {};
  return (
    <Box>
      <AutocompleteField<Repository>
        label={SEARCH_FIELD_LABEL}
        searchResults={searchResults}
        handleSearch={handleFetchRepositories}
      />
    </Box>
  );
};
