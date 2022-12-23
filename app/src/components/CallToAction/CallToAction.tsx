import { Box, Button, Typography } from "@mui/material";
import imageDesktop from "../../shared/assets/image-web-3-desktop.jpg";
import imageMobile from "../../shared/assets/image-web-3-mobile.jpg";
import Text from "../../shared/constants/Text";

const CallToAction = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 12">
        <img className="img" alt="graphic" src={imageDesktop} />
      </Box>
      <Box gridColumn="span 6">
        <Typography> { Text.CallToActionHeading } </Typography>
      </Box>
      <Box gridColumn="span 6">
      <Typography> { Text.CallToActionDescription } </Typography>
      <Button> { Text.CallToActionBtn } </Button>
      </Box>
    </Box>
  );
};

export default CallToAction;
