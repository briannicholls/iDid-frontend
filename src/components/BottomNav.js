import React from 'react';
import {connect} from 'react-redux'
import {Route, withRouter} from 'react-router-dom'

import {logout} from '../actions/currentUser.js'
import {fetchUserActions} from '../actions/actions.js'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import HistoryIcon from '@material-ui/icons/History';


const useStyles = makeStyles({
  root: {
    width: 'sm',
  },
});

const BottomNav = (props) => {

  const classes = useStyles();

  const handleNavChange = (newValue) => {
    props.changeAppState(newValue)
  }

  const handleOnClick = () => {
    props.logout()
    props.history.push('/')
  }

  return (
    <BottomNavigation
      value={props.value}
      onChange={(event, newValue) => {
        handleNavChange(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction name="home" label="Dashboard" icon={<DashboardIcon />}  />
      <BottomNavigationAction name="routines" label="My Routines" icon={<OfflinePinIcon />} />
      <BottomNavigationAction name="actions" label="History" icon={<HistoryIcon />} />
      <BottomNavigationAction label="Log Out" onClick={handleOnClick} />
    </BottomNavigation>
  );
}

const mapStateToProps = state => {
  return {value: state.value}
}

export default withRouter(connect(mapStateToProps, {logout, fetchUserActions})(BottomNav))
