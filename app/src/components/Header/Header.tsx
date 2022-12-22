import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../shared/assets/logo.svg";
import Text from "../../shared/constants/Text";
import { Link } from "@mui/material";

const Header = () => {
  const links = [
    Text.HeaderHome,
    Text.HeaderNew,
    Text.HeaderPopular,
    Text.HeaderTrending,
    Text.HeaderCategories,
  ];

  const renderLinks = () => {
    return links.map((link, index) => {
      return <Link color="GrayText" underline={"none"} sx={{px:2}}  key={index}> {link} </Link>;
    });
  };

  return (
    <Box sx={{ flexGrow: 1, mx:8, my:6 }}>
      <AppBar elevation={0} color="transparent" position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" />
          </Box>
          <> {renderLinks()} </>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
