import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Form, FormControl, Button, Card, Row, Col, Badge, FormLabel } from 'react-bootstrap/'
import { FaPlusCircle } from 'react-icons/fa'
import Nbar from '../NavBar/NavBar'
import api from '../../services/api';



export default function SubmitRecipe() {
    const id = useParams().id
    const [recipe, setRecipe] = useState()
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
    const user_id = localStorage.getItem('id')
    const author = localStorage.getItem('name')

    const history = useHistory()


    useEffect(() => {
        api.get('/recipes/show/' + id).then(response => {
            setRecipe(response.data)
        })
    })

    if (!recipe[0]) {
        return (<span>Loading...</span>)
    } else {
        console.log(recipe)
    }

    async function handleRecipe(e) {
        e.preventDefault()

        try {

            if (localStorage.getItem('id')) {
                const response = await api.post('/recipes/edit', { name, description, qtt, msr, ingr, prepare, prepTime, prepUnit, image, video, category_id, user_id, author })
                console.log(response)
                history.push('/profilesubmited')
            } else {
                alert("Você precisa realizar login para poder editar uma receita!")
                history.push('/login')
            }

        } catch (error) {
            alert('Erro ao editar uma nova receita:\n' + error.message)
        }
    }

    function handleImage(e) {
        const img = e.target.files[0]
        setImage(URL.createObjectURL(img)
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
                        size="md"
                        custom
                        required
                        defaultValue=""
                        onBlur={handleMeasures} >
                        <option></option>
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
        console.log(item)
        setMeasures(msr => [...msr, item])
    }

    function handleIngredients(e) {
        let item = e.target.value
        setIngredients(ingr => [...ingr, item])
    }

    function handleCategory(e) {
        var index = e.nativeEvent.target.selectedIndex;
        console.log(index)
        setCategory(index)
    }


    {
        return (
            <>
                {Nbar()}
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
                                                defaultValue={recipe[0][0].image}
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
                                            defaultValue={recipe[0][0].name}
                                            value={name}
                                            onChange={e => setName(e.target.value)} />
                                    </Row>
                                    <Row>
                                        <Form.Label>Informe a categoria da sua receita</Form.Label>
                                        <Form.Control
                                            as="select"
                                            size="sm"
                                            required
                                            custom
                                            placeholder="Escolha uma categoria"
                                            onChange={handleCategory} >
                                            <option></option>
                                            <option>Asiática</option>
                                            <option>Brasileira</option>
                                            <option>Coreana</option>
                                            <option>Drinks</option>
                                            <option>Francesa</option>
                                            <option>Hamburguer</option>
                                            <option>Indiana</option>
                                            <option>Italiana</option>
                                            <option>Japonesa</option>
                                            <option>Low Carb</option>
                                            <option>Mexicana</option>
                                            <option>Saladas</option>
                                            <option>Sem Glúten</option>
                                            <option>Sopas</option>
                                            <option>Sobremesas</option>
                                            <option>Snacks</option>
                                            <option>Tailandesa</option>
                                            <option>Vegana</option>
                                            <option>Vegetariana</option>

                                        </Form.Control>
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
                                                defaultValue={recipe[0][0].prepTime}
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
                                            defaultValue={recipe[0][0].description}
                                            value={description}
                                            onChange={e => setDescription(e.target.value)} />
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <FormLabel>Vídeo</FormLabel>
                                <FormControl
                                    placeholder="Insira um link para seu vídeo"
                                    defaultValue={recipe[0][0].video}
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
                                    required
                                    defaultValue={recipe[0][0].prepare}
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
