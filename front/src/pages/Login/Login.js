import { Button } from "@material-ui/core";
import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import useForm from '../../Hook/useForm';
import { Form, Buttons, Main ,Erro } from './style';
import { goToForgotPassPage } from '../../Routes/Coordinator'
import axios from "axios";



const Login = () => {

    const [form, onChange, clear] = useForm({ emailOrNick: '', password: '' })
    const [erro,setErro] = useState()
    const history = useHistory();

    const LoginApi = async(body,history) =>{
        try {
            const response = await axios.post("https://projeto-full-stack-backend.herokuapp.com/user/login", body);
            window.localStorage.setItem("token",response.data.token)
            alert(`Welcome ${body.emailOrNick} `)
            history.push("/feed")
        } catch (error) {
            setErro(error.response.data.error)
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        LoginApi(form,history);
        
    }

    return (
        <Main>
            <h1>Login</h1>
            <Form onSubmit={onSubmitForm}>
                <TextField
                    autoFocus
                    name={'emailOrNick'}
                    value={form.emailOrNick}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Nome ou Nickname"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    type='password'
                    size="normal"
                    required
                    fullWidth
                    label="Senha"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <Erro>{erro}</Erro>
                <Buttons>
                    <Button
                        type='submit'
                        variant="contained"
                        color="primary"
                        style={{ width: 350, height: 52 }}
                        bg='brand.200'>Entrar</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ width: 350, height: 52 }}
                        onClick={() => goToForgotPassPage(history)}
                    >
                        Esqueceu a senha?
                    </Button>
                </Buttons>
            </Form>
        </Main>
    )
}
export default Login