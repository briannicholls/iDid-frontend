import React from 'react'
import { withTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

export function EzButton(props) {

  return (
    <Button variant={'contained'} onClick={() => props.increment(props.numLabel)}>{props.numLabel}</Button>
  )
}

export default withTheme(EzButton)
