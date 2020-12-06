import React,{useEffect, useState,useRef } from 'react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MyMap(props) {
/*
  const [viewport,setViewport] = useState({
    width: 600,
    height: 600,
    latitude: 51.507351 ,
    longitude: -0.127758 ,
    zoom: 8
  });

  
  const componentDidMount=()=> {
    let lat = null;
    let lon = null;
    navigator.geolocation.getCurrentPosition(

      position => {
        console.log('position')
        console.log(position)
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        setViewport(          
             {
              width: 600,
              height: 600,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              zoom: 8
            }        
        );
        console.log(this.state);
      },
      err => console.log(err)
    );
  }

const changeViewPort = (viewPort1)=>{

  setViewport(viewPort1)
}
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
        onViewportChange={viewport=>changeViewPort(viewport)}
      >

         </ReactMapGL>
        </div>

      </div>
    );
*/
const [map, setMap] = useState(null);
const styles = {
  width: "80vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};
const mapContainer = useRef(null);
    useEffect(() => {
      mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
      const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
         /* container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
          center: [0, 0],
          zoom: 5
          */
         container: mapContainer.current,
style: 'mapbox://styles/mapbox/dark-v10',
//style: 'mapbox://styles/mapbox/street-v11',
//style: 'mapbox://styles/mapbox/satellite-v11',
center: [6.928166326175642, 46.99061286692401],
zoom: 15.99,
pitch: 40,
bearing: 20,
antialias: true
        });


        map.on("dragend", () => {
          console.log(  map.getCenter());          
          console.log(  map.getBearing());
          console.log(  map.getPitch());
        });
        map.on("zoomend", () => {
          console.log(  map.getCenter());
          console.log(  map.getBearing());
          console.log(  map.getPitch());
        });
        map.on("load", () => {
          setMap(map);
          map.resize();
          
          navigator.geolocation.getCurrentPosition(
            position => {
              map.setCenter([position.coords.longitude,position.coords.latitude])
            },
            err => console.log(err)
          );

          map.addSource('floorplan', {
            // GeoJSON Data source used in vector tiles, documented at
            // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
            'type': 'geojson',
            'data':
            'https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson'
            });
            map.addLayer({
            'id': 'room-extrusion',
            'type': 'fill-extrusion',
            //'source': 'floorplan',
            'source': 'composite',
            'source-layer': 'building',
            'paint': {
            // See the Mapbox Style Specification for details on data expressions.
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions
             
            // Get the fill-extrusion-color from the source 'color' property.
            'fill-extrusion-color': ['get', 'color'],
             
            // Get fill-extrusion-height from the source 'height' property.
            'fill-extrusion-height': ['get', 'height'],
             
            // Get fill-extrusion-base from the source 'base_height' property.
            'fill-extrusion-base': ['get', 'base_height'],
             
            // Make extrusions slightly opaque for see through indoor walls.
            'fill-extrusion-opacity': 0.5
            }
            });

        });

      };
  
      if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);
  
    return     <div ref={el => (mapContainer.current = el)} style={styles} />    ;
  
}

export default MyMap;