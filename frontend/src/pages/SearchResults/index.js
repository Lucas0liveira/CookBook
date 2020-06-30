import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Row, CardDeck, Badge } from 'react-bootstrap/'
import Nbar from '../NavBar/NavBar'
import api from '../../services/api'

export default function ProfileSubmited() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        api.get('/recipes/' + localStorage.getItem('categoryId')).then(response => {
            setRecipes(response.data)
            console.log(recipes)
        })
    }, [])

    {
        return (
            <>
                {Nbar()}


                <h1 class="title-section">Receitas Encontradas</h1>
                <h2 class="title-section"> Categoria {localStorage.getItem("categoryName")}</h2>

                <Row className="justify-content-md-center">
                    <CardDeck>
                        {recipes.map(recipe => (
                            (<Card>
                                <Card.Img variant="top" src={recipe[0].image} alt="" width="500px" height="200px" />
                                <Card.Body>
                                    <Badge variant="secondary">{recipe[0].prepTime} {recipe[0].prepUnit}</Badge>{' '}
                                    <Card.Title>{recipe[0].name}</Card.Title>
                                    <Card.Text>{recipe[0].description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={"/searchresults/" + recipe[0].id}>
                                        <Button id="vermais" block variant="flat"> Ver mais </Button>
                                    </Link>
                                </Card.Footer>
                            </Card>)
                        ))
                        }
                    </CardDeck>
                </Row>

            </>
        )
    }
}

