import React, { Component, PureComponent, useState, useEffect } from 'react';

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
import '.././History.css';
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

let dataWeather = [];

const formatXAxis = (unix_timestamp) => {
  //console.log("formatXAxis");
  //console.log(unix_timestamp);

  var date = new Date(unix_timestamp * 1000);
  var dd = date.getDate();
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear();
  if(dd<10) {dd='0'+dd}
  if(mm<10) {mm='0'+mm}
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

return dd+mm+yyyy//+' ' + hours + ':' + minutes.substr(-2);

}

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
  constructor(props) {
    super(props);
    this.state = { weather: [], position: [] };
   
  }
  componentDidMount() {
    let lat = null;
    let lon = null;
    navigator.geolocation.getCurrentPosition(
      position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        //meteo actuelle weather?
        let weatherCurrent = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=metric&appid='+process.env.REACT_APP_OPEN_WEATHER_TOKEN;
        // forecast pour les prevision par default retourne une liste de 7
        //let weatherForecast = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+lon+'&units=metric&appid=526309393592f5cf6ed361609dfd8e78';
        //'https://api.openweathermap.org/data/2.5/forecast/daily?q=Neuchatel&units=metric&appid=526309393592f5cf6ed361609dfd8e78')
        fetch(weatherCurrent)
          .then(res => res.json())
          .then((data) => {
            console.log('----weather data object in promise-------');
            console.log(data);
            //dataWeather =getTemperaturesHourly(data);
            dataWeather= data;
            this.setState({
              weather: data,
             // temp: data.main.temp,
              position: position
            });
          })
          .catch(console.log('error'))

      },
      err => console.log(err)
    );

  }
  render() {
    const { classes } = this.props;
    {console.log(classes)}
    return (
      <div className="content">
        <h2>History</h2>
        <div className="history-row space-between">
        <div className="column card-dark">
            <div className="chart-title">Température</div>  
            <div className="chart-value">{dataWeather?.current?.temp}°</div>   
            <ResponsiveContainer> 
              <AreaChart  
                data={dataWeather.daily} margin={{   top: 0, right: -20, left: 0, bottom: 15, }}>
                    <defs>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                          </linearGradient>
                    </defs>
                    <XAxis dataKey="dt" tick={{fontSize: 10}} tickFormatter={formatXAxis} />
                    <Area type="monotone" dataKey="temp.day" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
           </div>
           <div className="column card-dark">

              <div className="chart-title">Humidité</div>            
              <div className="chart-value">{dataWeather?.current?.humidity}%</div>     
                    <ResponsiveContainer> 
                          <AreaChart  data={dataWeather.daily} margin={{   top: 0, right: -20, left: 0, bottom: 15, }}>
                              <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>

                              </defs>
                              <XAxis dataKey="name" tick={{fontSize: 10}} />
                              <Area type="monotone" dataKey="humidity" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                          </AreaChart>
                    </ResponsiveContainer> 
             

</div>
            <div className="column card-dark">
            <div className="chart-title">Pression </div> 
            <div className="chart-value">{dataWeather?.current?.pressure} hPa</div>   
            <ResponsiveContainer> 
                  <AreaChart   
       
                  data={dataWeather.daily} margin={{   top: 0, right: -20, left: 0, bottom: 15, }}>
                      <defs>
                      <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#923CB5" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" tick={{fontSize: 10}} />
                   
                      <Area type="monotone" dataKey="pressure" stroke="#923CB5" fillOpacity={1} fill="url(#colorAmt)" />
                  </AreaChart>
                  </ResponsiveContainer>
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