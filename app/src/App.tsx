import { Box, useTheme } from "@mui/material";
import CallToAction from "./components/CallToAction/CallToAction";
import Header from "./components/Header/Header";

const App = () => {
  const theme = useTheme();

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
        <Header />
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 6">
            <CallToAction />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
