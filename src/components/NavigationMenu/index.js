import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  const Icon = props.icon;
  return (
    <div className={classes.root}>
      <AppBar position="static" color={props.color}>
        <Toolbar>
          <Icon />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ButtonAppBar);
