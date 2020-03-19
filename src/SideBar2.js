import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Home from './components/Home';
class SideBar2 extends React.Component {
    
    


    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        const [anchorEl, setAnchorEl] = React.useState(null);
    }

     handleClose ()  {
        // setAnchorEl(null);
        console.log('handleClose');
    };

    render() {
        return <Menu id="simple-menu"
            anchorEl="{anchorEl}"
            keepMounted
            open={Boolean(this.anchorEl)}
            in
            onClose={this.handleClose}
        >
            <MenuItem onClick={this.handleClose} >Home</MenuItem>
            <MenuItem onClick={this.handleClose}>Weather Forecast</MenuItem>
            <MenuItem onClick={this.handleClose}>Settings</MenuItem>
            <MenuItem onClick={this.handleClose}> About</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>

    }

}

export default SideBar2;