import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red, indigo } from '@mui/material/colors';
import Routes from './Routes.js';


const theme = createTheme({
  palette: {
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: red[500],
    },
  },
  props: {
      MuiTextField: {
        variant: "outlined",
        fullWidth: true
      },
      MuiSelect: {
        variant: "outlined",
        fullWidth: true
      }
  },

});

const App =  () => (

  <>

      <ThemeProvider theme={theme}>

          <Routes/>

      </ThemeProvider>

  
  </>

)

export default App;
