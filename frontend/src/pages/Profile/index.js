import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge, Modal } from 'react-bootstrap/'
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
import api from '../../services/api'




export default function Profile() {


    var userName = localStorage.getItem('name');
    const history = useHistory();
    const [showAdd, setShowAdd] = useState(false)
    const handleShowAdd = () => setShowAdd(true)

    if (!localStorage.getItem('id')) {
        alert("Você precisa estar logado para ter acesso ao perfil!")
        history.push('/login')
    }


    async function handleDelete(e){
        e.preventDefault()
        try{
            api.delete('/recipe/') //TO DO
        }catch(error){
            alert("Erro ao excluir receita")
        }
    }

    function handleCloseAdd() {
        setShowAdd(false)
    }
    function handleCloseAddButton() {
        setShowAdd(false)
    }


    {
        return (
            <>
                {Nbar(true)}
                <Row className="justify-md-center">
                    <Col xs="auto">
                        <Image className="foto"
                            width={120}
                            height={120}
                            src={user}
                            roundedCircle
                        />
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <h5 class="title-section-profile">{userName}</h5>
                    </Col>
                    <Col>
                        <Link>
                            <Button variant="flat" id="Edit" >
                                <FaPen size={20} color="#FF0000" fontWeight="bolder" />
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Nav className="navPill" variant="pills" defaultActiveKey="/profile">
                    <Nav.Item>
                        <Nav.Link href="/profile">Receitas salvas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/profilesubmited">Receitas submetidas</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Button variant="flat" id="addFolder" onClick={handleShowAdd} size="sm"><FaPlusCircle size={30} color="#FF0000" fontWeight="bolder" /></Button>
                                <Modal show={showAdd} onHide={handleCloseAdd}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Digite um nome para a sua nova pasta:</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                        <Form>
                                            <Row>
                                                <Col>
                                                <Form.Control placeholder="Escreva aqui..." />
                                                </Col>
                                            </Row>
                                        </Form>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                            <Button variant="flat" block type="submit" onClick={handleCloseAddButton}>
                                                 Criar pasta
                                            </Button>
                                    </Modal.Footer>
                                </Modal>


                <Row>
                    <Col>
                        <Link>
                            <Button id=" " block variant="flat"> Comida japonesa </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link>
                            <Button id=" " block variant="flat"> Comida brasileira </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link>
                            <Button id=" " block variant="flat"> Doces </Button>
                        </Link>
                    </Col>
                </Row>
                <Row><p></p></Row>
                <Row>
                    <Col>
                        <Link>
                            <Button id=" " block variant="flat"> Pizzas </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link>
                            <Button id=" " block variant="flat"> Comida coreana </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link>
                            <Button id=" " block variant="flat"> Ideias de lanches </Button>
                        </Link>
                    </Col>
                </Row>




            </>


        )
    }
}


