import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
  root: {
    textAlign: 'center'
  }
})

export const GridItem = (props) => {
  return <Grid item {...props}>
    {props.children}
  </Grid>
}

export default withStyles(styles)(GridItem)