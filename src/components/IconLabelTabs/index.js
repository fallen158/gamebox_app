import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const styles = {
  root: {
    flexGrow: 1,
    wiidth: '100%'
  },
  tabsIndicator: {
    backgroundColor: 'white'
  }
};

class IconLabelTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper square className={classes.root}>
        <Tabs
          centered
          value={this.state.value}
          onChange={this.handleChange}
          variant="fullWidth"
          textColor="secondary"
          classes={{ indicator: classes.tabsIndicator }}
        >
          <Tab
            icon={<PhoneIcon />}
            label="为您推荐"
            style={{ fontSize: '14px' }}
          />
          <Tab
            icon={<FavoriteIcon />}
            label="热门排行榜"
            style={{ fontSize: '14px' }}
          />
          <Tab
            icon={<PersonPinIcon />}
            label="类别"
            style={{ fontSize: '14px' }}
          />
          <Tab
            icon={<FavoriteIcon />}
            label="家庭"
            style={{ fontSize: '14px' }}
          />
        </Tabs>
      </Paper>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconLabelTabs);
