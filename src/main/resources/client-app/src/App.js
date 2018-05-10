import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import Signin from './components/Signin';

const styles = theme => ({
  root: {
    //textAlign: 'center',
    //paddingTop: theme.spacing.unit * 20,
  },
});

class App extends React.Component {
  state = {
    open: false,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Signin />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
