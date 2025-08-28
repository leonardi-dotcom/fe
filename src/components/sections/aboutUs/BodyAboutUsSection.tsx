import {
  alpha,
  Box,
  Card,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import bgHero from "../../../assets/img/aboutus/heroimg.png";
import md1 from "../../../assets/img/aboutus/md1.png";
import md2 from "../../../assets/img/aboutus/md2.png";
import md3 from "../../../assets/img/aboutus/md3.png";
import vector from "../../../assets/img/aboutus/vector.svg";
import ButtonHeroSection from "../../common/ButtonHeroSection";
import { Facebook, Instagram, Twitter } from "lucide-react";

const BodyAboutUsSection = () => {
  const theme = useTheme();

  const stats = [
    {
      number: "15K",
      desc: "Happy Customers",
    },
    {
      number: "150K",
      desc: "Monthly Visitors",
    },
    {
      number: "15",
      desc: "Countries Worldwide",
    },
    {
      number: "100+",
      desc: "Top Partners",
    },
  ];

  const teams = [
    {
      name: "Camella    ",
      profs: "Pengrajin",
      img: md1,
    },
    {
      name: "Cintia",
      profs: "Designer Product",
      img: md2,
    },
    {
      name: "Luke",
      profs: "Finisher",
      img: md3,
    },
  ];

  return (
    <>
      {/* About us section*/}
      <Box
        sx={{
          width: "90rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          mt: "5rem",
        }}
      >
        {/* About us | hero section*/}
        <Box
          sx={{
            minWidth: "fit-content",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "38rem",
              height: "28rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              ml: "10rem",
            }}
          >
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Adiwangsa Furnishing
            </Typography>
            <Typography
              variant="heroTitle"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="LabelLarge"
              color={theme.custom.color.neutral.CoolGrey}
            >
              Adiwangsa Furnishing berasal dari kata Adiwangsa yang berarti
              “bernilai luhur”. Nama ini mencerminkan komitmen kami menghadirkan
              furnitur dengan kualitas tinggi, desain elegan, dan kenyamanan
              yang berkelas untuk setiap ruang.
            </Typography>
            <ButtonHeroSection
              sizeVariant="extraLarge"
              customBorderRadius="2"
              noBorder
              enableShadow
              customColor={theme.custom.color.primary.Verdigris}
            >
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.White}
              >
                Get Quote Now
              </Typography>
            </ButtonHeroSection>
          </Box>
          <Box
            component="img"
            src={bgHero}
            sx={{
              mt: "-8rem",
            }}
          />
        </Box>
        {/* About us | Problem trying section*/}
        <Box
          sx={{
            width: "64rem",
            height: "12rem",
            display: "flex",
            flexDirection: "column",
            mx: "auto",
            mt: "3rem",
            gap: 2,
          }}
        >
          <Typography
            variant="LabelSmall"
            color={theme.custom.color.secondary.ImperialRed}
          >
            Problems trying
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              MEMBAWA KEANGGUNAN DAN NILAI Luhur KE SETIAP RUANG HIDUP ANDA
            </Typography>
            <Typography
              variant="LabelSmall"
              color={alpha(theme.custom.color.neutral.SpaceCadet, 0.6)}
            >
              Adiwangsa furnishing menghadirkan furnitur berkualitas dengan
              sentuhan modern dan nilai luhur, menciptakan kenyamanan,
              keindahan, serta makna di setiap hunian anda.
            </Typography>
          </Box>
        </Box>
        {/* About us | stats section*/}
        <Box
          sx={{
            width: "66rem",
            height: "16.5rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mx: "auto",
            p: 5,
          }}
        >
          {stats.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography
                variant="heroTitle"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                {item.number}
              </Typography>
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.CoolGrey}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
        {/* TODO add video later */}
        {/* About us | video section*/}
        <Card>
          <CardMedia component="video" image="" controls />
        </Card>
        {/* About us | team section*/}
        <Box
          sx={{
            width: "66rem",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            mx: "auto",
            mt: "15rem",
          }}
        >
          {/* About us | team section | card */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="h1"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Meet Our Team
            </Typography>
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.neutral.CoolGrey}
              align="center"
              sx={{
                width: "32rem",
              }}
            >
              Our team combines creativity, dedication, and expertise to deliver
              the best results.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "64.625rem",
              height: "24rem",
              display: "flex",
              flexDirection: "row",
              gap: 3,
            }}
          >
            {teams.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box component="img" src={item.img} alt="gambar media" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    py: 3,
                  }}
                >
                  <Typography
                    variant="LabelMedium"
                    color={theme.custom.color.neutral.SpaceCadet}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="LabelMedium"
                    color={theme.custom.color.neutral.CoolGrey}
                  >
                    {item.profs}
                  </Typography>
                  {/* About us | team section | card | media icon*/}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <IconButton>
                      <Facebook color={theme.custom.color.primary.Verdigris} />
                    </IconButton>
                    <IconButton>
                      <Instagram color={theme.custom.color.primary.Verdigris} />
                    </IconButton>
                    <IconButton>
                      <Twitter color={theme.custom.color.primary.Verdigris} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* About us | Company section*/}
        <Box
          sx={{
            width: "65.625rem",
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            mx: "auto",
            mt: "3rem",
          }}
        >
          {/* About us | Title Section */}
          <Box
            sx={{
              width: "54rem",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              mx: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Big Companies Are Here
            </Typography>

            <Typography
              variant="LabelMedium"
              align="center"
              color={theme.custom.color.neutral.CoolGrey}
              sx={{
                width: "34rem",
              }}
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </Typography>
          </Box>
          {/* About us | Company Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "65.625rem",
              height: "auto",
              gap: "3.8rem",
              opacity: 0.5,
              mx: "auto",
              mt: "6rem",
            }}
          >
            {["Lowe's", "DeWalt", "Home Depot", "IKEA", "Makita", "3M"].map(
              (item) => (
                <Typography
                  key={item}
                  variant="h2"
                  color={theme.custom.color.neutral.SpaceCadet}
                >
                  {item}
                </Typography>
              )
            )}
          </Box>
        </Box>
        {/* About us | testimonials section*/}
        <Box
          sx={{
            width: "100%",
            height: "39.75rem",
            display: "flex",
            flexDirection: "row",
            bgcolor: theme.custom.color.primary.Verdigris,
            mt: "-4rem",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              mx: " auto",
            }}
          >
            <Box
              sx={{
                width: "30rem",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 3,
                mt: "10rem",
                ml: "5rem",
              }}
            >
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.White}
              >
                WORK WITH US
              </Typography>
              <Typography variant="h2" color={theme.custom.color.neutral.White}>
                Now Let"s grow Yours
              </Typography>
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.White}
              >
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
                century, which gave rise to quantum mechanics,
              </Typography>
              <ButtonHeroSection
                sizeVariant="large"
                customBorderRadius="2"
                noBorder
                enableShadow
                customColor={theme.custom.color.neutral.White}
              >
                <Typography
                  variant="LabelMedium"
                  color={theme.custom.color.primary.Verdigris}
                >
                  Contact Us
                </Typography>
              </ButtonHeroSection>
            </Box>
          </Box>
          <Box component="img" src={vector} alt="gambar media" />
        </Box>
      </Box>
    </>
  );
};

export default BodyAboutUsSection;
