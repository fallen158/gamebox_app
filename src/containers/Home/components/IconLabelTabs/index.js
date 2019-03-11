import React, { useState } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const styles = {
  root: {
    flexGrow: 1,
    wiidth: "100%"
  },
  tabsIndicator: {
    backgroundColor: "white"
  }
};

function IconLabelTabs(props) {
  const [value, setValue] = useState(0);
  const { classes } = props;
  const handleChange = (event, value) => {
    setValue(value);
  };
  const lists = [
    {
      name: "为您推荐",
      icon: "phone",
      id: 0
    },
    {
      name: "热门排行榜",
      icon: "favorite",
      id: 1
    },
    {
      name: "类别",
      icon: "person",
      id: 2
    },
    {
      name: "家庭",
      icon: "home",
      id: 3
    }
  ];
  const handleIcon = key => {
    switch (key) {
      case "favorite":
        return <FavoriteIcon />;
      case "person":
        return <PersonPinIcon />;
      case "home":
        return <FavoriteIcon />;
      default:
        return <PhoneIcon />;
    }
  };
  return (
    <Paper square className={classes.root}>
      <Tabs
        centered
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        textColor={props.color}
        classes={{ indicator: classes.tabsIndicator }}
      >
        {lists.map(v => (
          <Tab
            key={v.id}
            label={v.name}
            style={{ fontWeight: 350, fontSize: 16 }}
            icon={handleIcon(v.icon)}
          />
        ))}
      </Tabs>
    </Paper>
  );
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconLabelTabs);
