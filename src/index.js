import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import GameCenter from "./containers/GameCenter";
import Introduction from "./containers/Introduction";
import GamePay from "./containers/GamePay";
import "normalize.css";
import { Provider } from "react-redux";
import { store } from "./redux/reducer";
import "./style.css";

//定制主题颜色
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import pink from "@material-ui/core/colors/pink";
const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    inherit: pink
  },
  typography: { useNextVariants: true }
});


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/gamecenter" component={GameCenter} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/pay" component={GamePay} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
