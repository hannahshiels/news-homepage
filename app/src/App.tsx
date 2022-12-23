import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewSection from "./components/NewSection/NewSection";
import TrendingArticles from "./components/TrendingArticles/TrendingArticles";

const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const cols = matches ? "span 12" : "span 9"
  const colsNewSection = matches ? "span 12" : "span 3"

  return (
    <>
      <Box
        sx={{
          background: theme.palette.neutral.neutral,
          mx: 8,
          my: 6,
          [theme.breakpoints.down("sm")]: {
            mx: 2,
            my: 3,
          },
        }}
      >
        <Stack sx={{mb:8}} spacing={4}>
        <Header />
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn={cols}>
            <CallToAction />
          </Box>
          <Box sx={{[theme.breakpoints.down("sm")]: {
            mt: 4,
          }}} gridColumn={colsNewSection}>
            <NewSection />
          </Box>
        </Box>
        <TrendingArticles/>
        <Footer />
        </Stack>
      </Box>
    </>
  );
};

export default App;
