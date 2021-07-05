import React from "react";
import { useHistory } from 'react-router-dom';
import logo from '../../assets/imagens/frontInstagram.jpg'
import { ImagemLogo,Buttons } from './Style'

export default function HomePage() {

    const history = useHistory();
    
    const goToLoginPage = () =>{
        history.push("/login")
    }
    

    const goToRegisterPage = () =>{
        history.push("/register")
    }

    return (
        <div>
            <ImagemLogo src={logo} />
            <Buttons>
                <button type="button" onClick={goToRegisterPage}>Registrar</button>
                <button type="button" onClick={goToLoginPage}>Entrar</button>
            </Buttons>
        </div>
    )
}