import { alpha, Box, Typography, useTheme } from "@mui/material";
import ChecklistCircleOrangeIcon from "../../theme/icon/ChecklistCircleOrangeIcon";
import IconCheckFullBGOrange from "../../theme/icon/IconCheckFullBGOrange";
import MessageBGOrangeIcon from "../../theme/icon/MessageBGOrangeIcon";
import ButtonHeroSection from "../common/ButtonHeroSection";
import frame02 from "../../assets/img/productList/Frame02.png";
import ppElipse34 from "../../assets/img/ppElipse34.png";
import HandWHeartIcon from "../../theme/icon/HandWHeartIcon";

const FrameSecondarySection = () => {
  const theme = useTheme();
  const benefits = [
    {
      id: 1,
      desc: "Experience Unparalleled Quality",
    },
    {
      id: 2,
      desc: "Crafted for Your Comfort",
    },
    {
      id: 3,
      desc: "Built to Last Generations",
    },
  ];

  return (
    <>
      {/* Main Body Frame Primary Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "82.5rem" },
          height: { xs: "auto", md: "46.25rem" },
          mt: "+6rem",
          mx: "auto",
          p: { xs: "1rem", md: "2rem" },
        }}
      >
        {/* Main Body Frame Primary Section | Primary | */}
        <Box
          sx={{
            width: { xs: "100%", md: "78.99rem" },
            height: { xs: "auto", md: "34.92rem" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: "2rem", md: 0 },
          }}
        >
          {/* Main Body Frame Primary Section | Primary | Photo  */}
          <Box
            component="img"
            src={frame02}
            alt="logo1"
            sx={{
              width: { xs: "100%", md: "29.8rem" },
              height: { xs: "auto", md: "34rem" },
              mt: { xs: "2rem", md: 0 },
              ml: { xs: 0, md: "+6.5rem" },
            }}
          ></Box>
          {/* Main Body Frame Primary Section | Primary | Card TXT */}
          <Box
            sx={{
              width: { xs: "100%", md: "29.93rem" },
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: { xs: "1.5rem", md: "2rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Kontainer untuk Heading dan Deskripsi */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "0.5rem", md: "1.5rem" },
                width: { xs: "100%", md: "27.9rem" },
                ml: { xs: 0, md: "-3rem" },
                mt: { xs: 0, md: "+2rem" },
              }}
            >
              <Typography
                variant="CustomFontFrameCard"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Elevate Your Mood with Comfortable Furniture
              </Typography>
              <Typography
                variant="BodyMedium"
                color={alpha(theme.custom.color.neutral.SpaceCadet, 0.7)}
              >
                Your surroundings have a profound impact on your mood. Discover
                how our high-quality furniture can transform your space into a
                haven of comfort and happiness. Create an environment that
                nurtures your well-being and elevates your spirits with the
                perfect blend of style and coziness.
              </Typography>
            </Box>

            {/* Kontainer untuk Daftar Keunggulan (Benefits) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "0.5rem", md: "1rem" },
                width: "100%",
                ml: "-3rem",
              }}
            >
              {benefits.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <IconCheckFullBGOrange />
                  <Typography variant="LabelSmall">{item.desc}</Typography>
                </Box>
              ))}
            </Box>

            {/* Tombol Shop Now */}
            <ButtonHeroSection
              sizeVariant="medium"
              noBorder
              customColor={theme.custom.color.neutral.SpaceCadet}
            >
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.White}
              >
                Shop Now
              </Typography>
            </ButtonHeroSection>
          </Box>
          {/* Main Body Frame Primary Section | Floating Mark  */}
          <Box
            sx={{
              width: { xs: "none", md: "19.3rem" },
              height: "5.2rem",
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "1.25rem",
              alignItems: "center",
              position: "absolute",
              zIndex: 10,
              backgroundColor: theme.custom.color.neutral.White,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              borderRadius: "1rem",
              padding: "1rem",
              ml: "-1rem",
              mt: "+3.5rem",
            }}
          >
            <Box
              component="img"
              src={ppElipse34}
              alt="george"
              width={63}
              height={63}
            />
            <Box
              sx={{
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "0.75rem",
              }}
            >
              <Typography variant="LabelSmall">Victor Adams</Typography>
              <Typography
                variant="LabelExtraSmall"
                color={alpha(theme.custom.color.neutral.SpaceCadet, 0.4)}
              >
                Interior Design and Styling
              </Typography>
            </Box>
            <MessageBGOrangeIcon />
          </Box>
          {/* Main Body Frame Primary Section | We think about every detail  */}
          <Box
            sx={{
              width: { xs: "none", md: "19.17rem" },
              height: "4.31rem",
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              position: "absolute",
              zIndex: 10,
              backgroundColor: theme.custom.color.neutral.White,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              borderRadius: "1rem",
              padding: "1rem",
              ml: "+23.5rem",
              mt: "+30rem",
            }}
          >
            <ChecklistCircleOrangeIcon />
            <Typography
              variant="BodyLarge"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              We guarantee your comfrot
            </Typography>
          </Box>
          {/* Main Body Frame Primary Section | Icon people  */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "auto",
              position: "absolute",
              zIndex: 10,
              ml: "+3rem",
              mt: "+18rem",
            }}
          >
            <HandWHeartIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FrameSecondarySection;
