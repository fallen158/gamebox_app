import React from "react";
import NavigationMenu from "../../components/NavigationMenu";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

function Icon(props) {
  return (
    <IconButton color="inherit" aria-label="Menu">
      <MenuIcon />
    </IconButton>
  );
}

function index() {
  return (
    <>
      <NavigationMenu title={null} icon={Icon} color={"default"} />
    </>
  );
}

export default index;
