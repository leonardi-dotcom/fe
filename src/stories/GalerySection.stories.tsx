import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import GalerySection from "../components/sections/GalerySection";
import { theme } from "../theme/theme";

const meta: Meta<typeof GalerySection> = {
  title: "Sections/GalerySection",
  component: GalerySection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            p: 4,
            bgcolor: theme.custom.color.neutral.White,
          }}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof GalerySection>;

export const Default: Story = {};
