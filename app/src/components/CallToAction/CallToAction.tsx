import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import imageDesktop from "../../shared/assets/image-web-3-desktop.jpg";
import imageMobile from "../../shared/assets/image-web-3-mobile.jpg";
import Text from "../../shared/constants/Text";

const CallToAction = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{[theme.breakpoints.down("lg")]: {
    textAlign:"center"
    }, [theme.breakpoints.down("sm")]: {
      textAlign:"left"
      }}}>
      <Box gridColumn="span 12">
        {matches ? (
          <img className="img" alt="graphic" src={imageMobile} />
        ) : (
          <img className="img" alt="graphic" src={imageDesktop} />
        )}
      </Box>
      <Box sx={{display:"flex", [theme.breakpoints.down("lg")]: {
            flexDirection:"column"
          }}}>
      <Box sx={{ py: 2, [theme.breakpoints.down("sm")]: {
            p: 0,pt:2
          } }} >
        <Typography color="neutral.darker"  sx={{ fontWeight: "700" }} variant="h2">
          {Text.CallToActionHeading}
        </Typography>
      </Box>

      <Box sx={{ py: 2, px: 4, [theme.breakpoints.down("lg")]: {
            p: 0,py:2
          } , [theme.breakpoints.down("sm")]: {
            p: 0,
          }}}>
        <Typography color="neutral.dark" variant="body1">{Text.CallToActionDescription} </Typography>
        <Button
          size="large"
          disableElevation
          color="primary"
          sx={{
            letterSpacing: "3px",
            mt: 4,
            borderRadius: 0,
            fontWeight: "600", 
          }}
          variant="contained"
        >
          {Text.CallToActionBtn}
        </Button>
      </Box>
      </Box>
    </Box>
  );
};

export default CallToAction;
