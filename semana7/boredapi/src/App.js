import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyleonContainerFather = styled.div`
display:flex;
flex-direction:column;
border:black solid 1px;
justify-content:center;
align-items:center;
font-size:1.75vw;
background-color: yellow;
width:50vw;
height:100%;
padding:0 10px 0 10px;
margin-left:auto;
margin-right:auto;
button{
  background-color:black;
  color:white;
  font-size:2.75vw;
}
`


class App extends React.Component {
  state = {
    activities: {}
  }

  searchActivityWithGet = () => {
    const url = 'https://www.boredapi.com/api/activity/'
    axios.get(url)
      .then((response) => {
        console.log(response.data)
        this.setState({ activities: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  render() {


    return (
      <StyleonContainerFather>
        <h1>Qual a atividade do dia?</h1>
        <button onClick={this.searchActivityWithGet}>Buscar Atividade </button>
        <p><strong>Nome da Atividade</strong>: {this.state.activities.activity}</p>
        <p><strong>Acessibilidade</strong>: {this.state.activities.accessibility}</p>
        <p><strong>Tipo de atividade</strong>:{this.state.activities.type}</p>
        <p><strong>Quantidade de participantes</strong>: {this.state.activities.participants}</p>
        <p><strong>preço</strong>: R${this.state.activities.price}</p>
      </StyleonContainerFather>
    )

  }

}

export default App;
