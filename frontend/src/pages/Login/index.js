import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import bg from '../../assets/img/food-background.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'


import api from '../../services/api';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('login', {email},{password});
            console.log(response.data.id);

            // localStorage.setItem('name', name);

            history.post('/profile')

        } catch (error) {
            // alert('Falha no login, tente novamente.')
            alert('Erro ao registrar a conta, tente novamente.'+ '          '+ error.message)
        }

    }

    {
        return (
            <>
                    <Navbar variant="dark" fixed = "top" expand="lg">
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
                            <Button href="/login" id="login" variant="flat">
                                Login
                            </Button>
                            <Button  href="/register" id="login" variant="flat">
                                Cadastro
                            </Button>

                        </Form>
                    </Navbar.Collapse>
                </Navbar>


                <div class='container'id='submit'>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Insira seu e-mail" 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                         />
                        <Form.Text className="text-muted">
                        Nós nunca vamos compartilhar seu email com ninguém.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Insira sua senha" 
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Mantenha-me logado" />
                        </Form.Group>
                        <Button   id= "vermais" variant="flat" type="submit">
                        Entrar
                        </Button>
                    </Form>
                </div>

            </>
        )
    }
}