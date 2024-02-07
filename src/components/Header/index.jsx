import './style.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosMenu } from "react-icons/io";

function Header(){
    return (
      <div className='navbar-wrapper'>
        <Navbar expand="lg" className="bg-body-tertiary navbar">
          <Container>
            <Navbar.Brand href="#home" className='logo'>
                GustavoGodencio
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
              <IoIosMenu fontSize={36}/>
            </Navbar.Toggle>
            
            <Navbar.Collapse className="justify-content-end">
              <Nav className="navbar-items">
                <a href="#projetos">Projetos</a>
                <a href="#sobre">Sobre</a>
                <a href="#certificados">Certificados</a>
                <a href="#contato">Contato</a>             
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>  
    );
}

export default Header;