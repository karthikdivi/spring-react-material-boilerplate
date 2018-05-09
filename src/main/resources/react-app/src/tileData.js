// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import StorageIcon from 'material-ui-icons/Storage';
import ComputerIcon from 'material-ui-icons/Computer';
import CloudCircleIcon from 'material-ui-icons/CloudCircle';
import ListIcon from 'material-ui-icons/List';
import ShowChartIcon from 'material-ui-icons/ShowChart';

import { Link } from 'react-router-dom'

export const mailFolderListItems = (
  <div>
    <Link to='/'>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Foo Menu" />
      </ListItem>
    </Link>
    <Link to='/users'>
      <ListItem button>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </Link>
    <Link to='/misc'>
      <ListItem button>
        <ListItemIcon>
          <CloudCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Some other" />
      </ListItem>
    </Link>
  </div>
);

function isEmpty(map) {
  for(var key in map) {
    if (map.hasOwnProperty(key)) {
       return false;
    }
  }
  return true;
}


  var logout =(<Link to='/logout' target="_self">
    <ListItem button>
    <ListItemIcon>
    <MailIcon />
    </ListItemIcon>
    <ListItemText primary="Logout" />
  </ListItem>
  </Link>);

export const otherMailFolderListItems = (
  <div>
  <Link to='/foo' target="_self">
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItem>
    </Link>
    {logout}
  </div>
);


