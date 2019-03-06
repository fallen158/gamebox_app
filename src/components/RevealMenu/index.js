import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:10,
    // paddingLeft: 10,
  },
  fab: {
    margin: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function CenteredGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container>
         <Grid item xs={3} style={{textAlign:'center'}}>
          <Fab color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
          <div>卡牌</div>
        </Grid>
        <Grid item xs={3} style={{textAlign:'center'}}>
          <Fab color="secondary" aria-label="Edit" className={classes.fab}>
            <Icon>edit_icon</Icon>
          </Fab>
          <div>策略</div>
        </Grid>
        <Grid item xs={3} style={{textAlign:'center'}}>
          <Fab color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
          <div>体育</div>
        </Grid>
        <Grid item xs={3} style={{textAlign:'center'}}>
          <Fab color="secondary" aria-label="Edit" className={classes.fab}>
            <Icon>edit_icon</Icon>
          </Fab>
          <div>音乐</div>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
