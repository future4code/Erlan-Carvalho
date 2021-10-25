import axios from 'axios';
import React from 'react';
import Styled from 'styled-components';


const ContainerFatherFromTheUsersScreen = Styled.div`
border:solid black 1px;
width:70vw;
height:99.5vh;
margin-left:auto;
margin-right:auto;
background-color:green;`

const ContainerStyle = Styled.div`
display:flex;
justify-content:center;
text-align:center;
flex-direction:column;
align-items:center;
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

const UsersContainer = Styled.div`
border:1px solid black;
padding:15px;
width:50vw;
display:flex;
justify-content:space-between;
color:white;
font-family:arial ;
font-size:1.75vw;
`

const OutContainerOfTheUsers = Styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`

const DeleteButton = Styled.button`
display:flex;
justify-content:space-evenly;
background-color:black;
color:white
`


class Users extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.getUsersInfo()
    }


    getUsersInfo = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        // axios.get(url, {
        //     headers: {
        //         Authorization: "erlan-carvalho-lovelace"
        //     }
        // })
        //     .then((response) => {
        //         this.setState({ users: response.data })
        //     })
        //     .catch((error) => {
        //         alert('Ocorreu Um problema')
        //     })
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: "erlan-carvalho-lovelace"
                }
            })
            this.setState({ users: response.data })

        } catch (error) {
            alert(error.resposne.data)

        }
    }


    toDeleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "erlan-carvalho-lovelace"
            }
        })
            .then((response) => {
                alert('Usuário deletado com sucesso!')
                this.getUsersInfo()
            })
            .catch((error) => {
                alert("ERRO! Não foi possível deletar o Usuário!")
            })
    }

    render() {

        const usersList = this.state.users.map((dados) => {
            return <UsersContainer key={dados.id}>{dados.name} <DeleteButton onClick={() => this.toDeleteUser(dados.id)}>Deletar</DeleteButton>
            </UsersContainer>

        })
        return (
            <ContainerFatherFromTheUsersScreen>
                <ContainerStyle>
                    <button onClick={this.props.goToSignUpScreen}>Ir Para tela de cadastro</button>
                    <h1>Usuarios cadastrados</h1>
                </ContainerStyle>
                < OutContainerOfTheUsers>
                    {usersList}
                </OutContainerOfTheUsers>
            </ContainerFatherFromTheUsersScreen>
        )
    }
}
export default Users;