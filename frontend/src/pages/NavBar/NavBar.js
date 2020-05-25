import React, { useState, useEffect } from 'react'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import { FaSearch } from 'react-icons/fa'
import salmao from '../../assets/img/bg-salmao.png'


export default function NavBar(login) {
    if (login == false) {
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
                        <Button href="/login" id="login" variant="flat">
                            Login
                </Button>
                        <Button href="/register" id="login" variant="flat">
                            Cadastro
                </Button>

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
                        <Button id="submitnav" variant="flat">
                            Submeter receita
                            </Button>
                    </Nav>
                    <Form inline>
                        <Image
                            width={64}
                            height={64}
                            src={salmao}
                            roundedCircle
                        />

                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}