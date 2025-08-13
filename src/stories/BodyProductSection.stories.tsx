// BodyProductSection.stories.tsx
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../theme/theme";
import BodyProductSection from "../components/sections/product/BodyProductSection";

// Storybook metadata
const meta = {
  title: "Sections/BodyProductSection",
  component: BodyProductSection,
  tags: ["autodocs"],
};

export default meta;

// Default story
export const Default = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        bgcolor: theme.custom.color.neutral.BackgroundLight,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <BodyProductSection />
    </Box>
  </ThemeProvider>
);
