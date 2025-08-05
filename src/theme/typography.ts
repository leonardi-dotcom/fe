import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/600.css"; // Semi-Bold
import "@fontsource/poppins/700.css"; // Bold
import "@fontsource/cambay/700.css"; // cambay bold

export const typography = {
  fontFamily: `'Poppins','Cambay', sans-serif`,

  // logo
  logo: {
    fontFamily: "Cambay",
    fontWeight: 700,
    fontSize: "1.25rem",
    lineHeight: "normal",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
  },

  // Judul
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: "3.25rem",
    "@media (min-width:600px)": {
      fontSize: "4rem",
      lineHeight: "4.75rem",
    },
  },

  // Home Frame Card
  CustomFontFrameCard: {
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: "2.25rem",
    "@media (min-width:600px)": {
      fontSize: "2.5rem",
      lineHeight: "3rem",
    },
  },

  // Headline
  h1: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: "2.75rem",
    "@media (min-width:600px)": {
      fontSize: "2.75rem",
      lineHeight: "3.5rem",
    },
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: "2.25rem",
    "@media (min-width:600px)": {
      fontSize: "2rem",
      lineHeight: "2.75rem",
    },
  },
  h3: {
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: "1.75rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
  },

  // Title
  TitleLarge: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: "2rem",
    "@media (min-width:600px)": {
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
  },

  TitleMedium: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: "1.75rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
  },

  TileSmall: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: "1.5rem",
    "@media (min-width:600px)": {
      fontSize: "1.25rem",
    },
  },

  // Label
  LabelLarge: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: "1.25rem",
    "@media (min-width:600px)": {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
    },
  },
  LabelMedium: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: "1.125rem",
    "@media (min-width:600px)": {
      fontSize: "1rem",
      lineHeight: "1.25rem",
    },
  },
  LabelSmall: {
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: "0.875rem",
    "@media (min-width:600px)": {
      fontSize: "0.875rem",
      lineHeight: "1rem",
    },
  },
  LabelExtraSmall: {
    fontSize: "0.65rem",
    fontWeight: 600,
    lineHeight: "0.775rem",
    "@media (min-width:600px)": {
      fontSize: "0.6.75rem",
      lineHeight: "0.755rem",
    },
  },

  // Body
  BodyLarge: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.25rem",
    "@media (min-width:600px)": {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },
  BodyMedium: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: "1rem",
    "@media (min-width:600px)": {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
  },
  BodySmall: {
    fontSize: "0.6875rem",
    fontWeight: 400,
    lineHeight: "0.875rem",
    "@media (min-width:600px)": {
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
  },
};
