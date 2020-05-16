import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import HistoryIcon from '@material-ui/icons/History';


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

  // const handleNavClick = (e) => {
  //   // console.log(e)
  //   //props.history.push(valueMap(props.))
  // }

  const valueMap = [
    '/',
    '/routines',
    '/actions'
  ]

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        props.history.push(valueMap[newValue])
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction name="home" label="Dashboard" icon={<DashboardIcon />}  />
      <BottomNavigationAction name="routines" label="My Routines" icon={<OfflinePinIcon />} />
      <BottomNavigationAction name="actions" label="History" icon={<HistoryIcon />} />
      <BottomNavigationAction label="Log Out" onClick={props.logout} />
    </BottomNavigation>
  );
}

export default connect(null, {logout})(BottomNav)
