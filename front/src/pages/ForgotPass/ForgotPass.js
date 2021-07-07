import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';
import useForm from '../../Hook/useForm';
import { goToLoginPage } from '../../Routes/Coordinator';
import { Main,Form,Buttons } from './style';

const ForgotPass = () => {
    const [form, onChange, clear] = useForm({ email: ''})

    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form);
        alert(`Uma nova senha foi enviada para ${form.email}`)
        goToLoginPage(history)
    }
    return (
        <Main>
            <h1>Resetar Senha</h1>
            <Form onSubmit={onSubmitForm}>
                <TextField
                    autoFocus
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    type='email'
                    size="normal"
                    required
                    fullWidth
                    label="Email"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <Buttons>
                    <Button
                        type='submit'
                        variant="contained"
                        color="primary"
                        style={{ width: 350, height: 52 }}
                        bg='brand.200'>Recupere senha</Button>
                </Buttons>
            </Form>
        </Main>
    )
}
export default ForgotPass