import React from "react";
import NavigationMenu from "./components/NavigationMenu";
import SlidebarMenu from "./components/SidebarMenu";
import Swiper from "../../components/Swiper";
import SuspendedBall from "../../components/SuspendedBall";
import TabConttainer from "./components/TabContainer/";
import ImagesMenu from "../../components/ImagesMenu";
import ADVertising from "../../components/ADVertising";
import axios from "axios";

// 状态父组件统一处理
import { connect } from "react-redux";
import { onOpen, onClose } from "../../redux/slideBar.redux";
class index extends React.Component {
  componentWillMount() {
    axios.get("./data/gamelist.json").then(res => {
      console.log(res);
    });
  }
  render() {
    const { onOpen, onClose, slideBarRedux, themeRedux } = this.props;
    return (
      <>
        <NavigationMenu color={themeRedux.color} setOpen={onOpen} />
        <TabConttainer color={themeRedux.color} />
        <SlidebarMenu
          onOpen={onOpen}
          onClose={onClose}
          open={slideBarRedux.open}
        />
        <Swiper />
        <ImagesMenu
          title=" New & updated games"
          color={themeRedux.color}
          theme={themeRedux.color}
        />
        <ADVertising />
        <ImagesMenu
          title="个性化推荐"
          color={themeRedux.color}
          theme={themeRedux.color}
        />
        <SuspendedBall color={themeRedux.color} />
      </>
    );
  }
}

export default connect(
  state => state,
  { onOpen, onClose }
)(index);
