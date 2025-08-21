import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../theme/theme";
import BodyCreateLoginSection from "../components/sections/login/BodyCreateLoginSection";

const meta = {
  title: "Sections/BodyCreateLoginSection",
  component: BodyCreateLoginSection,
  tags: ["autodocs"],
};

export default meta;

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        bgcolor: theme.custom.color.neutral.BackgroundLight,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <BodyCreateLoginSection />
    </Box>
  </ThemeProvider>
);
