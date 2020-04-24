import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import sushi from '../../assets/img/sushi.jpg'
import pizza from '../../assets/img/pizza.jpg'
import hamburguer from '../../assets/img/hamburguer.jpg'
import bg from '../../assets/img/food-background.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'




export default function Home() {
    {
        return (
            <>
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
                            <Button id="login" variant="flat">
                                Login
                            </Button>
                            <Button id="login" variant="flat">
                                Cadastro
                            </Button>

                        </Form>
                    </Navbar.Collapse>
                </Navbar>



                <div class="container" id="submit">
                    <h2 class="title-section">As mais bem avaliadas</h2>

                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={sushi} alt="" />
                            <Card.Body>
                                <Badge variant="secondary">45 MIN</Badge>{' '}
                                <Card.Title>Sushi brasileiro</Card.Title>
                                <Card.Text>
                                    Sem mimimi, recheio feito  com muita coisa.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id="vermais" block variant="flat"> Ver mais </Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={pizza} alt="" />
                            <Card.Body>
                                <Badge variant="secondary">45 MIN</Badge>{' '}
                                <Card.Title>Deliciosa pizza</Card.Title>
                                <Card.Text>
                                    Pizza estilo italiana, sem frescura e com muito queijo.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id="vermais" block variant="flat"> Ver mais </Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={hamburguer} alt="" />
                            <Card.Body>
                                <Badge variant="secondary">45 MIN</Badge>{' '}
                                <Card.Title>Onion crispy burguer</Card.Title>
                                <Card.Text>
                                    Hamburguer caseiro com cebola crispy no pão brioche amanteigado.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id="vermais" block variant="flat"> Ver mais </Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={sushi} alt="" />
                            <Card.Body>
                                <Badge variant="secondary">45 MIN</Badge>{' '}
                                <Card.Title>Sushi</Card.Title>
                                <Card.Text>
                                    Sushi muito bom
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id="vermais" block variant="flat"> Ver mais </Button>
                            </Card.Footer>
                        </Card>
                    </CardDeck>

                    <h2 class="title-section">Adicionadas recentemente</h2>

                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={sushi} alt="" />
                            <Card.Body>
                                <Badge variant="secondary">45 MIN</Badge>{' '}
                                <Card.Title>Sushi brasileiro</Card.Title>
                                <Card.Text>
                                    Sem mimimi, recheio feito  com muita coisa.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id="vermais" block variant="flat"> Ver mais </Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={pizza} alt="" />
                            <Card.Body>
                                <Badge variant="secondary">45 MIN</Badge>{' '}
                                <Card.Title>Deliciosa pizza</Card.Title>
                                <Card.Text>
                                    Pizza estilo italiana, sem frescura e com muito queijo.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id="vermais" block variant="flat"> Ver mais </Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={hamburguer} alt="" />
                            <Card.Body>
                                <Badge variant="secondary">45 MIN</Badge>{' '}
                                <Card.Title>Onion crispy burguer</Card.Title>
                                <Card.Text>
                                    Hamburguer caseiro com cebola crispy no pão brioche amanteigado.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id="vermais" block variant="flat"> Ver mais </Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={sushi} alt="" />
                            <Card.Body>
                                <Badge variant="secondary">45 MIN</Badge>{' '}
                                <Card.Title>Sushi</Card.Title>
                                <Card.Text>
                                    Sushi muito bom
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id="vermais" block variant="flat"> Ver mais </Button>
                            </Card.Footer>
                        </Card>
                    </CardDeck>

                    <h2 class="title-section">Termos populares</h2>

                    <Row>
                        <Col><Button id="comidajaponesa" block variant="flat"> Comida japonesa </Button></Col>
                        <Col><Button id="comidabrasileira" block variant="flat"> Comida brasileira </Button></Col>
                    </Row>
                    <Row><p></p></Row>
                    <Row>
                        <Col><Button id="pizzacaseira" block variant="flat"> Pizza caseira </Button></Col>
                        <Col><Button id="cachorroquente" block variant="flat"> Cachorro quente </Button></Col>
                        <Col><Button id="receitadebolo" block variant="flat"> Receita de bolo </Button></Col>
                    </Row>


                </div>


            </>


        )
    }
}