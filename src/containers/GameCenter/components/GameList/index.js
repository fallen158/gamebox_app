import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";

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
  const primary = {
    color: "#9c27b0"
  };
  const secondary = {
    color: "#f50057"
  };
  const inherit = {
    color: "rgba(0, 0, 0, 0.87"
  };
  return (
    <div className={classes.root}>
      <Grid container>
        {props.lists.map(v => (
          <Grid item xs={4} className={classes.row} key={v._id}>
            <div className={classes.container}>
              <div
                className={classes.wrapperImg}
                onClick={() => props.history.push("/introduction")}
              >
                <img src={v.img_url} alt={v.title} className={classes.img} />
              </div>
              <div style={{ margin: "6px 0" }}>{v.title}</div>
              <div>
                <span
                  style={
                    props.theme === "secondary"
                      ? secondary
                      : props.theme === "primary"
                      ? primary
                      : props.theme === "inherit"
                      ? inherit
                      : null
                  }
                >
                  {v.people}{" "}
                </span>
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

export default withStyles(styles)(withRouter(GameList));
