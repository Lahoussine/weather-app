import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Line} from 'react-chartjs-2';

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
class History extends Component {

  render() {
    return (
      <div className="content">
        <h2>History</h2>
        <div className="row space-between debugBorderFushia">
          <Card id="card1" className="column info">
            <CardContent>
            <Line data={data} />
            </CardContent>
          </Card>
          <Card id="card2" className="column warn">
            <CardContent>
              ...in progress
            </CardContent>
          </Card>
          <Card id="card3" className="column error">
            <CardContent>
              in progress
            </CardContent>
          </Card>
        </div>
        <div className="row space-between debugBorder"></div>
      </div>
    );
  }
}

export default History;