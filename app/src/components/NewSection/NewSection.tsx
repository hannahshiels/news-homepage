import {
  Box,
  Divider,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Text from "../../shared/constants/Text";

const NewSection = () => {
  const theme = useTheme();
  const articles = [
    {
      heading: Text.NewSectionFirstArticleHeading,
      description: Text.NewSectionFirstArticleDescription,
    },
    {
      heading: Text.NewSectionSecondArticleHeading,
      description: Text.NewSectionSecondArticleDescription,
    },
    {
      heading: Text.NewSectionThirdArticleHeading,
      description: Text.NewSectionThirdArticleDescription,
    },
  ];
  const renderArticles = () => {
    return articles.map((val, key) => {
      return (
        <Box key={key}>
          <Box sx={{py:2}}>
            <Link href="#f" underline="none"
              sx={{ fontWeight: 600, 
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.standard,
                }),
                "&:hover": {
                  color: "secondary.main",
                }, }}
              color="neutral.neutral"
              variant="h6"
            >
              {val.heading}
            </Link>
            <Typography color="neutral.main" variant="body1">
              {val.description}
            </Typography>
          </Box>
        {  articles.length !== key +1 ? <Divider sx={{borderColor:theme.palette.neutral.main}} /> : "" }
        </Box>
      );
    });
  };

  return (
    <Box sx={{ background: theme.palette.primary.dark, p: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "600" }}
        color={theme.palette.secondary.main}
      >
        {Text.NewSectionHeading}
      </Typography>
      <Stack spacing={2} sx={{ mt: 2 }}>{renderArticles()}</Stack>
    </Box>
  );
};

export default NewSection;
