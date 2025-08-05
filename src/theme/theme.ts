import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { color } from "./color";
import { icons } from "./iconography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    logo: React.CSSProperties;
    CustomFontFrameCard: React.CSSProperties;
    heroTitle: React.CSSProperties;
    TitleLarge: React.CSSProperties;
    TitleMedium: React.CSSProperties;
    TitleSmall: React.CSSProperties;
    LabelLarge: React.CSSProperties;
    LabelMedium: React.CSSProperties;
    LabelSmall: React.CSSProperties;
    LabelExtraSmall: React.CSSProperties;
    BodyLarge: React.CSSProperties;
    BodyMedium: React.CSSProperties;
    BodySmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    logo?: React.CSSProperties;
    CustomFontFrameCard: React.CSSProperties;
    heroTitle?: React.CSSProperties;
    TitleLarge?: React.CSSProperties;
    TitleMedium?: React.CSSProperties;
    TitleSmall?: React.CSSProperties;
    LabelLarge?: React.CSSProperties;
    LabelMedium?: React.CSSProperties;
    LabelSmall?: React.CSSProperties;
    LabelExtraSmall: React.CSSProperties;
    BodyLarge?: React.CSSProperties;
    BodyMedium?: React.CSSProperties;
    BodySmall?: React.CSSProperties;
  }

  interface Theme {
    custom: {
      color: typeof color;
      icons: typeof icons;
    };
  }

  interface ThemeOptions {
    custom?: {
      color?: typeof color;
      icons?: typeof icons;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logo: true;
    CustomFontFrameCard: true;
    heroTitle: true;
    TitleLarge: true;
    TitleMedium: true;
    TitleSmall: true;
    LabelLarge: true;
    LabelMedium: true;
    LabelSmall: true;
    LabelExtraSmall: true;
    BodyLarge: true;
    BodyMedium: true;
    BodySmall: true;
  }
}

export const theme = createTheme({
  typography: {
    ...typography,
  },
  custom: {
    color,
    icons,
  },
});
