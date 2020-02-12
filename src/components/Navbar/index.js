import React, { Component } from 'react';

import { Container } from "./styles";
import Sair from "./../../pics/logout.png";
import { logout } from "../../services/auth";

class Navbar extends Component{

    render(){
    
        return(
        <>  
            <Container>
                <ul>
                    <li className="brand"><a href="/">Criador de Dietas</a></li>
                    <ul className="lista">
                        <li className="item"><a id="home" href="#home">Home</a></li>
                        <li className="item"><a id="news" href="#news">Notícias</a></li>
                        <li className="item"><a id="contact" href="#contact">Sobre</a></li>
                        <li className="user">
                             {localStorage.getItem("user")} <a href="/" onClick={logout}> <img className="btnSair" src={Sair} alt="Sair" /> 
                             </a>
                        </li>
                        
                    </ul>
                </ul>
            </Container>
        </>
        );
        
    }
}

export default Navbar;