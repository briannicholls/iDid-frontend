import React, {useState} from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export const SelectBox = (props) => {

  const [value, setValue] = useState(props.options[0]);
  const [counterName, setCounterName] = useState('')

  const handleInputChange = (event, newInputValue) => {
    setCounterName(newInputValue);
    props.updateCounter(newInputValue)
  }

  return (
    <div>
      <Autocomplete
        id="counter_combo_box"
        fullWidth

        options={props.options}
        getOptionLabel={(option) => option.name}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

        value={value}
        inputValue={counterName}
        onInputChange={handleInputChange}

        renderInput={params => <TextField {...params} label="Of what?" variant="outlined" />}
      />
    </div>
  );
}

export default SelectBox
