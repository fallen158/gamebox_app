import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ADVertising from "../../../../components/ADVertising";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%"
  },
  chip: {
    marginRight: theme.spacing.unit
  },
  text: {
    margin: theme.spacing.unit * 2
  },
  section2: {
    margin: theme.spacing.unit * 2
  },
  section3: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 2}px`,
    textAlign: "right"
  },
  imgWrapper: {
    width: 100,
    height: 100
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  adVertising: {
    padding: 15
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    margin: "10px 0"
  },
  content: {
    padding: 15
  },
  wrap: {
    marginTop: 10,
    color: "#7e848c",
    fontSize: 12
  },
  desc: {
    textIndent: "2em",
    margin: "0 0 5px",
    display: "block"
  },
  info: {
    display: "block"
  }
});

function MiddleDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ListItem>
        <div className={classes.imgWrapper}>
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
            alt="广告"
          />
        </div>
        <div>
          <ListItemText
            primary="突袭·暗影传说"
            secondary="Plarium Global Ltd"
            className={classes.text}
          />
          <div className={classes.section2}>
            <Chip className={classes.chip} label="角色扮演" />
            <Chip className={classes.chip} label="新游戏" />
            <Chip className={classes.chip} label="动作" />
          </div>
        </div>
      </ListItem>

      <div className={classes.section3}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.history.push("/pay")}
        >
          开始游戏
        </Button>
      </div>
      <Divider />
      <ADVertising />
      <div className={classes.adVertising}>
        <img
          className={classes.img}
          src="https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
          alt="游戏推荐"
        />
      </div>
      <Divider />
      <div className={classes.content}>
        <div className={classes.title}>Description</div>

        <div className={classes.wrap}>
          <span className={classes.desc}>
            Even at school, our princess represents fashion and refuses
            mediocrity. Help them choose some fashion and unique dresses, they
            will become the most popular girls!
          </span>
        </div>
        <div className={classes.title}>Detail</div>

        <div className={classes.wrap}>
          <span className={classes.info}>Size: 9.40MB</span>
          <span className={classes.info}>Version: 1.0.0</span>
          <span className={classes.info}>UpdateTime: 2019-01-22</span>
        </div>
      </div>
      <Divider />
    </div>
  );
}

MiddleDividers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(MiddleDividers));
