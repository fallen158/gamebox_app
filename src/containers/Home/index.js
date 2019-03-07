import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import SlidebarMenu from '../../components/SidebarMenu';
import RevealMenu from '../../components/RevealMenu';
import Swiper from '../../components/Swiper';
import TitleMenu from '../../components/TitleMenu';
import ImagesMenu from '../../components/ImagesMenu';
import SuspendedBall from '../../components/SuspendedBall';
import TabConttainer from '../../components/TabContainer';

function index() {
  return (
    <>
      <NavigationMenu />
      <TabConttainer />
      <SlidebarMenu />
      <Swiper />
      <RevealMenu />
      <TitleMenu title="New and Trending" artibules="h6" />
      <ImagesMenu />
      <SuspendedBall />
    </>
  );
}

export default index;
