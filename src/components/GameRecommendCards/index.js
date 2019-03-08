import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";
import "./style.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function GameList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className="recommend_row">
        {props.lists.map(v => (
          <div className="recommend_container" key={v._id}>
            <div
              className="recommend_wrapper"
              onClick={() => props.history.push("/introduction")}
            >
              <ButtonBase style={{ width: "100%", height: "100%" }}>
                <img src={v.img_url} alt={v.title} className="recommend-img" />
              </ButtonBase>
            </div>
            <div style={{ margin: "6px 0" }}>{v.title}</div>
            <div>
              <span style={{ color: "#f99d00" }}>{v.people} </span>
              <span style={{ color: "#555" }}>玩过</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

GameList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(GameList));
