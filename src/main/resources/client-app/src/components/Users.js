import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import {
  FilteringState,
  IntegratedFiltering,
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';

import {
  Grid, Table, TableHeaderRow, TableFilterRow, PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 200,
    width: '80%',
    marginTop: theme.spacing.unit * 3,
  }
});

class Users extends React.Component {

  state = {
    columns: [
    { name: 'id', title: 'id' },
    { name: 'name', title: 'name' },
    { name: 'age', title: 'age' },
    { name: 'gender', title: 'gender' }
    ],
    rows: []
  };

  callApiUsers = async () => {
    const response = await fetch('/users/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount(){
    this.callApiUsers()
    .then(res => {
      this.setState({rows : res});
    }).catch(err => console.log(err));
  } 

  render() {
    const { classes } = this.props;
    const { rows, columns } = this.state;
    return (
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
          <PagingState
            defaultCurrentPage={0}
            pageSize={15}
          />
          <IntegratedPaging />
          <FilteringState defaultFilters={[]} />
          <IntegratedFiltering />
          <Table />
          <TableHeaderRow />
          <TableFilterRow />
          <PagingPanel />
        </Grid>
      </Paper>

    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);