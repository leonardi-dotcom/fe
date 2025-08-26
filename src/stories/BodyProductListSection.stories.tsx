// BodyProductListSection.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

import { theme } from "../theme/theme";
import BodyProductListSection from "../components/sections/productList/BodyProductListSection";

const meta: Meta<typeof BodyProductListSection> = {
  title: "Sections/BodyProductListSection",
  component: BodyProductListSection,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BodyProductListSection>;

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
        <BodyProductListSection />
      </Box>
    </ThemeProvider>
  ),
};
