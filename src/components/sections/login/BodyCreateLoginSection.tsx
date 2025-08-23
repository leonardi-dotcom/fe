import {
  alpha,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  LinearProgress,
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

// Password strength checker function
const checkPasswordStrength = (password: string) => {
  const theme = useTheme();

  let score = 0;
  let feedback = [];

  if (password.length >= 8) {
    score += 1;
  } else {
    feedback.push("Minimal 8 karakter");
  }

  if (/[a-z]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Gunakan huruf kecil");
  }

  if (/[A-Z]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Gunakan huruf besar");
  }

  if (/[0-9]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Gunakan angka");
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Gunakan simbol (!@#$%^&*)");
  }

  let strength = "Sangat Lemah";
  let color = theme.custom.color.secondary.ImperialRed; // red
  let progress = 20;

  switch (score) {
    case 0:
    case 1:
      strength = "Sangat Lemah";
      color = theme.custom.color.secondary.ImperialRed;
      progress = 20;
      break;
    case 2:
      strength = "Lemah";
      color = theme.custom.color.secondary.MikadoYellow;
      progress = 40;
      break;
    case 3:
      strength = "Sedang";
      color = theme.custom.color.secondary.MikadoYellow;
      progress = 60;
      break;
    case 4:
      strength = "Kuat";
      color = theme.custom.color.neutral.Green;
      progress = 80;
      break;
    case 5:
      strength = "Sangat Kuat";
      color = theme.custom.color.neutral.Green;
      progress = 100;
      break;
  }

  return { score, strength, color, progress, feedback };
};

// Password Strength Indicator Component
const PasswordStrengthIndicator = ({ password }: { password: string }) => {
  const theme = useTheme();
  const { strength, color, progress, feedback } =
    checkPasswordStrength(password);

  if (!password) return null;

  return (
    <Box sx={{ mt: 1, mb: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 0.5,
        }}
      >
        <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
          Kekuatan Password:
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: "0.75rem",
            fontWeight: "bold",
            color: color,
          }}
        >
          {strength}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 6,
          borderRadius: 3,
          backgroundColor: alpha(color, 0.2),
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
            borderRadius: 3,
          },
        }}
      />

      {feedback.length > 0 && (
        <Box sx={{ mt: 0.5 }}>
          <Typography
            variant="caption"
            sx={{
              fontSize: "0.7rem",
              color: theme.custom.color.neutral.CoolGrey,
            }}
          >
            Tips: {feedback.slice(0, 2).join(", ")}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

const BodyCreateLoginSection = () => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;
  const showPasswordMismatch = confirmPassword.length > 0 && !passwordsMatch;

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
            height: "60rem",
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
              minHeight: "auto",
              display: "flex",
              flexDirection: "column",
              p: 3,
              gap: 2,
            }}
          >
            {/* Password Change Form */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                minWidth: "fit-content",
                height: "auto",
                mt: "1rem",
              }}
            >
              <TextField
                label="Email"
                type="email"
                placeholder="you@example.com"
                variant="filled"
                helperText="Masukkan email yang valid"
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

              <Box>
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  variant="filled"
                  helperText="Minimal 8 karakter dengan kombinasi huruf, angka, dan simbol"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                {/* Password Strength Indicator */}
                <PasswordStrengthIndicator password={password} />
              </Box>
              <Box
                sx={{
                  height: "auto",
                }}
              >
                <TextField
                  label="Konfirmasi Password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  variant="filled"
                  helperText={
                    showPasswordMismatch
                      ? "Password tidak cocok"
                      : passwordsMatch
                      ? "Password cocok ✓"
                      : "Ulangi password yang sama"
                  }
                  fullWidth
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={showPasswordMismatch}
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
                {/* Password Match Indicator */}
                {passwordsMatch && (
                  <Box sx={{ mt: 0.5 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "0.75rem",
                        color: theme.custom.color.neutral.Green,
                        fontWeight: "bold",
                      }}
                    >
                      ✓ Password berhasil dikonfirmasi
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          {/* CreateLogin Body | Remember me & Forgot Password */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5rem",
                alignItems: "center",
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
