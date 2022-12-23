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

type Color = "neutral.dark" | "neutral.darker";

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
        <Link href="#" color={color} underline={"none"} sx={{px: 2,  transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),"&:hover": {
          color: "secondary.main"
        } }} key={index}>
          {link}
        </Link>
      );
    });
  };

  const renderMenuMobile = () => {
    return (
      <React.Fragment>
        <IconButton aria-label="open menu" onClick={handleDrawerOpen}>
          <MenuIcon fontSize="large" sx={{ color: "neutral.darker" }} />
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
              <CloseIcon fontSize="large" sx={{ color: "neutral.darker" }} />
            </IconButton>
            <Stack sx={{ mt: 6, pr: 10 }} spacing={2}>
              {renderLinks("neutral.darker")}
            </Stack>
          </Box>
        </Drawer>
      </React.Fragment>
    );
  };

  return (
    <Box
      sx={{
        flexGrow: 1
      }}
    >
      <AppBar elevation={0} color="transparent" position="static"  >
        <Toolbar sx={{p:0, [theme.breakpoints.up("sm")]: {
            p: 0,
          },}} >
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" />
          </Box>
          {matches ? renderMenuMobile() : <> {renderLinks("neutral.dark")} </>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
