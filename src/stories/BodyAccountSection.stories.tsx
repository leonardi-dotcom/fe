// MyAccountProfile.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

import { theme } from "../theme/theme";
import MyAccountProfile from "../components/sections/account/BodyAccountSection";

const meta: Meta<typeof MyAccountProfile> = {
  title: "MyAccount/MyAccountProfile",
  component: MyAccountProfile,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MyAccountProfile>;

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
        <MyAccountProfile />
      </Box>
    </ThemeProvider>
  ),
};
