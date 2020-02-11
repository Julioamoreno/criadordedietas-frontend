import React, { useState } from "react";

import api from "../../services/import";
import Footer from "../Footer/index";
import Navbar from "../Navbar/index";

function Inicio(props){
    const [lista, setlista] = useState(false); // para a listagem
    
    async function listUsers(){
        return await api.post("/cliente/inicio", localStorage.getItem("ID" )); //Ver como listar na pagina
    }
        return(
            <>
                <Navbar />
                <h1>Ola {localStorage.getItem("user")}</h1>
                <div >
                    {/* {retorno.map((retorno.nome) => {
                        
                    })} */}
                    
                    <h1>Você tem 10 cliente</h1>
                </div>

                <Footer />
            </>
        );
    
}

export default Inicio;