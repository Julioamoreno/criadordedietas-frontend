import React, {Component} from 'react';

import { Container } from './styles';


class Footer extends Component{


    componentDidMount(){
        // lista()
        // .then(function(res){
        //    this.retorno = res.json();
        // })
        // .catch(err => console.log(err));

    }

    render(){
        if(!this.retorno){
        return(
                   
            <Container>
                
                <footer className="page-footer font-small green"> 
                    <div className="footer-copyright text-center py-3">© Desenvolvido por Júlio Armando  </div>
                    
                </footer>
            </Container>
            );
        }
        else{
            console.log(this.retorno)
            return(
                   
                <Container>
                    
                    <footer className="page-footer font-small green"> 
                        <div className="footer-copyright text-center py-3">© foi   </div>
                        
                    </footer>
                </Container>
            );
            
        }
    }
}

export default Footer;