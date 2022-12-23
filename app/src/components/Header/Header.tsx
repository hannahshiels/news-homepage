import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../shared/assets/logo.svg";
import Text from "../../shared/constants/Text";
import { useTheme } from "@mui/material/styles";
import { Drawer, Link, Stack, useMediaQuery } from "@mui/material";
type Color = "GrayText" | "grey.900";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const links = [
    Text.HeaderHome,
    Text.HeaderNew,
    Text.HeaderPopular,
    Text.HeaderTrending,
    Text.HeaderCategories,
  ];

  const renderLinks = (color: Color) => {
    return links.map((link, index) => {
      return (
        <Link color={color} underline={"none"} sx={{ cursor: "pointer", px: 2 }} key={index}>
          {link}
        </Link>
      );
    });
  };

  const renderMenuMobile = () => {
    return (
      <React.Fragment>
        <IconButton aria-label="open menu" onClick={handleDrawerOpen}>
          <MenuIcon fontSize="large" sx={{ color: "grey.900" }} />
        </IconButton>
        <Drawer
          elevation={0}
          anchor={"right"}
          open={open}
          onClose={handleDrawerClose}
        >
          <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <IconButton
              sx={{ ml: "auto" }}
              aria-label="close menu"
              onClick={handleDrawerClose}
            >
              <CloseIcon fontSize="large" sx={{ color: "grey.900" }} />
            </IconButton>
            <Stack sx={{ mt: 6, pr: 10 }} spacing={2}>
              {renderLinks("grey.900")}
            </Stack>
          </Box>
        </Drawer>
      </React.Fragment>
    );
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        mx: 8,
        my: 6,
        [theme.breakpoints.down("sm")]: {
          mx: 4,
          my: 3,
        },
      }}
    >
      <AppBar elevation={0} color="transparent" position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" />
          </Box>
          {matches ? renderMenuMobile() : <> {renderLinks("GrayText")} </>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
