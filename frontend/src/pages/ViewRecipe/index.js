import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Button, Card, Row, Col, Media, Badge, Modal } from 'react-bootstrap/'
import StarRatingComponent from 'react-star-rating-component'
import salmao from '../../assets/img/user-icon.png'
import { FaClock, FaBookmark } from 'react-icons/fa'
import { BsStarFill } from 'react-icons/bs';
import Nbar from '../NavBar/NavBar'
import api from '../../services/api'

export default function ViewRecipe() {

    const id = useParams().id
    const [recipe, setRecipe] = useState([])
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const [nStars, setNStars] = useState(0)
    const [changeStars, setChangeStars] = useState(true)
    const [showRating, setShowRating] = useState(false)
    const handleShowRating = () => setShowRating(true)
    const [showComments, setShowComments] = useState(false)
    const handleCloseComments = () => setShowComments(false)
    const handleShowComments = () => setShowComments(true)
    const [showSave, setShowSave] = useState(false)
    const [showSaveError, setShowSaveError] = useState(false)
    const [folder_id, setFolder_id] = useState(null)
    const [folders, setFolders] = useState([])
    const [recipe_id, setrecipeId] = useState(id)
    const user_id = localStorage.getItem('id')

    useEffect(() => {
        async function fetchData() {
            const response1 = await api.get('/recipes/show/' + id)
            const response2 = await api.get('/comments/' + id)
            const response3 = await api.get('/folders/' + user_id)
            setRecipe(response1.data)
            setComments(response2.data)
            setFolders(response3.data)
        }
        fetchData()
    }, [recipe])

    if (!recipe[0]) {
        return <span>Loading...</span>
    } else if (!recipe[0][0]) {
        return <span>Loading...</span>
    } else {
        console.log(recipe)
    }

    async function handleComment(e) {
        e.preventDefault()
        try {
            const response = await api.post('/comments', { recipe_id, user_id, comment })
        } catch (e) {
            alert('Error')
        }
    }

    async function handleSave(e) {
        e.preventDefault()
        console.log(folder_id)
        try {
            const response = await api.post('/folders/add', { folder_id, recipe_id })
        } catch (err) {
            alert(err.message)
        }
    }

    async function handleRate() {
        try {
            const response = await api.post('/recipes/rating', { id, nStars })
            alert('avaliação enviada com sucesso')
        } catch (err) {
            alert('Error')
        }
    }

    function onStarClick(nextValue, prevValue, name) {
        setNStars(nextValue)
    }

    function handleCloseRatingButton() {
        if (changeStars) {
            handleRate()
            setChangeStars(false)
        }
        setShowRating(false)
    }

    function handleCloseRating() {
        setShowRating(false)
    }

    function handleShowSave() {
        if (user_id != null) {
            setShowSave(true)
        } else {
            setShowSaveError(true)
        }
    }

    function handleCloseSave() {
        if (user_id != null) {
            setShowSave(false)
        } else {
            setShowSaveError(false)
        }
    }

    return (
        <>
            {Nbar()}
            <>
                <div class="container" id="submit">
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img src={recipe[0][0].image} />
                            </Card>
                            <Button variant="flat" id="save" onClick={handleShowSave}>Salvar <FaBookmark size={20} color="#FFF" fontWeight="bolder" /> </Button>

                            <Modal show={showSave} onHide={handleCloseSave}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Salvar</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSave}>
                                        <Form.Label>Escolha uma pasta para salvar</Form.Label>
                                        <Form.Group>
                                            <Form.Control as="select"
                                                onChange={e => setFolder_id(e.target.value)}
                                                value={folder_id}
                                            >
                                                <option value="">Nenhum </option>
                                                {folders.map(folder => (
                                                    < option value={folder.id} > {folder.folder_name}</option>
                                                ))}
                                            </Form.Control>
                                            <Button variant="flat" type="submit" onClick={handleCloseSave}>
                                                Save Changes
                                    </Button>
                                        </Form.Group>

                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseSave}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={showSaveError} onHide={handleCloseSave}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Salvar</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Para salvar receitas é preciso estar logado.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseSave}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleCloseSave}>
                                        Efetuar login
                                    </Button>
                                </Modal.Footer>
                            </Modal>
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

                            <br></br>

                            <Row>

                                <Badge pill variant="secondary">
                                    Avaliação: {recipe[0][0].rating.toFixed(1)}/5
                                </Badge>
                                <Button variant="flat" onClick={handleShowRating} size="sm">Avaliar</Button>
                                <Modal show={showRating} onHide={handleCloseRating}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Nos dê seu feedback</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            <h5>Avalie esta receita!</h5>
                                            <StarRatingComponent
                                                name="Avaliar"
                                                onStarClick={onStarClick.bind(this)}
                                                renderStarIcon={() => <span><BsStarFill /></span>}
                                                starCount={5}
                                                value={nStars}
                                                starColor={'#FF0000'}
                                                editing={changeStars}
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="flat" type="submit" onClick={handleCloseRatingButton}>
                                            Enviar
                                    </Button>
                                    </Modal.Footer>
                                </Modal>

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

                    <h4 class="title-section">Video Referência</h4>
                    <iframe width="560" height="315" src={recipe[0][0].videourl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                    <h4 class="title-section">Comentários</h4>


                    <ul className="list-unstyled">
                        {comments.map(comments => (
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src={salmao}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>{comments.name}</h5>
                                    <p>{comments.comment}</p>
                                </Media.Body>
                            </Media>
                        ))}
                    </ul>
                    <Button variant="flat" onClick={handleShowComments}>Comentar</Button>
                    <Modal show={showComments} onHide={handleCloseComments}>
                        <Modal.Header closeButton>
                            <Modal.Title>Comentar</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <h5>Deixe o seu comentário!</h5>
                                <Form onSubmit={handleComment}>
                                    <Form.Group controlId="comments">
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            placeholder="Faça um comentário!"
                                            value={comment}
                                            onChange={e => setComment(e.target.value)} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={handleCloseComments}>
                                        Enviar
                                    </Button>
                                </Form>
                            </div>
                        </Modal.Body>
                    </Modal>


                </div>

            </>


        </>


    )

}
