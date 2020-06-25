import React, { useState, useEffect } from 'react'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Image} from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import { FaSearch } from 'react-icons/fa'
import user from '../../assets/img/user-icon.png'
import { Link } from 'react-router-dom'
import api from '../../services/api'

function handleLogin() {
    if (localStorage.id == null) {
        return false
    }
    return true
}

export default function NavBar() {


    const [categories, setCategories] = useState([])

    useEffect(() => {
        api.get('/categories').then(response => {
            setCategories(response.data)
        })
    }, [])

    console.log(categories)

    const handleCategories = (eventKey) => {
        console.log(eventKey)
        var id = -1
        for(var c in categories){
            if(categories[c].name == eventKey){
                console.log(categories[c].id)
                id = categories[c].id
            }
        }
        localStorage.setItem("categoryId", id)
        localStorage.setItem("categoryName", eventKey)
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

                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                        <Button id="search" variant="flat">
                            <FaSearch size={20} color="#FF0000" fontWeight="bolder" />
                        </Button>

                        <Nav.Link to="/" >Início</Nav.Link>

                        <NavDropdown title="Receitas" id="basic-nav-dropdown" onSelect={handleCategories} >
                            {categories.map(category => (
                                <NavDropdown.Item as={Link} to={"/searchresults/" + category.id} eventKey={category.id, category.name}> {category.name} </NavDropdown.Item>
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

                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                        <Button id="search" variant="flat">
                            <FaSearch size={20} color="#FF0000" fontWeight="bolder" />
                        </Button>

                        <Nav.Link href="/" >Início</Nav.Link>

                        <NavDropdown title="Receitas" id="basic-nav-dropdown" onSelect={handleCategories}>
                        {categories.map(category => (
                                <NavDropdown.Item as={Link} to={"/searchresults/" + category.id} eventKey={category.id, category.name}> {category.name} </NavDropdown.Item>
                            ))}
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
                                src={user}
                                roundedCircle
                            />
                        </Form>
                    </Link>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}