import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, typography } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { LineChart, AreaChart, Area, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Legend, PieChart, Pie, Sector, Cell, Tooltip,
          Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import Typography from 'material-ui/Typography';
import {Redirect} from 'react-router-dom';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];                   
const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const dataRadarChart = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];





const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 200,
    width: '80%',
    marginTop: theme.spacing.unit * 3,
  }
});

class UserPieChart extends React.Component {
  render () {
  	return (
    	<PieChart width={300} height={350}>
        <Pie dataKey="value" data={this.props.data} cx="50%" cy="50%" outerRadius={80} label>
          {
            this.props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
        </Pie>
        <Tooltip/>
      </PieChart>
    );
  }
}

class UserBarChart extends React.Component {
  render () {
  	return (
    	<BarChart width={400} height={350} data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="pv" stackId="a" fill="#8884d8" />
       <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    );
  }
}

class UserStackedAreaChart extends React.Component {
  render () {
  	return (
    	<AreaChart width={400} height={350} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
        <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
        <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
      </AreaChart>
    );
  }
}

class UserLineChart extends React.Component {
	render () {
  	return (
    	<LineChart width={600} height={450} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis yAxisId="left" />
       <YAxis yAxisId="right" orientation="right" />
       <Tooltip/>
       <Legend />
       <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

class UserRadarChart extends React.Component {
  render () {
  	return (
    	<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={450} data={dataRadarChart}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
    );
  }
}

class UsersCharts extends React.Component {
  state = {
    usersPieChartData : []
  };

  callApiUsersPie = async () => {
    const response = await fetch('/users/charts/pie');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  
  componentDidMount(){
    this.callApiUsersPie()
    .then(res => {
      this.setState({usersPieChartData : res});
    }).catch(err => console.log(err));
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
    if(this.isEmpty(JSON.parse(sessionStorage.userData))){
      return (<Redirect to={'/'}/>)
    }
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
      <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <UserBarChart />
            <Typography variant="subheading" gutterBottom align="center">
                Some Bar Chart
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} align="center">
              <UserPieChart data={this.state.usersPieChartData} />
              <Typography variant="subheading" gutterBottom align="center">
                Male vs Female
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <UserStackedAreaChart />
            <Typography variant="subheading" gutterBottom align="center">
                Some Area Chart
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <UserLineChart />
            <Typography variant="subheading" gutterBottom align="center">
                Some Line Chart
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <UserRadarChart />
            <Typography variant="subheading" gutterBottom align="center">
                Some Radar Chart
              </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
    );
  }
}

UsersCharts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersCharts);