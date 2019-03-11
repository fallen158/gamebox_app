import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./style.css";
import IconLabelTabs from "../IconLabelTabs/";

// 主题颜色更换
import { connect } from "react-redux";
import { setThemeColor } from "../../../../redux/theme.redux";
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabsIndicator: {
    backgroundColor: "#fff"
  }
});

function SimpleTabs(props) {
  const [value, setValue] = useState(0);
  const { classes } = props;
  const lists = [
    { name: "首页", id: 0 },
    { name: "游戏", id: 1 },
    { name: "图书", id: 2 },
    { name: "影视", id: 3 },
    { name: "音乐", id: 4 }
  ];
  function handleChange(event, value) {
    setValue(value);
    console.log(props);
    switch (value) {
      case 1:
        return props.setThemeColor("primary");
      case 2:
        return props.setThemeColor("inherit");
      case 3:
        return props.setThemeColor("secondary");
      case 4:
        return props.setThemeColor("primary");
      default:
        return props.setThemeColor("secondary");
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color={props.color}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.tabsIndicator
          }}
        >
          {lists.map(v => (
            <Tab
              key={v.id}
              label={v.name}
              style={{ fontWeight: 300, fontSize: "18px" }}
            />
          ))}
        </Tabs>
      </AppBar>

      {value === 0 && <IconLabelTabs color={props.color} />}
      {value === 1 && <IconLabelTabs color={props.color} />}
      {value === 2 && <IconLabelTabs color={props.color} />}
      {value === 3 && <IconLabelTabs color={props.color} />}
      {value === 4 && <IconLabelTabs color={props.color} />}
    </div>
  );
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    null,
    { setThemeColor }
  )(SimpleTabs)
);
