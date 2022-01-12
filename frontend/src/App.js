import React from 'react'
import { Button, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red, indigo } from '@mui/material/colors';


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

            <Button variant="contained" color="primary"> Olá Mundo</Button>
            <TextField id="standard-basic" label="Standard" variant="standard" />



      </ThemeProvider>

  
  </>

)

export default App;
