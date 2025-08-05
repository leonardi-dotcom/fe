import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/common/Navbar";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../theme/theme";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
