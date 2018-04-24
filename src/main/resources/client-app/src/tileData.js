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
import CloudDoneIcon from 'material-ui-icons/CloudDone';
import GridOnIcon from 'material-ui-icons/GridOn';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';
import InsertChartIcon from 'material-ui-icons/InsertChart';
import MoodIcon from 'material-ui-icons/Mood';

import { Link } from 'react-router-dom'

export const mailFolderListItems = (
  <div>
    <Link to='/'>
      <ListItem button>
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItem>
    </Link>
    <Link to='/grid'>
      <ListItem button>
        <ListItemIcon>
          <GridOnIcon />
        </ListItemIcon>
        <ListItemText primary="Grid" />
      </ListItem>
    </Link>
    <Link to='/forms'>
      <ListItem button>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Forms" />
      </ListItem>
    </Link>
    <Link to='/misc'>
      <ListItem button>
        <ListItemIcon>
          <MoodIcon />
        </ListItemIcon>
        <ListItemText primary="Misc" />
      </ListItem>
    </Link>
  </div>
);

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
  </div>
);
