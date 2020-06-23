import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image, Card, Container, Row, Col, CardDeck, Media, Badge, FormGroup, FormLabel } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import sushi from '../../assets/img/sushi.jpg'
import pizza from '../../assets/img/pizza.jpg'
import hamburguer from '../../assets/img/hamburguer.jpg'
import bg from '../../assets/img/food-background.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'
import Nbar from '../NavBar/NavBar'
import api from '../../services/api';






export default function SubmitRecipe() {
    var ingredientCount = 0
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [qtt, setQuantities] = useState([])
    const [msr, setMeasures] = useState([])
    const [ingr, setIngredients] = useState([])
    const [prepare, setPrepare] = useState('')
    const [image, setImage] = useState('https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')
    const [video, setVideo] = useState('')
    const [category_id, setCategory] = useState('')
    const [prepTime, setPrepTime] = useState('15')
    const [prepUnit, setPrepUnit] = useState('Minuto(s)')
    const [ingredientSlots, setIngredietSlots] = useState([])

    const history = useHistory();

    async function handleRecipe(e) {
        e.preventDefault()

        try {
            const response = await api.post('/recipes', { name, description, qtt, msr, ingr, prepare, image, video, category_id, prepTime, prepUnit });
            console.log(response.data.id);


            history.push('/profile')

        } catch (error) {
            alert('Erro ao registrar uma nova receita:\n' + error.message)
        }
    }

    function handleImage(e) {
        const img = e.target.files[0]
        setImage(URL.createObjectURL(e.target.files[0])
        )
    }

    function handleIngredientSlots(e) {
        const item =
            <Row>
                <Col>
                    <Form.Control
                        placeholder="Escreva..."
                        required
                        onBlur={handleQuantities} />
                </Col>
                <Col>
                    <Form.Control
                        as="select"
                        size="sm"
                        custom
                        required
                        defaultValue="Unidade"
                        onBlur={handleMeasures} >
                        <option>Unidade(s)</option>
                        <option>Colher(s)</option>
                        <option>Xícara(s)</option>
                        <option>Gramas(s)</option>
                        <option>Kilogramas(s)</option>
                        <option>Miligramas(s)</option>
                        <option>Litro(s)</option>
                        <option>Mililitros(s)</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control
                        placeholder="Escreva..."
                        required
                        onBlur={handleIngredients} />
                </Col>
            </Row>


        setIngredietSlots(ingredientSlots => [...ingredientSlots, item])

    }

    function handleQuantities(e) {
        let item = e.target.value
        setQuantities(qtt => [...qtt, item])
    }

    function handleMeasures(e) {
        let item = e.target.value
        setMeasures(msr => [...msr, item])
    }

    function handleIngredients(e) {
        let item = e.target.value
        setIngredients(ingr => [...ingr, item])
    }


    {
        return (
            <>

                {Nbar(true)}

                <>
                    <div class="container" id="submit">
                        <Form onSubmit={handleRecipe}>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Img
                                            src={image}
                                            alt="" />
                                        <Form>
                                            <Form.File
                                                id="custom-file-translate-scss"
                                                label="Adicione uma imagem"
                                                data-browse="Buscar"
                                                lang="en"
                                                custom
                                                type="file"
                                                onChange={handleImage}
                                            />
                                        </Form>
                                    </Card>
                                </Col>
                                <Col>
                                    <Row>
                                        <Form.Label>Informe o nome da sua receita</Form.Label>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            required
                                            placeholder="Escreva..."
                                            value={name}
                                            onChange={e => setName(e.target.value)} />
                                    </Row>
                                    <Row>
                                        <Form.Label>Informe a categoria da sua receita</Form.Label>
                                        <Form.Control 
                                            as="select"
                                            size="sm"
                                            required
                                            placeholder="Escolha uma categoria"
                                            value={category_id}
                                        />
                                        <option></option>
                                    </Row>
                                    <Row>
                                        <Form.Label>Informe o tempo de preparo</Form.Label>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Control
                                                as="select"
                                                size="sm"
                                                custom
                                                required
                                                defaultValue="15"
                                                value={prepTime}
                                                onChange={e => setPrepTime(e.target.value)} >
                                                <option>15</option>
                                                <option>30</option>
                                                <option>45</option>
                                                <option>60</option>
                                                <option>75</option>
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Badge variant="secondary">Min</Badge>{' '}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Form.Label>Descreva sobre sua receita, seja criativo!</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="2"
                                            placeholder="Escreva..."
                                            required
                                            value={description}
                                            onChange={e => setDescription(e.target.value)} />
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <FormLabel>Vídeo</FormLabel>
                                <FormControl
                                    placeholder="Insira um link para seu vídeo"
                                    value={video}
                                    onChange={e => setVideo(e.target.value)} />
                            </Row>

                            <h4 class="title-section"> Informe os ingredientes necessários</h4>
                            <Row>
                                <Col>
                                    <h6 class="text-center">Quantidade</h6>
                                </Col>
                                <Col>
                                    <h6 class="text-center">Medida</h6>
                                </Col>
                                <Col>
                                    <h6 class="text-center">Ingredientes</h6>
                                </Col>
                            </Row>


                            {ingredientSlots.map(item =>
                                <div> {item} </div>
                            )}

                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                    <Button variant="flat" id="add" onClick={handleIngredientSlots}>
                                        <FaPlusCircle size={30} color="#FF0000" fontWeight="bolder" />
                                    </Button>
                                </Col>
                            </Row>
                            <h4 class="title-section">Escreva o passo a passo necessário para preparar a receita</h4>
                            <Row>
                                <Form.Control
                                    as="textarea"
                                    rows="10"
                                    placeholder="Escreva..."
                                    required
                                    value={prepare}
                                    onChange={e => setPrepare(e.target.value)} />
                            </Row>
                            <Row>
                                <Button variant="flat" id="submit" type="submit">
                                    Submeter receita
                                </Button>
                            </Row>

                        </Form>

                    </div>

                </>


            </>


        )
    }
}