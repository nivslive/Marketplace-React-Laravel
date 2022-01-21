import React from 'react'

import { Link } from "react-router-dom";

//import  Loading  from '../view/components/Loading.js'

import { Loading, Notify, Alert, Confirm } from '../view/components'

export default function App() {
  return (
    <div style={{backgroundColor: "blue", color: "white"}}>
    
      <nav className="navbar navbar-dark bg-primary text-decoration-none"
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >


    <div>
     <h1>Bookkeeper</h1>
     <Confirm
     open={true}
     onClose={() => alert('close')}
    onConfirm={() => alert('confirm')}

     />
      <Loading/>
      <Notify/>
      <Alert/>

     </div>


          <div>
        <Link to="/login">Login </Link> |{" "}
        <Link to="/register">Register</Link>
        </div>
      

     
      </nav>

      
    </div>
  );
}