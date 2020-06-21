import React from 'react'

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';

import theme from '../../theme'

export default function TimeInput(props) {

  return (
    <div className={theme.formInput}>
      <Select
        label={'Units'}
        variant="outlined"
        onChange={props.handleTimeUnitChange}
        value={props.timeUnit}>
        <MenuItem value='minutes'>minutes</MenuItem>
        <MenuItem value='hours'>hours</MenuItem>
        <MenuItem value='seconds'>seconds</MenuItem>
      </Select>
    </div>
  )

}
