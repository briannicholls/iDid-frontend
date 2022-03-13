import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

// import red from '@material-ui/core/colors/red';
// import purple from '@material-ui/core/colors/purple';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      // type: 'dark',
      primary: {
        main: '#6f00a7',
        light: '#a242d9',
        dark: '#3b0077',
      },
      secondary: {
        main: '#e040fb',
        light: '#ff79ff',
        dark: '#aa00c7',
      }
    },

  })
)

export default theme
