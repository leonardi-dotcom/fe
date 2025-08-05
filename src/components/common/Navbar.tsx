import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const HamburgerIcon = theme.custom.icons.hamburgerIcon;
  const SearchIcon = theme.custom.icons.searchIcon;
  const CartIcon = theme.custom.icons.cartIcon;
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%", //"90rem"
          height: "5.1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: "1rem", md: "2.5rem" }, // "2.5rem"
          mx: "auto",
          borderBottom: `1px solid ${theme.custom.color.neutral.FrenchGrey}`,
        }}
      >
        {/* Logo */}
        <Typography
          variant="logo"
          sx={{
            fontFamily: theme.typography.logo.fontFamily,
            color: theme.custom.color.neutral.SpaceCadet,
          }}
        >
          Cozy®
        </Typography>

        {/* List Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "2.6rem",
          }}
        >
          {["Shop", "Collective", "Designers", "About Us", "Contact"].map(
            (item) => (
              <Typography
                key={item}
                variant="LabelSmall"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                {item}
              </Typography>
            )
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Icon Hamburger */}
          <IconButton>
            <HamburgerIcon
              width={24}
              height={24}
              stroke={theme.custom.color.neutral.SpaceCadet}
            />
          </IconButton>

          {/* Search Icon */}
          <IconButton>
            <SearchIcon
              width={24}
              height={24}
              stroke={theme.custom.color.neutral.SpaceCadet}
            />
          </IconButton>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: "2rem", // atau sesuai tinggi ikon
              backgroundColor: theme.custom.color.neutral.FrenchGrey,
            }}
          />

          {/* Cart Icon */}
          <IconButton>
            <CartIcon
              width={24}
              height={24}
              stroke={theme.custom.color.neutral.SpaceCadet}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
