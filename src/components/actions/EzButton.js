import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  ezButton: {
    textAlign: 'center',
    opacity: '70%', 
    height: '6rem',
    width:  '6rem',
    fontSize: '2rem',
  },
}));

export function EzButton(props) {
  const classes = useStyles(props);

  return (
      <Button 
        color={parseInt(props.numLabel) > 0 ? 'primary' : 'secondary'}
        variant="contained"
        onClick={() => props.increment(props.numLabel)}
        className={classes.ezButton}
      >
        {props.numLabel}
      </Button>
  )
}

export default EzButton
