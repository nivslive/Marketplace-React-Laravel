import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { createTheme, ThemeProvider} from '@mui/material';
import { blue } from '@mui/material/colors';
import Router from './Routes.js';


import { Loading } from './view/components'

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
    },
    props: {}

}) 



function App() {

        return (
            <Provider store={store}>
            <ThemeProvider theme={theme}>
           
                    <Router/>
            </ThemeProvider>
            </Provider>

        )
}

export default App;