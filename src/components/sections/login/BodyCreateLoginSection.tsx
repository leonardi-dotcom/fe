import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import ImgBg from "../../../assets/img/login/imgBg.png";
import GoogleLoginIcon from "../../../theme/icon/GoogleLoginIcon";
import FacebookLoginIcon from "../../../theme/icon/FacebookLoginIcon";
import EmailLoginIcon from "../../../theme/icon/login/EmailLoginIcon";
import KeyLoginIcon from "../../../theme/icon/login/KeyLoginIcon";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const BodyCreateLoginSection = () => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <>
      {/* CreateLogin Body */}
      <Box
        sx={{
          width: "104rem",
          height: "60.75rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mx: "auto",
          mt: "5rem",
        }}
      >
        {/* CreateLogin Body | Left img */}
        <Box
          sx={{ width: "48rem", height: "58.75" }}
          component="img"
          src={ImgBg}
          alt="Cover login"
        />
        {/* CreateLogin Body | Right */}
        <Card
          sx={{
            width: "40rem",
            height: "50rem",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Typography
            variant="TitleLarge"
            color={theme.custom.color.neutral.SpaceCadet}
          >
            Welcome To
          </Typography>
          <Typography variant="h1" color={theme.custom.color.primary.Verdigris}>
            Adiwangsa Furnishing
          </Typography>
          {/* CreateLogin Body | Button Social media */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              mt: "2rem",
            }}
          >
            <Button
              sx={{
                height: "4rem",
                minWidth: "fit-content",
                px: "40px",
                boxShadow: theme.shadows[4],
                gap: 2,
              }}
            >
              <GoogleLoginIcon />
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Login with Google
              </Typography>
            </Button>
            <Button
              sx={{
                height: "4rem",
                minWidth: "fit-content",
                px: "40px",
                boxShadow: theme.shadows[4],
                gap: 2,
              }}
            >
              <FacebookLoginIcon />
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Login with Facebook
              </Typography>
            </Button>
          </Box>
          {/* CreateLogin Body | Divider */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1.5rem",
              mt: "2rem",
            }}
          >
            <Divider
              sx={{
                flex: 1,
                borderColor: theme.custom.color.neutral.CoolGrey,
              }}
            />
            <Typography variant="LabelSmall">OR</Typography>
            <Divider
              sx={{
                flex: 1,
                borderColor: theme.custom.color.neutral.CoolGrey,
              }}
            />
          </Box>
          {/* CreateLogin Body | Email & password */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              minWidth: "fit-content",
              height: "4rem",
              mt: "1rem",
            }}
          >
            <TextField
              label="Email"
              type="email"
              placeholder="you@example.com"
              variant="filled"
              helperText="Massukan email yang valid"
              fullWidth
              slotProps={{
                input: {
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailLoginIcon style={{ marginTop: "-14px" }} />
                    </InputAdornment>
                  ),
                },
                inputLabel: {
                  sx: {
                    textAlign: "left",
                    width: "100%",
                    pr: 2,
                    ml: "2.3rem",
                  },
                },
              }}
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              variant="filled"
              helperText="Minimal 8 karakter"
              fullWidth
              slotProps={{
                input: {
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyLoginIcon style={{ marginTop: "-14px" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((p1) => !p1)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
                inputLabel: {
                  sx: {
                    textAlign: "left",
                    width: "100%",
                    pr: 2,
                    ml: "2.1rem",
                  },
                },
              }}
            />
            <TextField
              label="Konfirmasi Password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              variant="filled"
              helperText="Minimal 8 karakter"
              fullWidth
              slotProps={{
                input: {
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyLoginIcon style={{ marginTop: "-14px" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((p) => !p)}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
                inputLabel: {
                  sx: {
                    textAlign: "left",
                    width: "100%",
                    pr: 2,
                    ml: "2.1rem",
                  },
                },
              }}
            />
          </Box>
          {/* CreateLogin Body | Remember me & Forgot Password */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mt: "14rem",
              gap: "0.5rem",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5rem",
              }}
            >
              <Checkbox
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                sx={{
                  padding: 0,
                  color: theme.custom.color.neutral.SpaceCadet,
                }}
              />
              <Typography
                variant="BodyMedium"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Remember me
              </Typography>
            </Box>
            <IconButton>
              <Typography
                variant="BodyMedium"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Forgot Password?
              </Typography>
            </IconButton>
          </Box>
          <Button
            sx={{
              bgcolor: theme.custom.color.primary.Verdigris,
              height: "4rem",
              mt: "1rem",
            }}
          >
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.neutral.White}
            >
              Login
            </Typography>
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default BodyCreateLoginSection;
