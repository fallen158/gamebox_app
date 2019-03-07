import React, { Component } from "react";
import AppBarMenu from "../../components/AppBarMenu";
import GameWrapper from "./components/GameWrapper";

class index extends Component {
  render() {
    return (
      <div style={{ background: "white" }}>
        <AppBarMenu title={null} color="defalut" />
        <GameWrapper />
      </div>
    );
  }
}

export default index;
