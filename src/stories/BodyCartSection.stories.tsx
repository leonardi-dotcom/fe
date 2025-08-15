// BodyCartSection.stories.tsx
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../theme/theme";
import BodyCartSection from "../components/sections/cart/BodyCartSection";

const meta = {
  title: "Sections/BodyCartSection",
  component: BodyCartSection,
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
      <BodyCartSection />
    </Box>
  </ThemeProvider>
);
