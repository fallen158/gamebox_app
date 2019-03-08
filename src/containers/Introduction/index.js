import React, { Component } from "react";
import AppBarMenu from "../../components/AppBarMenu";
import GameWrapper from "./components/GameWrapper";
import GameRecommendCards from "../../components/GameRecommendCards";
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
    return (
      <div style={{ background: "white" }}>
        <AppBarMenu title={null} color="secondary" />
        <GameWrapper />
        <GameRecommendCards lists={this.state.lists} />
      </div>
    );
  }
}

export default index;
