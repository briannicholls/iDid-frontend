import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom'

// Material UI
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(12),
    right: theme.spacing(3)
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

export default withRouter(FloatingActionButton)
