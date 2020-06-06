import React, {useState} from 'react'

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import theme from '../../theme'



export default function WeightInput(props) {
  const [unit, setUnit] = useState('')
  const [weight, setWeight] = useState(0)

  const handleWeightChange = (e) => {
    setWeight(e.target.value)
  }

  const handleUnitChange = (e) => {
    setUnit(e.target.value)
  }

  return (
    <div className={theme.formInput}>
      <TextField
        label={"Weight"}
        variant='outlined'
        type="number"
        onChange={handleWeightChange}
        value={weight}
        />
      <Select
        label={'Units'}
        variant="outlined"
        onChange={handleUnitChange}
        value={unit}>
        <MenuItem value='lb'>lb</MenuItem>
        <MenuItem value='kg'>kg</MenuItem>
      </Select>
    </div>
  )

}
