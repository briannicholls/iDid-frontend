import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HistoryIcon from '@material-ui/icons/History';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles(() => ({
  stickyBottom: {
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    width: '100%'
  },
}));

const BottomNav = (props) => {
  const classes = useStyles()

  return (
    <BottomNavigation
      value={props.value}
      onChange={(e, newValue) => props.changeAppState(newValue) }
      showLabels
      className={classes.stickyBottom}
    >
      <BottomNavigationAction name="home"    label="Leaderboards" icon={<FormatListNumberedIcon />} />
      <BottomNavigationAction name="friends" label="Friends"      icon={<PeopleIcon />} />
      <BottomNavigationAction name="actions" label="History"      icon={<HistoryIcon />}  />
    </BottomNavigation>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    value: state.value
  }
}

export default withRouter(connect(mapStateToProps)(BottomNav))
