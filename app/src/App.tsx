import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import CallToAction from "./components/CallToAction/CallToAction";
import Header from "./components/Header/Header";

const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const cols = matches ? "span 12" : "span 9"

  return (
    <>
      <Box
        sx={{
          mx: 8,
          my: 6,
          [theme.breakpoints.down("sm")]: {
            mx: 4,
            my: 3,
          },
        }}
      >
        <Stack spacing={4}>
        <Header />
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn={cols}>
            <CallToAction />
          </Box>
        </Box>
        </Stack>
      </Box>
    </>
  );
};

export default App;
