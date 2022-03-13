import React, {useState, useEffect} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {getCounters} from '../../actions/counters.js'

export const SelectBox = (props) => {
  const [counters, setCounters] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    getCounters(setCounters)
  }, [])

  const handleValueChange = (event, newValue) => {
    props.updateCounter(newValue)
  }

  return (
    <div>
      <Autocomplete
        options={counters}
        getOptionLabel={option => option.name}
        id="counter_combo_box"
        fullWidth
        onChange={(event, newValue) => handleValueChange(event, newValue)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => { setInputValue(newInputValue) } }
        renderInput={params => <TextField {...params} label="Of what?" variant="outlined" />}
      />
    </div>
  );
}

export default SelectBox
