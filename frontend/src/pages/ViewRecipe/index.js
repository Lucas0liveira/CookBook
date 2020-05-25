import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import sushi from '../../assets/img/sushi.jpg'
import pizza from '../../assets/img/pizza.jpg'
import hamburguer from '../../assets/img/hamburguer.jpg'
import bg from '../../assets/img/food-background.jpg'
import salmao from '../../assets/img/bg-salmao.png'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch, FaRegCreditCard } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'
import Nbar from '../NavBar/NavBar'
import api from '../../services/api'






export default function ViewRecipe() {

    const id = useParams().id
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        api.get('/recipes/show/' + id).then(response => {
            setRecipe(response.data)
        })
    })
    if (!recipe[0]) {
        return (<span>Loading...</span>)
    } else {
        console.log(recipe)
    }

    return (
        <>
            {Nbar(false)}
            <>
                <div class="container" id="submit">
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img src={recipe[0][0].image} alt="" />
                            </Card>
                            <Button variant="flat" id="save">Salvar <FaBookmark size={20} color="#FFF" fontWeight="bolder" /> </Button>
                        </Col>
                        <Col>
                            <Row>
                                <h3> {recipe[0][0].name} </h3>
                            </Row>
                            <Row>
                                <h5>Tempo de preparo</h5>
                            </Row>
                            <Row>

                                <Badge pill variant="secondary">
                                    {recipe[0][0].prepTime}
                                </Badge>{' '}


                                <Badge pill variant="secondary">
                                    {recipe[0][0].prepUnit}
                                </Badge>{' '}

                                <FaClock size={20} color="#FF0000" fontWeight="bolder" />

                            </Row>
                            <Row>
                                <div>
                                    <br></br>
                                    <h7>{recipe[0][0].description}</h7>
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


                    {recipe[1].map(ingredient => (
                        (
                            <Row>
                                <Col>
                                    <br></br>
                                    <h6 class="text-center">{ingredient.quantity}</h6>
                                </Col>
                                <Col>
                                    <br></br>
                                    <h6 class="text-center">{ingredient.measure}</h6>
                                </Col>
                                <Col>
                                    <br></br>
                                    <h6 class="text-center">{ingredient.ingredient}</h6>
                                </Col>
                            </Row>
                        )
                    ))
                    }

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
                        <p> {recipe[0][0].prepare} </p>
                    </Row>

                    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />


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