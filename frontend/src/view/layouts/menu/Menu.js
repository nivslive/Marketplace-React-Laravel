import React from 'react';

import { Link } from "react-router-dom";
import {makeStyles} from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import LabStore from './Labstore';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#651fff',
        color: 'white',
        boxShadow: 'inset 0 10em 10em black, 0 0 5em black',
    }
})

export default function Menu() {
    const dispatch = useDispatch();
    const user = useSelector( state => state.userReducer );
    console.log(user);
    const classes = useStyles();
    return (


                    <>

<div className={classes.root}>
    
    <nav className="navbar navbar-dark text-decoration-none px-sm-5">


  <div>
   <LabStore/>


   </div>


        <div className="d-flex">
      <Link  to="/login"><Button title="Login"/> </Link> {" "}
      <Link   to="/register"><Button title="Register"/> </Link>
      </div>
    

   
    </nav>

    
  </div>

                    </>

    )

}