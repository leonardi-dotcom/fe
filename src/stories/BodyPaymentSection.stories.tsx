// BodyPaymentSection.stories.tsx
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../theme/theme";
import BodyPaymentSection from "../components/sections/payment/BodyPaymentSection";

// Storybook metadata
const meta = {
  title: "Sections/BodyPaymentSection",
  component: BodyPaymentSection,
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
      <BodyPaymentSection />
    </Box>
  </ThemeProvider>
);
