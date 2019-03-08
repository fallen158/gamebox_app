import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./style.css";
import IconLabelTabs from "../IconLabelTabs/";

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
    backgroundColor: '#fff',
  },
});

function SimpleTabs(props) {
  const [value, setValue] = useState(0);
  const { classes } = props;
  function handleChange(event, value) {
    setValue(value);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color={props.color}>
        <Tabs
          centered
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab label="首页" style={{ fontSize: "18px" }} />
          <Tab label="游戏" style={{ fontSize: "18px" }} />
          <Tab label="图书" style={{ fontSize: "18px" }} />
          <Tab label="影视" style={{ fontSize: "18px" } } />
          <Tab label="音乐" style={{ fontSize: "18px" }} />
        </Tabs>
      </AppBar>
      {value === 0 && <IconLabelTabs />}
      {value === 1 && <IconLabelTabs />}
      {value === 2 && <IconLabelTabs />}
      {value === 3 && <IconLabelTabs />}
      {value === 4 && <IconLabelTabs />}
    </div>
  );
}

// class SimpleTabs extends React.Component {
//   state = {
//     value: 0
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   render() {
//     const { classes } = this.props;
//     const { value } = this.state;

//     return (
//       <div className={classes.root}>
//         <AppBar position="static" color={props.color}>
//           <Tabs
//             centered
//             indicatorColor="secondary"
//             value={value}
//             onChange={this.handleChange}
//           >
//             <Tab label="首页" style={{fontSize:'18px'}}/>
//             <Tab label="游戏" style={{fontSize:'18px'}}/>
//             <Tab label="图书" style={{fontSize:'18px'}}/>
//             <Tab label="影视" style={{fontSize:'18px'}}/>
//             <Tab label="音乐" style={{fontSize:'18px'}}/>
//           </Tabs>
//         </AppBar>
//         {value === 0 && <IconLabelTabs/>}
//         {value === 1 && <TabContainer>Item Two</TabContainer>}
//         {value === 2 && <TabContainer>Item Three</TabContainer>}
//       </div>
//     );
//   }
// }

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
