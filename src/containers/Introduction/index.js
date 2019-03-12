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
      lists:[
        {
            "_id": "5c809e5fa617b74390dca2ab",
            "img_url": "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
            "title": "荒野乱斗",
            "people": "545K",
            "__v": 0
        },
        {
            "_id": "5c809e9391f685439e5ae216",
            "img_url": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
            "title": "铁血刺客-中世纪",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8c578050c521915c998",
            "img_url": "http://47.254.31.78/images/game1.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8cc58c6485224de7d49",
            "img_url": "http://47.254.31.78/images/game2.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8ce4d8e47522f422431",
            "img_url": "http://47.254.31.78/images/game3.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8cf36243d5238adcfd7",
            "img_url": "http://47.254.31.78/images/game4.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8d41070fe5244fa17b2",
            "img_url": "http://47.254.31.78/images/game5.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8d6acd2ed524843f168",
            "img_url": "http://47.254.31.78/images/game6.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8d8c270a952534842de",
            "img_url": "http://47.254.31.78/images/game7.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8db299005525744a398",
            "img_url": "http://47.254.31.78/images/game4.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8dcde4d88525b9cd86e",
            "img_url": "http://47.254.31.78/images/game2.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8dd0da5a85266474deb",
            "img_url": "http://47.254.31.78/images/game1.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8e09d2ef2526a92cf21",
            "img_url": "http://47.254.31.78/images/game7.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8e115de525273fdae75",
            "img_url": "http://47.254.31.78/images/game6.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8e2a5783d527f3ae42e",
            "img_url": "http://47.254.31.78/images/game1.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8e4eff77d52836c4b04",
            "img_url": "http://47.254.31.78/images/game6.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8e6ac9b26528757c5d1",
            "img_url": "http://47.254.31.78/images/game5.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8e7dfc1c452939bba7d",
            "img_url": "http://47.254.31.78/images/game3.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8e9ff1c985297fddf57",
            "img_url": "http://47.254.31.78/images/game7.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8eac683e1529bc33004",
            "img_url": "http://47.254.31.78/images/game1.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8ed743f4752a671eb59",
            "img_url": "http://47.254.31.78/images/game4.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        },
        {
            "_id": "5c80d8ef307d6052af958810",
            "img_url": "http://47.254.31.78/images/game2.png",
            "title": "暗夜复仇者3",
            "people": "355K",
            "__v": 0
        }
      ]
    };
  }
  // componentWillMount() {
  //   axios.get("./data/gamelist.json").then(res => {
  //     if (res.status === 200) {
  //       this.setState({
  //         lists: res.data
  //       });
  //     }
  //   });
  // }
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
