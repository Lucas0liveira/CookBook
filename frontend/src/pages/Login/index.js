import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import bg from '../../assets/img/food-background.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import Nbar from '../NavBar/NavBar'


import api from '../../services/api';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('login', { email }, { password });
            console.log(response.data.id);

            // localStorage.setItem('name', name);

            history.push('/profile')

        } catch (error) {
            // alert('Falha no login, tente novamente.')
            alert('Erro ao registrar a conta, tente novamente.' + '          ' + error.message)
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