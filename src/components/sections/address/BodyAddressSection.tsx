import {
  alpha,
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Icon,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";
import ChevronGreyRightIcon from "../../../theme/icon/ChevronGreyRightIcon";
import React from "react";
import ButtonHeroSection from "../../common/ButtonHeroSection";
import { color } from "../../../theme/color";
import PlusIcon from "../../../theme/icon/PlusIcon";
import GreenPlusIcon from "../../../theme/icon/GreenPlusIcon";
import OrderSummary from "../../common/OrderSummary";

const BodyAddressSection = () => {
  const theme = useTheme();

  const addressData = [
    {
      name: "Huzefa Bagwala",
      prop: "HOME",
      addrs: "1131 Dusty Townline, Jacksonville, TX 40322",
      phone: "(936) 361-0310",
    },
    {
      name: "IndiaTech",
      prop: "OFFICE",
      addrs: "1219 Harvest Path, Jacksonville, TX 40326",
      phone: "(936) 361-0310",
    },
  ];

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
            width: "52.5rem",
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
              color={theme.custom.color.neutral.SpaceCadet}
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
              color={theme.custom.color.neutral.CoolGrey}
            >
              Payment
            </Typography>
          </Box>
          {/* Address Section | Left | Address Home*/}
          <FormControl
            sx={{
              display: "flex",
              mt: "5rem",
            }}
          >
            <RadioGroup
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              {addressData.map((data, index) => (
                <Box
                  key={index}
                  sx={{
                    maxWidth: "51.25rem",
                    maxHeight: "6.5rem",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "0.2s",
                    mb: "5rem",
                  }}
                  onClick={() => setValue("option1")}
                >
                  {/* Address Section | Left | Address Home | Baris Pertama*/}
                  <Box
                    sx={{
                      width: "51.25rem",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Address Section | Left | Address Home | Name*/}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Radio value="option1" checked={value === "option1"} />
                      <Typography
                        variant="TitleMedium"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        {data.name}
                      </Typography>
                      <Box
                        sx={{
                          width: "4.2rem",
                          height: "2.5rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "2px solid",
                          borderColor: theme.custom.color.primary.Verdigris,
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="LabelMedium"
                          color={theme.custom.color.primary.Verdigris}
                        >
                          {data.prop}
                        </Typography>
                      </Box>
                    </Box>
                    {/* Address Section | Left | Address Home | Button Actions*/}
                    <Box
                      sx={{
                        width: "12rem",
                        height: "1.25rem",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <IconButton>
                        <Typography
                          variant="LabelMedium"
                          color={theme.custom.color.neutral.SpaceCadet}
                        >
                          Edit
                        </Typography>
                      </IconButton>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          borderColor: alpha(
                            theme.custom.color.neutral.CoolGrey,
                            0.6
                          ),
                          borderWidth: "1px",
                          borderStyle: "solid",
                        }}
                      />
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
                  {/* Address Section | Left | Address Home | Baris Kedua*/}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      mt: "1rem",
                      ml: "4rem",
                    }}
                  >
                    <Typography
                      variant="BodyLarge"
                      color={theme.custom.color.neutral.SpaceCadet}
                    >
                      {data.addrs}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        variant="LabelMedium"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        Contact -
                      </Typography>
                      <Typography
                        variant="BodyLarge"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        {data.phone}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </RadioGroup>
          </FormControl>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{
              borderColor: alpha(theme.custom.color.neutral.CoolGrey, 0.6),
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          />
          <IconButton
            sx={{
              width: "12.69rem",
              height: "1.5rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: "3rem",
              ml: "3rem",
            }}
          >
            <GreenPlusIcon />
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.primary.Verdigris}
            >
              Add New Address
            </Typography>
          </IconButton>
        </Box>
        {/* Address Section | Right*/}
        <OrderSummary />
      </Box>
    </>
  );
};

export default BodyAddressSection;
