import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import FrameDedicationSection from "../components/sections/FrameDedicationSection";
import { theme } from "../theme/theme";

const meta: Meta<typeof FrameDedicationSection> = {
  title: "Sections/FrameDedicationSection",
  component: FrameDedicationSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            p: 4,
            bgcolor: theme.custom.color.neutral.White, // Optional: white background for visual clarity
          }}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FrameDedicationSection>;

export const Default: Story = {};
