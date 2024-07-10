import { InputAdornment, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDebounce } from "../hooks";
import { Search } from "@mui/icons-material";

type SearchResult = { id: number; label: string };

type Props = {
  value: string;
  setValue: (val: string) => void;
  placeholder: string;
  searchResults: SearchResult[];
  handleSearch: () => void;
  debounce?: boolean;
  debounceDelay?: number;
  className?: string;
};

const NO_DEBOUNCE_MS = 0;
const DEFAULT_DEBOUNCE_DELAY_MS = 500;

const SearchField = (props: Props) => {
  const {
    value,
    setValue,
    placeholder,
    handleSearch,
    debounce = false,
    debounceDelay = DEFAULT_DEBOUNCE_DELAY_MS,
    className,
  } = props;

  const debouncedInputValue = useDebounce(
    value,
    debounce ? debounceDelay : NO_DEBOUNCE_MS
  );

  useEffect(() => {
    handleSearch();
  }, [debouncedInputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
