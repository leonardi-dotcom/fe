import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../theme/theme";
import BodyShippingSection from "../components/sections/shipping/BodyShippingSection";

// Metadata untuk Storybook
const meta = {
  title: "Sections/BodyShippingSection",
  component: BodyShippingSection,
  tags: ["autodocs"],
};

export default meta;

// Story "Default" untuk menampilkan komponen
export const Default = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        bgcolor: theme.custom.color.neutral.BackgroundLight,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <BodyShippingSection />
    </Box>
  </ThemeProvider>
);
