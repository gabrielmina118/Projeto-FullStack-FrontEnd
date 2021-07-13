import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from 'react-router-dom';
import logo from '../../assets/imagens/frontInstagram.jpg'
import { ImagemLogo, Buttons, Main } from './Style'
import { goToLoginPage, goToRegisterPage } from '../../Routes/Coordinator'
import useUnProtectedPage from "../../Hook/useUnprotectedPage";


export default function HomePage() {
    useUnProtectedPage()
    const history = useHistory();


    return (
        <Main>
            <ImagemLogo src={logo} />
            <Buttons>
                <Button
                    variant="outlined"
                    color="default"
                    style={{ width: 170, height: 52 }}
                    onClick={() => goToRegisterPage(history)}
                    bg='brand.200'>Registrar</Button>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ width: 170, height: 52 }}
                    onClick={() => goToLoginPage(history)}>
                    Entrar
                </Button>
            </Buttons>
        </Main>
    )
}