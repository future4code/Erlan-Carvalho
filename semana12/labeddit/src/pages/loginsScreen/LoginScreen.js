import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerFather, StyledLoginMenu, BrandAtLoginPage } from './Styled';
import { goToSignUpScreen } from '../../routes/Coordinator'
import useForms from '../../hooks/UseForms';
import { doTheLogin } from '../../services/accessRequests';
import { UseUnprotectedPages } from '../../hooks/UseUnprotectedPage';

export default function LoginScreen() {

    UseUnprotectedPages()

    const history = useHistory()


    const [forms, onChange, clear] = useForms(
        {
            email: "",
            password: ""
        })

    const submitForm = (event) => {
        event.preventDefault()
        doTheLogin(forms, clear, history)
    }

    return (
        <ContainerFather>
            <div>
                <BrandAtLoginPage>Labeddit</BrandAtLoginPage>
                <img src={"https://acegif.com/wp-content/gifs/globe-33.gif"} alt={"Gif De um planeta em órbita"} />
            </div>

            <StyledLoginMenu>
                <h2>Login</h2>

                <form onSubmit={submitForm}>
                    <input type={"email"} placeholder={'Email'}
                        name={"email"}
                        value={forms.email}
                        onChange={onChange}
                        required>
                    </input>

                    <input type={'password'} placeholder={'Senha'}
                        name={'password'}
                        value={forms.password}
                        onChange={onChange}
                        required>
                    </input>

                    <button type={"submit"}>Entrar</button>
                    <h3>Ou</h3>
                </form>
                <button onClick={() => goToSignUpScreen(history)}>Cadastre-se</button>
            </StyledLoginMenu>
        </ContainerFather>
    );
};