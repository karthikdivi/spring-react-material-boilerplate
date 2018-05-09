import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
//import { Typography } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {Redirect} from 'react-router-dom';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});


class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
    if(this.isEmpty(JSON.parse(sessionStorage.userData))){
      return (<Redirect to={'/'}/>)
    }
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display1" gutterBottom>
        1. Dialogs
        </Typography>
        <Button onClick={this.handleClickOpen}>Open alert dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
        2. Paper
        </Typography>
        <Paper  className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
      </div>
    );
  }
}
AlertDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlertDialog);
