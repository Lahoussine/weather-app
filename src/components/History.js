import React, { Component, PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import {Line} from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

import { AreaChart,Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

function formatDate(date){
  var dt = new Date(date)
  var dd = dt.getDate();
  var mm = dt.getMonth()+1;
  var yyyy = dt.getFullYear();
  if(dd<10) {dd='0'+dd}
  if(mm<10) {mm='0'+mm}
  var dateasStr = mm+'/'+dd//+'/'+yyyy;
  return dateasStr
}
function last7Days(){
  console.log('**************');
  console.log(new Date(1593399600*1000) );
  console.log(new Date(1593403200*1000) );
  console.log('**************');  
  var date = new Date();
  return  [
    formatDate( new Date().setDate(date.getDate() -12 )),
    formatDate( new Date().setDate(date.getDate() -11 )),
    formatDate( new Date().setDate(date.getDate() -10 )),
    formatDate( new Date().setDate(date.getDate() -9 )),
    formatDate( new Date().setDate(date.getDate() -8 )),
    formatDate( new Date().setDate(date.getDate() -7 )),
    formatDate( new Date().setDate(date.getDate() -6 )),
    formatDate( new Date().setDate(date.getDate() -5 )),
    formatDate( new Date().setDate(date.getDate() -4 )),
    formatDate( new Date().setDate(date.getDate() -3 )),
    formatDate( new Date().setDate(date.getDate() -2 )),
    formatDate( new Date().setDate(date.getDate() -1 )),
    formatDate(new Date().getDate())
  ]
}

const dataRechart = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];


const data = {
  labels:  ['J-12','J-11','J-10','J-9','J-8','J-7','J-6','J-5','J-4','J-','J-','J-','Today','J+1','J+2','J+3'] ,
  datasets: [
    {
      label: 'Temperature',
     // fill: false,
    //  lineTension: 1,
      backgroundColor:'rgb(234, 94, 94)',
      borderColor: 'rgb(234, 94, 94)',
      borderCapStyle: 'butt',
     //borderDash: [3,6],
      
      //borderDashOffset: 2.0,
     // borderJoinStyle: 'round',
     // pointBorderColor: 'rgb(234, 94, 94)',
     // pointBackgroundColor: 'rgb(234, 94, 94)',
  //    pointBorderWidth: 0,
   //   pointHoverRadius: 5,
      //pointHoverBackgroundColor: 'rgba(75,192,192,1)',
     // pointHoverBorderColor: 'rgba(220,220,220,1)',
      //pointHoverBorderWidth: 20,
      pointRadius: 1,
    
      pointHitRadius: 1,
      data: [30, 26, 22, 18, 22, 26, 32,29,26,22,20,23,25,27]
    }
  ]
};



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

//const classes = useStyles();
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const styles = theme => ({
  table: {
    minWidth: 650,
  },
});
class History extends Component {

  render() {
    const { classes } = this.props;
    {console.log(classes)}
    return (
      <div className="content">
        <h2>History</h2>
        <div className="history-row space-between">
        <div className="column card-dark">
              <AreaChart    
              width={500}
              height={300}
              data={dataRechart} margin={{   top: 0, right: -20, left: 0, bottom: 15, }}>
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                  </defs>
                  <XAxis dataKey="name" tick={{fontSize: 10}} />
                  <Area type="monotone" dataKey="uv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
              </AreaChart>
           </div>
            <div className="column card-dark">
                  <AreaChart    
                  width={500}
                  height={300}
                  data={dataRechart} margin={{   top: 0, right: -20, left: 0, bottom: 15, }}>
                      <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>

                      </defs>
                      <XAxis dataKey="name" tick={{fontSize: 10}} />
                      <Area type="monotone" dataKey="pv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                  </AreaChart>
            </div>
            <div className="column card-dark">
                  <AreaChart    
                  width={500}
                  height={300}
                  data={dataRechart} margin={{   top: 0, right: -20, left: 0, bottom: 15, }}>
                      <defs>
                      <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6d071a" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#38030d" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" tick={{fontSize: 10}} />
                      <Area type="monotone" dataKey="amt" stroke="#38030d" fillOpacity={1} fill="url(#colorAmt)" />
                  </AreaChart>
            </div>
        </div>

        <div className="row space-between debugBorder">
        <TableContainer component={Paper}>
      <Table className={styles.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      </div>
    );
  }
}

export default History;