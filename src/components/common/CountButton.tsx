import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MinusIcon from "../../theme/icon/MinusIcon";
import PlusIcon from "../../theme/icon/PlusIcon";
import { useState } from "react";

const CountButton = () => {
  const theme = useTheme();

  const [count, setCount] = useState(1);

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const increment = () => setCount((prev) => prev + 1);

  return (
    <>
      {/* Body Left | Qty | Count  */}
      <Box
        sx={{
          width: "10rem",
          height: "3.25rem",
          display: "inline-flex",
          alignItems: "center",
          border: "2px solid ",
          borderColor: theme.custom.color.neutral.CoolGrey,
          borderRadius: 1,
          justifyContent: "space-between",
          padding: "4px 8px",
          userSelect: "none",
        }}
      >
        <IconButton onClick={decrement}>
          <MinusIcon />
        </IconButton>
        <Typography
          variant="LabelLarge"
          color={theme.custom.color.neutral.SpaceCadet}
        >
          {count}
        </Typography>
        <IconButton onClick={increment}>
          <PlusIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default CountButton;
