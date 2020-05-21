import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import bg from '../../assets/img/food-background.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import api from '../../services/api';



export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            senha,
        };
        
        const response = await api.post('singin', data)
        alert (`Seu ID de acesso: ${response.data.id}`)
        history.push('/');
    }
    
    {
        return (
            <>
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand href="/">
                        <img src={logoImg} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button id="search" variant="flat">
                                <FaSearch size={20} color="#FF0000" fontWeight="bolder" />
                            </Button>

                            <Nav.Link href="/" >Início</Nav.Link>
                            <NavDropdown title="Receitas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" variant="dark">Asiática</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Brasileira</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Mexicana</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Pratos rápidas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Low Carb</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form inline>
                            <Button  href="/login" id="login" variant="flat">
                                Login
                            </Button>
                            <Button  href="/register" id="login" variant="flat">
                                Cadastro
                            </Button>

                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                
                <div class='container'id='submit'><Form onSubmit={handleRegister}>
                        <Form.Group controlId="formGroupNome">
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control type="Nome" placeholder="Nome completo" />
                        </Form.Group>
                        <Form.Group controlId="formGroupemail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="Senha" placeholder="Senha" />
                        </Form.Group>
                        <Button  href="/login" id= "vermais" variant="flat" type="Cadastrar">
                        Cadastrar
                        </Button>
                    </Form>
                </div>
            </>
        )
    }
}


