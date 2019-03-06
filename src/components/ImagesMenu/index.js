import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: "0 5px 0 5px"
  },
  img: {
    width: "90%",
    minWidth: "80px",
    minHeight: "80px",
    height: "50%",
    maxWidth: "200px",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "10px"
  },
});

const tutorialSteps = [
  {
    label: "San Francis",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    label: "NeONBR",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
  }
];

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        {tutorialSteps.map(v => (
          <Grid item xs={3} style={{ textAlign: "center" }} key={v.label}>
            <img src={v.imgPath} className={classes.img} alt={v.label}/>
            <div>{v.label}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
