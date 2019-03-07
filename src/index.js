import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import GameCenter from "./containers/GameCenter";
import Introduction from './containers/Introduction'
import "normalize.css";
import { Provider } from "react-redux";
import { store } from "./redux/reducer";
import './style.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/gamecenter" component={GameCenter} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
