import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import MiniDrawer from './MiniDrawer';
import {Redirect} from 'react-router-dom';

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

  isEmpty(map) {
    for(var key in map) {
      if (map.hasOwnProperty(key)) {
         return false;
      }
    }
    return true;
  }

  render() {
    const sesionUsr = JSON.parse(sessionStorage.getItem('userData'));
      /*if (this.isEmpty(sesionUsr)) {
        console.log("session user in  muiapp"+ sesionUsr);
        return (<Redirect to={'/'}/>)
      }*/
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
