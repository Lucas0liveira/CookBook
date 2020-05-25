import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge, OverlayTrigger, Popover} from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import sushi from '../../assets/img/sushi.jpg'
import pizza from '../../assets/img/pizza.jpg'
import hamburguer from '../../assets/img/hamburguer.jpg'
import salmao from '../../assets/img/bg-salmao.png'
import bg from '../../assets/img/food-background.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import { FaEllipsisV } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'





export default function ProfileSubmited() {
    {
        return (
    <>
                 <Navbar variant="dark" fixed = "top" expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={logoImg} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button id="search" variant="flat">
                                <FaSearch size={20} color="#FF0000" fontWeight="bolder" />
                            </Button>

                            <Nav.Link href="#home" >Início</Nav.Link>
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
                    </Navbar.Collapse>
                </Navbar>


                <Row>
                        <Image className = "foto"
                              width={150}
                              height={150}
                              src={hamburguer} 
                              roundedCircle
                            />
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h5 class = "title-section-profile">Nome Completo</h5>
                        </Col>
                        <Col>
                            <Button variant = "flat" id = "Edit" >
                                <FaPen size={20} color="#FF0000" fontWeight="bolder" />
                            </Button>
                        </Col>
                    </Row>
            
                        <Nav className = "navPill" variant="pills" defaultActiveKey="/profilesubmited">
                            <Nav.Item>
                                <Nav.Link href="/profile">Receitas salvas</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/profilesubmited">Receitas submetidas</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Row>
                            <Col></Col>
                            <Col>
                                <Card>
                                    <Card.Img
                                     width={300}
                                     height={180} 
                                    src={hamburguer} alt="" />
                                </Card>
                            </Col>
                            <Col>
                                <Row>
                                    <h3>Nome da receita</h3>
                                        {['right'].map((placement) => (
                                            <>
                                            <OverlayTrigger
                                                trigger="click"
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                <Popover id={`popover-positioned-${placement}`}>
                                                    <Popover.Title as="h3">{}</Popover.Title>
                                                    <Popover.Content>
                                                    <Button variant = "flat" id = "subEdit" >
                                                        Editar
                                                        <FaPen size={10} color="#FF0000" fontWeight="bolder" />
                                                    </Button>
                                                    </Popover.Content>
                                                    <Popover.Content>
                                                    <Button variant = "flat" id = "subEdit" >
                                                         Excluir
                                                        <FaTrash size={10} color="#FF0000" fontWeight="bolder" />
                                                    </Button>
                                                    </Popover.Content>
                                                    <Popover.Content>
                                                    <Button variant = "flat" >
                                                         Cancelar
                                                    </Button>
                                                    </Popover.Content>
                                                </Popover>
                                                }
                                            >
                                                <Button variant="flat" id="More">
                                                <FaEllipsisV size={20} color="#FF0000" fontWeight="bolder" />
                                                </Button>
                                            </OverlayTrigger>{' '}
                                            </>
                                        ))}              
                                </Row>

                                <Row>
                                    <h5>Tempo de preparo</h5>
                                </Row>
                                <Row>
                                    <Badge pill variant="secondary">
                                        15
                                    </Badge>{' '}                
                                    <Badge pill variant="secondary">
                                        Min
                                    </Badge>{' '}     
                                    <FaClock size={20} color="#FF0000" fontWeight="bolder" />
                                </Row>
                                <Row>
                                    <h7>Hamburguer caseiro com cebola crispy no pão brioche amanteigado.</h7>
                                </Row>
                                <Row>
                                <Button block variant = "flat">
                                    Ver mais
                                </Button>
                                </Row>
                            </Col>
                            <Col></Col>

                        </Row>

                        <br></br>

                        <Row>
                            <Col></Col>
                            <Col>
                                <Card>
                                    <Card.Img
                                     width={300}
                                     height={180} 
                                    src={hamburguer} alt="" />
                                </Card>
                            </Col>
                            <Col>
                                <Row>
                                    <h3>Nome da receita</h3>
                                        {['right'].map((placement) => (
                                            <>
                                            <OverlayTrigger
                                                trigger="click"
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                <Popover id={`popover-positioned-${placement}`}>
                                                    <Popover.Title as="h3">{}</Popover.Title>
                                                    <Popover.Content>
                                                    <Button variant = "flat" id = "subEdit" >
                                                        Editar
                                                        <FaPen size={10} color="#FF0000" fontWeight="bolder" />
                                                    </Button>
                                                    </Popover.Content>
                                                    <Popover.Content>
                                                    <Button variant = "flat" id = "subEdit" >
                                                         Excluir
                                                        <FaTrash size={10} color="#FF0000" fontWeight="bolder" />
                                                    </Button>
                                                    </Popover.Content>
                                                    <Popover.Content>
                                                    <Button variant = "flat" >
                                                         Cancelar
                                                    </Button>
                                                    </Popover.Content>
                                                </Popover>
                                                }
                                            >
                                                <Button variant="flat" id="More">
                                                <FaEllipsisV size={20} color="#FF0000" fontWeight="bolder" />
                                                </Button>
                                            </OverlayTrigger>{' '}
                                            </>
                                        ))}              
                                </Row>

                                <Row>
                                    <h5>Tempo de preparo</h5>
                                </Row>
                                <Row>
                                    <Badge pill variant="secondary">
                                        15
                                    </Badge>{' '}                
                                    <Badge pill variant="secondary">
                                        Min
                                    </Badge>{' '}     
                                    <FaClock size={20} color="#FF0000" fontWeight="bolder" />
                                </Row>
                                <Row>
                                    <h7>Hamburguer caseiro com cebola crispy no pão brioche amanteigado.</h7>
                                </Row>
                                <Row>
                                <Button block variant = "flat">
                                    Ver mais
                                </Button>
                                </Row>
                            </Col>
                            <Col></Col>

                        </Row>
                        
    </>

            
        )
    }
}

      