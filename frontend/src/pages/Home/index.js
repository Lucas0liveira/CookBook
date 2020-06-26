import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import sushi from '../../assets/img/sushi.jpg'
import pizza from '../../assets/img/pizza.jpg'
import hamburguer from '../../assets/img/hamburguer.jpg'
import bg from '../../assets/img/food-background.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import api from '../../services/api'
import Nbar from '../NavBar/NavBar'

export default function Home() {
    const [recipes, setRecipes] = useState([])
    const [recipeByStar, setRecipesByStar] = useState([])

    useEffect(() => {
        api.get('/recipes').then(response => {
            setRecipes(response.data)
        })
    },[])

    useEffect(() => {
        api.get('/filter/rating').then(response => {
            setRecipesByStar(response.data)
        })
    }, [])

    if(recipes.loading  || recipeByStar.loading){
        return (
            <span>Loading</span>
        )
    }

    return (
        <>
            {Nbar()}

            <h2 class="title-section">As mais bem avaliadas</h2>
            <Row className="justify-content-md-center">
                {recipes.map(recipe => ( //resolver segundo acesso ao banco e trocar para indexbyrating
                    (
                        <Col xs="auto">
                            <Card style={{ width: '13rem' }}>
                                <Card.Img variant="top" src={recipe[0].image} alt="" width="500px" height="200px" />
                                <Card.Body>
                                    <Badge variant="secondary">{recipe[0].prepTime} {recipe[0].prepUnit}</Badge>{' '}
                                    <Card.Title>{recipe[0].name}</Card.Title>
                                    <Card.Text>{recipe[0].description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={"/recipe/" + recipe[0].id}>
                                        <Button id="vermais" block variant="flat"> Ver mais </Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                ))
                }
            </Row>

            <h2 class="title-section">Adicionadas recentemente</h2>
            <Row className="justify-content-md-center">
                {recipeByStar.map(recipe => ( //resolver segundo acesso ao banco e trocar para indexbyrating
                    (
                        <Col xs="auto">
                            <Card style={{ width: '13rem' }}>
                                <Card.Img variant="top" src={recipe[0].image} alt="" width="500px" height="200px" />
                                <Card.Body>
                                    <Badge variant="secondary">{recipe[0].prepTime} {recipe[0].prepUnit}</Badge>{' '}
                                    <Card.Title>{recipe[0].name}</Card.Title>
                                    <Card.Text>{recipe[0].description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={"/recipe/" + recipe[0].id}>
                                        <Button id="vermais" block variant="flat"> Ver mais </Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )

                ))
                }
            </Row>

            <h2 class="title-section">Culinárias populares</h2>

            <Row>
                <Col>
                    <Link to={'/searchresults/9'}>
                        <Button id="comidajaponesa" block variant="flat"> Comida japonesa </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to={'/searchresults/2'}>
                        <Button id="comidabrasileira" block variant="flat"> Comida brasileira </Button>
                    </Link>
                </Col>
            </Row>
            <Row><p></p></Row>
            <Row>
                <Col>
                    <Link to={'/searchresults/5'}>
                        <Button id="comidafrancesa" block variant="flat"> Comida Francesa </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to={'/searchresults/15'}>
                        <Button id="sobremesa" block variant="flat"> Sobremesa </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to={'/searchresults/8'}>
                        <Button id="comidaitaliana" block variant="flat"> Comida Italiana </Button>
                    </Link>
                </Col>
            </Row>

        </>


    )

}
