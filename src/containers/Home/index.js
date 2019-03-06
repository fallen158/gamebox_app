import React from "react";
import NavigationMenu from "../../components/NavigationMenu";
import SlidebarMenu from "../../components/SidebarMenu";
import RevealMenu from "../../components/RevealMenu";
import Swiper from "../../components/Swiper";
import TitleMenu from "../../components/TitleMenu";
import ImagesMenu from "../../components/ImagesMenu";
import SuspendedBall from "../../components/SuspendedBall";
import { connect } from "react-redux";
import { onOpen } from "../../redux/slideBar.redux";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

function Icon(props) {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={props.onOpen}>
      <MenuIcon />
    </IconButton>
  );
}

function index() {
  return (
    <>
      <NavigationMenu title={"Game Box"} icon={handleIconState}  color={"primary"}/>
      <SlidebarMenu />
      <Swiper />
      <RevealMenu />
      <TitleMenu title="New and Trending" artibules="h6" />
      <ImagesMenu />
      <SuspendedBall />
    </>
  );
}

const handleIconState = connect(
  null,
  { onOpen }
)(Icon);

export default index;
