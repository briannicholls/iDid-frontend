// WIP - not yet used
import { TextField } from "@material-ui/core"

const IdidTextField = props => 
  <TextField 
    required
    fullWidth
    variant="outlined"
    label="First Name"
    name="fname"
    value={props.fname}
    onChange={handleOnChange}
    {...props}
  />

  export default IdidTextField
