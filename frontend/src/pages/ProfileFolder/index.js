import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge, Modal } from 'react-bootstrap/'
import user from '../../assets/img/user-icon.png'
import bg from '../../assets/img/food-background.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import Nbar from '../NavBar/NavBar'
import api from '../../services/api'


export default function ProfileFolder() {

    var folder_name = localStorage.getItem('folder_name')


    const folder_id = useParams().id
    const [recipes, setRecipes] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    const handleShowAdd = () => setShowAdd(true)


    useEffect(async () => {
        const response = await api.get('/folder/recipes', { folder_id })
        setRecipes(response.data)
            console.log(recipes)
        }, [recipes])

        
    if (!recipes) {
        return <span>Loading...</span>
    } else {
        console.log(recipes)
    }

    function handleCloseAdd() {
        setShowAdd(false)
    }

    {
        return (
            <>
                {Nbar()}


                <h1 class="title-section">{folder_name}</h1>

                <Button variant="flat" onClick={handleShowAdd} id="deleteRecipeFolder" size="sm"><FaTrash size={30} color="#FFFFF0" fontWeight="bolder" /></Button>
                <Modal show={showAdd} onHide={handleCloseAdd}>
                    <Modal.Header closeButton>
                        <Modal.Title>Lixeira</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Tem certeza que deseja deletar esta pasta?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="flat" F>
                            Sim
                    </Button>

                        <Button variant="flat" onClick={handleCloseAdd}>
                            Não
                    </Button>

                    </Modal.Footer>
                </Modal>



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