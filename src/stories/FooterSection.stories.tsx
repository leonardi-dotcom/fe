// src/stories/FooterSection.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "../theme/theme"; // sesuaikan path theme
import FooterSection from "../components/sections/FooterSection"; // sesuaikan path komponen FooterSection

const meta: Meta<typeof FooterSection> = {
  title: "Sections/FooterSection",
  component: FooterSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            p: 4,
            bgcolor: theme.custom.color.neutral.White, // latar putih supaya jelas
            minHeight: "100vh",
          }}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FooterSection>;

export const Default: Story = {};
