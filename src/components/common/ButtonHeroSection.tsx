import { Button, styled, type ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  noBorder?: boolean;
  enableShadow?: boolean;
  sizeVariant?: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
  customColor?: string;
}

// Menyesuaikan tipe untuk menyimpan nilai mobile dan desktop secara terpisah
type SizeStyleValues = {
  padding: string;
  fontSize: string;
  height: string;
  width: string;
  gap: string;
};

type SizeStyle = {
  mobile: SizeStyleValues;
  desktop: SizeStyleValues;
};

type SizeKey = NonNullable<CustomButtonProps["sizeVariant"]>;

const sizeMap: Record<SizeKey, SizeStyle> = {
  extraSmall: {
    mobile: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.6rem",
      height: "2rem",
      width: "100%",
      gap: "0.25rem",
    },
    desktop: {
      padding: "0.25rem 0.75rem",
      fontSize: "0.75rem",
      height: "2.5rem",
      width: "6.1rem",
      gap: "0.5rem",
    },
  },
  small: {
    mobile: {
      padding: "0.3rem 0.6rem",
      fontSize: "0.75rem",
      height: "2.5rem",
      width: "100%",
      gap: "0.5rem",
    },
    desktop: {
      padding: "0.25rem 0.75rem",
      fontSize: "0.75rem",
      height: "2.88rem",
      width: "7.7rem",
      gap: "0.5rem",
    },
  },
  medium: {
    mobile: {
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      height: "2.89rem",
      width: "100%",
      gap: "0.6875rem",
    },
    desktop: {
      padding: "0.385rem 1rem",
      fontSize: "0.875rem",
      height: "2.89rem",
      width: "9.88rem",
      gap: "0.6875rem",
    },
  },
  large: {
    mobile: {
      padding: "0.75rem 1.25rem",
      fontSize: "1rem",
      height: "3.5rem",
      width: "100%",
      gap: "1rem",
    },
    desktop: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      height: "3.5rem",
      width: "12rem",
      gap: "1rem",
    },
  },
  extraLarge: {
    mobile: {
      padding: "0.75rem 1.25rem",
      fontSize: "1rem",
      height: "3.5rem",
      width: "100%",
      gap: "1rem",
    },
    desktop: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      height: "3.5rem",
      width: "12.875rem",
      gap: "1rem",
    },
  },
};

const ButtonHeroSection = styled(Button, {
  shouldForwardProp: (prop) =>
    !["noBorder", "enableShadow", "sizeVariant", "customColor"].includes(
      prop.toString()
    ),
})<CustomButtonProps>(
  ({ theme, noBorder, enableShadow, sizeVariant = "medium", customColor }) => {
    const sizeStyles = sizeMap[sizeVariant];

    return {
      // Gaya dasar (mobile-first)
      padding: sizeStyles.mobile.padding,
      fontSize: sizeStyles.mobile.fontSize,
      height: sizeStyles.mobile.height,
      width: sizeStyles.mobile.width,
      gap: sizeStyles.mobile.gap,

      borderRadius: "1rem",
      textTransform: "none",
      border: noBorder
        ? "none"
        : `1px solid ${theme.custom.color.neutral.SpaceCadet}`,
      backgroundColor: customColor ?? theme.custom.color.neutral.White,
      boxShadow: enableShadow
        ? `0 2px 8px ${theme.custom.color.neutral.SpaceCadet}33`
        : "none",
      "&:hover": {
        backgroundColor: customColor ?? theme.custom.color.neutral.White,
        boxShadow: enableShadow
          ? `0 4px 16px ${theme.custom.color.neutral.SpaceCadet}33`
          : "none",
      },

      // Terapkan gaya desktop menggunakan breakpoint
      [theme.breakpoints.up("md")]: {
        padding: sizeStyles.desktop.padding,
        fontSize: sizeStyles.desktop.fontSize,
        height: sizeStyles.desktop.height,
        width: sizeStyles.desktop.width,
        gap: sizeStyles.desktop.gap,
      },
    };
  }
);

export default ButtonHeroSection;
