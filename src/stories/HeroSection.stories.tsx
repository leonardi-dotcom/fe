// src/stories/HeroSection.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../theme/theme"; // sesuaikan lokasi theme-mu
import HeroSection from "../components/sections/HeroSection"; // path sesuaikan

const meta: Meta<typeof HeroSection> = {
  title: "Sections/HeroSection",
  component: HeroSection,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        {/* Tambahkan CssBaseline di sini */}
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
