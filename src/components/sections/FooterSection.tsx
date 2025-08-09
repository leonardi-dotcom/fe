import {
  alpha,
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Frame from "../../assets/img/home/footer/Frame.png";
import ButtonHeroSection from "../common/ButtonHeroSection";

const FooterSection = () => {
  const theme = useTheme();

  const footerData = [
    {
      label: "Category",
      data01: "Living Room",
      data02: "Bed Room",
      data03: "Kitchen",
      data04: "Bath Room",
    },
    {
      label: "Popular Product",
      data01: "Single Sofa Black",
      data02: "Wooden Bookcase",
      data03: "Wooden Chair",
      data04: "Luxury White Bed",
    },
    {
      label: "Sitemap",
      data01: "Product",
      data02: "Services",
      data03: "Article",
      data04: "About Us",
    },
    {
      label: "Follow Us",
      data01: "Facebook",
      data02: "Instagram",
      data03: "TikTok",
      data04: "Youtube",
    },
  ];

  return (
    <>
      {/* Footer Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "90rem" },
          height: { xs: "auto", md: "75.25rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          mx: "auto",
          mt: "5rem",
        }}
      >
        {/* Footer Section " bg footer" */}
        <Box
          sx={{
            width: { xs: "100%", md: "90rem" },
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Footer Section " bg footer" | bg img*/}
          <Box
            sx={{
              width: { xs: "100%", md: "90rem" },
              height: { xs: "25rem", md: "30.75rem" },
              display: "flex",
              mx: "auto",
            }}
          >
            <Box
              component="img"
              src={Frame}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              bgcolor={alpha(theme.custom.color.neutral.Black, 0.8)}
            />
            <Typography
              variant="h1"
              color={theme.custom.color.neutral.White}
              sx={{
                width: "19.43rem",
                height: "7rem",
                position: "absolute",
                right: "20rem",
                mt: "12rem",
              }}
            >
              Our Furniture Review
            </Typography>
            <Typography
              variant="BodyMedium"
              color={theme.custom.color.neutral.White}
              sx={{
                width: "21.6rem",
                height: "3.25",
                position: "absolute",
                right: "18rem",
                mt: "20rem",
                zIndex: "10",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </Box>
          {/* Footer Section " bg footer" | Subscribe*/}
          <Box
            sx={{
              width: "90rem",
              height: "17rem",
              display: "flex",
              flexDirection: "row",
              gap: "2.5rem",
              bgcolor: alpha(theme.custom.color.neutral.Black, 0.8),
              justifyContent: "center",
              alignItems: "center ",
            }}
          >
            <Typography
              variant="TitleLarge"
              color={theme.custom.color.neutral.White}
              sx={{
                width: "30.625rem",
                height: "5.25rem",
                display: "flex",
              }}
            >
              Subscribe to get attractive offers on our products
            </Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                placeholder="E.g. youremail@mail.com"
                variant="outlined"
                sx={{
                  bgcolor: theme.custom.color.neutral.White,
                  width: "41.68rem",
                  height: "5.125rem",
                  "& .MuiInputBase-root": {
                    height: "100%",
                  },
                }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <ButtonHeroSection
                          sizeVariant="medium"
                          noBorder
                          customColor={theme.custom.color.neutral.Orange}
                          customBorderRadius="0px"
                        >
                          <Typography
                            variant="LabelMedium"
                            color={theme.custom.color.neutral.White}
                          >
                            Subscribe
                          </Typography>
                        </ButtonHeroSection>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Stack>
          </Box>
          {/* Footer Section " bg footer" | Logo*/}
          <Box
            sx={{
              width: "90rem",
              height: "27.4rem",
              display: "flex",
              flexDirection: "row",
              p: "5rem",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                width: "13.68rem",
                height: "10.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                ml: "-5rem",
              }}
            >
              <Typography
                variant="heroTitle"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Cozy®
              </Typography>
              <Typography
                variant="BodyMedium"
                color={alpha(theme.custom.color.neutral.SpaceCadet, 0.8)}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Box>
            {/* Footer Section " bg footer" | Logo | Category | 01*/}
            {footerData.map((section, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Typography
                  variant="LabelMedium"
                  color={theme.custom.color.neutral.SpaceCadet}
                >
                  {section.label}
                </Typography>

                {[
                  section.data01,
                  section.data02,
                  section.data03,
                  section.data04,
                ].map((item, i) => (
                  <Typography
                    key={i}
                    variant="BodyMedium"
                    color={alpha(theme.custom.color.neutral.SpaceCadet, 0.8)}
                    sx={{ cursor: "pointer" }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
          {/* Footer Section " bg footer" | Line*/}
          <Box
            sx={{
              position: "relative",
              width: "90rem",
              height: "1px",
              bgcolor: theme.custom.color.neutral.SpaceCadet,
              mt: "-8rem",
            }}
          />
          {/* Footer Section " bg footer" | Ends*/}
          <Box
            sx={{
              width: "18.5rem",
              height: "1.375rem",
              display: "flex",
              mt: "2rem",
            }}
          >
            <Typography
              variant="BodySmall"
              color={alpha(theme.custom.color.neutral.SpaceCadet, 0.8)}
            >
              © 2023 by Logo Furniture. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FooterSection;
