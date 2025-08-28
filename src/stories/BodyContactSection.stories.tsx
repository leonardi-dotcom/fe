// BodyContactSection.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

import { theme } from "../theme/theme";
import BodyContactSection from "../components/sections/contact/BodyContactSection";

const meta: Meta<typeof BodyContactSection> = {
  title: "Sections/BodyContactSection",
  component: BodyContactSection,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BodyContactSection>;

export const Default: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: theme.custom?.color?.neutral?.BackgroundLight ?? "#f9f9f9",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <BodyContactSection />
      </Box>
    </ThemeProvider>
  ),
};
