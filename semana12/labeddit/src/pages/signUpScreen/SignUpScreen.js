import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerFather, SignUpForm} from './Styled';
import { backToLoginPage } from '../../routes/Coordinator'
import useForms from '../../hooks/UseForms';
import { CreateUser } from '../../services/accessRequests';
import { UseUnprotectedPages } from '../../hooks/UseUnprotectedPage';

export default function SignUpScreen() {
    UseUnprotectedPages()

    const history = useHistory()

    const [forms, onChange, clear] = useForms({
        username: "",
        email: "",
        password: ""
    })

    const submitForm = (event) => {
        event.preventDefault()
        CreateUser(forms,clear,history)

    }

    return (
        <ContainerFather>

            <h1>Cadastro</h1>

            <SignUpForm onSubmit={submitForm}>
                <input type={"text"} placeholder={"Nome de usuário"} name={"username"}
                    value={forms.username}
                    onChange={onChange}
                    required>
                </input>

                <input type={"email"} placeholder={'Email'}
                    name={"email"}
                    value={forms.email}
                    onChange={onChange}
                    required>
                </input>

                <input type={'password'} placeholder={'Senha'}
                    name={"password"}
                    value={forms.password}
                    onChange={onChange}
                    required>
                </input>

                <button type={"submit"}>Cadastrar</button>
            </SignUpForm>
            <button onClick={() => backToLoginPage(history)}>Voltar</button>

        </ContainerFather>
    );
};