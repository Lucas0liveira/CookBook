import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import sushi from '../../assets/img/sushi.jpg'
import pizza from '../../assets/img/pizza.jpg'
import hamburguer from '../../assets/img/hamburguer.jpg'
import user from '../../assets/img/user-icon.png'
import bg from '../../assets/img/food-background.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import Nbar from '../NavBar/NavBar'




export default function Profile() {
    var userName = localStorage.getItem('name');
    {
        return (
    <>
    {Nbar(true)}          
                    <Row>
                        <Image className = "foto"
                              width={150}
                              height={150}
                              src={user} 
                              roundedCircle
                            />
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h5 class = "title-section-profile">{userName}</h5>
                        </Col>
                        <Col>
                            <Link>
                                <Button variant = "flat" id = "Edit" >
                                    <FaPen size={20} color="#FF0000" fontWeight="bolder" />
                                </Button>
                            </Link>
                        </Col>
                    </Row>
            
                        <Nav className = "navPill" variant="pills" defaultActiveKey="/profile">
                            <Nav.Item>
                                <Nav.Link href="/profile">Receitas salvas</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/profilesubmited">Receitas submetidas</Nav.Link>
                            </Nav.Item>
                        </Nav>


                        <Link>
                            <Button variant = "flat" id = "addFolder" >
                                <FaPlusCircle size={30} color="#FF0000" fontWeight="bolder" />
                            </Button>
                        </Link>


                            
                        <Row>
                            <Col>
                                <Link>
                                    <Button id = " " block variant = "flat"> Comida japonesa </Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link>
                                    <Button id = " " block variant = "flat"> Comida brasileira </Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link>
                                    <Button id = " " block variant = "flat"> Doces </Button>
                                </Link>
                            </Col>
                        </Row>
                        <Row><p></p></Row>
                        <Row>
                            <Col>
                                <Link>
                                    <Button id = " " block variant = "flat"> Pizzas </Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link>
                                    <Button id = " " block variant = "flat"> Comida coreana </Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link>
                                    <Button id = " " block variant = "flat"> Ideias de lanches </Button>
                                </Link>
                            </Col>
                        </Row>
       
                
                

    </>

            
        )
    }
}


      