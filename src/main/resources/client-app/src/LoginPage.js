import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  link: {
    textDecoration: 'none'
  },
  logo: {
    width: '100%'
  }
});

function LoginPage(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <br />
          <Link to='/'>
            <img src={'https://material-ui.com//static/images/material-ui-logo.svg'} alt="logo" className={classes.logo} />
          </Link>
          <br /><br /><br /><br />
          <Typography variant="h5">Sign in</Typography>
          <br /><br />
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <Link to='/app' className={classes.link}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign in
            </Button>
            </Link>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);