import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import useForm from '../../Hook/useForm';
import { goToLoginPage } from '../../Routes/Coordinator';
import { ForgotPassAPi } from './ForgotPassApi';
import { Main,Form,Buttons ,ReturnEmail } from './style';

const ForgotPass = () => {
    const [form, onChange, clear] = useForm({ email: ''})
    const [email,setEmail] = useState();
    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault()
        setEmail(`Estamos enviando uma nova senha para ${form.email}`)
        // ForgotPassAPi(form,history)
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
                <ReturnEmail>{email}</ReturnEmail>
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