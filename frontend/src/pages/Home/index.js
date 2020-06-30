import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Button, Card, Row, Col, Badge } from 'react-bootstrap/'
import api from '../../services/api'
import Nbar from '../NavBar/NavBar'

export default function Home() {
    const [recipes, setRecipes] = useState([])
    const [recipeByStar, setRecipesByStar] = useState([])


    useEffect(() => {
        async function fetchData() {
          const response1 = await api.get('/recipes')
          const response2 = await api.get('/filter/rating')
          setRecipes(response1.data)
          setRecipesByStar(response2.data)
        }
        fetchData()
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

            <h2 class="title-section">Adicionadas recentemente</h2>
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
