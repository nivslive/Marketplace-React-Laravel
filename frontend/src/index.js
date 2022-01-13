import React, { Suspense, Lazy }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/login.js";
import Register from "./routes/register.js";
import { CircularProgress } from '@mui/material';

ReactDOM.render(
  <BrowserRouter>

<Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5 ">  <CircularProgress/></div>}>
<Routes>
        <Route path="/" element={<App />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
  </Routes>

</Suspense>

  </BrowserRouter>,
  document.getElementById('root')
);
