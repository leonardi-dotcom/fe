import { alpha, Box, IconButton, Typography, useTheme } from "@mui/material";
import fabricChair from "../../assets/img/productList/fabricChair.png";
import fabricChair02 from "../../assets/img/productList/fabricChair02.png";
import fabricChair03 from "../../assets/img/productList/fabricChair03.png";
import fabricChair04 from "../../assets/img/productList/fabricChair04.png";
import fabricChair05 from "../../assets/img/productList/fabricChair05.png";
import fabricChair06 from "../../assets/img/productList/fabricChair06.png";
import fabricChair07 from "../../assets/img/productList/fabricChair07.png";
import fabricChair08 from "../../assets/img/productList/fabricChair08.png";
import CartIcon from "../../theme/icon/CartIcon";
import ButtonHeroSection from "../common/ButtonHeroSection";

const ProductSection = () => {
  const theme = useTheme();
  const products = [
    {
      id: 1,
      name: "Yellow Fabric Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fabricChair,
    },
    {
      id: 2,
      name: "White Fabric Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fabricChair02,
    },
    {
      id: 3,
      name: "Marmer Table Italy",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fabricChair03,
    },
    {
      id: 4,
      name: "Marmer Table France",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fabricChair04,
    },
    {
      id: 5,
      name: "Green Fabric Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fabricChair05,
    },
    {
      id: 6,
      name: "Wood Table",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fabricChair06,
    },
    {
      id: 7,
      name: "Corner Yellow Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fabricChair07,
    },
    {
      id: 8,
      name: "White Relax Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fabricChair08,
    },
  ];

  return (
    <>
      {/* Product Section */}
      <Box
        sx={{
          mt: "4rem",
          mx: "auto",
          width: "100%",
          maxWidth: { md: "78rem" }, // Menggunakan maxWidth agar lebih responsif
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Mengubah dari flex-start ke center
          justifyContent: "flex-start",
          gap: { xs: "2rem", md: "4rem" },
          px: { xs: 2, md: 0 },
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            height: "auto",
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: "1rem", md: "0" },
          }}
        >
          {/* Heading section */}
          <Box
            sx={{
              width: { xs: "100%", md: "26.9rem" },
              height: "auto", // Mengubah height dari fixed ke auto
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {/* Frame */}
            <ButtonHeroSection
              sizeVariant="extraLarge"
              noBorder
              customColor={theme.custom.color.neutral.BackgroundLight}
            >
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.secondary.ImperialRed}
              >
                Check our Product
              </Typography>
            </ButtonHeroSection>
            <Typography
              variant="TitleMedium"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Crafted with excellent material
            </Typography>
          </Box>
          {/* Menu section*/}
          <Box
            sx={{
              width: { xs: "100%", md: "25.9rem" },
              height: "auto",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
            }}
          >
            {/* Button Menu section*/}
            <Box
              sx={{
                width: { xs: "auto", md: "6.8rem" },
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ButtonHeroSection
                sizeVariant="medium"
                customColor={theme.custom.color.neutral.White}
              >
                <Typography
                  variant="LabelSmall"
                  color={theme.custom.color.neutral.SpaceCadet}
                >
                  Best Seller
                </Typography>
              </ButtonHeroSection>
            </Box>

            {["Chair", "Table", "Bed", "Closet"].map((item) => (
              <Typography
                key={item}
                variant="LabelSmall"
                color={alpha(theme.custom.color.neutral.SpaceCadet, 0.4)}
                sx={{
                  px: 1.5,
                  py: 0.75,
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Product List  */}
        <Box
          sx={{
            width: "100%",
            mx: "auto",
            height: "auto",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)", // Memperbaiki typo di sini
            },
            gap: { xs: "1.5rem", md: "1.5rem" },
            justifyItems: "center",
          }}
        >
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                width: "100%",
                maxWidth: "18.3rem",
                height: "auto",
                backgroundColor: theme.custom.color.neutral.BackgroundLight,
                padding: "0.5rem",
                borderRadius: "0.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Product List  | Frame01 | Product |Image Product */}
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: "19.4rem",
                  objectFit: "contain",
                  mb: "1rem",
                }}
              />
              {/* Product List  | Frame01 | Product |Label Product */}
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  p: "1rem", // Mengganti p: "0 1rem" untuk konsistensi
                }}
              >
                <Typography
                  variant="LabelMedium"
                  color={theme.custom.color.neutral.SpaceCadet}
                >
                  {product.name}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Harga */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="LabelSmall"
                      color={alpha(theme.custom.color.neutral.SpaceCadet, 0.4)}
                      sx={{ textDecoration: "line-through" }}
                    >
                      {product.price}
                    </Typography>
                    <Typography
                      variant="LabelSmall"
                      color={theme.custom.color.neutral.SpaceCadet}
                    >
                      {product.afterDiscount}
                    </Typography>
                  </Box>

                  {/* Icon Button dengan background bulat */}
                  <IconButton
                    sx={{
                      backgroundColor: alpha(
                        theme.custom.color.neutral.FrenchGrey,
                        0.4
                      ),
                      borderRadius: "50%",
                      width: "2.3rem",
                      height: "2.3rem",
                      "&:hover": {
                        backgroundColor:
                          theme.custom.color.neutral.BackgroundLight,
                      },
                    }}
                  >
                    <CartIcon
                      width={24}
                      height={24}
                      stroke={theme.custom.color.neutral.SpaceCadet}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductSection;
