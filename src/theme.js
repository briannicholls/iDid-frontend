import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

// import red from '@material-ui/core/colors/red';
// import purple from '@material-ui/core/colors/purple';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: 'dark'
    },

  })
)

export default theme
