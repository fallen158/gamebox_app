import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Paper from '@material-ui/core/Paper';
import { withRouter } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  function handleRouterJump() {
    props.history.goBack();
  }
  return (
    <Paper square  className={classes.root}>
      <AppBar position="static" color={props.color}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleRouterJump}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(ButtonAppBar));
