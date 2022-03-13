import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'center',
  },
}));

export function EzButton(props) {
  const classes = useStyles(props);

  return (
    <Container className={classes.paper}>
      <Button 
        color={parseInt(props.numLabel) > 0 ? 'primary' : 'secondary'}
        style={{
          opacity: '70%', 
          height: '6rem',
          width:  '6rem',
          fontSize: '2rem'
        }}
        variant="contained"
        onClick={() => props.increment(props.numLabel)}
      >
        {props.numLabel}
      </Button>
    </Container>

  )
}

export default EzButton
