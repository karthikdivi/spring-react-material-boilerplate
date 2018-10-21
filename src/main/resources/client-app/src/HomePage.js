import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import { Switch, Route } from 'react-router-dom'
// Components
import Logout from './components/Logout';
import MiscComponents from './components/MiscComponents';
import Users from './components/Users';
import UsersCharts from './components/UsersCharts';
import UsersForms from './components/UsersForms';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100vh',
    zIndex: 1,
    overflow: 'auto',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  displayCustom:{
    'font-size': '0.8em'
  }
});

class HomePage extends React.Component {
  state = {
    anchor: 'left',
  };

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
      >
        <div className={classes.toolbar} />

         <Typography variant="h3" align="center">{'Foo'}  <FilterHdrIcon /> </Typography>
         <br/>
         <Typography className={classNames(classes.displayCustom)} align="center">{'version 0.0.1'} </Typography>
        <Divider />
        <List>{mailFolderListItems}</List>
        <br/><br/><br/><br/><br/><br/><br/>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
          >
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          {drawer}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
                <Route exact path='/app' component={UsersCharts}/>
                <Route path='/app/charts' component={UsersCharts}/>
                <Route path='/app/grid' component={Users}/>
                <Route path='/app/forms' component={UsersForms}/>
                <Route path='/app/misc' component={MiscComponents}/>
                <Route path='/app/logout' component={Logout}/>
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}


HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps, {  })(withStyles(styles)(HomePage));
