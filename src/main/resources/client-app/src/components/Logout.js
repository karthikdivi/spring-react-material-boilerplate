import React from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends React.Component {

   
    isEmpty(map) {
      for(var key in map) {
        if (map.hasOwnProperty(key)) {
           return false;
        }
      }
      return true;
   }
  
    render() {
          sessionStorage.userData='{}';
          return (<Redirect to={'/'}/>)
      
      return (
        <div></div>
      );
    }
  }
  
  
  export default Logout;