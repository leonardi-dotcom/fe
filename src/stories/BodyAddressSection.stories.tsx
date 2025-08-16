// BodyAddressSection.stories.tsx
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../theme/theme";
import BodyAddressSection from "../components/sections/address/BodyAddressSection";

const meta = {
  title: "Sections/BodyAddressSection",
  component: BodyAddressSection,
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
      <BodyAddressSection />
    </Box>
  </ThemeProvider>
);
