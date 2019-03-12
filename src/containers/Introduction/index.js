import React, { Component } from "react";
import AppBarMenu from "../../components/AppBarMenu";
import GameWrapper from "./components/GameWrapper";
import GameRecommendCards from "../../components/GameRecommendCards";
import axios from "axios";
import { connect } from "react-redux";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }
  componentWillMount() {
    axios.get("./data/gamelist.json").then(res => {
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
        <AppBarMenu title={null} color={this.props.color} />
        <GameWrapper />
        <GameRecommendCards lists={this.state.lists} theme={this.props.color} />
      </div>
    );
  }
}

export default connect(
  state => state.themeRedux,
  {}
)(index);
