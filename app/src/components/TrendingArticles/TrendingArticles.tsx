import image1 from "../../shared/assets/image-retro-pcs.jpg";
import image2 from "../../shared/assets/image-top-laptops.jpg";
import image3 from "../../shared/assets/image-gaming-growth.jpg";
import Text from "../../shared/constants/Text";
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";

const TrendingArticles = () => {
  const theme = useTheme();
  const trending = [
    {
      img: image1,
      num: Text.TrendingArticlesFirstNumber,
      title: Text.TrendingArticlesFirstTitle,
      desc: Text.TrendingArticlesFirstDescription,
    },
    {
      img: image2,
      num: Text.TrendingArticlesSecondNumber,
      title: Text.TrendingArticlesSecondTitle,
      desc: Text.TrendingArticlesSecondDescription,
    },
    {
      img: image3,
      num: Text.TrendingArticlesThirdNumber,
      title: Text.TrendingArticlesThirdTitle,
      desc: Text.TrendingArticlesThirdDescription,
    },
  ];

  const renderTrending = () => {
    return trending.map((val, key) => {
      return (
        <Box
          key={key}
          sx={{
            display: "flex",
            width: "30%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              mb: 4,
              "&:last-child": {
                mb: 0,
              },
            },
          }}
        >
          <Box>
            <img src={val.img} alt={"graphic"} />{" "}
          </Box>
          <Box
            sx={{
              p: 4,
              width: "100%",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                p: 2,
              },
            }}
          >
            <Typography
              sx={{ fontWeight: 600, mb: 2 }}
              variant="h4"
              color="neutral.main"
            >
              {val.num}{" "}
            </Typography>
            <Link
              underline={"none"}
              href="#"
              sx={{
                fontWeight: 700,
                mb: 1,
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.standard,
                }),
                "&:hover": {
                  color: "primary.main",
                },
              }}
              variant="h6"
              color="neutral.darker"
            >
              {" "}
              {val.title}{" "}
            </Link>
            <Typography color="neutral.dark" variant="body1">
              {" "}
              {val.desc}{" "}
            </Typography>
          </Box>
        </Box>
      );
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {renderTrending()}
    </Box>
  );
};

export default TrendingArticles;