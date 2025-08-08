import { alpha, Box, Typography, useTheme } from "@mui/material";
import ButtonHeroSection from "../common/ButtonHeroSection";
import Frame01 from "../../assets/img/home/gallery/Frame01.png";
import Frame02 from "../../assets/img/home/gallery/Frame02.png";
import Frame03 from "../../assets/img/home/gallery/Frame03.png";
import Frame04 from "../../assets/img/home/gallery/Frame04.png";
import Frame05 from "../../assets/img/home/gallery/Frame05.png";
import Frame06 from "../../assets/img/home/gallery/Frame06.png";

const GalerySection = () => {
  const theme = useTheme();
  const photoGallery = [
    {
      src: Frame01,
      alt: "Sofa Gray",
      size: "medium",
    },
    {
      src: Frame02,
      alt: "Sofa Gray",
      size: "medium",
    },
    {
      src: Frame03,
      alt: "round",
      size: "large",
    },
    {
      src: Frame04,
      alt: "Murmer white",
      size: "large",
    },
    {
      src: Frame05,
      alt: "Elipse White",
      size: "medium",
    },
    {
      src: Frame06,
      alt: "Brow Chair",
      size: "medium",
    },
  ];

  const row1Data = photoGallery.slice(0, 3);
  const row2Data = photoGallery.slice(3, 6);

  return (
    <>
      {/* Main Body Frame Primary GalerySection */}
      <Box
        sx={{
          width: { xs: "100%", md: "78rem" },
          height: "auto",
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          alignItems: "center",
          justifyContent: "space-evenly",
          p: { xs: "2rem", md: "5rem" },
        }}
      >
        {/* Main Primary | Our Furniture Gallery*/}
        <Box
          sx={{
            width: { xs: "100%", md: "28rem" },
            height: { xs: "auto", md: "9.8rem" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "1rem",
            textAlign: "center",
            alignItems: "center",
            mb: { xs: "2rem", md: "0" },
          }}
        >
          <ButtonHeroSection
            sizeVariant="extraLarge"
            noBorder
            customColor={theme.custom.color.neutral.BackgroundLight}
          >
            <Typography
              variant="LabelSmall"
              color={theme.custom.color.secondary.ImperialRed}
            >
              Check Our Collection
            </Typography>
          </ButtonHeroSection>
          <Typography
            variant="TitleLarge"
            color={theme.custom.color.neutral.SpaceCadet}
          >
            Our Furniture Gallery
          </Typography>
          <Typography
            variant="BodyMedium"
            color={alpha(theme.custom.color.neutral.SpaceCadet, 0.6)}
          >
            Explore Our Gallery of Inspiring Designs
          </Typography>
        </Box>
        {/* Main Primary | Photo Gallery*/}
        <Box
          sx={{
            width: { xs: "100%", md: "78rem" },
            height: { xs: "auto", md: "42.7" },
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            mt: "2rem",
          }}
        >
          {/* Main Primary | Photo Gallery | Row galery 1*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "1rem",
            }}
          >
            {row1Data.map((item, index) => (
              <Box
                key={index}
                component="img"
                src={item.src}
                alt={item.alt}
                sx={{
                  width: {
                    xs: "100%",
                    md: item.size === "medium" ? "20.625rem" : "33.75rem",
                  },
                  height: {
                    xs: "auto",
                    md: "20.625rem",
                  },
                  objectFit: "cover",
                }}
              />
            ))}
          </Box>
          {/* Main Primary | Photo Gallery | Row galery 2*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "1rem",
            }}
          >
            {row2Data.map((item, index) => (
              <Box
                key={index}
                component="img"
                src={item.src}
                alt={item.alt}
                sx={{
                  width: {
                    xs: "100%",
                    md: item.size === "medium" ? "20.625rem" : "33.75rem",
                  },
                  height: { xs: "auto", md: "20.625rem" },
                  objectFit: "cover",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GalerySection;
