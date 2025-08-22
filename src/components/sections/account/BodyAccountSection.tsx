import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Pp from "../../../assets/img/account/pp1.png";
import { HardDriveUpload, User, Mail, Phone } from "lucide-react";
import { useState } from "react";
import EmailLoginIcon from "../../../theme/icon/login/EmailLoginIcon";
import KeyLoginIcon from "../../../theme/icon/login/KeyLoginIcon";
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

const BodyAccountSection = () => {
  const theme = useTheme();

  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;
  const showPasswordMismatch = confirmPassword.length > 0 && !passwordsMatch;

  return (
    <>
      <Box
        sx={{
          width: "74rem",
          height: "80rem",
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          mt: "5rem",
        }}
      >
        {/* Account | Steps*/}
        <Box
          sx={{
            minWidth: "fit-content",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            gap: 1,
          }}
        >
          <Typography
            variant="LabelMedium"
            color={theme.custom.color.neutral.CoolGrey}
          >
            Home
          </Typography>
          <Typography
            variant="LabelMedium"
            color={theme.custom.color.neutral.SpaceCadet}
          >
            / My Account
          </Typography>
        </Box>
        {/* Account | Profile */}
        <Box
          sx={{
            minWidth: "fit-content",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            mt: "5rem",
            justifyContent: "space-between",
          }}
        >
          {/* Account | Profile | Left */}
          <Card
            sx={{
              width: "15.5rem",
              height: "25rem",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 2,
            }}
          >
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Manage My Account
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                ml: "2rem",
                mt: "0.5rem",
              }}
            >
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.secondary.ImperialRed}
              >
                My Profile
              </Typography>
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.CoolGrey}
              >
                Address Book
              </Typography>
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.CoolGrey}
              >
                My Payment Options
              </Typography>
            </Box>
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              My Orders
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                ml: "2rem",
                mt: "0.5rem",
              }}
            >
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.CoolGrey}
              >
                My Returns
              </Typography>
              <Typography
                variant="LabelSmall"
                color={theme.custom.color.neutral.CoolGrey}
              >
                My Cancellations
              </Typography>
            </Box>
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              My WishList
            </Typography>
          </Card>
          {/* Account | Profile | Right */}
          <Box
            sx={{
              width: "55.5rem",
              height: "72rem",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {/* Account | Profile | Right | Photo Profile */}
            <Card
              sx={{
                height: "12rem",
                display: "flex",
                flexDirection: "column",
                p: 3,
                gap: 2,
              }}
            >
              <Typography
                variant="LabelLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Profile Photo
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    width: "6rem",
                  }}
                >
                  <Avatar
                    alt="User Profile"
                    src={image || Pp}
                    sx={{
                      width: 110,
                      height: 110,
                    }}
                  />
                  <IconButton
                    color="inherit"
                    component="label"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      bgcolor: theme.custom.color.neutral.White,
                      border: "2px solid",
                      borderColor: theme.custom.color.neutral.White,
                      "&:hover": { bgcolor: theme.custom.color.neutral.White },
                    }}
                  >
                    <PhotoCamera
                      sx={{
                        width: 20,
                        height: 20,
                      }}
                    />
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={handleImageChange}
                    />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    width: "14rem",
                    height: "6rem",
                    display: "flex",
                    flexDirection: "column",
                    ml: "2rem",
                    gap: 2,
                  }}
                >
                  <Button
                    sx={{
                      minWidth: "fit-content",
                      height: "2.5rem",
                      gap: 1,
                      borderRadius: 1,
                      bgcolor: theme.custom.color.primary.Verdigris,
                      display: "flex",
                      alignItems: "flex-end",
                      p: 1.1,
                    }}
                  >
                    <HardDriveUpload color={theme.custom.color.neutral.White} />

                    <Typography
                      variant="LabelSmall"
                      color={theme.custom.color.neutral.White}
                    >
                      Upload New Photo
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      minWidth: "fit-content",
                      height: "2.5rem",
                      gap: 1,
                      borderRadius: 1,
                      bgcolor: theme.custom.color.neutral.White,
                      display: "flex",
                      alignItems: "flex-end",
                      p: 1.1,
                      border: "2px solid",
                      borderColor: theme.custom.color.neutral.CoolGrey,
                    }}
                  >
                    <User color={theme.custom.color.neutral.SpaceCadet} />

                    <Typography
                      variant="LabelSmall"
                      color={theme.custom.color.neutral.SpaceCadet}
                    >
                      Use Gravatar
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Card>
            {/* Account | Profile | Right | Photo Profile */}
            <Card
              sx={{
                height: "18.5rem",
                display: "flex",
                flexDirection: "column",
                p: 3,
                gap: 2,
              }}
            >
              <Typography
                variant="LabelLarge"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                Personal Information
              </Typography>
              <Box
                sx={{
                  minWidth: "fit-content",
                  display: "flex",
                  flexDirection: "row",

                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    minWidth: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="LabelSmall"
                    color={theme.custom.color.neutral.CoolGrey}
                  >
                    First Name
                  </Typography>
                  <TextField
                    type="text"
                    variant="standard"
                    fullWidth
                    slotProps={{
                      input: {
                        disableUnderline: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <User />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: alpha(
                          theme.custom.color.neutral.CoolGrey,
                          0.2
                        ),
                        height: "2.625rem",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="LabelSmall"
                    color={theme.custom.color.neutral.CoolGrey}
                  >
                    Last Name
                  </Typography>
                  <TextField
                    type="text"
                    variant="standard"
                    fullWidth
                    slotProps={{
                      input: {
                        disableUnderline: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <User />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: alpha(
                          theme.custom.color.neutral.CoolGrey,
                          0.2
                        ),
                        height: "2.625rem",
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  minWidth: "fit-content",
                  display: "flex",
                  flexDirection: "row",

                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    minWidth: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="LabelSmall"
                    color={theme.custom.color.neutral.CoolGrey}
                  >
                    Email
                  </Typography>
                  <TextField
                    type="text"
                    variant="standard"
                    fullWidth
                    slotProps={{
                      input: {
                        disableUnderline: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <Mail />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: alpha(
                          theme.custom.color.neutral.CoolGrey,
                          0.2
                        ),
                        height: "2.625rem",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="LabelSmall"
                    color={theme.custom.color.neutral.CoolGrey}
                  >
                    Phone Number
                  </Typography>
                  <TextField
                    type="text"
                    variant="standard"
                    fullWidth
                    slotProps={{
                      input: {
                        disableUnderline: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: alpha(
                          theme.custom.color.neutral.CoolGrey,
                          0.2
                        ),
                        height: "2.625rem",
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <Button
                  sx={{
                    bgcolor: theme.custom.color.primary.Verdigris,
                    height: "2.5rem",
                  }}
                >
                  <Typography
                    variant="LabelMedium"
                    color={theme.custom.color.neutral.White}
                  >
                    Save Changes
                  </Typography>
                </Button>
              </Box>
            </Card>
            {/* Account | Profile | Right | Security Settings */}
            <Card
              sx={{
                height: "36rem",
                display: "flex",
                flexDirection: "column",
                p: 3,
                gap: 2,
              }}
            >
              <Typography variant="LabelLarge">Password Changes</Typography>
              {/* Password Change Form */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  minWidth: "fit-content",
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
                              {showPassword ? (
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
                  {/* Password Strength Indicator */}
                  <PasswordStrengthIndicator password={password} />
                </Box>

                <Box>
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
                          color: "#4caf50",
                          fontWeight: "bold",
                        }}
                      >
                        ✓ Password berhasil dikonfirmasi
                      </Typography>
                    </Box>
                  )}
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Button
                    sx={{
                      bgcolor: theme.custom.color.primary.Verdigris,
                      height: "2.5rem",
                    }}
                    disabled={!passwordsMatch || password.length < 8}
                  >
                    <Typography
                      variant="LabelMedium"
                      color={theme.custom.color.neutral.White}
                    >
                      Update Password
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BodyAccountSection;
