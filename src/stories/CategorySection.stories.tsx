import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../theme/theme"; // pastikan path sesuai
import CategorySection from "../components/sections/CategorySection"; // pastikan path sesuai

const meta = {
  title: "Sections/CategorySection",
  component: CategorySection,
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
      <CategorySection />
    </Box>
  </ThemeProvider>
);
