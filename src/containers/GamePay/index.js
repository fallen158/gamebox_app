import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBackIos, Home } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";
import {withRouter} from 'react-router-dom'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  componentWillMount() {
    try {
      var body = {
        methodName: "GoogleAds",
        adType: "2"
      };
      window.webkit.messageHandlers.OtherOperation.postMessage(body);
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    try {
      var body = {
        methodName: "GoogleAds",
        adType: "0"
      };
      window.webkit.messageHandlers.OtherOperation.postMessage(body);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="gamePay_container">
        <object
          data="https://play.quickgame.top/fruit-master/index.html"
          type="text/html"
          style={{ height: "90%", width: "100%" }}
          aria-label="https://play.quickgame.top/fruit-master/index.html"
        />
        <div className="gamePay_menu">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() =>
              this.setState({
                open: !this.state.open
              })
            }
          >
            <MenuIcon />
          </IconButton>
        </div>

        {this.state.open ? (
          <div className="setting">
            <div className="setting-back">
              <IconButton color="inherit" aria-label="Open drawer" onClick={()=>this.props.history.goBack()}>
                <ArrowBackIos />
              </IconButton>
              <div className="setting-text">Back</div>
            </div>
            <div className="setting-home">
              <IconButton color="inherit" aria-label="Open drawer" onClick={()=>this.props.history.push('/')}>
                <Home />
              </IconButton>
              <div className="setting-text">Home</div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(index);
