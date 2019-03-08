import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <Fab color="secondary" aria-label="Edit" className={classes.fab}>
      <AddIcon onClick={() => props.history.push("/gamecenter")} />
    </Fab>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(FloatingActionButtons));
