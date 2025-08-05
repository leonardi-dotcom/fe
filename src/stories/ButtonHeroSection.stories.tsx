import { Typography, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import ButtonHeroSection from "../components/common/ButtonHeroSection";

export default {
  title: "Components/ButtonHeroSection",
  component: ButtonHeroSection,
  tags: ["autodocs"],
};

export const Primary = () => (
  <ThemeProvider theme={theme}>
    <ButtonHeroSection sizeVariant="medium">
      <Typography
        variant="LabelSmall"
        color={theme.custom.color.neutral.SpaceCadet}
      >
        Default Button
      </Typography>
    </ButtonHeroSection>
  </ThemeProvider>
);

export const WithShadow = () => (
  <ThemeProvider theme={theme}>
    <ButtonHeroSection sizeVariant="medium" enableShadow>
      <Typography
        variant="LabelSmall"
        color={theme.custom.color.neutral.SpaceCadet}
      >
        Shadow Button
      </Typography>
    </ButtonHeroSection>
  </ThemeProvider>
);

export const NoBorderLarge = () => (
  <ThemeProvider theme={theme}>
    <ButtonHeroSection
      sizeVariant="large"
      noBorder
      customColor={theme.custom.color.neutral.FrenchGrey}
    >
      <Typography
        variant="LabelSmall"
        color={theme.custom.color.neutral.SpaceCadet}
      >
        Large No Border
      </Typography>
    </ButtonHeroSection>
  </ThemeProvider>
);
