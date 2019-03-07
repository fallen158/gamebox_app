import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px"
  },
  row: {
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "10px"
  },
  container: {
    width: "120px",
    height: "165px"
  },
  wrapperImg: {
    height: "120px"
  }
});

function GameList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        {props.lists.map(v => (
          <Grid item xs={4} className={classes.row} key={v._id}>
            <div className={classes.container}>
              <div className={classes.wrapperImg}>
                <img src={v.img_url} alt={v.title} className={classes.img} />
              </div>
              <div style={{ margin: "6px 0" }}>{v.title}</div>
              <div>
                <span style={{ color: "#f99d00" }}>{v.people} </span>
                <span style={{ color: "#555" }}>玩过</span>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

GameList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameList);
