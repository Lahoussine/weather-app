import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
class MyMap extends Component {

  constructor(props) {
    super(props);
    
    this.state =  {
      viewport: {
        width: 600,
        height: 600,
        zoom: 8
      }
    };
  }

  componentDidMount() {
    let lat = null;
    let lon = null;
    navigator.geolocation.getCurrentPosition(

      position => {
        console.log('position')
        console.log(position)
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        this.setState(
          {
            viewport: {
              width: 600,
              height: 600,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              zoom: 8
            }
          }

        );
        console.log(this.state);
      },
      err => console.log(err)
    );
  }

  render() {
    const { viewport } = this.state;
    return (
      <div className="content">
        <h2>Map</h2>

        <div className="row center ">
        <ReactMapGL
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      >

         </ReactMapGL>
        </div>

      </div>
    );
  }
}

export default MyMap;