import React from 'react'
import {Snackbar, SnackbarContent }  from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import { changeNotify } from '../../store/actions/notify.action'
import { makeStyles } from '@mui/styles'
import { green, red } from '@mui/material/colors'


//O PROBLEMA ESTÁ NO MAKESTYLES, DÁ UM JEITO NESSA MERDA. É NOIS.



export default function Notify() {

    const useStyles = makeStyles({
        success: {
            backgroundColor: green[500]
        },
        error: {
            backgroundColor: red[600]
        } 
    });

        const dispatch = useDispatch();
        const notify = useSelector(state => state.notifyReducer);
        const classes = useStyles();
        console.log(classes[notify.class]);


    return (

        <div>
            <Snackbar
            anchorOrigin={{
                horizontal: notify.horizontal,
                vertical: notify.vertical
            }}
            open={notify.open}
            autoHideDuration={notify.time}
            onClose={() => dispatch( changeNotify({open: false}) ) }
        >
            <SnackbarContent 
                className={classes[notify.class] + ' d-flex justify-content-center'}
                message={
                    <span className="d-flex align-items-center">{notify.msg}</span>
                }
            />
        </Snackbar>

        </div>
    )
}


