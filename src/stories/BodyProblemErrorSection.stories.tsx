// BodyProblemErrorSection.stories.tsx
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../theme/theme";
import BodyProblemErrorSection from "../components/sections/problemError/BodyProblemErrorSection";

const meta = {
  title: "Sections/BodyProblemErrorSection",
  component: BodyProblemErrorSection,
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
      <BodyProblemErrorSection />
    </Box>
  </ThemeProvider>
);
