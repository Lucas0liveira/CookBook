import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import sushi from '../../assets/img/sushi.jpg'
import pizza from '../../assets/img/pizza.jpg'
import hamburguer from '../../assets/img/hamburguer.jpg'
import bg from '../../assets/img/food-background.jpg'
import salmao from '../../assets/img/bg-salmao.png'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'






export default function ViewRecipe() {
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
                            <Button id="submitnav" variant="flat" href="http://localhost:3000/recipe/submit">
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



                <>
                    <div class="container" id="submit">
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img src={hamburguer} alt="" />
                                    <Form>
                                        <Form.File
                                            id="custom-file-translate-scss"
                                            label="Adicione uma imagem"
                                            data-browse="Buscar"
                                            lang="en"
                                            custom
                                        />
                                    </Form>
                                </Card>
                                <Button variant="flat" id="save">Salvar <FaBookmark size={20} color="#FFF" fontWeight="bolder" /> </Button>
                            </Col>
                            <Col>
                                <Row>
                                    <h3>Nome da receita</h3>
                                </Row>
                                <Row>
                                    <h5>Tempo de preparo</h5>
                                </Row>
                                <Row>

                                    <Badge pill variant="secondary"> 15 </Badge>{' '}


                                    <Badge pill variant="secondary"> Min  </Badge>{' '}

                                    <FaClock size={20} color="#FF0000" fontWeight="bolder" />

                                </Row>
                                <Row>
                                    <div>
                                        <br></br>
                                        <h7>Hamburguer caseiro com cebola crispy no pão brioche amanteigado.</h7>
                                    </div>
                                </Row>
                            </Col>
                        </Row>

                        <h4 class="title-section">Ingredientes</h4>
                        <Row>
                            <Col>
                                <h5 class="title-section">Quantidade</h5>
                            </Col>
                            <Col>
                                <h5 class="title-section">Medida</h5>
                            </Col>
                            <Col>
                                <h5 class="title-section">Ingredientes</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <br></br>
                                <h6 class="text-center">1</h6>
                            </Col>
                            <Col>
                                <br></br>
                                <h6 class="text-center">Colher</h6>
                            </Col>
                            <Col>
                                <br></br>
                                <h6 class="text-center">Margarina</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                        <h4 class="title-section">Modo de preparo</h4>
                        <Row>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                        </Row>


                        <h4 class="title-section">Comentários</h4>


                        <ul className="list-unstyled">
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src={salmao}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>List-based media object</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                                </Media.Body>
                            </Media>

                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src={salmao}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>List-based media object</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                                </Media.Body>
                            </Media>

                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src={salmao}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>List-based media object</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                                </Media.Body>
                            </Media>
                        </ul>


                    </div>

                </>


            </>


        )
    }
}