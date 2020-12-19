import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import { Link } from 'react-router-dom';


export default function Menu() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation className="menu" style={{width: '100vw' }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      //className={classes.menu}
    >
      <BottomNavigationAction className="menu-item" label="Weather Forecast" icon={<RestoreIcon />}
      component={Link}
      to="/weather-app/weather" />
      <BottomNavigationAction className="menu-item" label="Map" icon={<MapOutlinedIcon />}
      component={Link}
      to="/weather-app/map"
       />
      <BottomNavigationAction className="menu-item" label="History" icon={<EqualizerIcon />}
      component={Link}
      to="/weather-app/history"
       />
      <BottomNavigationAction className="menu-item" label="About" icon={<LocationOnIcon />} 
            component={Link}
            to="/weather-app/about"
            />
    </BottomNavigation>
  );
}