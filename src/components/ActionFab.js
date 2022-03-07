import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeAppState} from '../actions/value'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(9),
    right: theme.spacing(2)
  }
}))

export const FloatingActionButton = (props) => {
  const classes = useStyles();

  const fab = {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    }

  const handleOnClick = (e) => {
    props.changeAppState(2)
    props.history.push('/actions/new')
  }

  return (
    <div>
      <Fab variant='extended' aria-label={fab.label} className={fab.className} color='secondary' onClick={handleOnClick}>
         I did... {fab.icon}
      </Fab>

    </div>
  );
}

export default withRouter(connect(null, {changeAppState})(FloatingActionButton))
