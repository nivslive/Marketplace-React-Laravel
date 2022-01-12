import React, { Suspense, Lazy } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { CircularProgress } from '@mui/material';



const Routes = () => (

    <Router>


        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5 ">  <CircularProgress/></div>}>
                    <Switch>


                                <Route path="/cadastro" component={() => ( <h1>  Cadastro </h1>)}/>
                                <Route path="/login" component={() => ( <h1>  Login </h1>)}/>


                        
                    </Switch>

        </Suspense>

    </Router>

)


export default Routes;