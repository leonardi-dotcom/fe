import {
  alpha,
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import TrailingIcon from "../../theme/icon/TrailingIcon";

const OrderSummary = () => {
  const theme = useTheme();

  const OrderSummary = [
    {
      price: "$319.98",
      discount: "$31.9",
      shipping: "Free",
      coupun: "$00.0",
    },
  ];

  const TotalSummary = [
    {
      total: "$288.08",
      estimated: "01 Feb, 2023",
    },
  ];

  return (
    <>
      {/* Order Summary */}
      <Box
        sx={{
          width: "25.5rem",
          height: "38.82rem",
          display: "flex",
          flexDirection: "column",
          p: "2rem",
          border: "1px solid",
          borderColor: alpha(theme.custom.color.neutral.Black, 0.4),
        }}
      >
        <Typography variant="h3" color={theme.custom.color.neutral.SpaceCadet}>
          Order Summary
        </Typography>

        {OrderSummary.map((order, index) => (
          <Box
            key={index}
            sx={{
              width: "auto",
              height: "10.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              mt: "4rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="BodyLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Price
              </Typography>
              <Typography
                variant="BodyLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                {order.price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="BodyLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Discount
              </Typography>
              <Typography
                variant="BodyLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                {order.discount}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="BodyLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Shipping
              </Typography>
              <Typography
                variant="BodyLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                {order.shipping}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="BodyLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Coupon Applied
              </Typography>
              <Typography
                variant="BodyLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                {order.coupun}
              </Typography>
            </Box>
          </Box>
        ))}

        <Divider
          sx={{
            my: "1.5rem",
            borderColor: theme.custom.color.neutral.CoolGrey,
            borderWidth: "1px",
          }}
        />

        {TotalSummary.map((total, index) => (
          <Box
            key={index}
            sx={{
              width: "auto",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="BodyLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Total
              </Typography>
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                {total.total}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="BodyLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Estimated Delivery by
              </Typography>
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                {total.estimated}
              </Typography>
            </Box>
            <TextField
              variant="outlined"
              placeholder="Coupon Code"
              sx={{
                width: "auto",
                height: "3.5rem",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <TrailingIcon />
                  </InputAdornment>
                ),
                sx: {
                  "& input::placeholder": {
                    color: theme.custom.color.neutral.CoolGrey,
                  },
                },
              }}
            />
            <Button
              sx={{
                bgcolor: theme.custom.color.primary.Verdigris,
                height: "3.5rem",
                px: "40px",
                minWidth: "fit-content",
              }}
            >
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.White}
              >
                Proceed to Checkout
              </Typography>
            </Button>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default OrderSummary;
