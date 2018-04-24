import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import DoneAllIcon from 'material-ui-icons/DoneAll';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 200,
    width: '80%',
    marginTop: theme.spacing.unit * 3,
  },
  paper: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 2,
    marginTop: theme.spacing.unit * 3,
    display: 'block',
    'font-family': 'monospace',
    'white-space': 'pre',
    'margin': '1em 0',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  resultDiv: {
    'overflow-y': 'scroll',
     height: '50%'
  }
});

class MiscComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      command: '',
      history: [],
    };
    this.runFooCommand = this.runFooCommand.bind(this);
  }

  callApiFoo = async () => {
    const response = await fetch('/foo', {
      method: "GET"
    });
    const body = await response.text();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleChangeCommand = event  => {
    this.setState({ 'command' : event.target.value });
  };

  runFooCommand = event => {
    this.callApiFoo()
        .then(res => {
          var newHistory = this.state.history;
          newHistory.push({
            command: this.state.command,
            result: res
          });
          this.setState({history : newHistory});
        }).catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
        <Grid item xs={12} lg={4}> </Grid>
        <Grid item xs={12} lg={4}> </Grid>
        <Grid item xs={12} lg={7}> 
            <TextField
              id="multiline-static"
              label="Command"
              rows="5"
              fullWidth={true}
              multiline={true}
              rows="4"
              className={classes.textField}
              margin="normal"
              value={this.state.command}
              onChange={this.handleChangeCommand}
            />
        </Grid>

        <Grid item xs={12} lg={8}> 
            <Button className={classes.button} variant="raised" color="primary" onClick={this.runFooCommand}>
            Run Command
            <Icon className={classes.rightIcon}>send </Icon>
            </Button>
        </Grid>

      
        <Grid item xs={12} lg={7}> 
            <List>
            {this.state.history.slice(0).reverse().map(item => 
             <div className={classes.resultDiv}>
              <ListItem>
                <Avatar>
                  <DoneAllIcon />
                </Avatar>
                <ListItemText primary={item.command} secondary={item.result} />
              </ListItem>
              <Divider inset component="li" />
              </div>
            )} 
          </List> 
        </Grid>
        </Grid>
      </div>
    );
  }
}

MiscComponents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MiscComponents);