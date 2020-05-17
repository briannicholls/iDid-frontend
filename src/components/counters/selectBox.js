import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SelectBox(props) {

  const handleChange = (e) => {
    // console.log(e.target.innerHTML)

    const forgedEvent = { target: {name: 'name' , value: e.target.innerHTML}, persist: function() {} }
    props.onInputChange(forgedEvent)
  }

  return (
    <Autocomplete
      onChange={handleChange}
      id="counter_name"
      options={props.options}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(props) => <TextField {...props}  margin="normal"      required fullWidth label="Of what?" variant="outlined" />}
    />
  );
}
