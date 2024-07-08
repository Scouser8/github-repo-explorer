import { Box } from "@mui/material";

function Header() {
  return (
    <Box className="h-20 bg-[#9C257A] text-white items-center flex sticky z-50 px-5 py-2 text-xl justify-center">
      Github Repository Explorer
      {/* <Autocomplete
        sx={(theme) => ({
          width: 300,
          [theme.breakpoints.down("sm")]: {
            width: 200,
          },
        })}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for contact"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      /> */}
    </Box>
  );
}

export default Header;
