import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import LocationOnIcon from '@material-ui/icons/LocationOn';



import Logout from './Logout'
import {logout} from '../actions/currentUser.js'
import {connect} from 'react-redux'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});



const BottomNav = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />}  />
      <BottomNavigationAction label="My Routines" icon={<OfflinePinIcon />} />
      <BottomNavigationAction label="History" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Log Out" onClick={props.logout} />
    </BottomNavigation>
  );
}

export default connect(null, {logout})(BottomNav)
