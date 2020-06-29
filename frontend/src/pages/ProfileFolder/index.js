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
    var db = 'oi'


    useEffect(() => {
        async function fetchData() {
            const response1 = await api.get('/folders/recipes/' + folder_id)
            setRecipes(response1.data)
            console.log(recipes)
            console.log(response1.data)

        }
        fetchData()
    }, [])

    async function handleShowAdd() {
        setShowAdd(true)
        try {
            const response = await api.get('/folders/recipes/' + folder_id)
            console.log(response.data)
        } catch (err) {

        }


    }

    function handleCloseAdd() {
        console.log(folder_id)
        console.log(db)
        console.log(recipes)
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
                        <Button variant="flat" /*onClick={}*/>
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
                            (<p>{recipe.name}</p>)
                        ))
                        }
                    </CardDeck>
                </Row>


            </>
        )
    }
}