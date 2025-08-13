import { useTheme, Box, Typography, alpha, IconButton } from "@mui/material";
import LeftCursorIcon from "../../../theme/icon/LeftCursorIcon";
import { useState } from "react";
import MinusIcon from "../../../theme/icon/MinusIcon";
import PlusIcon from "../../../theme/icon/PlusIcon";
import ButtonHeroSection from "../../common/ButtonHeroSection";
import NormalStarFourIcon from "../../../theme/icon/NormalStarFourIcon";
import GreenHeartIcon from "../../../theme/icon/GreenHeartIcon";
import FbIcon from "../../../theme/icon/socialIcon/FbIcon";
import TwitIcon from "../../../theme/icon/socialIcon/TwitIcon";
import PintIcon from "../../../theme/icon/socialIcon/PintIcon";
import IgIcon from "../../../theme/icon/socialIcon/IgIcon";
import Chair01 from "../../../assets/img/Product/chair01.png";
import Chair02 from "../../../assets/img/Product/chair02.png";
import Chair03 from "../../../assets/img/Product/chair03.png";
import Chair04 from "../../../assets/img/Product/chair04.png";
import Chair05 from "../../../assets/img/Product/chair05.png";
import YChair01 from "../../../assets/img/Product/ychair01.png";
import YChair02 from "../../../assets/img/Product/ychair02.png";
import YChair03 from "../../../assets/img/Product/ychair03.png";
import YChair04 from "../../../assets/img/Product/ychair04.png";
import YChair05 from "../../../assets/img/Product/ychair05.png";
import ChevronLeftIcon from "../../../theme/icon/ChevronLeftIcon";
import ChevronRightIcon from "../../../theme/icon/ChevronRightIcon";
import Img01 from "../../../assets/img/Product/img1.png";
import Img02 from "../../../assets/img/Product/img2.png";
import Img03 from "../../../assets/img/Product/img3.png";
import Img04 from "../../../assets/img/Product/img4.png";
import Img05 from "../../../assets/img/Product/img5.png";

