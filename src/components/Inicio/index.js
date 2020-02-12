import React, { useState, useEffect } from "react";

import api from "../../services/import";
import Footer from "../Footer/index";
import Navbar from "../Navbar/index";

import { Container } from "./styles";


function Inicio(props){
    const [lista, setlista] = useState ([
        {
                "contato": {
                    "telefone": 12345678
                },
                "_id": "5e43423629351c0e5c1c4125",
                "nome": "maria das neves",
                "idade": 55,
                "nutricionista_id": "5e42fcbd6f042841d0f59815",
                "__v": 0
            },
    ]); // para a listagem
    
    useEffect(() => {
        async function retornaUsers(){
        const retorno = await api.post("/cliente/inicio", {"nutricionista_id": localStorage.getItem("ID") });
        console.log(` ID : ${localStorage.getItem("ID")} retorna:  ${retorno} `)
        setlista(retorno.data);
        }

        retornaUsers()
    }, []);

    // async function listUsers(){
    //     return await api.post("/cliente/inicio", localStorage.getItem("ID" )); //Ver como listar na pagina
    // }
        
        return(
            <>
                <Navbar />
                <Container>
                    <h1>Ola {localStorage.getItem("user")}</h1>
                    <div>
                        
                        <h2>Seus Clientes</h2>
                        <div className="table">
                            {lista.map((item) => 
                                <ul key={item._id}>
                                    <li>Nome: {item.nome}</li>
                                    <li>Idade: {item.idade}</li>
                                    <li>Telefone: {item.contato.telefone}</li>
                    

                                </ul>
                                
                            )}
                        </div>
                        
                        
                    </div>

                    <Footer />
                </Container>
            </>
        );
    
}

export default Inicio;