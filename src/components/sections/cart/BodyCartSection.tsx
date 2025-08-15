import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  IconButton,
  Divider,
} from "@mui/material";
import CountButton from "../../common/CountButton";
import ChairW from "../../../assets/img/Cart/chairWhite.png";
import ChairG from "../../../assets/img/Cart/chairGreen.png";
import React from "react";
import PercentageIcon from "../../../theme/icon/PercentageIcon";
import OrderSummary from "../../common/OrderSummary";

const BodyCartSection = () => {
  const theme = useTheme();

  const productData = [
    {
      name: "Osmond Armchair",
      color: "Gunnared blege",
      price: "$149.99",
      imgPrdct: ChairW,
    },
    {
      name: "Meryl Lounge Chair",
      color: "Lysed bright green",
      price: "$169.99",
      imgPrdct: ChairG,
    },
  ];

  return (
    <>
      {/* Cart Section */}
      <Box
        sx={{
          width: "90rem",
          height: "50.25rem",
          display: "flex",
          flexDirection: "row",
          mx: "auto",
          justifyContent: "space-between",
          mt: "5rem",
        }}
      >
        {/* Cart Section | Left*/}
        <Box
          sx={{
            width: "51.25rem",
            height: "36.75rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Cart Section | Left | Name Cart*/}
          <Box
            sx={{
              width: "11rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              mb: "5rem",
            }}
          >
            <Typography
              variant="h2"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Cart
            </Typography>
            <Typography
              variant="LabelLarge"
              color={theme.custom.color.neutral.CoolGrey}
            >
              2 ITEMS
            </Typography>
          </Box>
          {/* Cart Section | Left | Product Cart*/}
          {productData.map((product, index) => (
            <React.Fragment key={index}>
              <Box
                key={index}
                sx={{
                  width: "51.25rem",
                  height: "10rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mt: "1rem",
                }}
              >
                {/* Cart Section | Left | Product Cart | Details product*/}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "2rem",
                  }}
                >
                  {/* Cart Section | Left | Product Cart | Details product | Img product*/}
                  <Box
                    component="img"
                    src={product.imgPrdct}
                    alt="Chair White"
                  />
                  {/* Cart Section | Left | Product Cart | Details product |  desc product*/}
                  <Box
                    sx={{
                      width: "14.2rem",
                      height: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "1.4rem",
                    }}
                  >
                    <Typography
                      variant="LabelLarge"
                      color={theme.custom.color.neutral.SpaceCadet}
                    >
                      {product.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1rem",
                      }}
                    >
                      <Typography
                        variant="LabelMedium"
                        color={theme.custom.color.neutral.CoolGrey}
                      >
                        Color
                      </Typography>
                      <Typography
                        variant="LabelMedium"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        {product.color}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "15.5rem",
                        height: "3.25rem",
                        display: "flex",
                        flexDirection: "row",
                        gap: "1.5rem",
                      }}
                    >
                      <CountButton />
                      <IconButton>
                        <Typography
                          variant="LabelMedium"
                          color={theme.custom.color.secondary.ImperialRed}
                        >
                          Remove
                        </Typography>
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
                {/* Cart Section | Left | Product Cart | Price product*/}
                <Typography
                  variant="LabelLarge"
                  color={theme.custom.color.neutral.SpaceCadet}
                >
                  {product.price}
                </Typography>
              </Box>

              {/* Divider di tengah antara card */}
              {index !== productData.length - 1 && (
                <Divider
                  sx={{
                    my: "1.5rem",
                    borderColor: theme.custom.color.neutral.CoolGrey,
                    borderWidth: "1px",
                  }}
                />
              )}
            </React.Fragment>
          ))}
          {/* Cart Section | Left | Offer*/}
          <Box
            sx={{
              width: "46rem",
              height: "4rem",
              display: "flex",
              flexDirection: "row",
              bgcolor: alpha(theme.custom.color.primary.Verdigris, 0.1),
              p: "1.2rem",
              mt: "1rem",
              gap: "1rem",
              borderColor: theme.custom.color.primary.Verdigris,
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <PercentageIcon />
            <Typography
              variant="BodyLarge"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              10% Instant Discount with Federal Bank Debit Cards on a min spend
              of $150. TCA
            </Typography>
          </Box>
        </Box>
        {/* Cart Section | Right*/}
        <Box
          sx={{
            display: "flex",
            width: "auto",
          }}
        >
          <OrderSummary />
        </Box>
      </Box>
    </>
  );
};

export default BodyCartSection;
