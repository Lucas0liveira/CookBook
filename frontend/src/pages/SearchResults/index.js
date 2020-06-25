import React, { useState, useEffect } from 'react'
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
                            <Link to = {"/searchresults/" + recipe[0].id}>
                            <Button id="vermais" block variant="flat"> Ver mais </Button>
                            </Link>
                        </Card.Footer>
                    </Card>)
                ))
                }
            </CardDeck>

    </>    
        )
    }
}

      