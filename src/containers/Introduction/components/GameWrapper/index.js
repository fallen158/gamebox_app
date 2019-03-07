import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    width: "100%"
    // maxWidth: 360,
  },
  chip: {
    marginRight: theme.spacing.unit
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  section2: {
    margin: theme.spacing.unit * 2
  },
  section3: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 2}px`,
    textAlign: "right"
  }
});

function MiddleDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ListItem>
        <Avatar>
          <BeachAccessIcon />
        </Avatar>
        <ListItemText primary="突袭·暗影传说" secondary="Plarium Global Ltd" />
      </ListItem>

      <div className={classes.section2}>
        <div>
          <Chip className={classes.chip} label="Extra Soft" />
          <Chip className={classes.chip} label="Soft" />
          <Chip className={classes.chip} label="Medium" />
          <Chip className={classes.chip} label="Hard" />
        </div>
      </div>
      <div className={classes.section3}>
        <Button variant="contained" color="primary">
          开始游戏
        </Button>
      </div>
      <Divider />
    </div>
  );
}

MiddleDividers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MiddleDividers);
