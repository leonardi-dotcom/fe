import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import FramePrimarySection from "../components/sections/FramePrimarySection";
import { theme } from "../theme/theme";

const meta: Meta<typeof FramePrimarySection> = {
  title: "Sections/FramePrimarySection",
  component: FramePrimarySection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            p: 4,
            bgcolor: theme.custom.color.neutral.White, // Optional background
          }}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FramePrimarySection>;

export const Default: Story = {}; // No props passed, static component rendering
