import React, { useState, useEffect } from 'react'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Image, DropdownButton, Dropdown } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import { Link } from 'react-router-dom'
import api from '../../services/api'

function handleLogin() {
    if (localStorage.id == null) {
        return false
    }
    return true
}

export default function NavBar() {

    const catNames = ["Asiática", "Brasileira", "Coreana", "Drinks", "Francesa", "Hamburguer", "Indiana", "Italiana",
        "Japonesa", "Low Carb", "Mexicana", "Saladas", "Sem Glúten", "Sopas", "Sobremesas", "Snacks", "Tailandesa", "Vegana",
        "Vegetariana"]

    let categories = []
    for (var i = 1; i < 20; i++) {
        categories.push({ "name": catNames[i - 1], "id": i })
    }

    const handleCategories = (eventKey) => {
        var id = -1
        for (var c in categories) {
            if (categories[c].name == eventKey) {
                id = categories[c].id
            }
        }
        localStorage.setItem("categoryId", id)
        localStorage.setItem("categoryName", eventKey)
    }

    const handleLogout = (eventKey) => {
        if (eventKey == "2") {
            localStorage.removeItem('id')
            localStorage.removeItem('name')
        }
    }

    if (!handleLogin()) {
        return (
            <Navbar variant="dark" fixed="top" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <img src={logoImg} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link to="/" >Início</Nav.Link>

                        <NavDropdown title="Receitas" id="basic-nav-dropdown" onSelect={handleCategories} >
                            {categories.map(category => (
                                <NavDropdown.Item as={Link} to={"/searchresults/" + category.id} eventKey={category.name}> {category.name} </NavDropdown.Item>
                            ))}
                        </NavDropdown>

                    </Nav>
                    <Form inline>

                        <Link to="/login">
                            <Button id="login" variant="flat">
                                Login
                            </Button>
                        </Link>

                        <Link to="/register">
                            <Button id="cadastro" variant="flat">
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
                <Navbar.Brand as={Link} to="/">
                    <img src={logoImg} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link href="/" >Início</Nav.Link>

                        <NavDropdown title="Receitas" id="basic-nav-dropdown" onSelect={handleCategories}>
                            {categories.map(category => (
                                <NavDropdown.Item as={Link} to={"/searchresults/" + category.id} eventKey={category.name}> {category.name} </NavDropdown.Item>
                            ))}
                        </NavDropdown>

                        <Link to="/recipe/submit">
                            <Button id="submitnav" variant="flat">
                                Submeter receita
                            </Button>
                        </Link>

                    </Nav>
                    <DropdownButton title="Menu" variant="flat" onSelect={handleLogout} >
                        <Dropdown.Item href="/profile" eventKey="1">Perfil</Dropdown.Item>
                        <Dropdown.Item href="/" eventKey="2" >Logout</Dropdown.Item>
                    </DropdownButton>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