const BodyProductSection = () => {
  const theme = useTheme();
  const colors = [
    {
      name: "green",
      value: "#58737D",
    },
    {
      name: "yellow",
      value: "#FFC41F",
    },
    {
      name: "lightBLack",
      value: "#545454",
    },
    {
      name: "lightPink",
      value: "#CBA5A5",
    },
  ];

  const productGallery: Record<
    string,
    { src: string; alt: string; imgGalery: string }[]
  > = {
    green: [
      {
        src: Chair01,
        alt: "Alt img product 01",
        imgGalery: Img01,
      },
      {
        src: Chair02,
        alt: "Alt img product 02",
        imgGalery: Img02,
      },
      {
        src: Chair03,
        alt: "Alt img product 03",
        imgGalery: Img03,
      },
      {
        src: Chair04,
        alt: "Alt img product 04",
        imgGalery: Img04,
      },
      {
        src: Chair05,
        alt: "Alt img product 05",
        imgGalery: Img05,
      },
    ],
    yellow: [
      {
        src: YChair01,
        alt: "Alt img product 01",
        imgGalery: Img01,
      },
      {
        src: YChair02,
        alt: "Alt img product 02",
        imgGalery: Img02,
      },
      {
        src: YChair03,
        alt: "Alt img product 03",
        imgGalery: Img03,
      },
      {
        src: YChair04,
        alt: "Alt img product 04",
        imgGalery: Img04,
      },
      {
        src: YChair05,
        alt: "Alt img product 05",
        imgGalery: Img05,
      },
    ],
    lightBLack: [
      {
        src: Chair01,
        alt: "Alt img product 01",
        imgGalery: Img01,
      },
      {
        src: Chair02,
        alt: "Alt img product 02",
        imgGalery: Img02,
      },
      {
        src: Chair03,
        alt: "Alt img product 03",
        imgGalery: Img03,
      },
      {
        src: Chair04,
        alt: "Alt img product 04",
        imgGalery: Img04,
      },
      {
        src: Chair05,
        alt: "Alt img product 05",
        imgGalery: Img05,
      },
    ],
    lightPink: [
      {
        src: YChair01,
        alt: "Alt img product 01",
        imgGalery: Img01,
      },
      {
        src: YChair02,
        alt: "Alt img product 02",
        imgGalery: Img02,
      },
      {
        src: YChair03,
        alt: "Alt img product 03",
        imgGalery: Img03,
      },
      {
        src: YChair04,
        alt: "Alt img product 04",
        imgGalery: Img04,
      },
      {
        src: YChair05,
        alt: "Alt img product 05",
        imgGalery: Img05,
      },
    ],
  };

  const [selectedColor, setSelectedColor] =
    useState<keyof typeof productGallery>("green");
  const [count, setCount] = useState(1);

  const currentGallery = productGallery[selectedColor] || [];

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const increment = () => setCount((prev) => prev + 1);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentGallery.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === currentGallery.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Box
        sx={{
          width: "90rem",
          height: "56.25rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mx: "auto",
          mt: "3rem",
        }}
      >
        {/* Body Left */}
        <Box
          sx={{
            width: "31rem",
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LeftCursorIcon />
          {/* Body Left | Bread cumbs*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "1rem",
              mt: "2rem",
              gap: "1rem",
            }}
          >
            <Typography
              variant="LabelSmall"
              color={alpha(theme.custom.color.neutral.SpaceCadet, 0.4)}
            >
              Chair
            </Typography>

            <Typography
              variant="LabelSmall"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              /
            </Typography>

            <Typography
              variant="LabelSmall"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Meryl Lounge Chair
            </Typography>
          </Box>
          {/* Body Left | Named product & Rate */}
          <Box
            sx={{
              height: "auto",
              display: "flex",
              flexDirection: "column",
              mt: "6rem",
              gap: "2rem",
            }}
          >
            <Typography
              variant="h1"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              Meryl Lounge Chair
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="TitleMedium"
                color={theme.custom.color.neutral.SpaceCadet}
              >
                $149.99
              </Typography>
              {/* Body Left | Named product & Rate | Ratings */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <NormalStarFourIcon />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.25rem",
                  }}
                >
                  <Typography
                    variant="BodyLarge"
                    color={theme.custom.color.neutral.SpaceCadet}
                  >
                    4.6 / 5.0
                  </Typography>
                  <Typography
                    variant="BodyLarge"
                    color={alpha(theme.custom.color.neutral.SpaceCadet, 0.4)}
                  >
                    (556)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Body Left | Named product Desc  */}
          <Box
            sx={{
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              mt: "4rem",
            }}
          >
            <Typography
              variant="BodyLarge"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              The gently curved lines accentuated by sewn details are kind to
              your body and pleasant to look at. Also, there’s a tilt and
              height-adjusting mechanism that’s built to outlast years of ups
              and downs.
            </Typography>
          </Box>
          {/* Body Left | Color Picked */}
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              mt: "1rem",
            }}
          >
            {colors.map((color) => {
              const isSelected = selectedColor === color.name;
              return (
                <Box
                  key={color.name}
                  onClick={() =>
                    setSelectedColor(color.name as keyof typeof productGallery)
                  }
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&::before": isSelected
                      ? {
                          content: '""',
                          position: "absolute",
                          width: 28,
                          height: 28,
                          borderRadius: "50%", // ellipse/bulat
                          bgcolor: "#ccc", // grey highlight
                          top: 0,
                          left: 0,
                          zIndex: 0,
                        }
                      : {},
                  }}
                >
                  {/* Lingkaran warna */}
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      bgcolor: color.value,
                      zIndex: 1,
                      boxShadow: isSelected
                        ? alpha(theme.custom.color.neutral.CoolGrey, 0.2)
                        : "none",
                    }}
                  />
                </Box>
              );
            })}
          </Box>
          {/* Body Left | Qty */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: "3rem",
              gap: "1rem",
            }}
          >
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
            {/* Body Left | Qty | Btn add to cart */}
            <ButtonHeroSection
              customColor={theme.custom.color.primary.Verdigris}
              noBorder
              customBorderRadius="1"
              sizeVariant="normal"
              enableShadow
            >
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.neutral.White}
              >
                Add to cart
              </Typography>
            </ButtonHeroSection>
          </Box>
          {/* Body Left | Free shiping */}
          <Typography
            variant="BodyLarge"
            color={theme.custom.color.neutral.SpaceCadet}
            sx={{
              mt: "3rem",
            }}
          >
            Free 3-5 day shipping • Tool-free assembly • 30-day trial
          </Typography>
          {/* Body Left | Wishlist | button wishlist*/}
          <Box
            sx={{
              width: "31rem",
              height: "1.5rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: "8rem",
            }}
          >
            <IconButton
              sx={{
                gap: "0.5rem",
              }}
            >
              <GreenHeartIcon />
              <Typography
                variant="LabelMedium"
                color={theme.custom.color.primary.Verdigris}
              >
                Add to Wishlist
              </Typography>
            </IconButton>
            {/* Body Left | Wishlist | button wishlist | social Icons*/}
            <Box display="flex" flexDirection="row" gap="1rem">
              <FbIcon />
              <TwitIcon />
              <PintIcon />
              <IgIcon />
            </Box>
          </Box>
        </Box>
        {/* Body Right */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "52.75rem",
            height: "auto",
          }}
        >
          {/* Body Right | Preview*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "flex-end",
              alignItems: "baseline",
              height: "8rem",
            }}
          >
            <Typography
              variant="h2"
              color={theme.custom.color.neutral.SpaceCadet}
            >
              {String(currentIndex + 1).padStart(2, "0")}
            </Typography>
            <Typography
              variant="TitleMedium"
              color={theme.custom.color.neutral.CoolGrey}
            >
              / {String(currentGallery.length).padStart(2, "0")}
            </Typography>
          </Box>
          {/* Body Right | Img*/}
          <Box
            sx={{
              width: "52.75rem",
              height: "29.35rem",
              objectFit: "contain",
            }}
          >
            <Box
              component="img"
              src={currentGallery[currentIndex].src}
              alt={currentGallery[currentIndex].alt}
              sx={{
                width: "52.75rem",
                height: "auto",
                mt: "-2rem",
              }}
            />
          </Box>

          {/* Body Right | Arrows */}
          <Box
            sx={{
              width: "9rem",
              height: "1.5rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              position: "absolute",
              ml: "46rem",
              mt: "4rem",
            }}
          >
            <IconButton onClick={handlePrev}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
          {/* Body Right | Product Thumbnail */}
          <Box
            sx={{
              width: "38.5rem",
              height: "6.5rem",
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              mt: "7rem",
              ml: "10rem",
              overflow: "hidden",
            }}
          >
            {/* Body Right | Product Thumbnail | Product01 */}
            {currentGallery.map((item, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: "6.5rem",
                  height: "6.5rem",
                  border:
                    index === currentIndex
                      ? `2px solid ${theme.custom.color.primary.Verdigris}`
                      : `1px solid ${theme.custom.color.neutral.CoolGrey}`,
                  boxShadow: `0 0 2px ${theme.custom.color.neutral.CoolGrey}`,
                  gap: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton>
                  <Box component="img" src={item.imgGalery} alt={item.alt} />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BodyProductSection;
