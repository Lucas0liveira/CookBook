import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Nav, Form, Button, Image, Row, Col, Modal } from 'react-bootstrap/'
import user from '../../assets/img/user-icon.png'
import { FaPlusCircle } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import Nbar from '../NavBar/NavBar'
import api from '../../services/api'


export default function Profile() {


    var userName = localStorage.getItem('name');
    const history = useHistory();
    const [showAdd, setShowAdd] = useState(false)
    const handleShowAdd = () => setShowAdd(true)
    const [folder_name, setFolderName] = useState('')
    const [folders, setFolders] = useState([])


    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/folders')
            setFolders(response.data)
        }
        fetchData()
    }, [folders])


    if (!localStorage.getItem('id')) {
        alert("Você precisa estar logado para ter acesso ao perfil!")
        history.push('/login')
    }

    async function handleDelete(e) {
        e.preventDefault()
        try {
            api.delete('/recipe/') //TO DO
        } catch (error) {
            alert("Erro ao excluir receita")
        }
    }

    function handleCloseAdd() {
        setShowAdd(false)
    }

    async function handleFolder() {
        setShowAdd(false)

        try {
            if (localStorage.getItem('id')) {
                const user_id = localStorage.getItem('id')
                const response = await api.post('/folders', { user_id, folder_name })
            }

        } catch (error) {
            alert("Erro ao adicionar pasta.")
        }

    }

    {
        return (
            <>
                {Nbar(true)}
                <Row className="justify-md-center">
                    <Col xs="auto">
                        <Image className="foto"
                            width={120}
                            height={120}
                            src={user}
                            roundedCircle
                        />
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <h5 class="title-section-profile">{userName}</h5>
                    </Col>
                    <Col>
                        <Link>
                            <Button variant="flat" id="Edit" >
                                <FaPen size={20} color="#FF0000" fontWeight="bolder" />
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Nav className="navPill" variant="pills" defaultActiveKey="/profile">
                    <Nav.Item>
                        <Nav.Link href="/profile">Receitas salvas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/profilesubmited">Receitas submetidas</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Button variant="flat" id="addFolder" onClick={handleShowAdd} size="sm"><FaPlusCircle size={30} color="#FF0000" fontWeight="bolder" /></Button>
                <Modal show={showAdd} onHide={handleCloseAdd}>
                    <Modal.Header closeButton>
                        <Modal.Title>Digite um nome para a sua nova pasta:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control
                                            placeholder="Escreva aqui..."
                                            value={folder_name}
                                            onChange={e => setFolderName(e.target.value)} />
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="flat" block type="submit" onClick={handleFolder}>
                            Criar pasta
                                            </Button>
                    </Modal.Footer>
                </Modal>

                <Row>
                    {folders.map(folder =>
                        <Col>
                            <Link to={"/folder/" + folder.id}>
                                <Button id=" " block variant="flat"> {folder.folder_name}</Button>
                            </Link>
                        </Col>
                    )}
                </Row>


            </>


        )
    }
}


