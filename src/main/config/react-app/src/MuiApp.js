import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import MiniDrawer from './MiniDrawer';

const styles = theme => ({
  root: {
    //textAlign: 'center',
    //paddingTop: theme.spacing.unit * 20,
  },
});

class MuiApp extends React.Component {
  state = {
    open: false,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <MiniDrawer />
      </div>
    );
  }
}

MuiApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(MuiApp));
