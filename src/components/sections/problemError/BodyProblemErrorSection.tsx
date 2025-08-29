import { Box, Typography, useTheme } from "@mui/material";
import pbImg from "../../../assets/img/ProblemError/img.svg";

const BodyProblemErrorSection = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "65.625rem",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          mt: "5rem",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        <Typography
          variant="LabelMedium"
          color={theme.custom.color.primary.Verdigris}
        >
          Designing Better Experience
        </Typography>
        <Typography
          variant="heroTitle"
          textAlign="center"
          color={theme.custom.color.neutral.SpaceCadet}
        >
          Problems trying to resolve the conflict between
        </Typography>
        <Typography
          variant="LabelMedium"
          color={theme.custom.color.neutral.CoolGrey}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>
        <Box
          component="img"
          src={pbImg}
          alt="Problem and Error Illustration"
          sx={{ width: "40.625rem", height: "auto", mb: "2.5rem" }}
        />
      </Box>
    </>
  );
};

export default BodyProblemErrorSection;
