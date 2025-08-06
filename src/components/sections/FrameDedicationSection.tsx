import { alpha, Box, Typography, useTheme } from "@mui/material";
import StarIcon from "../../theme/icon/StarIcon";
import SovaOrangeIcon from "../../theme/icon/SovaOrangeIcon";
import HammerIcon from "../../theme/icon/HammerIcon";
import BotButtonIcon from "../../theme/icon/BotButtonIcon";

const FrameDedicationSection = () => {
  const theme = useTheme();
  const qualities = [
    {
      id: 1,
      title: "Quality Craftmanship",
      desc: "Our furniture is meticulously handcrafted to stand the test of time, ensuring it can be enjoyed for generations to come.",
      icon: <SovaOrangeIcon width={120} height={120} />,
    },
    {
      id: 2,
      title: "Extensive Selection",
      desc: "Discover a wide variety of styles and options to suit your unique preferences and needs.",
      icon: <HammerIcon width={75} height={75} />,
    },
    {
      id: 3,
      title: "Dedicated Customer Support",
      desc: "Quiuckly navigate you anda engage with your adience",
      icon: <BotButtonIcon width={50} height={60} />,
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "90rem" },
          height: { xs: "auto", md: "34.1rem" },
          mx: "auto",
          mt: "+2rem",
          bgcolor: theme.custom.color.neutral.Black,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          p: { xs: "2rem", md: "0 " },
        }}
      >
        {/* Ourdedication Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "40rem" },
            height: { xs: "auto", md: "16.3rem" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: "2rem",
            mt: { xs: "0", md: "-6rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h1"
            color={theme.custom.color.neutral.White}
            sx={{
              width: { xs: "100%", md: "30rem" },
              height: { xs: "auto", md: "7.6rem" },
            }}
          >
            Our Dedication to Your Satisfaction
          </Typography>
          <Typography
            variant="LabelMedium"
            color={theme.custom.color.neutral.White}
            sx={{
              width: { xs: "100%", md: "38rem" },
              height: { xs: "auto", md: "7.6rem" },
            }}
          >
            , we take pride in our unwavering commitment to quality and customer
            satisfaction. With a track record of excellence, we provide you with
            the finest furniture and a service you can trust.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: "2rem", md: "5rem" },
            }}
          >
            {/* Ourdedication Section | Review Rating | Quality*/}
            <Box
              sx={{
                width: "8.8rem",
                height: "6.6rem",
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                justifyContent: "space-between",
                mt: "+3rem",
                gap: "1rem",
              }}
            >
              <StarIcon />
              {/* Ourdedication Section | text rating*/}
              <Box
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  variant="LabelMedium"
                  color={theme.custom.color.neutral.White}
                >
                  4.9
                </Typography>
                <Typography
                  variant="LabelMedium"
                  color={alpha(theme.custom.color.neutral.White, 0.9)}
                >
                  / 5 rating
                </Typography>
              </Box>
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.White}
              >
                Quality
              </Typography>
            </Box>
            {/* Ourdedication Section | Review Rating | Customer Rating*/}
            <Box
              sx={{
                width: "12rem",
                height: "6.6rem",
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                justifyContent: "space-between",
                mt: "3rem",
                gap: "1rem",
              }}
            >
              <StarIcon />
              {/* Ourdedication Section | text rating*/}
              <Box
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  variant="LabelMedium"
                  color={theme.custom.color.neutral.White}
                >
                  4.8
                </Typography>
                <Typography
                  variant="LabelMedium"
                  color={alpha(theme.custom.color.neutral.White, 0.9)}
                >
                  / 5 rating
                </Typography>
              </Box>
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.White}
              >
                Customer Satisfaction
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Quality Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "30rem" },
            height: { xs: "auto", md: "16.3rem" },
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2rem",
            mt: { xs: "+5rem", md: "2rem" },
          }}
        >
          {/* Quality Section Craft */}
          <Box
            sx={{
              width: { xs: "100%", md: "31rem" },
              height: { xs: "auto", md: "auto" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: { xs: "1.5rem", md: "2rem" },
              mt: "-6rem",
              p: { xs: "1rem", md: "2rem" },
            }}
          >
            {qualities.map((feature) => (
              <Box
                key={feature.id}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: { xs: "1rem", md: "2rem" },
                }}
              >
                {/* Icon */}
                {feature.icon}

                {/* Text */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: "0.5rem", md: "1rem" },
                  }}
                >
                  <Typography
                    variant="TitleMedium"
                    color={theme.custom.color.neutral.White}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="LabelMedium"
                    color={theme.custom.color.neutral.White}
                  >
                    {feature.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FrameDedicationSection;
