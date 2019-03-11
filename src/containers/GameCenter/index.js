import React, { Component } from "react";
import AppBarMenu from "../../components/AppBarMenu";
import GameList from "./components/GameList";
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
        <AppBarMenu title="个性化推荐" color={this.props.color} />
        <GameList lists={lists} theme={this.props.color} />
      </div>
    );
  }
}

export default connect(
  state => state.themeRedux,
  {}
)(index);
