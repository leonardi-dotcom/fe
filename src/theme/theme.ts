import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { colorPalette } from "./colorPalette";

export const theme = createTheme({
  palette: {
    ...colorPalette,
  },
  typography: {
    ...typography,
  },
});
