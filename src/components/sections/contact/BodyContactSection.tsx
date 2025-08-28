import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Bg from "../../../assets/img/contact/bg.svg";
import { color } from "../../../theme/color";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  MapPin,
  Mail,
  Redo,
} from "lucide-react";
import ButtonHeroSection from "../../common/ButtonHeroSection";

const BodyContactSection = () => {
  const theme = useTheme();

  const icons = [
    {
      icon: <Twitter color={theme.custom.color.neutral.SpaceCadet} size={32} />,
    },
    {
      icon: (
        <Facebook color={theme.custom.color.neutral.SpaceCadet} size={32} />
      ),
    },
    {
      icon: (
        <Instagram color={theme.custom.color.neutral.SpaceCadet} size={32} />
      ),
    },
    {
      icon: (
        <Linkedin color={theme.custom.color.neutral.SpaceCadet} size={32} />
      ),
    },
  ];

  const contacts = [
    {
      bgColor: theme.custom.color.neutral.White,
      icon: <Phone color={theme.custom.color.neutral.SpaceCadet} size={88} />,
      email1: "georgia.young@example.com",
      email2: "georgia.young@ple.com",
    },
    {
      bgColor: theme.custom.color.primary.Verdigris,
      icon: <MapPin color={theme.custom.color.neutral.SpaceCadet} size={88} />,
      email1: "georgia.young@example.com",
      email2: "georgia.young@ple.com",
    },
    {
      bgColor: theme.custom.color.neutral.White,
      icon: <Mail color={theme.custom.color.neutral.SpaceCadet} size={88} />,
      email1: "georgia.young@example.com",
      email2: "georgia.young@ple.com",
    },
  ];

  return (
    <>
      {/* Contact Body */}
      <Box
        sx={{
          width: "90rem",
          height: "115rem",
          mx: "auto",
          mt: "5rem",
          mb: " 15rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Contact Body | contact hero */}
        <Box
          sx={{
            width: "fit-content",
            height: "47rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "38rem",
              height: "50rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              CONTACT US
            </Typography>
            <Typography
              variant="heroTitle"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Get in touch today!
            </Typography>

            <Typography
              variant="LabelMedium"
              color={color.neutral.CoolGrey}
              sx={{ width: "23.5rem" }}
            >
              We know how large objects will act, but things on a small scale
            </Typography>
            <Typography
              variant="TitleMedium"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Phone : +62 1234 5678
            </Typography>
            <Typography
              variant="TitleMedium"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Fax : +62 1234 5678
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
              }}
            >
              {icons.map((item, index) => (
                <IconButton key={index} sx={{ padding: 0 }}>
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
          <Box component="img" src={Bg} alt="Cover hero contact" />
        </Box>
        {/* Contact Body | contact visit our office */}
        <Box
          sx={{
            width: "65.625",
            height: "53rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "5rem",
          }}
        >
          {/* Contact Body | contact visit our office | text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              width: "40rem",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              VISIT OUR OFFICE
            </Typography>
            <Typography
              variant="h1"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              We help small businesses with big ideas
            </Typography>
          </Box>
          {/* Contact Body | contact visit our office | row */}
          <Box
            sx={{
              width: "62rem",
              height: "26rem",
              mx: "auto",
              mt: "5rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {contacts.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "20.5625rem",
                  height: "26rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: item.bgColor,
                  gap: "2rem",
                }}
              >
                {item.icon}
                <Typography
                  variant="LabelMedium"
                  color={theme.custom.color.neutral.SpaceCadet}
                >
                  {item.email1}
                </Typography>
                <Typography
                  variant="LabelMedium"
                  color={theme.custom.color.neutral.SpaceCadet}
                >
                  {item.email2}
                </Typography>
                <Typography
                  variant="h3"
                  color={theme.custom.color.neutral.SpaceCadet}
                >
                  Get Support
                </Typography>
                <ButtonHeroSection
                  enableShadow
                  sizeVariant="extraLarge"
                  noBorder
                >
                  <Typography
                    variant="LabelSmall"
                    color={theme.custom.color.neutral.SpaceCadet}
                  >
                    Submit Request
                  </Typography>
                </ButtonHeroSection>
              </Box>
            ))}
          </Box>
        </Box>
        {/* Contact Body | Cta */}
        <Box
          sx={{
            width: "65.625rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mx: "auto",
            mt: "5rem",
            gap: "2rem",
          }}
        >
          <Redo
            color={theme.custom.color.primary.Verdigris}
            size={88}
            style={{ transform: "rotate(90deg)" }}
          />
          <Typography
            variant="LabelMedium"
            color={theme.custom.color.neutral.SpaceCadet}
          >
            We Can't WAIT TO MEET YOU
          </Typography>
          <Typography
            variant="heroTitle"
            color={theme.custom.color.neutral.SpaceCadet}
          >
            Let’s Talk
          </Typography>
          <ButtonHeroSection
            enableShadow
            sizeVariant="extraLarge"
            noBorder
            sx={{ mt: "1rem" }}
            customColor={theme.custom.color.primary.Verdigris}
          >
            <Typography
              variant="LabelSmall"
              color={theme.custom.color.neutral.White}
            >
              Try it free now
            </Typography>
          </ButtonHeroSection>
        </Box>
      </Box>
    </>
  );
};

export default BodyContactSection;
