import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {ContainerFather, StyledLoginMenu }  from './Styled';


export default function LoginScreen() {

    const history = useHistory()

    const goToSignUpSCreen = () => {
        history.push("/signup")
    }

    return (
        <ContainerFather>
            <div>
                <img src={"https://acegif.com/wp-content/gifs/globe-33.gif"} />
            </div>

            <StyledLoginMenu>
                <h2>Login</h2>
                <input type={"email"} placeholder={'Email'}></input>
                <input type={'password'} placeholder={'Senha'}></input>
                <button>Entrar</button>
                <button onClick={goToSignUpSCreen}>Cadastrar</button>
            </StyledLoginMenu>
        </ContainerFather>
    );
};