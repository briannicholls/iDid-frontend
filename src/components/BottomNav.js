import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {logout} from '../actions/currentUser.js'
import {fetchUserActions} from '../actions/actions.js'
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import HistoryIcon from '@material-ui/icons/History';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

const useStyles = makeStyles(() => ({
  stickyBottom: {
    position: 'fixed',
    bottom: '0px',
    margin: 'auto',
    width: '100%'
  },
}));

const BottomNav = (props) => {
  const classes = useStyles()
  const handleNavChange = (newValue) => {
    props.changeAppState(newValue)
  }

  const handleLogout = () => {
    props.logout()
    props.history.push('/')
  }

  const handleHistoryClick = () => {
    props.fetchUserActions(props.currentUser.id)
  }

  return (
    <BottomNavigation
      value={props.value}
      onChange={(event, newValue) => {
        handleNavChange(newValue)
      }}
      showLabels
      className={classes.stickyBottom}
    >
      <BottomNavigationAction name="home" label="Leaderboards" icon={<FormatListNumberedIcon />}  />
      <BottomNavigationAction name="routines" label="My Routines" icon={<OfflinePinIcon />} />
      <BottomNavigationAction onClick={handleHistoryClick} name="actions" label="History" icon={<HistoryIcon />} />
    </BottomNavigation>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    value: state.value
  }
}

export default withRouter(connect(mapStateToProps, {logout, fetchUserActions})(BottomNav))
