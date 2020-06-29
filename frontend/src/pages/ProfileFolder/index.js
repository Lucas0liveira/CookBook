import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Row, CardDeck, Badge, Modal } from 'react-bootstrap/'
import { FaTrash } from 'react-icons/fa'
import Nbar from '../NavBar/NavBar'
import api from '../../services/api'


export default function ProfileFolder() {

    var folder_name = localStorage.getItem('folder_name')


    const folder_id = useParams().id
    const [recipes, setRecipes] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    var db = 'oi'


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
                            (<p>{recipe.name}</p>)
                        ))
                        }
                    </CardDeck>
                </Row>


            </>
        )
    }
}