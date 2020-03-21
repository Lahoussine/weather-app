import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'
class SideBar extends React.Component {

    render() {
        return <List disablePadding dense>

<ListItem button >
                    <ListItemText>BLALSA</ListItemText>
                </ListItem>
            <Link to="/weather-app">
                <ListItem button >
                    <ListItemText>Home</ListItemText>
                </ListItem>
            </Link>
            <Link to="/weather-app/weather">
                <ListItem button>
                    <ListItemText>Weather Forecast</ListItemText>
                </ListItem>
            </Link>
            <Link to="/weather-app/settings">
                <ListItem button>
                    <ListItemText>Settings</ListItemText>
                </ListItem>
            </Link>
            <Link to="/weather-app/about">
                <ListItem button>
                    <ListItemText>About</ListItemText>
                </ListItem>
            </Link>


        </List>

    }

}

export default SideBar;