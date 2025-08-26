import { alpha, Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  List,
  ShoppingCart,
} from "lucide-react";
import Cc01 from "../../../assets/img/productList/cc01.jpg";
import Cc02 from "../../../assets/img/productList/cc02.jpg";
import Cc03 from "../../../assets/img/productList/cc03.jpg";
import Cc04 from "../../../assets/img/productList/cc04.jpg";
import Cc05 from "../../../assets/img/productList/cc05.jpg";
import fb01 from "../../../assets/img/productList/fabricChair.png";
import fb02 from "../../../assets/img/productList/fabricChair02.png";
import fb03 from "../../../assets/img/productList/fabricChair03.png";
import fb04 from "../../../assets/img/productList/fabricChair04.png";
import fb05 from "../../../assets/img/productList/fabricChair05.png";
import fb06 from "../../../assets/img/productList/fabricChair06.png";
import fb07 from "../../../assets/img/productList/fabricChair07.png";
import fb08 from "../../../assets/img/productList/fabricChair08.png";
import ButtonHeroSection from "../../common/ButtonHeroSection";

const BodyProductListSection = () => {
  const productCcList = [
    {
      name: "Product List Card 01",
      src: Cc01,
      alt: "Product List Card 01",
    },
    {
      name: "Product List Card 02",
      src: Cc02,
      alt: "Product List Card 02",
    },
    {
      name: "Product List Card 03",
      src: Cc03,
      alt: "Product List Card 03",
    },
    {
      name: "Product List Card 04",
      src: Cc04,
      alt: "Product List Card 04",
    },
    {
      name: "Product List Card 05",
      src: Cc05,
      alt: "Product List Card 05",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Yellow Fabric Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb01,
    },
    {
      id: 2,
      name: "White Fabric Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb02,
    },
    {
      id: 3,
      name: "Marmer Table Italy",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb03,
    },
    {
      id: 4,
      name: "Marmer Table France",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb04,
    },
    {
      id: 5,
      name: "Green Fabric Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb05,
    },
    {
      id: 6,
      name: "Wood Table",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb06,
    },
    {
      id: 7,
      name: "Corner Yellow Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb07,
    },
    {
      id: 8,
      name: "White Relax Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb08,
    },
    {
      id: 9,
      name: "Corner Yellow Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb07,
    },
    {
      id: 10,
      name: "White Relax Chair",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb08,
    },
    {
      id: 11,
      name: "Marmer Table Italy",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb03,
    },
    {
      id: 12,
      name: "Marmer Table France",
      price: "$105.00",
      afterDiscount: "$95.00",
      image: fb04,
    },
  ];

  const theme = useTheme();

  return (
    <>
      {/* Shop Section */}
      <Box
        sx={{
          width: "68rem",
          height: "120rem",
          mx: "auto",
          mt: "5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Shop Section | shop */}
        <Box
          sx={{
            width: "auto",
            height: "2.75rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mx: 2,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Shop
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="LabelLarge"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Home
            </Typography>
            <ChevronRight
              color={theme.custom.color.neutral.CoolGrey}
              size={40}
            />
            <Typography
              variant="LabelLarge"
              color={theme.custom.color.neutral.CoolGrey}
            >
              Shop
            </Typography>
          </Box>
        </Box>
        {/* Shop Section | shop cards*/}
        <Box
          sx={{
            width: "auto",
            height: "14rem",
            mt: "2rem",
            gap: 1,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(13rem, 1fr))",
          }}
        >
          {productCcList.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "13rem",
                height: "14rem",
                position: "relative",
              }}
            >
              <Box component="img" src={item.src} alt={item.alt} />
              <Typography
                variant="LabelLarge"
                color={theme.custom.color.neutral.White}
                sx={{
                  position: "absolute",
                  zIndex: "10",
                  ml: "-8rem",
                  mt: "5rem",
                }}
              >
                CLOTHS
              </Typography>
              <Typography
                variant="LabelLarge"
                color={theme.custom.color.neutral.White}
                sx={{
                  position: "absolute",
                  zIndex: "10",
                  ml: "-7.6rem",
                  mt: "7rem",
                }}
              >
                5 Items
              </Typography>
            </Box>
          ))}
        </Box>
        {/* Shop Section | filter row*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: "3rem",
            mx: "auto",
            width: "66rem",
            height: "6.125rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="LabelMedium"
            color={theme.custom.color.neutral.CoolGrey}
          >
            Showing all 12 results
          </Typography>
          {/* Shop Section | filter row | views:*/}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.neutral.CoolGrey}
            >
              Views:
            </Typography>
            <IconButton>
              <LayoutGrid
                color={theme.custom.color.neutral.SpaceCadet}
                size={30}
              />
            </IconButton>
            <IconButton>
              <List color={theme.custom.color.neutral.SpaceCadet} size={30} />
            </IconButton>
          </Box>
          {/* Shop Section | filter row | sort*/}
          <Box
            sx={{
              width: "auto",
              height: "auto",
              display: "flex",
              flexDirection: "row",
              gap: 3,
            }}
          >
            <ButtonHeroSection
              sizeVariant="medium"
              customColor={alpha(theme.custom.color.neutral.VeryLightGray, 0.4)}
              customBorderRadius="1"
              noBorder
            >
              <Typography
                color={theme.custom.color.neutral.SpaceCadet}
                variant="BodyLarge"
              >
                Popularity
              </Typography>
              <ChevronDown color={theme.custom.color.neutral.SpaceCadet} />
            </ButtonHeroSection>
            <ButtonHeroSection
              sizeVariant="small"
              customColor={theme.custom.color.primary.Verdigris}
              customBorderRadius="1"
              noBorder
            >
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.White}
              >
                Filter
              </Typography>
            </ButtonHeroSection>
          </Box>
        </Box>
        {/* Product List  | product list*/}
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
                    <ShoppingCart
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
        {/* Product List  | Button load more*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mx: "auto",
            mt: "2rem",
          }}
        >
          <ButtonHeroSection
            sizeVariant="extraLarge"
            customBorderRadius="10px"
            noBorder
            enableShadow
          >
            <Typography
              variant="LabelMedium"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Muat Lebih Banyak
            </Typography>
          </ButtonHeroSection>
        </Box>
        {/* Product List  | Client */}
      </Box>
    </>
  );
};

export default BodyProductListSection;
