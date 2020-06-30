import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap/'
import Nbar from '../NavBar/NavBar'


import api from '../../services/api'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('/login', { email, password })
            const id = response.data.id

            const user = await api.get("/users/" + id)
            console.log(user.data.name)

            if (id == undefined) {
                alert("Falha no login, combinação de email e senha inválida.")
                history.push('/login')
            } else {
                localStorage.setItem('name', user.data.name)
                localStorage.setItem('id', response.data.id)

                history.push('/')
            }


        } catch (error) {
            alert('Erro ao registrar a conta, tente novamente:\n' + error.message)
        }

    }

    {
        return (
            <>

                {Nbar(false)}

                <div class='container' id='submit'>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Insira seu e-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Nós nunca vamos compartilhar seu email com ninguém.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Insira sua senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Mantenha-me logado" />
                        </Form.Group>
                        <Button id="vermais" variant="flat" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </div>

            </>
        )
    }
}