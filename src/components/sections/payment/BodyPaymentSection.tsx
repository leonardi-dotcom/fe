import {
  Box,
  Card,
  Divider,
  FormControl,
  Icon,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";
import ChevronGreyRightIcon from "../../../theme/icon/ChevronGreyRightIcon";

import React from "react";
import VisaIcon from "../../../theme/icon/VisaIcon";
import MasterCardIcon from "../../../theme/icon/MasterCardIcon";
import GreenPlusIcon from "../../../theme/icon/GreenPlusIcon";
import OrderSummary from "../../common/OrderSummary";

const BodyPaymentSection = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState("option1");

  return (
    <>
      <Box
        sx={{
          width: "90rem",
          height: "50.25rem",
          display: "flex",
          flexDirection: "row",
          mx: "auto",
          mt: "5rem",
          justifyContent: "space-between",
        }}
      >
        {/* Address Section | Left*/}
        <Box
          sx={{
            maxWidth: "52.25rem",
            height: "28.07rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Address Section | Left | steps*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              color={theme.custom.color.neutral.CoolGrey}
            >
              Address
            </Typography>
            <ChevronGreyRightIcon />
            <Typography
              variant="h3"
              color={theme.custom.color.neutral.CoolGrey}
            >
              Shipping
            </Typography>
            <ChevronGreyRightIcon />
            <Typography
              variant="h3"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Payment
            </Typography>
          </Box>
          {/* Address Section | Left | PaymentMethod*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "5rem",
            }}
          >
            <Typography
              variant="LabelLarge"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Payment Method
            </Typography>
            <FormControl sx={{ display: "flex" }}>
              <RadioGroup
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "2rem",
                    border: "2px solid",
                    borderColor: theme.custom.color.neutral.CoolGrey,
                  }}
                >
                  <Card
                    sx={{
                      width: "51.25rem",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "1rem",
                      p: 2,
                      cursor: "pointer",
                      justifyContent: "space-between",
                    }}
                    onClick={() => setValue("option1")}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Radio value="option1" checked={value === "option1"} />
                      <Icon>
                        <VisaIcon />
                      </Icon>
                      <Typography
                        variant="LabelMedium"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        •••• 6754
                      </Typography>
                      <Typography
                        variant="BodyLarge"
                        color={theme.custom.color.neutral.CoolGrey}
                        sx={{
                          ml: "1rem",
                        }}
                      >
                        Expires 06/2021
                      </Typography>
                    </Box>
                    <IconButton>
                      <Typography
                        variant="LabelMedium"
                        color={theme.custom.color.secondary.ImperialRed}
                      >
                        Remove
                      </Typography>
                    </IconButton>
                  </Card>
                  <Divider
                    sx={{ borderColor: theme.custom.color.neutral.CoolGrey }}
                  />
                  <Card
                    sx={{
                      width: "51.25rem",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "1rem",
                      p: 2,
                      cursor: "pointer",
                      justifyContent: "space-between",
                    }}
                    onClick={() => setValue("option2")}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Radio value="option2" checked={value === "option2"} />
                      <Icon>
                        <MasterCardIcon />
                      </Icon>
                      <Typography
                        variant="LabelMedium"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        •••• 5643
                      </Typography>
                      <Typography
                        variant="BodyLarge"
                        color={theme.custom.color.neutral.CoolGrey}
                        sx={{
                          ml: "1rem",
                        }}
                      >
                        Expires 11/2025
                      </Typography>
                    </Box>
                    <IconButton>
                      <Typography
                        variant="LabelMedium"
                        color={theme.custom.color.secondary.ImperialRed}
                      >
                        Remove
                      </Typography>
                    </IconButton>
                  </Card>
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
          <Divider
            sx={{
              mt: "5rem",
              borderColor: theme.custom.color.neutral.CoolGrey,
            }}
          />
          <IconButton
            sx={{
              width: "13.69rem",
              height: "1.5rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: "3rem",
              gap: "0.3rem",
            }}
          >
            <GreenPlusIcon />
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.primary.Verdigris}
            >
              Add Payment method
            </Typography>
          </IconButton>
        </Box>
        {/* Address Section | Right*/}
        <OrderSummary />
      </Box>
    </>
  );
};

export default BodyPaymentSection;
