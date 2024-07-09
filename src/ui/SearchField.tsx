import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks";
import { Search } from "@mui/icons-material";

type SearchResult = { id: number; label: string };

type Props = {
  placeholder: string;
  searchResults: SearchResult[];
  handleSearch: (searchValue: string) => void;
  debounce?: boolean;
  debounceDelay?: number;
  className?: string;
};

const NO_DEBOUNCE_MS = 500;
const DEFAULT_DEBOUNCE_DELAY_MS = 500;

const SearchField = (props: Props) => {
  const {
    placeholder,
    handleSearch,
    debounce = false,
    debounceDelay = DEFAULT_DEBOUNCE_DELAY_MS,
    className,
  } = props;

  const [inputValue, setInputValue] = useState("");

  const debouncedInputValue = useDebounce(
    inputValue,
    debounce ? debounceDelay : NO_DEBOUNCE_MS
  );

  useEffect(() => {
    handleSearch(debouncedInputValue);
  }, [debouncedInputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      variant="standard"
      onChange={handleInputChange}
      className={className}
    />
  );
};

export default SearchField;
