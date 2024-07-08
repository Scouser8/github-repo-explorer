import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks";

type Props<T> = {
  label: string;
  searchResults: T[];
  handleSearch: (searchValue: string) => void;
  debounce?: boolean;
  debounceDelay?: number;
};

const DEFAULT_DEBOUNCE_DELAY_MS = 500;

const AutocompleteField = <T,>(props: Props<T>) => {
  const {
    label,
    searchResults,
    handleSearch,
    debounce = false,
    debounceDelay = DEFAULT_DEBOUNCE_DELAY_MS,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState("");

  const debouncedInputValue = useDebounce(inputValue, 300);

  useEffect(() => {
    handleSearch(debouncedInputValue);
  }, [debouncedInputValue]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Autocomplete
      sx={(theme) => ({
        width: 300,
        [theme.breakpoints.down("sm")]: {
          width: 200,
        },
      })}
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={searchResults}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
      onInputChange={(_e, value) => handleInputChange(value)}
      {...rest}
    />
  );
};

export default AutocompleteField;
