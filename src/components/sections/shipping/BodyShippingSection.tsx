import {
  Box,
  Card,
  Divider,
  FormControl,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";
import ChevronGreyRightIcon from "../../../theme/icon/ChevronGreyRightIcon";
import React from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import OrderSummary from "../../common/OrderSummary";

const BodyShippingSection = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState("option1");

  const [scheduleDate, setScheduleDate] = React.useState<Dayjs | null>(null);

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
        {/* Body Shipping  | Left */}
        <Box
          sx={{
            maxWidth: "51.25rem",
            height: "20rem",
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
              color={theme.custom.color.neutral.SpaceCadet}
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
          {/* Address Section | Left | ShipMethod*/}
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
              Shipment Method
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
                      <Typography
                        color={theme.custom.color.neutral.SpaceCadet}
                        variant="LabelMedium"
                      >
                        Free
                      </Typography>
                      <Typography
                        variant="BodyLarge"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        Regular Shipment
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="LabelMedium"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        01 Feb, 2023
                      </Typography>
                    </Box>
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
                      <Radio value="option2   " checked={value === "option2"} />
                      <Typography
                        color={theme.custom.color.neutral.SpaceCadet}
                        variant="LabelMedium"
                      >
                        $8.50
                      </Typography>
                      <Typography
                        variant="BodyLarge"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        Priority Shipping
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="LabelMedium"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        28 Jan, 2023
                      </Typography>
                    </Box>
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
                    onClick={() => setValue("option3")}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Radio value="option3" checked={value === "option3"} />
                      <Typography
                        color={theme.custom.color.neutral.SpaceCadet}
                        variant="LabelMedium"
                      >
                        Schedule
                      </Typography>
                      <Typography
                        variant="BodyLarge"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        Choose a date that works for you.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="LabelMedium"
                        color={theme.custom.color.neutral.SpaceCadet}
                      >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Select date"
                            value={scheduleDate}
                            onChange={(newValue) => setScheduleDate(newValue)}
                            slotProps={{ textField: { size: "small" } }}
                          />
                        </LocalizationProvider>
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        {/* Address Section | Right*/}
        <OrderSummary />
      </Box>
    </>
  );
};

export default BodyShippingSection;
