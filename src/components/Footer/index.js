import React, {Component} from 'react';

import { Container } from './styles';


class Footer extends Component{
    render(){
        return(
                   
            <Container>
                
                <footer className="page-footer font-small green"> 
                    <div className="footer-copyright text-center py-3">© Desenvolvido por Júlio Armando  </div>
                    
                </footer>
            </Container>
            
        );
    
            
    }
}

export default Footer;