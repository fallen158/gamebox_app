import React from "react";
import NavigationMenu from "../../components/NavigationMenu";
import SlidebarMenu from "../../components/SidebarMenu";
import Swiper from "../../components/Swiper";
import SuspendedBall from "../../components/SuspendedBall";
import TabConttainer from "../../components/TabContainer";
import ImagesMenu from "../../components/ImagesMenu";
import ADVertising from  '../../components/ADVertising';
// import RevealMenu from '../../components/RevealMenu';


function index() {
  return (
    <>
      <NavigationMenu color="secondary" />
      <TabConttainer color="secondary" />
      <SlidebarMenu />
      <Swiper />
      <ImagesMenu title=" New & updated games" />
      <ADVertising/>
      <ImagesMenu title="个性化推荐" />
      <SuspendedBall />
    </>
  );
}

export default index;
