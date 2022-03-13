import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      // type: 'dark',
      primary: {
        main: '#6f00a7',
      },
      // secondary: {
      //   main: '#c020db',
      // },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      // contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      // tonalOffset: 0.6,
    },
  })
)

export default theme
