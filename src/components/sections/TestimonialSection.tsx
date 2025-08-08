import { alpha, Box, Typography, useTheme } from "@mui/material";
import ButtonHeroSection from "../common/ButtonHeroSection";
import CommaIcon from "../../theme/icon/CommaIcon";
import pp01 from "../../assets/img/home/testimonial/pp01.png";
import pp02 from "../../assets/img/home/testimonial/pp02.png";
import pp03 from "../../assets/img/home/testimonial/pp03.png";
import FourStarIcon from "../../theme/icon/FourStarIcon";

const TestimonialSection = () => {
  const theme = useTheme();
  const testimonials = [
    {
      quote:
        "I am genuinely impressed with the quality of the recliner chair I bought. The comfort it provides is beyond compare, and the design perfectly complements our living room. What sets apart is not just their exceptional products but also their commitment to customer satisfaction. They went the extra mile to ensure I was completely satisfied with my purchase, which is a rarity in today's market.",
      photop: pp03,
      name: "Sarah Thompson",
    },
    {
      quote:
        "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire. The process from selection to delivery was smooth, and the customer support team was incredibly helpful throughout.",
      photop: pp01,
      name: "Michael Roberts",
    },
    {
      quote:
        "My experience has been consistently outstanding. I've furnished my entire home with their products, and every piece has exceeded my expectations. From the bedroom to the home office,  offers a wide range of stylish and well-crafted furniture. What truly sets them apart is their dedicated customer support.",
      photop: pp02,
      name: "Marta Brown",
    },
  ];

  return (
    <>
      {/* Main Primary */}
      <Box
        sx={{
          width: { xs: "100%", md: "89.93rem" },
          height: { xs: "auto", md: "49.87rem" },
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          mt: "auto",
          justifyContent: "space-around",
          alignItems: "center",
          bgcolor: alpha(theme.custom.color.neutral.VeryLightGray, 0.2),
          p: { xs: "2rem 1rem", md: "0" },
          overflow: "hidden",
        }}
      >
        {/* Main Primary | What our Customer Say*/}
        <Box
          sx={{
            width: { xs: "100%", md: "30.93rem" },
            height: { xs: "100%", md: "11.43rem" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            textAlign: "center",
            mt: "-2rem",
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
              Testimonial Section
            </Typography>
          </ButtonHeroSection>
          <Typography
            variant="TitleLarge"
            color={theme.custom.color.neutral.SpaceCadet}
          >
            What Our Customer Say
          </Typography>
          <Typography
            variant="BodyMedium"
            color={alpha(theme.custom.color.neutral.SpaceCadet, 0.6)}
            sx={{
              width: { xs: "100%", md: "28rem" },
              textAlign: "center",
            }}
          >
            Discover the stories and Experiences of Our Delighted Customers
          </Typography>
        </Box>
        {/* Main Primary | Card What customer say*/}
        <Box
          sx={{
            width: "100%",
            maxWidth: { md: "89.93rem" },
            height: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            mt: { xs: "8rem", md: "0" },
          }}
        >
          {/* Main Primary | Card What customer say | card */}
          {testimonials.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", md: "38.93rem" },
                height: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
                px: "2.625rem",
                py: "2.625rem",
                justifyContent: "space-around",
                alignItems: { xs: "center", md: "flex-start" },
                mt: "-7rem",
                bgcolor: theme.custom.color.neutral.White,
              }}
            >
              <CommaIcon />
              <Typography
                variant="BodyMedium"
                color={alpha(theme.custom.color.neutral.SpaceCadet, 0.7)}
              >
                {item.quote}
              </Typography>
              <Box
                sx={{
                  width: "33.68rem",
                  height: "2.75rem",
                  display: { xs: "none", md: "flex" },
                  flexDirection: "row",
                  justifyContent: "space-between",
                  justifyItems: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    width: "auto",
                    height: "auto",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <Box component="img" src={item.photop} alt="Michael" />
                  <Typography
                    variant="BodyMedium"
                    color={theme.custom.color.neutral.SpaceCadet}
                  >
                    {item.name}
                  </Typography>
                </Box>
                <FourStarIcon />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TestimonialSection;
