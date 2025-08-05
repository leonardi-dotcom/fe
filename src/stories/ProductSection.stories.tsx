// src/components/ProductSection/ProductSection.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import ProductSection from "../components/sections/ProductSection";

import { theme } from "../theme/theme";

const meta: Meta<typeof ProductSection> = {
  title: "Sections/ProductSection",
  component: ProductSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            p: 4,
          }}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductSection>;

export const Default: Story = {};
