import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  menu: {
    width: 500,
    background: '#282c34',
    //background-color: '#282c34',
    //display: flex
    
    //min-width: 100vw,
    //flex-direction: row;
    //align-items: center;
  },
  menuItem:{
   color:'white'
  }
});

export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation className="menu"
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