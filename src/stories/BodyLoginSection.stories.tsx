import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { MemoryRouter } from "react-router-dom";
import BodyLoginSection from "../components/sections/login/BodyLoginSection";
import { theme } from "../theme/theme";

const meta: Meta<typeof BodyLoginSection> = {
  title: "Sections/BodyLoginSection",
  component: BodyLoginSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              width: "100%",
              minHeight: "100vh",
              p: 4,
              bgcolor: theme.custom.color.neutral.White,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Story />
          </Box>
        </ThemeProvider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BodyLoginSection>;

export const Default: Story = {};
