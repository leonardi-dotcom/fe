import { alpha, Box, Typography, useTheme } from "@mui/material";
import ButtonHeroSection from "../common/ButtonHeroSection";
import blueSofa from "../../assets/img/CategorySection/blueSofa.png";
import tabelGreen from "../../assets/img/CategorySection/tabelGreen.png";
import bedWhite from "../../assets/img/CategorySection/bedWhite.png";

const CategorySection02 = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          mt: "-1rem",
          mx: "auto",
          height: "auto",
          width: { xs: "100%", md: "76.4rem" },
          display: "flex",
          px: { xs: 2, md: 0 },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Category Section */}
        <Box
          sx={{
            width: "100%",
            height: "auto",
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "1rem", md: "1.5rem" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Card Component*/}
          {[
            {
              title: "Sofa",
              image: blueSofa,
              alt: "blueSofa Image",
            },
            {
              title: "nighstand",
              image: tabelGreen,
              alt: "tabelGreen Image",
            },
            {
              title: "Bedroom",
              image: bedWhite,
              alt: "BedWhite Image",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", md: "25rem" },
                height: { xs: "10rem", md: "11.25rem" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "1.5rem",
                backgroundColor: alpha(
                  theme.custom.color.neutral.VeryLightGray,
                  0.49
                ),
                gap: { xs: "1rem", md: "1.7rem" },
              }}
            >
              {/* Frame Card */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: "0.5rem", md: "0.75rem" },
                  width: "auto",
                  height: "auto",
                  order: { xs: 2, md: 1 },
                }}
              >
                <Typography
                  variant="LabelLarge"
                  color={theme.custom.color.neutral.SpaceCadet}
                >
                  {item.title}
                </Typography>
                <ButtonHeroSection sizeVariant="extraSmall" noBorder>
                  <Typography
                    variant="LabelSmall"
                    color={theme.custom.color.neutral.SpaceCadet}
                  >
                    See More
                  </Typography>
                </ButtonHeroSection>
              </Box>
              {/* Img Card */}
              <Box
                component="img"
                src={item.image}
                alt={item.alt}
                sx={{
                  width: { xs: "10rem", md: "13rem" },
                  height: { xs: "10rem", md: "13rem" },
                  objectFit: "contain",
                  order: { xs: 1, md: 2 },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CategorySection02;
