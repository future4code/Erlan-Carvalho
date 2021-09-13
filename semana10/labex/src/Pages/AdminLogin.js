import React, { useState } from 'react';
import Styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ContainerFataher = Styled.div`
font-size:8vh;
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:3vh;
`
export const StyledInput = Styled.input`
width:40vw;
height:5vh;
`


function AdminLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] = useState ('')

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }


    const changePassword = (event) => {
        setPassword(event.target.value)
    }


    const history = useHistory()

    const backToHomePage = () => {
        history.push('/')
    }



            // "email": "admingenteboa@hotmail.com",
            // "password": "hellolabenuinstructor123"

    const doTheLogin = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/erlan-carvalho-lovelace/login'
        const body = {
            email: email,
            password: password
        }
        axios.post(url, body)
            .then((response) => {
                console.log(response.data.user.id)
                window.localStorage.setItem("token",response.data.token)
                if(!response.data.token){
                    alert('algo deu errado')
                    history.push("/")
                }else if(response.data.token){
                    history.push("/admin-painel")
                }
        

            }).catch((error) => {
                console.log('entrou no erro', error.response)
            })

    }


    return (
        <ContainerFataher>
            <h2>Login de Administrador</h2>
            <StyledInput type='email' placeholder='Email' value={email} onChange={changeEmail}></StyledInput>
            <StyledInput type='password' placeholder='Senha' value={password} onChange=
                {changePassword}></StyledInput>
            <div>
                <button onClick={backToHomePage}>Voltar</button>
                <button onClick={doTheLogin}>Entrar</button>
            </div>
        </ContainerFataher>
    );
};
export default AdminLogin;