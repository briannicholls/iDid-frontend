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
    },
  })
)

export default theme
