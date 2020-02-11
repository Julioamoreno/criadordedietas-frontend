import React from "react";

import Inicio from "../Inicio/index";
import SignIn from "../SignIn/index";

import { isAuthenticated } from "../../services/auth";

class UserLogged extends React.Component{
    constructor(props){
        super(props)
    }
  
  render(){
      
    if (!isAuthenticated()) {
    return <SignIn />;
    }
    return <Inicio />;
    
  }
}

export default UserLogged;