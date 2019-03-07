import React, { Component } from "react";
import AppBarMenu from "../../components/AppBarMenu";
import GameList from "./components/GameList";
import axios from "axios";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }
  componentWillMount() {
    axios.get("/game/list").then(res => {
      if (res.status === 200) {
        this.setState({
          lists: res.data
        });
      }
    });
  }
  render() {
    const { lists } = this.state;
    return (
      <div style={{ background: "white" }}>
        <AppBarMenu title="个性化推荐"  color="secondary"/>
        <GameList lists={lists} />
      </div>
    );
  }
}

export default index;
