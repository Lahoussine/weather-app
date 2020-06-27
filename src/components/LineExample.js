import React, { Component } from 'react';
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
  return  [formatDate( new Date().setDate(date.getDate() -6 )),
    formatDate( new Date().setDate(date.getDate() -5 )),
    formatDate( new Date().setDate(date.getDate() -4 )),
    formatDate( new Date().setDate(date.getDate() -3 )),
    formatDate( new Date().setDate(date.getDate() -2 )),
    formatDate( new Date().setDate(date.getDate() -1 )),

    formatDate(new Date().getDate())]
}
class LineExample extends Component{

  render() {
    
    
    const data = {
      labels:   last7Days() ,
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          //backgroundColor: '#3e98c7',
           backgroundColor: 'rgba(62, 152, 199, 1)',
          borderColor: 'rgba(62, 152, 199, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [30, 28, 27, 18, 22, 26, 32]
        }
      ]
    };
    return (
      <div>
        <h2>Temperature history</h2>
        <Line data={data} />
      </div>
    );
  }

}
export default LineExample;