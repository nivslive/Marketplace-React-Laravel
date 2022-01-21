import React, { Suspense, Lazy }  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./routes/login.js";
import Register from "./routes/register.js";
import Home from './routes/home.js';

import { CircularProgress } from '@mui/material';

const Router = () => (
  
  <BrowserRouter>

<Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5 ">  <CircularProgress/></div>}>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
  </Routes>

</Suspense>

  </BrowserRouter>
)

export default Router;