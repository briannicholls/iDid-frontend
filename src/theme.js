import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

// import red from '@material-ui/core/colors/red';
// import purple from '@material-ui/core/colors/purple';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      // type: 'dark',
      primary: {
        main: '#6f00a7',
        // light: '#a242d9',
        // dark: '#3b0077',
      },
      secondary: {
        main: '#e040fb',
        // light: '#ff79ff',
        // dark: '#aa00c7',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },

  })
)

export default theme
