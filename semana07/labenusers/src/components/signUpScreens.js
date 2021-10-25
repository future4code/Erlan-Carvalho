import React from 'react';
import Styled from 'styled-components';
import axios from 'axios';

const ContainerFather = Styled.div`
border:solid black 1px;
width:35vw;
height:99.5vh;
margin-left:auto;
margin-right:auto;
background-color:green;`

const StyleOfTheinputsContainer = Styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
input{
width:15vw;
}
button{
    background-color:black;
    color:white;
}`

const TitleContainer = Styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
h1{
    font-size:5vw;
    color:white;
}
button{
    width:20vw;
    height:5vh;
    background-color:black;
    color:white;
}`



class SignUp extends React.Component {
    state = {
        pDigitarNome: "",
        pDigitarEmail: ""
    }

    digitarNome = (event) => {
        this.setState({ pDigitarNome: event.target.value })
    }

    digitarEmail = (event) => {
        this.setState({ pDigitarEmail: event.target.value })
    }


    cadastrar = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.pDigitarNome,
            email: this.state.pDigitarEmail
        }
        //     axios.post(url, body, {
        //         headers:{
        //             Authorization:"erlan-carvalho-lovelace"
        //         }
        //     })

        //   .then((response)=>{
        //        alert('Parabéns! Cadastro feito com sucesso.')
        //       this.setState({pDigitarEmail:"", pDigitarNome:""})
        //   })
        //   .catch((error)=>{
        //       return alert(' ERRO! Já existe usuário com o nome ou email igual')
        //   })
        try {
            await axios.post(url, body, {
                headers: {
                    Authorization: 'erlan-carvalho-lovelace'
                }
            })
            alert("PARABÉNS, Novo Usuário cadastrado com Sucesso!")
            this.setState({ pDigitarEmail: "", pDigitarNome: "" })

        } catch (error) {
            alert(" ERRO! Não foi possível realizar o cadastro, tente novamente")

        }
    }
    render() {
        return (


            <ContainerFather>
                <TitleContainer>
                    <button onClick={this.props.goToUsersSceen}>Ir Para tela de usuários</button>
                    <h1>Cadastro</h1>
                </TitleContainer>
                <div>
                    <StyleOfTheinputsContainer>
                        <input placeholder="email" type="email" name="userName"
                            value={this.state.pDigitarEmail}
                            onChange={this.digitarEmail} />

                        <input placeholder="nome" type="text" name="nome"
                            value={this.state.pDigitarNome}
                            onChange={this.digitarNome} />

                        <button onClick={this.cadastrar}>Cadastrar</button>
                    </StyleOfTheinputsContainer>
                </div>
            </ContainerFather>
        )
    }
}
export default SignUp;