import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {Redirect} from 'react-router-dom';
import {PostData} from '../services/PostData';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import MuiApp from '../MuiApp';


const styles = {
    card: {
      maxWidth: 305,
      margin: 'auto',
      "vertical-align" : 'middle',
    },
    verticalSpacerDiv: {
      paddingTop: '10%', // 16:9
    },
    center: {
        verticalAlign: 'middle',
        margin: 'auto',
    }
  };
  

class Signin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loginError: false,
        redirect: false
      };
      this.signup = this
        .signup
        .bind(this);
    }
  
    signup(res, type) {
      let postData;

      if (type === 'google' && res.w3.U3) {
        postData = {
          name: res.w3.ig,
          provider: type,
          email: res.w3.U3,
          providerId: res.El,
          token: res.Zi.access_token,
          providerPic: res.w3.Paa
        };
      }
  
      if (postData) {
        PostData('signup', postData).then((result) => {
          let responseJson = result;
          sessionStorage.setItem("userData", JSON.stringify(postData));
          this.setState({redirect: true});
        });
      } else {}
    }

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
      
      if (!this.isEmpty(sesionUsr)) {
        console.log("session user"+ sesionUsr);
        return (<MuiApp/>);
      }
  
      const responseGoogle = (response) => {
        console.log("google console");
        console.log(response);
        this.signup(response, 'google');
      }
  
      const { classes } = this.props;
      return (

      <div className={classes.center}> 
      <div className={classes.verticalSpacerDiv}> 
      </div>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Connect with your Google account
          </Typography>
          <GoogleLogin
                clientId="24810979349-muqhm72u7i5qrrd87mtssgt2hdsmc988.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}/>
        </CardContent>
      </Card>
    </div>
  
      );
    }
  }
  
  export default withStyles(styles)(Signin);
