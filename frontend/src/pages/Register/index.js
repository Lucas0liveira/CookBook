import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap/'
import Nbar from '../NavBar/NavBar'


import api from '../../services/api'

export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        const data = {
            name,
            email,
            password
        }

        try {
            const response = await api.post('/singin', data)
            console.log(response.data.id)
            history.push('/login');
        } catch (error) {
            alert('Erro ao registrar a conta, tente novamente:\n' + error.message)
        }

    }
    return (
        <>
            {Nbar(false)}

            <div class='container' id='submit'>

                <Form onSubmit={handleRegister}>

                    <Form.Group controlId="formGroupNome">
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control
                            type="Nome Completo"
                            placeholder="Insira seu nome completo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGroupemail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Email"
                            placeholder="Insira seu email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGroupSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="Senha"
                            placeholder="Insira sua senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button id="vermais" variant="flat" type="submit">
                        Cadastrar
                            </Button>

                </Form>

            </div>

        </>
    )
}