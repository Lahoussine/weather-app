import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '.././History.css';
import { AreaChart,Area, XAxis, YAxis, Legend,ResponsiveContainer} from 'recharts';
import CollapsibleTable from './CollapsibleTable';


let dataWeather = [];

const formatXAxis = (unix_timestamp) => {
  var date = new Date(unix_timestamp * 1000);
  var dd = date.getDate();
  var mm = date.getMonth()+1;
  //var yyyy = date.getFullYear();
  if(dd<10) {dd='0'+dd}
  if(mm<10) {mm='0'+mm}
return dd+'/'+mm//+yyyy//+' ' + hours + ':' + minutes.substr(-2);

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
    console.log(classes)
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
                              <XAxis dataKey="dt" tick={{fontSize: 10}} tickFormatter={formatXAxis}/>
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
                      <XAxis dataKey="dt" tick={{fontSize: 10}} tickFormatter={formatXAxis}/>                   
                      <Area type="monotone" dataKey="pressure" stroke="#923CB5" fillOpacity={1} fill="url(#colorAmt)" />
                  </AreaChart>
                  </ResponsiveContainer>
            </div>
        </div>

        <div className="history-row space-between">
        <TableContainer component={Paper}>
          <Table className={styles.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Température</TableCell>
                <TableCell align="center">Humidité</TableCell>
                <TableCell align="center">Pression</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataWeather?.daily?.map((row) => (
                <TableRow key={row.temp.day}>
                  <TableCell align="center">{formatXAxis(row.dt)}</TableCell>
                  <TableCell align="center">{row.temp.day}</TableCell>
                  <TableCell align="center">{row.humidity}</TableCell>
                  <TableCell align="center">{row.pressure}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        <div className="history-row space-between fit-content">
        <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {dataWeather?.daily?.map(row => (
            <CollapsibleTable key={row.dt} row={row} />
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