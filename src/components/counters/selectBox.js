import React from 'react';
import {connect} from 'react-redux'

import {updateActionForm} from '../../actions/actionForm'

// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


export const SelectBox = (props) => {

  const handleChange = (e) => {
    // console.log(e.target.innerHTML)
    const forgedEvent = {
      target: {
        name: e.target.name ,
        value: e.target.value},
        persist: function() {}
    }
    props.updateActionForm(forgedEvent)
  }

  const menuOptions = () => {
    return props.counters.map(counter => {
      return <MenuItem key={counter.id} value={counter.id} >{counter.name}</MenuItem>
    })
  }

  return (
    <div>
    <InputLabel id="demo-controlled-open-select-label">Of what?</InputLabel>

    <Select
          labelId="select-label"
          variant='outlined'
          id="counter_select_box"
          name="counter_id"
          fullWidth
          onChange={handleChange}
          value={props.formData.counter_id}
        >
          {menuOptions()}
    </Select>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counters: state.countersReducer,
    formData: state.actionFormReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateActionForm: event => dispatch(updateActionForm(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectBox)
