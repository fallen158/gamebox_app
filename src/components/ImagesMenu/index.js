import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 10
  }
});

const tutorialSteps = [
  {
    title: "San Francis",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    people: "869K"
  },
  {
    title: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    people: "349K"
  },
  {
    title: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    people: "859K"
  },
  {
    title: "NeONBR",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
    people: "89K"
  }
];

function CenteredGrid(props) {
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
    <Paper className={classes.root} elevation={1}>
      <List>
        <ListItem style={{ marginBottom: "-15px" }}>
          {props.title}
          <ListItemSecondaryAction>
            <Button
              color={props.color}
              onClick={() => props.history.push("/gamecenter")}
              style={{ fontWeight: 400 }}
            >
              更多
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <div className="recommend_row">
        {tutorialSteps.map(v => (
          <div className="recommend_container" key={v.title}>
            <div
              className="recommend_wrapper"
              onClick={() => props.history.push("/introduction")}
            >
              <ButtonBase style={{ width: "100%", height: "100%" }}>
                <img
                  src={v.imgPath}
                  alt={v.title}
                  className="recommend-img"
                  onClick={() => props.history.push("/introduction")}
                />
              </ButtonBase>
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
        ))}
      </div>
    </Paper>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(CenteredGrid));
