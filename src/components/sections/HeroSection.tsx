import { alpha, Box, Typography, useTheme } from "@mui/material";
import ButtonHeroSection from "../common/ButtonHeroSection";
import CheckListOrangeIcon from "../../theme/icon/ChecklistOrangeIcon";
import ConfortIcon from "../../theme/icon/ConfortIcon";
import LikeOrangeIcon from "../../theme/icon/LikeOrangeIcon";
import SendBoxIcon from "../../theme/icon/SendBoxIcon";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import bg01HeroSection from "../../assets/img/bg01HeroSection.png";

const HeroSection = () => {
  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          mt: "1rem",
          mx: "auto",
          height: { xs: "auto", md: "45rem" },
          width: { xs: "100%", md: "78.7rem" },
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: "1rem", md: "2rem" },
          bgcolor: theme.custom.color.neutral.White,
          position: "relative",
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "2rem", md: "7.5rem" },
            width: "fit-content",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* Title Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "33.3rem" },
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: { xs: "0.5rem", md: "1rem" },
              mt: { xs: "1", md: "1.5rem" },
              textAlign: { xs: "center", md: "left" },
              p: 0,
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="heroTitle"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Perfect Harmony: Comfort & Style
            </Typography>

            <Box
              sx={{
                width: { xs: "100%", md: "31.75rem" },
                height: "auto",
                px: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="TitleSmall"
                color={alpha(theme.custom.color.neutral.SpaceCadet, 0.4)}
              >
                Explore furniture that harmoniously combines comfort and style
                to elevate your home
              </Typography>
            </Box>
            {/* Title Section | Element */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "1.5rem",
                width: { xs: "100%", md: "33rem" },
                height: "auto",
                alignItems: "center",
              }}
            >
              {/* Element01 */}
              <ButtonHeroSection sizeVariant="medium">
                <Typography
                  variant="TitleSmall"
                  color={alpha(theme.custom.color.neutral.SpaceCadet, 0.8)}
                >
                  Explore Our Offers
                </Typography>
              </ButtonHeroSection>

              {/* Element02 */}
              <ButtonHeroSection noBorder sizeVariant="medium">
                <PlayArrowIcon
                  sx={{
                    width: 24,
                    height: 24,
                    color: theme.custom.color.neutral.SpaceCadet,
                    stroke: "black",
                    backgroundColor: theme.custom.color.neutral.White,
                  }}
                />
                <Typography
                  variant="TitleSmall"
                  color={alpha(theme.custom.color.neutral.SpaceCadet, 0.4)}
                >
                  Watch Video
                </Typography>
              </ButtonHeroSection>
            </Box>
          </Box>

          {/* Ornament Section */}
          <Box
            component="img"
            mt={{ xs: "1rem", md: "+1.75rem" }}
            src={bg01HeroSection}
            alt="ornament"
            sx={{
              width: { xs: "100%", md: "39.2rem" },
              height: "auto",
              borderRadius: "1.25rem",
              mt: "1.75rem",
            }}
          />
        </Box>

        {/* SearchBar Section as overlay */}
        <Box
          sx={{
            mt: "-5rem",
            mx: "+1rem",
            zIndex: 10,
            width: "60.67rem",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "3rem",
            px: "2rem",
            py: "1.5rem",
            borderRadius: "73.96px",
            bgcolor: theme.custom.color.neutral.White,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          {/* From Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.385rem",
            }}
          >
            <Typography
              variant="LabelSmall"
              color={theme.custom.color.neutral.CoolGrey}
            >
              Confort
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.35rem",
              }}
            >
              <ConfortIcon />
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.CoolGrey}
              >
                Cozy Seating
              </Typography>
            </Box>
          </Box>

          {/* To Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.385rem",
            }}
          >
            <Typography
              variant="LabelSmall"
              color={theme.custom.color.neutral.CoolGrey}
            >
              Quality Assurance
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.35rem",
              }}
            >
              <LikeOrangeIcon />
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.CoolGrey}
              >
                Cozy Seating
              </Typography>
            </Box>
          </Box>

          {/* From Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.385rem",
            }}
          >
            <Typography
              variant="LabelSmall"
              color={theme.custom.color.neutral.CoolGrey}
            >
              Free Shipping
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.35rem",
              }}
            >
              <SendBoxIcon />
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.CoolGrey}
              >
                No-Cost Delivery
              </Typography>
            </Box>
          </Box>

          {/* Line Section */}
          <Box
            sx={{
              height: "2.88rem",
              width: "0.0625rem",
              backgroundColor: theme.custom.color.neutral.CoolGrey,
            }}
          />

          {/* Depature Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.385rem",
            }}
          >
            <Typography
              variant="LabelSmall"
              color={theme.custom.color.neutral.CoolGrey}
            >
              Secure Checkout
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.35rem",
              }}
            >
              <CheckListOrangeIcon />
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.CoolGrey}
              >
                Secure Payments
              </Typography>
            </Box>
          </Box>

          {/* Button */}
          <ButtonHeroSection sizeVariant="small">
            <Typography
              variant="LabelSmall"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              See More
            </Typography>
          </ButtonHeroSection>
        </Box>

        {/* Brand Section */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "77rem",
            height: "auto",
            gap: "3.8rem",
            opacity: 0.5,
            mt: "+2rem",
          }}
        >
          {["Lowe's", "DeWalt", "Home Depot", "IKEA", "Makita", "3M"].map(
            (item) => (
              <Typography
                key={item}
                variant="TitleMedium"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                {item}
              </Typography>
            )
          )}
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
