import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import GridOnIcon from '@material-ui/icons/GridOn';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import MoodIcon from '@material-ui/icons/Mood';

import { Link } from 'react-router-dom'

export const mailFolderListItems = (
  <div>
    <Link to='/app/charts'>
      <ListItem button>
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItem>
    </Link>
    <Link to='/app/grid'>
      <ListItem button>
        <ListItemIcon>
          <GridOnIcon />
        </ListItemIcon>
        <ListItemText primary="Grid" />
      </ListItem>
    </Link>
    <Link to='/app/forms'>
      <ListItem button>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Forms" />
      </ListItem>
    </Link>
    <Link to='/app/misc'>
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
    {/*
      <Link to='/foo' target="_self">
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Feedback" />
      </ListItem>
      </Link>
    */}
    <Link to='/logout' target="_self">
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
    </Link>
  </div>
);