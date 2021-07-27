import React from 'react';
import Styled from 'styled-components';
// import axios from 'axios';

const StyleOfTheFormContainer = Styled.div`
display:flex;
justify-content:center;
flex-direction:row ;

`

class SignUp extends React.Component {
    render() {
        return (


            <div>
                <div>
                <button>ir para a páginna de lista</button>
                </div>
                <StyleOfTheFormContainer>
                <form>
                    <label for="userName">Nome</label>
                    <input type="text" name="userName" />

                    <label for="userEmail">Email</label>
                    <input type="email" name="userEmail" />
                    <button>Salvar</button>
                </form>
                </StyleOfTheFormContainer>
            </div>
        )
    }
}
export default SignUp;