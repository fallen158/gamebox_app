import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    padding: '8px 8px 0 8px'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '2px 0',
    borderRadius: '3px'
  },
  grow: {
    flexGrow: 1
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  console.log(props)
  return (
    <div>
      <AppBar position="static" color={props.color} className={classes.root}>
        <Paper elevation={1} className={classes.paper}>
          <IconButton className={classes.iconButton} aria-label="Menu" onClick={props.setOpen}>
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Game Box"
            style={{ fontSize: '20px' }}
          />
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} />
        </Paper>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
