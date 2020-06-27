import React from 'react'

// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';

import theme from '../../theme'

export default function WeightInput(props) {

  return (
    <div className={theme.formInput}>
      <TextField
        label={`Weight (${props.unit})`}
        variant='outlined'
        type="number"
        onChange={props.handleWeightChange}
        value={props.weight}
        name="weight"
        />
    </div>
  )
}
