import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from '../../Hook/useForm';
import {Form} from './style'
import { RegisterApi } from './RegisterApi';
import { useHistory } from 'react-router-dom';


export default function Register() {

    const [form, onChange, clear] = useForm({ name: '', nickname: '', email: '', password: '' ,userImage:''})
    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault();
        RegisterApi(form,history)
    }

    return (
        <div>
            <h1>Registrar</h1>
            <Form onSubmit={onSubmitForm}>
                <TextField
                    autoFocus
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Nome"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    name={'nickname'}
                    value={form.nickname}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Nicknome"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    name={'userImage'}
                    value={form.userImage}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    label="Endere??oDaFoto.jpg"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    type='email'
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="E-mail"
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
                    inputProps={{ minLength: 6 }}
                    required
                    fullWidth
                    label="Senha (Minimo 6 caracteres)"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <Button
                    type='submit'
                    variant="contained"
                    color="primary"
                    bg='brand.100'>Registrar</Button>
            </Form>
        </div>
    )
}