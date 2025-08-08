import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import TestimonialSection from "../components/sections/TestimonialSection";
import { theme } from "../theme/theme";

const meta: Meta<typeof TestimonialSection> = {
  title: "Sections/TestimonialSection",
  component: TestimonialSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            p: 4,
            bgcolor: theme.custom.color.neutral.BackgroundLight, // agar kontras dan sesuai background
          }}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TestimonialSection>;

export const Default: Story = {};
