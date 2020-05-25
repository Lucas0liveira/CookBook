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
import { FaPlusCircle } from 'react-icons/fa'
import Nbar from '../NavBar/NavBar'






export default function SubmitRecipe() {
    var ingredientCount = 0
    const [name, setName] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [prepUnit, setPrepUnit] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [prepare, setPrepare] = useState('')

    function handleRecipe(e) {
        e.preventDefault()

    }


    function addIngredient() {

        let aux = []
        aux.push(<span>Clique em + para adicionar mais ingredientes.</span>)
        for (var i = 0; i < ingredientCount; i++) {
            aux.push(<Row>
                <Col>
                    <Form.Control placeholder="Escreva..." />
                </Col>
                <Col>
                    <Form.Control as="select" size="sm" custom>
                        <option>Colher</option>
                        <option>Xícara</option>
                        <option>Gramas</option>
                        <option>Kilogramas</option>
                        <option>Miligramas</option>
                        <option>Litro</option>
                        <option>Mililitros</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Escreva..." />
                </Col>
            </Row>)
        }
        console.log(aux)
        return aux
    }

    function increaseCount() {
        ingredientCount++
        console.log(ingredientCount)
    }

    {
        return (
            <>

                {Nbar(true)}

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
                            </Col>
                            <Col>
                                <Row>
                                    <Form.Label>Informe o nome da sua receita</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Escreva..." />
                                </Row>
                                <Row>
                                    <Form.Label>Informe o tempo de preparo</Form.Label>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control as="select" size="sm" custom>
                                            <option>15</option>
                                            <option>30</option>
                                            <option>45</option>
                                            <option>60</option>
                                            <option>75</option>
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Badge variant="secondary">Min</Badge>{' '}
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Label>Descreva sobre sua receita, seja criativo!</Form.Label>
                                    <Form.Control as="textarea" rows="2" placeholder="Escreva..." />
                                </Row>
                            </Col>
                        </Row>

                        <h4 class="title-section"> Informe os ingredientes necessários</h4>
                        <Row>
                            <Col>
                                <h6 class="text-center">Quantidade</h6>
                            </Col>
                            <Col>
                                <h6 class="text-center">Medida</h6>
                            </Col>
                            <Col>
                                <h6 class="text-center">Ingredientes</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Escreva..." />
                            </Col>
                            <Col>
                                <Form.Control as="select" size="sm" custom>
                                    <option>Colher</option>
                                    <option>Xícara</option>
                                    <option>Gramas</option>
                                    <option>Kilogramas</option>
                                    <option>Miligramas</option>
                                    <option>Litro</option>
                                    <option>Mililitros</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Escreva..." />
                            </Col>
                        </Row>
                        {}
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                                <Button variant="flat" id="add" onClick={increaseCount}>
                                    <FaPlusCircle size={30} color="#FF0000" fontWeight="bolder" />
                                </Button>
                            </Col>
                        </Row>
                        <h4 class="title-section">Escreva o passo a passo necessário para preparar a receita</h4>
                        <Row>
                            <Form.Control as="textarea" rows="10" placeholder="Escreva..." />
                        </Row>
                        <Row>
                            <Button variant="flat" id="submit">
                                Submeter receita
                    </Button>
                        </Row>

                    </div>

                </>


            </>


        )
    }
}