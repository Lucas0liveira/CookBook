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
    })


    // useEffect(() => {
    //     api.get('/recipesbystars').then(response => {
    //         setRecipesByStar(response.data)
    //     })
    // })


    return (
        <>
            {Nbar(false)}

            <h2 class="title-section">As mais bem avaliadas</h2>
            <CardDeck>
                {recipes.map(recipe => ( //resolver segundo acesso ao banco e trocar para indexbyrating
                    (<Card>
                        <Card.Img variant="top" src={recipe[0].image} alt="" width="500px" height="200px" />
                        <Card.Body>
                            <Badge variant="secondary">{recipe[0].prepTime} {recipe[0].prepUnit}</Badge>{' '}
                            <Card.Title>{recipe[0].name}</Card.Title>
                            <Card.Text>{recipe[0].description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button id="vermais" block variant="flat" href={"/recipe/" + recipe[0].id}> Ver mais </Button>
                        </Card.Footer>
                    </Card>)
                ))
                }
            </CardDeck>

            <h2 class="title-section">Adicionadas recentemente</h2>

            <CardDeck>
                {recipes.map(recipe => (
                    <Card>
                        <Card.Img variant="top" src={recipe[0].image} alt="" width="500px" height="200px" />
                        <Card.Body>
                            <Badge variant="secondary">{recipe[0].prepTime} {recipe[0].prepUnit}</Badge>{' '}
                            <Card.Title>{recipe[0].name}</Card.Title>
                            <Card.Text>{recipe[0].description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button id="vermais" block variant="flat" href={"/recipe/" + recipe[0].id}> Ver mais </Button>
                        </Card.Footer>
                    </Card>
                ))}
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

        </>


    )

}