import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { connect } from "react-redux";
import { onClose, onOpen } from "../../redux/slideBar.redux";
const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

function SwipeableTemporaryDrawer(props) {
  const { classes } = props;
  console.log(props);
  const sideList = (
    <div className={classes.list}>
      <List>
        {["卡牌", "接机", "策略", "美女"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["动作", "冒险", "音乐"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <>
      <SwipeableDrawer
        open={props.open}
        onClose={props.onClose}
        onOpen={props.onOpen}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={props.onClose}
          onKeyDown={props.onOpen}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </>
  );
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

const index = connect(
  state => state.slideBarRedux,
  { onClose, onOpen }
)(SwipeableTemporaryDrawer);

export default withStyles(styles)(index);
