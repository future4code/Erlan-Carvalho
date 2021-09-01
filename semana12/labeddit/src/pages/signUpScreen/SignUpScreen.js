import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ContainerFather , ButtonsSection} from './Styled';


export default function SignUpScreen() {

    const history = useHistory()
    
    const backToLoginPage = ()=>{
        history.goBack()
    }

    const CreateUser = () => {
        const url = ""

    }


    return (
        <ContainerFather>
            <h1>Cadastro</h1>
            <input type={"text"} placeholder={"Nome de usuário"}></input>
            <input type={"email"} placeholder={'Email'}></input>
            <input type={'password'} placeholder={'Senha'}></input>
            <ButtonsSection>
            <button>Cadastrar</button>
            <button onClick={backToLoginPage}>Voltar</button>
            </ButtonsSection>
        </ContainerFather>
    );
};