import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import footerStyles from "../../styles/footer.styles";

function Footer() {
  const theme = useTheme();
  return (
    <Box component="footer" sx={footerStyles(theme)}>
      <Typography variant="body1">
        Frontend Developer - mohammed.abdelbaki96@hotmail.com © 2024
      </Typography>
    </Box>
  );
}

export default Footer;
