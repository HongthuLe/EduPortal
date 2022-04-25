import { createTheme } from '@mui/material/styles'

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FF9026',
      light: '#FEE9D7',
      dark: '#FBB068',
    },
    secondary: {
      main: '#9873F0',
      light: '#DDD1FC',
      dark: '#A59CFE',
    }
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '40px',
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '0.6px',
          padding: '0 16px',
          '&.MuiButton-contained': {
            backgroundColor: '#FF7D00',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#000',
              color: '#FF7D00'
            }
          },
          '&.MuiButton-outlined': {
            borderColor: '#FF7D00',
            color: '#FF7D00',
            '&:hover': {
              backgroundColor: '#FEE9D7',
              color: '#FF7D00'
            }
          },
          '&.MuiButton-text': {
            backgroundColor: '#FEE9D7',
            color: '#FF7D00',
            '&:hover': {
              backgroundColor: '#FBB068',
              color: '#fff'
            }
          }
        },
      }
    }
  }
})

export default customTheme