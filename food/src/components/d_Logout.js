import React from 'react';
import { Redirect } from "react-router-dom";

function Logout(props) {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser === 'USER' || authuser === 'RESTAURANT' || authuser === 'ADMIN') {
    sessionStorage.removeItem('Key_Veriable')
    sessionStorage.clear();
  }
    return (<Redirect to="/" />) 
}

export default Logout