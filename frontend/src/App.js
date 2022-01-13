import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red, indigo } from '@mui/material/colors';
//import Routes from './Routes.js';
import { CircularProgress } from '@mui/material';
import {Route, Routes} from 'react-router-dom'; 


import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/login">Login </Link> |{" "}
        <Link to="/register">Register</Link>

     
      </nav>
    </div>
  );
}