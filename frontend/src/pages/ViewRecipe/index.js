import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge, Modal } from 'react-bootstrap/'
import StarRatingComponent from 'react-star-rating-component'
import logoImg from '../../assets/img/logo-white.png'
import sushi from '../../assets/img/sushi.jpg'
import pizza from '../../assets/img/pizza.jpg'
import hamburguer from '../../assets/img/hamburguer.jpg'
import bg from '../../assets/img/food-background.jpg'
import salmao from '../../assets/img/bg-salmao.png'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch, FaRegCreditCard } from 'react-icons/fa'
import { FaClock, FaBookmark } from 'react-icons/fa'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
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
    const [recipe_id, setrecipeId] = useState(id)
    const [user_id, setUserId] = useState(1)

    useEffect(() => {
        api.get('/recipes/show/' + id).then(response => {
            setRecipe(response.data)
        })
        api.get('/comments/' + id).then(response => {
            setComments(response.data)
        })
    }, [])
    if (!recipe[0]) {
        return (<span>Loading...</span>)
    } else {
        console.log(recipe)
    }

    async function handleComment(e) {
        e.preventDefault()
        console.log(comment)
        try {
            const response = await api.post('/comments', { recipe_id, user_id, comment })
            console.log(response)
        } catch (e) {
            alert('Error')
        }
    }

    async function handleRate() {
        try {
            console.log(id)
            console.log(nStars)
            const response = await api.post('/recipes/rating', { id, nStars })
            alert('avaliação enviada com sucesso')
        } catch (err) {
            alert('Error')
        }
    }

    function onStarClick(nextValue, prevValue, name) {
        setNStars(nextValue)
    }

    function handleCloseRating() {
        if (changeStars) {
            handleRate()
            setChangeStars(false)
        }
        setShowRating(false)
    }

    return (
        <>
            {Nbar(false)}
            <>
                <div class="container" id="submit">
                    <Row>
                        <Col>
                            <Card >
                                <Card.Img src={recipe[0][0].image} />
                            </Card>
                            <iframe width="560" height="315" src={recipe[0][0].videourl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

                                <Badge pill variant="secondary">
                                    Avaliação: {recipe[0][0].rating.toFixed(1)}/5
                                </Badge>

                                <Button variant="flat" onClick={handleShowRating} size="sm">Avaliar</Button>
                                <Modal show={showRating} onHide={handleCloseRating}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Avaliar e Comentar</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            <h5>Avalie essa receita!</h5>
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
                                        <Button variant="flat" type="submit" onClick={handleCloseRating}>
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

                    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />


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