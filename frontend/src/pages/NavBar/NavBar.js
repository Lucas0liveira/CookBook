import React, { useState, useEffect } from 'react'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import { FaSearch } from 'react-icons/fa'
import salmao from '../../assets/img/bg-salmao.png'
import { Link } from 'react-router-dom'

function handleLogin(){
    if(localStorage.id == null){
        return false
    }
    return true
}

export default function NavBar() {
    
    if (!handleLogin()) {
        return (
            <Navbar variant="dark" fixed="top" expand="lg">
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

                        <Link to="/login">
                            <Button id="login" variant="flat">
                            Login
                            </Button>
                        </Link>

                        <Link to="/register">
                            <Button id="login" variant="flat">
                            Cadastro
                            </Button>
                        </Link>

                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    } else {
        return (
            <Navbar variant="dark" fixed="top" expand="lg">
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

                        <Link to="/recipe/submit">
                            <Button id="submitnav" variant="flat">
                                Submeter receita
                            </Button>
                        </Link>

                    </Nav>

                    <Link to="/profile">
                        <Form inline>
                            <Image
                            width={64}
                            height={64}
                            src={salmao}
                            roundedCircle
                            />
                        </Form>
                    </Link>

                </Navbar.Collapse>
            </Navbar>
        )
    }

}