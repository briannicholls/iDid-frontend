import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
}));

export function EzButton(props) {
  const classes = useStyles(props);

  return (
    <Container className={classes.paper}>
      <Button variant="contained"  onClick={() => props.increment(props.numLabel)}>{props.numLabel}</Button>
    </Container>

  )
}

export default EzButton
